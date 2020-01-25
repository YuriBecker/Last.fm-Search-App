import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';

const AuthTitle = ({ children, ...rest }) => {
  return (
    <Typography
      component="h1"
      variant="h5"
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
};
