import { ArrowUpRight } from 'lucide-react'
import EditWorkplace from '../Components/workplace/EditWorkplace'
import Sidebar from '../Components/workplace/Sidebar'
import { useNavigate } from 'react-router-dom'

const POS = () => {

    const navigate = useNavigate()

    return (
        <>
            <EditWorkplace title='POS' />
            <div className="flex">
                <Sidebar />
                <div className='h-screen'>
                    <div className='px-5 py-2 border-r border-b border-l mt-3 border-gray-100 shadow-md w-220 h-[80vh]'>
                        <p>POS</p>
                        <div className='grid grid-cols-4 text-gray-600 my-5 gap-y-5 gap-2'>
                            <div onClick={() => navigate('/')} className='flex gap-1 cursor-pointer items-center' >
                                Lucrum POS
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                            </div>
                            <div className='flex gap-1 cursor-pointer items-center' >
                                POS Shift Closed
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                                <div className='bg-gray-100 px-3 py-1 rounded-2xl'>1</div>
                            </div>
                            <div className='flex gap-1 cursor-pointer items-center' >
                                Opening Shift
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                                <div className='bg-gray-100 px-3 py-1 rounded-2xl'>1</div>
                            </div>
                            <div className='flex gap-1 cursor-pointer items-center' >
                                Demand
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                                <div className='bg-gray-100 px-3 py-1 rounded-2xl'>3</div>
                            </div>
                            <div className='flex gap-1 cursor-pointer items-center' >
                                Depository
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                                <div className='bg-gray-100 px-3 py-1 rounded-2xl'>0</div>
                            </div>
                            <div className='flex gap-1 cursor-pointer items-center' >
                                Rejection Entry
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                                <div className='bg-gray-100 px-2.5 py-1 rounded-2xl'>530</div>
                            </div>
                            <div className='flex gap-1 cursor-pointer items-center' >
                                Stock Take
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                                <div className='bg-gray-100 px-2.5 py-1 rounded-2xl'>242</div>
                            </div>
                            <div className='flex gap-1 cursor-pointer items-center' >
                                PandaGo Order
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                                <div className='bg-gray-100 px-3 py-1 rounded-2xl'>0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default POS