import React, { Component } from 'react'
import RenderList from './RenderList'
import Controls from './Controls'

export default class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      listItems: []
    }
  }

  componDidMount() {

  }
  
  handleClick(item) {
    const groceryItem = Object.assign(item, {id: Date.now()})
    this.state.listItems.push(groceryItem);
    this.setState({
      input: '',
      listItems: this.state.listItems,
    });
  }

  handleDelete(id) {
    const filteredItems =
    this.setState({listItems:  this.state.listItems.filter(item => item.id !== id)});
  }


  render() {
    return (
      <div>
        <Controls handleClick = {this.handleClick.bind(this)}
        />
        <section> All Items</section>
        <RenderList
          itemCollection = {this.state.listItems}
          remove = {this.handleDelete.bind(this)}
        />
      </div>
    )
  }
}
