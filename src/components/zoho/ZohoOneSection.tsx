'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi2'
import ZohoAppIcon from '@/components/ui/ZohoAppIcon'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'

const constellationApps = [
  { slug: 'zoho-crm',      color: '#E42527', initial: 'C',  name: 'CRM',       angle: 0,   radius: 160 },
  { slug: 'zoho-books',    color: '#2B9E35', initial: 'B',  name: 'Books',     angle: 45,  radius: 160 },
  { slug: 'zoho-inventory',color: '#1B75BB', initial: 'I',  name: 'Inventory', angle: 90,  radius: 160 },
  { slug: 'zoho-desk',     color: '#1F7DE5', initial: 'D',  name: 'Desk',      angle: 135, radius: 160 },
  { slug: 'zoho-people',   color: '#F4A623', initial: 'P',  name: 'People',    angle: 180, radius: 160 },
  { slug: 'zoho-projects', color: '#2DA94F', initial: 'Pr', name: 'Projects',  angle: 225, radius: 160 },
  { slug: 'zoho-marketing-automation', color: '#E91E63', initial: 'M', name: 'Marketing', angle: 270, radius: 160 },
  { slug: 'zoho-analytics',color: '#FF5722', initial: 'An', name: 'Analytics', angle: 315, radius: 160 },
]

const benefits = [
  'One subscription covering 45+ applications',
  'Unlimited users — no per-seat pricing surprises',
  'Automatic access to every new Zoho app released',
  'Single sign-on across the entire suite',
  'Centralised admin and user management',
  'Built-in AI assistant (Zia) across all apps',
  'Significant cost savings vs. per-app licensing',
  'Priority support and dedicated account manager',
]

export default function ZohoOneSection() {
  return (
    <section className="py-24 bg-primary-deeper relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E42527]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Constellation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-8 rounded-full border border-white/8" />

              {/* Connecting spokes */}
              {constellationApps.map((app, i) => {
                const rad = (app.angle * Math.PI) / 180
                const cx = 50 + (app.radius / 3.84) * Math.cos(rad)
                const cy = 50 + (app.radius / 3.84) * Math.sin(rad)
                return (
                  <svg
                    key={i}
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <line
                      x1="50" y1="50"
                      x2={cx} y2={cy}
                      stroke="white"
                      strokeOpacity="0.08"
                      strokeWidth="0.3"
                    />
                  </svg>
                )
              })}

              {/* App icons on the ring */}
              {constellationApps.map((app, i) => {
                const rad = (app.angle * Math.PI) / 180
                const x = 50 + (app.radius / 3.84) * Math.cos(rad)
                const y = 50 + (app.radius / 3.84) * Math.sin(rad)
                return (
                  <motion.div
                    key={app.name}
                    className="absolute flex flex-col items-center gap-1"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4,
                      delay: i * 0.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <ZohoAppIcon slug={app.slug} size="xs" />
                    <span className="text-white/40 text-[9px] font-medium whitespace-nowrap hidden md:block">{app.name}</span>
                  </motion.div>
                )
              })}

              {/* Centre: Zoho One badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-24 h-24 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex flex-col items-center justify-center shadow-2xl"
                >
                  <span className="font-sora font-black text-white text-lg leading-none">Zoho</span>
                  <span className="text-[#E42527] font-sora font-bold text-sm">One</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-3 block">The Crown Jewel</span>
            <h2 className="font-sora font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
              Zoho One —<br />
              <span className="text-primary" style={{ filter: 'brightness(1.4)' }}>Everything, Unified</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-[#E42527] rounded-full mb-6" />
            <p className="text-white/65 leading-relaxed mb-8">
              Zoho One is the all-in-one business operating system — a single subscription that unlocks every application Zoho makes. Instead of managing 10+ separate tool subscriptions, your entire business runs on one integrated, intelligent platform at a fraction of the combined cost.
            </p>

            {/* Benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2">
                  <HiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-white/65 text-sm leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>

            <Button href="/contact" variant="primary" size="md">
              Ask About Zoho One Pricing <HiArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
