'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiArrowRight, HiCheckCircle, HiExclamationCircle,
  HiUser, HiEnvelope, HiPhone, HiBriefcase,
  HiChatBubbleLeftEllipsis, HiChevronDown, HiXCircle,
} from 'react-icons/hi2'

const schema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service of interest'),
  budget: z.string().optional(),
  message: z.string().min(20, 'Please write at least 20 characters so we can help you better'),
})

type FormData = z.infer<typeof schema>

const services = [
  'Web Design & Development',
  'UI/UX Design',
  'Business Solutions (Zoho)',
  'Search Engine Optimisation',
  'IT Infrastructure & Procurement',
  'Graphics Design & Branding',
  'Cloud Solutions',
  'Cybersecurity',
  'IT Consulting',
  'Managed IT Support',
  'Data Analytics',
  'Digital Marketing',
  'Not Sure — I Need Advice',
]

const budgets = [
  'Under ₦500,000',
  '₦500,000 – ₦1,000,000',
  '₦1,000,000 – ₦3,000,000',
  '₦3,000,000 – ₦10,000,000',
  '₦10,000,000+',
  'Prefer not to say',
]

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-1.5 text-xs text-red-500 font-medium mt-1.5"
    >
      <HiExclamationCircle className="w-3.5 h-3.5 shrink-0" />
      {message}
    </motion.p>
  )
}

const inputBase = 'w-full px-4 py-3 rounded-xl border text-neutral-900 text-sm placeholder:text-neutral-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 bg-white'
const inputNormal = `${inputBase} border-neutral-200 focus:border-primary hover:border-neutral-300`
const inputError = `${inputBase} border-red-300 focus:border-red-400 focus:ring-red-100`

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (res.ok && result.success) {
        setStatus('success')
      } else {
        setErrorMessage(result.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 px-6"
      >
        <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
          <HiCheckCircle className="w-10 h-10 text-emerald-500" />
        </div>
        <h3 className="font-sora font-bold text-2xl text-neutral-900 mb-3">Message Sent!</h3>
        <p className="text-neutral-500 max-w-sm mb-8 leading-relaxed">
          Thank you for reaching out. A member of our team will get back to you within{' '}
          <strong className="text-neutral-700">24 hours</strong> — usually much sooner.
        </p>
        <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-5 text-sm text-neutral-600 max-w-xs w-full mb-6">
          <p className="font-semibold text-neutral-800 mb-1">In the meantime:</p>
          <p>Call or WhatsApp us at{' '}
            <a href="tel:+2348123456789" className="text-primary font-medium">+234 812 345 6789</a>
            {' '}for a faster response.
          </p>
        </div>
        <button
          onClick={() => { setStatus('idle'); reset() }}
          className="text-sm text-neutral-400 hover:text-primary transition-colors font-medium"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="flex items-center gap-1.5 text-sm font-semibold text-neutral-700 mb-1.5">
            <HiUser className="w-3.5 h-3.5 text-neutral-400" />First Name <span className="text-accent">*</span>
          </label>
          <input {...register('firstName')} placeholder="Adeyemi" className={errors.firstName ? inputError : inputNormal} />
          <FieldError message={errors.firstName?.message} />
        </div>
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-1.5 block">Last Name <span className="text-accent">*</span></label>
          <input {...register('lastName')} placeholder="Okafor" className={errors.lastName ? inputError : inputNormal} />
          <FieldError message={errors.lastName?.message} />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="flex items-center gap-1.5 text-sm font-semibold text-neutral-700 mb-1.5">
            <HiEnvelope className="w-3.5 h-3.5 text-neutral-400" />Email <span className="text-accent">*</span>
          </label>
          <input {...register('email')} type="email" placeholder="you@company.com" className={errors.email ? inputError : inputNormal} />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label className="flex items-center gap-1.5 text-sm font-semibold text-neutral-700 mb-1.5">
            <HiPhone className="w-3.5 h-3.5 text-neutral-400" />Phone Number
          </label>
          <input {...register('phone')} type="tel" placeholder="+234 800 000 0000" className={inputNormal} />
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="flex items-center gap-1.5 text-sm font-semibold text-neutral-700 mb-1.5">
          <HiBriefcase className="w-3.5 h-3.5 text-neutral-400" />Company / Organisation
        </label>
        <input {...register('company')} placeholder="Your Company Ltd." className={inputNormal} />
      </div>

      {/* Service + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-1.5 block">Service of Interest <span className="text-accent">*</span></label>
          <div className="relative">
            <select {...register('service')} defaultValue="" className={`${errors.service ? inputError : inputNormal} appearance-none pr-10`}>
              <option value="" disabled>Select a service...</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
          </div>
          <FieldError message={errors.service?.message} />
        </div>
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-1.5 block">Estimated Budget</label>
          <div className="relative">
            <select {...register('budget')} defaultValue="" className={`${inputNormal} appearance-none pr-10`}>
              <option value="" disabled>Select a range...</option>
              {budgets.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="flex items-center gap-1.5 text-sm font-semibold text-neutral-700 mb-1.5">
          <HiChatBubbleLeftEllipsis className="w-3.5 h-3.5 text-neutral-400" />Tell Us About Your Project <span className="text-accent">*</span>
        </label>
        <textarea {...register('message')} rows={5} placeholder="Describe what you're trying to achieve, your timeline, any specific requirements..." className={`${errors.message ? inputError : inputNormal} resize-none`} />
        <FieldError message={errors.message?.message} />
      </div>

      {/* API error banner */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4"
          >
            <HiXCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-700 text-sm">Submission failed</p>
              <p className="text-red-600 text-xs mt-0.5">{errorMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs text-neutral-400 leading-relaxed">
        By submitting this form you agree to iTechLink contacting you about your enquiry. We never share your information with third parties.
      </p>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white font-sora font-semibold rounded-full py-4 text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === 'loading' ? (
          <><svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>Sending...</>
        ) : (
          <>Send Message <HiArrowRight className="w-5 h-5" /></>
        )}
      </button>
    </form>
  )
}
