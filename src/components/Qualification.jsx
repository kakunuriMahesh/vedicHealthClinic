import React from 'react'
import { GraduationCap, Briefcase } from 'lucide-react'
import './Qualification.css'

const Qualification = () => {
  const education = [
    {
      degree: 'MD - General Medicine',
      institution: 'All India Institute of Medical Sciences (AIIMS), New Delhi',
      years: '2006 - 2009',
      badge: 'Gold Medalist'
    },
    {
      degree: 'MBBS',
      institution: 'Madras Medical College, Chennai',
      years: '2000 - 2005',
      badge: 'First Class with Honors'
    }
  ]

  const experience = [
    {
      role: 'Consultant Physician',
      hospital: 'Apollo Hospitals, Chennai',
      years: '2015 - Present'
    },
    {
      role: 'Senior Resident',
      hospital: 'AIIMS, New Delhi',
      years: '2009 - 2012'
    },
    {
      role: 'Medical Officer',
      hospital: 'Government General Hospital, Chennai',
      years: '2012 - 2015'
    }
  ]

  return (
    <section id="qualification" className="qualification">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Qualifications & Experience</h2>
          <p className="section-subtitle">Extensive training and experience in modern medical practice</p>
        </div>

        <div className="qualification-content">
          <div className="qualification-card">
            <div className="qual-icon-wrapper">
              <div className="qual-icon">
                <GraduationCap size={24} />
              </div>
            </div>
            <h3 className="qual-card-title">Education</h3>
            <div className="qual-list">
              {education.map((edu, index) => (
                <div key={index} className="qual-item">
                  <div className="qual-item-line"></div>
                  <div className="qual-item-content">
                    <div className="qual-item-header">
                      <h4 className="qual-degree">{edu.degree}</h4>
                      <span className="qual-badge">{edu.badge}</span>
                    </div>
                    <p className="qual-institution">{edu.institution}</p>
                    <p className="qual-years">{edu.years}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="qualification-card">
            <div className="qual-icon-wrapper">
              <div className="qual-icon">
                <Briefcase size={24} />
              </div>
            </div>
            <h3 className="qual-card-title">Experience</h3>
            <div className="qual-list">
              {experience.map((exp, index) => (
                <div key={index} className="qual-item">
                  <div className="qual-item-line"></div>
                  <div className="qual-item-content">
                    <h4 className="qual-degree">{exp.role}</h4>
                    <p className="qual-institution">{exp.hospital}</p>
                    <p className="qual-years">{exp.years}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification

