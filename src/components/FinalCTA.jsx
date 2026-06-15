import { ArrowRight, Phone, Calendar, MapPin, CheckCircle, Lock } from 'lucide-react'
import { useIntersect } from '../hooks/useIntersect'
import './FinalCTA.css'

const STATS = [
  { value: '500+',  label: 'Patients Treated' },
  { value: '5+',    label: 'Years of Excellence' },
  { value: '4.9★',  label: 'Average Rating' },
  { value: '100%',  label: 'Personalised Care' },
]

const TRUST = [
  'Free Consultation — No Cost, Ever',
  'No Hidden Charges or Pressure',
  'Certified Hair Specialists',
  'Advanced, Proven Treatments',
  "Thanjavur's Most Trusted Hair Clinic",
]

export default function FinalCTA({ onBookClick }) {
  const sectionRef = useIntersect()

  return (
    <section id="final-cta" ref={sectionRef} className="finalcta-section">
      <div className="finalcta-inner">
        <div className="finalcta-split">

          {/* ── LEFT: Copy ── */}
          <div className="finalcta-left reveal-left">

            {/* Urgency badge */}
            <div className="finalcta-badge">
              <span className="finalcta-pulse-dot" />
              Limited Slots Available This Week
            </div>

            <h2 className="finalcta-heading">
              Take the First Step<br />
              <span>Towards Better Hair</span>
            </h2>

            <p className="finalcta-subtext">
              Stop waiting. Your free consultation with a hair specialist
              in Thanjavur is just one call away — no pressure, no commitment.
            </p>

            {/* Checklist */}
            <div className="finalcta-checklist">
              {TRUST.map((item) => (
                <div key={item} className="finalcta-check-item">
                  <div className="finalcta-check-icon">
                    <CheckCircle size={12} color="#C81C2E" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="finalcta-address">
              <div className="finalcta-address-icon">
                <MapPin size={15} color="#C81C2E" />
              </div>
              <p>
                <strong>Our Location</strong>
                3, 1st Floor, Philomena Hotel & Apartment,
                Arulanandha Nagar Main Rd, Thanjavur – 613007
              </p>
            </div>

          </div>

          {/* ── RIGHT: Red CTA panel ── */}
          <div className="finalcta-right reveal-right">

            {/* Decorative rings */}
            <div className="finalcta-ring" style={{ width: 280, height: 280, top: -80, right: -80 }} />
            <div className="finalcta-ring" style={{ width: 180, height: 180, top: -40, right: -40 }} />
            <div className="finalcta-ring" style={{ width: 200, height: 200, bottom: -60, left: -60 }} />

            {/* Stats */}
            <div className="finalcta-stats">
              {STATS.map(({ value, label }) => (
                <div key={label} className="finalcta-stat">
                  <span className="finalcta-stat-value">{value}</span>
                  <span className="finalcta-stat-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="finalcta-right-divider" />

            <p className="finalcta-right-title">Ready to Start Your Hair Journey?</p>
            <p className="finalcta-right-sub">
              Book your free consultation today — our hair specialist
              will call you within the hour.
            </p>

            {/* Buttons */}
            <button className="finalcta-btn-primary" onClick={onBookClick}>
              <Calendar size={17} />
              Book My Free Consultation
              <ArrowRight size={15} />
            </button>

            <a href="tel:8098756789" className="finalcta-btn-secondary">
              <Phone size={16} />
              Call Now: 80987 56789
            </a>

            <p className="finalcta-privacy">
              <Lock size={10} />
              Your details are 100% private &amp; confidential
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}
