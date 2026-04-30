import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { XIcon } from 'lucide-react'

const ItemsDetails = () => {
    const [quantity, setQuantity] = useState(1)
    const { showDetail, setShowDetail, selectedProduct, addToCart } = useContext(AppContext)

    const handleIncrement = () => {
        setQuantity(quantity + 1)
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAdd = () => {
        if (!selectedProduct) return
        addToCart(selectedProduct, quantity)
        setQuantity(1)
        setShowDetail(false)
    }

  return (
    <div className={`absolute z-50 w-full h-full flex flex-col justify-center items-center bg-[#00000090] ${showDetail ? 'block' : 'hidden'}`}>
        <div className='max-w-160 w-full relative flex bg-white px-5 rounded-xl h-140'>
          <div className=''>
            <img className='object-cover h-130 w-60'  src={selectedProduct?.image} alt="" />
          </div>
          <div className='w-full px-5'>
            <div className='bg-yellow-500 mr-3 absolute right-0 mt-3 cursor-pointer rounded-md px-2 py-1'>
              <XIcon onClick={()=>setShowDetail(false)} strokeWidth={3} className='w-3 text-white h-3'/>
            </div>
            <div className='pt-15 pb-20 flex flex-col gap-5'>
              <div className='flex items-center justify-between w-full'>
                <p className='font-medium'>Item Number</p>
                <p className='text-gray-600'>FBS-0{selectedProduct?._id} </p>
              </div>
              <div className='flex items-center justify-between w-full'>
                <p className='font-medium'>Item Detail</p>
                <p className='text-gray-600'> {selectedProduct?.name} </p>
              </div>
              <div className='flex items-center justify-between w-full'>
                <p className='font-medium'>Inventory</p>
                <p className='text-gray-600'> {selectedProduct?.inventory} </p>
              </div>
            </div>
            <div className='border-t flex items-center justify-between pt-10 border-teal-500'>
              <button onClick={handleDecrement} className='border text-xl cursor-pointer border-teal-500 bg-teal-100 py-3 px-8 rounded-lg '>-</button>
              <p className='text-4xl border-b-2 border-teal-500 pb-3'>{quantity}</p>
              <button onClick={handleIncrement} className='border text-xl cursor-pointer border-teal-500 bg-teal-100 py-3 px-8 rounded-lg '>+</button>
            </div>
            <button onClick={handleAdd} className='w-full mt-15 bg-teal-500 rounded-lg text-white py-2 px-5'>Add</button>
          </div>
        </div>
    </div>
  )
}

export default ItemsDetails