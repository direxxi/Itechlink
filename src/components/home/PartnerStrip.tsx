'use client'

import { motion } from 'framer-motion'
import PartnerLogo from '@/components/ui/PartnerLogo'

export default function PartnerStrip() {
  return (
    <section className="py-20 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-12"
        >
          Certified & Trusted By Industry Leaders
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 items-center">
          {(['microsoft', 'comptia', 'zoho'] as const).map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex justify-center"
            >
              <PartnerLogo
                partner={partner}
                showLabel
                size="lg"
                colored={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="section-divider mt-14"
        />
      </div>
    </section>
  )
}
