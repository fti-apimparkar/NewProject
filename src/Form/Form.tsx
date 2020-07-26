import React, { FormHTMLAttributes } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
`

interface OwnProps {

}

type Props = OwnProps & FormHTMLAttributes<HTMLFormElement>

const Form : React.FC<Props> = ({ children, ...props }) => {
  return <FormContainer {...props} >
    {children}
  </FormContainer>
}

export default Form;