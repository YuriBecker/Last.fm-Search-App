import { takeLatest, put, call } from 'redux-saga/effects';
import { Types as authTypes } from '../../Ducks/auth';
import { logout } from '../../../services/Firebase';
import showErrorNotification from '../../../utils/functions/showErrorNotification';

function* actionWatcher() {
  try {
    const user = yield call(logout);

    yield put({
      type: authTypes.LOGOUT_SUCCESS,
      user,
    });
  } catch (e) {
    yield put({
      type: authTypes.LOGOUT_ERROR,
      error: e.toString(),
    });
    showErrorNotification(e.message);
  }
}

export default [takeLatest(authTypes.LOGOUT_REQUEST, actionWatcher)];
