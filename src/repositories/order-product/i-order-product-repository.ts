import { OrderProductServiceData } from '../../services/order-product/i-order-product-service';
import { ProductRepositoryData } from '../product/i-product-repository';

export type OrderProductRepositoryData = {
  id: number
  orderId: number
  productId: number
  quantity: number
  Product?: ProductRepositoryData
}

export interface IOrderProductRepository {
  create(orderProductData: OrderProductServiceData): Promise<OrderProductRepositoryData>
}
