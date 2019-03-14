import React from 'react';
import {shallow} from 'enzyme'
import { Login } from '../Login';
import {login} from '../actions/login'

const props = {
  login: jest.fn(),
}

const state = {
  Username: "",
  Password: "",
}

describe('Login component', () => {
    const wrapper = shallow(<Login {...props}/>)
    it('Should render the login component without crashing', () => {
      expect(wrapper.length).toBeTruthy();
    });

  const event = {
    target: {
      value: "some value"
    },
    preventDefault: jest.fn(),
  };

    it("handles change", () => {
      wrapper.instance().setState = jest.fn();
      wrapper.instance().changedHandler(event);
      expect(wrapper.instance().setState).toBeCalled();
    });

    it("handles submit", () => {
      wrapper.setState(state);
      wrapper.instance().onSubmit(event);
      expect(props.login).toHaveBeenCalled();
    });

});
