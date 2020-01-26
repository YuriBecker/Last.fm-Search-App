import { takeLatest, put, call } from 'redux-saga/effects';
import { Types as getAlbumInfoTypes } from '../../Ducks/getAlbumInfo';
import { getAlbumInfo } from '../../../services/Api';
import showErrorNotification from '../../../utils/functions/showErrorNotification';

function* actionWatcher(action) {
  try {
    const { mbid } = action;

    const { data } = yield call(getAlbumInfo, mbid);

    yield put({
      type: getAlbumInfoTypes.SUCCESS,
      info: data,
    });
  } catch (e) {
    yield put({
      type: getAlbumInfoTypes.ERROR,
      error: e.toString(),
    });
    showErrorNotification(e.message);
  }
}

export default [takeLatest(getAlbumInfoTypes.REQUEST, actionWatcher)];
