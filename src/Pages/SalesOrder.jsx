import ClosePOS from '../Components/posApp/ClosePOS'
import Payment from '../Components/posApp/Payment'

const SalesOrder = () => {
  return (
    <>
        <ClosePOS/>
        <div className='flex'>
            <div className='w-full bg-white rounded-lg mt-3 mr-5 shadow-lg p-2 px-4 max-w-210'>
                <p className='font-semibold text-lg'>Sales Order</p>
            </div>
            <Payment/>
        </div>
    </>
  )
}

export default SalesOrder