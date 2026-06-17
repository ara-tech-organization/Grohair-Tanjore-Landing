import { CheckCircle, Phone, MapPin, ArrowLeft } from 'lucide-react'
import Logo from '../assets/Header.png'

export default function ThankYou() {
  const goHome = (e) => {
    e.preventDefault()
    window.location.href = '/preconsultation/'
  }

  return (
    <div style={{
      minHeight: '100svh',
      background: 'linear-gradient(135deg, #C81C2E 0%, #9E0F20 100%)',
      fontFamily: 'Poppins, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: -80, right: -80, width: 320, height: 320,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -60, left: -60, width: 240, height: 240,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Card */}
      <div style={{
        background: '#fff',
        borderRadius: 24,
        padding: '40px 32px',
        maxWidth: 480,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Logo */}
        <img
          src={Logo}
          alt="Advanced Grohair & Gloskin Thanjavur"
          style={{ height: 48, width: 'auto', margin: '0 auto 28px', display: 'block' }}
        />

        {/* Check icon */}
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: 'rgba(200,28,46,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px',
        }}>
          <CheckCircle size={44} style={{ color: '#C81C2E' }} />
        </div>

        <h1 style={{
          fontSize: 26, fontWeight: 800, color: '#1A0A0E',
          marginBottom: 12, letterSpacing: '-0.02em', lineHeight: 1.25,
        }}>
          Thank You!
        </h1>

        <p style={{
          fontSize: 15, color: '#6B7280', lineHeight: 1.75,
          marginBottom: 28, maxWidth: 360, margin: '0 auto 28px',
        }}>
          Our hair specialist will call you shortly to schedule your <strong style={{ color: '#1A0A0E' }}>free consultation</strong>.
          Please keep your phone handy.
        </p>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #f0f0f0', margin: '0 0 24px' }} />

        {/* Contact info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          <a href="tel:8098756789" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontSize: 14, fontWeight: 600, color: '#C81C2E', textDecoration: 'none',
          }}>
            <Phone size={15} /> 80987 56789
          </a>
          <p style={{
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 6,
            fontSize: 13, color: '#9CA3AF', lineHeight: 1.5, margin: 0,
          }}>
            <MapPin size={14} style={{ flexShrink: 0, marginTop: 2 }} />
            3, 1st Floor, Philomena Hotel, Arulanandha Nagar Main Rd, Thanjavur – 613007
          </p>
        </div>

        {/* Back to Home */}
        <a
          href="/preconsultation/"
          onClick={goHome}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '13px 28px', borderRadius: 10,
            background: 'linear-gradient(135deg, #C81C2E, #9E0F20)',
            color: '#fff', fontFamily: 'Poppins, sans-serif',
            fontWeight: 700, fontSize: 14, textDecoration: 'none',
            boxShadow: '0 4px 18px rgba(200,28,46,0.3)',
          }}
        >
          <ArrowLeft size={16} /> Back to Home
        </a>
      </div>

      {/* Bottom credit */}
      <p style={{
        marginTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.5)',
        position: 'relative', zIndex: 1,
      }}>
        &#10084; Crafted by Ara Discover Technology
      </p>
    </div>
  )
}
