import { StudentServiceData } from '../../services/student/i-student-service';
import { IStudentRepository, StudentRepositoryData } from './i-student-repository';
import { prisma } from '../../libs/prisma';

export class StudentRepository implements IStudentRepository {
  async create(studentData: StudentServiceData): Promise<StudentRepositoryData> {
    const {
      registration,
      class: string,
      spendingLimit,
      school,
      userId,
    } = studentData;

    return await prisma.student.create({
      data: {
        registration,
        class: string,
        spendingLimit,
        school,
        User: {
          connect: {
            id: userId
          }
        }
      },
      include: {
        User: true
      }
    });
  }

  async findByUserId(userId: number): Promise<StudentRepositoryData | null> {
    return await prisma.student.findUnique({
      where: {
        userId
      },
      include: {
        User: true
      }
    });
  }
}
