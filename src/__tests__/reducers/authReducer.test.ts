import { CLIENT_ERROR } from 'apisauce';

import authReducer, {
  forgotPasswordFetch,
  loginFetch,
  registerFetch,
  POST_ESIA_LOGIN_SET,
  POST_FORGOT_PASSWORD_SET,
  POST_LOGIN_SET,
  POST_LOGOUT_SET,
  POST_REGISTER_SET,
} from '~/store/reducers/auth.reducer';
import { initialAuthState } from '~/interfaces';

describe('auth reducer logic', () => {
  describe('login logic', () => {
    it('request logic', () => {
      const data = {};
      const state = authReducer(initialAuthState, loginFetch({
        login: 'login',
        password: 'password',
      }));
      expect(state.login.isFetching).toBe(true);
      expect(state.login.data).toEqual(data);
      expect(state.login.error).toBe(false);
    });
    it('success logic', () => {
      const data = {
        content: {},
      };
      const state = authReducer(initialAuthState, { type: POST_LOGIN_SET, data });
      expect(state.login.isFetching).toBe(false);
      expect(state.login.data).toEqual(data);
      expect(state.login.error).toBe(false);
    });
    it('error logic', () => {
      const data = {
        message: CLIENT_ERROR,
      };
      const state = authReducer(initialAuthState, { type: POST_LOGIN_SET, error: true, data });
      expect(state.login.isFetching).toBe(false);
      expect(state.login.data).toEqual(data);
      expect(state.login.error).toBe(true);
    });
  });
  describe('register logic', () => {
    it('request logic', () => {
      const data = {};
      const state = authReducer(initialAuthState, registerFetch({
        f: '',
        i: '',
        login: '',
        mail: '',
        is_agree: 1,
        password: '',
        confirmpassword: '',
      }));
      expect(state.register.isFetching).toBe(true);
      expect(state.register.data).toEqual(data);
      expect(state.register.error).toBe(false);
    });
    it('success logic', () => {
      const data = {
        content: {},
      };
      const state = authReducer(initialAuthState, { type: POST_REGISTER_SET, data });
      expect(state.register.isFetching).toBe(false);
      expect(state.register.data).toEqual(data);
      expect(state.register.error).toBe(false);
    });
    it('error logic', () => {
      const data = {
        message: CLIENT_ERROR,
      };
      const state = authReducer(initialAuthState, { type: POST_REGISTER_SET, error: true, data });
      expect(state.register.isFetching).toBe(false);
      expect(state.register.data).toEqual(data);
      expect(state.register.error).toBe(true);
    });
  });
  describe('forgotPassword logic', () => {
    it('request logic', () => {
      const data = {};
      const state = authReducer(initialAuthState, forgotPasswordFetch({
        mail: '',
      }));
      expect(state.forgotPassword.isFetching).toBe(true);
      expect(state.forgotPassword.data).toEqual(data);
      expect(state.forgotPassword.error).toBe(false);
    });
    it('success logic', () => {
      const data = {
        content: {},
        success: true,
      };
      const state = authReducer(initialAuthState, { type: POST_FORGOT_PASSWORD_SET, data });
      expect(state.forgotPassword.isFetching).toBe(false);
      expect(state.forgotPassword.data).toEqual(data);
      expect(state.forgotPassword.error).toBe(false);
    });
    it('error logic', () => {
      const data = {
        message: CLIENT_ERROR,
      };
      const state = authReducer(initialAuthState, { type: POST_FORGOT_PASSWORD_SET, error: true, data });
      expect(state.forgotPassword.isFetching).toBe(false);
      expect(state.forgotPassword.data).toEqual(data);
      expect(state.forgotPassword.error).toBe(true);
    });
  });
  test('logout logic', () => {
    const state = authReducer(
      {
        ...initialAuthState,
        login: {
          ...initialAuthState.login,
          isFetching: true,
          error: true,
        },
      },
      { type: POST_LOGOUT_SET },
    );
    expect(state).toEqual(initialAuthState);
  });
  test('no data without crash logic', () => {
    let state = authReducer(undefined, { type: POST_LOGIN_SET });
    state = authReducer(initialAuthState, { type: POST_LOGIN_SET });
    state = authReducer(initialAuthState, { type: POST_REGISTER_SET });
    state = authReducer(initialAuthState, { type: POST_ESIA_LOGIN_SET });
    state = authReducer(initialAuthState, { type: POST_FORGOT_PASSWORD_SET });
    expect(state).toEqual(initialAuthState);
  });
});

export default undefined;
