export class UserAssociatedStudentError extends Error {
  constructor() {
    super('User already associated with a student!');
  }
}
