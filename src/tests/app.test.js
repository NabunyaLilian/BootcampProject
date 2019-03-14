import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import App from "../App";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("App", () => {
  const store = mockStore({});
  beforeEach(() => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
  it("should render without crashing", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});