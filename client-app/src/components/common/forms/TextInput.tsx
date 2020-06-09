import React from 'react';
import {Form, Label, FormFieldProps } from 'semantic-ui-react';
import { FieldRenderProps } from 'react-final-form';

interface IProps
  extends FieldRenderProps<string, any>,FormFieldProps {}

const TextInput: React.FC<IProps> = ({
  input,
  width,
  type,
  placeholder,
  meta,
  meta: { touched, error }
}) => {
  return (
    
    <Form.Field error={touched && !!error} type={type} width={width}>
      <input {...input} placeholder={placeholder} />
      {/* {touched && error && ( */}
        
        <Label basic color='red'>
          {error}
        </Label>
      {/* )} */}
    </Form.Field>
  );
};

export default TextInput;