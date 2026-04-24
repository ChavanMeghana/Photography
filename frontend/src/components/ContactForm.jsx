import { useState } from 'react'
import { motion } from 'framer-motion'

function FloatField({ label, name, value, onChange, type = 'text', required, children }) {
  return (
    <div className="field-float">
      {children || (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder=" "
          autoComplete="off"
        />
      )}
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState({
    names: '', email: '', date: '', venue: '', guests: '', vision: '',
  })
  const [status, setStatus] = useState(null)

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1700))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center py-16 gap-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="w-14 h-14 border border-gold-400/50 rounded-full flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 className="font-serif text-2xl font-light text-warm-800">Thank you for reaching out</h3>
        <p className="font-sans text-sm text-warm-500 leading-relaxed max-w-sm">
          I've received your inquiry and will be in touch within 48 hours.
          I look forward to hearing about your love story.
        </p>
        <p className="italic-serif text-warm-400 text-sm">— Elena</p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FloatField label="Your Names" name="names" value={form.names} onChange={set('names')} required />
        <FloatField label="Email Address" name="email" type="email" value={form.email} onChange={set('email')} required />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FloatField label="Wedding Date" name="date" value={form.date} onChange={set('date')} />
        <FloatField label="Estimated Guests" name="guests" value={form.guests} onChange={set('guests')} />
      </div>

      <FloatField label="Venue & Location" name="venue" value={form.venue} onChange={set('venue')} required />

      <div className="field-float">
        <textarea
          name="vision"
          id="vision"
          value={form.vision}
          onChange={set('vision')}
          rows={5}
          placeholder=" "
        />
        <label htmlFor="vision">Tell Me About Your Vision</label>
      </div>

      <div className="pt-2">
        <motion.button
          type="submit"
          disabled={status === 'sending'}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="btn-gold w-full sm:w-auto justify-center"
        >
          {status === 'sending' ? (
            <span className="flex items-center gap-3">
              <motion.span
                className="block w-4 h-4 rounded-full border-2 border-ivory-200/30 border-t-ivory-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
              />
              Sending…
            </span>
          ) : 'Send My Inquiry'}
        </motion.button>
        <p className="font-sans text-xs text-warm-400 mt-4 leading-relaxed">
          I respond to all inquiries personally within 48 hours.
        </p>
      </div>
    </motion.form>
  )
}
