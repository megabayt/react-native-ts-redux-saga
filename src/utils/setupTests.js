import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { sagaInit } from "~/store/sagas";
import * as reducers from "~/store/reducers";
import { combineReducers } from "redux";
import api from "~/__mocks__/apisauceMock";

Enzyme.configure({ adapter: new Adapter() });

const createMockStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureMockStore([sagaMiddleware])(
    combineReducers(reducers)(undefined, { type: undefined })
  );
  sagaMiddleware.run(sagaInit, api, store);
  return store;
};

export default undefined;
export { createMockStore };
