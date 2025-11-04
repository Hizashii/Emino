import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null)
  const logoRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: onComplete
        })
      }
    })

    tl.fromTo(logoRef.current, 
      { scale: 0.5, opacity: 0, rotation: -10 },
      { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.4)' }
    )
    .to(logoRef.current, {
      y: -5,
      duration: 0.6,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: 1
    }, '-=0.2')
    .to(progressRef.current, {
      width: '100%',
      duration: 1.2,
      ease: 'power2.inOut'
    }, '-=1')
    .to(logoRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in'
    })

  }, [onComplete])

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      <div ref={logoRef} className="mb-8">
        <img src={`${import.meta.env.BASE_URL}assets/image/logo.svg`} alt="Loading" className="h-12 w-auto" />
      </div>
      <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-blue-500 rounded-full"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  )
}

export default Loader

