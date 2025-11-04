import React, { useState } from 'react'
import { motion } from 'framer-motion'
import firstProject from '../public/assets/image/firstProject.jpg'
import Cinema from '../public/assets/image/Cinema.jpg'
import coffeeShop from '../public/assets/image/coffeeShop.jpg'
import Email from '../public/assets/image/Email.png'
const RecentWork = () => {
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      title: 'Cinema Website',
      category: 'Website',
      year: '2025',
      image: Cinema
    },
    {
      title: 'Ecommerce Website',
      category: 'Website',
      year: '2024',
      image: firstProject
    },
    {
      title: 'Coffee Shop Website',
      category: 'Website',
      year: '2024',
      image: coffeeShop
    },
    {
      title: 'Email AI',
      category: 'AI Tool',
      year: '2025',
      image: Email
    }
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="recent-work" className="py-20 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-2 h-2 bg-blue-500 block"></div>
          <h2 className="text-base font-semibold text-gray-900 tracking-[0.05em] uppercase m-0">RECENT WORK</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex flex-col w-full bg-white md:last:border-r-0 md:even:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0 p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full overflow-hidden mb-6 shadow-md aspect-square">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover block transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-gray-900 m-0 leading-tight">{project.title}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-[0.95rem] text-gray-600 font-normal">{project.category}</span>
                  <span className="w-5 h-px bg-gray-400 block"></span>
                  <span className="text-[0.95rem] text-gray-600 font-normal">{project.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button 
            className="px-8 py-3 bg-white text-blue-500 border border-blue-500 rounded-lg text-[0.95rem] font-medium cursor-pointer transition-all hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Load More'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default RecentWork
