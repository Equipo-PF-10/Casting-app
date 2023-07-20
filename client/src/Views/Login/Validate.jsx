

const validate=(input) => {
  let errors = {};

  if (!input.name) {
    errors.name = "Se requiere un nombre";
  }
  if (input.name.length > 10) {
    errors.name = "Debe ser menor a 10 carácteres";
  }

  // Validacion de Email
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(input.email))
    errors.email = "Debes ingresar un email valido";
  if (!input.email) errors.email = "Debes ingresar un email";
  if (input.email.length > 35)
    errors.email = "No ingrese mas de 35 caracteres";

  return errors;
  /*
  {
    name: "Debes ingresar un email valido",
    email = "Debes ingresar un email valido"
  }
  */
  /*
  {}
  */
};

export default validate;
