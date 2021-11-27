import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';


describe('Card component', () => {
    let wrapper;
    beforeAll(()=>{
        const props = {
            restaurant:'my restaurant',
            dishName: 'Burger',
            price:'4',
            dishType:'Veg'
          }

       wrapper = shallow(<Card item={props}/>);
    })

    it('should render card component when called', () => {
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('.cardBody').exists()).toBe(true);
      expect(wrapper.find('.card-img-top').exists()).toBe(true);
    });


    it('should have addToCart and Favorite button', ()=>{
        expect(wrapper.find('.favoriteButton').exists()).toBe(true);
        expect(wrapper.find('.addToCart').exists()).toBe(true);
    })
});