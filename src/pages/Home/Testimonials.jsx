import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useIntersect } from '../../hooks/useIntersect'

const REVIEWS = [
  {
    name: 'Verified Patient',
    location: 'Thanjavur',
    rating: 5,
    treatment: 'GFC Treatment',
    text: 'It\'s been a very fantastic and nice experience with Advanced GroHair & GloSkin Thanjavur team. I got the best result after my GFC treatment. The way they handle the customer is really nice, polite, and sweet.',
  },
  {
    name: 'Verified Patient',
    location: 'Thanjavur',
    rating: 5,
    treatment: 'Hair Treatment',
    text: 'I visited Advanced GloSkin for hair treatment and the results are visible and the team genuinely cares. The entire staff was professional and made me feel comfortable throughout the process.',
  },
  {
    name: 'Verified Patient',
    location: 'Thanjavur',
    rating: 5,
    treatment: 'Scalp Treatment',
    text: 'The consultation was thorough — they actually took time to explain my scalp condition and recommended the right treatment. Transparent about costs, no pressure. Highly recommend.',
  },
]

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? '#C81C2E' : 'transparent'}
          stroke={i < count ? '#C81C2E' : '#d1d5db'}
        />
      ))}
    </div>
  )
}

export default function Testimonials({ onBookClick }) {
  const [active, setActive] = useState(0)
  const sectionRef = useIntersect()

  const prev = () => setActive((a) => (a - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setActive((a) => (a + 1) % REVIEWS.length)

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #C81C2E 0%, #8B0A1A 100%)', fontFamily: 'Poppins, sans-serif' }}
      ref={sectionRef}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 diagonal-stripes hero-dots pointer-events-none" />

      {/* Decorative large quote */}
      <div
        className="absolute top-8 left-8 pointer-events-none select-none"
        style={{ fontSize: 200, color: 'rgba(255,255,255,0.04)', fontFamily: 'Georgia, serif', lineHeight: 1 }}
      >
        &ldquo;
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{ color: '#fff', background: 'rgba(255,255,255,0.15)', letterSpacing: '0.12em', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            Patient Testimonials
          </span>
          <h2
            className="font-black text-white leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.02em' }}
          >
            Real Patients.<br />Real Results.
          </h2>
        </div>

        {/* Featured review card */}
        <div
          key={active}
          className="relative bg-white rounded-2xl p-8 md:p-10 reveal-scale"
          style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.3)', animation: 'scaleIn 0.35s ease both' }}
        >
          {/* Quote icon */}
          <div
            className="absolute top-6 right-8"
            style={{ color: 'rgba(200,28,46,0.1)' }}
          >
            <Quote size={64} fill="currentColor" stroke="none" />
          </div>

          {/* Treatment badge */}
          <div
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-5"
            style={{ background: 'rgba(200,28,46,0.08)', color: '#C81C2E' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
            {REVIEWS[active].treatment}
          </div>

          <p
            className="text-base md:text-lg leading-relaxed mb-6 relative z-10"
            style={{ color: '#1A0A0E', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: '1.7' }}
          >
            &ldquo;{REVIEWS[active].text}&rdquo;
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <StarRow count={REVIEWS[active].rating} />
              <p className="mt-2 font-bold text-sm" style={{ color: '#1A0A0E' }}>{REVIEWS[active].name}</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>{REVIEWS[active].location}</p>
            </div>
            {/* Nav buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110"
                style={{ borderColor: '#e5e7eb', color: '#6B7280' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C81C2E'; e.currentTarget.style.color = '#C81C2E' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#6B7280' }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: '#C81C2E', color: '#fff', border: '2px solid #C81C2E' }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                background: i === active ? '#fff' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 reveal">
          <button
            onClick={onBookClick}
            className="btn-white px-8 py-3.5 text-sm"
          >
            Book Your Free Consultation <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
