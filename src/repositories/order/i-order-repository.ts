import { OrderServiceData } from '../../services/order/i-order-service';

export type OrderRepositoryData = {
  id: number
  status: string
  pickupTime: string
  createdAt: Date
  userId: number
};

export interface IOrderRepository {
  create(orderData: OrderServiceData): Promise<OrderRepositoryData>
  getAllFromUserId(userId: number): Promise<OrderRepositoryData[]>
}
