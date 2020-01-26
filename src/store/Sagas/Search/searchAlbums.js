import { takeLatest, put, call, select } from 'redux-saga/effects';
import { Types as searchAlbumsTypes } from '../../Ducks/searchAlbums';
import { Types as historyTypes } from '../../Ducks/history';
import { searchAlbums } from '../../../services/Api';
import showErrorNotification from '../../../utils/functions/showErrorNotification';
import { getUid } from '../../Selectors/Auth';

function* actionWatcher(action) {
  try {
    const { albumName } = action;

    const { data } = yield call(searchAlbums, albumName);

    const uid = yield select(getUid);

    yield put({
      type: historyTypes.ALBUM_ADD,
      uid,
      albumName,
    });

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
