

const validate=(input) => {
  let errors = {};
  // Validacion de Email
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(input.email))
    errors.email = "Debes ingresar un email valido";
  if (!input.email) errors.email = "Debes ingresar un email";
  if (input.email.length > 35)
    errors.email = "No ingrese mas de 35 caracteres";

  // Validacion de Password
  const regexNumbers = new RegExp("[0-9]");
  if (!regexNumbers.test(input.password)) errors.password = "¡Debe ingresar al menos un número!";
  if (input.password.length < 6) errors.password = "¡Debe ingresar mas de 5 carácteres!";


  return errors;
};

export default validate;
