export default function validation(input){

    let error = {}

    if(!input.name){
        error.name = "Debe ingresar un nombre"
    } 

    if(!input.date){
        error.date = "Debe ingresar una fecha para el evento"
    }

    if(!input.ubication){
        error.ubication = "Debe ingresar una locación para el evento"
    }

    if(!input.description){
        error.description = "Debe ingresar una descripción del evento"
    } else if(input.description.length < 20){
        error.description = "Debe ingresar una descripción mayor a 20 caractéres"
    }

    if(!input.brevDescription){
        error.brevDescription = "Debe ingresar una descripción del evento"
    } else if(input.brevDescription.length < 20){
        error.brevDescription = "Debe ingresar una descripción mayor a 20 caractéres"
    } else if(input.brevDescription.length > 130){
        error.brevDescription= "Debe ser menor a 130 caractéres"
    }

    if(input.habilityRequired.length === 0){
        error.habilityRequired = "Debe seleccionar una o más orientaciones"
    }

    if(!input.contact){
        error.contact = "Debe ingresar un contactor"
    }

    return error
}