import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HiHome, HiChevronRight, HiCheckCircle, HiArrowRight, HiPhone } from 'react-icons/hi2'
import {
  HiCodeBracket, HiPaintBrush, HiBriefcase, HiArrowTrendingUp,
  HiServerStack, HiPhoto, HiCloudArrowUp, HiShieldCheck,
  HiLightBulb, HiLifebuoy, HiChartBar, HiMegaphone,
  HiCheckBadge, HiSparkles, HiBolt,
} from 'react-icons/hi2'
import { services } from '@/data/services'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HiCodeBracket, HiPaintBrush, HiBriefcase, HiArrowTrendingUp,
  HiServerStack, HiPhoto, HiCloudArrowUp, HiShieldCheck,
  HiLightBulb, HiLifebuoy, HiChartBar, HiMegaphone,
  HiCheckBadge, HiSparkles, HiBolt,
  HiCheckCircle,
}

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: `${service.title} | iTechLink IT Services & Solutions`,
    description: service.shortDescription,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const MainIcon = iconMap[service.icon] || HiCodeBracket

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-dark relative overflow-hidden pt-20">
        <div className="hero-mesh absolute inset-0" />
        <div className="grid-overlay absolute inset-0 opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <HiHome className="w-4 h-4" /> Home
            </Link>
            <HiChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <HiChevronRight className="w-4 h-4" />
            <span className="text-white/90">{service.title}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
              <MainIcon className="w-10 h-10 text-white" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">IT Service</span>
              </div>
              <h1 className="font-sora font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
                {service.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="relative z-10 h-16">
          <svg viewBox="0 0 1440 64" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-block mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Overview</span>
              </div>
              <div className="space-y-5">
                {service.fullDescription.split('\n\n').map((para, i) => (
                  <p key={i} className="text-neutral-600 text-lg leading-relaxed">
                    {para.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar: Quick info */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-7 sticky top-28">
                <h3 className="font-sora font-semibold text-neutral-900 mb-5">Ready to get started?</h3>
                <p className="text-neutral-500 text-sm mb-6">
                  Get a free consultation with our {service.title} specialists. No obligations.
                </p>
                <Button href="/contact" variant="primary" size="md" fullWidth>
                  Get a Free Consultation
                </Button>
                <a
                  href="tel:+2348123456789"
                  className="mt-3 flex items-center justify-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
                >
                  <HiPhone className="w-4 h-4" />
                  Call: +234 812 345 6789
                </a>

                {service.technologies.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-white border border-neutral-200 text-neutral-600 px-3 py-1 rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What's Included"
            subtitle={`Everything you need from our ${service.title} service — built to deliver real business results.`}
            label="Service Scope"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.features.map((feature, i) => {
              const FeatureIcon = iconMap[feature.icon] || HiCheckCircle
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <FeatureIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-sora font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Process"
            subtitle="A structured, transparent approach that keeps you informed and in control at every stage."
            label="How We Work"
            centered
          />

          {/* Desktop: horizontal stepper */}
          <div className="hidden lg:block mt-14">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 mx-16" />

              <div className={`grid gap-6`} style={{ gridTemplateColumns: `repeat(${service.process.length}, 1fr)` }}>
                {service.process.map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center relative">
                    {/* Step circle */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-sora font-bold text-lg mb-5 shadow-lg shadow-primary/30 z-10 relative">
                      {String(step.step).padStart(2, '0')}
                    </div>
                    <h3 className="font-sora font-semibold text-neutral-900 mb-2 text-sm">{step.title}</h3>
                    <p className="text-neutral-500 text-xs leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden mt-10 space-y-0">
            {service.process.map((step, i) => (
              <div key={i} className="flex gap-5 relative">
                {/* Timeline line */}
                {i < service.process.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-primary/10" />
                )}
                {/* Circle */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold font-sora shrink-0 shadow-md z-10">
                  {step.step}
                </div>
                <div className="pb-10">
                  <h3 className="font-sora font-semibold text-neutral-900 mb-1 mt-2">{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose iTechLink */}
      <section className="py-20 bg-primary-deeper relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose iTechLink"
            subtitle={`What makes our ${service.title} service stand apart from the competition.`}
            light
            label="Our Edge"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {service.differentiators.map((diff, i) => (
              <div
                key={i}
                className="bg-white/8 border border-white/15 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/12 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/30 border border-primary/40 flex items-center justify-center mb-5">
                  <HiCheckBadge className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-sora font-semibold text-white text-lg mb-3">{diff.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/15 rounded-3xl p-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MainIcon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-sora font-bold text-neutral-900 text-3xl md:text-4xl mb-4">
              Ready to get started with<br />
              <span className="text-gradient-primary">{service.title}?</span>
            </h2>
            <p className="text-neutral-500 text-lg mb-8 max-w-xl mx-auto">
              Book a free consultation with our specialists and get a tailored proposal within 48 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Get a Free Consultation <HiArrowRight className="w-5 h-5" />
              </Button>
              <a
                href="tel:+2348123456789"
                className="inline-flex items-center gap-2 border-2 border-neutral-200 text-neutral-700 hover:border-primary hover:text-primary transition-colors rounded-full px-8 py-4 text-base font-semibold"
              >
                <HiPhone className="w-5 h-5" />
                Call: +234 812 345 6789
              </a>
            </div>
          </div>

          {/* Back to services */}
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors text-sm font-medium"
            >
              <HiChevronRight className="w-4 h-4 rotate-180" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
