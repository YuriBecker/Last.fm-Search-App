import React from 'react';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { Fab, Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles';

const LogoutButton = ({ onClick, ...rest }) => {
  const classes = useStyles();
  return (
    <Tooltip title="Logout">
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="logout"
        className={classes.fab}
        onClick={onClick}
        {...rest}
      >
        <ExitToAppRoundedIcon />
      </Fab>
    </Tooltip>
  );
};

export default LogoutButton;

LogoutButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
