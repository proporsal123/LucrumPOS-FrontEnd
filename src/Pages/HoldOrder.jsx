import React from 'react'
import Payment from '../Components/posApp/Payment'
import ClosePOS from '../Components/posApp/ClosePOS'
import { Plus } from 'lucide-react'

const HoldOrder = () => {
  return (
    <>
      <ClosePOS />
      <div className="flex">
        <div className='bg-white mr-5 mt-3 rounded-lg shadow-lg w-210'>
                <div className='flex items-center p-2 pr-6 px-4 justify-between'>
                    <p className='text-lg mt-2 font-medium'>Hold Orders</p>
                    <button className='flex text-sm border border-teal-600 text-teal-600 py-2 w-56 justify-center rounded-lg items-center gap-2'>
                        <Plus className='w-3 h-3' />
                        Add Item
                    </button>
                </div>
            </div>
        <Payment />
      </div>
    </>
  )
}

export default HoldOrder