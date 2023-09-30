import { UserRepositoryData } from '../../repositories/user/i-user-repository';

export type UserServiceData = {
  name: string,
  cpf: string,
  email: string,
  login: string,
  password: string,
}

export interface IUserService {
  create(userData: UserServiceData): Promise<UserRepositoryData>
}
