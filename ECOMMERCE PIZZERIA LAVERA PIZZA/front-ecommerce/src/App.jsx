import { Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import { HomePage } from './pages/HomePage';
import ContactPAge from './pages/ContactPAge';
import Layout from './components/ui/Layout';

function App() {
  //comentario random
  return (
    < >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path='/contact' element={<ContactPAge />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>

  )
}

export default App