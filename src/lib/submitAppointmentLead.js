const APPOINTMENT_API_URL = 'https://adgrohairgloskinthanjavur.com/api/mail.php'
const CLINIC_EMAIL = 'grohairgloskintnj@gmail.com'

function getAppointmentTimestamp() {
  const now = new Date()

  return {
    date: now.toISOString().slice(0, 10),
    time: new Intl.DateTimeFormat('en-IN', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(now),
  }
}

export async function submitAppointmentLead({ name, phone, concern, source = 'Website' }) {
  const { date, time } = getAppointmentTimestamp()
  const treatment = concern || 'Hair Treatment'
  const payload = {
    name: name.trim(),
    email: CLINIC_EMAIL,
    recipientEmail: CLINIC_EMAIL,
    phone: phone.replace(/\D/g, ''),
    date,
    time,
    treatment,
    message: `Need consultation for ${treatment.toLowerCase()}`,
    source,
  }

  const response = await fetch(APPOINTMENT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  let result

  try {
    result = await response.json()
  } catch {}

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || 'Appointment submission failed')
  }

  return result
}
