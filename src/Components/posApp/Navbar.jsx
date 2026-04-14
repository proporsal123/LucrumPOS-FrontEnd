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
          <div className={`absolute right-3 top-16 flex-col gap-2 bg-white rounded-md text-gray-500 p-4 ${isOpen ? 'flex' : 'hidden'}`}>
                <Link className='flex items-center hover:text-black py-1 pr-8 rounded-lg gap-1'>
                  <ClipboardCheck className='w-5 h-5' />
                  Close Shift
                </Link>
                <Link className='flex items-center hover:text-black py-1 pr-8 rounded-lg gap-1'>
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