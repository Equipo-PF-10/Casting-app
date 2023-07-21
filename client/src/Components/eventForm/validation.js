export default function validation(input){

    let error = {}

    if(!input.name){
        error.name = "Debe ingresar un nombre"
    } 

    if(!input.date){
        error.date = "Debe ingresar una fecha para el evento"
    }

    if(!input.location){
        error.location = "Debe ingresar una locación para el evento"
    }

    if(!input.description){
        error.description = "Debe ingresar una descripción del evento"
    } else if(input.description.length < 20){
        error.description = "Debe ingresar una descripción mayor a 20 caractéres"
    }

    return error
}