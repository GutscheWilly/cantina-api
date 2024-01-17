import { ProductRestrictionController } from '../controllers/product-restriction/product-restriction';
import { ProductRestrictionRepository } from '../repositories/product-restriction/product-restriction-repository';
import { ProductRestrictionService } from '../services/product-restriction/product-restriction-service';

export class ProductRestrictionFactory {
  static create(): ProductRestrictionController {
    const productRestrictionRepository = new ProductRestrictionRepository();
    const productRestrictionService = new ProductRestrictionService(productRestrictionRepository);
    return new ProductRestrictionController(productRestrictionService);
  }
}
