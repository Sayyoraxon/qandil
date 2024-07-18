import React from 'react'
import { useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'

function Layout({display, setDisplay}) {

    const path = useLocation().pathname
    
    
  return (
    <>
        {path  === "/" ? <Home display={display} setDisplay={setDisplay}/> 
        : <Navbar display={display} setDisplay={setDisplay}/>}
    </>
  )
}

export default Layout