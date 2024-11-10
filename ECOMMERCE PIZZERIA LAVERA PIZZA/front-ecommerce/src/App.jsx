import { Routes, Route } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';
import { HomePage } from './pages/HomePage';
import ContactPAge from './pages/ContactPAge';
import {AboutPage} from './pages/AboutPage';
import { Nav } from './components/ui/Nav';
import AllProducts from './pages/AllProducts';
import DetaillPage from './pages/DetaillPage';
import IniciarSesion from './pages/IniciarSesion';
import Register from './pages/Register';
import CartPage from './pages/CartPage';
import {store} from './redux/store';
import { syncCart } from './redux/cartSlice';
import { syncUser } from './redux/userSlice';
import Succes from './pages/Succes';
import { Fail } from './pages/Fail';

function App() {
  const setupStorageListener = () => {
    window.addEventListener("storage", (event) => {
      if (event.key === "cart") { // Solo reaccionar a cambios en `cart`
        store.dispatch(syncCart());
      }
      if (event.key === "user") { // Solo reaccionar a cambios en `user`
        store.dispatch(syncUser());
      }
    });
  };
  setupStorageListener();

  //comentario random
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/contact' element={<ContactPAge />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/allProducts' element={<AllProducts />} />
        <Route path='/products/:id' element={<DetaillPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<IniciarSesion />} />
        <Route path='/register' element={<Register />} />
        <Route path='/success' element={<Succes />} />
        <Route path='/fail' element={<Fail />} />
        <Route path='*' element={<h1>Not Found</h1>} />

      </Routes>

    </>

  )
}

export default App