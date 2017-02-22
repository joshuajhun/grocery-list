import React, { Component } from 'react'
import RenderList from './RenderList'

export default class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      input:'',
      listItems: [],
    }
  }

  handleClick() {
    let listItemObj = {input: this.state.input, id: Date.now()}
    this.state.listItems.push(listItemObj)
    this.setState({ input: '', listItems: this.state.listItems})
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.input}
               onChange={ (e) => this.setState({ input: e.target.value })}/>
        <input type='submit' onClick ={() => this.handleClick()}/>
        <section> All Items </section>
        <RenderList listItems={ this.state.listItems}/>
      </div>
    );
  }
}
