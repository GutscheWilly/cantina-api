import { IProductRestrictionRepository, ProductRestrictionRepositoryData } from './i-product-restriction';
import { prisma } from '../../libs/prisma';

export class ProductRestrictionRepository implements IProductRestrictionRepository {
  async create(studentId: number, productId: number): Promise<ProductRestrictionRepositoryData> {
    return await prisma.productRestriction.create({
      data: {
        studentId,
        productId,
      }
    });
  }
}
