'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiPlay } from 'react-icons/hi2'
import { HiShieldCheck, HiBuildingOffice2, HiStar } from 'react-icons/hi2'
import Button from '@/components/ui/Button'

const floatingShapes = [
  { size: 80, top: '12%', left: '6%', delay: 0, duration: 7, opacity: 0.06 },
  { size: 50, top: '65%', left: '3%', delay: 1.5, duration: 9, opacity: 0.08 },
  { size: 120, top: '20%', right: '5%', delay: 0.8, duration: 8, opacity: 0.05 },
  { size: 60, top: '70%', right: '8%', delay: 2, duration: 6, opacity: 0.07 },
  { size: 40, top: '40%', left: '18%', delay: 1, duration: 10, opacity: 0.06 },
  { size: 90, top: '50%', right: '20%', delay: 2.5, duration: 7.5, opacity: 0.05 },
]

const trustBadges = [
  { icon: HiShieldCheck, text: 'Certified Partners' },
  { icon: HiBuildingOffice2, text: '50+ Businesses Served' },
  { icon: HiStar, text: '99% Client Satisfaction' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-dark overflow-hidden">
      {/* Animated mesh background */}
      <div className="hero-mesh absolute inset-0 z-0" />

      {/* Grid overlay */}
      <div className="grid-overlay absolute inset-0 z-0" />

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: (shape as any).right,
            opacity: shape.opacity,
          }}
          animate={{
            y: [0, -24, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Your Trusted Technology Partner in Africa</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sora font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
          >
            Transforming Businesses{' '}
            <span className="relative">
              <span className="text-primary">Through Intelligent</span>
            </span>
            {' '}Technology
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            iTechLink delivers enterprise-grade IT solutions, Zoho implementations, and digital transformation services trusted by businesses across Africa and beyond.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button href="/contact" variant="primary" size="lg">
              Get Started <HiArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              Explore Services
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.56 }}
            className="flex flex-wrap gap-6"
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-white/60 text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating stat cards — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 space-y-4"
        >
          {[
            { label: 'Years Experience', value: '5+', color: 'text-primary' },
            { label: 'Projects Delivered', value: '200+', color: 'text-white' },
            { label: 'Zoho Implementations', value: '15+', color: 'text-accent' },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-4 min-w-[160px]"
            >
              <div className={`font-sora font-bold text-3xl ${color} mb-1`}>{value}</div>
              <div className="text-white/50 text-xs font-medium">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent z-10" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
