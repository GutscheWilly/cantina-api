import { StudentServiceData } from '../../services/student/i-student-service';
import { UserRepositoryData } from '../user/i-user-repository';

export type StudentRepositoryData = {
  id: number,
  registration: string,
  class: string,
  spendingLimit: number,
  school: string,
  createdAt: Date,
  userId: number,
  User: UserRepositoryData 
}

export interface IStudentRepository {
  create(studentData: StudentServiceData): Promise<StudentRepositoryData>
  findByUserId(userId: number): Promise<StudentRepositoryData | null>
}
