import { FastifyInstance } from 'fastify';

export interface IProductRestrictionController {
  create(app: FastifyInstance): void
}
