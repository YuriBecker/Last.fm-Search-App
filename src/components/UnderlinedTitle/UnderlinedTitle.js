import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';

const AuthTitle = ({ children, variant, ...rest }) => {
  return (
    <Typography
      component="h1"
      variant={variant}
      style={{ color: colors.grey[1], borderBottom: `2px solid ${colors.secondary}` }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default AuthTitle;

AuthTitle.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

AuthTitle.defaultProps = {
  variant: 'h5',
};
