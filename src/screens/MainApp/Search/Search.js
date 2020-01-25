/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import { Container, FormControlLabel, RadioGroup } from '@material-ui/core';
import { Redirect } from 'react-router';
import { Chip } from 'material-ui';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import {
  UnderlinedTitle,
  Logo,
  Button,
  SearchBar,
  RadioButton,
  LogoutButton,
} from '../../../components';
import { actions as authActions } from '../../../store/Ducks/auth';
import { actions as searchArtistActions } from '../../../store/Ducks/searchArtist';
import { actions as searchAlbumActions } from '../../../store/Ducks/searchAlbum';
import validateInputSearch from '../../../utils/validators/validateInputSearch';

const MainApp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchType, setSearchType] = useState('artist');
  const [searchQuery, setSearchQuery] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [historySearch, setHistorySearch] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = chipToDelete => () => {
    setHistorySearch(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  const handleSearch = () => {
    if (!validateInputSearch(searchQuery)) {
      return;
    }

    if (searchType === 'artist') dispatch(searchArtistActions.searchArtist(searchQuery));
    else dispatch(searchAlbumActions.searchAlbum(searchQuery));

    setRedirect(true);
  };

  if (redirect) {
    if (searchType === 'artist') return <Redirect push to={`/artist?name=${searchQuery}`} />;
    if (searchType === 'album') return <Redirect push to={`/album?name=${searchQuery}`} />;
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
            <div className={classes.searchContainer}>
              <SearchBar
                placeholder="Type to search artists"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
              />
              <Button className={classes.button} onClick={handleSearch}>
                Search
              </Button>
              {/* <Chip variant="outlined" color="secondary" onDelete={handleDelete} /> */}
            </div>
          </Container>
        </div>
      </Container>
      <LogoutButton onClick={() => dispatch(authActions.requestLogout())} />
    </>

    // <div className={classes.historyContainer}>
    //   <Chip variant="outlined" color="secondary" onDelete={handleDelete} />
    //   {historySearch.map(data => {
    //     return (
    //       <Chip
    //         key={data.key}
    //         label={data.label}
    //         onDelete={chip => handleDelete(chip)}
    //         className={classes.chip}
    //       />
    //     );
    //   })}
    // </div>
  );
};

export default MainApp;
