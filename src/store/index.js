import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Ducks';
import rootSaga from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

/** Create redux store and activate redux dev tools */
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

/** run saga watchers */
sagaMiddleware.run(rootSaga);

export { store };
