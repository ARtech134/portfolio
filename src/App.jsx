import React from 'react'
import Navbar from './compound/navbar'
import Hero from './compound/herosession'
import About from './compound/aboutsession'
import Projects from './compound/projects'
import Contact from './compound/contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
