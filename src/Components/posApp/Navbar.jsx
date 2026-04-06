import { ClipboardCheck, LogOut } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='px-4 py-2 w-full bg-white relative'>
      <div className='flex items-center justify-between'>
        <p className='text-lg font-medium'>LUCRUM POS</p>
        <div className='flex items-center gap-3 text-teal-600'>
          <p className='cursor-pointer'>CP</p>
          <button className='px-4 py-2 cursor-pointer bg-teal-200'>Customer Screen</button>
          <p className='cursor-pointer p-2' onClick={()=>setIsOpen(!isOpen)}>Menu</p>
          <div className={`absolute flex flex-col right-3 pl-1 pr-4 py-4 gap-3 rounded-md bg-white text-black top-16 ${isOpen ? 'block' : 'hidden'}`}>
            <Link className='flex items-center hover:bg-gray-200 pl-2 pr-8 py-1 rounded-lg gap-1'>
              <ClipboardCheck className='w-5 h-5' />
              Close Shift
            </Link>
            <Link className='flex items-center hover:bg-gray-200 pl-2 pr-8 py-1 rounded-lg gap-1'>
              <LogOut className='w-5 h-5' />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar