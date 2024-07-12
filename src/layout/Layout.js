import React from 'react'
import { useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'

function Layout() {

    const path = useLocation().pathname
    
    
  return (
    <>
        {path  === "/" ? <Home/> : <Navbar/>}
    </>
  )
}

export default Layout