import { IProductRestrictionRepository } from '../../repositories/product-restriction/i-product-restriction';
import { IProductRestrictionService } from './i-product-restriction-service';

export class ProductRestrictionService implements IProductRestrictionService {
  constructor(
    private productRestrictionRepository: IProductRestrictionRepository
  ) {}

  async create(studentId: number, productId: number) {
    return await this.productRestrictionRepository.create(studentId, productId);
  }
}
