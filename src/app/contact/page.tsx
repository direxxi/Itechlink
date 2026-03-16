import type { Metadata } from "next";
import Link from "next/link";
import {
  HiHome,
  HiChevronRight,
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiClock,
  HiChatBubbleLeftEllipsis,
  HiCheckCircle,
} from "react-icons/hi2";
import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us | iTechLink IT Services & Solutions",
  description:
    "Get in touch with iTechLink. Book a free IT consultation, request a quote, or ask about our Zoho partnership and IT services in Nigeria.",
};

const faqs = [
  {
    q: "How quickly can you start a project?",
    a: "For most projects we can begin within 1–2 weeks of signing. Urgent projects can often be expedited — let us know your timeline and we'll do our best.",
  },
  {
    q: "Do you work with businesses outside Lagos?",
    a: "Absolutely. iTechLink works with clients across Nigeria and internationally. Most of our work is delivered remotely, with on-site visits available for Lagos-based clients or where the project scope requires it.",
  },
  {
    q: "How much does a Zoho implementation cost?",
    a: "Costs vary based on the number of apps, customisation level, and data migration requirements. Entry-level single-app setups start from ₦300,000, while full Zoho One deployments are typically ₦1,500,000+. We always provide a detailed proposal before any commitment.",
  },
  {
    q: "Do you offer ongoing support after project completion?",
    a: "Yes — all projects include a post-launch support period. We also offer Managed IT Support and Zoho maintenance retainers for clients who want continuous optimisation.",
  },
  {
    q: "What do I need for the initial consultation?",
    a: "Nothing formal — just a general idea of your business and goals. We'll guide the conversation from there and ask the right questions.",
  },
];

