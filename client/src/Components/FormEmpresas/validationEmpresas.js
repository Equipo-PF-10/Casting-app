export default function validationEmpresas(input){

    let error ={};

    const regexEmail = /\S+@\S+\.\S+/; //verifica si tiene letras+@+letras+.+letras

    // Validacion de Name 
    if(input.name.length > 30) error.name = "Debe ingresar hasta 30 carácteres.";

    // Validacion de Ubicarion
    if(!input.ubication) error.ubication = "Debe ingresar una ubicación."
    
    // Validacion de shortDescription
    if(input.shortDescription.length > 30) error.shortDescription= "Debe ingresar hasta 30 carácteres.";

    // Validacion de description
    if(input.description.length > 60) error.description= "Debe ingresar hasta 60 carácteres.";

    // Validacion de email
    if(!regexEmail.test(input.email)) error.email = "Debe ingresar un email válido.";

   // Validacion de industryMain 
   if(input.industryMain.length > 20) error.industryMain = "Debe ingresar hasta 20 carácteres.";

   // Validacion de phoneNumber 
   if(input.phoneNumber.length > 20) error.phoneNumber = "Debe ingresar hasta 20 carácteres.";

   // Validacion de country 
   if(input.country.length > 30) error.country = "Debe ingresar hasta 30 carácteres.";

   // Validacion de facebook 
   if(input.facebook.length > 30) error.facebook = "Debe ingresar hasta 30 carácteres.";
   
   // Validacion de instagram 
   if(input.instagram.length > 30) error.instagram = "Debe ingresar hasta 30 carácteres.";

   // Validacion de twitter 
   if(input.twitter.length > 30) error.twitter = "Debe ingresar hasta 30 carácteres.";

   // Validacion de linkedin 
   if(input.linkedin.length > 40) error.linkedin = "Debe ingresar hasta 40 carácteres.";

   // Validacion de domain 
   if(input.domain.length > 40) error.domain = "Debe ingresar hasta 40 carácteres.";

  
    return error;
}