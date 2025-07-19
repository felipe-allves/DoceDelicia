import { useState } from 'react'
import Header from './components/header/header'
import Hero from './components/hero/Hero'
import Benefits from './components/benefits/benefits'
import Products from './components/Products/products'
import Specialties from './components/specialties/specialties'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Benefits/>
      <Products/>
      <Specialties/>
    </>
  )
}

export default App
