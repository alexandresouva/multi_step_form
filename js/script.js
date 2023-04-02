'use strict';
import { masks } from './inputMasks.js';
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
  field.addEventListener('blur', () => validadeField(field));
});

function validadeField(input) {
  switch (input.name) {
    case 'cpf':
      isValidCPF(input);
      break;

    case 'aniversario':
      has18Years(input);
      break;

    default:
      break;
  }
}
