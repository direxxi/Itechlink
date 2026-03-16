'use client'

import { motion } from 'framer-motion'
import { HiArrowRight, HiPhone } from 'react-icons/hi2'
import Button from '@/components/ui/Button'

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/4" />
          <div className="absolute inset-0 grid-overlay opacity-20" />

          {/* Content */}
          <div className="relative z-10 text-center px-8 py-20 md:py-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Free Initial Consultation</span>
            </div>

            <h2 className="font-sora font-bold text-white leading-tight mb-5 text-3xl md:text-4xl lg:text-5xl">
              Ready to Transform{' '}
              <span className="text-primary" style={{ filter: 'brightness(2)' }}>Your Business?</span>
            </h2>

            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Schedule a free consultation and discover how iTechLink can accelerate your growth — no obligations, just expert advice.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="white" size="lg">
                Schedule a Free Consultation <HiArrowRight className="w-5 h-5" />
              </Button>
              <a
                href="tel:+2348123456789"
                className="inline-flex items-center gap-2.5 border-2 border-white/40 text-white hover:bg-white/10 transition-colors rounded-full px-8 py-4 text-lg font-semibold"
              >
                <HiPhone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>

            {/* Trust note */}
            <p className="text-white/40 text-sm mt-8">
              No contracts required • Respond within 24 hours • Lagos, Nigeria
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
