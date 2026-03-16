'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiMagnifyingGlass, HiMap, HiCog6Tooth, HiDocumentText,
  HiUserGroup, HiRocketLaunch, HiLifebuoy,
} from 'react-icons/hi2'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Discovery & Needs Assessment',
    icon: HiMagnifyingGlass,
    color: 'from-blue-500 to-blue-600',
    duration: '1–2 days',
    description: 'We begin with a deep-dive consultation to fully understand your business processes, pain points, existing tools, and growth goals. This isn\'t a generic questionnaire — it\'s a working session that maps your actual operations.',
    deliverables: ['Business process mapping', 'Technology stack audit', 'Zoho app shortlist', 'Initial cost estimate'],
  },
  {
    number: '02',
    title: 'Solution Design & Proposal',
    icon: HiMap,
    color: 'from-purple-500 to-purple-600',
    duration: '2–3 days',
    description: 'Based on discovery, we design a comprehensive Zoho implementation blueprint — covering which apps you need, how they\'ll interconnect, user roles, and a phased rollout plan with realistic timelines and investment figures.',
    deliverables: ['App selection recommendation', 'System architecture diagram', 'Phased implementation plan', 'Detailed project proposal'],
  },
  {
    number: '03',
    title: 'Configuration & Customisation',
    icon: HiCog6Tooth,
    color: 'from-emerald-500 to-emerald-600',
    duration: '1–4 weeks',
    description: 'Our certified engineers configure each Zoho application to match your business logic — custom fields, pipelines, modules, views, automated workflows, integrations with existing tools, and role-based permissions for every team member.',
    deliverables: ['App configuration', 'Custom workflows & automations', 'Third-party integrations', 'Role & permission setup'],
  },
  {
    number: '04',
    title: 'Data Migration',
    icon: HiDocumentText,
    color: 'from-orange-500 to-amber-500',
    duration: '2–5 days',
    description: 'We carefully extract, clean, and migrate your existing data — contacts, invoices, inventory records, HR files — from spreadsheets or legacy systems into Zoho, ensuring data integrity is maintained throughout.',
    deliverables: ['Data extraction & cleaning', 'Structured import mapping', 'Integrity verification', 'Rollback plan'],
  },
  {
    number: '05',
    title: 'Testing & Quality Assurance',
    icon: HiUserGroup,
    color: 'from-teal-500 to-teal-600',
    duration: '3–7 days',
    description: 'Before going live, we run comprehensive tests covering all workflows, user journeys, automations, and integrations. We also run User Acceptance Testing (UAT) with your team to catch anything before launch.',
    deliverables: ['End-to-end workflow testing', 'User acceptance testing', 'Bug fixing & refinements', 'Go-live sign-off'],
  },
  {
    number: '06',
    title: 'Training & Onboarding',
    icon: HiRocketLaunch,
    color: 'from-rose-500 to-pink-600',
    duration: '1–3 days',
    description: 'We train your team with role-specific sessions — from admin-level system walkthroughs to end-user practical training. We provide written documentation and video guides your team can reference independently.',
    deliverables: ['Role-based training sessions', 'Admin handbook', 'End-user quick reference guides', 'Video walkthroughs'],
  },
  {
    number: '07',
    title: 'Go-Live & Ongoing Support',
    icon: HiLifebuoy,
    color: 'from-indigo-500 to-indigo-600',
    duration: 'Ongoing',
    description: 'Launch day and beyond. We monitor the system closely in the first weeks, respond immediately to any issues, and provide ongoing managed support — from routine updates to advanced customisations as your business grows.',
    deliverables: ['Managed launch support', 'First-month check-ins', 'Priority support channel', 'Continuous improvement'],
  },
]

export default function ZohoProcess() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Our Implementation Process"
            subtitle="A rigorous, transparent 7-step process that ensures your Zoho deployment goes live on time, on budget, and delivers from day one."
            centered
            label="How We Implement"
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: Step selector */}
          <div className="space-y-2">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isActive = activeStep === i
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className={`
                    w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200
                    ${isActive
                      ? 'bg-neutral-900 shadow-lg'
                      : 'bg-neutral-50 border border-neutral-100 hover:border-primary/20 hover:bg-neutral-100'
                    }
                  `}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-xs font-bold mb-0.5 ${isActive ? 'text-white/50' : 'text-neutral-400'}`}>
                      Step {step.number}
                    </div>
                    <div className={`font-sora font-semibold text-sm leading-snug ${isActive ? 'text-white' : 'text-neutral-700'}`}>
                      {step.title}
                    </div>
                  </div>
                  <div className={`ml-auto text-xs font-medium shrink-0 ${isActive ? 'text-white/40' : 'text-neutral-400'}`}>
                    {step.duration}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Detail panel */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-neutral-50 border border-neutral-100 rounded-3xl p-8 md:p-10 h-full"
            >
              {(() => {
                const step = steps[activeStep]
                const Icon = step.icon
                return (
                  <>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Step {step.number} · {step.duration}</div>
                        <h3 className="font-sora font-bold text-2xl text-neutral-900">{step.title}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed text-lg mb-8">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">What You Receive</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-neutral-100">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${step.color} shrink-0`} />
                            <span className="text-neutral-700 text-sm font-medium">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex items-center gap-2 mt-8 pt-6 border-t border-neutral-200">
                      {steps.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveStep(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activeStep ? 'w-8 bg-primary' : 'w-1.5 bg-neutral-300 hover:bg-neutral-400'
                          }`}
                        />
                      ))}
                      <span className="ml-auto text-xs text-neutral-400 font-medium">
                        {activeStep + 1} / {steps.length}
                      </span>
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
