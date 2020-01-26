import { combineReducers } from 'redux';

import searchArtist from './searchArtist';
import searchAlbum from './searchAlbum';
import getAlbumInfo from './getAlbumInfo';
import auth from './auth';

export default combineReducers({
  searchArtist,
  searchAlbum,
  getAlbumInfo,
  auth,
});
