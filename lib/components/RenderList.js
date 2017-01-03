import React from 'react'
import Item from './Item'
const RenderList = ({ listItems, destroy }) => {
  console.log(listItems)
  if (listItems.length === 0) {
    return(
      <div>
        Please Enter a Grocery Item!
      </div>
    );
  }
  return (
    <div className="grocery-list">
      { listItems.map((item)=> {
         return <Item {...item} key={ item.id } destroy= { destroy } />
       })}
    </div>
  )
};

export default RenderList
