/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Container, Tooltip, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Logo, UnderlinedTitle, Button, LogoutButton, Spinner } from '../../../../components';
import { actions as getAlbumInfoActions } from '../../../../store/Ducks/getAlbumInfo';
import { actions as authActions } from '../../../../store/Ducks/auth';
import useStyles from '../sharedStyles';
import extractAlbumInfo from '../../../../utils/functions/extractAlbumInfo';

const Album = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [redirectHome, setRedirectHome] = useState(false);
  const [redirectAlbumInfo, setRedirectAlbumInfo] = useState(false);

  const { loading, success, albums } = useSelector(state => ({
    loading: state.searchAlbums.loading,
    success: state.searchAlbums.success,
    albums: state.searchAlbums.info,
  }));

  const handleAlbumViewInfo = (artistName, albumName) => {
    setRedirectAlbumInfo(true);
    dispatch(getAlbumInfoActions.getAlbumInfo(artistName, albumName));
  };

  // redirect if search error
  if (!loading && !success) return <Redirect to="/" />;

  // redirect if click in new search button
  if (redirectHome) return <Redirect to="/" />;

  // redirect if click in a album
  if (redirectAlbumInfo) return <Redirect to="/albumInfo" />;

  return (
    <>
      <Container component="main" maxWidth="sm">
        <div className={classes.mainDiv}>
          <Logo width={250} height={120} cursorPointer onImageClick={() => setRedirectHome(true)} />
          <Container component="div" className={classes.container} maxWidth="sm">
            {loading ? (
              <Spinner />
            ) : (
              <>
                <UnderlinedTitle variant="h4">Results</UnderlinedTitle>
                <div className={classes.albumsContainer}>
                  {albums.map(album => {
                    const { albumName, albumArtistName, albumSmallCoverLink } = extractAlbumInfo(
                      album,
                    );
                    return (
                      albumSmallCoverLink && (
                        <div
                          key={albumName}
                          style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}
                        >
                          <Typography
                            variant="subtitle2"
                            gutterBottom
                            style={{ alignSelf: 'center' }}
                          >
                            {albumArtistName}
                          </Typography>

                          <Tooltip key={albumName} title={albumName}>
                            <img
                              src={albumSmallCoverLink}
                              alt={albumName}
                              width={100}
                              height={100}
                              style={{ margin: '3px', cursor: 'pointer' }}
                              onClick={() => handleAlbumViewInfo(albumArtistName, albumName)}
                            />
                          </Tooltip>
                        </div>
                      )
                    );
                  })}
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

export default Album;
