import type { Metadata } from 'next'
import Link from 'next/link'
import { HiHome, HiChevronRight, HiArrowRight } from 'react-icons/hi2'
import {
  HiLightBulb, HiShieldCheck, HiUserGroup, HiStar,
  HiCheckBadge, HiMapPin, HiEnvelope, HiPhone,
} from 'react-icons/hi2'
import { SiZoho } from 'react-icons/si'

function MicrosoftGridIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="11" height="11" fill="#F25022" />
      <rect x="13" y="0" width="11" height="11" fill="#7FBA00" />
      <rect x="0" y="13" width="11" height="11" fill="#00A4EF" />
      <rect x="13" y="13" width="11" height="11" fill="#FFB900" />
    </svg>
  )
}
import SectionHeading from '@/components/ui/SectionHeading'
import StatCounter from '@/components/ui/StatCounter'
import Button from '@/components/ui/Button'
import TeamSection from '@/components/about/TeamSection'

export const metadata: Metadata = {
  title: 'About Us | iTechLink IT Services & Solutions',
  description: 'Learn about iTechLink — Nigeria\'s trusted IT services partner. Certified by Microsoft, CompTIA, and Zoho, we bridge the technology gap for businesses across Africa.',
}

const values = [
  {
    icon: HiLightBulb,
    title: 'Innovation',
    description: 'We embrace emerging technologies and creative problem-solving to deliver forward-thinking solutions that keep our clients ahead of the curve.',
    color: 'bg-amber-50 text-amber-500',
  },
  {
    icon: HiShieldCheck,
    title: 'Integrity',
    description: 'Transparency and honesty guide every client engagement. We say what we mean, deliver what we promise, and your trust is our most valued asset.',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    icon: HiUserGroup,
    title: 'Client-Centricity',
    description: 'Your success is our measure of success. We listen, understand deeply, and deliver solutions tailored precisely to your unique business needs.',
    color: 'bg-emerald-50 text-emerald-500',
  },
  {
    icon: HiStar,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in every project, every interaction, and every deliverable — because good enough never is.',
    color: 'bg-purple-50 text-purple-500',
  },
]


