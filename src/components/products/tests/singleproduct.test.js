import React from 'react';
import {shallow} from 'enzyme'
import SingleProduct from '../SingleProduct';

const props = {
    id:0,
    name:"",
    quantity:"",
    price:"",
    minimumQuantity:"",
    category:""
}

describe('product component', () => {
    const wrapper = shallow(<SingleProduct {...props}/>)
    it('matches snapshot', () => {
     expect(wrapper).toMatchSnapshot();
    });
});
