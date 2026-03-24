import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import POSapp from './Pages/POSapp'
import HoldOrder from './Pages/HoldOrder'
import SalesOrder from './Pages/SalesOrder'

const App = () => {
  return (
    <div>
      
      <Routes>
          <Route path='/*' element={<POSapp/>} >
            <Route index element={<Dashboard />} />
            <Route path='hold-order' element={<HoldOrder />} />
            <Route path='sales-order' element={<SalesOrder />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App