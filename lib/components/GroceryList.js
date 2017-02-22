import React, { Component } from 'react'

export default class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      input:'',
    }
  }
  render() {
    return (
      <div>
        <input type='text' value={this.state.input}
               onChange={ (e) => this.setState({ input: e.target.value })}/>
        <input type='submit'/>

      </div>
    );
  }
}
