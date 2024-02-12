import React from 'react'
import Navbar from "../src/components/Navbar"
import Home from "../src/components/Home"
import About from "../src/components/About"
import Skills from "../src/components/Skills"
import Work from "../src/components/Work"
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer"


function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
    </div>
  )
}

export default App