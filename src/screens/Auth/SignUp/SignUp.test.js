import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Routes from '../../../routes/Routes';
import renderWithRedux from '../../../utils/tests/functions/renderWithRedux';

afterEach(cleanup);

describe('SignUp Screen test', () => {
  test('it should redirect to Login screen after click button', () => {
    const history = createMemoryHistory();
    const { getByTestId, getByText } = renderWithRedux(
      <Router history={history}>
        <Routes />
      </Router>,
    );

    fireEvent.click(getByText("Don't have an account? Sign Up"));
    fireEvent.click(getByText('Already have an account? Login'));

    expect(getByTestId('screenTitle')).toHaveTextContent('Login');
  });
});
