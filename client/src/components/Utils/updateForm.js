const validateInput = (newInput, formData) => {
    let error = [true, ''];
    if(newInput.validation.email){
        const valid = newInput.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
        const message = `${!valid ? 'Invalid Email':''}`;
        error = valid ? error : [valid, message];
    }
    if(newInput.validation.password){
        const valid = newInput.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/) !== null;
        const message = `${!valid ? 'Invalid Password':''}`;
        error = valid ? error : [valid, message];
    } 
    if(newInput.validation.confirmpwd){
        const valid = newInput.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/) !== null;
        const message = `${!valid ? 'Invalid Password':''}`;
        error = valid ? error : [valid, message];
        if(typeof formData.password.value !== 'undefined'){
            const valid = newInput.value === formData.password.value;
            const message = `${!valid ? 'Not Match':''}`;
            error = valid ? error : [valid, message];
        }
    }
    if(newInput.validation.firstname){
        const valid = newInput.value.length >= 2;
        const message = `${!valid ? 'Min 2 chars long':''}`;
        error = valid ? error : [valid, message];
    }
    if(newInput.validation.lastname){
        const valid = newInput.value.length >= 2;
        const message = `${!valid ? 'Min 2 chars long':''}`;
        error = valid ? error : [valid, message];
    }
    
    return error;
}
export const updateInput = (element, formData) => {
    const newFormData = {...formData};
    const newInput = {...formData[element.name]};    
    newInput.value = element.event.target.value;
    if(element.blur){
        const error = validateInput(newInput, formData)
        newInput.valid = error[0];
        newInput.validationMsg = error[1];
    }
    newInput.touch = element.blur;
    newFormData[element.name] = newInput;    
    return newFormData;
}

export const generateData = (inputs) => {
    const submitData = {}
    Object.keys(inputs).forEach(input=>{
        submitData[input] = inputs[input].value
    })
    return submitData;
}

export const validateForm = (inputs) => {
    let initalValid = true
    Object.keys(inputs).forEach(input=>{
        initalValid = inputs[input].valid && initalValid;
    })
    return initalValid;
} 
export const clearInputs = (oldInputs) => {
    const inputs = oldInputs;
    Object.keys(inputs).forEach(input=>{
        inputs[input].value = '';
        inputs[input].valid = false;
        inputs[input].touched = false;
        inputs[input].validationMsg = ''
    })
    return inputs;
}
