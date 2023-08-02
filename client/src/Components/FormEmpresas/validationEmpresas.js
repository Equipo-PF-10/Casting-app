export default function validationEmpresas(input, company){

    let error ={};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function isValidEmail(email) {
        return emailRegex.test(email);
      }

    if(input.password && input.password.length < 8){
        error.password = "Debe ser mayor a 8 caracteres"
    }


    if(input.email.length > 5 && isValidEmail(input.email) === false){
        error.email = "El email debe ser válido"
    }

    if(!company.name){
        error.name = "La compañia debe tener un nombre"
    }
  
    if(!company.country){
        error.country = "La compañia debe selecionar un país"
    }

    if(!company.descriptionShort){
        error.descriptionShort = "La compañia debe tener una descripción corta"
    }

    return error
}