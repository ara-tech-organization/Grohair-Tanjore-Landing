import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import Logo from '../assets/Header.png'
import './Navbar.css'

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
    window.addEventListener('scroll', onScroll, { passive: true })
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
      className="navbar"
      style={{
        background: '#fff',
        backdropFilter: 'none',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.10)' : '0 1px 0 #e5e7eb',
      }}
    >
      <div className="navbar-inner">
        <div className="navbar-row">

          {/* ── Logo ── */}
          <a
            href="#home"
            className="navbar-logo-link"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          >
            <img src={Logo} alt="Advanced Grohair & Gloskin Thanjavur" className="navbar-logo" />
          </a>

          {/* ── Desktop nav links ── */}
          <ul className="nav-links">
            {NAV_LINKS.map((link) =>
              link.sub ? (
                <li key={link.label} className="nav-dropdown-wrap">
                  <button
                    className="nav-link-btn"
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      style={{
                        transition: 'transform 0.2s',
                        transform: dropOpen ? 'rotate(180deg)' : 'none',
                      }}
                    />
                  </button>

                  {dropOpen && (
                    <div
                      className="nav-dropdown"
                      onMouseEnter={() => setDropOpen(true)}
                      onMouseLeave={() => setDropOpen(false)}
                    >
                      {link.sub.map((s) => (
                        <button
                          key={s.label}
                          className="nav-dropdown-btn"
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
                    className="nav-link-btn"
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </button>
                </li>
              )
            )}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="nav-cta">
            <a href="tel:8098756789" className="nav-phone-link">
              <Phone size={14} />
              80987 56789
            </a>
            <button
              onClick={onBookClick}
              className="btn-primary"
              style={{ padding: '9px 20px', fontSize: 13 }}
            >
              Book Appointment
            </button>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className="mobile-menu"
        style={{ maxHeight: open ? '520px' : '0' }}
      >
        <div className="mobile-menu-inner">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              className="mobile-nav-btn"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}

          <div className="mobile-cta-group">
            <a href="tel:8098756789" className="mobile-phone-link">
              <Phone size={15} />
              80987 56789
            </a>
            <button
              onClick={() => { setOpen(false); onBookClick() }}
              className="btn-primary"
              style={{ padding: '12px 20px', fontSize: 14, justifyContent: 'center', width: '100%' }}
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
