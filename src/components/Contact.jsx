import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appointmentType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Using the same Google Sheets script from your original website
      const scriptURL = "https://script.google.com/macros/s/AKfycbzWritwiQ6I62qK7jEaJZBYx2FwcItAQGxr9QVwJfcKrk2RlTlisTcqF4gs51--bQ/exec"
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(e.target)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          phone: '',
          email: '',
          appointmentType: '',
          message: ''
        })
        
        // Show success message
        setTimeout(() => {
          setSubmitStatus(null)
        }, 3000)
      } else {
        throw new Error('Form submission failed.')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
      
      // Show error message
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in touch to book your first appointment</h2>
          <p className="section-subtitle">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>1800-657-876</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>hello@yoursite.io</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-text">
                  <h3>Address</h3>
                  <p>90919 Madie Run Apt. 790<br />Healthcare City, HC 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="appointmentType">Select Appointment Type</label>
                <select
                  id="appointmentType"
                  name="appointmentType"
                  value={formData.appointmentType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Choose an option</option>
                  <option value="general">General Consultation</option>
                  <option value="checkup">Health Checkup</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your health concerns..."
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
              >
                <Send size={20} />
                {isSubmitting ? 'Submitting...' : 'Book Appointment'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="toast success">
                  Form submitted successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="toast error">
                  Error submitting form. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact