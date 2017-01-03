let filteredMessages = (listItems, text) => {
  let newFilter = listItems.filter((item)=> {
    return item.title.indexOf(text) >= 0
  })
  return newFilter
  }

export default filteredMessages
