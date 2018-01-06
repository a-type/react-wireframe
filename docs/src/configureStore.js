import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const enhancers = [applyMiddleware(sagaMiddleware)];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(saga);

  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      const newReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(newReducer);
    });
  }

  return store;
}
