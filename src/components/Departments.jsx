import React from 'react'
import { Heart, Brain, Eye, Syringe, Stethoscope, Shield } from 'lucide-react'
import './Departments.css'

const Departments = () => {
  const departments = [
    {
      icon: <Heart size={40} />,
      title: 'Cardiology',
      description: 'Heart and cardiovascular system care',
      services: ['Heart Surgery', 'Angioplasty', 'ECG Testing', 'Echocardiography']
    },
    {
      icon: <Brain size={40} />,
      title: 'Neurology',
      description: 'Brain and nervous system treatment',
      services: ['Brain Surgery', 'EEG Testing', 'Neurological Exams', 'Stroke Care']
    },
    {
      icon: <Eye size={40} />,
      title: 'Ophthalmology',
      description: 'Eye care and vision treatment',
      services: ['Eye Surgery', 'Vision Testing', 'Cataract Treatment', 'Glaucoma Care']
    },
    {
      icon: <Syringe size={40} />,
      title: 'Pediatrics',
      description: 'Children\'s health and wellness',
      services: ['Child Vaccination', 'Growth Monitoring', 'Child Development', 'Emergency Care']
    },
    {
      icon: <Stethoscope size={40} />,
      title: 'General Medicine',
      description: 'Primary healthcare services',
      services: ['Health Checkups', 'Disease Prevention', 'Chronic Care', 'Health Counseling']
    },
    {
      icon: <Shield size={40} />,
      title: 'Emergency Care',
      description: '24/7 emergency medical services',
      services: ['Trauma Care', 'Critical Care', 'Ambulance Service', 'Emergency Surgery']
    }
  ]

  return (
    <section className="departments">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Medical Departments</h2>
          <p className="section-subtitle">Comprehensive healthcare services across all medical specialties</p>
        </div>

        <div className="departments-grid">
          {departments.map((department, index) => (
            <div key={index} className="department-card">
              <div className="department-icon">
                {department.icon}
              </div>
              
              <div className="department-content">
                <h3 className="department-title">{department.title}</h3>
                <p className="department-description">{department.description}</p>
                
                <ul className="department-services">
                  {department.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="service-item">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Departments
