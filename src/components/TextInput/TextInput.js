import React from 'react';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core';
import colors from '../../utils/colors';

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: colors.grey[1],
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: colors.secondary,
  },
});

const TextInput = ({ ...rest }) => {
  return <StyledTextField {...rest} />;
};

export default TextInput;
