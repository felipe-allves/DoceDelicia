import { useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Benefits from './components/benefits/Benefits'
import Products from './components/Products/products'
import Specialties from './components/specialties/Specialties'
import History from './components/history/History'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Benefits/>
      <Products/>
      <Specialties/>
      <History/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
