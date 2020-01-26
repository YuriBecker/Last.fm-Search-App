/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import { Container, FormControlLabel, RadioGroup } from '@material-ui/core';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import {
  UnderlinedTitle,
  Logo,
  Button,
  SearchBar,
  RadioButton,
  LogoutButton,
  Tag,
} from '../../../components';
import { actions as authActions } from '../../../store/Ducks/auth';
import { actions as searchArtistActions } from '../../../store/Ducks/searchArtist';
import { actions as searchAlbumsActions } from '../../../store/Ducks/searchAlbums';
import validateInputSearch from '../../../utils/validators/validateInputSearch';
import { getUid } from '../../../store/Selectors/Auth';
import { getUserHistory } from '../../../store/Selectors/History';

const MainApp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchType, setSearchType] = useState('artist');
  const [searchQuery, setSearchQuery] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Getting the user history
  const uid = useSelector(getUid);
  const history = useSelector(getUserHistory(uid));
  const historyArtists = [...history.artists].reverse().slice(0, 9);
  const historyAlbums = [...history.albums].reverse().slice(0, 9);

  const handleSearch = event => {
    event.preventDefault();
    if (!validateInputSearch(searchQuery)) {
      return;
    }

    if (searchType === 'artist') dispatch(searchArtistActions.searchArtist(searchQuery, true));
    else dispatch(searchAlbumsActions.searchAlbums(searchQuery));

    setRedirect(true);
  };

  if (redirect) {
    if (searchType === 'artist') return <Redirect push to="/artist" />;
    if (searchType === 'album') return <Redirect push to="/album" />;
  }

  return (
    <>
      <Container component="main" maxWidth="sm">
        <div className={classes.mainDiv}>
          <Logo width={250} height={120} />
          <UnderlinedTitle>Search</UnderlinedTitle>
          <Container component="div" className={classes.container} maxWidth="sm">
            <RadioGroup
              defaultValue={searchType}
              aria-label="Search type"
              name="type-search"
              className={classes.radioContainer}
              onChange={event => setSearchType(event.target.value)}
            >
              <FormControlLabel value="artist" control={<RadioButton />} label="Artist" />
              <FormControlLabel value="album" control={<RadioButton />} label="Album" />
            </RadioGroup>
            <form onSubmit={handleSearch} className={classes.searchContainer}>
              <SearchBar
                placeholder="Type to search artists"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
              />

              <Button className={classes.button} type="submit">
                Search
              </Button>

              <UnderlinedTitle variant="subtitle1" align="center">
                {searchType === 'artist' ? 'Artist Search History' : 'Album Search History'}
              </UnderlinedTitle>
              <div className={classes.history}>
                {searchType === 'artist'
                  ? historyArtists.map(artist => (
                      <Tag
                        key={artist}
                        label={artist}
                        style={{ margin: '8px' }}
                        variant="outlined"
                        clickable
                        size="small"
                        onClick={() => {
                          dispatch(searchArtistActions.searchArtist(artist, true));
                          setRedirect(true);
                        }}
                      />
                    ))
                  : historyAlbums.map(album => (
                      <Tag
                        key={album}
                        label={album}
                        style={{ margin: '8px' }}
                        variant="outlined"
                        clickable
                        size="small"
                        onClick={() => {
                          dispatch(searchAlbumsActions.searchAlbums(album));
                          setRedirect(true);
                        }}
                      />
                    ))}
              </div>
            </form>
          </Container>
        </div>
      </Container>
      <LogoutButton onClick={() => dispatch(authActions.requestLogout())} />
    </>
  );
};

export default MainApp;
