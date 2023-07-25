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

    if(!input.shortDescription){
        error.shortDescription = "Debe ingresar una descripción del evento"
    } else if(input.shortDescription.length < 20){
        error.shortDescription = "Debe ingresar una descripción mayor a 20 caractéres"
    } else if(input.shortDescription.length > 130){
        error.shortDescription= "Debe ser menor a 130 caractéres"
    }

    if(input.habilityRequired.length === 0){
        error.habilityRequired = "Debe seleccionar una o más orientaciones"
    }

    return error
}