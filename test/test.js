import {expect} from 'chai';
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Main from '../lib/components/Main'
require('locus')

describe('testing with enzyme', () => {
  it('should have a component called GroceryList', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find('GroceryList')).to.have.length(1)
  });
})
