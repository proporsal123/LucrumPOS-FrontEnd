import React from 'react'
import ClosePOS from '../Components/posApp/ClosePOS'
import { ArrowLeft, Ban, Banknote, CreditCard, Printer, SplitSquareHorizontal } from 'lucide-react'
import Payment from '../Components/posApp/Payment'
import { useNavigate } from 'react-router-dom'

const Billing = () => {

  const navigate = useNavigate()

  return (
    <>
      <ClosePOS />
      <div className='flex'>
        <div className='mr-5 mt-3'>
          <div className='bg-white rounded-lg shadow-lg p-2 px-4 w-210'>
            <p className='text-sm mt-2 font-semibold'>Select Payment method</p>
            <div className='flex items-center justify-between mt-2'>
              <div className='flex gap-3 cursor-pointer'>
                <button className='flex items-center px-3 text-teal-500  gap-2 py-2 border border-teal-400 rounded-lg'>
                  <Banknote className='w-5 h-5' />
                  Cash
                </button>
                <button className='flex items-center px-3 text-teal-500  gap-2 py-2 border border-teal-400 rounded-lg'>
                  <CreditCard className='w-5 h-5' />
                  Keenu
                </button>
                <button className='flex items-center px-3 text-teal-500  gap-2 py-2 border border-teal-400 rounded-lg'>
                  <CreditCard className='w-5 h-5' />
                  HBL
                </button>
                <button className='flex items-center px-3 text-teal-500  gap-2 py-2 border border-teal-400 rounded-lg'>
                  <CreditCard className='w-5 h-5' />
                  MBL
                </button>
              </div>
              <div className='text-sm flex items-center gap-1'>
                <button onClick={()=>navigate(-1)} className='flex gap-1 items-center border rounded-lg border-teal-600 text-teal-700 px-4 py-2 bg-teal-100'>
                  <ArrowLeft className='w-4 h-4' />
                  BACK
                </button>
                <button className='flex gap-1 items-center border rounded-lg border-red-600 text-red-700 px-4 py-2 bg-red-100'>
                  <Ban className='w-4 h-4' />
                  CANCEL ORDER
                </button>
              </div>
            </div>
            <div className='text-sm flex gap-4 mt-8'>
              <input className='px-2 border outline-none rounded-lg border-gray-400 text-gray-500 py-2 w-52' type="text" placeholder='Paid Amount' />
              <input className='px-2 border outline-none rounded-lg border-gray-400 text-gray-400 py-2 w-52' type="text" placeholder='Discount (max 0%)' />
              <button onClick={() => setShowPayment(true)} className='text-teal-700 flex items-center gap-1 rounded-lg border border-teal-600 bg-teal-100 px-4'>
                <SplitSquareHorizontal className='w-4 h-4' />
                SPLIT PAYMENT
              </button>
            </div>
            <div className='text-sm w-full mt-5 flex gap-4'>
              <button className='py-2 px-2 pr-14 text-start border border-b-4 text-gray-400 border-teal-500 rounded-lg '>
                Paid Amount
                <p>Rs.0.00</p>
              </button>

              <button className='py-2 px-2 pr-14 text-start border border-b-4 text-gray-400 border-green-500 rounded-lg'>
                To Be Paid
                <p>Rs.0.00</p>
              </button>

              <button className='py-2 px-2 pr-14 text-start border border-b-4 text-gray-400 border-orange-500 rounded-lg '>
                Remaining Paid Amount
                <p>Rs.0.00</p>
              </button>

              <button className='py-2 px-2 pr-14 text-start border border-b-4 text-gray-400 border-amber-500 rounded-lg '>
                Change
                <p>Rs.-0</p>
              </button>
            </div>
            <div className='flex items-center text-sm text-gray-400 mt-6 mb-8 gap-4 w-[90%]'>
              <div className='border-b  border-teal-700 w-full'>
                <p>Total Amount</p>
                <p>Rs.0.00</p>
              </div>
              <div className='border-b  border-teal-700 w-full'>
                <p>Tax (GST 18%)</p>
                <p className='text-black font-semibold'>Rs.0.00</p>
              </div>
              <div className='border-b  border-teal-700 w-full'>
                <p>Net Total</p>
                <p>Rs.0.00</p>
              </div>
              <div className='border-b  border-teal-700 w-full'>
                <p>Discount</p>
                <p>Rs.0.00</p>
              </div>
              <div className='border-b  border-teal-700 w-full'>
                <p>Gross Total</p>
                <p className='text-black font-semibold'>Rs.0.00</p>
              </div>
            </div>
          </div>

          <div className='text-sm flex gap-2 items-center justify-end my-5'>
            <button className='flex gap-1 items-center py-2 px-4 rounded-md border border-teal-700 text-teal-700  bg-teal-100'>
              <Printer className='w-5 h-5' />
              Print Receipt
            </button>
            <button className='w-[50%] py-2 bg-teal-600 text-white font-semibold rounded-md'>CHECKOUT</button>
          </div>
          <div className='bg-white grid grid-cols-3 gap-2 p-4 mb-4 rounded-lg'>
        <button className='py-2 rounded-lg bg-teal-100 text-teal-600 border border-teal-600 font-medium '>1</button>
        <button className='py-2 rounded-lg bg-teal-100 text-teal-600 border border-teal-600 font-medium '>2</button>
        <button className='py-2 rounded-lg bg-teal-100 text-teal-600 border border-teal-600 font-medium '>3</button>
        <button className='py-2 rounded-lg bg-teal-100 text-teal-600 border border-teal-600 font-medium '>4</button>
        <button className='py-2 rounded-lg bg-teal-100 text-teal-600 border border-teal-600 font-medium '>5</button>
        <button className='py-2 rounded-lg bg-teal-100 text-teal-600 border border-teal-600 font-medium '>6</button>
        <button className='py-2 rounded-lg bg-teal-100 text-teal-600 border border-teal-600 font-medium '>7</button>
        <button className='py-2 rounded-lg bg-teal-100 text-teal-600 border border-teal-600 font-medium '>8</button>
        <button className='py-2 rounded-lg bg-teal-100 text-teal-600 border border-teal-600 font-medium '>9</button>
        <button className='py-2 rounded-lg bg-teal-100 text-teal-600 border border-teal-600 font-medium '>0</button>
        <button className='py-2 rounded-lg bg-teal-100 text-teal-600 border border-teal-600 font-medium '>*</button>
        <button className='py-2 rounded-lg bg-teal-100 text-teal-600 border border-teal-600 font-medium '>Back</button>
    </div>
        </div>
        <Payment />
      </div>
    </>
  )
}

export default Billing