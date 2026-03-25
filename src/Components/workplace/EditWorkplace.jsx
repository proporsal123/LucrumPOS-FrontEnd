import { Edit, MenuIcon } from 'lucide-react'
import React from 'react'

const EditWorkplace = ({title}) => {
  return (
    <div className='px-36 flex items-center justify-between w-full my-3'>
            <div className='flex gap-1 mb-3 items-center'>
                <MenuIcon className='w-5 h-5 cursor-pointer' />
                <p className='font-bold text-lg'> {title} </p>
            </div>
            <div className='text-sm flex items-center gap-2'>
                <button className='bg-gray-100 py-1 px-2 rounded-md cursor-pointer text-gray-500'>Create Workplace</button>
                <button className='flex bg-gray-100 py-1 px-2 rounded-md cursor-pointer text-gray-500 items-center gap-2'>
                    <Edit className='w-5 h-5' /> Edit
                </button>
            </div>
        </div>
  )
}

export default EditWorkplace