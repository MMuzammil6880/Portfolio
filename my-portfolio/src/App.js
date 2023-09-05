import React from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'

import Home from './pages/Home'
import NPortfolio from './Components/NPortfolio/nPortfolio'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/portfolio' element={<NPortfolio />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
