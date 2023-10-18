import { OrderServiceData } from '../../services/order/i-order-service';
import { OrderProductRepositoryData } from '../order-product/i-order-product-repository';

export type OrderRepositoryData = {
  id: number
  status: string
  pickupTime: string
  createdAt: Date
  userId: number
  Products: OrderProductRepositoryData[]
};

export interface IOrderRepository {
  create(orderData: OrderServiceData): Promise<OrderRepositoryData>
  getAllFromUserId(userId: number): Promise<OrderRepositoryData[]>
  findById(id: number): Promise<OrderRepositoryData | null>
}
