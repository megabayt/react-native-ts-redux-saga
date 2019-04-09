import { ComponentType } from 'react';
import { ActionType } from 'redux-saga/effects';
import { ApisauceInstance, ApiResponse } from 'apisauce';

import {
  IAuthState,
  IForgotPasswordParams,
  IForgotPasswordResponse,
  ILoginParams,
  ILoginResponse,
  IRegisterParams,
  IRegisterResponse,
} from './auth.interfaces';

export type HOC = (component: ComponentType<any>) => ComponentType<any>;

export type IActionParamsUnion = ILoginParams
  | IRegisterParams
  | IForgotPasswordParams
  | string
  | number;

export type IActionDataUnion = ILoginResponse
  | IRegisterResponse
  | IForgotPasswordResponse
  | ICitlkError
  | string
  | number;

export interface IAction {
  readonly type: ActionType;
  readonly params?: IActionParamsUnion;
  readonly data?: IActionDataUnion;
  readonly error?: boolean;
}
export interface IActionWithParams<P> {
  readonly type: ActionType;
  readonly params: P;
}
export interface IActionWithData<D> {
  readonly type: ActionType;
  readonly data: D;
  readonly error?: boolean;
}
export interface IStore {
  readonly auth: IAuthState;
}
export interface ICommonState<T> {
  readonly isFetching: boolean;
  readonly error: boolean;
  readonly data: T;
}
export interface VocAgent {
  readonly id: string;
  readonly label: string;
}
export interface IApiMethods {
  readonly postLogin: (params: ILoginParams) => Promise<ApiResponse<ILoginResponse>>;
  readonly postForgotPassword: (params: IForgotPasswordParams) => Promise<ApiResponse<IForgotPasswordResponse>>;
  readonly postRegister: (params: IRegisterParams) => Promise<ApiResponse<IRegisterResponse>>;
  readonly postLogout: () => Promise<ApiResponse<{}>>;
}
export interface IApisauceService extends IApiMethods {
  readonly instance?: ApisauceInstance;
}

export interface ICitlkSuccess<T> {
  readonly content: T;
  readonly success: boolean;
}
export interface ICitlkError {
  readonly field: string;
  readonly message: string;
  readonly success: boolean;
}
export type ICitlkResponse<T> = ICitlkSuccess<T> & ICitlkError;

export type IIconName = 'menu'
  | 'bell'
  | 'credit-card'
  | 'drop'
  | 'flash-on-indicator'
  | 'house'
  | 'menu2'
  | 'lock'
  | 'man-user'
  | 'geo'
  | 'tachometer'
  | 'three-buildings'
  | 'plus'
  | 'bin'
  | 'arrow-down';
