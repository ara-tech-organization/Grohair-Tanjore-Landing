import { Phone, MapPin, Globe, ArrowRight } from 'lucide-react'
import Logo from '../assets/Logo.png'
import './Footer.css'

const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
const IconYoutube = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
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
  { Icon: IconFacebook, href: '#' },
  { Icon: IconInstagram, href: '#' },
  { Icon: IconYoutube, href: '#' },
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
            {SOCIALS.map(({ Icon, href }, i) => (
              <a key={i} href={href} className="footer-social-btn">
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
                3, 1st Floor, Philomena Hotel and Apartment,<br />
                Arulanandha Nagar Main Rd,<br />
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
