import { ApiErrorResponse, ApiOkResponse } from 'apisauce';

import {
  IApisauceService,
} from '~/interfaces';

const response: any = {
  config: undefined,
  data: null,
  duration: 22,
  headers: undefined,
  originalError: null,
  status: undefined,
};
const okResponse: ApiOkResponse<any> = {
  ...response,
  ok: true,
  status: 200,
};
const errResponse: ApiErrorResponse<any> = {
  ...response,
  ok: false,
  originalError: null,
};

const apisauceMock: IApisauceService = {
  postLogin: jest.fn(async (params) => {
    if (params.login === 'login' && params.password === 'password') {
      return {
        ...okResponse,
        data: { content: { timeout: 0, user: {} }, success: true },
      };
    }
    return { ...errResponse, data: { field: 'login', message: 'Неверный логин или пароль', success: false } };
  }),
  postLogout: jest.fn(async () => {
    return okResponse;
  }),
  postRegister: jest.fn(async (params) => {
    let field = '';
    if (params.f !== 'asd') {
      field = 'f';
    } else if (params.i !== 'asd') {
      field = 'i';
    } else if (params.login !== 'asd') {
      field = 'login';
    } else if (params.mail !== 'asd') {
      field = 'mail';
    } else if (params.password !== 'asd') {
      field = 'password';
    }
    if (field) {
      return { ...errResponse, data: { field, message: 'Проверьте, пожалуйста, правильность заполнения', success: false } };
    }
    return { ...okResponse, data: { content: { timeout: 0, user: {} }, success: true } };
  }),
  postForgotPassword: jest.fn(async (params) => {
    if (!params) {
      return errResponse;
    }
    return { ...okResponse, data: { content: {}, message: 'Новый пароль отправлен Вам на указанный адрес', success: true } };
  }),
};

export default apisauceMock;
