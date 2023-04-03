'use strict';

const typesOfErros = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
  'customError',
];

const errorMessages = {
  nome: {
    valueMissing: 'O campo "nome" não pode estar vazio.',
    patternMismatch: 'Por favor, preencha um nome válido.',
    tooShort: 'Por favor, preencha um nome válido.',
  },
  email: {
    valueMissing: 'O campo "e-mail" não pode estar vazio.',
    typeMismatch: 'Por favor, preencha um email válido.',
    tooShort: 'Por favor, preencha um e-mail válido.',
  },
  rg: {
    valueMissing: 'O campo "RG" não pode estar vazio.',
    patternMismatch: 'Por favor, preencha um RG válido.',
    tooShort: 'O campo de RG não tem caracteres suficientes.',
  },
  cpf: {
    valueMissing: 'O campo "CPF" não pode estar vazio.',
    patternMismatch: 'Por favor, preencha um CPF válido.',
    customError: 'O CPF digitado não existe.',
    tooShort: 'O campo de CPF não tem caracteres suficientes.',
  },
  aniversario: {
    valueMissing: 'O campo "data de nascimento" não pode estar vazio.',
    customError: 'Você deve ter mais que 18 anos para se cadastrar.',
  },
  termos: {
    valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
  },
};

export const errorHandling = { typesOfErros, errorMessages };
