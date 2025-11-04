import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CursorifyProvider } from '@cursorify/react'
import { PhingerCursor } from '@cursorify/cursors'
import Loader from './components/Loader'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import RecentWork from './components/RecentWork'
import Services from './components/Services'
import OurProcess from './components/OurProcess'
import Pricing from './components/Pricing'
import CommonQuestions from './components/CommonQuestions'
import Footer from './components/Footer'
import Contact from './components/Contact'

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <RecentWork />
      <Services />
      <OurProcess />
      <Pricing />
      <CommonQuestions />
      <Footer />
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [location])

  return (
    <CursorifyProvider cursor={<PhingerCursor />}>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </CursorifyProvider>
  )
}

export default App
