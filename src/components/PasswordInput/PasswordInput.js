import React from 'react';
import TextInput from '../TextInput/TextInput';

const PasswordInput = ({ ...rest }) => {
  return (
    <TextInput
      name="password"
      label="Password"
      type="password"
      autoComplete="current-password"
      {...rest}
    />
  );
};

export default PasswordInput;
