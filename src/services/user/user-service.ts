import { UserRepositoryData, IUserRepository } from '../../repositories/user/i-user-repository';
import { CpfInvalidError } from './errors/cpf-invalid-error';
import { EmailInvalidError } from './errors/email-invalid-error';
import { IUserService, UserServiceData } from './i-user-service';
import { invalidEmail, invalidCpf } from '../../utils/validator';
import { UserAlreadyRegisteredError } from './errors/user-already-registered-error';
import { formatCpf } from '../../utils/formatter';
import { cryptPassword } from '../../utils/crypt-password';

export class UserService implements IUserService {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async create(userData: UserServiceData): Promise<UserRepositoryData> {
    if (invalidEmail(userData.email)) {
      throw new EmailInvalidError();
    }

    if (invalidCpf(userData.cpf)) {
      throw new CpfInvalidError();
    }

    userData.cpf = formatCpf(userData.cpf);

    const userAlreadyRegistered = async () => {
      const [
        foundByEmail,
        foundByCpf,
        foundByLogin
      ] = await Promise.all([
        this.userRepository.findByEmail(userData.email),
        this.userRepository.findByCpf(userData.cpf),
        this.userRepository.findByLogin(userData.login),
      ]);

      return foundByEmail || foundByCpf || foundByLogin;
    };

    if (await userAlreadyRegistered()) {
      throw new UserAlreadyRegisteredError();
    }

    userData.password = await cryptPassword(userData.password);

    return await this.userRepository.create(userData);
  }
}