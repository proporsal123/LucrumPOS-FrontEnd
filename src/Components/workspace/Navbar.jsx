import { BellRing, Search } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [workspaces, setWorkspaces] = useState(false)

    return (
        <div className='w-full bg-gray-100 px-10 py-1 flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <p className='relative cursor-pointer text-xl font-semibold'>LUCRUM</p>
            </div>
            <div className='flex items-center gap-6'>
                <div className='relative'>
                    <div onClick={() => setWorkspaces(!workspaces)} className='relative rounded-lg'>
                        <input className={`py-2 w-75 outline-none px-4 bg-white border border-gray-100 text-gray-400 ${workspaces ? 'rounded-b-none rounded-t-lg' : 'rounded-lg'}`} type="text" placeholder='Search' />
                        <Search className='w-5 h-5 absolute cursor-pointer top-2.5 text-gray-400 right-3' />
                    </div>
                    <ul className={`bg-white p-2 border border-gray-200 text-gray-600 flex-col gap-2 absolute shadow-md top-8 w-full mt-1.5 rounded-b-lg ${workspaces ? 'flex' : 'hidden'}`}>
                        <li className='cursor-pointer pr-10 pl-2 py-1 hover:bg-gray-100 rounded-lg' onClick={()=>setWorkspaces(false)}>Workspaces</li>
                        <li className='cursor-pointer pr-10 pl-2 py-1 hover:bg-gray-100 rounded-lg' onClick={()=>setWorkspaces(false)}>Material Request list</li>
                        <li className='cursor-pointer pr-10 pl-2 py-1 hover:bg-gray-100 rounded-lg' onClick={()=>setWorkspaces(false)}>Offline Sync Report Report</li>
                        <li className='cursor-pointer pr-10 pl-2 py-1 hover:bg-gray-100 rounded-lg' onClick={()=>setWorkspaces(false)}>Stock Entry List</li>
                        <li className='cursor-pointer pr-10 pl-2 py-1 hover:bg-gray-100 rounded-lg' onClick={()=>setWorkspaces(false)}>POS Profile List</li>
                        <li className='cursor-pointer pr-10 pl-2 py-1 hover:bg-gray-100 rounded-lg' onClick={()=>setWorkspaces(false)}>Help on Search</li>
                    </ul>
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