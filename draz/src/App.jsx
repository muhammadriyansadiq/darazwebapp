import { useState, useEffect } from 'react'
import React from 'react';
import './App.css'
import {Link } from 'react-router-dom';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, BrowserRouter ,Routes, Navigate, useNavigate} from 'react-router-dom';
import Signin from './components/Signin';
import { Signup } from './components/Signup';
// import { Home } from './components/Home';
import Home from './components/Home';
import { auth,onAuthStateChanged } from './components/Firebase';
import { signOut } from './components/Firebase';
import Description from './components/Description';
import { ThemeProvider } from './components/UseContext';
import MainAndAside from './components/MainAndAside';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Notification from './components/Notification';
import Footer from './components/Footer';
function App() {
  const [user, setuser] = useState(false)
  const [admin, setadmin] = useState(false)
  const [text,settext] = useState("")

  useEffect(()=>{
console.log("first")
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.email;
        localStorage.setItem("lastpersonuseremail",uid)
        if(uid === "admin@gmail.com"){
          setadmin(true)
        }
        console.log(uid)
        setuser(true)
        
      } else {
        setuser(false)
  
        console.log("usersignedout");

      }
    });

  },[])
  const [data, setData] = useState([]);
  const [reload,setreload] =useState(false)
  const [descriptiondata,setDescriptiondata] = useState([])

const [cart,setCart] = useState(JSON.parse(localStorage.getItem('buyeditems'))?JSON.parse(localStorage.getItem('buyeditems')).length:"") 

let qttty;
let localstoragedata = JSON.parse(localStorage.getItem('buyeditems'))

{
localstoragedata?
JSON.parse(localStorage.getItem('buyeditems')).forEach(element => {
  qttty = element.quantity
  console.log(element);
}):
qttty = 0
}

const [qty,setQty] = useState( qttty || 0)
  return (
    <ThemeProvider value={{data,setData,reload,setreload,descriptiondata,setDescriptiondata,cart,setCart,qty,setQty,user, setuser,admin, setadmin,text,settext}}>
    <div className='h-full w-full'>
  <BrowserRouter > 
<Routes>

{/* <Route path='/'> */}
  <Route path='' element={user? <Navigate to={'/home'}/>: <Signin />} />
  <Route path='/home' element={ user? <Home/>: <Navigate to={'/'}/>} />
  {/* {/* <Route path='/contact' element={user? <Contact/>: <Navigate to={'/'}/>} /> */}
  <Route path='/signin' element={  <Signin/>} /> 
  <Route path='/signup' element={ <Signup />} />
  <Route path='/productid/:productid' element = {user? <Description/>: <Navigate to={'/'}/>}/>
  <Route path='/mainandaside' element = {user? <MainAndAside/>: <Navigate to={'/'}/>}/>
  <Route path='/cart' element = {user? <Cart/>: <Navigate to={'/'}/>}/>
  <Route path='/dashboard' element = {admin? <Dashboard/>: <Navigate to={'/'}/>}/>
  <Route path='/notification' element = {user? <Notification/>: <Navigate to={'/'}/>}/>
  <Route path='/footer' element = {user? <Footer/>: <Navigate to={'/'}/>}/>

  {/* </Route> */}
</Routes>
</BrowserRouter>
    </div>
    </ThemeProvider>
  )
}

export default App
