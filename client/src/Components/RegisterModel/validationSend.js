const validationSend = (errors, isChecked) => {
    let errExists = false;

    isChecked === true &&
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