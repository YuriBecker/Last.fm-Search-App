import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login, SignUp, Search, ResultAlbum, ResultArtist, Error404, AlbumInfo } from '../screens';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  const { isAuthenticated, isVerifying } = useSelector(state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  }));

  return (
    <Router>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={Search}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <PrivateRoute
          exact
          path="/artist"
          component={ResultArtist}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <PrivateRoute
          exact
          path="/album"
          component={ResultAlbum}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <PrivateRoute
          exact
          path="/albumInfo"
          component={AlbumInfo}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
