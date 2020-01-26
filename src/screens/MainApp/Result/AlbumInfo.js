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
  TagList,
} from '../../../components';
import { actions as authActions } from '../../../store/Ducks/auth';
import { actions as searchArtistActions } from '../../../store/Ducks/searchArtist';
import useStyles from './styles';
import removeLastFmLinkFromString from '../../../utils/functions/removeLastFmLinkFromString';

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
    dispatch(searchArtistActions.searchArtist(artistName, false));
    setRedirectArtistInfo(true);
  };

  return (
    <>
      <Container component="main" maxWidth="sm">
        <div className={classes.mainDiv}>
          <div onClick={() => setRedirectHome(true)} role="img">
            <Logo width={250} height={120} cursorPointer />
          </div>
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

                <div className={classes.tags}>
                  <TagList tags={album?.tags?.tag} onClick />
                </div>

                <img src={album?.image[3]['#text']} alt={album.name} style={{ margin: '16px' }} />

                {album?.wiki?.content && (
                  <Typography variant="body1" gutterBottom paragraph align="justify">
                    {removeLastFmLinkFromString(album?.wiki?.summary)}
                  </Typography>
                )}

                <UnderlinedTitle variant="h4" gutterBottom>
                  Tracks
                </UnderlinedTitle>
                <div className={classes.tags}>
                  <TrackList tracks={album?.tracks?.track} onClick />
                </div>

                <Button className={classes.button} onClick={() => setRedirectHome(true)}>
                  New Search
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
