import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useIntersect } from '../hooks/useIntersect'
import './sections.css'

const FAQS = [
  {
    q: 'Which is the best hair treatment clinic in Thanjavur?',
    a: 'Advanced GroHair & GloSkin Thanjavur offers specialist hair care including GFC treatment, Stem X Pro, FUE hair transplant, and scalp micropigmentation — all under one roof. Our team of certified hair specialists provides personalised care for every patient.',
  },
  {
    q: 'How much does hair transplant cost in Thanjavur?',
    a: 'Cost depends on your extent of hair loss and graft requirement. We share a full, transparent estimate only after your free assessment — no surprises, no hidden charges. Book your consultation to get an accurate estimate.',
  },
  {
    q: 'Is hair transplant permanent?',
    a: 'Transplanted follicles are taken from areas genetically resistant to hair loss, making the results long-lasting. New growth is typically visible from 3–4 months and continues up to 12 months, giving you natural, permanent-looking results.',
  },
  {
    q: 'Which treatment is best for hair fall?',
    a: 'It depends on the cause of your hair fall. GFC Treatment and Stem X Pro are highly effective for early to moderate hair fall. Our hair doctor will diagnose your condition and recommend the most suitable option for you.',
  },
  {
    q: 'How many sessions does GFC treatment need?',
    a: 'Typically 3 to 4 sessions spaced 3–4 weeks apart, followed by maintenance as advised by your specialist. The number can vary based on severity and your individual response to treatment.',
  },
  {
    q: 'Is there downtime after treatment?',
    a: 'Non-surgical treatments like GFC and Stem X Pro have minimal to no downtime — you can return to daily activities immediately. Hair transplant involves a short recovery period of a few days, which is discussed in full before your procedure.',
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <div
      className="reveal"
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        border: `1px solid ${isOpen ? 'rgba(200,28,46,0.25)' : '#f0f0f0'}`,
        background: isOpen ? 'rgba(200,28,46,0.02)' : '#fff',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        animationDelay: `${index * 80}ms`,
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 24px',
          textAlign: 'left',
          fontFamily: 'Poppins, sans-serif',
          background: 'none', border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{
          fontSize: 14, fontWeight: 600,
          color: isOpen ? '#C81C2E' : '#1A0A0E',
          lineHeight: 1.5, flex: 1, paddingRight: 16,
        }}>
          {faq.q}
        </span>
        <div style={{
          flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: isOpen ? '#C81C2E' : '#f5f5f5',
          color: isOpen ? '#fff' : '#6B7280',
          transition: 'background 0.3s ease, color 0.3s ease',
        }}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p style={{
          padding: '0 24px 20px',
          fontSize: 14, color: '#6B7280', lineHeight: 1.75,
          fontFamily: 'Poppins, sans-serif',
          animation: isOpen ? 'accordionOpen 0.3s ease both' : 'none',
        }}>
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQs({ onBookClick }) {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useIntersect()

  return (
    <section
      id="faqs"
      ref={sectionRef}
      style={{ background: '#fff', fontFamily: 'Poppins, sans-serif', padding: '80px 0' }}
    >
      <div className="section-inner">
        <div className="faqs-layout">

          {/* Left — heading + contact card */}
          <div className="reveal-left">
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.12em',
              color: '#C81C2E', background: 'rgba(200,28,46,0.08)',
              padding: '4px 14px', borderRadius: 999, marginBottom: 14,
            }}>
              Common Questions
            </span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700,
              color: '#1A0A0E', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16,
            }}>
              Got Questions?<br />
              <span style={{ color: '#C81C2E' }}>We Have Answers.</span>
            </h2>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75, marginBottom: 24 }}>
              Everything you need to know about hair treatment in Thanjavur.
              Still have questions? Our specialists are here to help.
            </p>

            {/* Contact card */}
            <div style={{
              padding: 20, borderRadius: 12,
              background: 'linear-gradient(135deg, #1A0A0E, #2D1015)',
            }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>
                Still unsure?
              </p>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 12, lineHeight: 1.5 }}>
                Call us directly — our team answers any question for free.
              </p>
              <a href="tel:8098756789" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 14, fontWeight: 700, color: '#C81C2E', textDecoration: 'none',
              }}>
                80987 56789
              </a>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="faqs-accordion">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
