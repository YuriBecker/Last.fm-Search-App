import { takeLatest, put, call } from 'redux-saga/effects';
import { Types as searchAlbumTypes } from '../../Ducks/searchAlbum';
import { getAlbum } from '../../../services/Api';
import showErrorNotification from '../../../utils/functions/showErrorNotification';

function* actionWatcher(action) {
  try {
    const { albumName } = action;

    const { data } = yield call(getAlbum, albumName);

    yield put({
      type: searchAlbumTypes.SUCCESS,
      info: data.results.albummatches.album,
    });
  } catch (e) {
    yield put({
      type: searchAlbumTypes.ERROR,
      error: e.toString(),
    });
    showErrorNotification(e.message);
  }
}

export default [takeLatest(searchAlbumTypes.REQUEST, actionWatcher)];
