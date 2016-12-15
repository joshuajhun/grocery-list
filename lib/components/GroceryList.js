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
    let storedItems = localStorage.getItem('list')
    this.setState({
      listItems: storedItems ? JSON.parse(storedItems): [],
    })
  }

  addItems(list) {
    firebase.database().ref('items').push(list);
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
