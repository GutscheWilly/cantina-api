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
  update(id: number, studentData: { registration?: string | undefined, class?: string | undefined, spendingLimit?: number | undefined, school?: string | undefined }): Promise<void>
}
