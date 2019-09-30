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
    if(newInput.validation.name){
        const valid = newInput.value.length >= 2;
        const message = `${!valid ? 'Min 2 chars long':''}`;
        error = valid ? error : [valid, message];
    }
    if(newInput.validation.title){
        const valid = newInput.value.length >= 5;
        const message = `${!valid ? 'Min 5 chars long':''}`;
        error = valid ? error : [valid, message];
    }
    if(newInput.validation.languages){
        const valid = newInput.value.length >= 4;
        const message = `${!valid ? 'Min 4 chars long':''}`;
        error = valid ? error : [valid, message];
    }
    if(newInput.validation.link){
        const valid = newInput.value.length >= 10;
        const message = `${!valid ? 'Min 10 chars long':''}`;
        error = valid ? error : [valid, message];
    }
    if(newInput.validation.subject){
        const valid = newInput.value.length >= 3;
        const message = `${!valid ? 'Min 3 chars long':''}`;
        error = valid ? error : [valid, message];
    }
    if(newInput.validation.message){
        const valid = newInput.value.length >= 10;
        const message = `${!valid ? 'Min 10 chars long':''}`;
        error = valid ? error : [valid, message];
    }
    if(newInput.validation.required){
        const valid = newInput.value.trim()!== '';
        const message = `${!valid ? 'This field is required':''}`;
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

export const validateImage = (oldImage) => {
    const image = {...oldImage};
    if(image.name!==''){
        image.valid = true;
        image.validationMsg = ''
    }
    return image.valid;
}
export const clearFile = (oldImage) => {
    const image = {...oldImage}
    image.name = '';
    image.valid = false;
    image.validationMsg = 'upload image';
    return image;
}