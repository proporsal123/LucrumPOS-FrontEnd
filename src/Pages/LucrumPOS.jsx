import { ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import EditWorkspace from '../Components/workspace/EditWorkspace'
import Sidebar from '../Components/workspace/Sidebar'

const LucrumPOS = () => {

    const navigate = useNavigate()

    return (
        <>
            <EditWorkspace title='LucrumPOS' />
            <div className='flex'>
                <Sidebar />
                <div className='px-5 mr-10 py-2 border-r border-b border-l mt-3 border-gray-100 shadow-md flex-1 min-h-[70vh]'>
                    <p className='my-4 text-black text-lg font-semibold'>Lucrum POS</p>
                    <div className='flex text-gray-600 my-10 gap-10 '>
                        <p onClick={() => navigate('/')} className='flex items-center hover:text-black transition-all cursor-pointer gap-1'>Lucrum POS App <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' /> </p>
                        <p onClick={() => navigate('/workspace/demand-forecasting')} className='flex items-center hover:text-black cursor-pointer transition-all gap-1'>Demand Forecasting <ArrowUpRight strokeWidth={1.6} className='w-4 h-4' /> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LucrumPOS