import { ArrowRight, Wind, TrendingDown, Minus, Puzzle, Feather, Layers, Eye } from 'lucide-react'
import { useIntersect } from '../../hooks/useIntersect'

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
      className="py-20 lg:py-28 relative"
      style={{ background: '#1A0A0E', fontFamily: 'Poppins, sans-serif' }}
      ref={sectionRef}
    >
      {/* Left red accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #C81C2E 30%, #C81C2E 70%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="reveal-left">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ color: '#C81C2E', background: 'rgba(200,28,46,0.12)', letterSpacing: '0.12em' }}
            >
              Hair Problems We Treat
            </span>
            <h2
              className="font-black leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', letterSpacing: '-0.02em' }}
            >
              Hair Problems<br />
              <span style={{ color: '#C81C2E' }}>We Treat</span>
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed max-w-sm reveal-right"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Our hair loss treatment in Thanjavur is designed for all types of hair &amp; scalp conditions.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {PROBLEMS.map(({ Icon, title, desc, tag }, i) => (
            <div
              key={title}
              className={`relative p-6 rounded-xl problem-card reveal ${['anim-d1','anim-d2','anim-d3','anim-d4','anim-d5','anim-d6','anim-d6'][i] || ''}`}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(200,28,46,0.12)'
                e.currentTarget.style.borderColor = 'rgba(200,28,46,0.4)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              {tag && (
                <span
                  className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: '#C81C2E', color: '#fff', fontSize: 10 }}
                >
                  {tag}
                </span>
              )}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'rgba(200,28,46,0.15)' }}
              >
                <Icon size={20} style={{ color: '#C81C2E' }} />
              </div>
              <h3 className="font-bold text-sm mb-2" style={{ color: '#fff', lineHeight: 1.4 }}>{title}</h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
              <button
                onClick={onBookClick}
                className="flex items-center gap-1 text-xs font-semibold"
                style={{ color: '#C81C2E', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', padding: 0 }}
              >
                Find Treatment <ArrowRight size={11} />
              </button>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="p-6 rounded-xl flex flex-col justify-between reveal anim-d6"
            style={{ background: 'linear-gradient(135deg, #C81C2E, #8B0A1A)', border: '1px solid rgba(200,28,46,0.3)' }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Not Sure?
              </p>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                Ask Our Hair Doctor — It's Free
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Not sure which concern fits you? Let our specialist guide you in a free, no-pressure consultation.
              </p>
            </div>
            <button
              onClick={onBookClick}
              className="mt-6 self-start flex items-center gap-2 text-sm font-bold text-white"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', padding: 0, transition: 'gap 0.2s' }}
            >
              Find Your Treatment <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
