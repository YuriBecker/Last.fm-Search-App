import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import reducer from '../../../store/Ducks';

function renderWithRedux(ui, { initialState, store = createStore(reducer, initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

export default renderWithRedux;
