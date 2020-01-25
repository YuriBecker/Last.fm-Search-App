import { all } from 'redux-saga/effects';

import searchAlbum from './Search/searchAlbum';
import SearchArtist from './Search/searchArtist';
import login from './Auth/login';
import signUp from './Auth/signUp';
import logout from './Auth/logout';
import verify from './Auth/verify';

export default function* rootSaga() {
  yield all([...searchAlbum, ...SearchArtist, ...login, ...logout, ...verify, ...signUp]);
}
