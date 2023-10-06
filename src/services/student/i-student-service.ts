import { StudentRepositoryData } from '../../repositories/student/i-student-repository';

export type StudentServiceData = {
  registration: string,
  class: string,
  spendingLimit: number,
  school: string,
  userId: number,
}

export interface IStudentService {
  create(studentData: StudentServiceData): Promise<StudentRepositoryData>
}
