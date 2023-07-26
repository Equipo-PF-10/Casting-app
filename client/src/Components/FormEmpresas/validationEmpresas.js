export default function validationEmpresas(input){

    let error ={};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function isValidEmail(email) {
        return emailRegex.test(email);
      }

    if(input.password.length < 8){
        error.password = "Debe ser mayor a 8 caracteres"
    }


    if(input.email.length > 5 && isValidEmail(input.email) === false){
        error.email = "El email debe ser válido"
    }

  
    return error
}