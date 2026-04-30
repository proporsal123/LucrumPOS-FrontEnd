import ItemsDetails from '../Components/posApp/ItemsDetails'
import Navbar from '../Components/posApp/Navbar'
import Sidebar from '../Components/posApp/Sidebar'
import { Outlet } from 'react-router-dom'

const POSapp = () => {
    return (
        <div className='bg-gray-100'>
            <ItemsDetails/>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <div className='flex-1 px-2 pt-4 h-[calc(100vh-64px)] overflow-y-auto '>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default POSapp