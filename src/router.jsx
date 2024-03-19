import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListProducts from './pages/ListProducts'
import Erro from './pages/Erro'
import Home from './pages/Home'

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
            <Route path='/' element={<Home />}>
                <Route index element={<ListProducts />} ></Route>
                <Route path='*' element={<Erro />}></Route>
            </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter