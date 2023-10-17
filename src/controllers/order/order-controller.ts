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

  async getAllFromUserId(app: FastifyInstance) {
    const paramsSchema = z.object({
      userId: z.string().transform( id => parseInt(id) )
    });

    app.get('/orders/getAll/:userId', async (request, response) => {
      const { userId } = paramsSchema.parse(request.params);

      try {
        const orders = await this.orderService.getAllFromUserId(userId);
        return response.status(200).send({ orders: orders });
      }
      catch (error) {
        return response.status(400).send(error);
      }
    });
  }
}
