import React from 'react';
import Controls from './Controls';
import RenderList from './RenderList';
import Login from './Login'
import SetFilter from './SetFilter'
import filteredMessages from './helpers/filteredMessages'
import firebase, { signIn, signOut } from '../firebase';


export default class GroceryList extends React.Component {
  constructor(){
    super();
    this.state = {
      filterText: '',
      listItems: [],
      user: null,
    };
  }
  componentDidMount() {
    firebase.database().ref('items').on('value', (snapshot) => {
      let itemsFromFirebase = this.createArray(snapshot.val())
      this.setState({ listItems: itemsFromFirebase})
    })
  }

  createArray(object) {
    if (!object){
      return []
    }
    let fireBaseKeys = Object.keys(object)
    let allFromFireBase = fireBaseKeys.map((singleKey) => {
      let singleItem = object[singleKey];
      singleItem['firebaseId'] = singleKey;
      return singleItem;
    });
    return allFromFireBase
  }

  addItems(list) {
    firebase.database().ref('items').push(Object.assign(list, { id: Date.now() }));
  }


  removeItem(id) {
    let listItem = this.state.listItems.find((listItem) => listItem.id === id)
    firebase.database().ref('items/' + listItem.firebaseId ).remove();
  }

  setFilter(text){
    this.setState({filterText: text})
  }

  render() {
    if (!this.state.user) {
      return (
        <div>
        Please Login
        <Login authorize={signIn} setUser= { (userFromFireBase)=> { this.setState({user: userFromFireBase.user})}} text="login" />
        </div>
      );
    }
    return (
      <div>
      <h1> Welcome {this.state.user.email} </h1>
        <SetFilter items= {this.setFilter.bind(this)}/>
        <Login authorize={signOut} setUser= { () => this.setState({ user: null })} text="logout"/>
        <Controls handleClick={this.addItems.bind(this)}/>
        <section>
          <h4> All Grocery Items</h4>
          <RenderList listItems= {filteredMessages(this.state.listItems, this.state.filterText)} destroy={ this.removeItem.bind(this) } />
        </section>
      </div>
    );
  }
}
