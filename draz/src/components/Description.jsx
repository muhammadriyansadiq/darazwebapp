import React from 'react'
import { useParams,Link } from 'react-router-dom'
import useTheme from './UseContext'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, auth } from './Firebase'
const Description = () => {
    const {productid} = useParams()
const navigate = useNavigate()
    const { data,setData, descriptiondata,setDescriptiondata,cart,setCart,qty,setQty,text,settext} = useTheme();
let g = []

data.map((data,ind)=>{
    if(data.id === +productid){

        // console.log(ind,data);
        setDescriptiondata(data)

    }

})
console.log(descriptiondata);
g.push(descriptiondata)


const ADDCARTFUNCTION = (e)=>{
 
    console.log(e.target.id)

    const saveditems = JSON.parse(localStorage.getItem('buyeditems')) || [];

    let h = saveditems.filter((data)=>{

      return +data.id === +e.target.id
    
    }) 

    if(h.length > 0){
      alert("already added")
      setTimeout(()=>{
        navigate('/cart')
      })
    }
    else{
      // console.log("new");

    //    setCart(+cart +1)
    // localStorage.setItem("carts",+cart +1)
        console.log(descriptiondata);

        const saveditems = JSON.parse(localStorage.getItem('buyeditems')) || [];
        let lastusername = localStorage.getItem("lastpersonuseremail")
        const buyitems = {...descriptiondata,quantity:0,laspersonname:lastusername};
        saveditems.push(buyitems);
        localStorage.setItem('buyeditems', JSON.stringify(saveditems));
        console.log(JSON.parse(localStorage.getItem('buyeditems')))
        setCart(JSON.parse(localStorage.getItem('buyeditems')).length)
        setTimeout(()=>{

          navigate('/cart')

        })
    }

}
  return (

    <div className=' w-full h-full'>
<Header />
{/* 
{
    console.log(descriptiondata)
} 
*/}

{/* =============description cards destails */}
{



g.map((items,ind)=>(

<div  key={ind} className=" w-full h-4/6  bg-white border-2   border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-[320px]:w-11/12 min-[320px]:ml-[13px] min-[320px]:mt-[6px] min-[768px]:w-full ">
<h1 className=' text-center text-6xl uppercase min-[320px]:text-[12px] min-[320px]:font-bold min-[768px]:text-lg'>{items.category}</h1>
<h5 className=" text-center text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4 min-[320px]:text-[12px] min-[320px]:font-bold min-[768px]:text-lg">
   {items.title}
  </h5>
<div className=' h-5/6 w-full flex justify-around items-center ' >
<img
  className="p-8 rounded-t-lg h-1/6 w-1/6 min-[320px]:w-[120px]"
  src={items.image}
  alt="product image"
/>
<p className='  text- font-serif min-[320px]:text-[10px] min-[768px]:text-[14px]'>{items.description}</p>
</div>

<div className="px-5 pb-5">

  

<div className="flex items-center  mb-5 ml-4">
    {/* <h1 className=' text-2xl font-bold mr-1'> Rating </h1> */}
  <div className="flex items-center space-x-1 rtl:space-x-reverse ">
    <svg
      className="w-4 h-4 text-yellow-300 text-2xl"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-4 h-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-4 h-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-4 h-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-4 h-4 text-gray-200 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  </div>
  <span className="bg-blue-100 text-blue-800 text-2xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 min-[320px]:text-xs ">
    5.0
  </span>
</div>
<div className="flex items-center justify-between ">
  <span className="text-3xl font-bold text-gray-900 dark:text-white ml-4 min-[320px]:text-xs min-[768px]:text-lg">
   Rs.{items.price}
  </span>
  <Link
   
    className="text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
    min-[320px]:text-xs min-[768px]:text-lg min-[768px]:mr-3"
    onClick={ADDCARTFUNCTION}
    id={items.id}
   
  >
    Add to cart
  </Link>
</div>
</div>
</div>
))

// console.log(g)

}



    </div>
  )
}

export default Description