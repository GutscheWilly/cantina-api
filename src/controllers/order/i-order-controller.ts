import { FastifyInstance } from 'fastify';

export interface IOrderController {
  create(app: FastifyInstance): void
  getAllFromUserId(app: FastifyInstance): void
} 
