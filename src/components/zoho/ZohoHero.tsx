'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import { SiZoho } from 'react-icons/si'
import ZohoAppIcon from '@/components/ui/ZohoAppIcon'
import Button from '@/components/ui/Button'

const floatingApps = [
  { slug: 'zoho-crm',                  color: '#E42527', initial: 'C',  top: '15%', left: '5%',   size: 'md' as const, delay: 0 },
  { slug: 'zoho-books',                color: '#2B9E35', initial: 'B',  top: '70%', left: '8%',   size: 'sm' as const, delay: 1.2 },
  { slug: 'zoho-inventory',            color: '#1B75BB', initial: 'I',  top: '35%', left: '2%',   size: 'sm' as const, delay: 2.1 },
  { slug: 'zoho-desk',                 color: '#1F7DE5', initial: 'D',  top: '80%', left: '22%',  size: 'md' as const, delay: 0.7 },
  { slug: 'zoho-people',               color: '#F4A623', initial: 'P',  top: '10%', right: '8%',  size: 'sm' as const, delay: 1.5 },
  { slug: 'zoho-projects',             color: '#2DA94F', initial: 'Pr', top: '55%', right: '4%',  size: 'md' as const, delay: 0.4 },
  { slug: 'zoho-marketing-automation', color: '#E91E63', initial: 'M',  top: '25%', right: '18%', size: 'sm' as const, delay: 1.8 },
  { slug: 'zoho-analytics',            color: '#FF5722', initial: 'An', top: '75%', right: '15%', size: 'sm' as const, delay: 0.9 },
  { slug: 'zoho-creator',              color: '#7B68EE', initial: 'Cr', top: '45%', left: '14%',  size: 'xs' as const, delay: 2.5 },
  { slug: 'zoho-workdrive',            color: '#2196F3', initial: 'W',  top: '90%', right: '30%', size: 'xs' as const, delay: 1.1 },
]

export default function ZohoHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-dark overflow-hidden pt-20">
      {/* Background layers */}
      <div className="hero-mesh absolute inset-0 z-0" />
      <div className="grid-overlay absolute inset-0 z-0 opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#E42527]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

      {/* Floating app icons */}
      {floatingApps.map((app, i) => (
        <motion.div
          key={i}
          className="absolute z-10 opacity-20 hover:opacity-40 transition-opacity"
          style={{
            top: app.top,
            left: (app as any).left,
            right: (app as any).right,
          }}
          animate={{ y: [0, -16, 0], rotate: [0, 3, -3, 0] }}
          transition={{
            duration: 5 + i * 0.5,
            delay: app.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ZohoAppIcon slug={app.slug} size={app.size} />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-3xl mx-auto text-center">

          {/* Partner badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8"
          >
            <SiZoho className="w-5 h-5 text-[#E42527]" />
            <span className="text-white/90 text-sm font-semibold">Authorized Zoho Partner</span>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sora font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
          >
            Zoho: The Operating System{' '}
            <span className="text-primary" style={{ filter: 'brightness(1.5)' }}>
              for Your Business
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10"
          >
            As an Authorized Zoho Partner, iTechLink helps you harness the full power of Zoho's 45+ integrated business applications to streamline operations, boost sales, and scale efficiently.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              href="#app-explorer"
              variant="primary"
              size="lg"
            >
              Find Your Perfect Zoho Solution <HiArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Book a Free Consultation
            </Button>
          </motion.div>

          {/* Mini stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="flex flex-wrap justify-center gap-8 mt-16"
          >
            {[
              { value: '45+', label: 'Integrated Apps' },
              { value: '100M+', label: 'Users Worldwide' },
              { value: '15+', label: 'Implementations Done' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-sora font-black text-3xl text-white">{value}</div>
                <div className="text-white/40 text-xs font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-20">
        <svg viewBox="0 0 1440 80" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
