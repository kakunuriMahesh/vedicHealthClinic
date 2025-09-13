import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HealthCheckup from './components/HealthCheckup'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Doctors from './components/Doctors'
import Departments from './components/Departments'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <HealthCheckup />
                <Testimonials />
                <Contact />
              </>
            } />
            <Route path="/services" element={
              <>
                <Services />
                <HealthCheckup />
              </>
            } />
            <Route path="/about" element={
              <>
                <About />
                <Testimonials />
              </>
            } />
            <Route path="/health-checkup" element={
              <>
                <HealthCheckup />
                <Contact />
              </>
            } />
            <Route path="/doctors" element={
              <>
                <Doctors />
                <Testimonials />
              </>
            } />
            <Route path="/departments" element={
              <>
                <Departments />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App