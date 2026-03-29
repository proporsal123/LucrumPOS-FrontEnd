import { BellRing, Search } from 'lucide-react'
import React from 'react'

const Navbar = () => {

    return (
        <div className='w-full bg-gray-100 px-36 py-1 flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <p className='relative cursor-pointer text-xl font-semibold'>LUCRUM</p>
            </div>
            <div className='flex items-center gap-6'>
                <div className='relative rounded-lg'>
                    <input className='py-2 w-60 text-sm outline-none rounded-md px-2 bg-white text-gray-400' type="text" placeholder='Search' />
                    <Search className='w-4 h-4 absolute top-2.5 text-gray-400 right-3' />
                </div>
                <div>
                    <p className='font-semibold'>Hello!</p>
                    <p className='text-sm text-gray-400'>Good Morning!</p>
                </div>
                <div className='p-2 rounded-lg hover:bg-purple-600 hover:text-purple-900 bg-white'>
                    <BellRing className='w-5 h-5' />
                </div>
            </div>
        </div>
    )
}

export default Navbar