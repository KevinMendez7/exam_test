import React from 'react';
import { withRouter } from 'react-router-dom';
import InputSection from 'pages/registration/components/InputSection';
import { FormContainer, Title, Paragraph, ButtonsContainer, SubmitButton} from 'pages/registration/components/styles/Form.styles';
import useFormRegister from 'hooks/useFormRegister';
import { register } from '_service/auth';


const Form = props => {

    const {      
      onEmailChange,
      onPasswordChange,   
      validate,   
      formValues
    } = useFormRegister();

    const submit = async e => {
      e.preventDefault();     
      const path = '/registration-complete';   
      console.log('click')
      if(validate()){
        try {
          const { email, password } = formValues;      
          const def = await register({             
            email, 
            password            
          });            
          // return props.history.push(path, { message, reason });      
        } catch({ message, reason }) {
          // props.history.push(path, { message, reason });
        }
      }        
    }

    return (
      <FormContainer> 
        <form id='form' onSubmit={submit}>
          <Title>Sign up</Title>
          <Paragraph>*Indicates Required Field</Paragraph>
          <InputSection             
            email={formValues.email}
            onEmailChange={onEmailChange}
            validEmail={formValues.validEmail}
            password={formValues.password}
            onPasswordChange={onPasswordChange}            
          />                    
          <ButtonsContainer>
            <SubmitButton type='submit'>LOGIN</SubmitButton>
          </ButtonsContainer>
        </form>
      </FormContainer>
    );
};

export default withRouter(Form);