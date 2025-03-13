// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>


)
// (SPA)1.renders different components based on the route.2.It doesn’t reload the page like traditional navigation.----No page refresh happens when switching routes.