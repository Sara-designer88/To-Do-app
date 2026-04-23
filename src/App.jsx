import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

import { Routes, Route, Link } from "react-router-dom"

import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import DashboardPage from './pages/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'
function App() {


  return (
    <>
    <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/about"} element={<AboutPage/>}/>
        <Route path={"/user-list"} element={<DashboardPage/>}/>
        <Route path={"/ItemDetailsPage"} element={<ItemDetailsPage/>}/>
        <Route path={"*"} element={<NotFoundPage/>}/>

        
      </Routes>
    <div>
         
         <Sidebar />
         <Footer />
    </div>
     
    </>
  )
}

export default App
