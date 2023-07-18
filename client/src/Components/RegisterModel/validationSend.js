const validationSend = (errors) => {
    let errExists = false;

    errors.name === undefined &&
    errors.email === undefined &&
    errors.password === undefined
    ?
    errExists = false
    :
    errExists = true;

    return errExists;
};

export default validationSend;