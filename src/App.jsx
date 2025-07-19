import { useState } from 'react'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Benefits from './components/benefits/benefits'
import Products from './components/product/products'
import Specialties from './components/specialties/specialties'
import History from './components/history/history'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

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
