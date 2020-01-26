import { combineReducers } from 'redux';

import searchArtist from './searchArtist';
import searchAlbums from './searchAlbums';
import getAlbumInfo from './getAlbumInfo';
import auth from './auth';

export default combineReducers({
  searchArtist,
  searchAlbums,
  getAlbumInfo,
  auth,
});
