import { UserCheck, Microscope, ClipboardList, Users, BadgeDollarSign, ArrowRight } from 'lucide-react'

const STATS = [
  { value: '500+', label: 'Satisfied Patients' },
  { value: '5+',   label: 'Years of Excellence' },
  { value: '7+',   label: 'Advanced Treatments' },
  { value: '100%', label: 'Personalised Care' },
]

const SMALL_FEATURES = [
  {
    Icon: Microscope,
    num: '02',
    title: 'Clinically Advanced Treatments',
    desc: 'From GFC to FUE transplants — premium technology for hair regrowth, restoration, and scalp health.',
  },
  {
    Icon: ClipboardList,
    num: '03',
    title: 'Personalised Treatment Plan',
    desc: 'Every patient receives a detailed scalp assessment before any treatment is ever recommended.',
  },
  {
    Icon: Users,
    num: '04',
    title: 'Hundreds of Happy Patients',
    desc: 'Hundreds of satisfied patients in Thanjavur trust us for results-driven hair care.',
  },
  {
    Icon: BadgeDollarSign,
    num: '05',
    title: 'Transparent Pricing',
    desc: 'No hidden charges, no pressure. A complete cost estimate is shared upfront after your assessment.',
  },
]

export default function WhyChooseUs({ onBookClick }) {
  return (
    <section id="why-us" style={{
      background: '#fff',
      fontFamily: 'Poppins, sans-serif',
      padding: '80px 0 80px',
    }}>
      <div className="why-us-shell" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 24px' }}>

        {/* ── Section header ── */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{
            display: 'inline-block', fontSize: 11, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.12em',
            color: '#C81C2E', background: 'rgba(200,28,46,0.08)',
            padding: '4px 14px', borderRadius: 999, marginBottom: 12,
          }}>
            Why Choose Us
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700,
            color: '#1A0A0E', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 12,
          }}>
            Why Thanjavur Trusts Us<br />
            <span style={{ color: '#C81C2E' }}>for Hair Treatment</span>
          </h2>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            We combine clinical expertise with the latest technology to deliver real, visible results —
            with care that feels personal every step of the way.
          </p>
        </div>

        {/* ── Stats row ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2,1fr)',
          gap: 12, marginBottom: 48,
        }} className="stats-grid reveal">
          {STATS.map(({ value, label }) => (
            <div key={label} style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '24px 16px', borderRadius: 16,
              background: '#faf5f5', border: '1px solid #f5e8ea',
            }}>
              <span style={{
                fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', fontWeight: 900,
                color: '#C81C2E', letterSpacing: '-0.02em', lineHeight: 1,
                marginBottom: 6,
              }}>{value}</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#6B7280', textAlign: 'center' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* ── Feature grid: big card left | 2×2 right ── */}
        <div className="features-grid">

          {/* Big red card */}
          <div className="reveal-left why-us-hero-card" style={{
            background: 'linear-gradient(145deg, #C81C2E 0%, #8B0A1A 100%)',
            borderRadius: 20, padding: 36,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            minHeight: 300,
          }}>
            <div>
              <div style={{
                width: 52, height: 52, borderRadius: 14, marginBottom: 20,
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <UserCheck size={26} color="#fff" />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>
                Certified Hair Specialists
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>
                Not general doctors — dedicated hair specialists with deep expertise in trichology and scalp science.
                You&apos;re always seen by the right expert for your specific condition.
              </p>
            </div>
            <button onClick={onBookClick} style={{
              marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: 13, fontWeight: 700, color: '#fff',
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif', padding: 0,
            }}>
              Speak to a Specialist <ArrowRight size={16} />
            </button>
          </div>

          {/* 2×2 smaller cards */}
          <div className="small-cards-grid">
            {SMALL_FEATURES.map(({ Icon, num, title, desc }, i) => (
              <div key={num}
                className={`card-hover reveal ${['anim-d1','anim-d2','anim-d3','anim-d4'][i]}`}
                style={{
                  background: '#fff', border: '1px solid #f0f0f0',
                  borderRadius: 16, padding: 24,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}>
                <div style={{ marginBottom: 14 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: 'rgba(200,28,46,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} style={{ color: '#C81C2E' }} />
                  </div>
                </div>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: '#1A0A0E', marginBottom: 8, lineHeight: 1.4 }}>{title}</h3>
                <p style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="reveal" style={{ marginTop: 48, textAlign: 'center' }}>
          <button onClick={onBookClick} className="btn-primary" style={{
            padding: '13px 32px', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Speak to a Hair Doctor in Thanjavur <ArrowRight size={16} />
          </button>
        </div>

      </div>

      <style>{`
        .stats-grid { grid-template-columns: repeat(2,1fr); }
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .small-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (min-width: 640px) {
          .stats-grid { grid-template-columns: repeat(4,1fr) !important; }
        }
        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 767px) {
          .why-us-shell {
            padding: 0 16px !important;
          }
          .why-us-hero-card {
            padding: 24px !important;
            min-height: auto !important;
          }
        }
        @media (max-width: 599px) {
          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 10px !important;
            margin-bottom: 36px !important;
          }
          .stats-grid > * {
            min-width: 0 !important;
            max-width: none !important;
          }
          .small-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .small-cards-grid > * {
            min-width: 0 !important;
            max-width: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  )
}
