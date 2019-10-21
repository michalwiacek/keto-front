 
import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose,
  } from 'redux';
  import createSagaMiddleware, { END } from 'redux-saga';

  const sagaMiddleware = createSagaMiddleware();
  const makeStore = (initialState) => {
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const store = createStore(
      combineReducers(reducers),
      initialState,
      composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

    store.runSaga = () => {
      if (store.saga) return;
      store.saga = sagaMiddleware.run(rootSaga);
    };
  }