'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiArrowLeft, HiCheckCircle, HiSparkles } from 'react-icons/hi2'
import ZohoAppIcon from '@/components/ui/ZohoAppIcon'
import Button from '@/components/ui/Button'

type Answer = string | null

interface Question {
  id: string
  question: string
  options: { value: string; label: string; emoji: string }[]
}

const questions: Question[] = [
  {
    id: 'size',
    question: 'How large is your business?',
    options: [
      { value: 'solo', label: 'Solo / Freelancer', emoji: '👤' },
      { value: 'small', label: '2–20 Employees', emoji: '🤝' },
      { value: 'medium', label: '21–100 Employees', emoji: '🏢' },
      { value: 'large', label: '100+ Employees', emoji: '🏛️' },
    ],
  },
  {
    id: 'priority',
    question: 'What\'s your biggest operational challenge right now?',
    options: [
      { value: 'sales', label: 'Managing leads & sales pipeline', emoji: '📈' },
      { value: 'finance', label: 'Invoicing, expenses & accounting', emoji: '💰' },
      { value: 'support', label: 'Customer support & communication', emoji: '📬' },
      { value: 'ops', label: 'Team, HR & project management', emoji: '⚙️' },
    ],
  },
  {
    id: 'goal',
    question: 'What outcome matters most to you?',
    options: [
      { value: 'automate', label: 'Automate repetitive work', emoji: '🤖' },
      { value: 'visibility', label: 'Better data & reporting', emoji: '📊' },
      { value: 'scale', label: 'Scale without adding headcount', emoji: '🚀' },
      { value: 'integrate', label: 'Connect existing tools', emoji: '🔗' },
    ],
  },
]

interface Recommendation {
  name: string
  slug: string
  color: string
  initial: string
  reason: string
}

function getRecommendations(answers: Record<string, string>): Recommendation[] {
  const recs: Recommendation[] = []
  const { priority, goal, size } = answers

  if (priority === 'sales') {
    recs.push({ name: 'Zoho CRM', slug: 'zoho-crm', color: '#E42527', initial: 'C', reason: 'Manage your entire sales pipeline, contacts, and deal stages in one place.' })
    recs.push({ name: 'Zoho Campaigns', slug: 'zoho-campaigns', color: '#1B75BB', initial: 'Ca', reason: 'Run targeted email & SMS campaigns to nurture leads automatically.' })
  }
  if (priority === 'finance') {
    recs.push({ name: 'Zoho Books', slug: 'zoho-books', color: '#2B9E35', initial: 'B', reason: 'Full accounting, invoicing, expense tracking, and tax compliance built in.' })
    recs.push({ name: 'Zoho Inventory', slug: 'zoho-inventory', color: '#1B75BB', initial: 'I', reason: 'Manage stock, orders, and suppliers seamlessly linked to your accounts.' })
  }
  if (priority === 'support') {
    recs.push({ name: 'Zoho Desk', slug: 'zoho-desk', color: '#1F7DE5', initial: 'D', reason: 'Centralise all customer tickets, chats, and emails with smart automation.' })
    recs.push({ name: 'Zoho SalesIQ', slug: 'zoho-salesiq', color: '#E91E63', initial: 'S', reason: 'Live chat and visitor tracking on your website to convert visitors faster.' })
  }
  if (priority === 'ops') {
    recs.push({ name: 'Zoho People', slug: 'zoho-people', color: '#F4A623', initial: 'P', reason: 'HR management, leave tracking, performance reviews, and onboarding.' })
    recs.push({ name: 'Zoho Projects', slug: 'zoho-projects', color: '#2DA94F', initial: 'Pr', reason: 'Plan, track, and collaborate on projects with Gantt charts and timesheets.' })
  }

  if (goal === 'automate') {
    recs.push({ name: 'Zoho Flow', slug: 'zoho-crm', color: '#7B68EE', initial: 'F', reason: 'Automate workflows across Zoho and 600+ third-party apps without code.' })
  }
  if (goal === 'visibility') {
    recs.push({ name: 'Zoho Analytics', slug: 'zoho-analytics', color: '#FF5722', initial: 'An', reason: 'Build powerful dashboards and reports from all your business data in one place.' })
  }
  if (size === 'large' || size === 'medium') {
    recs.push({ name: 'Zoho One', slug: 'zoho-crm', color: '#E42527', initial: '1', reason: 'Get all 45+ Zoho apps under one subscription — the smart choice for your team size.' })
  }

  // Deduplicate and limit to 4
  const seen = new Set<string>()
  return recs.filter((r) => {
    if (seen.has(r.name)) return false
    seen.add(r.name)
    return true
  }).slice(0, 4)
}

