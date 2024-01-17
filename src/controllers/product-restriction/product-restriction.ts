import { FastifyInstance } from 'fastify/types/instance';
import { IProductRestrictionService } from '../../services/product-restriction/i-product-restriction-service';
import { IProductRestrictionController } from './i-product-restriction';
import { z } from 'zod';

export class ProductRestrictionController implements IProductRestrictionController {
  constructor(
    private productRestrictionService: IProductRestrictionService
  ) {}

  async create(app: FastifyInstance) {
    const bodySchema = z.object({
      studentId: z.number(),
      productId: z.number()
    });

    app.post('/product-restriction/create', async (request, response) => {
      const { 
        studentId,
        productId
      } = bodySchema.parse(request.body);

      try {
        const productRestrictionCreated = await this.productRestrictionService.create(studentId, productId);
        return response.status(201).send(productRestrictionCreated);
      }
      catch (error) {
        return response.status(400).send(error);
      }
    });
  }
}
