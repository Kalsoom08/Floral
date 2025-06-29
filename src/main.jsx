import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Provider/AuthProvider.jsx';
import ProductProvider from './Provider/ProductProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
    </AuthProvider>

  </StrictMode>,
)
