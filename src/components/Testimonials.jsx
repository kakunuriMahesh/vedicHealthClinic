import React from 'react'
import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Mr. Williams',
      condition: 'Diabetes Patient',
      text: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mrs. Johnson',
      condition: 'Cardiology Patient',
      text: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      rating: 5
    },
    {
      id: 3,
      name: 'Dr. Smith',
      condition: 'General Health',
      text: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      rating: 5
    },
    {
      id: 4,
      name: 'Ms. Davis',
      condition: 'Pediatric Care',
      text: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-header">
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle">Real experiences from our valued patients</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-quote">
                  <Quote size={32} />
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} size={20} fill="currentColor" />
                  ))}
                </div>
                
                <blockquote className="testimonial-text">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="testimonial-author">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-condition">{testimonial.condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
