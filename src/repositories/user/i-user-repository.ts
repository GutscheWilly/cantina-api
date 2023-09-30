import { UserServiceData } from '../../services/user/i-user-service';

export type UserRepositoryData = {
  id: number,
  name: string,
  cpf: string,
  email: string,
  login: string,
  password: string,
  createdAt: Date,
  credit: number,
}

export interface IUserRepository {
  create(userData: UserServiceData): Promise<UserRepositoryData>
}
