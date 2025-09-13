import React from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>VHC (Vedic Health Clinic)</h3>
              <p>Dedicated to providing the best healthcare services with compassion and excellence.</p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Ambulance</a></li>
                  <li><a href="#services">Pathology</a></li>
                  <li><a href="#services">Radiology</a></li>
                  <li><a href="#services">Pharmacy</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Health Checkup</h4>
                <ul>
                  <li><a href="#health-checkup">Woman Health</a></li>
                  <li><a href="#health-checkup">Cancer Screening</a></li>
                  <li><a href="#health-checkup">Cardiac Health</a></li>
                  <li><a href="#health-checkup">MRI Checkup</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Departments</h4>
                <ul>
                  <li><a href="#services">General</a></li>
                  <li><a href="#services">Dermatology</a></li>
                  <li><a href="#services">Cardiology</a></li>
                  <li><a href="#services">Cancer</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#">License</a></li>
                  <li><a href="#">Changelog</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-contact">
              <div className="contact-item">
                <Phone size={16} />
                <span>1800-657-876</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>hello@yoursite.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>90919 Madie Run Apt. 790</span>
              </div>
            </div>
            
            <div className="footer-copyright">
              <p>&copy; 2023 RNN Studio. Powered by Webflow.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
