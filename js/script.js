'use strict';
import { masks } from './inputMasks.js';
import { errorHandling } from './inputErrors.js';
import isValidCPF from './cpfValidator.js';
import has18Years from './ageValidator.js';

const $formFields = document.querySelectorAll('[required]');
const $cpf = document.querySelector('#cpf');

// APPLY INPUT MASKS
$cpf.addEventListener('input', () => {
  $cpf.value = masks.setCpfMask($cpf.value);
});

// APPLY VALIDATIONS
$formFields.forEach((field) => {
  field.addEventListener('blur', () => {
    validadeField(field);
  });
  field.addEventListener('invalid', (e) => e.preventDefault());
});

function validadeField(input) {
  input.setCustomValidity('');

  switch (input.name) {
    case 'cpf':
      if (!isValidCPF(input)) input.setCustomValidity('O CPF não é válido.');
      break;

    case 'aniversario':
      if (!has18Years(input))
        input.setCustomValidity('O usuário não tem 18 anos');
      break;

    default:
      break;
  }

  printErrorMessage(input);
}

function printErrorMessage(input) {
  let message = '';

  errorHandling.typesOfErros.forEach((error) => {
    if (input.validity[error]) {
      message = errorHandling.errorMessages[input.name][error];
    }
  });

  const $errorMessage = input.parentNode.querySelector('.mensagem-erro');
  const $inputValidator = input.checkValidity();

  if (!$inputValidator) {
    $errorMessage.textContent = message;
  } else {
    $errorMessage.textContent = '';
  }
}
