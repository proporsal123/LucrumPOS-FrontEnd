import { Outlet } from 'react-router-dom'
import CreateWorkspace from '../Components/workspace/CreateWorkspace'
import Navbar from '../Components/workspace/Navbar'

const Workspace = () => {
  return (
    <div className='bg-white'>
        <CreateWorkspace/>
        <Navbar/>
        <div className=''>  
            <Outlet/>
        </div>
    </div>
  )
}

export default Workspace