import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from '~/store/reducers';
import { sagaInit } from '~/store/sagas';
import createApisauceService from '~/utils/apisauce';
import { IAction, IStore } from '~/interfaces';

const persistConfig: PersistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings', 'cookies'],
};
const persistedReducers = persistReducer(persistConfig, combineReducers(reducers));

const sagaMiddleware = createSagaMiddleware();
const store: Store<IStore, IAction> = createStore(
  persistedReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
const persistor = persistStore(store);

const api = createApisauceService('');
sagaMiddleware.run(sagaInit, api, store);

export {
  persistor,
  store,
};
