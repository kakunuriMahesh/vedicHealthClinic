import React from 'react'
import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'T. Nagar, Chennai',
      text: 'Dr. Dasaradha Ram has been managing my diabetes for 3 years now. His personalized care and regular follow-ups have helped me maintain excellent blood sugar levels. He takes time to explain everything in Tamil, which I appreciate.',
      rating: 5
    },
    {
      id: 2,
      name: 'Lakshmi Sundaram',
      location: 'Adyar, Chennai',
      text: 'Very compassionate and knowledgeable doctor. He diagnosed my thyroid condition when other doctors missed it. His treatment plan worked perfectly and I\'m feeling much better now.',
      rating: 5
    },
    {
      id: 3,
      name: 'Venkatesh Iyer',
      location: 'Velachery, Chennai',
      text: 'Dr. Dasaradha Ram treats our entire family. He\'s excellent with children and elderly parents alike. Always available for emergencies and provides thorough consultation.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-header">
            <h2 className="section-title">Patient Testimonials</h2>
            <p className="section-subtitle">Hear what our patients have to say about their experience</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} size={20} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                
                <div className="testimonial-quote">
                  <Quote size={40} />
                </div>
                
                <blockquote className="testimonial-text">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="testimonial-author">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-location">{testimonial.location}</p>
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
