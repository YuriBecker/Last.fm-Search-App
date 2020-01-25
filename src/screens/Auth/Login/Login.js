import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Container, Grid } from '@material-ui/core';
import { toast } from 'react-toastify';
import ReactRouterPropTypes from 'react-router-prop-types';
import { AuthContext } from '../../../providers/Auth';
import {
  Button,
  Link,
  PasswordInput,
  EmailInput,
  UnderlinedTitle,
  Logo,
} from '../../../components';
import useStyles from '../styles';
import { login } from '../../../services/Firebase';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await login(email.value, password.value);
        // Redirect to the Main App
        history.push('/');
      } catch (error) {
        const { message } = error;
        // Show the message error from firebase request
        toast.error(message);
      }
    },
    [history],
  );

  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);
  // If alredy logged, redirect
  if (currentUser) {
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
