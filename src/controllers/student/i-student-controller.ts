import { FastifyInstance } from 'fastify';

export interface IStudentController {
  create(app: FastifyInstance): void
}
