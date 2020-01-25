import { all } from 'redux-saga/effects';

import searchAlbum from './searchAlbum';
import SearchArtist from './searchArtist';

export default function* rootSaga() {
  yield all([...searchAlbum, ...SearchArtist]);
}
