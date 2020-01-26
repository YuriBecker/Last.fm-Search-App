import React from 'react';
import { withRouter, Redirect } from 'react-router';
import { Container, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from '../styles';
import {
  PasswordInput,
  Button,
  Link,
  EmailInput,
  UnderlinedTitle,
  Logo,
} from '../../../components';
import validatePassword from '../../../utils/validators/validatePassword';
import { actions as authActions } from '../../../store/Ducks/auth';
import { Loading } from '../..';

const SignUp = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSignUp = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    // Validate password to avoid a error request
    if (!validatePassword(password.value)) {
      return;
    }

    dispatch(authActions.requestSignUp(email.value, password.value));
  };

  const { isAuthenticated, isVerifying } = useSelector(state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  }));

  // If alredy logged, redirect
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return isVerifying ? (
    <Loading />
  ) : (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Logo />
        <UnderlinedTitle>Sign Up</UnderlinedTitle>
        <form className={classes.form} onSubmit={handleSignUp}>
          <EmailInput margin="normal" required fullWidth id="email" autoFocus />
          <PasswordInput margin="normal" required fullWidth id="password" />
          <Button type="submit" fullWidth className={classes.submit}>
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link to="Login">Already have an account? Login</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(SignUp);
