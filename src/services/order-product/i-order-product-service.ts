import { OrderProductRepositoryData } from '../../repositories/order-product/i-order-product-repository';

export type OrderProductServiceData = {
  orderId: number
  productId: number
  quantity: number
}

export interface IOrderProductService {
  create(orderProductData: OrderProductServiceData): Promise<OrderProductRepositoryData>
}
