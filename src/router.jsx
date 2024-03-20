import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListProducts from './pages/ListProducts'
import Erro from './pages/Erro'
import Home from './pages/Home'
import Adm from './pages/Adm'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<ListProducts />} />
        <Route path='Ofertas' element={<ListProducts />} />
        <Route path='Administracao' element={<Adm />} />
        <Route path='*' element={<Erro />} />
      </Route>
    </Routes>   
    </BrowserRouter>
  )
}

export default AppRouter