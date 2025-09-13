import React, { useState } from 'react'
import { Check, ArrowRight, Heart, Stethoscope, Syringe, Shield, Users, Clock } from 'lucide-react'
import './HealthCheckup.css'

const HealthCheckup = () => {
  const [activeTab, setActiveTab] = useState(0)

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tabContent = [
    {
      title: 'Woman Health',
      icon: <Heart size={24} />,
      content: {
        title: 'Comprehensive Women\'s Health Care',
        description: 'We provide specialized healthcare services tailored specifically for women at every stage of life. Our comprehensive approach ensures optimal health and wellness.',
        features: [
          'Annual wellness exams and preventive care',
          'Reproductive health and family planning',
          'Prenatal and postnatal care',
          'Menopause management and hormone therapy',
          'Breast health screening and mammography',
          'Bone density testing and osteoporosis prevention'
        ],
        image: '/assets/img/Article_img.jpg'
      }
    },
    {
      title: 'Cancer Screening',
      icon: <Shield size={24} />,
      content: {
        title: 'Advanced Cancer Detection & Prevention',
        description: 'Early detection saves lives. Our state-of-the-art screening programs help identify cancer in its earliest, most treatable stages.',
        features: [
          'Comprehensive cancer risk assessment',
          'Advanced imaging and diagnostic tests',
          'Genetic counseling and testing',
          'Multi-specialty tumor board consultations',
          'Personalized screening schedules',
          'Support groups and counseling services'
        ],
        image: '/assets/img/MostCommon.png'
      }
    },
    {
      title: 'Kids Vaccines',
      icon: <Syringe size={24} />,
      content: {
        title: 'Complete Pediatric Vaccination Program',
        description: 'Protect your child\'s health with our comprehensive vaccination program following the latest CDC guidelines and recommendations.',
        features: [
          'Age-appropriate vaccination schedules',
          'Travel vaccines and immunizations',
          'Flu shots and seasonal vaccines',
          'Vaccine safety monitoring',
          'Parent education and counseling',
          'Immunization record management'
        ],
        image: '/assets/img/GetVaccinated.jpg'
      }
    }
  ]

  return (
    <section id="health-checkup" className="health-checkup">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Specialized Services</h2>
          <p className="section-subtitle">
            Comprehensive healthcare solutions tailored to meet your specific needs and ensure optimal wellness.
          </p>
        </div>

        <div className="tabbed-content">
          <div className="tab-navigation">
            {tabContent.map((tab, index) => (
              <button 
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-text">{tab.title}</span>
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className="content-wrapper">
              <div className="content-text">
                <h3 className="content-title">{tabContent[activeTab].content.title}</h3>
                <p className="content-description">{tabContent[activeTab].content.description}</p>
                
                <ul className="content-features">
                  {tabContent[activeTab].content.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className="btn btn-primary"
                  onClick={() => scrollToSection('#contact')}
                >
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
              
              <div className="content-image">
                <img src={tabContent[activeTab].content.image} alt={tabContent[activeTab].content.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HealthCheckup