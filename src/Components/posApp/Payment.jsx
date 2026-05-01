import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Trash2Icon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const { cartItems, removeFromCart, addHoldOrder, clearCart } = useContext(AppContext)
  const navigate = useNavigate()
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const netTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const gst = Number((netTotal * 0.18).toFixed(2))
  const discount = 0
  const grandTotal = Number((netTotal + gst - discount).toFixed(2))

  const itemPayment = () => {
    if (cartItems.length !== 0) {
      navigate('/billing')
    }
  }

  const itemHold = () => {
    if (cartItems.length !== 0) {
      const holdOrder = {
        items: cartItems,
        totalQuantity,
        grandTotal,
        createdAt: new Date().toISOString(),
      }

      addHoldOrder(holdOrder)
      clearCart()
      navigate('/hold-order')
    }
  }

  return (
    <div className='w-full max-w-110 mt-3 bg-white rounded-lg shadow-lg p-2 overflow-y-auto max-h-[calc(100vh-64px)]'>
      <div className='min-h-50 bg-gray-100 p-2 rounded-lg'>
        <div className='flex justify-between pr-10 items-center'>
          <p>ITEMS</p>
          <p>QTY.</p>
          <p>PRICE</p>
        </div>
        <div className='divide-y divide-teal-200'>
          {cartItems.map((item) => (
            <div key={item._id} className='flex gap-4 items-center py-3'>
              <div className='flex justify-between w-full text-teal-600 items-center'>
                <p className='text-sm font-medium'>{item.name}</p>
                <p className='text-sm pr-6'>{item.quantity}</p>
                <p className='text-sm'>Rs.{item.price * item.quantity}</p>
              </div>
              <Trash2Icon
                className='w-5 h-5 text-red-500 fill-red-500 cursor-pointer'
                onClick={() => removeFromCart(item._id)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='mt-4 bg-gray-100 rounded-lg py-4'>
        <p className='font-semibold px-2'>Order Summary</p>
        <div className='px-4 flex flex-col gap-1'>
          <div className='flex justify-between items-center text-gray-700 my-2'>
            <p>Total Quantity:</p>
            <p>{totalQuantity}</p>
          </div>

          <div className='flex justify-between items-center text-gray-700'>
            <p>Net Total:</p>
            <p>Rs.{netTotal.toFixed(2)}</p>
          </div>

          <div className='flex justify-between items-center text-gray-700'>
            <p>GST 18%:</p>
            <p>Rs.{gst.toFixed(2)}</p>
          </div>

          <div className='flex justify-between items-center text-gray-700'>
            <p>Discount:</p>
            <p>Rs.{discount.toFixed(2)}</p>
          </div>

          <div className='flex justify-between font-semibold items-center mt-4 text-lg text-black'>
            <p>Grand Total:</p>
            <p className='text-red-500'>Rs.{grandTotal.toFixed(2)}</p>
          </div>
          <button onClick={itemPayment} className='w-full mt-3 cursor-pointer py-2 bg-teal-700 rounded-lg text-white font-bold'>Payment</button>
          <button onClick={itemHold} className='w-full mt-3 cursor-pointer py-2 bg-teal-700 rounded-lg text-white font-bold'>Hold</button>
        </div>

      </div>
    </div>
  )
}

export default Payment