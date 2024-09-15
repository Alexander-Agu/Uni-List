import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import './index.css'
import UniApp from './Components/Uni App/UniApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <About />
    <UniApp />
  </StrictMode>,
)
