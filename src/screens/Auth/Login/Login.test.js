import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Routes from '../../../routes/Routes';
import renderWithRedux from '../../../utils/tests/functions/renderWithRedux';

afterEach(cleanup);

describe('Login Screen test', () => {
  test('it should redirect to SignUp screen after click button', () => {
    const history = createMemoryHistory();
    const { getByTestId, getByText } = renderWithRedux(
      <Router history={history}>
        <Routes />
      </Router>,
    );

    fireEvent.click(getByText("Don't have an account? Sign Up"));

    expect(getByTestId('screenTitle')).toHaveTextContent('Sign Up');
  });
});
