import React from 'react'
import { Route,Routes } from 'react-router-dom'
import MutualProduct from './pages/MutualProduct'
import Etfs from './pages/etfs'
import Riets from './pages/Riets'
import Stocks from './pages/stocks'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<MutualProduct/>}></Route>
      <Route path='/etf' element={<Etfs/>}></Route>
      <Route path='/stock' element={<Stocks/>}></Route>
      <Route path='/riet' element={<Riets/>}></Route>
    </Routes>
    </>
  )
}

export default App
