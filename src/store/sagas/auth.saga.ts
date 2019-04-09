import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ApiResponse } from 'apisauce';
import * as Keychain from 'react-native-keychain';

import {
  IActionWithParams,
  IApisauceService,
} from '~/interfaces';
import {
  IForgotPasswordParams,
  IForgotPasswordResponse,
  ILoginParams,
  ILoginResponse,
  IRegisterParams,
  IRegisterResponse,
} from '~/interfaces/auth.interfaces';

import {
  initUserData,
  POST_FORGOT_PASSWORD_FETCH,
  POST_FORGOT_PASSWORD_SET,
  POST_LOGIN_FETCH,
  POST_LOGIN_SET,
  POST_LOGOUT_FETCH,
  POST_LOGOUT_SET,
  POST_REGISTER_FETCH,
  POST_REGISTER_SET,
} from '../reducers/auth.reducer';

export function* loginSaga(api: IApisauceService, action: IActionWithParams<ILoginParams>): SagaIterator {
  try {
    const result: ApiResponse<ILoginResponse> = yield call(api.postLogin, action.params);
    if (result.status === 200) {
      yield call(Keychain.setGenericPassword, action.params.login, action.params.password);
      yield put({ type: POST_LOGIN_SET, error: false, data: result.data });
    } else if (result.data && result.data.message) {
      yield put({ type: POST_LOGIN_SET, error: true, data: result.data });
    } else {
      yield put({ type: POST_LOGIN_SET, error: true, data: { error: result.problem } });
    }
  } catch (error) {
    yield put({ type: POST_LOGIN_SET, error: true, data: { error } });
  }
  yield put(initUserData());
}

export function* registerSaga(api: IApisauceService, action: IActionWithParams<IRegisterParams>): SagaIterator {
  try {
    const result: ApiResponse<IRegisterResponse> = yield call(api.postRegister, action.params);
    if (result.status === 200) {
      yield put({ type: POST_REGISTER_SET, error: false, data: result.data });
      yield put({ type: POST_LOGIN_SET, error: false, data: result.data });
    } else if (result.data && result.data.message) {
      yield put({ type: POST_REGISTER_SET, error: true, data: result.data });
    } else {
      yield put({ type: POST_REGISTER_SET, error: true, data: { error: result.problem } });
    }
  } catch (error) {
    yield put({ type: POST_REGISTER_SET, error: true, data: { error } });
  }
  yield put(initUserData());
}

export function* forgotPasswordSaga(api: IApisauceService, action: IActionWithParams<IForgotPasswordParams>): SagaIterator {
  try {
    const result: ApiResponse<IForgotPasswordResponse> = yield call(api.postForgotPassword, action.params);
    if (result.status === 200) {
      yield put({ type: POST_FORGOT_PASSWORD_SET, error: false, data: result.data });
    } else if (result.data && result.data.message) {
      yield put({ type: POST_FORGOT_PASSWORD_SET, error: true, data: result.data });
    } else {
      yield put({ type: POST_FORGOT_PASSWORD_SET, error: true, data: { error: result.problem } });
    }
  } catch (error) {
    yield put({ type: POST_FORGOT_PASSWORD_SET, error: true, data: { error } });
  }
}

export function* logoutSaga(api: IApisauceService): SagaIterator {
  try {
    yield call(api.postLogout);
    yield call(Keychain.resetGenericPassword);
    yield put({ type: POST_LOGOUT_SET });
  } catch (error) {
    yield put({ type: POST_LOGOUT_SET });
  } // tslint:disable-line
}

export function* watchAuth(api: IApisauceService): SagaIterator {
  try {
    yield takeLatest(POST_LOGIN_FETCH, loginSaga, api);
    yield takeLatest(POST_REGISTER_FETCH, registerSaga, api);
    yield takeLatest(POST_FORGOT_PASSWORD_FETCH, forgotPasswordSaga, api);
    yield takeLatest(POST_LOGOUT_FETCH, logoutSaga, api);
  } catch (error) { } // tslint:disable-line
}
