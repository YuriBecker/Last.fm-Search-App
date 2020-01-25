import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';

const StyledButton = styled(Button)({
  background: colors.primary,
  color: 'white',
  border: 0,
  borderRadius: 20,
  padding: '5px 20px',
  '&:hover': {
    background: colors.secondary,
  },
});

const NewButton = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default NewButton;

NewButton.propTypes = {
  children: PropTypes.node.isRequired,
};
