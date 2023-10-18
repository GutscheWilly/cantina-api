import { ProductServiceData } from '../../services/product/i-product-service';
import { IProductRepository, ProductRepositoryData } from './i-product-repository';
import { prisma } from '../../libs/prisma';

export class ProductRepository implements IProductRepository {
  async create(productData: ProductServiceData): Promise<ProductRepositoryData> {
    const {
      name,
      description,
      price,
      calories,
      servingSize,
    } = productData;

    return await prisma.product.create({
      data: {
        name,
        description,
        price,
        calories,
        servingSize,
      }
    });
  }

  async findById(id: number): Promise<ProductRepositoryData | null> {
    return await prisma.product.findUnique({
      where: {
        id
      }
    });
  }
}
