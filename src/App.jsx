import React from 'react'
import Navbar from "../src/components/Navbar"
import Home from "../src/components/Home"
import About from "../src/components/About"
import Skills from "../src/components/Skills"


function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
    </div>
  )
}

export default App