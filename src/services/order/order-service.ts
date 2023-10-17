import { IOrderRepository, OrderRepositoryData } from '../../repositories/order/i-order-repository';
import { IUserRepository } from '../../repositories/user/i-user-repository';
import { UserNotFoundError } from '../user/errors/user-not-found-error';
import { IOrderService, OrderServiceData } from './i-order-service';

export class OrderService implements IOrderService {
  constructor(
    private orderRepository: IOrderRepository,
    private userRepository: IUserRepository
  ) {}

  async create(orderData: OrderServiceData): Promise<OrderRepositoryData> {
    const user = await this.userRepository.findById(orderData.userId);

    if (!user) {
      throw new UserNotFoundError();
    }

    return await this.orderRepository.create(orderData);
  }

  async getAllFromUserId(userId: number): Promise<OrderRepositoryData[]> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new UserNotFoundError();
    }

    return await this.orderRepository.getAllFromUserId(userId);
  }
}
