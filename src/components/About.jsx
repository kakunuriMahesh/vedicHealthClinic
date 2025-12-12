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
          <h2 className="section-title">About Dr. Dasaradha Ram</h2>
          <p className="section-subtitle">
            Dedicated to excellence in medical care.
          </p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Our medical practice in Visakhapatnam specializes in General Medicine, with a focus on comprehensive health management. We offer a range of services, including treatment for diabetes, hypertension, thyroid disorders, and personalized care aimed at improving overall health and well-being. Catering primarily to patients aged 40 and above.
            </p>
            <p className="about-paragraph">
              Our team of experienced doctors and healthcare professionals is dedicated to providing the highest quality of care to our patients. We are committed to helping our patients achieve and maintain optimal health and well-being.
            </p>
          </div>
          
          <div className="about-image">
            <img 
              src="/assets/img/IMG-20240923-WA0002-removebg-preview.png" 
              alt="Dr. Dasaradha Ram Barla" 
              className="clinic-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About