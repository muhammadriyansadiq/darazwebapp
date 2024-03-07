

import React from 'react'
import useTheme from './UseContext';
import { CiSearch } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { CiShoppingCart } from "react-icons/ci";
import { GiJewelCrown } from "react-icons/gi";

import { IoIosMan } from "react-icons/io";
import { FcElectronics } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { Carousel } from 'flowbite-react';

const MainAndAside = () => {
    const { data,setData } = useTheme();

    let a = []
    data.forEach((item)=>{
a.push(item.category)
    })

    const uniqueValues = Array.from(new Set(a));
    // console.log(uniqueValues);
  return (

    <div>
        <div className=' w-full flex  mt-4 min-[425px]:justify-start min-[768px]:justify-around'>

<div className="left w-3/12 bg-white border-2 rounded-lg  p-2 flex flex-col justify-between min-[320px]:w-4/12 min-[425px]:w-3/12">


{
    uniqueValues.map((items,ind)=>{
let icon;
        switch (items){
            case "men's clothing":
              icon = <IoIosMan className=' h-8 w-8 mr-3 text-[4px]'/>
              break;
              case "jewelery":
              icon = <GiJewelCrown className=' h-8 w-8 mr-3 text-[4px]'/>
              break;
              case "electronics":
              icon = <FcElectronics className=' h-8 w-8 mr-3 text-[4px]'/>
              break;
              case "women's clothing":
              icon = <FcBusinesswoman className=' h-8 w-8 mr-3 text-[4px]' />
              break;
             
            
              default:
                icon = < FcBusinesswoman className=' h-8 w-8 mr-3 text-[4px]'/>
            }


return(
        <p key={ind} className=' flex items-center cursor-pointer text-[10px]'>{icon} {items}</p>
        )
    })
}


    
</div>

<div className="right w-4/6 min-[425px]:mr-10 min-[768px]:w-3/6 min-[1024px]:w-4/6">
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 border-2 rounded-lg">
      <Carousel>
        {
            data.map((items,ind)=>(
                <img key={ind} src={items.image} className= ' h-full w-full object-center' alt="..." />

            ))
        }
       
      </Carousel>
    </div>

    








</div>

</div>
    </div>

  )
}

export default MainAndAside
