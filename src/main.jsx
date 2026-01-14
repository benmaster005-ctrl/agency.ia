import 'bootstrap/dist/css/bootstrap.min.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/Theme.jsx';
import Footer from './component/Footer.jsx';
import Header from './component/Header.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Header />
      <App />
      <Footer />
    </ThemeProvider>
  </StrictMode>,
)
