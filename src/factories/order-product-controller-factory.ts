import { OrderProductController } from '../controllers/order-product/order-product-controller';
import { OrderProductRepository } from '../repositories/order-product/order-product-repository';
import { OrderRepository } from '../repositories/order/order-repository';
import { ProductRepository } from '../repositories/product/product-repository';
import { OrderProductService } from '../services/order-product/order-product-service';

export class OrderProductControllerFactory {
  static create(): OrderProductController {
    const orderProductRepository = new OrderProductRepository();
    const orderRepository = new OrderRepository();
    const productRepository = new ProductRepository();
    const orderProductService = new OrderProductService(orderProductRepository, orderRepository, productRepository);
    return new OrderProductController(orderProductService);
  }
}
