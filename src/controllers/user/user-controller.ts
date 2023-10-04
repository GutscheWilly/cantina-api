import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { IUserController } from './i-user-controller';
import { IUserService } from '../../services/user/i-user-service';

export class UserController implements IUserController {
  constructor(
    private userService: IUserService
  ) {}

  async create(app: FastifyInstance) {
    const bodySchema = z.object({
      name: z.string(),
      cpf: z.string(),
      email: z.string(),
      login: z.string(),
      password: z.string(),
    });

    app.post('/users/create', async (request, response) => {
      const userData = bodySchema.parse(request.body);

      try {
        const userCreated = await this.userService.create(userData);
        return response.status(201).send({ user: userCreated });
      }
      catch (error) {
        return response.status(400).send(error);
      }
    });
  }

  async login(app: FastifyInstance) {
    const bodySchema = z.object({
      login: z.string(),
      password: z.string(),
    });

    app.post('/users/login', async (request, response) => {
      const {
        login,
        password
      } = bodySchema.parse(request.body);

      try {
        const user = await this.userService.login(login, password);
        return response.status(201).send({ user: user });
      }
      catch (error) {
        return response.status(400).send(error);
      }
    });
  }

  async delete(app: FastifyInstance) {
    const paramsSchema = z.object({
      id: z.string().transform( id => parseInt(id) ),
    });

    app.delete('/users/:id/delete', async (request, response) => {
      const { id } = paramsSchema.parse(request.params);

      try {
        await this.userService.delete(id);
        return response.status(204).send();
      }
      catch (error) {
        return response.status(400).send(error);
      }
    });
  }

  async update(app: FastifyInstance) {
    const paramsSchema = z.object({
      id: z.string().transform( id => parseInt(id) ),
    });

    const bodySchema = z.object({
      name: z.string().optional(),
      password: z.string().optional(),
    });

    app.put('/users/:id/update', async (request, response) => {
      const { id } = paramsSchema.parse(request.params);
      const userData = bodySchema.parse(request.body);

      try {
        await this.userService.update(id, userData);
        return response.status(204).send();
      }
      catch (error) {
        return response.status(400).send(error);
      }
    });
  }
}
