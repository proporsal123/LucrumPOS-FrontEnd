import { ChevronsUpDown } from 'lucide-react'
import React from 'react'

const Filter = () => {
  return (
    <div className='mx-10 mt-8'>
      <div className='flex items-center bg-gray-200 py-1 px-2 text-gray-700 rounded-md mb-3 justify-between'>
        <input className='outline-none' type="text" placeholder='Assigned To' />
        <ChevronsUpDown className='w-3 h-3 fill-black text-black' />
      </div>
      <div className='flex items-center bg-gray-200 py-1 px-2 text-gray-700 rounded-md mb-2 justify-between'>
        <input className='outline-none' type="text" placeholder='Created BY' />
        <ChevronsUpDown className='w-3 h-3 fill-black text-black' />
      </div>
      <p className='mb-4 text-gray-600'>Edit Filters</p>
      <div className='flex items-center bg-gray-200 py-1 px-2 text-gray-700 rounded-md mb-2 justify-between'>
        <input className='outline-none' type="text" placeholder='Tags' />
        <ChevronsUpDown className='w-3 h-3 fill-black text-black' />
      </div>
      <p className='mb-8 text-gray-600'>Show Tags</p>
      <p className='mb-4'>Save Filter</p>
        <input className='bg-gray-200 text-sm p-2 rounded-md w-full outline-none' type="text" placeholder='Filter Name' />
    </div>
  )
}

export default Filter