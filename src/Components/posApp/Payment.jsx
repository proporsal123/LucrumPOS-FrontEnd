import React from 'react'

const Payment = () => {
  return (
    <div className='w-full max-w-110 mt-3 bg-white rounded-lg shadow-lg p-2'>
            <div className='flex min-h-50 justify-between bg-gray-100 p-2 rounded-lg'>
                <p>ITEMS</p>
                <p>QTY.</p>
                <p>PRICE</p>
            </div>
            <div className='mt-4 bg-gray-100 rounded-lg py-3'>
                <p className='font-semibold px-2'>Order Summary</p>
                <div className='px-4 flex flex-col gap-1'>
                    <div className='flex justify-between items-center text-gray-700 my-2'>
                        <p>Total Quantity:</p>
                        <p>0</p>
                    </div>

                    <div className='flex justify-between items-center text-gray-700'>
                        <p>Net Total:</p>
                        <p>Rs.0.00</p>
                    </div>

                    <div className='flex justify-between items-center text-gray-700'>
                        <p>GST 18%:</p>
                        <p>Rs.0.00</p>
                    </div>

                    <div className='flex justify-between items-center text-gray-700'>
                        <p>Discount:</p>
                        <p>Rs.0.00</p>
                    </div>

                    <div className='flex justify-between font-semibold items-center mt-4 text-lg text-black'>
                        <p>Grand Total:</p>
                        <p className='text-red-500'>Rs.0.00</p>
                    </div>
                    <button className='w-full mt-3 py-2 bg-teal-700 rounded-lg text-white font-bold'>Payment</button>
                    <button className='w-full mt-3 py-2 bg-teal-700 rounded-lg text-white font-bold'>Hold</button>
                </div>

            </div>
        </div>
  )
}

export default Payment