export default function ContactPage() {
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
            <Link
              href="/"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <HiHome className="w-4 h-4" /> Home
            </Link>
            <HiChevronRight className="w-4 h-4" />
            <span className="text-white/90">Contact</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-5 py-2 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Free Consultation Available
              </span>
            </div>
            <h1 className="font-sora font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Let's Build Something
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Whether you need a quote, advice, or just want to explore what's
              possible — our team is ready. First consultation is always free.
            </p>
          </div>
        </div>

        {/* Trust strip */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex flex-wrap gap-6">
            {[
              "✓ Free initial consultation",
              "✓ Response within 24 hours",
              "✓ Detailed written proposal",
              "✓ No obligation to proceed",
            ].map((item) => (
              <span key={item} className="text-white/60 text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 h-16">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            className="absolute bottom-0 w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Main: form + sidebar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                  Get In Touch
                </span>
                <h2 className="font-sora font-bold text-3xl text-neutral-900 mb-3">
                  Contact Details
                </h2>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Reach us by phone, email, or WhatsApp. Lagos-based team,
                  serving clients across Nigeria and beyond.
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+2348123456789"
                className="flex items-center gap-4 bg-neutral-50 border border-neutral-100 rounded-2xl p-5 hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <HiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-0.5">
                    Phone
                  </p>
                  <p className="font-semibold text-neutral-900 text-sm">
                    +234 814 936 0338
                  </p>
                  <p className="font-semibold text-neutral-900 text-sm">
                    +234 906 813 9498
                  </p>
                  <p className="text-xs text-neutral-400">
                    Mon–Fri, 8am–5pm WAT
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@itechlink.com.ng"
                className="flex items-center gap-4 bg-neutral-50 border border-neutral-100 rounded-2xl p-5 hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <HiEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-0.5">
                    Email
                  </p>
                  <p className="font-semibold text-neutral-900 text-sm">
                    info@itechlink.com.ng
                  </p>
                  <p className="font-semibold text-neutral-900 text-sm">
                    support@itechlink.com.ng
                  </p>
                  <p className="text-xs text-neutral-400">
                    We reply within 24 hours
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348149360338"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-neutral-50 border border-neutral-100 rounded-2xl p-5 hover:border-emerald-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.113 1.527 5.845L.057 23.428a.5.5 0 0 0 .609.61l5.71-1.485A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.373l-.36-.214-3.733.97.997-3.62-.236-.374A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-0.5">
                    WhatsApp
                  </p>
                  <p className="font-semibold text-neutral-900 text-sm">
                    +234 814 936 0338
                  </p>
                  <p className="text-xs text-neutral-400">
                    Quick responses on WhatsApp
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 bg-neutral-50 border border-neutral-100 rounded-2xl p-5">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                  <HiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-0.5">
                    Location
                  </p>
                  <p className="font-semibold text-neutral-900 text-sm">
                    Lagos, Nigeria
                  </p>
                  <p className="text-xs text-neutral-400">
                    Remote & on-site across Nigeria
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-primary-deeper rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 grid-overlay opacity-20" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <HiClock className="w-5 h-5 text-white" />
                    <span className="font-sora font-semibold text-white">
                      Business Hours
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    {[
                      { day: "Monday – Friday", time: "8:00 AM – 5:00 PM WAT" },
                      { day: "Sunday", time: "Emergency support only" },
                    ].map(({ day, time }) => (
                      <div key={day} className="flex justify-between gap-4">
                        <span className="text-white/60">{day}</span>
                        <span className="text-white font-medium text-right">
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/itechlinkng/"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/itech_linksolutions?igsh=MTFyNzBqYjU1ZTU1bg=="
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-pink-600 hover:text-white transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1AVgzLVGZY/?mibextid=wwXIfr"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-blue-700 hover:text-white transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/2348149360338"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-emerald-500 hover:text-white transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.113 1.527 5.845L.057 23.428a.5.5 0 0 0 .609.61l5.71-1.485A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.373l-.36-.214-3.733.97.997-3.62-.236-.374A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-neutral-100 shadow-xl shadow-neutral-100 rounded-3xl p-8 md:p-10">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <HiChatBubbleLeftEllipsis className="w-5 h-5 text-primary" />
                    <h2 className="font-sora font-bold text-2xl text-neutral-900">
                      Send Us a Message
                    </h2>
                  </div>
                  <p className="text-neutral-500 text-sm">
                    Fill in the form below and we'll get back to you with a
                    personalised response, and where relevant, a free proposal.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Happens After You Submit?"
            subtitle="Clear, quick, and low-pressure — you're never committed to anything until you're ready."
            centered
            label="The Next Steps"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                step: "01",
                title: "We Review Your Enquiry",
                description:
                  "A senior team member personally reviews your requirements within a few hours and routes it to the right specialist.",
                time: "Within 4 hours",
              },
              {
                step: "02",
                title: "Free Discovery Call",
                description:
                  "We schedule a 30-minute call to understand your goals and give honest advice. No sales pressure, no obligation.",
                time: "Within 48 hours",
              },
              {
                step: "03",
                title: "Detailed Written Proposal",
                description:
                  "For qualifying projects, we prepare a tailored proposal covering scope, timeline, and investment — at no cost.",
                time: "Within 5 business days",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm text-center hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-sora font-bold text-lg mx-auto mb-5 shadow-lg shadow-primary/30">
                  {item.step}
                </div>
                <div className="text-xs font-semibold text-primary bg-primary/8 rounded-full px-3 py-1 inline-block mb-4">
                  {item.time}
                </div>
                <h3 className="font-sora font-semibold text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to the questions we hear most often."
            centered
            label="FAQ"
          />
          <div className="space-y-4 mt-12">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6 hover:border-primary/20 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-sora font-semibold text-neutral-900 mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="py-14 bg-primary-deeper relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-sora font-bold text-white text-2xl md:text-3xl">
              Prefer to reach us directly?
            </h2>
            <p className="text-white/60 mt-1">
              Call or WhatsApp us for the fastest response.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+2348123456789"
              className="inline-flex items-center gap-2 bg-white text-primary-dark font-semibold rounded-full px-7 py-3.5 hover:bg-neutral-100 transition-colors text-sm"
            >
              <HiPhone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="https://wa.me/2348149360338"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 text-white font-semibold rounded-full px-7 py-3.5 hover:bg-emerald-600 transition-colors text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.113 1.527 5.845L.057 23.428a.5.5 0 0 0 .609.61l5.71-1.485A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.373l-.36-.214-3.733.97.997-3.62-.236-.374A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
