import { all, call, put, spawn } from 'redux-saga/effects';
import SplashScreen from 'react-native-splash-screen';
import { SagaIterator } from 'redux-saga';
import * as Keychain from 'react-native-keychain';

import { IApisauceService } from '~/interfaces';

import { watchAuth } from './auth.saga';
import { loginFetch } from '../reducers/auth.reducer';

export function* initApp(): SagaIterator {
  if (!__DEV__) {
    SplashScreen.hide();
  }
}

export const sagaInit = function* (api: IApisauceService): SagaIterator {
  yield all([
    spawn(watchAuth, api),
  ]);
  const credentials = yield call(Keychain.getGenericPassword);
  if (credentials) {
    yield put(loginFetch({ login: credentials.username, password: credentials.password }));
  } else if (!__DEV__) {
    SplashScreen.hide();
  }
};
