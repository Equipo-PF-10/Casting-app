

const validate=(input) => {
  let errors = {};
  
  // Validacion de Email
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(input.email)) errors.email = "Debes ingresar un email valido";
  if (!input.email) errors.email = "¡Debes ingresar un email!";
  if (input.email.length > 60) errors.email = "¡No ingrese mas de 60 caracteres!";

  // Validacion de Password
  if (input.password.length === 0) errors.password = "¡Debe ingresar una contraseña!";
  
  return errors;
};

export default validate;
