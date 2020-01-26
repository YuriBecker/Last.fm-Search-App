import { takeLatest, put, call } from 'redux-saga/effects';
import { Types as authTypes } from '../../Ducks/auth';
import { login } from '../../../services/Firebase';
import showErrorNotification from '../../../utils/functions/showErrorNotification';
import showSuccessNotification from '../../../utils/functions/showSuccessNotification';

function* actionWatcher(action) {
  try {
    const { email, password } = action.payload;

    const userData = yield call(login, email, password);

    showSuccessNotification('Login successful!');

    yield put({
      type: authTypes.LOGIN_SUCCESS,
      user: userData.user,
    });
  } catch (e) {
    yield put({
      type: authTypes.LOGIN_ERROR,
      error: e.toString(),
    });
    showErrorNotification(e.message);
  }
}

export default [takeLatest(authTypes.LOGIN_REQUEST, actionWatcher)];
