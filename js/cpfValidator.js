'use strict';

export default function isValidCPF(field) {
  const cpf = field.value.replace(/\.|-/g, '');

  const validateCPF =
    !hasOnlyRepeatedNumbers(cpf) &&
    validateFirstDigit(cpf) &&
    validateSecondDigit(cpf);

  return validateCPF;
}

function hasOnlyRepeatedNumbers(cpf) {
  const repeatedNumbers = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ];

  return repeatedNumbers.includes(cpf);
}

function validateFirstDigit(cpf) {
  let sum = 0;
  let multiplier = 10;
  let remainder = 0;

  // The first nine CPF digits
  for (let i = 0; i < 9; i++) {
    sum += cpf[i] * multiplier;
    multiplier--;
  }
  remainder = (sum * 10) % 11;

  if (remainder == 10 || remainder == 11) {
    remainder = 0;
  }

  return remainder == cpf[9];
}

function validateSecondDigit(cpf) {
  let sum = 0;
  let multiplier = 11;
  let remainder = 0;

  // The first ten CPF digits
  for (let i = 0; i < 10; i++) {
    sum += cpf[i] * multiplier;
    multiplier--;
  }
  remainder = (sum * 10) % 11;

  if (remainder == 10 || remainder == 11) {
    remainder = 0;
  }

  return remainder == cpf[10];
}
