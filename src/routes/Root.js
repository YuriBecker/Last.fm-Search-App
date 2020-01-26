import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastNotification } from '../components';
import ThemeProvider from '../providers/ThemeProvider';
import configureStore from '../store';
import Routes from './Routes';
import Loading from '../screens/Loading/Loading';

const { store, persistor } = configureStore();

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <ToastNotification />
          <Routes />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default AppRouter;
