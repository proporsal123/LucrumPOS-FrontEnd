import React from 'react'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/' element = {<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App