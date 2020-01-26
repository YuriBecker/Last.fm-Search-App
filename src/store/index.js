import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Ducks';
import rootSaga from './Sagas/rootSaga';
import { actions as authActions } from './Ducks/auth';

export default function configureStore() {
  const persistConfig = {
    key: 'root',
    whitelist: ['history'],
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  const persistor = persistStore(store);

  // Run saga watchers
  sagaMiddleware.run(rootSaga);

  // Verify user auth
  store.dispatch(authActions.verifyRequest());

  return { store, persistor };
}
