import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  // Projects array - add your projects here
  // Example structure:
  // {
  //   title: 'Project Name',
  //   description: 'Brief description of the project and what it does.',
  //   link: 'https://example.com', // Optional: link to view the project
  //   type: 'Website', // Type: 'Website', 'Logo', 'AI Tool', 'Extension', 'Design', etc.
  //   size: 'medium' // Size: 'small', 'medium', 'large', 'wide', 'tall' - determines card size in bento grid
  // }
  const projects = [
    // Add your projects here following the example above
    // Example projects with different sizes:
    // {
    //   title: 'Featured Website',
    //   description: 'A comprehensive e-commerce platform with modern design and functionality.',
    //   link: 'https://example.com',
    //   type: 'Website',
    //   size: 'large' // Large card that spans more space
    // },
    // {
    //   title: 'Logo Design',
    //   description: 'Brand identity for a tech startup.',
    //   type: 'Logo',
    //   size: 'small' // Small compact card
    // },
    // {
    //   title: 'AI Chatbot',
    //   description: 'Intelligent customer support solution with natural language processing.',
    //   link: 'https://example.com',
    //   type: 'AI Tool',
    //   size: 'wide' // Wide card spanning 2 columns
    // }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Projects
        </motion.h2>
        {projects.length > 0 ? (
          <motion.div 
            className="bento-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`bento-card bento-${project.size || 'medium'}`}
                variants={cardVariants}
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 3,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="bento-header">
                  <span className="project-type">{project.type}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.link && (
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ x: 5 }}
                  >
                    View Project →
                  </motion.a>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="projects-empty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="projects-placeholder">
              We're working on showcasing our latest projects here. Check back soon or contact us to see examples of our work!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
