import React from 'react'

const setFilter = ({items}) => {
  return (
    <div>
    <input type='text' onChange={ (e)=> {items(e.target.value)}}/>
    </div>
  );
};

export default setFilter
