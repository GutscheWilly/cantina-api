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
  login(login: string, password: string): Promise<UserRepositoryData>
  delete(id: number): Promise<void>
  update(id: number, userData: { name?: string | undefined, password?: string | undefined }): Promise<void>
  transaction(id: number, value: number): Promise<void>
}
