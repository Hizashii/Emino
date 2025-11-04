import React, { useEffect, useRef } from 'react'

const Skills = () => {
  const skillCardsRef = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    skillCardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px)'
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        observer.observe(card)
      }
    })

    return () => {
      skillCardsRef.current.forEach(card => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  const skills = [
    {
      title: 'Frontend',
      items: ['HTML5', 'CSS3/SCSS', 'JavaScript (ES6+)', 'TypeScript', 'Vue.js', 'Responsive Design', 'UX/UI Implementation']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'MongoDB', 'Authentication', 'Data Modeling']
    },
    {
      title: 'Tools & Workflow',
      items: ['Git/GitHub', 'VS Code', 'Figma', 'WordPress', 'Adobe Creative Cloud', 'PowerShell', 'Firebase', 'CI/CD', 'Agile/Scrum']
    },
    {
      title: 'Soft Skills',
      items: ['Problem-solving', 'Collaboration', 'Adaptability', 'Attention to detail', 'Communication', 'Creative thinking', 'Accountability']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              ref={el => skillCardsRef.current[index] = el}
              className="skill-card"
            >
              <h3 className="skill-title">{skill.title}</h3>
              <ul className="skill-list">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="skills-footer">
          I'm constantly refining my workflow — focusing on clean structure, maintainable code, and seamless handoff between design and development.
        </p>
      </div>
    </section>
  )
}

export default Skills

