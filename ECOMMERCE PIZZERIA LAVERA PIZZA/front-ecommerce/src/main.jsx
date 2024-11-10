
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