export default function AboutPage() {
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
            <span className="text-white/90">About Us</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-5 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-white/90 text-sm font-medium">Established in Lagos, Nigeria</span>
            </div>
            <h1 className="font-sora font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              About iTechLink
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Bridging the technology gap for businesses across Africa and beyond — with certified expertise, genuine partnership, and measurable results.
            </p>
          </div>
        </div>

        <div className="relative z-10 h-16">
          <svg viewBox="0 0 1440 64" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">Our Story</span>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-neutral-950 leading-tight mb-6">
                Built to Empower Businesses
              </h2>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent mb-8" />

              <div className="space-y-5">
                <p className="text-neutral-600 leading-relaxed text-lg">
                  iTechLink was founded on a straightforward but powerful observation: too many Nigerian businesses were being left behind in the digital economy — not for lack of ambition, but for lack of access to the right technology partners. We set out to change that.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Starting as a lean team of certified IT professionals in Lagos, we built our reputation one successful project at a time — delivering the kind of enterprise-grade solutions previously only accessible to large corporations. Today, iTechLink serves 50+ businesses across multiple industries, from growing SMEs to established enterprises spanning logistics, retail, finance, and professional services.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Our capabilities have grown to encompass everything from custom web applications and Zoho ecosystem implementations to cybersecurity, cloud migration, and data analytics — but our core philosophy has never changed: understand the business first, then engineer the right technology solution.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="mt-10 space-y-5">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Our Mission</p>
                  <p className="text-neutral-700 font-medium italic">
                    "To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage."
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6 py-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Our Vision</p>
                  <p className="text-neutral-700 font-medium italic">
                    "To be Africa's most trusted IT services partner, transforming businesses through innovation and technology."
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Decorative visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary-dark to-primary-deeper rounded-3xl p-10 overflow-hidden">
                <div className="grid-overlay absolute inset-0 opacity-30" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full translate-y-1/3 -translate-x-1/4" />

                <div className="relative z-10 grid grid-cols-2 gap-6">
                  {[
                    { value: '5+', label: 'Years in Business', color: 'text-primary' },
                    { value: '50+', label: 'Clients Served', color: 'text-white' },
                    { value: '200+', label: 'Projects Delivered', color: 'text-primary' },
                    { value: '3', label: 'Certified Partners', color: 'text-accent' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center py-6 px-4 bg-white/8 rounded-2xl border border-white/10">
                      <div className={`font-sora font-black text-4xl ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-white/50 text-xs font-medium leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mt-6 text-center">
                  <p className="text-white/40 text-xs">Lagos, Nigeria · Serving clients across Africa</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-neutral-100 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                    <HiCheckBadge className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-neutral-900">99% Satisfaction</div>
                    <div className="text-xs text-neutral-500">Client success rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide every decision, every project, and every client relationship at iTechLink."
            centered
            label="What We Stand For"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-sora font-semibold text-xl text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Partnerships & Certifications"
            subtitle="Our certified partner status with three of the world's leading technology companies means our clients receive verified expertise, priority support, and best-practice solutions."
            centered
            label="Certified Partners"
          />

          <div className="mt-14 space-y-6">

            {/* Microsoft */}
            <div className="bg-neutral-50 rounded-2xl p-8 md:p-10 border border-neutral-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <MicrosoftGridIcon size={40} />
                </div>
                <div>
                  <div className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Microsoft Certified Partner
                  </div>
                  <h3 className="font-sora font-bold text-xl text-neutral-900 mb-3">Microsoft Certified Partner</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Our Microsoft Certified Partner status gives our clients access to Microsoft's latest tools, training resources, and support ecosystem. This certification validates our technical expertise in deploying and managing Microsoft solutions including Microsoft 365, Azure cloud services, Windows Server, and enterprise-grade security tools. Clients benefit from assured best practices, preferential support channels, and engineers trained to Microsoft's highest standards.
                  </p>
                </div>
              </div>
            </div>

            {/* CompTIA */}
            <div className="bg-neutral-50 rounded-2xl p-8 md:p-10 border border-neutral-100 hover:border-red-200 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                  <div className="bg-[#C8202F] text-white font-black text-sm rounded-lg px-3 py-1.5">CompTIA</div>
                </div>
                <div>
                  <div className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    CompTIA Authorized Partner
                  </div>
                  <h3 className="font-sora font-bold text-xl text-neutral-900 mb-3">CompTIA Authorized Partner</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    CompTIA authorization validates the technical expertise and commitment to industry standards upheld by our engineering team. Clients benefit from professionals trained and certified in cybersecurity, networking, IT fundamentals, and technical support — ensuring every engagement is grounded in internationally recognised standards. CompTIA certifications are among the most respected vendor-neutral credentials in the global IT industry, providing confidence in our technical capability across any technology stack.
                  </p>
                </div>
              </div>
            </div>

            {/* Zoho */}
            <div className="bg-neutral-50 rounded-2xl p-8 md:p-10 border border-neutral-100 hover:border-red-200 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                  <SiZoho size={40} color="#E42527" />
                </div>
                <div>
                  <div className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Zoho Authorized Partner
                  </div>
                  <h3 className="font-sora font-bold text-xl text-neutral-900 mb-3">Zoho Authorized Partner</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    As an Authorized Zoho Partner, iTechLink has demonstrated proficiency across the Zoho ecosystem and is certified to implement, customise, and optimise Zoho applications for businesses of all sizes. This partnership gives our clients access to preferential Zoho pricing, priority support escalation, early access to new features, and the assurance of working with a team whose Zoho competency has been independently verified. From Zoho CRM and Books to Zoho One enterprise deployments, our team has hands-on implementation experience across the full Zoho suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary-deeper relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { value: 5, suffix: '+', label: 'Years in Business' },
              { value: 200, suffix: '+', label: 'Projects Delivered' },
              { value: 50, suffix: '+', label: 'Clients Served' },
              { value: 15, suffix: '+', label: 'Team Members' },
            ].map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                light
              />
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
    </>
  )
}
