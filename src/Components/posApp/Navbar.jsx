import { ClipboardCheck, LogOut } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='px-4 py-2 w-full bg-white relative'>
      <div className='flex items-center justify-between'>
        <p className='text-lg font-medium'>LUCRUM POS</p>
        <div className='flex items-center gap-3 text-teal-600'>
          <p className='cursor-pointer'>CP</p>
          <button className='px-4 py-2 bg-teal-200'>Customer Screen</button>
          <p className='cursor-pointer hover:bg-teal-200 p-2' onClick={()=>setIsOpen(!isOpen)}>Menu</p>
          <div className={`absolute flex flex-col right-3 p-4 gap-3 rounded-md bg-white text-black top-16 ${isOpen ? 'block' : 'hidden'}`}>
            <button className='flex items-center py-1 px-2 hover:bg-teal-200 rounded-lg gap-1'>
              <ClipboardCheck className='w-5 h-5' />
              Close Shift
            </button>
            <button className='flex items-center py-1 px-2 hover:bg-teal-200 rounded-lg gap-1'>
              <LogOut className='w-5 h-5' />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar