import React from 'react'

function Categoryitem({ svg , title}) {
  return (

    <div className="cat-i">
        <img src={svg} alt="" srcset="" />
        <h3>{title}</h3>
</div>
  )
}

export default Categoryitem