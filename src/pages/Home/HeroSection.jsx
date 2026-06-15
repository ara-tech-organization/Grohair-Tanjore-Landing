import { useState } from 'react'
import { ArrowRight, Phone, CheckCircle, Lock, ShieldCheck, Star, Clock } from 'lucide-react'

const CONCERNS = [
  'Hair Fall / Hair Loss',
  'Thinning Hair',
  'Baldness / Pattern Hair Loss',
  'Receding Hairline',
  'Alopecia (Patchy Hair Loss)',
  'Eyebrow Restoration',
  'Hair Transplant Enquiry',
  'Scalp Problems',
  'Other',
]

const STATS = [
  { value: '500+', label: 'Happy Patients' },
  { value: '5+', label: 'Years Expert' },
  { value: '7+', label: 'Treatments' },
  { value: '100%', label: 'Personalised' },
]

const TRUST = [
  { Icon: ShieldCheck, label: 'Certified Specialists' },
  { Icon: Star, label: 'Free Consultation' },
  { Icon: Clock, label: 'Same Day Appointments' },
]

export default function HeroSection({ onBookClick }) {
  const [form, setForm] = useState({ name: '', phone: '', concern: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Valid 10-digit number needed'
    if (!form.concern) e.concern = 'Please select a concern'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen bg-stripes bg-dots"
      style={{
        background: 'linear-gradient(135deg, #C81C2E 0%, #A01523 50%, #6A0812 100%)',
        fontFamily: 'Poppins, sans-serif',
        paddingTop: 0,
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)', transform: 'translate(40%, -40%)' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)', transform: 'translate(-40%, 40%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── HERO GRID ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start pt-28 pb-12 lg:pt-32 lg:pb-16">

          {/* LEFT — Copy */}
          <div>
            {/* Live pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 animate-fade-in"
              style={{ background: 'rgba(255,255,255,0.14)', color: '#fff', border: '1px solid rgba(255,255,255,0.28)', letterSpacing: '0.1em' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse" />
              Thanjavur's Trusted Hair Specialist
            </div>

            {/* Heading */}
            <h1 className="font-black text-white leading-tight mb-5 animate-fade-up"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.5rem)', letterSpacing: '-0.025em' }}>
              Best Hair Treatment<br />
              <span style={{ color: 'rgba(255,255,255,0.65)' }}>Clinic in Thanjavur</span>
            </h1>

            {/* Subtitle */}
            <p className="leading-relaxed mb-7 animate-fade-up anim-d1"
              style={{ fontSize: 16, color: 'rgba(255,255,255,0.82)', maxWidth: 460 }}>
              Expert diagnosis and the right treatment for hair fall, thinning, baldness &amp; more.
              Certified specialists. Transparent pricing. First consultation is <strong style={{ color: '#fff' }}>completely free.</strong>
            </p>

            {/* Trust badges row */}
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-up anim-d2">
              {TRUST.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Icon size={11} />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10 animate-fade-up anim-d3">
              <button
                onClick={onBookClick}
                className="btn-primary flex items-center gap-2 px-7 py-3.5 text-sm"
                style={{ boxShadow: '0 8px 28px rgba(0,0,0,0.28)', background: '#fff', color: '#C81C2E' }}
              >
                Book Free Consultation <ArrowRight size={16} />
              </button>
              <a href="tel:8098756789"
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold"
                style={{ background: 'rgba(255,255,255,0.13)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', textDecoration: 'none' }}>
                <Phone size={15} /> 80987 56789
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2 animate-fade-up anim-d4" style={{ maxWidth: 420 }}>
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center py-3 px-2 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <p className="font-black text-white mb-0.5" style={{ fontSize: 20, lineHeight: 1 }}>{value}</p>
                  <p className="text-xs leading-tight" style={{ color: 'rgba(255,255,255,0.65)', fontSize: 10 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Lead Form Card */}
          <div className="animate-fade-right anim-d1 lg:pt-4">
            <div className="rounded-2xl overflow-hidden"
              style={{ background: '#fff', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}>

              {/* Card header */}
              <div className="px-6 py-5"
                style={{ background: 'linear-gradient(90deg, #C81C2E 0%, #9E0F20 100%)' }}>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold mb-2"
                  style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                  LIMITED PERIOD OFFER
                </div>
                <h3 className="font-bold text-white text-lg">Get Your Free Hair Consultation</h3>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Our specialist will call you within the hour
                </p>
              </div>

              {/* Form */}
              <div className="px-6 pb-6 pt-5">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle size={52} className="mx-auto mb-3" style={{ color: '#C81C2E' }} />
                    <h4 className="font-bold text-lg mb-2" style={{ color: '#1A0A0E' }}>We'll Call You Soon!</h4>
                    <p className="text-sm" style={{ color: '#6B7280' }}>
                      Our hair specialist will contact you shortly to schedule your free consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-4">
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input type="text" className="form-input" placeholder="Your full name"
                          value={form.name}
                          onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }) }} />
                        {errors.name && <p className="text-xs mt-1" style={{ color: '#C81C2E' }}>{errors.name}</p>}
                      </div>

                      <div>
                        <label className="form-label">Mobile Number *</label>
                        <input type="tel" className="form-input" placeholder="10-digit mobile number"
                          value={form.phone}
                          onChange={e => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: '' }) }} />
                        {errors.phone && <p className="text-xs mt-1" style={{ color: '#C81C2E' }}>{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="form-label">Hair Concern *</label>
                        <select className="form-input" value={form.concern} style={{ appearance: 'auto' }}
                          onChange={e => { setForm({ ...form, concern: e.target.value }); setErrors({ ...errors, concern: '' }) }}>
                          <option value="">Select your concern</option>
                          {CONCERNS.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        {errors.concern && <p className="text-xs mt-1" style={{ color: '#C81C2E' }}>{errors.concern}</p>}
                      </div>

                      <button type="submit"
                        className="btn-shimmer btn-primary w-full justify-center rounded-lg"
                        style={{ padding: '14px 0', fontSize: 14, fontWeight: 700 }}>
                        Get My Free Consultation →
                      </button>
                    </div>

                    <p className="flex items-center justify-center gap-1.5 text-xs mt-4" style={{ color: '#9CA3AF' }}>
                      <Lock size={10} /> 100% Private &amp; Confidential. Zero spam.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Beneath form — social proof */}
            <div className="flex items-center justify-center gap-6 mt-4">
              {['No Hidden Costs', 'Expert Doctors', 'Free Consult'].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <span className="w-1 h-1 rounded-full inline-block" style={{ background: 'rgba(255,255,255,0.5)' }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ width: '100%', height: 56, display: 'block' }}>
          <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
