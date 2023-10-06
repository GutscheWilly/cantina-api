import { FastifyInstance } from 'fastify';
import { IStudentController } from './i-student-controller';
import { z } from 'zod';
import { IStudentService } from '../../services/student/i-student-service';

export class StudentController implements IStudentController {
  constructor(
    private studentService: IStudentService
  ) {}

  async create(app: FastifyInstance) {
    const bodySchema = z.object({
      registration: z.string(),
      class: z.string(),
      spendingLimit: z.number(),
      school: z.string(),
      userId: z.number().int(),
    });

    app.post('/students/create', async (request, response) => {
      const studentData = bodySchema.parse(request.body);

      try {
        const createdStudent = await this.studentService.create(studentData);
        return response.status(201).send({ student: createdStudent });
      }
      catch (error) {
        return response.status(400).send(error);
      }
    });
  }
}
