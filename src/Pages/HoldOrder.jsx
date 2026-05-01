import React, { useContext } from 'react'
import Payment from '../Components/posApp/Payment'
import ClosePOS from '../Components/posApp/ClosePOS'
import { Plus, TrashIcon } from 'lucide-react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const HoldOrder = () => {
  const { holdOrders, removeHoldOrder } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <>
      <ClosePOS />
      <div className="flex">
        <div className='bg-white mr-5 mt-3 rounded-lg shadow-lg w-210'>
          <div className='flex items-center p-2 pr-6 px-4 justify-between'>
            <p className='text-lg mt-2 font-medium'>Hold Orders</p>
            <button onClick={()=>navigate('/')} className='flex text-sm border cursor-pointer border-teal-600 text-teal-600 py-2 w-56 justify-center rounded-lg items-center gap-2'>
              <Plus className='w-3 h-3' />
              Add Item
            </button>
          </div>
          <div className='mt-10 mx-6 grid grid-cols-3 gap-8 row-gap-10'>
            {holdOrders.map((order, index) => (
              <div key={index} className='rounded-xl flex flex-col justify-between max-w-56 p-3 border border-red-500'>
                <div>
                  <div className='flex justify-between items-center mb-1'>
                    <div className='border border-red-500 bg-red-100 rounded-lg px-1'>
                      <p className='text-red-500'>Hold-Order-{index + 1}</p>
                    </div>
                    <TrashIcon className='w-5 fill-red-500 cursor-pointer text-red-500 h-5' onClick={()=>removeHoldOrder(index)} />
                  </div>

                  <p className='mb-5 text-gray-400'> Date:{new Date(order.createdAt).toLocaleString()} </p>

                  <div className='pb-12'>
                    <p className='font-medium'>Order Details:</p>
                    {order.items.map((item) => (
                      <div key={item._id} className='text-sm text-gray-500'>
                        <p>{item.name} x{item.quantity}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='border-t flex items-end font-semibold justify-between border-dotted border-gray-400 pt-2'>
                  Grand Total
                  <p className='text-red-600 font-normal '>Rs.{order.grandTotal.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Payment />
      </div>
    </>
  )
}

export default HoldOrder