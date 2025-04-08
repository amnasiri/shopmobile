import React from 'react'
import Categoryitem from './categoryitem'
import './category.css'


function Category() {
  return (
    <div class="slider-cat"> 
        <div className="slider">
        <div className="slidert"><h3>Browse By Category</h3></div>
            <div className="sliderc"><img src="/Arrow-l.svg" alt="" srcset="" /><img src="/Arrow.svg" alt="" srcset="" /></div>
        </div>
        <div className="cat">

        <Categoryitem svg={"/Phones.svg"} title={"Phones"} />
        <Categoryitem svg={"/Phones.svg"} title={"Smart Watches"} />
        <Categoryitem svg={"/Phones.svg"} title={"Cameras"} />
        <Categoryitem svg={"/Phones.svg"} title={"Headphones"} />
        <Categoryitem svg={"/Phones.svg"} title={"Computers"} />
        <Categoryitem svg={"/Phones.svg"} title={"Gaming"} />

       
    </div>
    </div>
  )
}

export default Category