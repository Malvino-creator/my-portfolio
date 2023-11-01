import React from 'react'
import Navbar from "../src/components/Navbar"
import Home from "../src/components/Home"
import About from "../src/components/About"
import Skills from "../src/components/Skills"
import Works from "../src/components/Works"

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Works />
    </div>
  )
}

export default App