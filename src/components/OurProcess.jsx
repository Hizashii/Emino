import React from 'react'
import { motion } from 'framer-motion'

const OurProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Subscribe'
    },
    {
      number: '02',
      title: 'Request'
    },
    {
      number: '03',
      title: 'Project'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section id="our-process" className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-2 h-2 bg-blue-500 block"></div>
          <h2 className="text-base font-semibold text-gray-900 tracking-[0.05em] uppercase m-0">OUR PROCESS</h2>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-white border border-gray-200 rounded-lg p-8"
              variants={itemVariants}
            >
              <div className="text-5xl font-bold text-gray-900 mb-4">{step.number}.</div>
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default OurProcess
