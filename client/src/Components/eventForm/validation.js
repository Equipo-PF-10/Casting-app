export default function validation(input){

    let error = {}
    const regexEmail = /\S+@\S+\.\S+/; //verifica si tiene letras+@+letras+.+letras

    // Validacion de Name 
    if(!input.name) error.name = "Debe ingresar un nombre."
    if(input.name.length > 30) error.name = "Debe ingresar hasta 30 carácteres.";

    // Validacion de Ubicarion
    if(!input.ubication) error.ubication = "Debe ingresar una ubicación."
    
    // Validacion de shortDescription
    if(input.shortDescription.length > 30)error.shortDescription= "Debe ingresar hasta 30 carácteres.";

    // Validacion de description
    if(input.description.length > 60)error.shortDescription= "Debe ingresar hasta 60 carácteres.";

    // Validacion de email
    if(!regexEmail.test(input.email)) error.email = "Debe ingresar un email válido.";

    // Validacion de salary
    if(input.salary.length > 30)error.shortDescription= "Debe ingresar hasta 30 carácteres.";
    
     // Validacion de habilityRequired
    if(input.habilityRequired  === []) error.habilityRequired = "Debe seleccionar una o más orientaciones.";

    return error
}