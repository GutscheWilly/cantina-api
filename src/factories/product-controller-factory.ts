import { ProductController } from '../controllers/product/product-controller';
import { ProductRepository } from '../repositories/product/product-repository';
import { ProductService } from '../services/product/product-service';

export class ProductControllerFactory {
  static create(): ProductController {
    const productRepository = new ProductRepository();
    const productService = new ProductService(productRepository);
    return new ProductController(productService);
  }
}
