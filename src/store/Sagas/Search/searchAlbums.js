import { takeLatest, put, call } from 'redux-saga/effects';
import { Types as searchAlbumsTypes } from '../../Ducks/searchAlbums';
import { searchAlbums } from '../../../services/Api';
import showErrorNotification from '../../../utils/functions/showErrorNotification';

function* actionWatcher(action) {
  try {
    const { albumName } = action;

    const { data } = yield call(searchAlbums, albumName);

    yield put({
      type: searchAlbumsTypes.SUCCESS,
      info: data.results.albummatches.album,
    });
  } catch (e) {
    yield put({
      type: searchAlbumsTypes.ERROR,
      error: e.toString(),
    });
    showErrorNotification(e.message);
  }
}

export default [takeLatest(searchAlbumsTypes.REQUEST, actionWatcher)];
