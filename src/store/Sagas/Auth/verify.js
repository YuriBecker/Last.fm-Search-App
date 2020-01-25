import { takeLatest, put, call } from 'redux-saga/effects';
import { Types as authTypes } from '../../Ducks/auth';
import { verifyAuth } from '../../../services/Firebase';

function* actionWatcher() {
  try {
    const user = yield call(verifyAuth);

    if (user !== null) {
      yield put({
        type: authTypes.LOGIN_SUCCESS,
        user,
      });
    }

    yield put({
      type: authTypes.VERIFY_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: authTypes.VERIFY_ERROR,
    });
  }
}

export default [takeLatest(authTypes.VERIFY_REQUEST, actionWatcher)];
