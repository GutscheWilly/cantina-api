import { IOrderRepository, OrderRepositoryData } from './i-order-repository';
import { prisma } from '../../libs/prisma'; 
import { OrderServiceData } from '../../services/order/i-order-service';

export class OrderRepository implements IOrderRepository {
  async create(orderData: OrderServiceData): Promise<OrderRepositoryData> {
    const {
      status,
      pickupTime,
      userId
    } = orderData;

    return await prisma.order.create({
      data: {
        status,
        pickupTime,
        User: {
          connect: {
            id: userId
          }
        }
      }
    });
  }
}
