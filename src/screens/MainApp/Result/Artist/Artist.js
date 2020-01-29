/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Typography from '@material-ui/core/Typography';
import {
  Logo,
  UnderlinedTitle,
  Button,
  LogoutButton,
  Spinner,
  TagList,
  SimilarArtistsList,
  FooterInfoArtist,
  AlbumsList,
} from '../../../../components';
import { actions as authActions } from '../../../../store/Ducks/auth';
import useStyles from '../sharedStyles';
import removeLastFmLinkFromString from '../../../../utils/functions/removeLastFmLinkFromString';
import { actions as getAlbumInfoActions } from '../../../../store/Ducks/getAlbumInfo';
import extractArtistInfo from '../../../../utils/functions/extractArtistInfo';
import { actions as searchArtistActions } from '../../../../store/Ducks/searchArtist';

const Artist = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [redirectHome, setRedirectHome] = useState(false);
  const [redirectAlbumInfo, setRedirectAlbumInfo] = useState(false);

  const { loading, success, artist } = useSelector(state => ({
    loading: state.searchArtist.loading,
    success: state.searchArtist.success,
    artist: state.searchArtist.info,
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

  const {
    artistName,
    artistRelatedTags,
    artistSummary,
    artistNumListeners,
    artistTopAlbums,
    similarArtists,
    artistUrl,
  } = extractArtistInfo(artist);
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
                <UnderlinedTitle variant="h4">{artistName}</UnderlinedTitle>
                <div className={classes.tags}>
                  <TagList tags={artistRelatedTags} />
                </div>

                {/* Verify if has a valid info  */}
                {artist.bio.content && (
                  <>
                    <Typography variant="body1" gutterBottom paragraph align="justify">
                      {removeLastFmLinkFromString(artistSummary)}
                    </Typography>

                    <FooterInfoArtist numListeners={artistNumListeners} urlLastFm={artistUrl} />
                  </>
                )}

                <div className={classes.albums}>
                  <Typography variant="h5" gutterBottom align="center" style={{ width: '100%' }}>
                    Top Albums
                  </Typography>

                  <AlbumsList
                    albums={artistTopAlbums}
                    onClickAlbum={(albumArtistName, albumName) =>
                      handleAlbumViewInfo(albumArtistName, albumName)
                    }
                  />
                </div>

                <div className={classes.similars}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    align="center"
                    style={{ width: '100%' }}
                  >
                    Similar artists
                  </Typography>

                  <SimilarArtistsList
                    artists={similarArtists}
                    onArtistClick={similarArtistName =>
                      dispatch(searchArtistActions.searchArtist(similarArtistName, false))
                    }
                  />
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

export default Artist;
