import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  HiHome, HiChevronRight, HiArrowRight,
  HiExclamationTriangle, HiCheckCircle, HiChatBubbleLeftEllipsis,
  HiStar,
} from 'react-icons/hi2'
import { caseStudies } from '@/data/case-studies'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import StatCounter from '@/components/ui/StatCounter'
import CTABanner from '@/components/home/CTABanner'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (!cs) return { title: 'Case Study Not Found' }
  return {
    title: `${cs.client} — ${cs.title} | iTechLink`,
    description: `How iTechLink helped ${cs.client}: ${cs.challenge.slice(0, 150)}...`,
  }
}

function parseMetricValue(metric: string): number {
  const cleaned = metric.replace(/[^0-9.]/g, '')
  return parseFloat(cleaned) || 0
}

function getMetricSuffix(metric: string): string {
  if (metric.includes('%')) return '%'
  if (metric.includes('+')) return '+'
  if (metric.includes('x')) return 'x'
  return ''
}

function getMetricPrefix(metric: string): string {
  if (metric.includes('$')) return '$'
  if (metric.includes('₦')) return '₦'
  return ''
}

export default function CaseStudyDetailPage({ params }: Props) {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (!cs) notFound()

  // Find other case studies for navigation
  const others = caseStudies.filter((c) => c.slug !== cs.slug)

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-dark relative overflow-hidden pt-20">
        <div className="hero-mesh absolute inset-0" />
        <div className="grid-overlay absolute inset-0 opacity-20" />
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: `radial-gradient(ellipse at 70% 50%, ${cs.bannerColor}80 0%, transparent 60%)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <HiHome className="w-4 h-4" /> Home
            </Link>
            <HiChevronRight className="w-4 h-4" />
            <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            <HiChevronRight className="w-4 h-4" />
            <span className="text-white/90">{cs.client}</span>
          </div>

          {/* Industry badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5 text-white text-sm font-semibold"
            style={{ backgroundColor: `${cs.bannerColor}30`, border: `1px solid ${cs.bannerColor}50` }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: cs.bannerColor }}
            />
            {cs.industry}
          </div>

          <h1 className="font-sora font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 max-w-4xl">
            {cs.title}
          </h1>
          <p className="text-white/60 text-xl font-medium">{cs.client}</p>
        </div>

        <div className="relative z-10 h-16">
          <svg viewBox="0 0 1440 64" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Challenge */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <HiExclamationTriangle className="w-5 h-5 text-red-500" />
                </div>
                <h2 className="font-sora font-bold text-xl text-neutral-900">The Challenge</h2>
              </div>
              <p className="text-neutral-600 leading-relaxed">{cs.challenge}</p>
            </div>

            {/* Solution */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <HiCheckCircle className="w-5 h-5 text-emerald-500" />
                </div>
                <h2 className="font-sora font-bold text-xl text-neutral-900">Our Solution</h2>
              </div>
              <p className="text-neutral-600 leading-relaxed">{cs.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Results"
            subtitle={`Measurable outcomes delivered for ${cs.client} — results that continue to compound over time.`}
            centered
            label="Impact"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {cs.results.map((result, i) => {
              const numericValue = parseMetricValue(result.metric)
              const suffix = getMetricSuffix(result.metric)
              const prefix = getMetricPrefix(result.metric)
              const isNumeric = numericValue > 0

              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  style={{ borderTop: `3px solid ${cs.bannerColor}` }}
                >
                  {isNumeric ? (
                    <StatCounter
                      value={numericValue}
                      suffix={suffix}
                      prefix={prefix}
                      label=""
                    />
                  ) : (
                    <div
                      className="font-sora font-black text-4xl mb-2"
                      style={{ color: cs.bannerColor }}
                    >
                      {result.metric}
                    </div>
                  )}
                  <div className="font-sora font-semibold text-neutral-900 text-sm mb-2 mt-1">
                    {result.value}
                  </div>
                  <p className="text-neutral-500 text-xs leading-relaxed">{result.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-primary-deeper relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-8">
            <HiChatBubbleLeftEllipsis className="w-8 h-8 text-white" />
          </div>

          <div className="font-sora text-8xl text-white/10 font-black leading-none mb-4 select-none">"</div>

          <blockquote className="text-white text-xl md:text-2xl leading-relaxed font-medium italic mb-8 -mt-8">
            {cs.testimonial.quote}
          </blockquote>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-5">
            {[1,2,3,4,5].map((s) => (
              <HiStar key={s} className="w-5 h-5 text-amber-400" />
            ))}
          </div>

          <div className="font-sora font-bold text-white text-lg">{cs.testimonial.author}</div>
          <div className="text-white/50 text-sm mt-1">{cs.testimonial.role} · {cs.client}</div>
        </div>
      </section>

      {/* Services Used */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">Services Used</p>
            <h2 className="font-sora font-bold text-2xl text-neutral-900">What We Delivered</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {cs.servicesTags.map((tag) => (
              <Link
                key={tag}
                href={`/services/${tag}`}
                className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-200 hover:border-primary/30 hover:bg-primary/5 text-neutral-700 hover:text-primary px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 capitalize"
              >
                {tag.replace(/-/g, ' ')}
                <HiArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      {others.length > 0 && (
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="More Success Stories"
              centered
              label="Keep Reading"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/case-studies/${other.slug}`}
                  className="group bg-white rounded-2xl p-8 border border-neutral-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex items-center gap-6"
                >
                  <div
                    className="w-14 h-14 rounded-xl shrink-0 flex items-center justify-center text-white font-sora font-black text-xl"
                    style={{ backgroundColor: other.bannerColor }}
                  >
                    {other.client.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full text-white mb-2 inline-block"
                      style={{ backgroundColor: other.bannerColor }}
                    >
                      {other.industry}
                    </span>
                    <h3 className="font-sora font-semibold text-neutral-900 group-hover:text-primary transition-colors leading-snug text-sm">
                      {other.title}
                    </h3>
                  </div>
                  <HiArrowRight className="w-5 h-5 text-neutral-300 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/case-studies" className="text-primary font-semibold hover:text-primary-dark transition-colors text-sm inline-flex items-center gap-2">
                <HiChevronRight className="w-4 h-4 rotate-180" />
                Back to All Case Studies
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Achieve Similar Results CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/15 rounded-3xl p-12">
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              Achieve Similar Results
            </h2>
            <p className="text-neutral-500 text-lg mb-8 max-w-xl mx-auto">
              Ready to write your own success story? Schedule a free consultation and let's discuss what's possible for your business.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start Your Transformation <HiArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
