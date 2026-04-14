import { ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import EditWorkspace from '../Components/workspace/EditWorkspace'
import Sidebar from '../Components/workspace/Sidebar'

const POS = () => {

    const navigate = useNavigate()

    return (
        <>
            <EditWorkspace title='POS' />
            <div className="flex">
                <Sidebar/>
                <div className='px-5 py-2 border-r border-b border-l mt-3 border-gray-100 shadow-md mr-10 flex-1 min-h-[70vh]'>
                        <p className='font-semibold text-lg'>POS</p>
                        <div className='flex flex-wrap  text-gray-600 my-5 gap-y-5 gap-30'>
                            <div onClick={() => navigate('/')} className='flex hover:text-black gap-1 cursor-pointer items-center' >
                                Lucrum POS
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                            </div>
                            <div onClick={()=> navigate('/workspace/opening-shift')} className='flex hover:text-black gap-1 cursor-pointer items-center' >
                                Opening Shift
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                                <div className='bg-gray-100 px-3 py-1 rounded-2xl'>0</div>
                            </div>
                            <div onClick={()=> navigate('/workspace/closing-shift')} className='flex hover:text-black gap-1 cursor-pointer items-center' >
                                Closing Shift
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                                <div className='bg-gray-100 px-3 py-1 rounded-2xl'>0</div>
                            </div>
                            <div onClick={()=> navigate('/workspace/demand')} className='flex hover:text-black gap-1 cursor-pointer items-center' >
                                Demand
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                                <div className='bg-gray-100 px-3 py-1 rounded-2xl'>0</div>
                            </div>
                            <div onClick={()=> navigate('/workspace/rejection-entry')} className='flex hover:text-black gap-1 cursor-pointer items-center' >
                                Rejection Entry
                                <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' />
                                <div className='bg-gray-100 px-3 py-1 rounded-2xl'>0</div>
                            </div>
                        </div>
                    </div> 
            </div>
        </>
    )
}

export default POS