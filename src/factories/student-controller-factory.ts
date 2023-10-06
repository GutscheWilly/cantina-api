import { StudentController } from '../controllers/student/student-controller';
import { StudentRepository } from '../repositories/student/student-repository';
import { UserRepository } from '../repositories/user/user-repository';
import { StudentService } from '../services/student/student-service';

export class StudentControllerFactory {
  static create(): StudentController {
    const studentRepository = new StudentRepository();
    const userRepository = new UserRepository();
    const studentService = new StudentService(studentRepository, userRepository);
    return new StudentController(studentService);
  }
}
