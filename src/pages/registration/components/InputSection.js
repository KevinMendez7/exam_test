import React from 'react';
import { ErrorLabel, Input, InputLabelWrap, Label, NestedContainer } from 'pages/registration/components/styles/Form.styles';

const InputSection = props => (
  <NestedContainer>          
    <InputLabelWrap>
      <Label>EMAIL ADDRESS*</Label>
      <Input 
        onChange={props.onEmailChange} 
        type='text' 
        valid={props.validEmail} 
        placeholder='Type your email' 
        value={props.email}
      />
      {
        !props.validEmail && props.validEmail !== undefined
        ? <ErrorLabel>Invalid email</ErrorLabel>
        : <></>
      }
    </InputLabelWrap>
    <InputLabelWrap>
      <Label>PASSWORD</Label>
      <Input 
        onChange={props.onPasswordChange} 
        type='password' 
        placeholder='Type your password' 
        value={props.password}
      />
    </InputLabelWrap>
  </NestedContainer>
);

export default InputSection;