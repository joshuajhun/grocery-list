import React from 'react';
import Controls from './Controls';
import RenderList from './RenderList';

export default class GroceryList extends React.Component {
  constructor(){
    super();
    this.state = {
      listItems: [],
    };
  }

  componentDidMount() {
    let allItems = localStorage.getItem('list')
    this.setState({
      listItems: allItems ? JSON.parse(allItems) : []
    })
  }
   storeInLocal() {
     localStorage.setItem('list', JSON.stringify(this.state.listItems))
   }

  addItems(list) {
    this.state.listItems.push(Object.assign(list, { id: Date.now() }));
    this.setState({
      listItems: this.state.listItems,
    });
    this.storeInLocal()
  }

 updateItem(editText, id){
   let updatedItem = this.state.listItems.filter((listItem) => {
     if(listItem.id !== id){
       return listItem
     }
     return Object.assign(listItem, {title: editText})
   })
   this.setState({listItem: updatedItem})
   this.storeInLocal()
 }
  render() {
    return (
      <div>
        <Controls handleClick={this.addItems.bind(this)}/>
        <section>
          <h4> All Grocery Items</h4>
          <RenderList listItems= {this.state.listItems}  updateItem={this.updateItem.bind(this)}/>
        </section>
      </div>
    );
  }
}
