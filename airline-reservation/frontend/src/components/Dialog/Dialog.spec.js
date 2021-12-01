import React from 'react';
import { shallow } from 'enzyme';
import Dialog from './Dialog';

describe('Dialog Component', ()=>{
    let wrapper;
    let props;
    beforeAll(()=>{
        props = {
           open: true,
           actionLabel: 'Save',
           title: 'Cart',
           action: jest.fn()
       }
       wrapper = shallow(<Dialog cartItem={props}/>);
   })

   it('It shold have a dialog header', ()=>{
       expect(wrapper.find('#customized-dialog-title').exists()).toBe(true);
   })
})