export default function ZohoQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)

  const current = questions[step]
  const totalSteps = questions.length

  const handleAnswer = (value: string) => {
    const updated = { ...answers, [current.id]: value }
    setAnswers(updated)

    if (step + 1 < totalSteps) {
      setTimeout(() => setStep(step + 1), 200)
    } else {
      setTimeout(() => setDone(true), 200)
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers({})
    setDone(false)
  }

  const recommendations = done ? getRecommendations(answers) : []

  return (
    <section id="quiz" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/8 text-primary rounded-full px-5 py-2 mb-5">
            <HiSparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Zoho Recommendation Quiz</span>
          </div>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-neutral-900 mb-3">
            Which Zoho Apps Do You Need?
          </h2>
          <p className="text-neutral-500">Answer 3 quick questions and we'll show you the exact apps built for your business.</p>
        </motion.div>

        {/* Quiz card */}
        <div className="bg-white border border-neutral-100 shadow-xl shadow-neutral-100 rounded-3xl overflow-hidden">

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress bar */}
                <div className="h-1.5 bg-neutral-100">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary-dark transition-all duration-500"
                    style={{ width: `${((step) / totalSteps) * 100}%` }}
                  />
                </div>

                <div className="p-8 md:p-10">
                  {/* Step counter */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Question {step + 1} of {totalSteps}
                    </span>
                    {step > 0 && (
                      <button
                        onClick={() => setStep(step - 1)}
                        className="flex items-center gap-1.5 text-neutral-400 hover:text-primary text-sm font-medium transition-colors"
                      >
                        <HiArrowLeft className="w-4 h-4" /> Back
                      </button>
                    )}
                  </div>

                  {/* Question */}
                  <h3 className="font-sora font-bold text-2xl text-neutral-900 mb-8">
                    {current.question}
                  </h3>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.options.map((opt) => {
                      const isSelected = answers[current.id] === opt.value
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer(opt.value)}
                          className={`
                            flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 group
                            ${isSelected
                              ? 'border-primary bg-primary/5 shadow-md shadow-primary/10'
                              : 'border-neutral-100 hover:border-primary/30 hover:bg-neutral-50'
                            }
                          `}
                        >
                          <span className="text-2xl">{opt.emoji}</span>
                          <span className={`font-semibold text-sm ${isSelected ? 'text-primary-dark' : 'text-neutral-700'}`}>
                            {opt.label}
                          </span>
                          {isSelected && (
                            <HiCheckCircle className="w-4 h-4 text-primary ml-auto shrink-0" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Full progress */}
                <div className="h-1.5 bg-gradient-to-r from-primary to-emerald-400" />

                <div className="p-8 md:p-10">
                  <div className="text-center mb-8">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                      <HiCheckCircle className="w-7 h-7 text-emerald-500" />
                    </div>
                    <h3 className="font-sora font-bold text-2xl text-neutral-900 mb-2">Your Personalised Recommendations</h3>
                    <p className="text-neutral-500 text-sm">Based on your answers, here's what we'd implement for you:</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {recommendations.map((rec, i) => (
                      <motion.div
                        key={rec.name}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: i * 0.1 }}
                        className="flex items-start gap-4 bg-neutral-50 border border-neutral-100 rounded-2xl p-5"
                      >
                        <ZohoAppIcon slug={rec.slug} size="md" />
                        <div>
                          <div className="font-sora font-bold text-neutral-900 mb-1">{rec.name}</div>
                          <p className="text-neutral-500 text-sm leading-relaxed">{rec.reason}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button href="/contact" variant="primary" size="md" fullWidth>
                      Get These Apps Implemented <HiArrowRight className="w-4 h-4" />
                    </Button>
                    <button
                      onClick={reset}
                      className="flex-1 border-2 border-neutral-200 text-neutral-600 hover:border-primary hover:text-primary font-semibold rounded-full py-3 text-sm transition-all"
                    >
                      Retake Quiz
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
