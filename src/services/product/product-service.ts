import { IProductRepository, ProductRepositoryData } from '../../repositories/product/i-product-repository';
import { IProductService, ProductServiceData } from './i-product-service';

export class ProductService implements IProductService {
  constructor(
    private productRepository: IProductRepository
  ) {}

  async create(productData: ProductServiceData): Promise<ProductRepositoryData> {
    return await this.productRepository.create(productData);
  }
}
