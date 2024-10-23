import {Routes, Route} from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import {HomePage} from './pages/HomePage';
import ContactPAge from './pages/ContactPAge';
import { Nav } from './components/ui/nav';

function App() {
  //comentario random
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/contact' element={<ContactPAge />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    
    </>
    
  )
}

export default App