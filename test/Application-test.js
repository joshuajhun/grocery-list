import React from 'react';
import {expect} from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import GroceryList from '../lib/components/GroceryList';

describe('GroceryList test', () => {

  it('should render login screen correctly', () => {
    let wrapper = shallow(<GroceryList/>);
    expect(wrapper.find('Login')).to.have.length(1);
    expect(wrapper.text()).to.equal('Please Login<Login />');
  });

  it('if given a user will render the application different',() => {

    const user = {email:"jhun@casimircreative.com"}
    const list = [{firebaseId:'-K_Y-m5jwf128nRdxg9a', id: 1483424866826, title: "suh"}]

    const wrapper = mount(<GroceryList/>)

    wrapper.state().user = user
    wrapper.state().listItems = list
    wrapper.update()

    expect(wrapper.state().user).to.deep.equal({email: "jhun@casimircreative.com"});
    expect(wrapper.state().listItems.length).to.equal(1)
    expect(wrapper.find('h1').text()).to.deep.equal(' Welcome ' + user.email + ' ');
    expect(wrapper.find('p').length).to.equal(1);
  });

  it('should fire a componentDidMount function', () => {
    sinon.spy(GroceryList.prototype, 'componentDidMount')
    const wrapper = mount(<GroceryList/>)
    expect(GroceryList.prototype.componentDidMount.calledOnce).to.equal(true)
  });

  it('should have multiple components',() =>{
    const user = {email:"jhun@casimircreative.com"}
    const list = [{firebaseId:'-K_Y-m5jwf128nRdxg9a', id: 1483424866826, title: "suh"}]

    const wrapper = mount(<GroceryList/>)

    wrapper.state().user = user
    wrapper.state().listItems = list
    wrapper.update();
    expect(wrapper.find('Login').length).to.equal(1);
    expect(wrapper.find('Controls').length).to.equal(1);
    expect(wrapper.find('setFilter').length).to.equal(1);
    expect(wrapper.find('RenderList').length).to.equal(1);
    expect(wrapper.find('Item').length).to.equal(1)
  });

});
