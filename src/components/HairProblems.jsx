import { ArrowRight, Wind, TrendingDown, Minus, Puzzle, Feather, Layers, Eye } from 'lucide-react'
import { useIntersect } from '../hooks/useIntersect'
import './sections.css'

const PROBLEMS = [
  {
    Icon: Wind,
    title: 'Hair Fall & Excessive Shedding',
    desc: 'Abnormal daily hair loss that weakens hair density and leads to visible thinning over time.',
    tag: 'Most Common',
  },
  {
    Icon: TrendingDown,
    title: 'Baldness & Pattern Hair Loss',
    desc: 'Gradual hair loss forming bald patches or complete coverage, typically driven by genetics and hormones.',
    tag: null,
  },
  {
    Icon: Minus,
    title: 'Receding Hairline',
    desc: 'Progressive retreat of the frontal hairline, making the forehead appear larger over time.',
    tag: null,
  },
  {
    Icon: Puzzle,
    title: 'Alopecia (Patchy Hair Loss)',
    desc: 'Sudden, patchy hair loss often triggered by autoimmune reactions or stress. Treatable with the right approach.',
    tag: null,
  },
  {
    Icon: Feather,
    title: 'Thinning Hair',
    desc: 'Hair that has lost density and volume, making the scalp more visible and hair look sparse.',
    tag: null,
  },
  {
    Icon: Layers,
    title: 'Scalp Problems & Dandruff',
    desc: 'Dandruff, inflammation, seborrheic dermatitis, and other scalp conditions that accelerate hair loss.',
    tag: null,
  },
  {
    Icon: Eye,
    title: 'Sparse or Absent Eyebrows',
    desc: 'Thinning or missing eyebrows due to over-plucking, medical conditions, or natural sparseness.',
    tag: null,
  },
]

export default function HairProblems({ onBookClick }) {
  const sectionRef = useIntersect()

  return (
    <section
      id="hair-problems"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, #FFF0F1 0%, #FDE8EA 60%, #FDDDE0 100%)',
        fontFamily: 'Poppins, sans-serif',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(200,28,46,0.12) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Diagonal stripe accent */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(-55deg, transparent 0, transparent 18px, rgba(200,28,46,0.03) 18px, rgba(200,28,46,0.03) 19px)',
      }} />

      {/* Large glow blobs */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: 380, height: 380, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,28,46,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,28,46,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        width: 200, height: 200, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,28,46,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', transform: 'translate(-50%,-50%)',
      }} />

      {/* Decorative ring top-left */}
      <div style={{
        position: 'absolute', top: -40, left: -40,
        width: 200, height: 200, borderRadius: '50%',
        border: '1.5px solid rgba(200,28,46,0.1)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: -20, left: -20,
        width: 120, height: 120, borderRadius: '50%',
        border: '1.5px solid rgba(200,28,46,0.08)',
        pointerEvents: 'none',
      }} />

      <div className="section-inner">
        {/* Header */}
        <div className="hp-header">
          <div className="reveal-left">
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.12em',
              color: '#C81C2E', background: 'rgba(200,28,46,0.08)',
              padding: '4px 14px', borderRadius: 999, marginBottom: 14,
            }}>
              Hair Problems We Treat
            </span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700,
              color: '#1A0A0E', letterSpacing: '-0.02em', lineHeight: 1.2,
            }}>
              Hair Problems<br />
              <span style={{ color: '#C81C2E' }}>We Treat</span>
            </h2>
          </div>
          <p className="reveal-right" style={{
            fontSize: 14, lineHeight: 1.75,
            color: '#6B7280',
            maxWidth: 320,
          }}>
            Our hair loss treatment in Thanjavur is designed for all types of hair &amp; scalp conditions.
          </p>
        </div>

        {/* Problems grid */}
        <div className="hp-grid">
          {PROBLEMS.map(({ Icon, title, desc, tag }, i) => (
            <div
              key={title}
              className={`problem-card reveal ${['anim-d1','anim-d2','anim-d3','anim-d4','anim-d5','anim-d6','anim-d6'][i] || ''}`}
              style={{
                position: 'relative',
                padding: 24,
                borderRadius: 12,
                background: '#fff',
                border: '1px solid rgba(200,28,46,0.12)',
                cursor: 'pointer',
                transition: 'background 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(200,28,46,0.05)'
                e.currentTarget.style.borderColor = 'rgba(200,28,46,0.3)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(200,28,46,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.borderColor = 'rgba(200,28,46,0.12)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {tag && (
                <span style={{
                  position: 'absolute', top: 12, right: 12,
                  fontSize: 10, fontWeight: 700,
                  padding: '2px 8px', borderRadius: 999,
                  background: '#C81C2E', color: '#fff',
                }}>
                  {tag}
                </span>
              )}
              <div style={{
                width: 40, height: 40, borderRadius: 10, marginBottom: 16,
                background: 'rgba(200,28,46,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={20} style={{ color: '#C81C2E' }} />
              </div>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: '#1A0A0E', lineHeight: 1.4, marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.7, marginBottom: 16 }}>{desc}</p>
              <button
                onClick={onBookClick}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  fontSize: 12, fontWeight: 600, color: '#C81C2E',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif', padding: 0,
                }}
              >
                Find Your Treatment <ArrowRight size={11} />
              </button>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="reveal anim-d6"
            style={{
              padding: 24, borderRadius: 12,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              background: 'linear-gradient(135deg, #C81C2E, #8B0A1A)',
              border: '1px solid rgba(200,28,46,0.2)',
              boxShadow: '0 8px 28px rgba(200,28,46,0.18)',
              minHeight: 180,
            }}
          >
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.65)', marginBottom: 8 }}>
                Not Sure?
              </p>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.35 }}>
                Ask Our Hair Doctor — It's Free
              </h3>
              <p style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
                Not sure which concern fits you? Let our specialist guide you in a free, no-pressure consultation.
              </p>
            </div>
            <button
              onClick={onBookClick}
              style={{
                marginTop: 24,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 13, fontWeight: 700, color: '#fff',
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif', padding: 0,
              }}
            >
              Find Your Treatment <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
