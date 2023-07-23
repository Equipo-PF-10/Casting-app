export default function validationEmpresas(input){

    let error ={};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function isValidEmail(email) {
        return emailRegex.test(email);
      }

    if(!input.name){
        error.name = "Debe ingresar un nombre"
    }

    if(!input.password){
        error.password = "Debe ingresar una contraseña"
    } else if(input.password.length < 8){
        error.password = "Debe ser mayor a 8 caracteres"
    }

    if(!input.passwordConfirm){
        error.passwordConfirm = "Debe ingresar una contraseña"
    } else if(input.passwordConfirm.length < 8){
        error.passwordConfirm = "Debe ser mayor a 8 caracteres"
    } else if(input.password !== input.passwordConfirm){
        error.passwordConfirm = "Deben ser iguales"
    }

    if(!input.email){
        error.email = "Debe ingresar un email"
    } else if (isValidEmail(input.email) === false){
        error.email = "El email debe ser válido"
    }

    if(!input.emailConfirm){
        error.emailConfirm = "Debe ingresar un email"
    } else if (isValidEmail(input.email) === false){
        error.emailConfirm = "El email debe ser válido"
    } else if(input.email !== input.emailConfirm){
        error.emailConfirm = "Deben ser iguales"
    }

    if(!input.location){
        error.location = "Debe ingresar una ubicación"
    }


    return error
}