import React from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">DR</div>
            <div>
              <h3>Dr. Priya</h3>
              <p className="footer-subtitle">General Physician</p>
            </div>
            <p className="footer-tagline">
              Trusted healthcare provider in Chennai for over 15 years. Committed to your health and wellbeing.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about') }}>About Dr. Priya</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services') }}>Services</a></li>
              <li><a href="#qualification" onClick={(e) => { e.preventDefault(); scrollToSection('#qualification') }}>Qualifications</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('#testimonials') }}>Patient Reviews</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact') }}>Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>General Check-ups</li>
              <li>Diabetes Management</li>
              <li>Hypertension Care</li>
              <li>Family Medicine</li>
              <li>Preventive Healthcare</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>123, TTK Road, Alwarpet, Chennai - 600018</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <span>dr.priya@healthcare.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2025 Dr. Priya Ramachandran. All rights reserved.</p>
          </div>

          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>

          <div className="footer-legal">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
