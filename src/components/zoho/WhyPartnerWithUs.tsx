'use client'

import { motion } from 'framer-motion'
import { HiCheckBadge, HiCog6Tooth, HiLifebuoy, HiCurrencyDollar } from 'react-icons/hi2'
import { SiZoho } from 'react-icons/si'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const reasons = [
  {
    icon: HiCheckBadge,
    title: 'Authorized Zoho Partner',
    description: 'Our Zoho partnership isn\'t just a badge — it means our engineers have been independently certified, our practices have been verified, and our clients receive preferential support escalation and pricing from Zoho directly.',
    color: 'bg-red-50 text-red-500',
    border: 'hover:border-red-200',
  },
  {
    icon: HiCog6Tooth,
    title: 'End-to-End Implementation',
    description: 'We don\'t just hand over a login. We handle everything: needs analysis, configuration, data migration, workflow automation, user role setup, staff training, and post-launch support — so you go live with confidence.',
    color: 'bg-blue-50 text-blue-500',
    border: 'hover:border-blue-200',
  },
  {
    icon: HiLifebuoy,
    title: 'Ongoing Nigerian Support',
    description: 'Unlike dealing with international vendors, iTechLink offers local, timezone-aligned support. Whether you need a quick fix or a full system audit, our team is reachable, responsive, and understands the Nigerian business context.',
    color: 'bg-emerald-50 text-emerald-500',
    border: 'hover:border-emerald-200',
  },
  {
    icon: HiCurrencyDollar,
    title: 'Competitive Zoho Pricing',
    description: 'As an Authorized Partner, iTechLink can access and pass on preferential Zoho licensing rates, helping you maximise your ROI from day one. We\'ll also advise on the right plan so you only pay for what you need.',
    color: 'bg-amber-50 text-amber-500',
    border: 'hover:border-amber-200',
  },
]

const trustedBy = ['Optimal Techie', 'SwiftLogistics', 'AfroMarket', 'TechBridge', 'NovaSky HR', 'GreenGrow Farms']

export default function WhyPartnerWithUs() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Why Implement Zoho with iTechLink?"
            subtitle="Any Zoho partner can set up an account. We do something different — we make Zoho work the way your business actually works."
            centered
            label="Our Partnership Advantage"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 group ${reason.border}`}
              >
                <div className={`w-14 h-14 rounded-2xl ${reason.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-sora font-bold text-xl text-neutral-900 mb-3">{reason.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Trusted by strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-5">
            Businesses Already Running on Zoho with iTechLink
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustedBy.map((company) => (
              <div
                key={company}
                className="bg-white border border-neutral-200 text-neutral-600 text-sm font-semibold px-5 py-2 rounded-full"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button href="/contact" variant="primary" size="lg">
            Start Your Zoho Implementation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
