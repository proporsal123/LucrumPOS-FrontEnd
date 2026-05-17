import { ChevronsUpDown, Ellipsis, List, MenuIcon, Plus, RefreshCw } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddStock = ({title}) => {

  const navigate = useNavigate()

  return (
    <div className='px-10 flex items-center justify-between w-full mt-8'>
      <div className='flex gap-2 mb-3 items-center'>
        <MenuIcon className='w-5 h-5 cursor-pointer' />
        <p className='font-bold text-xl'> {title} </p>
      </div>
      <div className='flex items-center cursor-pointer justify-end gap-4'>
        <div className='flex items-center bg-gray-200 py-1 px-1.5 text-gray-700 rounded-md gap-1'>
          <List className='w-4 h-4' />
          <p>List View</p>
          <ChevronsUpDown className='w-3 h-3 fill-black text-black' />
        </div>
        <div className='bg-gray-200 text-gray-700 cursor-pointer p-1.5 rounded-md'>
          <RefreshCw strokeWidth={2.5} className='w-4 h-4' />
        </div>
        <div className='bg-gray-200 text-gray-700 p-1.5 cursor-pointer rounded-md'>
          <Ellipsis className='w-4 h-4' />
        </div>
        <button onClick={() => navigate('/workspace/demand/')} className='flex cursor-pointer items-center text-white bg-black py-1 px-2 rounded-md gap-1'>
          <Plus strokeWidth={3} className='w-3 h-3' />
          Add {title}
        </button>
      </div>
    </div>
  )
}

export default AddStock