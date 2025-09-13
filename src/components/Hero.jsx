import React from 'react'
import { ArrowRight, Phone, Users } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/1800657876?text=Hello, I would like to book an appointment', '_blank')
  }

  return (
    <section id="home" className="hero">
      {/* Top Section - Light Blue Background */}
      <div className="hero-top">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span>Welcome to VHC (Vedic Health Clinic)</span>
              </div>
              
              <h1 className="hero-title">
                The hospital that cares for life and humanity
              </h1>
              
              <div className="hero-actions">
                <button 
                  className="btn btn-primary hero-btn"
                  onClick={() => scrollToSection('#services')}
                >
                  Discover More
                  <ArrowRight size={20} />
                </button>
                
                <div className="hero-phone" onClick={handleWhatsApp}>
                  <span>FOR APPOINTMENT</span>
                  <Phone size={20} />
                  <span>1800-657-876</span>
                </div>
              </div>
            </div>
            
            <div className="hero-image">
              <img 
                src="/assets/img/IMG-20240923-WA0002-removebg-preview.png" 
                alt="Doctor" 
                className="doctor-image"
              />
              <div className="hero-badge-card">
                <div className="badge-icon">
                  <Users size={24} />
                </div>
                <div className="badge-text">
                  <span className="badge-number">20K+</span>
                  <span className="badge-label">Patients treated!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Dark Teal Background */}
      <div className="hero-bottom">
        <div className="container">
          <div className="hero-mission">
            <div className="mission-text">
              <h2 className="mission-title">
                VHC (Vedic Health Clinic) is<br />
                dedicated to provide<br />
                best treatment.
              </h2>
            </div>
            
            <div className="mission-description">
              <p>
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
              </p>
            </div>
          </div>
          
          {/* Service cards */}
          <div className="hero-services">
            <div className="service-card" style={{height:'365px'}} onClick={() => scrollToSection('#services')}>
              <div className="service-image">
                <img src="/assets/img/Clinic.png" alt="Pediatrician" />
              </div>
              <div className="service-content">
                <div className="service-content-inner">
                  <h4>For your child health</h4>
                  <p>Pediatrician</p>
                  <p>
                    Discover More
                    <ArrowRight size={16} />
                  </p>
                </div>
              </div>
            </div>
            
            <div className="service-card" style={{height:'365px'}}  onClick={() => scrollToSection('#services')}>
              <div className="service-image">
                <img src="/assets/img/CARD.png" alt="Cardiologist" />
              </div>
              <div className="service-content">
                <div className="service-content-inner">
                  <h4>For your child health</h4>
                  <p>Cardiologist</p>
                  <p>
                    Discover More
                    <ArrowRight size={16} />
                  </p>
                </div>
              </div>
            </div>
            
            <div className="service-card" style={{height:'365px'}}  onClick={() => scrollToSection('#services')}>
              <div className="service-image">
                <img src="/assets/img/LOGO.png" alt="Dermatologist" />
              </div>
              <div className="service-content">
                <div className="service-content-inner">
                  <h4>For your child health</h4>
                  <p>Dermatologist</p>
                  <p>
                    Discover More
                    <ArrowRight size={16} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero