import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import './ArticleDetail.css'

const ArticleDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Sample articles data - replace with actual data from API or state
  const articles = [
    {
      id: 1,
      title: 'Understanding Diabetes: A Comprehensive Guide',
      content: `Diabetes is a chronic condition that affects how your body processes blood sugar (glucose). There are several types of diabetes, each with its own characteristics and treatment approaches.

Type 1 diabetes is an autoimmune condition where the body's immune system attacks and destroys the insulin-producing cells in the pancreas. People with type 1 diabetes require insulin injections or an insulin pump to manage their blood sugar levels.

Type 2 diabetes is the most common form, accounting for about 90% of all diabetes cases. It occurs when the body becomes resistant to insulin or doesn't produce enough insulin. This type is often linked to lifestyle factors such as obesity, lack of physical activity, and poor diet.

Gestational diabetes occurs during pregnancy and usually resolves after childbirth, though it increases the risk of developing type 2 diabetes later in life.

Symptoms of diabetes can include increased thirst, frequent urination, extreme fatigue, blurred vision, slow-healing wounds, and unexplained weight loss. However, some people with type 2 diabetes may not experience any symptoms initially.

Managing diabetes involves a combination of medication, lifestyle changes, and regular monitoring. Key aspects of diabetes management include:

1. Blood Sugar Monitoring: Regular testing helps you understand how different foods, activities, and medications affect your blood sugar levels.

2. Healthy Eating: A balanced diet rich in whole grains, lean proteins, fruits, vegetables, and healthy fats is crucial. Working with a dietitian can help create a personalized meal plan.

3. Regular Exercise: Physical activity helps your body use insulin more efficiently and can lower blood sugar levels. Aim for at least 150 minutes of moderate-intensity exercise per week.

4. Medication Adherence: Taking prescribed medications as directed is essential for maintaining good blood sugar control.

5. Regular Check-ups: Regular visits to your healthcare provider help monitor your condition and adjust treatment as needed.

Prevention strategies for type 2 diabetes include maintaining a healthy weight, eating a balanced diet, staying physically active, and managing stress. Early detection and intervention can significantly improve outcomes.

Living with diabetes requires ongoing commitment, but with proper management, people with diabetes can lead healthy, active lives. Support from healthcare providers, family, and diabetes support groups can make a significant difference in managing this condition.

Remember, diabetes management is a lifelong journey, and it's important to work closely with your healthcare team to develop a personalized treatment plan that works for you.`,
      image: '/assets/img/GetVaccinated.jpg',
      date: '2024-01-15',
      category: 'Health & Wellness',
      author: 'Dr. Dasaradha Ram Barla'
    },
    {
      id: 2,
      title: 'Hypertension: Silent Killer and Prevention',
      content: `Hypertension, commonly known as high blood pressure, is often called the "silent killer" because it typically has no symptoms but can lead to serious health complications if left untreated.

Blood pressure is the force of blood pushing against the walls of your arteries. When this pressure is consistently too high, it can damage your blood vessels, heart, kidneys, and other organs.

There are two types of hypertension:

Primary (essential) hypertension develops gradually over many years and has no identifiable cause. Most adults with high blood pressure have this type.

Secondary hypertension is caused by an underlying condition such as kidney disease, hormonal disorders, or certain medications. This type can appear suddenly and cause higher blood pressure than primary hypertension.

Risk factors for hypertension include age, family history, race, being overweight or obese, lack of physical activity, tobacco use, too much sodium in your diet, too little potassium, excessive alcohol consumption, stress, and certain chronic conditions.

High blood pressure can lead to serious complications including heart attack, stroke, heart failure, kidney disease, vision loss, metabolic syndrome, and memory problems.

Prevention and management strategies include:

1. Regular Monitoring: Check your blood pressure regularly, especially if you have risk factors.

2. Healthy Diet: Follow the DASH (Dietary Approaches to Stop Hypertension) diet, which emphasizes fruits, vegetables, whole grains, and low-fat dairy products while limiting sodium.

3. Exercise Regularly: Aim for at least 30 minutes of moderate-intensity exercise most days of the week.

4. Maintain a Healthy Weight: Losing even a small amount of weight can help reduce blood pressure.

5. Limit Alcohol: If you drink alcohol, do so in moderation.

6. Quit Smoking: Tobacco use increases blood pressure and damages blood vessels.

7. Manage Stress: Practice relaxation techniques such as deep breathing, meditation, or yoga.

8. Medication: If lifestyle changes aren't enough, your doctor may prescribe medication to help control your blood pressure.

Early detection and treatment of hypertension are crucial for preventing complications. Regular check-ups with your healthcare provider can help identify and manage high blood pressure before it causes serious health problems.`,
      image: '/assets/img/GetVaccinated.jpg',
      date: '2024-01-10',
      category: 'Cardiac Health',
      author: 'Dr. Dasaradha Ram Barla'
    },
    {
      id: 3,
      title: 'Mental Health and Well-being in Modern Times',
      content: `Mental health is an essential component of overall well-being, yet it's often overlooked or stigmatized in our society. In our fast-paced modern world, maintaining good mental health has become more challenging and more important than ever.

Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel, and act, and it helps determine how we handle stress, relate to others, and make choices.

Common mental health challenges include anxiety disorders, depression, stress-related conditions, and burnout. These conditions can affect anyone regardless of age, gender, or background.

Factors that can contribute to mental health issues include:

- Work-related stress and pressure
- Social isolation and loneliness
- Financial concerns
- Relationship difficulties
- Traumatic experiences
- Genetic predisposition
- Substance abuse
- Chronic physical health conditions

Maintaining good mental health requires proactive effort. Here are some strategies:

1. Stay Connected: Build and maintain strong relationships with family and friends. Social support is crucial for mental well-being.

2. Stay Active: Regular physical exercise can help reduce anxiety and depression, improve mood, and boost self-esteem.

3. Get Enough Sleep: Quality sleep is essential for mental health. Aim for 7-9 hours of sleep per night.

4. Practice Mindfulness: Techniques such as meditation, deep breathing, and yoga can help manage stress and improve mental clarity.

5. Set Realistic Goals: Break large tasks into smaller, manageable steps and celebrate your achievements.

6. Seek Help When Needed: Don't hesitate to reach out to mental health professionals if you're struggling. Therapy and counseling can be incredibly beneficial.

7. Limit Screen Time: Excessive use of social media and digital devices can negatively impact mental health.

8. Practice Self-Care: Make time for activities you enjoy and that help you relax and recharge.

It's important to recognize that mental health issues are common and treatable. Seeking help is a sign of strength, not weakness. Early intervention can prevent mental health conditions from worsening and improve outcomes.

If you or someone you know is struggling with mental health, don't hesitate to reach out to a healthcare provider or mental health professional. Remember, taking care of your mental health is just as important as taking care of your physical health.`,
      image: '/assets/img/GetVaccinated.jpg',
      date: '2024-01-05',
      category: 'Mental Health',
      author: 'Dr. Dasaradha Ram Barla'
    },
    {
      id: 4,
      title: 'Nutrition Guide for Healthy Living',
      content: `Proper nutrition is the foundation of good health. A balanced diet provides your body with the essential nutrients it needs to function optimally, maintain energy levels, and prevent chronic diseases.

A healthy diet should include a variety of foods from all food groups:

1. Fruits and Vegetables: These are rich in vitamins, minerals, fiber, and antioxidants. Aim for at least 5 servings per day, with a focus on variety and color.

2. Whole Grains: Choose whole grains like brown rice, quinoa, oats, and whole wheat bread over refined grains. They provide fiber, B vitamins, and important minerals.

3. Lean Proteins: Include sources like fish, poultry, beans, lentils, nuts, and seeds. Protein is essential for muscle maintenance, immune function, and overall health.

4. Healthy Fats: Incorporate sources of healthy fats such as avocados, nuts, seeds, olive oil, and fatty fish. These support brain health and help absorb fat-soluble vitamins.

5. Dairy or Alternatives: Choose low-fat or non-fat dairy products or fortified plant-based alternatives for calcium and vitamin D.

Key principles of healthy eating include:

- Portion Control: Be mindful of portion sizes to maintain a healthy weight.
- Hydration: Drink plenty of water throughout the day. Limit sugary drinks and excessive caffeine.
- Meal Planning: Plan your meals ahead of time to ensure you're getting a balanced diet.
- Mindful Eating: Pay attention to what and how you eat, avoiding distractions during meals.
- Limit Processed Foods: Reduce intake of highly processed foods, which are often high in sodium, sugar, and unhealthy fats.

Special dietary considerations:

- For diabetes management: Focus on complex carbohydrates, control portion sizes, and monitor blood sugar responses.
- For heart health: Limit saturated and trans fats, reduce sodium intake, and increase omega-3 fatty acids.
- For weight management: Create a calorie deficit through a combination of diet and exercise.
- For athletes: Ensure adequate protein and carbohydrate intake to support performance and recovery.

Remember, there's no one-size-fits-all approach to nutrition. Your dietary needs may vary based on age, gender, activity level, health conditions, and personal preferences. Working with a registered dietitian can help you develop a personalized nutrition plan that meets your specific needs and goals.

Making gradual, sustainable changes to your eating habits is more effective than drastic diets. Focus on adding healthy foods to your diet rather than restricting, and remember that moderation is key.`,
      image: '/assets/img/GetVaccinated.jpg',
      date: '2023-12-28',
      category: 'Nutrition',
      author: 'Dr. Dasaradha Ram Barla'
    },
    {
      id: 5,
      title: 'Preventive Health Check-ups: Why They Matter',
      content: `Preventive health check-ups are an essential aspect of maintaining good health and catching potential health issues early, before they become serious problems. Regular screenings and check-ups can save lives and improve quality of life.

Preventive care focuses on detecting and preventing diseases, rather than treating them after they've developed. This proactive approach to healthcare offers numerous benefits:

1. Early Detection: Many serious conditions, such as cancer, heart disease, and diabetes, show few or no symptoms in their early stages. Regular check-ups can detect these conditions when they're most treatable.

2. Cost-Effective: Preventing diseases or catching them early is generally much less expensive than treating advanced conditions.

3. Better Outcomes: Early intervention typically leads to better treatment outcomes and faster recovery.

4. Peace of Mind: Regular check-ups provide reassurance about your health status and help identify areas for improvement.

Key components of preventive health check-ups include:

- Blood Pressure Screening: Should be checked at least annually, or more frequently if you have risk factors.
- Cholesterol Levels: Regular lipid panel tests help assess cardiovascular risk.
- Blood Sugar Testing: Important for detecting prediabetes and diabetes early.
- Cancer Screenings: Age-appropriate screenings for breast, cervical, colon, prostate, and lung cancers.
- Immunizations: Stay up-to-date with recommended vaccines.
- Vision and Hearing Tests: Regular screenings help detect issues early.
- Bone Density Testing: Important for women over 65 and those at risk for osteoporosis.
- Mental Health Screening: Regular assessment of mental health and well-being.

Recommended screening schedule varies by age, gender, and individual risk factors:

- In your 20s-30s: Annual physical exams, blood pressure, cholesterol screening, and age-appropriate cancer screenings.
- In your 40s-50s: Add colon cancer screening, mammograms (for women), and more frequent cardiovascular assessments.
- In your 60s+: Continue all previous screenings and add bone density testing and more frequent health assessments.

Special considerations:

- Family History: If you have a family history of certain conditions, you may need earlier or more frequent screenings.
- Lifestyle Factors: Discuss your lifestyle with your healthcare provider to determine appropriate screening frequency.
- Chronic Conditions: If you have existing health conditions, you may need more frequent monitoring.

Preparing for your check-up:

- Bring a list of current medications and supplements.
- Note any symptoms or concerns you want to discuss.
- Bring your medical history and family health history.
- Prepare questions to ask your healthcare provider.

Remember, preventive care is an investment in your long-term health. Work with your healthcare provider to develop a personalized preventive care plan based on your age, gender, risk factors, and health history. Regular check-ups, combined with healthy lifestyle choices, are your best defense against serious health problems.`,
      image: '/assets/img/GetVaccinated.jpg',
      date: '2023-12-20',
      category: 'Preventive Care',
      author: 'Dr. Dasaradha Ram Barla'
    },
    {
      id: 6,
      title: 'Exercise and Physical Activity for All Ages',
      content: `Regular physical activity is one of the most important things you can do for your health. Exercise benefits people of all ages, from young children to older adults, and offers both immediate and long-term health benefits.

The benefits of regular exercise are extensive:

1. Physical Health Benefits:
   - Strengthens heart and cardiovascular system
   - Helps maintain healthy weight
   - Builds and maintains strong muscles and bones
   - Improves flexibility and balance
   - Boosts immune system function
   - Reduces risk of chronic diseases including heart disease, diabetes, and some cancers

2. Mental Health Benefits:
   - Reduces symptoms of depression and anxiety
   - Improves mood and overall sense of well-being
   - Enhances cognitive function and memory
   - Promotes better sleep quality
   - Increases energy levels

3. Social Benefits:
   - Provides opportunities for social interaction
   - Can be a fun and enjoyable activity
   - Builds confidence and self-esteem

Exercise recommendations by age group:

Children and Adolescents (6-17 years):
- At least 60 minutes of moderate-to-vigorous physical activity daily
- Include aerobic activities, muscle-strengthening, and bone-strengthening exercises
- Activities should be age-appropriate and enjoyable

Adults (18-64 years):
- At least 150 minutes of moderate-intensity aerobic activity per week, OR
- 75 minutes of vigorous-intensity aerobic activity per week, OR
- A combination of both
- Muscle-strengthening activities at least 2 days per week

Older Adults (65+ years):
- Same guidelines as adults, with emphasis on activities that improve balance
- Should be as physically active as abilities allow
- Include activities that maintain or improve flexibility

Types of exercise:

1. Aerobic Exercise: Activities that increase your heart rate, such as walking, running, swimming, cycling, and dancing.

2. Strength Training: Activities that build muscle, such as weightlifting, resistance band exercises, and bodyweight exercises.

3. Flexibility Exercises: Activities that improve range of motion, such as stretching and yoga.

4. Balance Exercises: Important for older adults, including activities like tai chi and balance-focused yoga poses.

Getting started with exercise:

- Start slowly and gradually increase intensity and duration
- Choose activities you enjoy to increase adherence
- Set realistic goals
- Find an exercise buddy for motivation and accountability
- Listen to your body and rest when needed
- Consult with a healthcare provider before starting a new exercise program, especially if you have health concerns

Overcoming barriers:

- Lack of time: Break exercise into shorter sessions throughout the day
- Lack of motivation: Set specific goals and track your progress
- Cost: Many free or low-cost options are available, including walking, bodyweight exercises, and free online workout videos
- Physical limitations: Work with a healthcare provider or fitness professional to adapt exercises to your abilities

Remember, any amount of physical activity is better than none. Start where you are and gradually build up. The key is consistency - finding activities you enjoy and can maintain long-term. Regular exercise is an investment in your health that pays dividends throughout your life.`,
      image: '/assets/img/GetVaccinated.jpg',
      date: '2023-12-15',
      category: 'Fitness',
      author: 'Dr. Dasaradha Ram Barla'
    }
  ]

  const article = articles.find(a => a.id === parseInt(id))

  if (!article) {
    return (
      <section className="article-detail">
        <div className="container">
          <div className="article-not-found">
            <h2>Article not found</h2>
            <button onClick={() => navigate('/articles')} className="btn btn-primary">
              Back to Articles
            </button>
          </div>
        </div>
      </section>
    )
  }

  const paragraphs = article.content.split('\n\n').filter(p => p.trim())

  return (
    <section className="article-detail">
      <div className="container">
        <button onClick={() => navigate('/articles')} className="back-button">
          <ArrowLeft size={20} />
          Back to Articles
        </button>

        <div className="article-header-section">
          <div className="article-header-image">
            <img src={article.image} alt={article.title} />
          </div>
          <div className="article-header-content">
            <span className="article-category">{article.category}</span>
            <h1 className="article-detail-title">{article.title}</h1>
            <div className="article-meta">
              <span className="article-author">By {article.author}</span>
              <span className="article-date">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>

        <div className="article-content-section">
          <div className="article-body">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="article-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticleDetail

