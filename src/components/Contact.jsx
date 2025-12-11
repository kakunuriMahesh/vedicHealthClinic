import React, { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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

  const handleCallNow = () => {
    window.open('https://wa.me/1800657876?text=Hello, I would like to book an appointment', '_blank')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Schedule an appointment or reach out with any questions</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <div className="form-header">
              <MessageCircle size={24} />
              <h3>Send a Message</h3>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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

          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <MapPin size={24} />
              </div>
              <h4 className="contact-card-title">Clinic Address</h4>
              <div className="contact-card-content">
                <p>Dr. Priya's Clinic</p>
                <p>123, TTK Road, Alwarpet</p>
                <p>Chennai - 600018, Tamil Nadu</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">
                <Phone size={24} />
              </div>
              <h4 className="contact-card-title">Phone</h4>
              <div className="contact-card-content">
                <p>+91 98765 43210</p>
                <p>+91 44 2345 6789</p>
                <p>Emergency: +91 98765 00000</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">
                <Mail size={24} />
              </div>
              <h4 className="contact-card-title">Email</h4>
              <div className="contact-card-content">
                <p>dr.priya@healthcare.com</p>
                <p>appointments@healthcare.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact