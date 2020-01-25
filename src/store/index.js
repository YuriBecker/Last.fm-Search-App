import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Ducks';
import rootSaga from './Sagas/rootSaga';
import { actions as authActions } from './Ducks/auth';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  /** run saga watchers */
  sagaMiddleware.run(rootSaga);
  store.dispatch(authActions.verifyRequest());
  return store;
}
