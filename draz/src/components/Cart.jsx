import React, { useState } from 'react'
import Header from './Header'
import useTheme from './UseContext';
import { IoAddCircle } from "react-icons/io5";
import { FaCircleMinus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { onAuthStateChanged,auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore,doc, deleteDoc,updateDoc   } from "firebase/firestore";
// import {emailjs} from '@emailjs/browser';
import { useRef } from 'react';
const firebaseConfig = {
  apiKey: "AIzaSyA4NpBdfho9N7hUZKRTpVnDdFFVxOa6jKw",
  authDomain: "bhabaklo.firebaseapp.com",
  projectId: "bhabaklo",
  storageBucket: "bhabaklo.appspot.com",
  messagingSenderId: "667627587420",
  appId: "1:667627587420:web:748c43666060d4518aa399"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




const Cart = () => {
const navigate = useNavigate()
    const { data,setData,descriptiondata,setDescriptiondata,qty,setQty,reload,setreload,cart,setCart,text,settext } = useTheme();
    const form = useRef();
    const addfunct = (e)=>{
    const saveditems = JSON.parse(localStorage.getItem('buyeditems')) || [];

console.log(saveditems);

let gpo = saveditems.map((data)=>{

    if(+data.id === +e.target.id){
      data.quantity = data.quantity +1
      setQty(data.quantity +1)
      return data
    }
    else{
      return data
    }
    })
    console.log(gpo)
        localStorage.setItem('buyeditems', JSON.stringify(gpo));
}


const subtractfunct = (e)=>{
    const saveditems = JSON.parse(localStorage.getItem('buyeditems')) || [];
    console.log(saveditems);
    
    let gpo = saveditems.map((data)=>{
       
        if(+data.id === +e.target.id){

            if(data.quantity>0){
          data.quantity = data.quantity -1
          console.log(data.quantity) 
          setQty(data.quantity -1)
          return data
        }
        else{
            return data
        }
    }
        else{
          return data
        }
    
 
        })
    
        console.log(gpo)
            localStorage.setItem('buyeditems', JSON.stringify(gpo));
    
}
const deltfunct = (e) =>{

    console.log("deleted",e)
  let h =   JSON.parse(localStorage.getItem('buyeditems'))
  console.log(h)
  let gpo ;
  h.forEach((data,ind)=>{ 
    if(+data.id === +e){ 
    gpo = ind 
    }
    } 
    )

   h.splice(gpo,1)
   console.log(h)
   localStorage.setItem('buyeditems', JSON.stringify(h))

  //  setreload(()=>(prev=>!prev))
setCart(JSON.parse(localStorage.getItem('buyeditems')).length)
    }

    
    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs
    //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
    //       publicKey: 'YOUR_PUBLIC_KEY',
    //     })
    //     .then(
    //       () => {
    //         console.log('SUCCESS!');
    //       },
    //       (error) => {
    //         console.log('FAILED...', error.text);
    //       },
    //     );
    // };
    

    let tofindtotal = JSON.parse(localStorage.getItem('buyeditems'))
    
    let ge = tofindtotal.map((data)=>{

      return +data.quantity *+data.price
    
    })
  
    let totalsum = ge.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    console.log(ge)

console.log("Sum:", totalsum); // Output: Sum: 14

const adressfunction = (e) =>{
  settext(e.target.value)
}


const Checkout = async(e)=>{
  if(text){
let lastman= localStorage.getItem("lastpersonuseremail")
let av = JSON.parse(localStorage.getItem('buyeditems'))
console.log("total data",av,"address",text,"lastperson",lastman)
const saveditems = JSON.parse(localStorage.getItem('buyeditems')) || [];
console.log(saveditems);
let gpo = saveditems.map((data)=>{
      data.email = lastman , data.adress=text,data.status="Pending"
      console.log(data,"line 135");
      return data
    })
    console.log(gpo);
 try {
  const docRef = await addDoc(collection(db, "checkouts"),{gpo})

  console.log("Document written with ID: ", docRef.id);
localStorage.removeItem('buyeditems');
setCart("")
settext("")
  navigate('/notification')
} 
catch (e) {

  console.error("Error adding document: ", e);

}
}
else{
  alert("address required")
}














//   {text?

//   onAuthStateChanged(auth, async(user) => {
//     if (user) {
//       const uid = user.email;
     
//       console.log(uid)
    
//       // =================object k ander email dalna=======================
// let av = JSON.parse(localStorage.getItem('buyeditems'))
// av.forEach(async (data)=>{
//  data.name=uid
// })
// console.log(av)
// // =================object k ander email dalna=======================
      

//  alert("Thanks for shopping")

//  try {
//   const docRef = await addDoc(collection(db, "checkouts"), {name:JSON.parse(localStorage.getItem('buyeditems'))})
//   const washingtonRef = doc(db, "checkouts", docRef.id);

// await updateDoc(washingtonRef, {

//   uniqueid: docRef.id,
//   adress:text

// });

//   console.log("Document written with ID: ", docRef.id);

// } 
// catch (e) {

//   console.error("Error adding document: ", e);

// }

// localStorage.removeItem('buyeditems');
// setCart("")

//   navigate('/home')


//     } else {
//       // setuser(false)

//       console.log("usersignedout");

//     }
//   }):
//   alert("Address Required")
// }
}

  return (

    <div className=' w-full bg-background h-full'>
<Header className=' bg-background'/>
<div className='w-full flex justify-around bg-background h-full mt-8'>

<div  className=' w-[213px] flex flex-wrap h-full shadow-lg min-[275px]:w-[260px] min-[425px]:w-[280px] min-[768px]:w-[550px] min-[1024px]:w-[780px]'>

{

JSON.parse(localStorage.getItem('buyeditems')).map((items,ind)=>(

    <div key={ind} className=' flex justify-around w-full h-1/6 items-center mt-3 bg-white p-5'>
    <div className=' w-2/12 min-[768px]:w-3/12 min-[1024px]:w-4/12'>
        <img src={items.image} alt="logo" className=' h-[130px] min-[320px]:h-[50px]  min-[320px]:h-[120px]' />
        <p className=' text-xs'><strong className=' text-[10px] min-[768px]:text-[14px]'>{items.category} items</strong>  <span className=' text-[10px] min-[768px]:text-[13px]'>{items.title}</span></p>
    </div>
    <p className=' ml-8 text-xs mr-2 min-[768px]:text-[18px]'>Rs . {items.price}</p>
    <p className=' flex items-center'>

    <button onClick={addfunct} id={items.id} className=' text-white bg-[#f85606] rounded-full text-lg h-[40px] w-[40px] flex justify-center items-center mr-3 min-[320px]:w-[10px] min-[320px]:h-[20px] min-[768px]:h-[40px] min-[768px]:w-[40px]'>

+
   

    </button>
<span className=' text-[12px] min-[320px]:text-[24px]'>
    {

    items.quantity>0?items.quantity:0

    }
</span>
    <button onClick={subtractfunct} id={items.id} className=' text-white bg-[#f85606] p-2 rounded-full text-lg h-[40px] w-[40px] flex justify-center items-center ml-3 min-[320px]:w-[10px] min-[320px]:h-[20px] min-[768px]:h-[40px] min-[768px]:w-[40px]'>  
-
    </button >
    </p>

       <button  id={items.id} 
        onClick={(e)=>deltfunct(items.id)}>
        <MdDeleteForever className=' cursor-pointer h-[30px] w-[30px] text-[#f85606] min-[768px]:h-[40px] min-[768px]:w-[40px]'
        />

   </button>

    </div>

))
}

</div>

<div className=' w-[99px] bg-white flex flex-col justify-around shadow-lg h-[300px] min-[375px]:w-[110px] min-[425px]:w-[140px] min-[768px]:w-[210px] min-[1024px]:w-[280px]' >

   <p className=' text-center text-md font-bold min-[768px]:text-[19px]'>Summary</p> 
   <p className=' ml-2 text-[10px] min-[768px]:text-[16px]'>ToTal = {totalsum}</p>
   <p className=' ml-2 text-[10px] min-[768px]:text-[16px]'>Shipping charges + tax =200 </p>
   <p className=' ml-2 text-[10px] min-[768px]:text-[16px]'>Grand Total = {totalsum + 200}/=</p>
  
   <textarea className=' w-[80px] ml-1 text-[9px] min-[375px]:w-[100px] min-[425px]:w-[130px] min-[768px]:text-[16px] min-[768px]:w-[200px] min-[1024px]:w-[260px]' placeholder='Enter your  Address...' required onChange={adressfunction}></textarea>
   <button className=' bg-[#f85606] w-5/6 p-3 ml-2 rounded-lg text-xs text-white cursor-pointer min-[768px]:ml-5 min-[768px]:p-5 min-[768px]:text-md' onClick={Checkout}>CheckOut</button>

</div>

</div>
    </div>

  )
}

export default Cart