import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import Footer from './Footer'

const Contact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const formRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo(formRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    )
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <>
      <section className="min-h-screen pt-[100px] bg-white relative">
        <div className="max-w-[800px] mx-auto px-8 py-20">
          <button
            onClick={() => navigate('/')}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to Home</span>
          </button>

          <div ref={titleRef} className="mb-12 opacity-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-blue-500 block"></div>
              <h2 className="text-base font-semibold text-gray-900 tracking-[0.05em] uppercase m-0">CONTACT US</h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-gray-600">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="opacity-0 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Your company (optional)"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="group relative w-full px-8 py-4 bg-blue-500 text-white text-base font-medium rounded-lg"
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
            >
              <span className="relative z-10">Send Message</span>
              <span className="button-glow absolute inset-0 bg-blue-400 rounded-lg blur-lg opacity-0 -z-10 pointer-events-none"></span>
            </button>
          </form>

          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Email</h3>
                <a href="mailto:Luchiteksales@gmail.com" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Luchiteksales@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Response Time</h3>
                <p className="text-gray-600">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
