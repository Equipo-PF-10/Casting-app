export default function validation(input){

    let error = {}

    if(!input.name){
        error.name = "Debe ingresar un nombre"
    } 

    if(!input.ubication){
        error.ubication = "Debe ingresar una locación para el evento"
    }
    
    if(input.shortDescription.length > 130){
        error.shortDescription= "Debe ser menor a 130 caractéres"
    }

    if(input.habilityRequired  === []){
        error.habilityRequired = "Debe seleccionar una o más orientaciones"
    }

    return error
}