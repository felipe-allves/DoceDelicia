import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Benefits from './components/Benefits/Benefits'
import Products from './components/Products/Products'
import Specialties from './components/Specialties/Specialties'
import History from './components/History_/History'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

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
