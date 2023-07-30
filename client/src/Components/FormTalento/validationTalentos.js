export default function validationTalentos(input){

    let error ={};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function isValidEmail(email) {
        return emailRegex.test(email);
    }

    if(input.email && isValidEmail(input.email) === false){
        error.email = "El email debe ser válido"
    }

    if(input.dni && input.dni.length > 8 && input.dni.length < 8){
        error.dni = "El DNI debe ser de 8 caractéres"
    }


    return error
}