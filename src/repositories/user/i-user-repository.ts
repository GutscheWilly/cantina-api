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
  findById(id: number): Promise<UserRepositoryData | null>
  findByEmail(email: string): Promise<UserRepositoryData | null>
  findByCpf(cpf: string): Promise<UserRepositoryData | null>
  findByLogin(login: string): Promise<UserRepositoryData | null>
  delete(id: number): Promise<void>
}
