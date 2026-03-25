import { ChartBar, ChevronDownIcon, ChevronRight, Database } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [openPublic, setOpenPublic] = useState(true)

    return (
        <div className='pl-36 pr-18'>
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
            <div className={`my-5 text-gray-500 ${openPublic ? 'block' : 'hidden'}`}>
                <Link to='/workplace/lucrum-pos' className='flex items-center gap-2'>
                    <Database className='w-4 h-4' />
                    Lucrum POS
                </Link>
                <Link to='/workplace/pos' className='flex items-center gap-2'>
                    <ChartBar className='w-4 h-4' />
                    POS
                </Link>
            </div>
        </div>
    )
}

export default Sidebar