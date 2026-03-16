'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HiCodeBracket, HiPaintBrush, HiBriefcase, HiArrowTrendingUp,
  HiServerStack, HiPhoto, HiCloudArrowUp, HiShieldCheck,
  HiLightBulb, HiLifebuoy, HiChartBar, HiMegaphone,
  HiArrowRight
} from 'react-icons/hi2'
import { services } from '@/data/services'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HiCodeBracket, HiPaintBrush, HiBriefcase, HiArrowTrendingUp,
  HiServerStack, HiPhoto, HiCloudArrowUp, HiShieldCheck,
  HiLightBulb, HiLifebuoy, HiChartBar, HiMegaphone,
}

const cardColors = [
  'from-blue-500/10 to-cyan-500/10 border-blue-200/60',
  'from-purple-500/10 to-pink-500/10 border-purple-200/60',
  'from-emerald-500/10 to-teal-500/10 border-emerald-200/60',
  'from-orange-500/10 to-amber-500/10 border-orange-200/60',
  'from-slate-500/10 to-blue-500/10 border-slate-200/60',
  'from-rose-500/10 to-pink-500/10 border-rose-200/60',
]

const iconColors = [
  'text-blue-500', 'text-purple-500', 'text-emerald-500',
  'text-orange-500', 'text-slate-500', 'text-rose-500',
]

export default function ServicesGrid() {
  const displayServices = services.slice(0, 6)

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
            title="What We Do"
            subtitle="Comprehensive IT services engineered to accelerate your business growth and digital transformation."
            centered
            label="Our Services"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {displayServices.map((service, i) => {
            const Icon = iconMap[service.icon] || HiCodeBracket
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={`
                    group block bg-gradient-to-br ${cardColors[i]} 
                    border rounded-2xl p-8 h-full
                    transition-all duration-300
                    hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10
                    relative overflow-hidden
                  `}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Icon */}
                  <div className={`
                    w-14 h-14 rounded-xl bg-white shadow-sm 
                    flex items-center justify-center mb-5
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <Icon className={`w-7 h-7 ${iconColors[i]}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-sora font-semibold text-xl text-neutral-900 mb-3 group-hover:text-primary-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    Learn More
                    <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-500 mb-4">
            And 6 more services — from Cybersecurity to Data Analytics.
          </p>
          <Button href="/services" variant="secondary" size="md">
            View All 12 Services <HiArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
