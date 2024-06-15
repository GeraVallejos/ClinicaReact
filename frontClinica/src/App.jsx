import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProductosList from './pages/ProductosList';
import ProductosForm from './pages/ProductosForm';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import User from './pages/User';
import UsuarioRegister from './pages/UsuarioRegister';


const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to='/producto-listado'/>} />
        <Route path='/producto-listado' element={<ProductosList/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/producto-crear' element={<ProductosForm/>} />
        <Route path='/register' element={<UsuarioRegister/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App