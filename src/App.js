import React from 'react'
import Header from './components/header/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Products from './components/Products'
import Specials from './components/Specials'
import About from './components/About'
import Contact from './components/Contact'
import CartModal from './components/CartModal'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <Specials />
        <About />
        <Contact />
        <CartModal />
      </main>
      <Footer />
    </>
  )
}

export default App
