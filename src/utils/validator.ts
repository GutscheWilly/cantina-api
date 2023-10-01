import * as EmailValidator from 'email-validator';
import { cpf } from 'cpf-cnpj-validator';

export const invalidEmail = (email: string): boolean => !EmailValidator.validate(email);

export const invalidCpf = (_cpf: string): boolean => !cpf.isValid(_cpf);
