import { takeLatest, put, call } from 'redux-saga/effects';
import { Types as authTypes } from '../../Ducks/auth';
import { signUp } from '../../../services/Firebase';
import showErrorNotification from '../../../utils/functions/showErrorNotification';

function* actionWatcher(action) {
  try {
    const { email, password } = action.payload;

    const user = yield call(signUp, email, password);

    yield put({
      type: authTypes.SIGNUP_SUCCESS,
      user,
    });
  } catch (e) {
    yield put({
      type: authTypes.SIGNUP_ERROR,
      error: e.toString(),
    });
    showErrorNotification(e.message);
  }
}

export default [takeLatest(authTypes.SIGNUP_REQUEST, actionWatcher)];
