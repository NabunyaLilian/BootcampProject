import React from 'react';
import {shallow} from 'enzyme'
import { Signup } from '../signup';
import {signup} from '../actions/signup'

const props = {
    signup: jest.fn(),
}

const state = {
    Username: "",
    Password: "",
    FirstName: "",
    isAdmin: ""
}

describe('Signup component', () => {
    const wrapper = shallow(<Signup {...props}/>)
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
      wrapper.instance().changeHandler(event);
      expect(wrapper.instance().setState).toBeCalled();
    });

    it("handles submit", () => {
      wrapper.setState(state);
      wrapper.instance().handleSubmit(event);
      expect(props.signup).toHaveBeenCalled();
    });

});
