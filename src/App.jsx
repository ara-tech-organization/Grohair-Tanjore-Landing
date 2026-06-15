import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PopupForm from './components/PopupForm'
import MobileBottomBar from './components/MobileBottomBar'
import Home from './pages/Home'

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
      <Home onBookClick={book} />
      <Footer />
      <MobileBottomBar onBookClick={book} />
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
    </>
  )
}
