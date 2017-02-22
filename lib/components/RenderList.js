import React from 'React'

const RenderList = ({ listItems}) => {
  if(!listItems.length){
    return (
      <div>
        Please add some yung-items
      </div>
    )
   }
    return(
       <div>
         { listItems.map((item) => {
           return (
             <div key={item.id}>
               <p> {item.input} </p>
             </div>
           )
         })}
       </div>
     );
};

export default RenderList
