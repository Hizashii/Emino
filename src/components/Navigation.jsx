import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  const logoRef = useRef(null)

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#recent-work', label: 'Works' },
    { href: '#pricing', label: 'Pricing' },
  ]

  const handleScroll = (e, targetId) => {
    e.preventDefault()
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
    
    setIsMenuOpen(false)
  }

  useEffect(() => {
    // Logo entrance animation
    gsap.fromTo(logoRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
    )

    const handleScrollPosition = () => {
      if (navbarRef.current) {
        if (window.pageYOffset > 50) {
          navbarRef.current.classList.add('shadow-md')
        } else {
          navbarRef.current.classList.remove('shadow-md')
        }
      }
    }

    window.addEventListener('scroll', handleScrollPosition)
    return () => window.removeEventListener('scroll', handleScrollPosition)
  }, [])

  return (
    <nav 
      ref={navbarRef}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-[1000] transition-all"
    >
      <div className="max-w-[1400px] mx-auto px-12 py-6 flex justify-between items-center">
        <a 
          href="#hero" 
          ref={logoRef}
          className="flex items-center opacity-0"
          onClick={(e) => handleScroll(e, '#hero')}
        >
          <img src="/assets/image/logo.svg" alt="logo" className="h-8 w-auto transition-transform hover:scale-110" />
        </a>
        <ul className={`flex list-none gap-10 m-0 p-0 ${isMenuOpen ? 'fixed left-0 top-[70px] flex-col bg-white/98 w-full text-center shadow-md py-8 gap-0' : 'hidden md:flex'}`}>
          {navLinks.map((link) => (
            <li key={link.href} className={isMenuOpen ? 'py-4' : ''}>
              <a
                href={link.href}
                className="group relative text-gray-800 no-underline font-normal text-[0.95rem] transition-colors hover:text-slate-900 inline-block"
                onClick={(e) => handleScroll(e, link.href)}
                onMouseEnter={(e) => {
                  const underline = e.currentTarget.querySelector('.nav-underline')
                  if (underline) {
                    gsap.fromTo(underline, 
                      { scaleX: 0 },
                      { scaleX: 1, duration: 0.3, ease: 'power2.out' }
                    )
                  }
                }}
                onMouseLeave={(e) => {
                  const underline = e.currentTarget.querySelector('.nav-underline')
                  if (underline) {
                    gsap.to(underline, 
                      { scaleX: 0, duration: 0.3, ease: 'power2.out' }
                    )
                  }
                }}
              >
                {link.label}
                <span className="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left scale-x-0"></span>
              </a>
            </li>
          ))}
        </ul>
        <Link 
          to="/contact" 
          className="group relative px-6 py-2.5 bg-white text-gray-900 no-underline rounded-lg font-medium text-[0.95rem] border border-blue-500 overflow-hidden hidden md:inline-block"
        >
          <span className="relative z-10">Contact Us</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          <span className="absolute inset-0 text-white z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Contact Us</span>
        </Link>
        <button
          className={`flex flex-col gap-1 bg-transparent border-none cursor-pointer md:hidden ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
    </nav>
  )
}

export default Navigation
