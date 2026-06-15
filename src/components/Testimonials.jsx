import { useEffect, useState } from 'react'
import {
  Star,
  CheckCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useIntersect } from '../hooks/useIntersect'
import './Testimonials.css'

const REVIEWS = [
  {
    name: 'Karthik R.',
    location: 'Thanjavur',
    rating: 5,
    treatment: 'GFC Treatment',
    text: "It's been a very fantastic and nice experience with Advanced GroHair & GloSkin Thanjavur team. I got the best result after my GFC treatment. The way they handle the customer is really nice, polite, and sweet.",
  },
  {
    name: 'Priya M.',
    location: 'Thanjavur',
    rating: 5,
    treatment: 'Hair Treatment',
    text: 'I visited Advanced GloSkin for hair treatment and the results are visible and the team genuinely cares. The entire staff was professional and made me feel comfortable throughout the process.',
  },
  {
    name: 'Suresh K.',
    location: 'Thanjavur',
    rating: 5,
    treatment: 'Scalp Treatment',
    text: 'The consultation was thorough - they actually took time to explain my scalp condition and recommended the right treatment. Transparent about costs, no pressure. Highly recommend to everyone.',
  },
]

function StarRow({ count }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={14}
          fill={index < count ? '#C81C2E' : 'transparent'}
          stroke={index < count ? '#C81C2E' : '#d1d5db'}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ review, index }) {
  const initials = review.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)

  return (
    <div
      className="testimonial-card reveal"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="testimonial-card-accent" />

      <div className="testimonial-treatment">
        <span className="testimonial-treatment-dot" />
        {review.treatment}
      </div>

      <StarRow count={review.rating} />

      <p className="testimonial-quote">
        <span className="testimonial-quote-mark">
          <Quote size={52} fill="currentColor" stroke="none" />
        </span>
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="testimonial-footer">
        <div className="testimonial-avatar">{initials}</div>
        <div>
          <p className="testimonial-name">{review.name}</p>
          <p className="testimonial-location">{review.location}</p>
        </div>
        <div className="testimonial-verified">
          <CheckCircle size={12} />
          Verified
        </div>
      </div>
    </div>
  )
}

export default function Testimonials({ onBookClick }) {
  const sectionRef = useIntersect()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const media = window.matchMedia('(max-width: 639px)')
    const syncMobileState = () => setIsMobile(media.matches)

    syncMobileState()
    media.addEventListener('change', syncMobileState)

    return () => media.removeEventListener('change', syncMobileState)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % REVIEWS.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [isMobile])

  const goToSlide = (index) => setActiveIndex(index)
  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + REVIEWS.length) % REVIEWS.length)
  }
  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % REVIEWS.length)
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="testimonials-section"
    >
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,28,46,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,28,46,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -40,
          right: -40,
          width: 200,
          height: 200,
          borderRadius: '50%',
          border: '1.5px solid rgba(200,28,46,0.1)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: -30,
          left: -30,
          width: 160,
          height: 160,
          borderRadius: '50%',
          border: '1.5px solid rgba(200,28,46,0.08)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="testimonials-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className="testimonials-header reveal">
          <div className="testimonials-badge">Patient Testimonials</div>
          <h2 className="testimonials-title">
            Real Patients. <span>Real Results.</span>
          </h2>
          <p className="testimonials-subtitle">
            Hundreds of patients in Thanjavur trust us with their hair health. Here&apos;s what they say.
          </p>

          <div className="testimonials-rating-strip">
            <div className="testimonials-rating-stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill="#C81C2E" stroke="#C81C2E" />
              ))}
            </div>
            <span className="testimonials-rating-text">5.0</span>
            <span className="testimonials-rating-count">· 200+ Happy Patients</span>
          </div>
        </div>

        {isMobile ? (
          <div className="testimonials-mobile-stage">
            <TestimonialCard
              key={REVIEWS[activeIndex].name}
              review={REVIEWS[activeIndex]}
              index={activeIndex}
            />
          </div>
        ) : (
          <div className="testimonials-grid">
            {REVIEWS.map((review, index) => (
              <TestimonialCard key={review.name} review={review} index={index} />
            ))}
          </div>
        )}

        <div className="testimonials-slider-controls">
          <button
            type="button"
            className="testimonials-arrow"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="testimonials-dots">
            {REVIEWS.map((review, index) => (
              <button
                key={review.name}
                type="button"
                className={`testimonials-dot${activeIndex === index ? ' is-active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="testimonials-arrow"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="testimonials-cta" style={{ position: 'relative', zIndex: 1 }}>
          <button
            onClick={onBookClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              borderRadius: 10,
              background: 'linear-gradient(135deg, #C81C2E, #9E0F20)',
              color: '#fff',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 14,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(200,28,46,0.32)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.transform = 'translateY(-2px)'
              event.currentTarget.style.boxShadow = '0 8px 28px rgba(200,28,46,0.4)'
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = 'none'
              event.currentTarget.style.boxShadow = '0 4px 18px rgba(200,28,46,0.32)'
            }}
          >
            Join Our Happy Patients
            <ChevronRight size={16} />
          </button>
          <p className="testimonials-cta-note">
            {isMobile ? `Slide ${activeIndex + 1} of ${REVIEWS.length} · ` : ''}
            Free consultation · No commitment
          </p>
        </div>
      </div>
    </section>
  )
}
