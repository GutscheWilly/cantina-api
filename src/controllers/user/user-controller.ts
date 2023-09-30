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
}
