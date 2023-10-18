import { FastifyInstance } from 'fastify';
import { IProductController } from './i-product-controller';
import { z } from 'zod';
import { IProductService } from '../../services/product/i-product-service';

export class ProductController implements IProductController {
  constructor(
    private productService: IProductService
  ) {}

  async create(app: FastifyInstance) {
    const bodySchema = z.object({
      name: z.string(),
      description: z.string(),
      price: z.number(),
      calories: z.number(),
      servingSize: z.number(),
    });

    app.post('/products/create', async (request, response) => {
      const productData = bodySchema.parse(request.body);

      try {
        const productCreated = await this.productService.create(productData);
        return response.status(201).send({ product: productCreated });
      }
      catch (error) {
        return response.status(400).send(error);
      }
    });
  }
}
