import React from 'react';
import {shallow} from 'enzyme'
import Navbar from '../Navbar';


describe('Navbar component', () => {
    const wrapper = shallow(<Navbar />)
    it('matches snapshot', () => {
     expect(wrapper).toMatchSnapshot();
    });
});