
const filterIdeas = (listItems, searchText)=> {
  let newFilter = listItems.filter((item)=>{
    return item.title.indexOf(searchText) >= 0;
  })
  return newFilter
};

export default filterIdeas
