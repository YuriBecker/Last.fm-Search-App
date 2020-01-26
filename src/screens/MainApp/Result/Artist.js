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
} from '../../../components';
import { actions as authActions } from '../../../store/Ducks/auth';
import useStyles from './styles';
import removeLastFmLinkFromString from '../../../utils/functions/removeLastFmLinkFromString';
import { actions as getAlbumInfoActions } from '../../../store/Ducks/getAlbumInfo';

const Artist = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [redirect, setRedirect] = useState(false);
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
  if (redirect) return <Redirect to="/" />;

  // redirect if click in a album
  if (redirectAlbumInfo) return <Redirect to="/albumInfo" />;

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
                <UnderlinedTitle variant="h4">{artist?.name}</UnderlinedTitle>
                <div className={classes.tags}>
                  <TagList tags={artist?.tags?.tag} onClick />
                </div>

                {/* Verify if has a valid info  */}
                {artist.bio.content && (
                  <>
                    <Typography
                      variant="body1"
                      gutterBottom
                      paragraph
                      align="justify"
                      style={{ alignSelf: 'flex-start' }}
                    >
                      {removeLastFmLinkFromString(artist?.bio?.summary)}
                    </Typography>

                    <FooterInfoArtist
                      numListeners={artist?.stats?.listeners}
                      urlLastFm={artist?.url}
                    />
                  </>
                )}

                <div className={classes.albums}>
                  <Typography variant="h5" gutterBottom align="center" style={{ width: '100%' }}>
                    Top Albums
                  </Typography>

                  <AlbumsList
                    albums={artist?.albums?.topalbums?.album}
                    onClickAlbum={(artistName, albumName) =>
                      handleAlbumViewInfo(artistName, albumName)
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

                  <SimilarArtistsList artists={artist?.similar?.artist} />
                </div>
                <Button className={classes.button} onClick={() => setRedirect(true)}>
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
