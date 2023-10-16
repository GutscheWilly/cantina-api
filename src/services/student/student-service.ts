import { IStudentRepository, StudentRepositoryData } from '../../repositories/student/i-student-repository';
import { IUserRepository } from '../../repositories/user/i-user-repository';
import { UserNotFoundError } from '../user/errors/user-not-found-error';
import { SpendingLimitError } from './errors/spending-limit-error';
import { StudentNotFoundError } from './errors/student-not-found-error';
import { UserAssociatedStudentError } from './errors/user-associated-student-error';
import { IStudentService, StudentServiceData } from './i-student-service';

export class StudentService implements IStudentService {
  constructor(
    private studentRepository: IStudentRepository,
    private userRepository: IUserRepository
  ) {}

  async create(studentData: StudentServiceData): Promise<StudentRepositoryData> {
    const user = await this.userRepository.findById(studentData.userId);

    if (!user) {
      throw new UserNotFoundError();
    }

    const userAssociatedStudent = await this.studentRepository.findByUserId(studentData.userId);

    if (userAssociatedStudent) {
      throw new UserAssociatedStudentError();
    }

    const invalidSpendingLimit = studentData.spendingLimit < 0;

    if (invalidSpendingLimit) {
      throw new SpendingLimitError();
    }

    return await this.studentRepository.create(studentData);
  }

  async update(id: number, studentData: { registration?: string | undefined, class?: string | undefined, spendingLimit?: number | undefined, school?: string | undefined }): Promise<void> {
    const student = await this.studentRepository.findById(id);

    if (!student) {
      throw new StudentNotFoundError();
    }

    await this.studentRepository.update(id, studentData);
  }
}
