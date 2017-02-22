import React, { Component } from 'react'

export default class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      input:'',
      // i need an array within my state
      listItems: [],
    }
  }

  handleSubmit() {
    let listObject = { input: this.state.input }
    this.state.listItems.push(listObject) // returns 1
    this.setState({ listItems: this.state.listItems })
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.input}
               onChange={ (e) => this.setState({ input: e.target.value })}/>
        <input type='submit' onClick={this.handleSubmit.bind(this)}/>

      </div>
    );
  }
}
