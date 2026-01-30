import React, { useState } from 'react'
import logo from '../assets/backery_logo.png'
import { Link } from 'react-router-dom'
import { ClipboardList, FileText, LayoutDashboard, LogOut, ShoppingBag, UserCog, Users } from 'lucide-react'

const Sidebar = () => {

  const [isOpen,setIsOpen] = useState(false)

  return (
    <div className='fixed md:static top-0 left-0 w-[70%] sm:w-[50%] md:w-[18%] min-h-[100vh] rounded-lg shadow-lg bg-orange-950 transition-transform duration-300 ease-in-out md:translate-x-0 '>
      {/* Logo */}
      <div className='flex justify-center py-2'>
        <img src={logo} alt="" className='w-32 md:w-40' />
      </div>

    {/* Sidebar  */}
      <div>
        <ul className='text-white flex flex-col gap-4'>
          <Link className='flex items-center gap-3 px-6 py-2 md:hover:bg-orange-600 rounded-md text-lg pl-4'>
          <LayoutDashboard className='w-6 h-6'/>
          Dashboard
          </Link>

          <Link className='flex items-center gap-3 px-6 py-2 md:hover:bg-orange-600 rounded-md text-lg pl-4'>
          <Users className='w-6 h-6'/>
          Costumer
          </Link>

          <Link className='flex items-center gap-3 px-6 py-2 md:hover:bg-orange-600 rounded-md text-lg pl-4'>
          <ShoppingBag className='w-6 h-6'/>
          Products
          </Link>
          <Link className='flex items-center gap-3 px-6 py-2 md:hover:bg-orange-600 rounded-md text-lg pl-4'>
          <ClipboardList className='w-6 h-6'/>
          Orders
          </Link>

          <Link className='flex items-center gap-3 px-6 py-2 md:hover:bg-orange-600 rounded-md text-lg pl-4'>
          <FileText className='w-6 h-6'/>
          Reports
          </Link>

          <Link className='flex items-center gap-3 px-6 py-2 md:hover:bg-orange-600 rounded-md text-lg pl-4'>
          <UserCog className='w-6 h-6'/>
          Manage Staff
          </Link>
        </ul>
      </div>

      <div className='w-full absolute bottom-6 px-6'>
        <button className='w-full text-white flex items-center text-lg gap-3 bg-orange-600 hover:bg-orange-700 my-1 px-4 rounded-md mt-4 py-2'>
        Logout
        <LogOut className='w-6 h-6'/>
      </button>
      </div>
    </div>
  )
}

export default Sidebar