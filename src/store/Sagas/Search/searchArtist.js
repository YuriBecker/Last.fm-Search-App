import { takeLatest, put, call } from 'redux-saga/effects';
import { Types as searchArtistTypes } from '../../Ducks/searchArtist';
import { getArtist } from '../../../services/Api';
import showErrorNotification from '../../../utils/functions/showErrorNotification';

function* actionWatcher(action) {
  try {
    const { artistName } = action;

    const { data } = yield call(getArtist, artistName);

    if (data.error) {
      throw new Error(data.message);
    }

    yield put({
      type: searchArtistTypes.SUCCESS,
      info: data.artist,
    });
  } catch (e) {
    yield put({
      type: searchArtistTypes.ERROR,
      error: e.toString(),
    });
    showErrorNotification(e.message);
  }
}

export default [takeLatest(searchArtistTypes.REQUEST, actionWatcher)];
