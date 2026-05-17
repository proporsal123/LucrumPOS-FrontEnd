import React from 'react'
import AddStock from '../Components/workspace/AddStock'
import Filter from '../Components/workspace/Filter'
import { Ban, ChevronsUpDown, ListFilter, XIcon } from 'lucide-react'

const RejectionEntry = () => {
  return (
    <>
      <AddStock title= 'Stock Entry' />
      <div className='flex'>
        <Filter />
        <div className='mr-10 py-2 border-r border-b border-l mt-3 border-gray-200 flex-1 min-h-[70vh]'>
          <div className='flex items-start border-b pb-4 border-gray-200 justify-between'>
            <div className='flex flex-wrap gap-2 pl-5 w-140 items-center'>
              <input className='bg-gray-200 w-28 outline-none rounded-md pl-2 py-1' type="text" placeholder='ID' />
              <input className='bg-gray-200 w-28 truncate outline-none rounded-md pl-2 py-1' type="text" placeholder='Stock Entry Type' />
              <input className='bg-gray-200 w-28 truncate outline-none rounded-md pl-2 py-1' type="text" placeholder='Default Source Warehouse' />
              <input className='bg-gray-200 w-28 truncate outline-none rounded-md pl-2 py-1' type="text" placeholder='Default Source Warehouse' />
              <input className='bg-gray-200 w-28 truncate outline-none rounded-md pl-2 py-1' type="text" placeholder='Target Source Warehouse' />
            </div>
            <div className='flex pr-5 items-center gap-2'>
              <div className='flex items-center'>
                <div className='flex items-center cursor-pointer gap-1 rounded-bl-md rounded-tl-md bg-gray-200 px-2 p-1'>
                  <ListFilter className='w-3.5 h-3.5' />
                  <p>Filter</p>
                  <p className='rounded-full px-2 bg-white'>1</p>
                </div>
                <div className='p-2 cursor-pointer rounded-tr-md rounded-br-md bg-gray-100'>
                  <XIcon className='w-4 h-4' />
                </div>
              </div>
              <div className='flex p-1 px-2 cursor-pointer bg-gray-200 rounded-md items-center'>
                <div>

                </div>
                <p>Branch</p>
              </div>
              <div className='p-1.5 cursor-pointer rounded-md bg-red-200 text-red-700'>
                <Ban className='w-4 h-4' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RejectionEntry