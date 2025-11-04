import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const Pricing = () => {
  const navigate = useNavigate()

  const plans = [
    {
      name: 'Basic',
      price: '299',
      period: '/one-time',
      description: 'Perfect for small businesses and startups looking for a professional online presence. Simple, clean, and effective.',
      features: [
        'Up to 5 Pages',
        'Responsive Design',
        'Contact Form',
        'Basic SEO Setup',
        '6 Months Support',
        'Mobile Optimized'
      ]
    },
    {
      name: 'Premium',
      price: '499',
      period: '/one-time',
      description: 'Ideal for growing businesses that need advanced features and better performance. Includes e-commerce capabilities.',
      features: [
        'Up to 10 Pages',
        'Custom Design',
        'E-commerce Integration',
        'Advanced SEO',
        '12 Months Support',
        'Analytics Setup',
        'Payment Gateway',
        'Blog Functionality'
      ]
    },
    {
      name: 'Pro',
      price: '799',
      period: '/one-time',
      description: 'Complete solution for established businesses. Unlimited pages, AI integration, and premium support included.',
      features: [
        'Unlimited Pages',
        'AI Integration',
        'Custom Features',
        'Priority Support',
        '24/7 Maintenance',
        'Advanced Analytics',
        'Multi-language Support',
        'API Integrations'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="pricing" className="py-20 bg-transparent relative z-10">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-2 h-2 bg-blue-500 block"></div>
          <h2 className="text-base font-semibold text-gray-900 tracking-[0.05em] uppercase m-0">PRICING</h2>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-xl text-gray-600">{plan.period}</span>
                </div>
              </div>
              <div className="mb-8 flex-grow">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Features</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3 text-gray-700 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <span className="text-blue-500 font-bold text-lg">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="group relative w-full px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold mt-auto"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    y: -3,
                    scale: 1.03,
                    duration: 0.3,
                    ease: 'power2.out'
                  })
                  const glow = e.currentTarget.querySelector('.button-glow')
                  if (glow) {
                    gsap.to(glow, {
                      opacity: 0.4,
                      scale: 1.1,
                      duration: 0.3,
                      ease: 'power2.out'
                    })
                  }
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                  })
                  const glow = e.currentTarget.querySelector('.button-glow')
                  if (glow) {
                    gsap.to(glow, {
                      opacity: 0,
                      scale: 1,
                      duration: 0.3,
                      ease: 'power2.out'
                    })
                  }
                }}
                onMouseDown={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 0.98,
                    duration: 0.1,
                    ease: 'power2.out'
                  })
                }}
                onMouseUp={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.03,
                    duration: 0.1,
                    ease: 'power2.out'
                  })
                }}
              >
                <span className="relative z-10">Get Started Now</span>
                <span className="button-glow absolute inset-0 bg-blue-400 rounded-lg blur-lg opacity-0 -z-10 pointer-events-none"></span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
