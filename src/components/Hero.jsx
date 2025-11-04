import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import Lottie from 'lottie-react'
import WebsiteDesign from '../public/assets/2d/3d/WebsiteDesign.json'

const Hero = () => {
  const navigate = useNavigate()
  const taglineRef = useRef(null)
  const headlineRef = useRef(null)
  const ctaRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    
    tl.fromTo(taglineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
    .fromTo(headlineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(visualRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
      '-=0.8'
    )
  }, [])

  const handleScroll = (e, targetId) => {
    e.preventDefault()
    if (targetId === '#contact') {
      navigate('/contact')
      return
    }
    const target = document.querySelector(targetId)
    
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen pt-[100px] bg-transparent relative overflow-hidden flex items-center">
      <div className="absolute top-[120px] right-20 z-10 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 45L45 15M45 15H25M45 15V35" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-20 flex gap-3 z-10 hidden lg:flex">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all hover:border-gray-400 bg-transparent">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="5" width="18" height="18" rx="2" stroke="#9CA3AF" strokeWidth="1.5"/>
            <path d="M8 10V16M8 10V8C8 7.44772 8.44772 7 9 7H10C10.5523 7 11 7.44772 11 8V10M8 10H11M11 10V16M11 10H14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all hover:border-gray-400 bg-transparent">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#9CA3AF" strokeWidth="1.5"/>
            <path d="M12 6C8 6 6 8 6 10C6 12 8 14 12 14C16 14 18 12 18 10C18 8 16 6 12 6Z" stroke="#9CA3AF" strokeWidth="1.5"/>
            <circle cx="12" cy="10" r="2" fill="#9CA3AF"/>
          </svg>
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all hover:border-gray-400 bg-transparent">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#9CA3AF" strokeWidth="1.5"/>
            <path d="M8 10C8 9.44772 8.44772 9 9 9H11C11.5523 9 12 9.44772 12 10V11C12 11.5523 11.5523 12 11 12H9M8 10H7M8 10V16M8 10V13M12 13H15C15.5523 13 16 13.4477 16 14V15C16 15.5523 15.5523 16 15 16H12M12 13V16M12 13H11" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>
      </div>
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <div className="max-w-[600px] text-left">
          <div ref={taglineRef} className="flex items-center gap-2 mb-6 text-[0.95rem] text-gray-600 font-normal opacity-0">
            <span className="text-gray-500">—</span>
            <span>Single Subscription Unlimited Design</span>
          </div>
          <h1 ref={headlineRef} className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] mb-10 text-gray-900 tracking-tight opacity-0">
            Ideas Born, Digitally<br />
            Brought Alive
          </h1>
          <a 
            ref={ctaRef}
            href="#contact" 
            className="group relative inline-block px-8 py-4 bg-blue-500 text-white text-base font-medium rounded-lg opacity-0"
            onClick={(e) => handleScroll(e, '#contact')}
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
            <span className="relative z-10">Get Started Now</span>
            <span className="button-glow absolute inset-0 bg-blue-400 rounded-lg blur-lg opacity-0 -z-10 pointer-events-none"></span>
          </a>
        </div>
        <div ref={visualRef} className="w-full h-[600px] flex items-center justify-center relative opacity-0">
          <Lottie 
            animationData={WebsiteDesign} 
            loop={true}
            className="w-full h-full max-h-[600px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
