import React from 'react'
const Item = ({ id, input, deleteItem }) => {
 return (
   <div>
     <p>{input}</p>
     <button onClick={()=> deleteItem(id)}> delete </button>
   </div>
 )
}

export default Item
