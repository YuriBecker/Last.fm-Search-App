import React from 'react';
import TextInput from '../TextInput/TextInput';

const EmailInput = ({ ...rest }) => {
  return <TextInput label="Email" autoComplete="email" name="email" type="email" {...rest} />;
};

export default EmailInput;
