import { FastifyInstance } from 'fastify';
import { IOrderProductController } from './i-order-product-controller';
import { z } from 'zod';
import { IOrderProductService } from '../../services/order-product/i-order-product-service';

export class OrderProductController implements IOrderProductController {
  constructor(
    private orderProductService: IOrderProductService
  ) {}

  async create(app: FastifyInstance) {
    const bodySchema = z.object({
      orderId: z.number(),
      productId: z.number(),
      quantity: z.number(),
    });

    app.post('/order-product/create', async (request, response) => {
      const orderProductData = bodySchema.parse(request.body);

      try {
        const orderProductCreated = await this.orderProductService.create(orderProductData);
        return response.status(201).send(orderProductCreated);
      }
      catch (error) {
        return response.status(400).send(error);
      }
    });
  }
}
