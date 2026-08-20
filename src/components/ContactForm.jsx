import { useState } from 'react'
import { motion } from 'framer-motion'

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.subject.trim()) next.subject = 'Subject is required.'
    if (!form.message.trim()) next.message = 'Message is required.'
    if (!form.email.trim()) {
      next.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email.'
    }
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setStatus('Message sent successfully. I will get back to you soon.')
      setForm(initialState)
      setTimeout(() => setStatus(''), 5000)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[32px] border border-slate-700/80 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {['name', 'email', 'subject'].map((field) => (
          <label key={field} className="space-y-2 text-sm text-slate-300">
            <span className="font-medium text-slate-100">{field.charAt(0).toUpperCase() + field.slice(1)}</span>
            <input
              name={field}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/80 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20"
              type={field === 'email' ? 'email' : 'text'}
            />
            {errors[field] && <p className="text-xs text-rose-300">{errors[field]}</p>}
          </label>
        ))}
      </div>
      <label className="space-y-2 text-sm text-slate-300">
        <span className="font-medium text-slate-100">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows="5"
          className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/80 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20"
        />
        {errors.message && <p className="text-xs text-rose-300">{errors.message}</p>}
      </label>
      {status && <p className="rounded-3xl bg-emerald-500/10 px-5 py-4 text-sm text-emerald-300">{status}</p>}
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-3xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Send Message
      </button>
    </motion.form>
  )
}
