import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import POSapp from './Pages/POSapp'
import HoldOrder from './Pages/HoldOrder'
import SalesOrder from './Pages/SalesOrder'
import LucrumPOS from './Pages/LucrumPOS'
import POS from './Pages/POS'
import Demand from './Pages/Demand'
import RejectionEntry from './Pages/RejectionEntry'
import OpeningShift from './Pages/OpeningShift'
import ClosingShift from './Pages/ClosingShift'
import Workspace from './Pages/Workspace'
import Billing from './Pages/Billing'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/*' element={<POSapp />} >
          <Route index element={<Dashboard />} />
          <Route path='hold-order' element={<HoldOrder />} />
          <Route path='sales-order' element={<SalesOrder />} />
          <Route path='billing' element={<Billing />} />
        </Route>
        <Route path='/workspace/*' element={<Workspace />} >
          <Route path='lucrum-pos' element={<LucrumPOS />} />
          <Route path='pos' element={<POS />} />
          <Route path='demand' element={<Demand />} />
          <Route path='rejection-entry' element={<RejectionEntry />} />
          <Route path='opening-shift' element={<OpeningShift />} />
          <Route path='closing-shift' element={<ClosingShift />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App