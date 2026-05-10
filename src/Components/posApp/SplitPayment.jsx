import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'

const SplitPayment = () => {

    const {showPayment , setShowPayment} = useContext(AppContext)

    return (
        <div className={`z-50 absolute bg-[#00000090] w-full h-full shadow-lg grid 
        ${showPayment ? 'block' : 'hidden'}`}>
            <div className='rounded-md place-self-center h-fit w-100 bg-white p-3'>
                <p className='text-xl mb-6 font-medium'>Split Payment</p>
                <div className='font-medium text-sm'>
                    <p>Grand Total: <span className='text-gray-500 font-normal'>220</span></p>
                    <p>Remaining Amount: <span className='text-gray-500 font-normal'>220</span></p>
                    <p>Paid Amount: <span className='text-gray-500 font-normal'>0</span></p>
                </div>
                <div>
                    <p className='text-sm font-medium'>Mode of Payment: <span className='text-gray-500 font-normal'>Cash</span></p>
                    <input min={1} className='w-full border-b border-gray-500 my-2 mb-6 p-2 rounded-t-lg text-gray-500 bg-gray-100 outline-none' type="number" placeholder='Enter Amount for Cash' />
                </div>
                <div>
                    <p className='text-sm font-medium'>Mode of Payment: <span className='text-gray-500 font-normal'>Keenu</span></p>
                    <input min={1} className='w-full border-b border-gray-500 my-2 mb-6 p-2 rounded-t-lg text-gray-500 bg-gray-100 outline-none' type="number" placeholder='Enter Amount for Keenu' />
                </div>
                <div>
                    <p className='text-sm font-medium'>Mode of Payment: <span className='text-gray-500 font-normal'>HBL</span></p>
                    <input min={1} className='w-full border-b border-gray-500 my-2 mb-6 p-2 rounded-t-lg text-gray-500 bg-gray-100 outline-none' type="number" placeholder='Enter Amount for HBL' />
                </div>
                <div>
                    <p className='text-sm font-medium'>Mode of Payment: <span className='text-gray-500 font-normal'>MBL</span></p>
                    <input min={1} className='w-full border-b border-gray-500 my-2 mb-6 p-2 rounded-t-lg text-gray-500 bg-gray-100 outline-none' type="number" placeholder='Enter Amount for MBL' />
                </div>
                <div className='mt-10 flex items-center justify-end gap-8'>
                    <button className='cursor-pointer' onClick={()=>setShowPayment(false)}>CANCEL</button>
                    <button className='text-blue-600 cursor-pointer'>CONFIRM</button>
                </div>
            </div>
        </div>
    )
}

export default SplitPayment