import React from 'react'
import EditWorkplace from '../Components/workplace/EditWorkplace'
import Sidebar from '../Components/workplace/Sidebar'
import { ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LucrumPOS = () => {

    const navigate = useNavigate()

    return (
        <>
            <EditWorkplace title='LucrumPOS' />
            <div className='flex'>
                <Sidebar />
                <div className='px-5 py-2 border-r border-b border-l mt-3 border-gray-100 shadow-md w-220 h-[70vh]'>
                    <p className='my-4 text-gray-600'>Lucrum POS</p>
                    <p className='flex items-center hover:text-black transition-all gap-1 '>
                        Lucrum POS
                        <ArrowUpRight strokeWidth={1.2} className='w-4 h-4' />
                    </p>
                    <div className='grid grid-cols-3 text-gray-600 my-10 gap-y-10 gap-10 '>
                        <div className=''>
                            <h1 className='font-semibold mb-3 text-black'>POS</h1>
                            <p onClick={() => navigate('/')} className='flex items-center hover:text-black transition-all cursor-pointer gap-1'>Lucrum POS App <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' /> </p>
                            <p onClick={()=> navigate('/workplace/depository')} className='flex items-center hover:text-black cursor-pointer transition-all gap-1'>Depository <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' /> </p>
                        </div>
                        <div className=''>
                            <h1 className='font-semibold mb-3 text-black'>Profile</h1>
                            <p onClick={()=> navigate('/workplace/pos-profile')} className='flex items-center cursor-pointer hover:text-black transition-all gap-1'>POS Profile <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' /> </p>
                        </div>
                        <div className=''>
                            <h1 className='font-semibold mb-3 text-black'>Shift</h1>
                            <p  onClick={()=> navigate('/workplace/opening-shift')} className='flex items-center cursor-pointer hover:text-black transition-all gap-1'>Opening Shift <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' /> </p>
                            <p onClick={()=> navigate('/workplace/closing-shift')} className='flex items-center cursor-pointer hover:text-black transition-all gap-1'>Closing Shift <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' /> </p>
                        </div>
                        <div className='whitespace-nowrap'>
                            <h1 className='font-semibold mb-3 text-black'>Custom Reports</h1>
                            <p className='flex items-center cursor-pointer hover:text-black transition-all gap-1'>Offline Sync Report <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' /> </p>
                            <p className='flex items-center cursor-pointer hover:text-black transition-all gap-1'>Offline Sync Report-Branch Wise <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' /> </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LucrumPOS