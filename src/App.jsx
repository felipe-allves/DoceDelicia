import { useState } from 'react'
import Header from './components/header/header'
import Hero from './components/hero/Hero'
import Benefits from './components/benefits/benefits'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Benefits/>
    </>
  )
}

export default App
