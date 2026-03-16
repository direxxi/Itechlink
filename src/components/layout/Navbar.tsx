'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown, HiBars3, HiXMark } from 'react-icons/hi2'
import {
  HiCodeBracket, HiPaintBrush, HiBriefcase, HiArrowTrendingUp,
  HiServerStack, HiPhoto, HiCloudArrowUp, HiShieldCheck,
  HiLightBulb, HiLifebuoy, HiChartBar, HiMegaphone
} from 'react-icons/hi2'
import Button from '@/components/ui/Button'

const services = [
  { title: 'Web Design & Development', slug: 'web-design-development', icon: HiCodeBracket },
  { title: 'UI/UX Design', slug: 'ui-ux-design', icon: HiPaintBrush },
  { title: 'Business Solutions & Zoho', slug: 'business-solutions', icon: HiBriefcase },
  { title: 'Search Engine Optimisation', slug: 'search-engine-optimisation', icon: HiArrowTrendingUp },
  { title: 'IT Infrastructure & Procurement', slug: 'it-infrastructure-procurement', icon: HiServerStack },
  { title: 'Graphics Design & Branding', slug: 'graphics-design-branding', icon: HiPhoto },
  { title: 'Cloud Solutions & Migration', slug: 'cloud-solutions', icon: HiCloudArrowUp },
  { title: 'Cybersecurity Services', slug: 'cybersecurity', icon: HiShieldCheck },
  { title: 'IT Consulting & Strategy', slug: 'it-consulting', icon: HiLightBulb },
  { title: 'Managed IT Support', slug: 'managed-it-support', icon: HiLifebuoy },
  { title: 'Data Analytics & BI', slug: 'data-analytics', icon: HiChartBar },
  { title: 'Digital Marketing', slug: 'digital-marketing', icon: HiMegaphone },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'About', href: '/about' },
  { label: 'Zoho', href: '/zoho' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const megaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-neutral-200'
          : 'bg-white/90 backdrop-blur-sm'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/logo.png"
                alt="iTechLink IT Services & Solutions"
                className="h-12 w-12 object-contain rounded-lg"
              />
              <div className="hidden sm:block">
                <div className="flex items-baseline">
                  <span className="font-sora font-black text-xl text-primary leading-none">itech</span>
                  <span className="font-sora font-black text-xl text-accent leading-none">link</span>
                </div>
                <span className="text-[10px] text-neutral-500 font-medium leading-tight block">
                  IT Services & Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.hasMega) {
                  return (
                    <div key={link.label} ref={megaRef} className="relative">
                      <button
                        onClick={() => setMegaOpen(!megaOpen)}
                        className={`
                          flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold
                          transition-all duration-200
                          ${pathname.startsWith('/services')
                            ? 'text-primary bg-primary/5'
                            : 'text-neutral-700 hover:text-primary hover:bg-primary/5'
                          }
                        `}
                      >
                        {link.label}
                        <HiChevronDown className={`w-4 h-4 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {megaOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-neutral-100 p-6 z-50"
                          >
                            <div className="mb-4 pb-3 border-b border-neutral-100">
                              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">All Services</p>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                              {services.map((svc) => {
                                const Icon = svc.icon
                                return (
                                  <Link
                                    key={svc.slug}
                                    href={`/services/${svc.slug}`}
                                    onClick={() => setMegaOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-all group"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                      <Icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm font-medium text-neutral-700 group-hover:text-primary transition-colors leading-tight">
                                      {svc.title}
                                    </span>
                                  </Link>
                                )
                              })}
                            </div>
                            <div className="mt-4 pt-3 border-t border-neutral-100">
                              <Link
                                href="/services"
                                onClick={() => setMegaOpen(false)}
                                className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                              >
                                View All Services →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                      ${pathname === link.href
                        ? 'text-primary bg-primary/5'
                        : 'text-neutral-700 hover:text-primary hover:bg-primary/5'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                <Button href="/contact" variant="primary" size="sm">
                  Get a Quote
                </Button>
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                {mobileOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-white pt-20"
          >
            <div className="px-6 py-6 overflow-y-auto h-full">
              <nav className="flex flex-col gap-1">
                <Link href="/" className="px-4 py-3 rounded-xl text-lg font-semibold text-neutral-800 hover:bg-primary/5 hover:text-primary transition-colors">
                  Home
                </Link>

                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-lg font-semibold text-neutral-800 hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    Services
                    <HiChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4"
                      >
                        <div className="py-2 flex flex-col gap-1">
                          {services.map((svc) => {
                            const Icon = svc.icon
                            return (
                              <Link
                                key={svc.slug}
                                href={`/services/${svc.slug}`}
                                className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-primary/5 text-neutral-600 hover:text-primary transition-colors"
                              >
                                <Icon className="w-4 h-4 shrink-0" />
                                <span className="text-sm font-medium">{svc.title}</span>
                              </Link>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {['About', 'Zoho', 'Case Studies', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="px-4 py-3 rounded-xl text-lg font-semibold text-neutral-800 hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg" fullWidth>
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
