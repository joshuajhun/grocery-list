import React from 'react';
import Controls from './Controls';
import RenderList from './RenderList';
import firebase from '../firebase';

export default class GroceryList extends React.Component {
  constructor(){
    super();
    this.state = {
      listItems: [],
    };
  }

  componentDidMount() {
    let storedItems = localStorage.getItem('list')
    this.setState({
      listItems: storedItems ? JSON.parse(storedItems): [],
    })
  }

  addItems(list) {
    this.state.listItems.push(Object.assign(list, { id: Date.now() }));
    this.setState({
      listItems: this.state.listItems,
    });
    this.setInLocal()
  }

  setInLocal() {
    localStorage.setItem('list', JSON.stringify(this.state.listItems))
  }


  removeItem(id) {
    let itemsLeft = this.state.listItems.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      listItems: itemsLeft,
    }, () => this.setInLocal());
  }

  render() {
    return (
      <div>
        <Controls handleClick={this.addItems.bind(this)}/>
        <section>
          <h4> All Grocery Items</h4>
          <RenderList listItems= {this.state.listItems} destroy={ this.removeItem.bind(this) } />
        </section>
      </div>
    );
  }
}
