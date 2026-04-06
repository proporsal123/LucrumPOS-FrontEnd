import { ChartBar, ChevronDownIcon, ChevronRight, Database } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [openPublic, setOpenPublic] = useState(true)

    return (
        <div className='px-10'>
            <div className='my-2'>
                <div onClick={() => setOpenPublic(!openPublic)} className='text-sm flex items-center cursor-pointer gap-1 text-gray-500'>
                    {openPublic ? (
                        <ChevronDownIcon className='w-4 h-4' />
                    ) : (
                        <ChevronRight className='w-4 h-4' />
                    )}
                    PUBLIC
                </div>
            </div>
            <div className={`my-5 flex-col gap-2 text-gray-500 ${openPublic ? 'flex' : 'hidden'}`}>
                <Link to='/workspace/lucrum-pos' className='flex hover:bg-gray-200 pl-2 pr-16 py-0.5 rounded-xl items-center gap-2'>
                    <Database className='w-4 h-4' />
                    Lucrum POS
                </Link>
                <Link to='/workspace/pos' className='flex hover:bg-gray-200 pl-2 py-0.5 rounded-xl items-center gap-2'>
                    <ChartBar className='w-4 h-4' />
                    POS
                </Link>
            </div>
        </div>
    )
}

export default Sidebar