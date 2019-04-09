import { IAction, IActionWithParams, ICitlkResponse, ICommonState } from './common.interfaces';

export type IForgotPasswordFetch = (params: IForgotPasswordParams) => IActionWithParams<IForgotPasswordParams>;
export type ILoginFetch = (params: ILoginParams) => IActionWithParams<ILoginParams>;
export type IRegisterFetch = (params: IRegisterParams) => IActionWithParams<IRegisterParams>;
export type ILogout = () => IAction;

export interface ILoginParams {
  readonly login: string;
  readonly password: string;
}
export type ILoginErrors = Partial<ILoginParams>;
export const initialLoginParams: ILoginParams = {
  login: '',
  password: '',
};
export type ILoginResponse = Partial<ICitlkResponse<{
  readonly timeout: number;
  readonly user: any;
}>>;
export interface IRegisterParams {
  readonly f: string;
  readonly i: string;
  readonly is_agree: number;
  readonly login: string;
  readonly mail: string;
  readonly password: string;
  readonly confirmpassword: string;
}
export type IRegisterErrors = Partial<IRegisterParams>;
export const initialRegisterParams: IRegisterParams = {
  f: '',
  i: '',
  is_agree: 0,
  login: '',
  mail: '',
  password: '',
  confirmpassword: '',
};
export type IRegisterResponse = Partial<ILoginResponse>;

export interface IForgotPasswordParams {
  readonly mail: string;
}
export type IForgotPasswordErrors = Partial<IForgotPasswordParams>;
export const initialForgotPasswordParams: IForgotPasswordParams = {
  mail: '',
};
export type IForgotPasswordResponse = Partial<ICitlkResponse<{}>>;

// #region AuthStore
export type ILoginState = ICommonState<ILoginResponse>;
export type IRegisterState = ICommonState<IRegisterResponse>;
export type IForgotPasswordState = ICommonState<IForgotPasswordResponse>;
export interface IAuthState {
  readonly login: ILoginState;
  readonly register: IRegisterState;
  readonly forgotPassword: IForgotPasswordState;
}
export const initialAuthState: IAuthState = {
  login: {
    data: {},
    error: false,
    isFetching: false,
  },
  register: {
    data: {},
    error: false,
    isFetching: false,
  },
  forgotPassword: {
    data: {},
    error: false,
    isFetching: false,
  },
};
// #endregion
