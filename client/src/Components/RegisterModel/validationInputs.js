const validationInputs = (input) => {
  let errors = {};

  const regexNumbers = new RegExp("[0-9]");

  // Validacion de Name
  //if (!input.name) errors.name = "Debe ingresar un nombre";
  //if (regexNumbers.test(input.name)) errors.name = "No debe ingresar números";

  // Validacion de Email
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(input.email)) errors.email = "Debes ingresar un email valido";
  if (!input.email) errors.email = "¡Debes ingresar un email!";
  if (input.email.length > 60) errors.email = "¡No ingrese mas de 60 caracteres!";

  // Validacion de Password
  if (input.password.length < 6) errors.password = "¡Debe ingresar mas de 5 carácteres!";
  if (!regexNumbers.test(input.password)) errors.password = "¡Debe ingresar al menos un número!";
  
  return errors;
};

export default validationInputs;
