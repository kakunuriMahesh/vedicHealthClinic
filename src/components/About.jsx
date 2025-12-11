import React from 'react'
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
        <div className="section-header">
          <h2 className="section-title">About Dr. Priya</h2>
          <p className="section-subtitle">
            Dedicated to serving the Chennai community with excellence in medical care
          </p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Dr. Priya Ramachandran is a highly respected General Physician with over 15 years of clinical experience. She completed her MBBS from Madras Medical College and pursued her MD in General Medicine from AIIMS, New Delhi.
            </p>
            <p className="about-paragraph">
              Known for her compassionate approach and thorough diagnosis, Dr. Priya has become a trusted healthcare provider for families across Chennai. She believes in preventive medicine and educating patients about their health conditions.
            </p>
            <p className="about-paragraph">
              Fluent in Tamil, English, and Hindi, Dr. Priya ensures clear communication with all her patients. She regularly participates in medical camps and community health programs, especially focusing on diabetes and hypertension management.
            </p>
          </div>
          
          <div className="about-image">
            <img 
              src="/assets/img/IMG-20240923-WA0002-removebg-preview.png" 
              alt="Dr. Priya Ramachandran" 
              className="clinic-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About