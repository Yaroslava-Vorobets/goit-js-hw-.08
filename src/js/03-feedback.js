
import throttle from 'lodash.throttle';
import { save, load, remove } from './storagies';

const form = document.querySelector('.feedback-form')
const LOCALSTORAGE_KEY = "feedback-form-state";


upDatePage()

const onFormInput = (e) => {
const {name, value} =  e.target

    let saveDate = load(LOCALSTORAGE_KEY)
    saveDate = saveDate ?  saveDate : {}
    saveDate[name] = value        
    save(LOCALSTORAGE_KEY, saveDate)      
  
}

const onInputThrottle = throttle( onFormInput, 500)
form.addEventListener('input', onInputThrottle);

function upDatePage() {
    const saveDate = load(LOCALSTORAGE_KEY)    
    if (saveDate)
     Object.entries(saveDate).forEach(([name, value]) => {              
                form.elements[name].value = value
            } )   
     
}
     
const formSubmit = e => {
    e.preventDefault();
    const {
        elements: { name, message }, } = e.currentTarget;    
    console.log({ name: name, message: message.value });
    e.currentTarget.reset();
    remove(LOCALSTORAGE_KEY);
}
form.addEventListener ('submit', formSubmit)