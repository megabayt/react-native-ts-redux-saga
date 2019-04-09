import { keys } from 'lodash';
import { create, ApisauceInstance } from 'apisauce';
import { Buffer } from 'buffer';

import config from '~/constants/config';
import {
  IApisauceService,
} from '~/interfaces';

const {
  baseURL,
  responseTimeout,
} = config;

const createApisauceService = (cookieString: string): IApisauceService => {
  const api: ApisauceInstance = create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Cookie: cookieString,
      connection: 'keep-alive',
    },
    withCredentials: true,
    timeout: responseTimeout,
  });

  api.addRequestTransform((request) => {
    if (keys(request.data).indexOf('chunk') !== -1) { // исключение для upload'а файлов
      const newReqData = Buffer.from(JSON.stringify(request.data), 'utf8');
      request.data = newReqData; // tslint:disable-line
    } else {
      const newReqData = Buffer.from(
        JSON.stringify({
          data: {
            ...request.data,
          },
        }),
        'utf8');
      request.data = newReqData; // tslint:disable-line
    }
  });

  return {
    instance: api,

    postLogin: params => api.post('?type=sessions&action=create', params),
    postForgotPassword: params => api.post('?type=sessions&action=password_reset', params),
    postRegister: params => api.post('?type=sessions&action=register', params),
    postLogout: () => api.post('?type=sessions&action=delete'),
  };
};

export default createApisauceService;
