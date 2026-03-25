import { RotateCwIcon } from "lucide-react"
import ClosePOS from "../Components/posApp/ClosePOS"
import Payment from "../Components/posApp/Payment"
import { categories } from "../assets/assets"

const Dashboard = () => {
  return (
    <>
      <ClosePOS />
      <div className="flex">
        <div className=' bg-white mr-5 mt-3 px-4 p-2 rounded-lg shadow-lg w-210'>
          <div className='flex items-center justify-between '>
            <p className='mt-2 font-semibold'>Categories</p>
            <div className='text-sm flex gap-5 items-center'>
              <button className='px-2 py-2 text-base bg-teal-700 text-white rounded-md font-medium'>DEMAND</button>
              <button className='px-2 py-2 text-base bg-teal-700 text-white rounded-md font-medium'>REJECTION</button>
              <div className='rounded-full cursor-pointer py-2 px-2 shadow-sm'>
                <RotateCwIcon className='w-5 h-5' />
              </div>
            </div>
          </div>
          <div className='flex gap-2 text-base overflow-x-auto mt-6'>
            {categories.map((item) => (
              <button key={item.id} className='px-8 py-2 border-teal-500 whitespace-nowrap bg-teal-100 rounded-md border'>
                {item.category}
              </button>
            ))}
          </div>
          <p className='mt-6 mb-2'>Products</p>
        </div>
        <Payment />
      </div>
    </>
  )
}

export default Dashboard