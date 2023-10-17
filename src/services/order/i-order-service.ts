import { OrderRepositoryData } from '../../repositories/order/i-order-repository';

export type OrderServiceData = {
  status: string
  pickupTime: string
  userId: number
};

export interface IOrderService {
  create(orderData: OrderServiceData): Promise<OrderRepositoryData>
}
