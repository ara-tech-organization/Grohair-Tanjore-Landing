import { Phone, MapPin, Globe, ArrowRight } from 'lucide-react'
import Logo from '../assets/Logo.png'
import './Footer.css'

const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
)
const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)
const IconYoutube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const TREATMENTS = [
  'Stem X Pro Treatment',
  'GFC Treatment',
  'FUE Hair Transplant',
  'Hair Transplant',
  'Eyebrow Transplant',
  'Scalp Micropigmentation',
  'Scalp Treatment',
]

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#why-us' },
  { label: 'Hair Problems', href: '#hair-problems' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Book Consultation', href: '#final-cta' },
]

const SOCIALS = [
  { Icon: IconFacebook,  href: 'https://www.facebook.com/adgrohairgloskinthanjavur',         label: 'Facebook' },
  { Icon: IconInstagram, href: 'https://www.instagram.com/adgrohairgloskinthanjavur/',        label: 'Instagram' },
  { Icon: IconYoutube,   href: 'https://www.youtube.com/@AdGrohairGloskinThanjavur',          label: 'YouTube' },
]

export default function Footer() {
  const scroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="footer" className="footer">
      {/* Top bar */}
      <div className="footer-topbar">
        <div className="footer-topbar-inner">
          <p className="footer-tagline">Thanjavur's trusted hair &amp; skin specialist clinic</p>
          <a href="tel:8098756789" className="footer-phone-link">
            <Phone size={16} style={{ color: '#C81C2E' }} />
            80987 56789
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="footer-main">
        {/* Brand */}
        <div>
          <img src={Logo} alt="Advanced Grohair & Gloskin" className="footer-logo" />
          <p className="footer-brand-text">
            Advanced Grohair &amp; Gloskin Thanjavur — your trusted destination for hair &amp; skin
            treatments using the latest technology.
          </p>
          <div className="footer-socials">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="footer-social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-link-list">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <button className="footer-link-btn" onClick={() => scroll(l.href)}>
                  <ArrowRight size={12} />
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Treatments */}
        <div>
          <h4 className="footer-col-title">Treatments</h4>
          <ul className="footer-link-list">
            {TREATMENTS.map((t) => (
              <li key={t}>
                <button className="footer-link-btn" onClick={() => scroll('#treatments')}>
                  <ArrowRight size={12} />
                  {t}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="footer-col-title">Contact Us</h4>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <MapPin size={16} className="footer-contact-icon" />
              <p className="footer-contact-text">
                3, 1st Floor, Philomena Hotel and Apartment, Arulanandha Nagar Main Rd,<br />
                Thanjavur – 613007
              </p>
            </li>
            <li className="footer-contact-item">
              <Phone size={16} className="footer-contact-icon" />
              <a href="tel:8098756789" className="footer-contact-link">80987 56789</a>
            </li>
            <li className="footer-contact-item">
              <Globe size={16} className="footer-contact-icon" />
              <a
                href="https://adgrohairgloskinthanjavur.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-web"
              >
                adgrohairgloskinthanjavur.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottombar">
        <div className="footer-bottombar-inner">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Advanced Grohair &amp; Gloskin Thanjavur. All rights reserved.
          </p>
          <p className="footer-crafted">
            <span style={{ color: '#C81C2E' }}>&#10084;</span>{' '}
            Crafted by{' '}
            <a
              href="https://discovertechnologies.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-crafted-link"
            >
              Ara Discover Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
