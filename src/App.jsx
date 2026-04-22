import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Data from './components/Data'

import './App.css'

function App() {


  return (
    <>
    <div>
         <Navbar />
         <Sidebar />
         <Footer />
         <Data/>
    </div>
     
    </>
  )
}

export default App
