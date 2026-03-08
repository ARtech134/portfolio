import React from 'react'
import Navbar from './compound/navbar'
import Hero from './compound/herosession'
import About from './compound/aboutsession'
import Projects from './compound/projects'
import Contact from './compound/contact'
import Footer from './compound/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
