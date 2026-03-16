import type { Metadata } from 'next'
import Link from 'next/link'
import { HiHome, HiChevronRight } from 'react-icons/hi2'
import { caseStudies } from '@/data/case-studies'
import CaseStudyCard from '@/components/case-studies/CaseStudyCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Case Studies | iTechLink IT Services & Solutions',
  description: 'Explore real iTechLink success stories — from Zoho implementations to IT infrastructure overhauls and SEO-driven growth. Real clients, real results.',
}

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Businesses Transformed' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Industries Served' },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-dark relative overflow-hidden pt-20">
        <div className="hero-mesh absolute inset-0" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <HiHome className="w-4 h-4" /> Home
            </Link>
            <HiChevronRight className="w-4 h-4" />
            <span className="text-white/90">Case Studies</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-5 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-white/90 text-sm font-medium">Real Results, Real Businesses</span>
            </div>
            <h1 className="font-sora font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Case Studies
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              See exactly how iTechLink delivers measurable impact — from Zoho implementations to complete digital transformations.
            </p>
          </div>
        </div>

        {/* Stats bar inside hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 py-5 text-center">
                <div className="font-sora font-black text-3xl text-white mb-1">{stat.value}</div>
                <div className="text-white/50 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 h-16">
          <svg viewBox="0 0 1440 64" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Client Success Stories"
            subtitle="Each engagement is unique — but the outcome is always the same: measurable, sustainable business improvement."
            centered
            label="Our Work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} index={i} />
            ))}
          </div>

          {/* Have a project CTA */}
          <div className="mt-16 text-center py-12 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50">
            <p className="text-neutral-600 text-lg font-medium mb-2">Have a project in mind?</p>
            <p className="text-neutral-500 text-sm mb-6 max-w-md mx-auto">
              Join the 50+ businesses that have trusted iTechLink to deliver real technology results.
            </p>
            <Button href="/contact" variant="primary" size="md">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
