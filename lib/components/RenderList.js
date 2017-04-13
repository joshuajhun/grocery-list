import React from 'react'
import ListItem from './ListItem'

const RenderList = ({ itemCollection, remove}) => {
  if (!itemCollection.length) {
    return (
      <div>
        Please add some yung-items
      </div>
    )
  }

  return(
    <div>
        { itemCollection.map((item) => {
          return (
            <section key= {item.id}>
              <ListItem item   = {item.input}
                        id     = {item.id}
                        remove = {remove}
                      />
            </section>
          )
        })}
    </div>
  )
}

export default RenderList
