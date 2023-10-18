import { ProductServiceData } from '../../services/product/i-product-service';

export type ProductRepositoryData = {
  id: number
  name: string
  description: string
  price: number
  calories: number
  servingSize: number
  createdAt: Date
}

export interface IProductRepository {
  create(productData: ProductServiceData): Promise<ProductRepositoryData>
  findById(id: number): Promise<ProductRepositoryData | null>
}
