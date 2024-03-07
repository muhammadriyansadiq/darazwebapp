import React from 'react'
import { useState } from 'react'
import useTheme from './UseContext'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Categories = () => {
  const navigate = useNavigate()
const [showmore,setShowmore] = useState(false)
const { data,setData,descriptiondata,setDescriptiondata } = useTheme();
const readmorefunction = (e)=>{

  console.log("yes ok",e.target.id)
  navigate(`/productid/${e.target.id}`)
  
}
  return (
    <div className=' bg-background w-full h-full'>

       <h1 className=' mt-4 ml-6 text-2xl text-neutral-700'>Allproducts</h1> 


                    {/* ===============cards============================= */}


       <div className=' flex w-full flex-wrap h-full bg-background min-[768px]: justify-around'>
        {
          data.map((items,index)=>(
            <div key={index} className=" w-11/12 ml-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[495px]  mt-3 cursor-pointer hover:border-4 min-[425px]:ml-2 min-[425px]:w-10/12 
            min-[768px]:w-9/12 min-[1024px]:w-5/12 min-[768px]:ml-3">
            <a href="#">
              <img className="rounded-t-lg w-full h-3/6" src={items.image} alt="logo" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in
                reverse chronological order.
              </p>
              
              <span
                
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                id={items.id}
                onClick={readmorefunction}
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </span>
           
            </div>
          </div>
          ))
        }





       </div>

    </div>
  )
}

export default Categories