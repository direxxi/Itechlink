import Link from 'next/link'
import { HiArrowRight, HiHome } from 'react-icons/hi2'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="min-h-screen bg-hero-dark flex items-center justify-center relative overflow-hidden">
      <div className="hero-mesh absolute inset-0" />
      <div className="grid-overlay absolute inset-0 opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="font-sora font-black text-primary/30 text-9xl leading-none mb-6 select-none"
          style={{ filter: 'brightness(2)' }}>
          404
        </div>

        <h1 className="font-sora font-bold text-white text-3xl md:text-4xl mb-4">
          Page Not Found
        </h1>
        <p className="text-white/60 text-lg mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            <HiHome className="w-5 h-5" /> Back to Home
          </Button>
          <Button href="/services" variant="ghost" size="lg">
            View Our Services <HiArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
          {[
            { href: '/about', label: 'About Us' },
            { href: '/zoho', label: 'Zoho Solutions' },
            { href: '/case-studies', label: 'Case Studies' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="text-white/40 hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
