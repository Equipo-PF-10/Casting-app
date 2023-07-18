const validationInputs = (input) => {
  let errors = {};

  const regexNumbers = new RegExp("[0-9]");

  // Validacion de Name
  if (!input.name) errors.name = "Debe ingresar un nombre";
  if (regexNumbers.test(input.name)) errors.name = "El nombre no puede contener numeros";

  // Validacion de Email
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(input.email)) errors.email = "Debes ingresar un email valido";
  if (!input.email) errors.email = "¡Debes ingresar un email!";
  if (input.email.length > 35) errors.email = "¡El email no debe contener mas de 35 caracteres!";

  // Validacion de Password
  if (!regexNumbers.test(input.password)) errors.password = "¡El email debe contener al menos un número!";
  if (input.password.length < 6) errors.password = "¡El email debe contener mas de 5 carácteres!";
  
  return errors;
};

export default validationInputs;
