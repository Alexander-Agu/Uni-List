import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
  </StrictMode>,
)
