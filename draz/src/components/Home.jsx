import React from 'react'
import Header from './Header';
import Categories from './Categories';
import { ThemeProvider } from './UseContext';
import { useState } from 'react';
import MainAndAside from './MainAndAside';
import Footer from './Footer';
const Home = () => {
  // const [data, setData] = useState([]);

  
  return (
    // <ThemeProvider value={{data,setData}} className='bg-slate-300'>

    <div className=' w-full h-full bg-background'>

        <Header />
<MainAndAside />
        <Categories  className= 'bg-background'/>
        <Footer />
</div>

// </ThemeProvider>
  )
}

export default Home