const validate = (input) => {
  let errors = {};
  let regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!input.name) {
    errors.name = "Se requiere un nombre";
  }
  if (input.name.length > 10) {
    errors.name = "Debe ser menor a 10 carácteres";
  }

  if (!regexEmail.test(input.email)) errors.email = "Ingresa una email valido";
  if (!input.email) errors.email = "Se requiere un email";

  return errors;
};

export default validate;
