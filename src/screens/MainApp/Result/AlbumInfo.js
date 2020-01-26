/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import {
  Logo,
  UnderlinedTitle,
  Button,
  LogoutButton,
  Spinner,
  TrackList,
} from '../../../components';
import { actions as authActions } from '../../../store/Ducks/auth';
import { actions as searchArtistActions } from '../../../store/Ducks/searchArtist';
import useStyles from './styles';

const AlbumInfo = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [redirectHome, setRedirectHome] = useState(false);
  const [redirectArtistInfo, setRedirectArtistInfo] = useState(false);
  const { loading, success, album } = useSelector(state => ({
    loading: state.getAlbumInfo.loading,
    success: state.getAlbumInfo.success,
    album: state.getAlbumInfo.info,
  }));

  // redirect if search error
  if (!loading && !success) return <Redirect to="/" />;

  // redirect if click in new search button
  if (redirectHome) return <Redirect to="/" />;

  // redirect if click in the artist name
  if (redirectArtistInfo) return <Redirect to="/artist" />;

  const handleClickArtistName = artistName => {
    dispatch(searchArtistActions.searchArtist(artistName));
    setRedirectArtistInfo(true);
  };

  return (
    <>
      <Container component="main" maxWidth="sm">
        <div className={classes.mainDiv}>
          <Logo width={250} height={120} />
          <Container component="div" className={classes.container} maxWidth="sm">
            {loading ? (
              <Spinner />
            ) : (
              <>
                <UnderlinedTitle variant="h4">{album?.name}</UnderlinedTitle>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  align="center"
                  className={classes.artistTitle}
                  onClick={() => handleClickArtistName(album?.artist)}
                >
                  {album?.artist}
                </Typography>

                <img src={album?.image[3]['#text']} alt={album.name} style={{ margin: '16px' }} />

                <UnderlinedTitle variant="h4" gutterBottom>
                  Tracks
                </UnderlinedTitle>
                <div className={classes.tags}>
                  <TrackList tracks={album?.tracks?.track} onClick />
                </div>

                <Button className={classes.button} onClick={() => setRedirectHome(true)}>
                  Search again
                </Button>
              </>
            )}
          </Container>
        </div>
      </Container>
      <LogoutButton onClick={() => dispatch(authActions.requestLogout())} />
    </>
  );
};

export default AlbumInfo;
