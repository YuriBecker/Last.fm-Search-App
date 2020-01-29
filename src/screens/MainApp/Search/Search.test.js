import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Search as SearchScreen } from '../..';
import renderWithRedux from '../../../utils/tests/functions/renderWithRedux';
import { authUserReduxState } from '../../../utils/tests/mocks/authUserReduxState';

afterEach(cleanup);

describe('Search screen test', () => {
  test('it should render the album search bar after select album radio button', () => {
    const history = createMemoryHistory();
    const { getByPlaceholderText, getByDisplayValue } = renderWithRedux(
      <Router history={history}>
        <SearchScreen />
      </Router>,
      {
        initialState: {
          ...authUserReduxState,
        },
      },
    );

    fireEvent.click(getByDisplayValue('album'));

    expect(getByPlaceholderText('Type to search albums')).toBeInTheDocument();
  });

  test('it should render 2 artists history search', () => {
    const history = createMemoryHistory();
    const { getByText } = renderWithRedux(
      <Router history={history}>
        <SearchScreen />
      </Router>,
      {
        initialState: {
          ...authUserReduxState,
        },
      },
    );

    // Verify the history title
    expect(getByText('Artist Search History')).toBeInTheDocument();
    // Search the artists based on the history in store mock
    expect(getByText('The Strokes')).toBeInTheDocument();
    expect(getByText('Arctic Monkeys')).toBeInTheDocument();
  });

  test('it should render 2 albums history search', () => {
    const history = createMemoryHistory();
    const { getByText, getByDisplayValue } = renderWithRedux(
      <Router history={history}>
        <SearchScreen />
      </Router>,
      {
        initialState: {
          ...authUserReduxState,
        },
      },
    );

    fireEvent.click(getByDisplayValue('album'));

    // Verify the history title
    expect(getByText('Album Search History')).toBeInTheDocument();
    // Search the artists based on the history in store mock
    expect(getByText('is this it')).toBeInTheDocument();
    expect(getByText('am')).toBeInTheDocument();
  });

  test('it should not render artists search history ', () => {
    const history = createMemoryHistory();
    const { queryByText } = renderWithRedux(
      <Router history={history}>
        <SearchScreen />
      </Router>,
      {
        initialState: {
          ...authUserReduxState,
          history: [
            {
              uid: 's0m3F4KeUID',
              albums: [],
              artists: [],
            },
          ],
        },
      },
    );

    // Verify the history title
    expect(queryByText('Artist Search History')).toBeNull();
  });

  test('it should not render albums search history ', () => {
    const history = createMemoryHistory();
    const { queryByText, getByDisplayValue } = renderWithRedux(
      <Router history={history}>
        <SearchScreen />
      </Router>,
      {
        initialState: {
          ...authUserReduxState,
          history: [
            {
              uid: 's0m3F4KeUID',
              albums: [],
              artists: [],
            },
          ],
        },
      },
    );

    fireEvent.click(getByDisplayValue('album'));

    // Verify the history title
    expect(queryByText('Albums Search History')).toBeNull();
  });
});
