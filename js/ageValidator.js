export default function has18Years(field) {
  const dateOfBirth = new Date(field.value);
  const currentDate = new Date();

  let yearsDiff = currentDate.getUTCFullYear() - dateOfBirth.getUTCFullYear();
  const monthsDiff = currentDate.getUTCMonth() - dateOfBirth.getUTCMonth();
  const daysDiff = currentDate.getUTCDate() - dateOfBirth.getUTCDate();

  if (monthsDiff < 0 || daysDiff < 0) yearsDiff--;

  return yearsDiff >= 18;
}

// A second way to calculate
/*
function validateAge(dateOfBirth) {
  const currentDate = new Date();
  const dateOfBirthPlus18 = new Date(
    dateOfBirth.getUTCFullYear() + 18,
    dateOfBirth.getUTCMonth(),
    dateOfBirth.getUTCDate()
  );

  return currentDate > dateOfBirthPlus18;
}
*/
