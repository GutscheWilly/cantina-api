import { OrderProductServiceData } from '../../services/order-product/i-order-product-service';
import { IOrderProductRepository, OrderProductRepositoryData } from './i-order-product-repository';
import { prisma } from '../../libs/prisma';

export class OrderProductRepository implements IOrderProductRepository {
  async create(orderProductData: OrderProductServiceData): Promise<OrderProductRepositoryData> {
    const {
      orderId,
      productId,
      quantity,
    } = orderProductData;

    return await prisma.order_Product.create({
      data: {
        orderId,
        productId,
        quantity,
      },
      include: {
        Product: true
      }
    });
  }
}
