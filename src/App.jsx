import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Qualification from './components/Qualification'
import HealthCheckup from './components/HealthCheckup'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Doctors from './components/Doctors'
import Departments from './components/Departments'
import Footer from './components/Footer'
import './App.css'

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <Qualification />
                <Testimonials />
                <Contact />
              </>
            } />
            <Route path="/services" element={
              <>
                <Services />
                {/* <HealthCheckup /> */}
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