import React from 'react'
import Navbar from "../src/components/Navbar"
import Home from "../src/components/Home"
import About from "../src/components/About"
import Skills from "../src/components/Skills"
import Work from "../src/components/Work"

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
    </div>
  )
}

export default App