import { useState,useEffect } from 'react'
import { signOut,auth } from './Firebase';
import '../App.css'
import { CiSearch } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { CiShoppingCart } from "react-icons/ci";
import { GiJewelCrown } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { IoIosMan } from "react-icons/io";
import { FcElectronics } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { Carousel } from 'flowbite-react';
import useTheme from './UseContext';
import { useNavigate} from 'react-router-dom';
const Header = () => {

    const [isVisible, setIsVisible] = useState(false);
    const { data,setData ,cart,setCart,qty,setQty,user,setuser,admin,setadmin} = useTheme();
   
const navigate = useNavigate()

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
    

    useEffect(()=>{

  

        (async function () {
try{
    const response = await fetch('https://fakestoreapi.com/products');
    const dat = await response.json();
    // const data = dat.category

    setData(dat)

    // const uniqueValues = Array.from(new Set(dat.category));
    // console.log("data",dat);
    // console.log("unique",uniqueValues);
}

catch(error){
console.log("error",error)
}

        })()


    },[])


// ============for getting unique product================


// let a = []
//     data.forEach((item)=>{
// a.push(item.category)
//     })

//     const uniqueValues = Array.from(new Set(a));
//     console.log(uniqueValues);


// ============for getting unique product================


const hambergfunc = () =>{
    setIsVisible(true);
}

const cross = ()=>{
    setIsVisible(false);

}

    const logoutfunct = ()=>{

        signOut(auth).then(() => {
          console.log("signout");
          setadmin(false)
navigate('/signin')
        }).catch((error) => {
          console.log("err",error);
        });

    }


  return (
    <div className=' w-full'>
    <div className=' bg-custom-color h-1/6  '>
        <div className=' flex justify-around'>
        <div className=' flex justify-start ml-2'>
        <p className=' text-white text-[10px] cursor-pointer min-[768px]:text-[12px]'>Become a Seller</p>
        <p className=' text-white ml-5 text-[10px] cursor-pointer min-[768px]:text-[12px]'> Daraz Affiliate Program</p>
        <p className=' text-white ml-5 text-[10px] cursor-pointer min-[768px]:text-[12px]'> Help & Support</p>
        <p className=' text-white ml-5 text-[10px] cursor-pointer min-[768px]:text-[12px]'> Daraz Logistics Partner</p>
        </div>

        <div className=' flex bg-[#ad3c04] items-center cursor-pointer rounded-lg mr-2 px-1 min-[425px]:mr-14 min-[768px]:mr-[11rem] min-[1024px]:mr-0'> 
        <img src="https://img.alicdn.com/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png" alt="" className=' h-7 min-[425px]:h-5 min-[768px]:h-7'/> 
        <span className=' ml-2 text-[9px] min-[425px]:text-[6px] min-[768px]:text-[10px]'>Save more on app</span> 
        </div>
        </div>
<div className=' h-5/6 w-[320px] min-[768px]:w-11/12'>
        <div className=' flex items-center h-full w-[320px] min-[768px]:w-full justify-around'>
            <p className=' h-1/6 flex justify-center items-center'>
                <img src="https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png" className=' min-[768px]:h-[25px]' alt="logo" />
            </p>

            <p className=' w-6/12 relative min-[320px]:hidden min-[768px]:block min-[768px]:w-5/12'>

<input className=' w-full p-3 rounded-md' placeholder=' Search' />

<p className='bg-[#ffe1d2] rounded-md absolute top-2 right-0 h-5/6 mr-1 mb-px search mt-[-5px] p-2 flex justify-center items-center'>
<CiSearch className=' text-red-700 text-[21px]'/>
</p>

            </p>
{
  user?<button className=' ml-3 text-white cursor-pointer min-[320px]:text-[14px]' onClick={logoutfunct}>LogOut</button>:

            <p className='  text-white flex justify-center items-center ml-5 min-[768px]:ml-2'> 
            <RiContactsLine className=' ml-7 text-2xl'/>
            <span className=' ml-5'>Login </span>
             <span className='ml-5'>| </span>
             <span className=' ml-5 '>SignUp</span>
             </p>
             

}
            <p className='ml-7 flex items-center text-white cursor-pointer min-[768px]:ml-2'
            >
            <GrLanguage className=' min-[320px]:text-[14px] '/><span className='min-[320px]:text-[14px]'>EN</span>  <span className=' text-xs ml-1'>v</span>
            </p>
            <Link to={'/cart'} >
            <p className='ml-7 mr-2 font-bold cursor-pointer flex min-[768px]:ml-2'>
                <CiShoppingCart className=' text-3xl text-white font-bold min-[320px]:text-[18px] min-[768px]:text-[28px]'/><span className='text-white text-xs'>{cart}</span>
            </p>
            </Link>
            {admin?
            <Link to={'/dashboard'}>
            <button className=' text-white cursor-pointer text-lg min-[320px]:text-xs'>Dashboard</button >
            </Link>:
             ""
          }
        </div>
</div>


      
{/* <div className='hidden bg-custom-color  max-[767px]:block'>
        <nav className="bg-custom-color border-gray-200 dark:bg-gray-900 mx-16">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a
      href="https://flowbite.com/" 
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src="https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png"
        className=" h-8"
        alt="Logo"
      />
    
    </a>

    <button
      data-collapse-toggle="navbar-default"
      type="button"
      onClick={hambergfunc}
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div className={` w-full flex justify-center text-white  absolute top-0 left-0 bg-custom-color   ${isVisible ? 'block' : 'hidden'}`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 text-white">
        <li>
          <a
           
            className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
           
            className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            About
          </a>
        </li>
        <li>
          <a
            
            className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Services
          </a>
        </li>
        <li>
          <a
            
            className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            
            className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contact
          </a>
        </li>
        <li className=' cursor-pointer' onClick={cross}> <a className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-2xl"> x</a></li>
      </ul>
    </div>
  </div>
</nav>
</div> */}
   
                 {/*========================== front carosel ======================*/}

    </div>





</div>
  )
}

export default Header