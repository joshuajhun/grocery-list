import React from 'React'

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
           <div key={item.id}>
             <p>{item.input}</p>
             <button onClick={()=> deleteItem(item.id)}> delete </button>
           </div>
         );
       })}
     </div>
   );
};

export default RenderList
