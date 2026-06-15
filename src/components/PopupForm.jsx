import { useEffect, useState } from 'react'
import { X, CheckCircle, Lock, ShieldCheck, Clock, Star } from 'lucide-react'
import ConcernDropdown from './ConcernDropdown'
import { CONCERNS } from './concerns'
import { submitAppointmentLead } from '../lib/submitAppointmentLead'
import './PopupForm.css'

const TRUST_BADGES = [
  { icon: <ShieldCheck size={14} />, label: 'Free Consult' },
  { icon: <Clock size={14} />, label: 'Quick Reply' },
  { icon: <Star size={14} />, label: '5-Star Rated' },
]

export default function PopupForm({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', concern: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const { body, documentElement } = document
    const previousBodyOverflow = body.style.overflow
    const previousHtmlOverflow = documentElement.style.overflow

    body.style.overflow = 'hidden'
    documentElement.style.overflow = 'hidden'

    return () => {
      body.style.overflow = previousBodyOverflow
      documentElement.style.overflow = previousHtmlOverflow
    }
  }, [])

  const updateField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: '' }))
    setSubmitError('')
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Name is required'
    }

    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) {
      nextErrors.phone = 'Enter a valid 10-digit number'
    }

    if (!form.concern) {
      nextErrors.concern = 'Please select your concern'
    }

    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      await submitAppointmentLead(form)
      setSubmitted(true)
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="popup-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="popup-card">
        <div className="popup-header">
          <div className="popup-header-stripes" />
          <div className="popup-badge">Limited Period Offer</div>
          <h2 className="popup-title">
            Advanced Grohair &amp; Gloskin
            <br />
            Thanjavur
          </h2>
          <p className="popup-subtitle">Book your expert consultation today</p>
          <button className="popup-close" onClick={onClose} aria-label="Close">
            <X size={14} />
          </button>
        </div>

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
              <div className="popup-field">
                <label className="popup-label">Full Name</label>
                <input
                  type="text"
                  className={`popup-input${errors.name ? ' error' : ''}`}
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                />
                {errors.name ? <p className="popup-error">{errors.name}</p> : null}
              </div>

              <div className="popup-field">
                <label className="popup-label">Phone Number</label>
                <input
                  type="tel"
                  className={`popup-input${errors.phone ? ' error' : ''}`}
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                />
                {errors.phone ? <p className="popup-error">{errors.phone}</p> : null}
              </div>

              <div className="popup-field">
                <label className="popup-label">Hair Concern</label>
                <ConcernDropdown
                  error={errors.concern}
                  onChange={(value) => updateField('concern', value)}
                  options={CONCERNS}
                  placeholder="Select your concern"
                  value={form.concern}
                  variant="popup"
                />
                {errors.concern ? <p className="popup-error">{errors.concern}</p> : null}
              </div>

              <button
                type="submit"
                className="popup-submit"
                disabled={isSubmitting}
                style={{
                  opacity: isSubmitting ? 0.8 : 1,
                  cursor: isSubmitting ? 'wait' : 'pointer',
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
              </button>

              {submitError ? <p className="popup-error popup-submit-error">{submitError}</p> : null}

              <p className="popup-trust">
                <Lock size={11} />
                Your details are 100% safe &amp; confidential
              </p>

              <div className="popup-trust-badges">
                {TRUST_BADGES.map((badge) => (
                  <div key={badge.label} className="popup-trust-badge">
                    <div className="popup-trust-badge-icon">{badge.icon}</div>
                    {badge.label}
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
