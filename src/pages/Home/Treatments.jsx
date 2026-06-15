import { useState } from 'react'
import { Sparkles, Droplets, Scan, Scissors, Zap, Eye, Layers, ArrowRight, ChevronRight } from 'lucide-react'
import { useIntersect } from '../../hooks/useIntersect'

const TABS = ['Non-Surgical Regrowth', 'Hair Restoration']

const TREATMENTS = {
  'Non-Surgical Regrowth': [
    {
      Icon: Sparkles,
      title: 'Stem X Pro — Hair Regrowth Treatment',
      desc: 'Uses advanced stem cell technology to stimulate dormant follicles, nourish the scalp, and promote thicker, healthier hair. Best for early to moderate hair loss.',
      highlight: 'Best for Early to Moderate Hair Loss',
      sessions: '4–6 Sessions',
      color: '#7C3AED',
    },
    {
      Icon: Droplets,
      title: 'GFC Treatment',
      desc: 'Harnesses your body\'s own growth factors to reduce hair fall and improve density. Natural, safe, and minimally invasive.',
      highlight: 'Natural. Safe. Minimally Invasive.',
      sessions: '3–4 Sessions',
      color: '#0891B2',
    },
    {
      Icon: Scan,
      title: 'Scalp Treatment in Thanjavur',
      desc: 'Treats dandruff, scalp inflammation, and underlying scalp conditions that accelerate hair loss. A healthy scalp is the foundation of healthy hair.',
      highlight: 'Treats Root Cause',
      sessions: 'As Needed',
      color: '#059669',
    },
  ],
  'Hair Restoration': [
    {
      Icon: Scissors,
      title: 'FUE Hair Transplant in Thanjavur',
      desc: 'Scar-free, follicle-by-follicle transplant for natural-looking, long-lasting hair restoration. Results visible from 3–4 months post-procedure.',
      highlight: 'Scar-Free. Natural Results.',
      sessions: 'Single Procedure',
      color: '#C81C2E',
    },
    {
      Icon: Zap,
      title: 'Hair Transplant in Thanjavur',
      desc: 'Advanced restoration for moderate to severe baldness by experienced specialists. Covers frontal, crown, and temple areas.',
      highlight: 'Full Coverage. Expert Hands.',
      sessions: 'Single Procedure',
      color: '#D97706',
    },
    {
      Icon: Eye,
      title: 'Eyebrow Transplant in Thanjavur',
      desc: 'Precise surgical procedure using hair grafts to restore sparse or absent eyebrows. Natural-looking, lasting results.',
      highlight: 'Natural Symmetry. Lasting Results.',
      sessions: 'Single Procedure',
      color: '#7C3AED',
    },
    {
      Icon: Layers,
      title: 'Scalp Micropigmentation',
      desc: 'Non-surgical treatment depositing pigment into the scalp to replicate hair follicles — ideal for visible baldness or receding hairlines.',
      highlight: 'Non-Surgical. Instant Visual Effect.',
      sessions: '2–3 Sessions',
      color: '#0891B2',
    },
  ],
}

export default function Treatments({ onBookClick }) {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const sectionRef = useIntersect()

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white" style={{ fontFamily: 'Poppins, sans-serif' }} ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{ color: '#C81C2E', background: 'rgba(200,28,46,0.08)', letterSpacing: '0.12em' }}>
            Our Treatments
          </span>
          <h2 className="font-black leading-tight mb-3"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#1A0A0E', letterSpacing: '-0.02em' }}>
            Our Hair Treatments<br />
            <span style={{ color: '#C81C2E' }}>in Thanjavur</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-lg mx-auto" style={{ color: '#6B7280' }}>
            From non-surgical regrowth to advanced transplants — every treatment is tailored to your specific hair concern.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10 reveal">
          <div className="inline-flex rounded-xl p-1 gap-1" style={{ background: '#f5f5f5' }}>
            {TABS.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  background: activeTab === tab ? '#C81C2E' : 'transparent',
                  color: activeTab === tab ? '#fff' : '#6B7280',
                  boxShadow: activeTab === tab ? '0 4px 14px rgba(200,28,46,0.3)' : 'none',
                  border: 'none', cursor: 'pointer',
                }}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Treatment cards grid */}
        <div
          key={activeTab}
          className={`grid sm:grid-cols-2 ${TREATMENTS[activeTab].length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 xl:grid-cols-4'} gap-6`}
          style={{ animation: 'fadeInUp 0.4s ease both' }}
        >
          {TREATMENTS[activeTab].map(({ Icon, title, desc, highlight, sessions, color }, i) => (
            <div key={title}
              className={`group p-6 rounded-2xl card-hover treatment-card-accent reveal ${['','anim-d1','anim-d2','anim-d3'][i] || ''}`}
              style={{ background: '#fff', border: '1px solid #f0f0f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', borderLeftColor: color }}>

              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}18` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: '#f5f5f5', color: '#6B7280', fontSize: 11 }}>
                  {sessions}
                </span>
              </div>

              <div className="inline-flex items-center gap-1 text-xs font-bold mb-3 px-2.5 py-1 rounded-full"
                style={{ background: `${color}12`, color }}>
                <span className="w-1 h-1 rounded-full bg-current inline-block" />
                {highlight}
              </div>

              <h3 className="font-bold mb-2 leading-snug" style={{ fontSize: 15, color: '#1A0A0E' }}>{title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280', fontSize: 13 }}>{desc}</p>

              <button onClick={onBookClick}
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: '#C81C2E', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', padding: 0 }}>
                Book This Treatment <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center reveal">
          <p className="text-sm mb-4" style={{ color: '#6B7280' }}>Not sure which treatment? Ask our hair doctor — it's free</p>
          <button onClick={onBookClick} className="btn-primary px-8 py-3.5 text-sm">
            Get My Free Consultation <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
