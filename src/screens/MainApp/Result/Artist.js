import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Typography from '@material-ui/core/Typography';
import { Logo, UnderlinedTitle, Button, LogoutButton, Spinner, Tag } from '../../../components';
import { actions as authActions } from '../../../store/Ducks/auth';
import useStyles from './styles';
import removeLastFmLinkFromString from '../../../utils/functions/removeLastFmLinkFromString';
import { actions as searchArtistActions } from '../../../store/Ducks/searchArtist';
import colors from '../../../utils/colors';

const Artist = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [redirect, setRedirect] = useState(false);

  const { loading, success, artist } = useSelector(state => ({
    loading: state.searchArtist.loading,
    success: state.searchArtist.success,
    artist: state.searchArtist.info,
  }));

  // redirect if search error
  if (!loading && !success) return <Redirect to="/" />;

  // redirect if click in new search button
  if (redirect) return <Redirect to="/" />;

  return (
    <>
      <Container component="main" maxWidth="sm">
        <div className={classes.mainDiv}>
          <Logo width={250} height={120} />
          <Container component="div" className={classes.container} maxWidth="sm">
            {/* {!loading && <UnderlinedTitle>Artist: {query.get('name')}</UnderlinedTitle>} */}
            {loading ? (
              <Spinner />
            ) : (
              <>
                <UnderlinedTitle variant="h4">{artist?.name}</UnderlinedTitle>
                <div className={classes.tags}>
                  {artist?.tags?.tag.map(tag => (
                    <Tag
                      key={tag.name}
                      label={tag.name}
                      className={classes.tag}
                      variant="outlined"
                      component="a"
                      href={tag.url}
                      target="_blank"
                      clickable
                      size="small"
                    />
                  ))}
                </div>

                <Typography
                  variant="body1"
                  gutterBottom
                  paragraph
                  align="justify"
                  style={{ alignSelf: 'flex-start' }}
                >
                  {removeLastFmLinkFromString(artist?.bio?.summary)}
                </Typography>

                <div className={classes.footerInfo}>
                  <Typography
                    variant="caption"
                    gutterBottom
                    align="left"
                    style={{ width: '100%', fontWeight: 'bold' }}
                  >
                    Listeners:
                    <p style={{ color: colors.secondary, display: 'inline' }}>
                      {' '}
                      {artist?.stats.listeners}{' '}
                    </p>
                  </Typography>

                  <Typography
                    variant="caption"
                    gutterBottom
                    align="right"
                    style={{ width: '100%', fontWeight: 'bold' }}
                  >
                    {'View on '}
                    <a
                      href={artist?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: colors.secondary }}
                    >
                      Last.fm
                    </a>
                  </Typography>
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
                  {artist?.similar?.artist.map(similarArtist => (
                    <Tag
                      key={similarArtist.name}
                      label={similarArtist.name}
                      className={classes.tag}
                      variant="outlined"
                      clickable
                      size="small"
                      onClick={() => dispatch(searchArtistActions.searchArtist(similarArtist.name))}
                    />
                  ))}
                </div>

                <Button className={classes.button} onClick={() => setRedirect(true)}>
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

export default Artist;
