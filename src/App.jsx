import { useState } from 'react'
import Header from './components/Header_temp/Header'
import Hero from './components/Hero_temp/Hero'
import Benefits from './components/Benefits_temp/Benefits'
import Products from './components/Products_temp/Products'
import Specialties from './components/Specialties_temp/Specialties'
import History from './components/History_temp/History'
import Contact from './components/Contact_temp/Contact'
import Footer from './components/Footer_temp/Footer'

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
