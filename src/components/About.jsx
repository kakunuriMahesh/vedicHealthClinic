import React from 'react'
import { Clock, Award, MapPin } from 'lucide-react'
import './About.css'

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/96Dqx6RBtwkWMUoS8', '_blank')
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Medpro Healthcare</h2>
            <p className="section-description">
              Our medical practice specializes in comprehensive healthcare services with a focus on 
              patient-centered care. We offer a range of medical specialties and treatments aimed at 
              improving overall health and well-being for patients of all ages.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <Clock size={24} />
                </div>
                <div className="stat-content">
                  <h3>5 to 8 pm</h3>
                  <p>Timings</p>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <Award size={24} />
                </div>
                <div className="stat-content">
                  <h3>5 Years +</h3>
                  <p>Experience</p>
                </div>
              </div>
              
              <div className="stat-item" onClick={openGoogleMaps}>
                <div className="stat-icon">
                  <MapPin size={24} />
                </div>
                <div className="stat-content">
                  <h3>Clinic</h3>
                  <p>Location</p>
                </div>
              </div>
            </div>
            
            <div className="about-quote">
              <p>"Inspiring Health & Enhancing life."</p>
            </div>
            
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('#contact')}
            >
              Book an Appointment
            </button>
          </div>
          
          <div className="about-image">
            <img 
              src="/assets/img/Clinic.png" 
              alt="Medical Clinic" 
              className="clinic-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About