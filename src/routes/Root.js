import React from 'react';
import { Provider } from 'react-redux';
import { ToastNotification } from '../components';
import ThemeProvider from '../providers/ThemeProvider';
import configureStore from '../store';
import Routes from './Routes';

const store = configureStore();

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <ToastNotification />
        <Routes />
      </Provider>
    </ThemeProvider>
  );
};

export default AppRouter;
