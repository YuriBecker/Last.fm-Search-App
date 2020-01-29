import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Routes from './Routes';
import renderWithRedux from '../utils/tests/functions/renderWithRedux';
import { authUserReduxState } from '../utils/tests/mocks/authUserReduxState';

afterEach(cleanup);

describe('Router test', () => {
  test('it should render the login screen if user is not auth', () => {
    const history = createMemoryHistory();
    const { getByTestId } = renderWithRedux(
      <Router history={history}>
        <Routes />
      </Router>,
    );
    expect(getByTestId('screenTitle')).toHaveTextContent('Login');
  });

  test('it should redirect to Login screen if access a inexist route', () => {
    const history = createMemoryHistory();
    history.push('/some/bad/route');
    const { getByTestId } = renderWithRedux(
      <Router history={history}>
        <Routes />
      </Router>,
    );
    expect(getByTestId('screenTitle')).toHaveTextContent('Login');
  });

  test('it should render the search screen if the user is auth', () => {
    const history = createMemoryHistory();
    const { getByTestId } = renderWithRedux(
      <Router history={history}>
        <Routes />
      </Router>,
      {
        initialState: {
          ...authUserReduxState,
        },
      },
    );
    expect(getByTestId('screenTitle')).toHaveTextContent('Search');
  });

  test('unauthorized user can access login and sign up', () => {
    const history = createMemoryHistory();
    history.push('/login');
    const { getByTestId, getByText } = renderWithRedux(
      <Router history={history}>
        <Routes />
      </Router>,
    );
    expect(getByTestId('screenTitle')).toHaveTextContent('Login');

    fireEvent.click(getByText("Don't have an account? Sign Up"));

    expect(getByTestId('screenTitle')).toHaveTextContent('Sign Up');
  });

  test('unauthorized user cant access search', () => {
    const history = createMemoryHistory();
    const { getByTestId } = renderWithRedux(
      <Router history={history}>
        <Routes />
      </Router>,
    );

    expect(getByTestId('screenTitle')).not.toHaveTextContent('Search');
  });
});
