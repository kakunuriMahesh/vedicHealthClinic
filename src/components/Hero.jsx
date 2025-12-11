import React from 'react'
import { Phone } from 'lucide-react'
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
                <span>Trusted Healthcare in Chennai</span>
              </div>
              
              <h1 className="hero-title">
                Dr. Priya Ramachandran
              </h1>
              
              <p className="hero-qualifications">MBBS, MD (General Medicine)</p>
              
              <p className="hero-description">
                Providing compassionate and comprehensive healthcare services to the people of Chennai for over 15 years. Specialized in preventive care, chronic disease management, and family medicine.
              </p>
              
              <div className="hero-actions">
                <button 
                  className="btn btn-primary hero-btn"
                  onClick={() => scrollToSection('#contact')}
                >
                  Book Appointment
                </button>
                
                <button 
                  className="btn btn-outline hero-btn"
                  onClick={handleWhatsApp}
                >
                  <Phone size={20} />
                  Call Now
                </button>
              </div>
              
              <div className="hero-stats">
                <div className="stat-card">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">10,000+</div>
                  <div className="stat-label">Patients Treated</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Patient Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="hero-image">
              <img 
                src="/assets/img/IMG-20240923-WA0002-removebg-preview.png" 
                alt="Dr. Priya Ramachandran" 
                className="doctor-image"
              />
              <div className="availability-card">
                <div className="availability-title">Available for Consultation</div>
                <div className="availability-time">Mon - Sat, 9 AM - 8 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero