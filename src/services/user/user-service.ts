import { UserRepositoryData, IUserRepository } from '../../repositories/user/i-user-repository';
import { IUserService, UserServiceData } from './i-user-service';

export class UserService implements IUserService {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async create(userData: UserServiceData): Promise<UserRepositoryData> {
    return await this.userRepository.create(userData);
  }
}
