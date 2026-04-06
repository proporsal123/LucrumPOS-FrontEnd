import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import POSapp from './Pages/POSapp'
import HoldOrder from './Pages/HoldOrder'
import SalesOrder from './Pages/SalesOrder'
import LucrumPOS from './Pages/LucrumPOS'
import POS from './Pages/POS'
import Demand from './Pages/Demand'
import RejectionEntry from './Pages/RejectionEntry'
import StockTake from './Pages/StockTake'
import OpeningShift from './Pages/OpeningShift'
import ClosingShift from './Pages/ClosingShift'
import POSProfile from './Pages/POSProfile'
import Depository from './Pages/Depository'
import Workspace from './Pages/Workspace'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/*' element={<POSapp />} >
          <Route index element={<Dashboard />} />
          <Route path='hold-order' element={<HoldOrder />} />
          <Route path='sales-order' element={<SalesOrder />} />
        </Route>
        <Route path='/workspace/*' element={<Workspace />} >
          <Route path='lucrum-pos' element={<LucrumPOS />} />
          <Route path='pos' element={<POS />} />
          <Route path='demand' element={<Demand />} />
          <Route path='rejection-entry' element={<RejectionEntry />} />
          <Route path='stock-take' element={<StockTake />} />
          <Route path='opening-shift' element={<OpeningShift />} />
          <Route path='closing-shift' element={<ClosingShift />} />
          <Route path='pos-profile' element={<POSProfile />} />
          <Route path='depository' element={<Depository />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App