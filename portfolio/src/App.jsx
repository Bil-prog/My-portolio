// eslint-disable-next-line no-unused-vars
import React from 'react'
import { DarkModeProvider } from './components/JSX/DarkModeContext';
import Navbar from './components/JSX/Navbar'
import Hero from './components/JSX/Hero'
import About from './components/JSX/About'
import Expertise from './components/JSX/Expertise'
import Projects from './components/JSX/Projects'
import Contact from './components/JSX/Contact'
import Footer from './components/JSX/Footer'



export default function App() {
  return (
    <div>
      <DarkModeProvider>
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </div>
  )
}


