import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import './Articles.css'

const Articles = () => {
  const navigate = useNavigate()

  // Publications data
  const publications = [
    {
      id: 1,
      title: 'Pulmonary Dysfunction in Patients with Cirrhosis of the Liver: A Study of Pulmonary Function Tests and Arterial Blood Gases',
      link: 'https://journals.lww.com/ijab/fulltext/2024/14010/pulmonary_dysfunction_in_patients_with_cirrhosis.9.aspx'
    },
    {
      id: 2,
      title: 'Upper and Lower Gastrointestinal Endoscopic Lesions in Patients with Unexplained Iron Deficiency Anaemia-A Cross-sectional Study.',
      link: 'https://openurl.ebsco.com/EPDB%3Agcd%3A3%3A19450259/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A152436354&crl=c'
    },
    {
      id: 3,
      title: 'Study of High sensitivity C Reactive Protein Levels in Patients with Chronic Dyspepsia and Its Correlation with Helicobacter Pylori Infection',
      link: 'https://www.ijbamr.com/assets/images/issues/pdf/FVM15s_gB3oW9_O2Qx5k_17FoV3_191186.pdf'
    }
  ]

  // Sample articles data - replace with actual data from API or state
  const articles = [
    {
      id: 1,
      title: 'Understanding Diabetes: A Comprehensive Guide',
      description: 'Learn about the types, symptoms, and management of diabetes. This comprehensive guide covers everything you need to know about living with diabetes.',
      image: '/assets/img/GetVaccinated.jpg',
      date: '2024-01-15',
      category: 'Health & Wellness'
    },
    {
      id: 2,
      title: 'Hypertension: Silent Killer and Prevention',
      description: 'High blood pressure affects millions worldwide. Discover prevention strategies and treatment options for managing hypertension effectively.',
      image: '/assets/img/GetVaccinated.jpg',
      date: '2024-01-10',
      category: 'Cardiac Health'
    },
    {
      id: 3,
      title: 'Mental Health and Well-being in Modern Times',
      description: 'Exploring the importance of mental health and practical tips for maintaining emotional well-being in our fast-paced world.',
      image: '/assets/img/GetVaccinated.jpg',
      date: '2024-01-05',
      category: 'Mental Health'
    },
    {
      id: 4,
      title: 'Nutrition Guide for Healthy Living',
      description: 'A complete guide to balanced nutrition, including meal planning, essential nutrients, and healthy eating habits for optimal health.',
      image: '/assets/img/GetVaccinated.jpg',
      date: '2023-12-28',
      category: 'Nutrition'
    },
    {
      id: 5,
      title: 'Preventive Health Check-ups: Why They Matter',
      description: 'Regular health screenings can detect issues early. Learn about recommended check-ups and their importance in preventive care.',
      image: '/assets/img/GetVaccinated.jpg',
      date: '2023-12-20',
      category: 'Preventive Care'
    },
    {
      id: 6,
      title: 'Exercise and Physical Activity for All Ages',
      description: 'Discover the benefits of regular exercise and find suitable physical activities for every age group and fitness level.',
      image: '/assets/img/GetVaccinated.jpg',
      date: '2023-12-15',
      category: 'Fitness'
    }
  ]

  const handleArticleClick = (articleId) => {
    navigate(`/articles/${articleId}`)
  }

  return (
    <section className="articles">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Health Articles</h2>
          <p className="section-subtitle">Stay informed with our latest health and wellness articles</p>
        </div>

        {/* Publications Section */}
        <div className="publications-section">
          <div className="publications-card">
            <h2 className="publications-title">Publications</h2>
            <ul className="publications-list">
              {publications.map((publication) => (
                <li key={publication.id} className="publication-item">
                  <Check size={20} className="publication-checkmark" />
                  <a 
                    href={publication.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="publication-link"
                  >
                    {publication.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="articles-grid">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="article-card"
              onClick={() => handleArticleClick(article.id)}
            >
              <div className="article-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="article-content">
                <span className="article-category">{article.category}</span>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <div className="article-footer">
                  <span className="article-date">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="article-read-more">Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles

