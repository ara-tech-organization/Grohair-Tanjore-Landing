import { Phone, CalendarCheck } from 'lucide-react'

export default function MobileBottomBar({ onBookClick }) {
  return (
    <div
      className="mobile-bottom-bar fixed bottom-0 left-0 right-0 z-40 flex"
      style={{ fontFamily: 'Poppins, sans-serif', boxShadow: '0 -4px 20px rgba(0,0,0,0.18)' }}
    >
      <a
        href="tel:8098756789"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3.5 font-bold text-xs text-white tracking-widest uppercase"
        style={{ background: '#C81C2E', letterSpacing: '0.1em' }}
      >
        <Phone size={18} strokeWidth={2.5} />
        Call Us
      </a>
      <div style={{ width: 1, background: 'rgba(255,255,255,0.25)' }} />
      <button
        onClick={onBookClick}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3.5 font-bold text-xs text-white tracking-widest uppercase"
        style={{ background: '#9E0F20', letterSpacing: '0.08em', border: 'none', cursor: 'pointer' }}
      >
        <CalendarCheck size={18} strokeWidth={2.5} />
        Book a Consultation
      </button>
    </div>
  )
}
