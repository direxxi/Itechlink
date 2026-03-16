'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown, HiCheckCircle, HiArrowRight, HiSparkles } from 'react-icons/hi2'
import { zohoApps, ZohoCategory } from '@/data/zoho-apps'
import ZohoAppIcon from '@/components/ui/ZohoAppIcon'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const categories: { label: string; value: ZohoCategory | 'All' }[] = [
  { label: 'All Apps', value: 'All' },
  { label: 'Sales & Marketing', value: 'Sales & Marketing' },
  { label: 'Finance', value: 'Finance' },
  { label: 'HR & Operations', value: 'HR & Operations' },
  { label: 'IT & Helpdesk', value: 'IT & Helpdesk' },
  { label: 'Productivity', value: 'Productivity' },
]

export default function AppExplorer() {
  const [activeCategory, setActiveCategory] = useState<ZohoCategory | 'All'>('All')
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)

  const filtered = activeCategory === 'All'
    ? zohoApps
    : zohoApps.filter((app) => app.category === activeCategory)

  const handleCardClick = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug)
  }

  return (
    <section id="app-explorer" className="py-24 bg-neutral-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Explore the Zoho Ecosystem"
            subtitle="Browse all 21 Zoho apps by category. Click any app to see features, pricing, and how iTechLink can set it up for you."
            centered
            label="App Explorer"
          />
        </motion.div>

        {/* Filter tabs — scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 mt-10 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value)
                setExpandedSlug(null)
              }}
              className={`
                shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200
                ${activeCategory === cat.value
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:border-primary/30 hover:text-primary'
                }
              `}
            >
              {cat.label}
              {cat.value !== 'All' && (
                <span className={`ml-2 text-xs ${activeCategory === cat.value ? 'opacity-70' : 'opacity-40'}`}>
                  ({zohoApps.filter(a => a.category === cat.value).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Apps grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
        >
          {filtered.map((app, i) => {
            const isExpanded = expandedSlug === app.slug
            return (
              <motion.div
                key={app.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`
                  bg-white border rounded-2xl overflow-hidden transition-all duration-300
                  ${isExpanded
                    ? 'border-primary/30 shadow-lg shadow-primary/8'
                    : 'border-neutral-100 hover:border-primary/20 hover:shadow-md'
                  }
                `}
              >
                {/* Card header — always visible */}
                <button
                  onClick={() => handleCardClick(app.slug)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <ZohoAppIcon slug={app.slug} size="md" />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-sora font-semibold text-neutral-900 text-sm">{app.name}</span>
                      {app.popular && (
                        <span className="text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <HiSparkles className="w-2.5 h-2.5" /> Popular
                        </span>
                      )}
                    </div>
                    <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2">{app.shortDescription}</p>
                  </div>

                  <HiChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : ''}`}
                  />
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-neutral-100 pt-4">
                        {/* Features */}
                        <div className="space-y-2 mb-4">
                          {app.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <HiCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-neutral-600 text-xs leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Best for + Pricing */}
                        <div className="bg-neutral-50 rounded-xl p-3 mb-4 space-y-2">
                          <div>
                            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Best for: </span>
                            <span className="text-xs text-neutral-600">{app.bestFor}</span>
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Pricing: </span>
                            <span className="text-xs font-semibold" style={{ color: app.color }}>{app.pricing}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <a
                          href="/contact"
                          className="w-full flex items-center justify-center gap-2 text-white text-xs font-semibold py-3 rounded-xl transition-all hover:opacity-90"
                          style={{ backgroundColor: app.color }}
                        >
                          <HiArrowRight className="w-3.5 h-3.5" />
                          Get This Set Up by iTechLink
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-500 text-sm mb-4">Not sure which apps you need? Take our quick quiz below.</p>
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Take the Zoho Recommendation Quiz <HiArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
