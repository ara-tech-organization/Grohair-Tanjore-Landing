import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import PopupForm from './components/PopupForm'
import MobileBottomBar from './components/MobileBottomBar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import HairProblems from './components/HairProblems'
import Treatments from './components/Treatments'
import Testimonials from './components/Testimonials'
import FAQs from './components/FAQs'
import FinalCTA from './components/FinalCTA'
export default function App() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const book = () => setShowPopup(true)

  return (
    <>
      <Navbar onBookClick={book} />
      <main>
        <Hero onBookClick={book} />
        <WhyChooseUs onBookClick={book} />
        <HairProblems onBookClick={book} />
        <Treatments onBookClick={book} />
        <Testimonials onBookClick={book} />
        <FAQs onBookClick={book} />
        <FinalCTA onBookClick={book} />
      </main>
      <Footer />
      <MobileBottomBar onBookClick={book} />
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
    </>
  )
}
