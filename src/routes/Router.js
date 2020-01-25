import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from '../providers/Auth';
import PrivateRoute from './PrivateRoute';
import { Login, SignUp, Search, ResultAlbum, ResultArtist, Error404 } from '../screens';
import { ToastNotification } from '../components';
import ThemeProvider from '../providers/ThemeProvider';
import { store } from '../store';

const AppRouter = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Provider store={store}>
          <ToastNotification />
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Search} />
              <PrivateRoute exact path="/artist" component={ResultArtist} />
              <PrivateRoute exact path="/album" component={ResultAlbum} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route component={Error404} />
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default AppRouter;
