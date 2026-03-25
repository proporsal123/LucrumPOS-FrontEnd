import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/workplace/Navbar'
import Sidebar from '../Components/workplace/Sidebar'

const Workplace = () => {
  return (
    <div className='bg-white'>
        <Navbar/>
        <div className=''>  
            <Outlet/>
        </div>
    </div>
  )
}

export default Workplace