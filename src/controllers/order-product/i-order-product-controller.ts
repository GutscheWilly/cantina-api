import { FastifyInstance } from 'fastify';

export interface IOrderProductController {
  create(app: FastifyInstance): void
}
