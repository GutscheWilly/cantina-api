export class PasswordIncorrectError extends Error {
  constructor() {
    super('Incorrect password!');
  }
}
