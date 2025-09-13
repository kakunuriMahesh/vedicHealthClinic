import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Stethoscope, Brain, Syringe, Eye, Heart, Check } from 'lucide-react'
import './Services.css'

const Services = () => {
  const navigate = useNavigate()
  
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSeeAllServices = () => {
    navigate('/services')
  }

  const services = [
    {
      icon: <Eye size={40} />,
      title: 'Eye Diseases',
      description: 'Advanced eye care and treatment services'
    },
    {
      icon: <Heart size={40} />,
      title: 'Cardiology',
      description: 'Heart health monitoring and treatment'
    },
    {
      icon: <Stethoscope size={40} />,
      title: 'General Health',
      description: 'Comprehensive healthcare services for all ages'
    },
    {
      icon: <Brain size={40} />,
      title: 'Mental Health',
      description: 'Professional mental health support and counseling'
    },
    {
      icon: <Syringe size={40} />,
      title: 'Vaccination',
      description: 'Complete vaccination programs for all age groups'
    },
    {
      icon: <Stethoscope size={40} />,
      title: 'Dermatology',
      description: 'Skin care and dermatological treatments'
    },
    {
      icon: <Heart size={40} />,
      title: 'Pediatrics',
      description: 'Specialized care for children and infants'
    },
    {
      icon: <Brain size={40} />,
      title: 'Neurology',
      description: 'Brain and nervous system care'
    }
  ]

  const whyChooseUs = [
    {
      icon: <Check size={24} />,
      title: 'Safety First Quality Must',
      description: 'We prioritize patient safety and maintain the highest quality standards in all our services.'
    },
    {
      icon: <Check size={24} />,
      title: 'Patient-Centric Approach',
      description: 'Every decision we make is centered around providing the best possible care for our patients.'
    },
    {
      icon: <Check size={24} />,
      title: 'Focused Leadership',
      description: 'Our experienced leadership team ensures excellent healthcare delivery and continuous improvement.'
    },
    {
      icon: <Check size={24} />,
      title: 'Cutting-Edge Technology',
      description: 'We use the latest medical technology and equipment to provide accurate diagnoses and treatments.'
    },
    {
      icon: <Check size={24} />,
      title: 'Transparent Pricing',
      description: 'No hidden costs - we believe in transparent and fair pricing for all our services.'
    },
    {
      icon: <Check size={24} />,
      title: 'Coordinated Care',
      description: 'Our multidisciplinary team works together to provide comprehensive and coordinated care.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Services & Treatments</h2>
          <p className="section-subtitle">More than 40 specialty and health care services</p>
        </div>

        <div className="services-carousel">
          <div className="services-track">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
            ))}
            {/* Duplicate for infinite scroll effect */}
            {services.map((service, index) => (
              <div key={`duplicate-${index}`} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="services-cta">
          <button 
            className="btn btn-outline"
            onClick={handleSeeAllServices}
          >
            See all Services
          </button>
        </div>

        {/* Why Choose Us Section */}
        <div className="why-choose-us">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why Choose Us?</h2>
              <ul className="why-choose-list">
                {whyChooseUs.map((feature, index) => (
                  <li key={index} className="why-choose-item">
                    <div className="check-icon">
                      {feature.icon}
                    </div>
                    <span>{feature.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="why-choose-main">
              <h2>Dedicated to provide best the treatment</h2>
              <p>
                They live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
                A small river named Duden flows by their place and supplies it.
              </p>
              <button 
                className="btn btn-outline-white"
                onClick={() => scrollToSection('#contact')}
              >
                Take an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services