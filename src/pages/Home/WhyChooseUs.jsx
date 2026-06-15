import { UserCheck, Microscope, ClipboardList, Users, BadgeDollarSign, ArrowRight } from 'lucide-react'
import { useIntersect } from '../../hooks/useIntersect'

const FEATURES = [
  {
    Icon: UserCheck,
    num: '01',
    title: 'Certified Hair Specialists',
    desc: 'Dedicated trichologists — not general doctors. Deep expertise in scalp science and hair restoration.',
  },
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

const STATS = [
  { value: '500+', label: 'Satisfied Patients' },
  { value: '5+',   label: 'Years of Excellence' },
  { value: '7+',   label: 'Advanced Treatments' },
  { value: '100%', label: 'Personalised Care' },
]

export default function WhyChooseUs({ onBookClick }) {
  const sectionRef = useIntersect()

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white" style={{ fontFamily: 'Poppins, sans-serif' }} ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{ color: '#C81C2E', background: 'rgba(200,28,46,0.08)', letterSpacing: '0.12em' }}>
            Why Choose Us
          </span>
          <h2 className="font-black leading-tight mb-3"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#1A0A0E', letterSpacing: '-0.02em' }}>
            Why Thanjavur Trusts Us<br />
            <span style={{ color: '#C81C2E' }}>for Hair Treatment</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-lg mx-auto" style={{ color: '#6B7280' }}>
            We combine clinical expertise with the latest technology to deliver real, visible results —
            with care that feels personal every step of the way.
          </p>
        </div>

        {/* ── Stats grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 reveal">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center justify-center py-6 px-4 rounded-2xl"
              style={{ background: '#faf5f5', border: '1px solid #f5e8ea' }}>
              <span className="font-black mb-1"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#C81C2E', letterSpacing: '-0.02em' }}>
                {value}
              </span>
              <span className="text-xs font-medium text-center" style={{ color: '#6B7280' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* ── Features grid — hero card + 2×2 grid ── */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Big hero feature card */}
          <div className="lg:row-span-2 flex flex-col justify-between p-8 rounded-2xl reveal-left"
            style={{ background: 'linear-gradient(145deg, #C81C2E 0%, #8B0A1A 100%)', minHeight: 340 }}>
            <div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(255,255,255,0.15)' }}>
                <UserCheck size={24} color="#fff" />
              </div>
              <span className="font-black" style={{ fontSize: 56, color: 'rgba(255,255,255,0.12)', lineHeight: 1 }}>01</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-3 leading-snug">Certified Hair Specialists</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Not general doctors — dedicated hair specialists with deep expertise in trichology and scalp science.
                You're always seen by the right expert for your specific condition.
              </p>
            </div>
            <button onClick={onBookClick}
              className="mt-8 self-start flex items-center gap-2 text-sm font-bold text-white"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins,sans-serif', padding: 0 }}>
              Speak to a Specialist <ArrowRight size={16} />
            </button>
          </div>

          {/* 4 smaller feature cards */}
          {FEATURES.slice(1).map(({ Icon, num, title, desc }, i) => (
            <div key={num}
              className={`p-6 rounded-2xl card-hover reveal ${['anim-d1','anim-d2','anim-d3','anim-d4'][i] || 'anim-d4'}`}
              style={{ background: '#fff', border: '1px solid #f0f0f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(200,28,46,0.08)' }}>
                  <Icon size={20} style={{ color: '#C81C2E' }} />
                </div>
                <span className="font-black text-2xl" style={{ color: 'rgba(200,28,46,0.1)' }}>{num}</span>
              </div>
              <h3 className="font-bold text-sm mb-2" style={{ color: '#1A0A0E' }}>{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-12 text-center reveal">
          <button onClick={onBookClick} className="btn-primary px-8 py-3.5 text-sm">
            Speak to a Hair Doctor in Thanjavur <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
