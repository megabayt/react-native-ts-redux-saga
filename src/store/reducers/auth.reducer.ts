import { ActionType } from 'redux-saga/effects';
import produce from 'immer';
import { chain } from 'lodash';

import {
  initialAuthState,
  IAction,
  IAuthState,
  IForgotPasswordFetch,
  ILoginFetch,
  ILogout,
  IRegisterFetch,
  IStore,
} from '~/interfaces';

export const POST_LOGIN_FETCH: ActionType = 'POST_LOGIN_FETCH';
export const POST_LOGIN_SET: ActionType = 'POST_LOGIN_SET';

export const POST_ESIA_LOGIN_FETCH: ActionType = 'POST_ESIA_LOGIN_FETCH';
export const POST_ESIA_LOGIN_SET: ActionType = 'POST_ESIA_LOGIN_SET';

export const POST_REGISTER_FETCH: ActionType = 'POST_REGISTER_FETCH';
export const POST_REGISTER_SET: ActionType = 'POST_REGISTER_SET';

export const POST_FORGOT_PASSWORD_FETCH: ActionType = 'POST_FORGOT_PASSWORD_FETCH';
export const POST_FORGOT_PASSWORD_SET: ActionType = 'POST_FORGOT_PASSWORD_SET';

export const POST_LOGOUT_FETCH: ActionType = 'POST_LOGOUT_FETCH';
export const POST_LOGOUT_SET: ActionType = 'POST_LOGOUT_SET';

export const INIT_USER_DATA: ActionType = 'INIT_USER_DATA';

export const loginSelector = (store: IStore) => store.auth.login.data;

export const loginFetch: ILoginFetch = params => ({ type: POST_LOGIN_FETCH, params });
export const registerFetch: IRegisterFetch = params => ({ type: POST_REGISTER_FETCH, params });
export const forgotPasswordFetch: IForgotPasswordFetch = params => ({ type: POST_FORGOT_PASSWORD_FETCH, params });
export const logout: ILogout = (): IAction => ({ type: POST_LOGOUT_FETCH });

export const initUserData = (): IAction => ({ type: INIT_USER_DATA });

const authReducer = (state = initialAuthState, action: IAction): IAuthState => produce(state, (draftState) => {
  switch (action.type) {
    case POST_LOGIN_FETCH:
      chain(draftState)
        .set('login.error', false)
        .set('login.isFetching', true)
        .value();
      break;
    case POST_LOGIN_SET:
      chain(draftState)
        .set('login.isFetching', false)
        .set('login.data', action.data || {})
        .set('login.error', !!action.error)
        .value();
      break;
    case POST_ESIA_LOGIN_FETCH:
      chain(draftState)
        .set('esia.error', false)
        .set('esia.isFetching', true)
        .value();
      break;
    case POST_ESIA_LOGIN_SET:
      chain(draftState)
        .set('esia.isFetching', false)
        .set('esia.data', action.data || {})
        .set('esia.error', !!action.error)
        .value();
      break;
    case POST_REGISTER_FETCH:
      chain(draftState)
        .set('register.error', false)
        .set('register.isFetching', true)
        .value();
      break;
    case POST_REGISTER_SET:
      chain(draftState)
        .set('register.isFetching', false)
        .set('register.data', action.data || {})
        .set('register.error', !!action.error)
        .value();
      break;
    case POST_FORGOT_PASSWORD_FETCH:
      chain(draftState)
        .set('forgotPassword.error', false)
        .set('forgotPassword.isFetching', true)
        .value();
      break;
    case POST_FORGOT_PASSWORD_SET:
      chain(draftState)
        .set('forgotPassword.isFetching', false)
        .set('forgotPassword.data', action.data || {})
        .set('forgotPassword.error', !!action.error)
        .value();
      break;
    case POST_LOGOUT_SET:
      return initialAuthState;
  }
});

export default authReducer;
