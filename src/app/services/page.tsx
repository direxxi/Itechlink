import type { Metadata } from 'next'
import Link from 'next/link'
import { HiHome, HiChevronRight } from 'react-icons/hi2'
import { services } from '@/data/services'
import ServiceCard from '@/components/services/ServiceCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'IT Services | iTechLink IT Services & Solutions',
  description: 'Explore iTechLink\'s comprehensive range of 12 IT services — from web design and Zoho implementation to cybersecurity, cloud solutions, and managed IT support.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-dark relative overflow-hidden pt-20">
        <div className="hero-mesh absolute inset-0" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <HiHome className="w-4 h-4" /> Home
            </Link>
            <HiChevronRight className="w-4 h-4" />
            <span className="text-white/90">Services</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-5 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-white/90 text-sm font-medium">12 Specialist Services</span>
            </div>
            <h1 className="font-sora font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              End-to-end IT solutions engineered to accelerate your business growth, secure your operations, and drive measurable digital transformation.
            </p>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="relative z-10 h-16">
          <svg viewBox="0 0 1440 64" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={service.icon}
                index={i}
              />
            ))}
          </div>

          {/* Bottom note */}
          <div className="text-center mt-14 py-10 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50">
            <p className="text-neutral-600 text-lg font-medium mb-2">Can't find exactly what you need?</p>
            <p className="text-neutral-500 text-sm mb-6">We offer custom IT solutions tailored to your unique business requirements.</p>
            <Button href="/contact" variant="primary" size="md">
              Discuss Your Requirements
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
