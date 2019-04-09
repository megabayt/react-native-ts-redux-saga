import { call, put, takeLatest } from 'redux-saga/effects';

import { forgotPasswordSaga, loginSaga, registerSaga, watchAuth } from '~/store/sagas/auth.saga';
import apisauceMock from '~/__mocks__/apisauceMock';
import * as Keychain from '~/__mocks__/react-native-keychain';
import {
  forgotPasswordFetch,
  initUserData,
  loginFetch,
  registerFetch,
  POST_FORGOT_PASSWORD_FETCH,
  POST_FORGOT_PASSWORD_SET,
  POST_LOGIN_FETCH,
  POST_LOGIN_SET,
  POST_REGISTER_FETCH,
  POST_REGISTER_SET,
} from '~/store/reducers/auth.reducer';
import { stepper, testSagaErrors } from '~/utils/tests';

describe('Auth sagas', async () => {
  describe('Login logic', async () => {
    it('should auth user', async (done) => {
      const action = loginFetch({ login: 'login', password: 'password' });

      const step = stepper(loginSaga(apisauceMock, action));
      expect(step()).toEqual(call(apisauceMock.postLogin, action.params));

      const response = await apisauceMock.postLogin(action.params);
      expect(step(response)).toEqual(call(Keychain.setGenericPassword, action.params.login, action.params.password));
      expect(step()).toEqual(put({ type: POST_LOGIN_SET, error: false, data: response.data }));
      expect(step()).toEqual(put(initUserData()));
      expect(step()).toBeUndefined();

      done();
    });
    await testSagaErrors({
      saga: loginSaga,
      actionCreator: loginFetch,
      apiMethodKey: 'postLogin',
      putActionType: POST_LOGIN_SET,
      afterEach: (step) => {
        expect(step()).toEqual(put(initUserData()));
      },
    });
  });
  describe('Register logic', async () => {
    it('should reg and auth user', async (done) => {
      const action = registerFetch({
        f: 'asd',
        i: 'asd',
        is_agree: 1,
        login: 'asd',
        mail: 'asd',
        password: 'asd',
        confirmpassword: 'asd',
      });
      const step = stepper(registerSaga(apisauceMock, action));

      expect(step()).toEqual(call(apisauceMock.postRegister, action.params));

      const response = await apisauceMock.postRegister(action.params);
      expect(step(response)).toEqual(put({ type: POST_REGISTER_SET, error: false, data: response.data }));
      expect(step()).toEqual(put({ type: POST_LOGIN_SET, error: false, data: response.data }));
      expect(step()).toEqual(put(initUserData()));
      expect(step()).toBeUndefined();

      done();
    });
    await testSagaErrors({
      saga: registerSaga,
      actionCreator: registerFetch,
      apiMethodKey: 'postRegister',
      putActionType: POST_REGISTER_SET,
      afterEach: (step) => {
        expect(step()).toEqual(put(initUserData()));
      },
    });
  });
  describe('Forgot password logic', async () => {
    it('should send email', async (done) => {
      const action = forgotPasswordFetch({
        mail: 'test@test.com',
      });
      const step = stepper(forgotPasswordSaga(apisauceMock, action));

      expect(step()).toEqual(call(apisauceMock.postForgotPassword, action.params));

      const response = await apisauceMock.postForgotPassword(action.params);
      expect(step(response)).toEqual(put({ type: POST_FORGOT_PASSWORD_SET, error: false, data: response.data }));
      expect(step()).toBeUndefined();

      done();
    });
    await testSagaErrors({
      saga: forgotPasswordSaga,
      actionCreator: forgotPasswordFetch,
      apiMethodKey: 'postForgotPassword',
      putActionType: POST_FORGOT_PASSWORD_SET,
    });
  });

  test('watch test', () => {
    const step = stepper(watchAuth(apisauceMock));
    expect(step()).toEqual(takeLatest(POST_LOGIN_FETCH, loginSaga, apisauceMock));
    expect(step()).toEqual(takeLatest(POST_REGISTER_FETCH, registerSaga, apisauceMock));
    expect(step()).toEqual(takeLatest(POST_FORGOT_PASSWORD_FETCH, forgotPasswordSaga, apisauceMock));
  });
});

export default undefined;
