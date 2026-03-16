'use client'

import { motion } from 'framer-motion'
import { HiCheckBadge, HiClock, HiTrophy } from 'react-icons/hi2'
import StatCounter from '@/components/ui/StatCounter'
import SectionHeading from '@/components/ui/SectionHeading'

const badges = [
  { icon: HiCheckBadge, text: 'Certified Professionals' },
  { icon: HiClock, text: '24/7 Support Available' },
  { icon: HiTrophy, text: 'Proven Track Record' },
]

export default function WhyiTechLink() {
  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/3 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: 50, suffix: '+', label: 'Clients Served' },
                { value: 200, suffix: '+', label: 'Projects Delivered' },
                { value: 15, suffix: '+', label: 'Zoho Implementations' },
                { value: 99, suffix: '%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 text-center relative overflow-hidden group hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  {/* Subtle top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <StatCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <SectionHeading
              title="Why Businesses Choose iTechLink"
              label="Our Advantage"
            />

            <div className="space-y-5 mt-6">
              <p className="text-neutral-600 leading-relaxed">
                Founded on the belief that every business — regardless of size — deserves access to enterprise-grade technology, iTechLink has grown to become one of Nigeria's most trusted IT services partners. Our team of certified professionals brings deep technical expertise across cloud, security, enterprise software, and digital transformation.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We don't just deliver technology — we deliver outcomes. Every engagement starts with understanding your business goals and ends only when those goals are measurably achieved. From a small Zoho CRM setup to a full digital transformation programme, our approach remains the same: partnership, precision, and performance.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 bg-white border border-neutral-200 rounded-full px-4 py-2.5 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-neutral-700">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
