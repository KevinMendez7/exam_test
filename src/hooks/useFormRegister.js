import { useState } from 'react';

const useFormRegister = _ => {
  const _initialState = {
    email: '',    
    validEmail: undefined,
    password: '',
  };
  
  const [ formValues, setFormValues ] = useState({ ..._initialState });     
  const resetForm = () => setFormValues({ ..._initialState });         
    
  const onEmailChange = e => {
    let validEmail = false;
    if(e.target.value.length > 0 && e.target.value.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$")) validEmail = true;
    setFormValues(prevFormValues => ({  
      ...prevFormValues,
      email: e.target.value,
      validEmail
    }));
  }
    
  const onPasswordChange = e => {    
    setFormValues(prevFormValues => ({  
      ...prevFormValues,
      password: e.target.value
    }));  
  }
  
  const validate = _ => {
    const { validEmail } = formValues;                
    validateFirstInvalidSubmit({       
      validEmail      
    });
    
    if(!validEmail) return false;       
    return true;
  }
  
  const validateFirstInvalidSubmit = ({...params}) => {         
    const validFieldsObject = {};             
    for(let param in params) {              
      if(Object.is(params[param], undefined)) {
        validFieldsObject[param] = false;
      }
    }   
              
    setFormValues(prevFormValues => ({  
      ...prevFormValues,
      ...validFieldsObject
    }));
  }      

  return {
      resetForm,      
      onEmailChange,    
      onPasswordChange,  
      validate,
      formValues
  }
}

export default useFormRegister;