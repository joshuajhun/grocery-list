import React from 'react'

const Item = ({ title, updateItem, id}) => {
  return (
    <div className="grocery-list-item">
    <h1>Item Name:</h1>
      <p>{title}</p>
      <button>destroy</button>
    </div>
  );
};

export default Item
