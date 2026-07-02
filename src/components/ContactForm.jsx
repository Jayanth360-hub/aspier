import { useState } from 'react'

const countryCodes = ['+91', '+1', '+44', '+61', '+65', '+971', '+966', '+880', '+94']
const courseOptions = [
  'MSc in Clinical Embryology & Pre-Implantation Genetics',
  'Certificate Course in Clinical Embryology',
  'Certificate Course in Andrology',
  'Vitrification Course',
  'General Enquiry',
]

const inputStyle = {
  width: '100%',
  border: '1.5px solid #DFF0F5',
  background: '#fff',
  padding: '10px 16px',
  color: '#1C2B3A',
  borderRadius: '10px',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function ContactForm({ id = 'enquiry-form' }) {
  const [values, setValues] = useState({
    name: '', email: '', code: '+91', phone: '', course: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!values.name.trim()) e.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Enter a valid email address.'
    if (!/^\d{6,12}$/.test(values.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid phone number.'
    if (!values.course) e.course = 'Please select a course.'
    if (!values.message.trim()) e.message = 'Tell us a little about your enquiry.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div id={id} className="p-8 text-center rounded-2xl" style={{ background: '#EAF9FC', border: '1.5px solid #1EB8D0' }}>
        <div className="text-[0.72rem] font-bold tracking-widest uppercase mb-2" style={{ color: '#1590A8' }}>Enquiry received</div>
        <p style={{ color: '#3A5068' }}>
          Thank you, {values.name.split(' ')[0]}. Our admissions team will get back to you within 1–2
          business days. For urgent queries, WhatsApp us at{' '}
          <a href="https://wa.me/919980061456" style={{ color: '#1590A8', textDecoration: 'underline' }}>
            +91 99800 61456
          </a>.
        </p>
      </div>
    )
  }

  return (
    <form id={id} onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label className="block mb-2 text-[0.72rem] font-bold tracking-wide uppercase" style={{ color: '#3A5068' }}>Full name</label>
        <input type="text" value={values.name} onChange={update('name')} style={inputStyle} placeholder="Your full name"
          onFocus={e => e.target.style.borderColor = '#1EB8D0'} onBlur={e => e.target.style.borderColor = '#DFF0F5'} />
        {errors.name && <p className="text-xs text-red-600 mt-1.5">{errors.name}</p>}
      </div>
      <div>
        <label className="block mb-2 text-[0.72rem] font-bold tracking-wide uppercase" style={{ color: '#3A5068' }}>Email address</label>
        <input type="email" value={values.email} onChange={update('email')} style={inputStyle} placeholder="you@example.com"
          onFocus={e => e.target.style.borderColor = '#1EB8D0'} onBlur={e => e.target.style.borderColor = '#DFF0F5'} />
        {errors.email && <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>}
      </div>
      <div className="grid grid-cols-[110px_1fr] gap-3">
        <div>
          <label className="block mb-2 text-[0.72rem] font-bold tracking-wide uppercase" style={{ color: '#3A5068' }}>Code</label>
          <select value={values.code} onChange={update('code')} style={{ ...inputStyle, padding: '10px 12px' }}>
            {countryCodes.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-[0.72rem] font-bold tracking-wide uppercase" style={{ color: '#3A5068' }}>Phone number</label>
          <input type="tel" value={values.phone} onChange={update('phone')} style={inputStyle} placeholder="98765 43210"
            onFocus={e => e.target.style.borderColor = '#1EB8D0'} onBlur={e => e.target.style.borderColor = '#DFF0F5'} />
        </div>
      </div>
      {errors.phone && <p className="text-xs text-red-600 -mt-3">{errors.phone}</p>}
      <div>
        <label className="block mb-2 text-[0.72rem] font-bold tracking-wide uppercase" style={{ color: '#3A5068' }}>Course of interest</label>
        <select value={values.course} onChange={update('course')} style={{ ...inputStyle, padding: '10px 16px' }}>
          <option value="">Select a course</option>
          {courseOptions.map((c) => (<option key={c} value={c}>{c}</option>))}
        </select>
        {errors.course && <p className="text-xs text-red-600 mt-1.5">{errors.course}</p>}
      </div>
      <div>
        <label className="block mb-2 text-[0.72rem] font-bold tracking-wide uppercase" style={{ color: '#3A5068' }}>Message</label>
        <textarea rows={4} value={values.message} onChange={update('message')} style={{ ...inputStyle, resize: 'none' }}
          placeholder="Tell us about your background and what you'd like to know"
          onFocus={e => e.target.style.borderColor = '#1EB8D0'} onBlur={e => e.target.style.borderColor = '#DFF0F5'} />
        {errors.message && <p className="text-xs text-red-600 mt-1.5">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 font-bold text-[0.875rem] rounded-xl transition-all duration-300"
        style={{ background: 'linear-gradient(135deg, #1EB8D0, #1590A8)', color: '#fff', boxShadow: '0 6px 20px rgba(30,184,208,0.3)' }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 28px rgba(30,184,208,0.45)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,184,208,0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
      >
        Submit enquiry →
      </button>
    </form>
  )
}
