import { cpf } from 'cpf-cnpj-validator';

export const formatCpf = (_cpf: string): string => cpf.format(_cpf);
