import { OrderController } from '../controllers/order/order-controller';
import { OrderRepository } from '../repositories/order/order-repository';
import { UserRepository } from '../repositories/user/user-repository';
import { OrderService } from '../services/order/order-service';

export class OrderControllerFactory {
  static create(): OrderController {
    const orderRepository = new OrderRepository();
    const userRepository = new UserRepository();
    const orderService = new OrderService(orderRepository, userRepository);
    return new OrderController(orderService);
  }
}
