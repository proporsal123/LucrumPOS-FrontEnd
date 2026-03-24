import { ClipboardList, LayoutDashboard, Receipt } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex w-full bg-gray-950 text-white pt-8 max-w-13 h-[calc(100vh-64px)]  text-sm flex-col gap-8 pl-1'>
        <Link to='/'>
            <LayoutDashboard strokeWidth={1} className='w-7 h-7'/>
            Dash <br /> board
          </Link>

          <Link to='/hold-order'>
            <Receipt strokeWidth={1} className='w-7 h-7'/>
            Hold Orders
          </Link>

          <Link to='/sales-order'>
            <ClipboardList strokeWidth={1} className='w-7 h-7'/>
            Sales Orders
          </Link>
      </div>
  )
}

export default Sidebar