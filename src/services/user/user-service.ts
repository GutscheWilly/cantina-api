import { UserRepositoryData, IUserRepository } from '../../repositories/user/i-user-repository';
import { CpfInvalidError } from './errors/cpf-invalid-error';
import { EmailInvalidError } from './errors/email-invalid-error';
import { IUserService, UserServiceData } from './i-user-service';
import { invalidEmail, invalidCpf } from '../../utils/validator';
import { UserAlreadyRegisteredError } from './errors/user-already-registered-error';
import { formatCpf } from '../../utils/formatter';
import { comparePassword, cryptPassword } from '../../utils/crypt-password';
import { UserNotFoundError } from './errors/user-not-found-error';
import { PasswordIncorrectError } from './errors/password-incorrect-error';
import { TransactionInvalidError } from './errors/transaction-invalid-error';

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

  async login(login: string, password: string): Promise<UserRepositoryData> {
    const user = await this.userRepository.findByLogin(login);

    if (!user) {
      throw new UserNotFoundError();
    }

    const validPassword = await comparePassword(password, user.password);

    if (!validPassword) {
      throw new PasswordIncorrectError();
    }

    return user;
  }

  async delete(id: number): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new UserNotFoundError();
    }

    await this.userRepository.delete(id);
  }

  async update(id: number, userData: { name?: string | undefined, password?: string | undefined }): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new UserNotFoundError();
    }

    if (userData.password) {
      userData.password = await cryptPassword(userData.password);
    }

    await this.userRepository.update(id, userData);
  }

  async transaction(id: number, value: number): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new UserNotFoundError();
    }

    const creditAfterTransaction = user.credit + value;
    const invalidTransaction = creditAfterTransaction < 0;

    if (invalidTransaction) {
      throw new TransactionInvalidError();
    }

    await this.userRepository.transaction(id, creditAfterTransaction);
  }
}
