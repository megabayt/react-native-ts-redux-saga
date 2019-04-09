import { call, put, ActionType } from 'redux-saga/effects';
import { CLIENT_ERROR } from 'apisauce';
import { SagaIterator } from 'redux-saga';
import { isFunction } from 'lodash';

import { IAction, IApisauceService, IApiMethods } from '~/interfaces';
import apisauceMock from '~/__mocks__/apisauceMock';

export const stepper = (fn: any) => (mock?: any) => fn.next(mock).value;

interface ITestSagaErrorsParams {
  readonly afterEach?: (step: any) => void;
  readonly afterEachCall?: (step: any, response: any) => void;
  readonly beforeEach?: (step: any) => void;
  readonly saga: (api: IApisauceService, action: any) => SagaIterator;
  readonly actionCreator: (params: any) => IAction;
  readonly params?: any;
  readonly useParams?: boolean;
  readonly apiMethodKey: keyof IApiMethods;
  readonly putActionType: ActionType;
}
type ITestSagaErrors = (params: ITestSagaErrorsParams) => Promise<void>;
export const testSagaErrors: ITestSagaErrors = async ({
  afterEach,
  afterEachCall,
  beforeEach,
  saga,
  actionCreator,
  params = {},
  useParams = false,
  apiMethodKey,
  putActionType,
}) => {
  const apiMethod: any = apisauceMock[apiMethodKey];
  it('should warn if no success', async (done) => {
    const action = actionCreator(params);
    const step = stepper(saga(apisauceMock, action));
    if (isFunction(beforeEach)) {
      beforeEach(step);
    }
    const args: any = [apiMethod];
    if (action.params) {
      args.push(params);
    }
    if (useParams) {
      args.push(params);
    }
    expect(step()).toEqual(call.apply(null, args));
    const data = { message: 'Fail' };
    const response = { status: 400, data };
    const responseActual = !isFunction(afterEachCall) ? response : undefined;
    if (isFunction(afterEachCall)) {
      afterEachCall(step, response);
    }
    expect(step(responseActual)).toEqual(put({ type: putActionType, error: true, data }));
    if (isFunction(afterEach)) {
      afterEach(step);
    }
    expect(step()).toBeUndefined();
    done();
  });
  it('should warn if apisauce problem', async (done) => {
    const action = actionCreator(params);
    const step = stepper(saga(apisauceMock, action));
    if (isFunction(beforeEach)) {
      beforeEach(step);
    }
    const args: any = [apiMethod];
    if (action.params) {
      args.push(params);
    }
    if (useParams) {
      args.push(params);
    }
    expect(step()).toEqual(call.apply(null, args));
    const response = { status: 400, problem: CLIENT_ERROR };
    const responseActual = !isFunction(afterEachCall) ? response : undefined;
    if (isFunction(afterEachCall)) {
      afterEachCall(step, response);
    }
    expect(step(responseActual)).toEqual(put({ type: putActionType, error: true, data: { error: CLIENT_ERROR } }));
    if (isFunction(afterEach)) {
      afterEach(step);
    }
    expect(step()).toBeUndefined();
    done();
  });
  it('should catch error', async (done) => {
    const action = actionCreator(params);
    const error = new TypeError('Cannot read property \'status\' of undefined');

    const step = stepper(saga(apisauceMock, action));
    if (isFunction(beforeEach)) {
      beforeEach(step);
    }
    const args: any = [apiMethod];
    if (action.params) {
      args.push(params);
    }
    if (useParams) {
      args.push(params);
    }
    expect(step()).toEqual(call.apply(null, args));
    if (isFunction(afterEachCall)) {
      afterEachCall(step, undefined);
    }
    expect(step()).toEqual(put({ type: putActionType, error: true, data: { error } }));
    if (isFunction(afterEach)) {
      afterEach(step);
    }
    expect(step()).toBeUndefined();
    done();
  });
};
