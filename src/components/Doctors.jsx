import React from 'react'
import { User, Star, Award, Clock } from 'lucide-react'
import './Doctors.css'

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: '15+ years',
      rating: 4.9,
      image: '/assets/img/doctor1.jpg',
      description: 'Specialized in heart disease treatment and prevention'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      experience: '12+ years',
      rating: 4.8,
      image: '/assets/img/doctor2.jpg',
      description: 'Expert in brain and nervous system disorders'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      experience: '10+ years',
      rating: 4.9,
      image: '/assets/img/doctor3.jpg',
      description: 'Dedicated to children\'s health and wellness'
    },
    {
      name: 'Dr. David Wilson',
      specialty: 'Dermatologist',
      experience: '8+ years',
      rating: 4.7,
      image: '/assets/img/doctor4.jpg',
      description: 'Specialized in skin care and cosmetic treatments'
    }
  ]

  return (
    <section className="doctors">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Expert Doctors</h2>
          <p className="section-subtitle">Meet our highly qualified and experienced medical professionals</p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
                <div className="doctor-rating">
                  <Star size={16} />
                  <span>{doctor.rating}</span>
                </div>
              </div>
              
              <div className="doctor-content">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <p className="doctor-description">{doctor.description}</p>
                
                <div className="doctor-details">
                  <div className="detail-item">
                    <Award size={16} />
                    <span>{doctor.experience} experience</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors
