import { FastifyInstance } from 'fastify';

export interface IUserController {
  create(app: FastifyInstance): void
  login(app: FastifyInstance): void
  delete(app: FastifyInstance): void
  update(app: FastifyInstance): void
}
