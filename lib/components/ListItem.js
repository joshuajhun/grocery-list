import React from 'react'

const ListItem = ({ item, id, remove }) => {
  return (
    <section>
      <p>{item}</p>
      <button onClick={() => remove(id)}> delete</button>
    </section>
  )
}

export default ListItem
