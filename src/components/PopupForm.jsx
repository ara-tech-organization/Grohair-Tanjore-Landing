import { useState } from 'react'
import { X, CheckCircle, Lock } from 'lucide-react'

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

export default function PopupForm({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', concern: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

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
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-overlay-in"
      style={{ background: 'rgba(10,2,4,0.65)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-popup-in"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {/* Red Header */}
        <div
          className="relative px-6 pt-7 pb-6 diagonal-stripes"
          style={{ background: 'linear-gradient(135deg, #C81C2E 0%, #9E0F20 100%)' }}
        >
          {/* Badge */}
          <div className="flex justify-center mb-3">
            <span
              className="text-xs font-bold px-4 py-1 rounded-full border-2 border-white text-white tracking-widest uppercase"
              style={{ letterSpacing: '0.12em' }}
            >
              Limited Period Offer
            </span>
          </div>
          <h2 className="text-center text-white font-bold text-xl leading-tight">
            Advanced Grohair &amp; Gloskin<br />Thanjavur
          </h2>
          <p className="text-center text-white/80 text-sm mt-1.5">
            Book your expert consultation today
          </p>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={15} />
          </button>
        </div>

        {/* Form Body */}
        <div className="bg-white px-6 py-6">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle size={52} className="mx-auto mb-3" style={{ color: '#C81C2E' }} />
              <h3 className="font-bold text-lg text-gray-900 mb-1">Thank You!</h3>
              <p className="text-sm text-gray-500">Our team will contact you shortly to confirm your consultation.</p>
              <button
                onClick={onClose}
                className="btn-primary mt-5 px-6 py-2.5 text-sm mx-auto"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                <div>
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }) }}
                  />
                  {errors.name && <p className="text-xs mt-1" style={{ color: '#C81C2E' }}>{errors.name}</p>}
                </div>
                <div>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: '' }) }}
                  />
                  {errors.phone && <p className="text-xs mt-1" style={{ color: '#C81C2E' }}>{errors.phone}</p>}
                </div>
                <div>
                  <label className="form-label">Hair Concern</label>
                  <select
                    className="form-input"
                    value={form.concern}
                    onChange={(e) => { setForm({ ...form, concern: e.target.value }); setErrors({ ...errors, concern: '' }) }}
                    style={{ appearance: 'auto' }}
                  >
                    <option value="">Select your concern</option>
                    {CONCERNS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.concern && <p className="text-xs mt-1" style={{ color: '#C81C2E' }}>{errors.concern}</p>}
                </div>
                <button
                  type="submit"
                  className="btn-shimmer btn-primary w-full justify-center py-3.5 text-sm font-bold tracking-wide"
                  style={{ borderRadius: 8, letterSpacing: '0.04em' }}
                >
                  Book Now &rarr;
                </button>
              </div>
              <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                <Lock size={11} />
                Our team will contact you shortly. Your details are safe with us.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
