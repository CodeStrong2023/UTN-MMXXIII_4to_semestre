import {Routes, Route} from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/menu' element={<MenuPage/>}/>
    </Routes>
  )
}

export default App