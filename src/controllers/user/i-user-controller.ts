import { FastifyInstance } from 'fastify';

export interface IUserController {
  create(app: FastifyInstance): void
}
