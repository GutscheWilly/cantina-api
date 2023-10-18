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
      },
      include: {
        Products: true
      }
    });
  }

  async getAllFromUserId(userId: number): Promise<OrderRepositoryData[]> {
    return await prisma.order.findMany({
      where: {
        userId
      },
      include: {
        Products: {
          include: {
            Product: true
          }
        }
      }
    });
  }

  async findById(id: number): Promise<OrderRepositoryData | null> {
    return await prisma.order.findUnique({
      where: {
        id
      },
      include: {
        Products: true
      }
    });  
  }
}
