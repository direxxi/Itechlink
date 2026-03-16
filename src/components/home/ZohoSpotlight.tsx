'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import { SiZoho } from 'react-icons/si'
import ZohoAppIcon from '@/components/ui/ZohoAppIcon'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const spotlightApps = [
  { name: 'Zoho CRM',       slug: 'zoho-crm',       initial: 'C',  color: '#E42527' },
  { name: 'Zoho Books',     slug: 'zoho-books',     initial: 'B',  color: '#2B9E35' },
  { name: 'Zoho Inventory', slug: 'zoho-inventory', initial: 'I',  color: '#1B75BB' },
  { name: 'Zoho Desk',      slug: 'zoho-desk',      initial: 'D',  color: '#1F7DE5' },
  { name: 'Zoho People',    slug: 'zoho-people',    initial: 'P',  color: '#F4A623' },
  { name: 'Zoho Projects',  slug: 'zoho-projects',  initial: 'Pr', color: '#2DA94F' },
]

export default function ZohoSpotlight() {
  return (
    <section className="py-24 bg-primary-deeper relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Zoho badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <SiZoho className="w-5 h-5 text-[#E42527]" />
              <span className="text-white/90 text-sm font-semibold">Zoho Authorized Partner</span>
            </div>

            <SectionHeading
              title="Your One-Stop Business Suite"
              subtitle="Zoho's 45+ integrated applications cover every business function — from CRM and accounting to HR, support, and productivity. As an Authorized Zoho Partner, iTechLink configures, customises, and trains your team for maximum impact."
              light
              label="Zoho Solutions"
            />

            <div className="mt-8 space-y-4">
              {[
                'Tailored Zoho configuration for your exact workflows',
                'Full data migration from your existing tools',
                'Role-based training and comprehensive documentation',
                'Ongoing Zoho support and optimisation',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-white/75 text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/zoho" variant="primary" size="lg">
                Discover What Zoho Can Do <HiArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right: App Icons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110" />

              {/* Icons grid */}
              <div className="relative bg-white/8 backdrop-blur-sm border border-white/15 rounded-3xl p-8">
                <p className="text-white/40 text-xs uppercase tracking-widest text-center mb-6 font-semibold">
                  Popular Zoho Apps
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {spotlightApps.map((app, i) => (
                    <motion.div
                      key={app.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <ZohoAppIcon
                        slug={app.slug}
                        size="lg"
                      />
                      <span className="text-white/60 text-xs font-medium text-center leading-tight">
                        {app.name.replace('Zoho ', '')}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* More apps badge */}
                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <span className="text-white/40 text-xs">+ 15 more Zoho apps available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
