import { ProductRestrictionRepositoryData } from '../../repositories/product-restriction/i-product-restriction';

export interface IProductRestrictionService {
  create(studentId: number, productId: number): Promise<ProductRestrictionRepositoryData>
}
