import React from 'react'

const Details = ({jsont}) => {
  return (
    <div>
       aaa {jsont.map((item)=>
       <div>
       <img  src={item.image} style={{width :"50px"}} />
       <div>{item.id}</div>
       </div>
       )}
    </div>
  )
}

export default Details