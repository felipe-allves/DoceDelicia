import { useState } from 'react'
import Header from './components/header/header'
import Hero from './components/hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
    </>
  )
}

export default App
