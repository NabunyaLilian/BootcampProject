import React from 'react';
import {shallow} from 'enzyme'
import { Products } from '../products';
import {fetchProduct} from '../actions/productsAction'

const props = {
    products: [],
    error: null,
    fetchProduct: jest.fn(),
}

describe('product component', () => {
    const wrapper = shallow(<Products {...props}/>)
    it('matches snapshot', () => {
     expect(wrapper).toMatchSnapshot();
    });
});
