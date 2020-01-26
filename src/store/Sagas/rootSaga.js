import { all } from 'redux-saga/effects';

import searchAlbums from './Search/searchAlbums';
import getAlbumInfo from './Search/getAlbumInfo';
import SearchArtist from './Search/searchArtist';
import login from './Auth/login';
import signUp from './Auth/signUp';
import logout from './Auth/logout';
import verify from './Auth/verify';

export default function* rootSaga() {
  yield all([
    ...searchAlbums,
    ...SearchArtist,
    ...login,
    ...logout,
    ...verify,
    ...signUp,
    ...getAlbumInfo,
  ]);
}
