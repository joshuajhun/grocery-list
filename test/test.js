import {expect} from 'chai';
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Main from '../lib/components/Main'
import GroceryList from '../lib/components/GroceryList'
import RenderList from '../lib/components/RenderList'

require('locus')


describe('testing with enzyme', () => {
  it('should have a component called GroceryList', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find('GroceryList')).to.have.length(1);
  });

  it('GroceryList should have RenderList inside of it as a component', () => {
    const wrapper = shallow(<GroceryList/>);
    expect(wrapper.find('RenderList')).to.have.length(1);
  });

  it('should have a default state', () => {
    const wrapper = shallow(<GroceryList />);

    let stateOfGroceryList = wrapper.state();

    expect(stateOfGroceryList.input).to.equal('')
    expect(stateOfGroceryList.listItems).to.deep.equal([])
    expect(wrapper.state('input')).to.equal('')
    expect(wrapper.state('listItems')).to.deep.equal([])
  });

  it('should allow me to change the input state' , () => {
    const wrapper = shallow(<GroceryList />);
    const textInput = wrapper.find('.input-text');
    const submitButton = wrapper.find('.submit-button');

    expect(wrapper.state().listItems.length).to.deep.equal(0);
    textInput.simulate('change',{target:{value:'Steam Roller'}});
    expect(wrapper.state().input).to.equal('Steam Roller')
    submitButton.simulate('click');
    expect(wrapper.state().listItems.length).to.deep.equal(1);
  });

  it.only('renderlist should take an array of objects and interact with it' ,() => {
    const items   = [{id: 1, input: 'nvm'}, {id:2, input: 'what is going on...'}]
    const wrapper = shallow(<RenderList listItems= {items}/>)
    let {id, input} = wrapper.find('Item').get(1).props


    expect(wrapper.find('Item').length).to.equal(2)
    expect(wrapper.find('Item').get(1).props.id).to.equal(id)
    expect(wrapper.find('Item').get(1).props.input).to.equal(input)

  });
})
