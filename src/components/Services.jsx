import React from 'react'
import { Stethoscope, Brain, Syringe, Heart } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Check if we're on the services page
  const isServicesPage = location.pathname === '/services'
  
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
      icon: <Stethoscope size={32} />,
      title: 'General Health Check-ups',
      description: 'Comprehensive physical examinations and preventive health screenings',
      tags: ['Preventive Care', 'Annual Check-up']
    },
    {
      icon: <Heart size={32} />,
      title: 'Chronic Disease Management',
      description: 'Expert management of diabetes, hypertension, and thyroid disorders',
      tags: ['Diabetes', 'Hypertension', 'Thyroid']
    },
    {
      icon: <Brain size={32} />,
      title: 'Lifestyle & Wellness',
      description: 'Personalized diet plans, exercise guidance, and stress management',
      tags: ['Nutrition', 'Fitness']
    },
    {
      icon: <Syringe size={32} />,
      title: 'Infectious Disease Care',
      description: 'Treatment of fever, viral infections, and seasonal illnesses',
      tags: ['Fever', 'Viral Care']
    }
  ]

  const specialFocus = [
    {
      title: 'Diabetes Management',
      description: 'Specialized care for Type 1 & 2 diabetes with HbA1c monitoring and lifestyle counseling'
    },
    {
      title: 'Hypertension Control',
      description: 'Blood pressure management with regular monitoring and personalized treatment plans'
    },
    {
      title: 'Geriatric Care',
      description: 'Compassionate care for elderly patients with multiple health conditions'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Medical Services</h2>
          <p className="section-subtitle">Comprehensive healthcare solutions tailored to your needs</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="special-focus">
          <h3 className="focus-title">Special Focus Areas</h3>
          <div className="focus-grid">
            {specialFocus.map((focus, idx) => (
              <div key={idx} className="focus-card">
                <h4 className="focus-heading">{focus.title}</h4>
                <p className="focus-text">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services