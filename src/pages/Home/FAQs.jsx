import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useIntersect } from '../../hooks/useIntersect'

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
      className="rounded-xl overflow-hidden reveal"
      style={{
        border: `1px solid ${isOpen ? 'rgba(200,28,46,0.25)' : '#f0f0f0'}`,
        background: isOpen ? 'rgba(200,28,46,0.02)' : '#fff',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        animationDelay: `${index * 80}ms`,
      }}
    >
      <button
        className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left"
        style={{ fontFamily: 'Poppins, sans-serif', background: 'none', border: 'none', cursor: 'pointer' }}
        onClick={onToggle}
      >
        <span
          className="font-semibold pr-4 leading-snug"
          style={{ fontSize: 14, color: isOpen ? '#C81C2E' : '#1A0A0E', flex: 1 }}
        >
          {faq.q}
        </span>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen ? '#C81C2E' : '#f5f5f5',
            color: isOpen ? '#fff' : '#6B7280',
          }}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p
          className="px-5 md:px-6 pb-5 text-sm leading-relaxed"
          style={{ color: '#6B7280', fontFamily: 'Poppins, sans-serif', animation: isOpen ? 'accordionOpen 0.3s ease both' : 'none' }}
        >
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
      className="py-20 lg:py-28"
      style={{ background: '#fff', fontFamily: 'Poppins, sans-serif' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left — sticky header */}
          <div className="lg:col-span-2 reveal-left">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ color: '#C81C2E', background: 'rgba(200,28,46,0.08)', letterSpacing: '0.12em' }}
            >
              Common Questions
            </span>
            <h2
              className="font-black leading-tight mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#1A0A0E', letterSpacing: '-0.02em' }}
            >
              Got Questions?<br />
              <span style={{ color: '#C81C2E' }}>We Have Answers.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280' }}>
              Everything you need to know about hair treatment in Thanjavur.
              Still have questions? Our specialists are here to help.
            </p>

            {/* Contact card */}
            <div
              className="p-5 rounded-xl"
              style={{ background: 'linear-gradient(135deg, #1A0A0E, #2D1015)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Still unsure?
              </p>
              <p className="text-sm font-semibold text-white mb-3">
                Call us directly — our team answers any question for free.
              </p>
              <a
                href="tel:8098756789"
                className="flex items-center gap-2 font-bold text-sm"
                style={{ color: '#C81C2E' }}
              >
                80987 56789
              </a>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 space-y-3">
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
