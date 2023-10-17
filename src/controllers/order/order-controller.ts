import { FastifyInstance } from 'fastify';
import { IOrderService } from '../../services/order/i-order-service';
import { IOrderController } from './i-order-controller';
import { z } from 'zod';

export class OrderController implements IOrderController {
  constructor(
    private orderService: IOrderService
  ) {}

  async create(app: FastifyInstance) {
    const bodySchema = z.object({
      status: z.string(),
      pickupTime: z.string(),
      userId: z.number(),
    });

    app.post('/orders/create', async (request, response) => {
      const orderData = bodySchema.parse(request.body);

      try {
        const order = await this.orderService.create(orderData);
        return response.status(201).send({ order: order });
      }
      catch (error) {
        return response.status(400).send(error);
      }
    });
  }
}
