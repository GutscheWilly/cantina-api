import { ProductRepositoryData } from '../../repositories/product/i-product-repository';

export type ProductServiceData = {
  name: string
  description: string
  price: number
  calories: number
  servingSize: number
}

export interface IProductService {
  create(productData: ProductServiceData): Promise<ProductRepositoryData>
}
