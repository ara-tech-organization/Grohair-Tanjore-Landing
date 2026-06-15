import { useState } from 'react'
import { X, CheckCircle, Lock, ShieldCheck, Clock, Star } from 'lucide-react'
import './PopupForm.css'

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

const TRUST_BADGES = [
  { icon: <ShieldCheck size={14} />, label: 'Free Consult' },
  { icon: <Clock size={14} />,      label: 'Quick Reply' },
  { icon: <Star size={14} />,       label: '5★ Rated' },
]

export default function PopupForm({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', concern: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))
  const clrErr = (key)  => setErrors(e => ({ ...e, [key]: '' }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit number'
    if (!form.concern) e.concern = 'Please select your concern'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  return (
    <div
      className="popup-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="popup-card">

        {/* ── Header ── */}
        <div className="popup-header">
          <div className="popup-header-stripes" />
          <div className="popup-badge">Limited Period Offer</div>
          <h2 className="popup-title">
            Advanced Grohair &amp; Gloskin<br />Thanjavur
          </h2>
          <p className="popup-subtitle">Book your expert consultation today</p>
          <button className="popup-close" onClick={onClose} aria-label="Close">
            <X size={14} />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="popup-body">
          {submitted ? (
            <div className="popup-success">
              <div className="popup-success-icon">
                <CheckCircle size={32} />
              </div>
              <h3>Thank You!</h3>
              <p>Our team will contact you shortly to confirm your consultation.</p>
              <button
                onClick={onClose}
                className="popup-submit"
                style={{ maxWidth: 200, margin: '0 auto' }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>

              {/* Name */}
              <div className="popup-field">
                <label className="popup-label">Full Name</label>
                <input
                  type="text"
                  className={`popup-input${errors.name ? ' error' : ''}`}
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => { set('name', e.target.value); clrErr('name') }}
                />
                {errors.name && <p className="popup-error">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div className="popup-field">
                <label className="popup-label">Phone Number</label>
                <input
                  type="tel"
                  className={`popup-input${errors.phone ? ' error' : ''}`}
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) => { set('phone', e.target.value); clrErr('phone') }}
                />
                {errors.phone && <p className="popup-error">{errors.phone}</p>}
              </div>

              {/* Concern */}
              <div className="popup-field">
                <label className="popup-label">Hair Concern</label>
                <select
                  className={`popup-input${errors.concern ? ' error' : ''}`}
                  value={form.concern}
                  onChange={(e) => { set('concern', e.target.value); clrErr('concern') }}
                >
                  <option value="">Select your concern</option>
                  {CONCERNS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.concern && <p className="popup-error">{errors.concern}</p>}
              </div>

              {/* Submit */}
              <button type="submit" className="popup-submit">
                Book Free Consultation →
              </button>

              {/* Privacy note */}
              <p className="popup-trust">
                <Lock size={11} />
                Your details are 100% safe &amp; confidential
              </p>

              {/* Trust badges */}
              <div className="popup-trust-badges">
                {TRUST_BADGES.map((b) => (
                  <div key={b.label} className="popup-trust-badge">
                    <div className="popup-trust-badge-icon">{b.icon}</div>
                    {b.label}
                  </div>
                ))}
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  )
}
