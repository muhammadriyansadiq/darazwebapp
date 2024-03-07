import React, { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth,signOut , createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import { addDoc,collection, getDocs,getFirestore,updateDoc   } from "firebase/firestore"; 

const firebaseConfig = {

    apiKey: "AIzaSyA4NpBdfho9N7hUZKRTpVnDdFFVxOa6jKw",
    authDomain: "bhabaklo.firebaseapp.com",
    projectId: "bhabaklo",
    storageBucket: "bhabaklo.appspot.com",
    messagingSenderId: "667627587420",
    appId: "1:667627587420:web:748c43666060d4518aa399"
    
  };

const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const db = getFirestore(app);

const Dashboard =  () => {
  var g = [];
  const [alldata,setalldata] = useState([])


// async function start(){
//   const querySnapshot = await getDocs(collection(db, "checkouts"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ",setalldata(doc.data().gpo))
// });
// }
// start()

useEffect(() => {
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "checkouts"));
      const fetchedData = querySnapshot.docs.map(doc => doc.data().gpo);
      console.log(fetchedData);
      setalldata(fetchedData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);
 

  return (
    <>

    <div className=' text-center text-[#f85606] text-lg font-bold
    '>ADMIN DASHBOARD</div>
    <h1 className=' text-center text-custom-color text-lg font-bold'>Clients Data</h1>
    <div className=' flex justify-between items-center mt-4 w-[320px] min-[1024px]:w-[1024px] '>
      <p className=' text-xs font-bold w-[30px] min-[1024px]:w-[70px]'>Image</p>
      <p className=' text-xs font-bold w-[30px] min-[1024px]:w-[70px]'>Adress</p>
      <p className=' text-xs font-bold w-[30px] min-[1024px]:w-[70px]'>Qty</p>
      <p className=' text-xs font-bold w-[30px] min-[1024px]:w-[70px]'>Email</p>
      <p className=' text-xs font-bold w-[30px] min-[1024px]:w-[70px]'>Item</p>
      <p className=' text-xs font-bold w-[30px] min-[1024px]:w-[70px]'>Price</p>
      <p className=' text-xs font-bold w-[30px] min-[1024px]:w-[70px]'>status</p>
    </div>

{
 alldata.map((array, index) => (
  <div key={index}>
    {array.map((item, innerIndex) => (
      <div key={innerIndex} className=' flex justify-between items-center mt-2 bg-white shadow-lg '>
        {/* Display each item */}
        <p className=''><img src={item.image} alt="logo" className=' h-[50px] w-[30px] min-[1024px]:w-[70px] min-[1024px]:h-[90px]'/></p>
        <p className=' w-[30px] text-[8px] min-[1024px]:w-[70px]  text-custom-color min-[1024px]:font-bold min-[1024px]:text-[10px]'>{item.adress}</p>
        <p className=' w-[30px] text-[8px] min-[1024px]:w-[70px] text-custom-color min-[1024px]:font-bold min-[1024px]:text-[10px]'>{item.quantity}</p>
        <p className=' w-[30px] text-[5px] min-[1024px]:w-[70px] text-custom-color min-[1024px]:font-bold min-[1024px]:text-[10px]'>{item.laspersonname}</p>
        <p className=' w-[30px] text-[8px] min-[1024px]:w-[70px] text-custom-color min-[1024px]:font-bold min-[1024px]:text-[10px]'>{item.category}</p>
       
        <p className=' w-[30px] text-[8px] min-[1024px]:w-[70px] text-custom-color min-[1024px]:font-bold min-[1024px]:text-[10px]'>{item.price}</p>
        <p className=' bg-custom-color rounded-lg  cursor-pointer w-[30px] text-lg text-white min-[1024px]:w-[70px] min-[1024px]:mr-[68px] min-[1024px]:text-[18px] '>
        <select name="cars" id={innerIndex} className=' bg-custom-color border-none text-white cursor-pointer w-[30px] text-[7px] min-[1024px]:w-[90px] min-[1024px]:text-[12px] min-[1024px]:w-[110px]'>

       <option value="volvo" >{item.status}</option>
       <option value="saab">Delivered</option>
       </select>
        </p>
      </div>
    )
    )}
  </div>
)
)

// alldata.map((items)=>(
//   items.map((data,ind)=>(
//     console.log(data,ind)
//   ))
//   ))
//     alldata.map((items)=>{
// return(
//          // items.name.map((da)=>(
//   <div className=' flex justify-around bg-white shadow-lg items-center'>

    
      
//       <p>{items.adress}</p>

// {items.name.map((da,indx)=>{
// <>
//  <p><img key={indx} src={da.image} alt="logo" className=' h-[140px]'/></p>
//       <p>{da.laspersonname}</p>
//       <p>{da.category}</p>
//       <p><button>pending</button></p> 
//       </>
//     })}
//     </div>
//       // ))
//       )
//     })

// alldata.map((items, index) => (
//   <div className='flex justify-around bg-white shadow-lg items-center' key={index} 
//   id={items.uniqueid}>
//     <p >{items.adress}</p>
//     {items.name.map((da, idx) => ( // Mapping over items.name
//       // <div key={idx} className=' flex justify-between  items-center'> {/* Adding a key to each rendered element */}
//       <>
//         <p key={idx}><img src={da.image} alt="logo" className='h-[140px]'/></p>
//         <p>{da.laspersonname}</p>
//         <p>{da.category}</p>
//         <p><button className=' bg-red-700 p-2 text-white cursor-pointer rounded-lg'>pending</button></p>
//         </>
//       // </div>
//     ))}
//   </div>
// ))

  }
    </>

  )
}

export default Dashboard