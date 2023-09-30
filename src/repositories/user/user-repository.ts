import { IUserRepository, UserRepositoryData } from './i-user-repository';
import { prisma } from '../../libs/prisma';
import { UserServiceData } from '../../services/user/i-user-service';

export class UserRepository implements IUserRepository {
  async create(userData: UserServiceData): Promise<UserRepositoryData> {
    const {
      name,
      cpf,
      email,
      login,
      password
    } = userData;

    return await prisma.user.create({
      data: {
        name,
        cpf,
        email,
        login,
        password
      }
    });
  }
}
