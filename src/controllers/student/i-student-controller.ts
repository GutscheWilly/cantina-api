import { FastifyInstance } from 'fastify';

export interface IStudentController {
  create(app: FastifyInstance): void
  update(app: FastifyInstance): void
}
