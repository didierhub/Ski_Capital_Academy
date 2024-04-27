import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function LaoutPage() {
  return (
    <div className=' overflow-x-hidden max-w-[1640px]  mx-auto px-4  grid grid-rows-1 gap-2  '>
        <NavBar />
        <Outlet/>
        
    </div>
  )
}

export default LaoutPage