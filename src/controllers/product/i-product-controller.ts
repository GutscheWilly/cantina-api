import { FastifyInstance } from 'fastify';

export interface IProductController {
  create(app: FastifyInstance): void
}
