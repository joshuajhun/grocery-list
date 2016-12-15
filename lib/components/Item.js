import React from 'react'

const Item = ({ title, id,destroy }) => {
  return (
    <div className="grocery-list-item">
      <p> Item Name: {title} <button onClick= {()=> destroy(id)}>destroy</button> </p>
    </div>
  );
};

export default Item
