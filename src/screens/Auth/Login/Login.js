import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { Container, Grid } from '@material-ui/core';
import ReactRouterPropTypes from 'react-router-prop-types';
import {
  Button,
  Link,
  PasswordInput,
  EmailInput,
  UnderlinedTitle,
  Logo,
} from '../../../components';
import useStyles from '../styles';
import { actions as authActions } from '../../../store/Ducks/auth';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    dispatch(authActions.requestLogin(email.value, password.value));
  };

  const { isAuthenticated } = useSelector(state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }));

  // If alredy logged, redirect
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Logo />
        <UnderlinedTitle>Login</UnderlinedTitle>
        <form className={classes.form} onSubmit={handleLogin}>
          <EmailInput margin="normal" required fullWidth id="email" autoFocus />
          <PasswordInput margin="normal" required fullWidth id="password" />
          <Button type="submit" fullWidth className={classes.submit}>
            Login
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link to="SignUp">Don&apos;t have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
