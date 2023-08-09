const validationCreate = (error, input) => {
    let errExists = false;

    const regexEmail = /\S+@\S+\.\S+/; //verifica si tiene letras+@+letras+.+letras 
    (input.name.length > 0 && input.name.length < 31) &&
    error.name === undefined &&
    (error.ubication === undefined && input.ubication) &&
    error.shortDescription === undefined &&
    (input.shortDescription.length>0 && input.shortDescription.length<31) &&
    error.habilityRequired === undefined &&
    input.habilityRequired.length > 0
    ?
    errExists = false
    :
    errExists = true;

    return errExists;
};

export default validationCreate;