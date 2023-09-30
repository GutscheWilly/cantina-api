import { UserController } from '../controllers/user/user-controller';
import { UserRepository } from '../repositories/user/user-repository';
import { UserService } from '../services/user/user-service';

export class UserControllerFactory {
  static create(): UserController {
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    return new UserController(userService);
  }
}
