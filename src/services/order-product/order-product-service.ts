import { IOrderProductRepository, OrderProductRepositoryData } from '../../repositories/order-product/i-order-product-repository';
import { IOrderRepository } from '../../repositories/order/i-order-repository';
import { IProductRepository } from '../../repositories/product/i-product-repository';
import { OrderNotFoundError } from '../order/errors/order-not-found-error';
import { ProductNotFoundError } from '../product/errors/product-not-found-error';
import { OrderProductServiceData } from './i-order-product-service';

export class OrderProductService implements IOrderProductRepository {
  constructor(
    private orderProductRepository: IOrderProductRepository,
    private orderRepository: IOrderRepository,
    private productRepository: IProductRepository
  ) {}

  async create(orderProductData: OrderProductServiceData): Promise<OrderProductRepositoryData> {
    const {
      orderId,
      productId,
    } = orderProductData;

    const [
      order,
      product,
    ] = await Promise.all([
      this.orderRepository.findById(orderId),
      this.productRepository.findById(productId)
    ]);

    if (!order) {
      throw new OrderNotFoundError();
    }

    if (!product) {
      throw new ProductNotFoundError();
    }

    return await this.orderProductRepository.create(orderProductData);
  }
}
