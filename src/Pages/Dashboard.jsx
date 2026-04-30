import { RotateCwIcon } from "lucide-react"
import ClosePOS from "../Components/posApp/ClosePOS"
import Payment from "../Components/posApp/Payment"
import { assets, categories, products } from "../assets/assets"
import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

const Dashboard = () => {

  const { showDetail, setShowDetail, setSelectedProduct } = useContext(AppContext)

  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [filterProduct, setFilterProduct] = useState(products.filter((product) => product.category === categories[0]))

  const handleCategorySelect = (category) => {
    let filteredProducts = products.filter((product) => product.category === category)
    setFilterProduct(filteredProducts)
    setSelectedCategory(category)
  }

  return (
    <>
      <ClosePOS />
      <div className="flex">
        <div className=' bg-white mr-5 mt-3 px-4 p-2 rounded-lg shadow-lg w-210 overflow-y-auto max-h-[calc(100vh-64px)]'>
          <div className='flex items-center justify-between '>
            <p className='mt-2 text-lg font-semibold'>Categories</p>
            <div className='text-sm flex gap-5 items-center'>
              <button className='px-2 py-2 text-base bg-teal-700 text-white rounded-md font-medium cursor-pointer'>DEMAND</button>
              <button className='px-2 py-2 text-base bg-teal-700 text-white rounded-md font-medium cursor-pointer'>REJECTION</button>
              <div className='rounded-full cursor-pointer py-2 px-2 shadow-sm'>
                <RotateCwIcon className='w-5.5 h-5.5' />
              </div>
            </div>
          </div>
          <div className='flex gap-2 text-base overflow-x-auto mt-6'>
            {categories.map((item) => (
              <button onClick={() => handleCategorySelect(item)} key={item} className={`px-8 py-2  whitespace-nowrap  rounded-md border cursor-pointer
              ${selectedCategory === item ? 'bg-red-100 border-red-500' : 'border-teal-500 bg-teal-100'}`}>
                {item}
              </button>
            ))}
          </div>
          <p className='mt-6 text-lg mb-4'>Products</p>
          {
            filterProduct.length > 0 ? (
              <div className='flex mx-2 flex-wrap gap-6 gap-y-8'>
            {
              filterProduct.map((product, idx) => (
                <div onClick={()=>{ setSelectedProduct(product); setShowDetail(true); }} className='w-36 rounded-3xl cursor-pointer hover:-translate-y-1 transition-all  hover:bg-gray-200' key={idx}>
                  <img className='h-40 object-cover rounded-t-3xl' src={product.image} alt='product image' />
                  <div className="text-center py-4">
                    <p className=""> {product.name} </p>
                  <p className='text-red-500'>Rs.{product.price} </p>
                  </div>
                </div>
              ))
            }
          </div>
            ) : (
              <div className="flex items-center justify-center">
                <img src={assets.No_Data} alt=""/>
              </div>
            )
          }
        </div>
        <Payment />
      </div>
    </>
  )
}

export default Dashboard