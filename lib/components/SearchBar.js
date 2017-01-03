import React from 'react'

const SearchBar = ({searchText})=> {
  // on change of text
  // set the state of the GroceryList searchText
  return (
    <input type='text' placeholder='search me bro' onChange={(e)=> searchText(e.target.value)}/>
  )
}

export default SearchBar;
