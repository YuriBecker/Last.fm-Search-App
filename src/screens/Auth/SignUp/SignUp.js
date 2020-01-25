import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Container, Grid } from '@material-ui/core';
import { toast } from 'react-toastify';
import ReactRouterPropTypes from 'react-router-prop-types';
import useStyles from '../styles';
import {
  PasswordInput,
  Button,
  Link,
  EmailInput,
  UnderlinedTitle,
  Logo,
} from '../../../components';
import { AuthContext } from '../../../providers/Auth';
import validatePassword from '../../../utils/validators/validatePassword';
import { signUp } from '../../../services/Firebase';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      // Validate password to avoid a error request
      if (!validatePassword(password.value)) {
        return;
      }
      try {
        await signUp(email.value, password.value);
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

SignUp.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
