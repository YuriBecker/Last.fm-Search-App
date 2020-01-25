import { combineReducers } from 'redux';

import searchArtist from './searchArtist';
import searchAlbum from './searchAlbum';

export default combineReducers({
  searchArtist,
  searchAlbum,
});
