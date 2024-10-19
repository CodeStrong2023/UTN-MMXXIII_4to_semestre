import {Routes, Route} from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import {HomePage} from './pages/HomePage';

function App() {
  //comentario random
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/menu' element={<MenuPage/>}/>
    </Routes>
  )
}

export default App