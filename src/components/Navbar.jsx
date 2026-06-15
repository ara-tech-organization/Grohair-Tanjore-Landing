import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import Logo from '../assets/Logo.png'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#why-us' },
  {
    label: 'Treatments',
    href: '#treatments',
    sub: [
      { label: 'Stem X Pro', href: '#treatments' },
      { label: 'GFC Treatment', href: '#treatments' },
      { label: 'FUE Hair Transplant', href: '#treatments' },
      { label: 'Scalp Micropigmentation', href: '#treatments' },
      { label: 'Eyebrow Transplant', href: '#treatments' },
    ],
  },
  { label: 'Booking', href: '#final-cta' },
  { label: 'Contact', href: '#footer' },
]

export default function Navbar({ onBookClick }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    setDropOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : '#ffffff',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : '0 1px 0 rgba(0,0,0,0.06)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex-shrink-0"
          >
            <img src={Logo} alt="Advanced Grohair & Gloskin Thanjavur" className="navbar-logo" />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.sub ? (
                <li key={link.label} className="relative">
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 rounded hover:text-red-700 transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${dropOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50 animate-scale-in"
                      onMouseEnter={() => setDropOpen(true)}
                      onMouseLeave={() => setDropOpen(false)}
                    >
                      {link.sub.map((s) => (
                        <button
                          key={s.label}
                          className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                          onClick={() => handleNavClick(s.href)}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 rounded hover:text-red-700 transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </button>
                </li>
              )
            )}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:8098756789"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-red-700 transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Phone size={15} />
              80987 56789
            </a>
            <button
              onClick={onBookClick}
              className="btn-primary text-sm px-5 py-2.5"
              style={{ fontSize: 13 }}
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '500px' : '0', background: '#fff', borderTop: open ? '1px solid #f0f0f0' : 'none' }}
      >
        <div className="px-4 py-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              className="block w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 pb-1 flex flex-col gap-2">
            <a
              href="tel:8098756789"
              className="flex items-center justify-center gap-2 text-sm font-semibold py-2.5 border border-gray-200 rounded-lg text-gray-700"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Phone size={15} />
              80987 56789
            </a>
            <button
              onClick={() => { setOpen(false); onBookClick() }}
              className="btn-primary text-sm px-5 py-2.5 justify-center w-full"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
