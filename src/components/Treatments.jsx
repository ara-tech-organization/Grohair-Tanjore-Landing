import { useState } from 'react'
import { Sparkles, Droplets, Scan, Scissors, Zap, Eye, Layers, ArrowRight, ChevronRight, Leaf } from 'lucide-react'
import { useIntersect } from '../hooks/useIntersect'

import StemXImg       from '../assets/Steam X.png'
import GFCImg         from '../assets/GFC.png'
import ScalpImg       from '../assets/Scalp.png'
import FUEImg         from '../assets/FUE.png'
import HairTransplant from '../assets/HairTransplant.jpg'
import EyebrowImg     from '../assets/eyebrow.png'

import './Treatments.css'

const TABS = ['Non-Surgical Regrowth', 'Hair Restoration']

const TREATMENTS = {
  'Non-Surgical Regrowth': [
    {
      Icon: Sparkles,
      title: 'Stem X Pro',
      desc: 'Advanced stem cell technology to stimulate dormant follicles, nourish the scalp, and promote thicker, healthier hair.',
      highlight: 'Best for Early to Moderate Hair Loss',
      sessions: '4–6 Sessions',
      color: '#7C3AED',
      image: StemXImg,
    },
    {
      Icon: Droplets,
      title: 'GFC Treatment',
      desc: "Harnesses your body's own growth factors to reduce hair fall and improve density. Natural, safe, and minimally invasive.",
      highlight: 'Natural · Safe · Minimally Invasive',
      sessions: '3–4 Sessions',
      color: '#0891B2',
      image: GFCImg,
    },
    {
      Icon: Scan,
      title: 'Scalp Treatment',
      desc: 'Treats dandruff, scalp inflammation, and underlying conditions that accelerate hair loss. A healthy scalp is the foundation of healthy hair.',
      highlight: 'Treats the Root Cause',
      sessions: 'As Needed',
      color: '#059669',
      image: ScalpImg,
    },
  ],
  'Hair Restoration': [
    {
      Icon: Scissors,
      title: 'FUE Hair Transplant',
      desc: 'Scar-free, follicle-by-follicle transplant for natural-looking, long-lasting hair restoration. Results visible from 3–4 months.',
      highlight: 'Scar-Free · Natural Results',
      sessions: 'Single Procedure',
      color: '#C81C2E',
      image: FUEImg,
    },
    {
      Icon: Zap,
      title: 'Hair Transplant',
      desc: 'Advanced restoration for moderate to severe baldness by experienced specialists. Covers frontal, crown, and temple areas.',
      highlight: 'Full Coverage · Expert Hands',
      sessions: 'Single Procedure',
      color: '#D97706',
      image: HairTransplant,
    },
    {
      Icon: Eye,
      title: 'Eyebrow Transplant',
      desc: 'Precise surgical procedure using hair grafts to restore sparse or absent eyebrows. Natural-looking, lasting results.',
      highlight: 'Natural Symmetry · Lasting Results',
      sessions: 'Single Procedure',
      color: '#7C3AED',
      image: EyebrowImg,
    },
    {
      Icon: Layers,
      title: 'Scalp Micropigmentation',
      desc: 'Non-surgical treatment depositing pigment into the scalp to replicate hair follicles — ideal for visible baldness or receding hairlines.',
      highlight: 'Non-Surgical · Instant Effect',
      sessions: '2–3 Sessions',
      color: '#0891B2',
      image: ScalpImg,
    },
  ],
}

function TreatmentCard({ item, index, onBookClick }) {
  const { Icon, title, desc, highlight, sessions, color, image } = item
  return (
    <div
      className="treatment-card reveal"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      {/* Image / placeholder */}
      <div className="treatment-img-wrap">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div
            className="treatment-img-placeholder"
            style={{ background: `linear-gradient(135deg, ${color}dd, ${color}88)` }}
          >
            <Icon size={52} color="rgba(255,255,255,0.7)" />
          </div>
        )}
        <span className="treatment-sessions-overlay">{sessions}</span>
      </div>

      {/* Body */}
      <div className="treatment-body">
        <div
          className="treatment-highlight"
          style={{ background: `${color}12`, color }}
        >
          <span className="treatment-highlight-dot" />
          {highlight}
        </div>

        <h3 className="treatment-title">{title}</h3>
        <p className="treatment-desc">{desc}</p>

        <button className="treatment-cta" onClick={onBookClick}>
          Book Free Consultation <ChevronRight size={13} />
        </button>
      </div>
    </div>
  )
}

export default function Treatments({ onBookClick }) {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const sectionRef = useIntersect()
  const cards = TREATMENTS[activeTab]
  const gridClass = `treatments-grid ${cards.length <= 3 ? 'treatments-grid-3' : 'treatments-grid-4'}`

  return (
    <section id="treatments" ref={sectionRef} className="treatments-section">
      <div className="treatments-inner">

        {/* Header */}
        <div className="treatments-header reveal">
          <div className="treatments-badge">Our Treatments</div>
          <h2 className="treatments-title">
            Advanced Hair Treatments <span>in Thanjavur</span>
          </h2>
          <p className="treatments-subtitle">
            From non-surgical regrowth to advanced transplants — every treatment is tailored to your specific hair concern.
          </p>
        </div>

        {/* Tabs */}
        <div className="treatments-tabs reveal">
          <div className="treatments-tab-track">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`treatments-tab-btn${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'Non-Surgical Regrowth' ? <Leaf size={14} /> : <Scissors size={14} />}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div key={activeTab} className={gridClass}>
          {cards.map((item, i) => (
            <TreatmentCard
              key={item.title}
              item={item}
              index={i}
              onBookClick={onBookClick}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="treatments-footer reveal">
          <p className="treatments-footer-note">
            Not sure which treatment suits you? Our specialist will guide you — free of charge.
          </p>
          <button className="treatments-footer-btn" onClick={onBookClick}>
            Get My Free Consultation <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
