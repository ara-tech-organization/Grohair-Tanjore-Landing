import { useState } from 'react'
import {
  ArrowRight,
  Phone,
  CheckCircle,
  Lock,
  ShieldCheck,
  Star,
  Clock,
} from 'lucide-react'
import ConcernDropdown from './ConcernDropdown'
import { CONCERNS } from './concerns'
import { submitAppointmentLead } from '../lib/submitAppointmentLead'
import './Hero.css'

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

export default function Hero({ onBookClick }) {
  const [form, setForm] = useState({ name: '', phone: '', concern: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Name is required'
    }

    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) {
      nextErrors.phone = 'Valid 10-digit number needed'
    }

    if (!form.concern) {
      nextErrors.concern = 'Please select a concern'
    }

    return nextErrors
  }

  const updateField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: '' }))
    setSubmitError('')
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
    <section
      id="home"
      style={{
        background: 'linear-gradient(135deg, #C81C2E 0%, #A01523 55%, #6A0812 100%)',
        fontFamily: 'Poppins, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-8%',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-8%',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="hero-wrapper">
        <div className="hero-grid">
          <div className="hero-copy-col">
            <div
              className="animate-fade-in"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 16px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.28)',
                color: '#fff',
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#fff',
                  display: 'inline-block',
                  animation: 'pulse 2s infinite',
                }}
              />
              Thanjavur&apos;s Trusted Hair Specialist
            </div>

            <h1
              className="animate-fade-up"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: 18,
              }}
            >
              Best Hair Treatment
              <br />
              <span style={{ color: 'rgba(255,255,255,0.65)' }}>Clinic in Thanjavur</span>
            </h1>

            <p
              className="animate-fade-up anim-d1"
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.82)',
                maxWidth: 460,
                marginBottom: 24,
              }}
            >
              Expert diagnosis and the right treatment for hair fall, thinning, baldness and more.
              Certified specialists. Transparent pricing. First consultation is{' '}
              <strong style={{ color: '#fff' }}>completely free.</strong>
            </p>

            <div
              className="animate-fade-up anim-d2"
              style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}
            >
              {TRUST.map(({ Icon, label }) => (
                <div
                  key={label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '6px 14px',
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 600,
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                  }}
                >
                  <Icon size={11} /> {label}
                </div>
              ))}
            </div>

            <div
              className="animate-fade-up anim-d3"
              style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}
            >
              <button
                onClick={onBookClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '13px 28px',
                  borderRadius: 8,
                  background: '#fff',
                  color: '#C81C2E',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: 14,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 28px rgba(0,0,0,0.25)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                Book Free Consultation <ArrowRight size={16} />
              </button>
              <a
                href="tel:8098756789"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '13px 24px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  background: 'rgba(255,255,255,0.13)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                <Phone size={15} /> 80987 56789
              </a>
            </div>

            <div
              className="animate-fade-up anim-d4"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4,1fr)',
                gap: 8,
                maxWidth: 400,
              }}
            >
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    textAlign: 'center',
                    padding: '12px 6px',
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.10)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: 20,
                      color: '#fff',
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: 1.3,
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-right anim-d1 hero-form-col">
            <div
              style={{
                background: '#fff',
                borderRadius: 20,
                boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
              }}
            >
              <div style={{ background: 'linear-gradient(90deg,#C81C2E,#9E0F20)', padding: '20px 24px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '3px 10px',
                    borderRadius: 999,
                    fontSize: 10,
                    fontWeight: 700,
                    background: 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    marginBottom: 8,
                  }}
                >
                  LIMITED PERIOD OFFER
                </span>
                <h3 style={{ fontWeight: 700, color: '#fff', fontSize: 18, margin: '0 0 4px' }}>
                  Start Your Hair Recovery Today
                </h3>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', margin: 0 }}>
                  Our specialist will call you within the hour
                </p>
              </div>

              <div style={{ padding: '20px 24px 24px' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <CheckCircle size={48} style={{ color: '#C81C2E', display: 'block', margin: '0 auto 12px' }} />
                    <h4
                      style={{
                        fontWeight: 700,
                        fontSize: 18,
                        color: '#1A0A0E',
                        marginBottom: 8,
                      }}
                    >
                      We&apos;ll Call You Soon!
                    </h4>
                    <p style={{ fontSize: 14, color: '#6B7280' }}>
                      Our hair specialist will contact you shortly to schedule your free consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(event) => updateField('name', event.target.value)}
                        />
                        {errors.name ? (
                          <p style={{ fontSize: 12, color: '#C81C2E', marginTop: 4 }}>{errors.name}</p>
                        ) : null}
                      </div>

                      <div>
                        <label className="form-label">Mobile Number *</label>
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="10-digit mobile number"
                          value={form.phone}
                          onChange={(event) => updateField('phone', event.target.value)}
                        />
                        {errors.phone ? (
                          <p style={{ fontSize: 12, color: '#C81C2E', marginTop: 4 }}>{errors.phone}</p>
                        ) : null}
                      </div>

                      <div>
                        <label className="form-label">Hair Concern *</label>
                        <ConcernDropdown
                          options={CONCERNS}
                          value={form.concern}
                          error={errors.concern}
                          variant="hero"
                          onChange={(value) => updateField('concern', value)}
                        />
                        {errors.concern ? (
                          <p style={{ fontSize: 12, color: '#C81C2E', marginTop: 4 }}>{errors.concern}</p>
                        ) : null}
                      </div>

                      <button
                        type="submit"
                        className="btn-shimmer btn-primary"
                        disabled={isSubmitting}
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          padding: '13px 0',
                          fontSize: 14,
                          fontWeight: 700,
                          borderRadius: 8,
                          opacity: isSubmitting ? 0.8 : 1,
                          cursor: isSubmitting ? 'wait' : 'pointer',
                        }}
                      >
                        {isSubmitting ? 'Submitting...' : 'Get My Free Consultation'}
                      </button>
                    </div>

                    {submitError ? (
                      <p
                        style={{
                          fontSize: 12,
                          color: '#C81C2E',
                          marginTop: 10,
                          textAlign: 'center',
                        }}
                      >
                        {submitError}
                      </p>
                    ) : null}

                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                        fontSize: 11,
                        color: '#9CA3AF',
                        marginTop: 14,
                      }}
                    >
                      <Lock size={10} /> 100% Private &amp; Confidential. Zero spam.
                    </p>
                  </form>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 16 }}>
              {['No Hidden Costs', 'Expert Doctors', 'Free Consult'].map((label) => (
                <span
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.65)',
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.5)',
                      display: 'inline-block',
                    }}
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ lineHeight: 0, marginTop: -2 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: 60, display: 'block' }}>
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
