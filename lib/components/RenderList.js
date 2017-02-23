import React from 'React'
import Item from './Item'

const RenderList = ({ listItems, deleteItem }) => {
  if (!listItems.length) {
    return (
      <div>
        Please add some yung-items
      </div>
    );
  }
  return (
     <div>
       { listItems.map((item) => {
         return (
           <Item {...item} key={item.id} deleteItem= {deleteItem}/>
         );
       })}
     </div>
   );
};

export default RenderList
