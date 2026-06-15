import { ArrowRight, Phone, Calendar, MapPin, CheckCircle } from 'lucide-react'
import { useIntersect } from '../../hooks/useIntersect'

const TRUST_POINTS = [
  'Free Consultation',
  'No Hidden Charges',
  'Experienced Hair Doctor',
  'Advanced Treatments',
  "Thanjavur's Trusted Clinic",
]

export default function FinalCTA({ onBookClick }) {
  const sectionRef = useIntersect()

  return (
    <section
      id="final-cta"
      className="py-20 lg:py-28 relative overflow-hidden diagonal-stripes"
      style={{
        background: 'linear-gradient(135deg, #C81C2E 0%, #8B0A1A 50%, #6A0812 100%)',
        fontFamily: 'Poppins, sans-serif',
      }}
      ref={sectionRef}
    >
      {/* Decorative rings */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
      />
      <div
        className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(255,255,255,0.05)' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(255,255,255,0.06)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 reveal">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', letterSpacing: '0.12em' }}
            >
              Limited Slots Available
            </span>
          </div>

          <h2
            className="font-black text-white leading-tight mb-4 reveal"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em' }}
          >
            Take the First Step Today
          </h2>

          <p
            className="text-base leading-relaxed mb-8 mx-auto reveal anim-d1"
            style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 520, fontSize: 15 }}
          >
            Stop waiting. Your free consultation with a hair specialist in Thanjavur
            is just one call away. No pressure. No commitment. Just honest answers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 reveal anim-d2">
            <button
              onClick={onBookClick}
              className="flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-sm transition-all hover:-translate-y-1 animate-pulse-red"
              style={{
                background: '#fff',
                color: '#C81C2E',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                letterSpacing: '0.02em',
              }}
            >
              <Calendar size={18} />
              Book My Free Consultation
              <ArrowRight size={16} />
            </button>
            <a
              href="tel:8098756789"
              className="flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl text-sm transition-all hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.12)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(8px)',
                letterSpacing: '0.02em',
              }}
            >
              <Phone size={18} />
              Call Now: 80987 56789
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 reveal anim-d3">
            {TRUST_POINTS.map((pt) => (
              <div key={pt} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <CheckCircle size={13} style={{ color: 'rgba(255,255,255,0.6)' }} />
                {pt}
              </div>
            ))}
          </div>

          {/* Address */}
          <div
            className="inline-flex items-start gap-2 text-sm text-center reveal anim-d4 px-5 py-3 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)' }}
          >
            <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'rgba(255,255,255,0.9)' }} />
            <span>
              3, 1st Floor, Philomena Hotel and Apartment, Arulanandha Nagar Main Rd, Thanjavur – 613007
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
