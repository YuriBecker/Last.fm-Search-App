import { takeLatest, put, call } from 'redux-saga/effects';
import { Types as getAlbumInfoTypes } from '../../Ducks/getAlbumInfo';
import { getAlbumInfo } from '../../../services/Api';
import showErrorNotification from '../../../utils/functions/showErrorNotification';

function* actionWatcher(action) {
  try {
    const { artistName, albumName } = action.payload;

    const { data } = yield call(getAlbumInfo, artistName, albumName);

    if (data.error) {
      throw new Error(data.message);
    }

    yield put({
      type: getAlbumInfoTypes.SUCCESS,
      info: data.album,
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
