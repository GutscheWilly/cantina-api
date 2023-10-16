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

  async update(app: FastifyInstance) {
    const paramsSchema = z.object({
      id: z.string().transform( id => parseInt(id) ),
    });

    const bodySchema = z.object({
      registration: z.string().optional(),
      class: z.string().optional(),
      spendingLimit: z.number().optional(),
      school: z.string().optional(),
    });

    app.put('/students/:id/update', async (request, response) => {
      const { id } = paramsSchema.parse(request.params);
      const studentData = bodySchema.parse(request.body);

      try {
        await this.studentService.update(id, studentData);
        return response.status(204).send();
      }
      catch (error) {
        return response.status(400).send(error);
      }
    });
  }
}
