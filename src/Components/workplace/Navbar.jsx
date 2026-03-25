import { BellRing, ChevronLeft, Search } from 'lucide-react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation().pathname.includes('/material')
    const newLocation = useLocation().pathname.includes('/material/details')
    const stockLocation = useLocation().pathname.includes('/stock')
    const newStockLocation = useLocation().pathname.includes('/stock-list')


    const navigate = useNavigate()

    return (
        <div className='w-full bg-gray-100 px-36 py-1 flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <p className='relative cursor-pointer text-xl font-semibold'>LUCRUM</p>
                {location && <div onClick={() => navigate('/lucrum/pos')} className='flex items-center gap-1 cursor-pointer hover:text-gray-800'>
                    <ChevronLeft className='w-3 h-3' />
                    <p className='text-xs'>Material Request</p>
                </div>}
                {newLocation && <div onClick={() => navigate('/lucrum/material')} className='flex items-center gap-1 cursor-pointer hover:text-gray-800'>
                    <ChevronLeft className='w-3 h-3' />
                    <p className='text-xs'>New Material Request</p>
                </div>}
                {stockLocation && <div onClick={() => navigate('/lucrum/pos')} className='flex items-center gap-1 cursor-pointer hover:text-gray-800'>
                    <ChevronLeft className='w-3 h-3' />
                    <p className='text-xs'>Stock Entry</p>
                </div>}
                {newStockLocation &&
                    <div onClick={() => navigate('/lucrum/stock')} className='flex items-center gap-1 cursor-pointer hover:text-gray-800'>
                        <ChevronLeft className='w-3 h-3' />
                        <p className='text-xs'>New Stock</p>
                    </div>
                }
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