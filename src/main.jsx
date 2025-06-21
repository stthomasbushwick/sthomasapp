import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
      <ScrollToTop />
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </StrictMode>,
)
