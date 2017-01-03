import React from 'react';
import Controls from './Controls';
import RenderList from './RenderList';
import firebase, { signIn, signOut } from '../firebase';

export default class GroceryList extends React.Component {
  constructor(){
    super();
    this.state = {
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

  render() {
    if (!this.state.user) {
      return (
        <div>
        Please Login
        <Login authorize={signIn} setUser= { (userFromFireBase)=> { this.setState({user: userFromFireBase.user})}} text="login" />
        </div>
      )
    }
    return (
      <div>
      <h1> Welcome {this.state.user.email} </h1>
        <Login authorize={signOut} setUser= { () => this.setState({ user: null })} text="logout"/>
        <Controls handleClick={this.addItems.bind(this)}/>
        <section>
          <h4> All Grocery Items</h4>
          <RenderList listItems= {this.state.listItems} destroy={ this.removeItem.bind(this) } />
        </section>
      </div>
    );
  }
}

const Login = ({ authorize, setUser, text }) => {
  return (
    <div>
    <button onClick={() =>  authorize().then((fromFirebase) => setUser(fromFirebase)) }>{text}</button>
    </div>
  );
};
