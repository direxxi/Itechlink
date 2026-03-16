import Link from "next/link";
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import { HiMapPin, HiPhone, HiEnvelope, HiClock } from "react-icons/hi2";
import PartnerLogo from "@/components/ui/PartnerLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Zoho Solutions", href: "/zoho" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const topServices = [
  {
    label: "Web Design & Development",
    href: "/services/web-design-development",
  },
  { label: "Business Solutions & Zoho", href: "/services/business-solutions" },
  {
    label: "IT Infrastructure",
    href: "/services/it-infrastructure-procurement",
  },
  { label: "Cybersecurity Services", href: "/services/cybersecurity" },
  { label: "Cloud Solutions", href: "/services/cloud-solutions" },
  { label: "SEO", href: "/services/search-engine-optimisation" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-deeper text-white">
      {/* Partner strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-6 font-semibold">
            Certified & Trusted By Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <PartnerLogo
                partner="microsoft"
                showLabel={false}
                size="sm"
                colored={false}
              />
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <PartnerLogo
                partner="comptia"
                showLabel={false}
                size="sm"
                colored={false}
              />
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <PartnerLogo
                partner="zoho"
                showLabel={false}
                size="sm"
                colored={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="iTechLink"
                className="h-11 w-11 object-contain rounded-lg"
              />
              <div>
                <div className="flex items-baseline">
                  <span className="font-sora font-black text-xl text-primary">
                    itech
                  </span>
                  <span className="font-sora font-black text-xl text-accent">
                    link
                  </span>
                </div>
                <span className="text-[10px] text-white/40 font-medium block leading-tight">
                  IT Services & Solutions
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Enterprise-grade IT services and solutions trusted by businesses
              across Africa. Certified partners of Microsoft, CompTIA, and Zoho.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/company/itechlinkng/",
                  label: "LinkedIn",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/itech_linksolutions?igsh=MTFyNzBqYjU1ZTU1bg==",
                  label: "Instagram",
                },
                {
                  icon: FaFacebook,
                  href: "https://www.facebook.com/share/1AVgzLVGZY/?mibextid=wwXIfr",
                  label: "Facebook",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-sora font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors hover:translate-x-1 inline-flex"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Services */}
          <div>
            <h3 className="font-sora font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Top Services
            </h3>
            <ul className="space-y-3">
              {topServices.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + Newsletter */}
          <div>
            <h3 className="font-sora font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <HiMapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  25, Oju Olobun Close, Victoria Island, Lagos
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+2348123456789"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  +234 814 936 0338 | +234 906 813 9498
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiEnvelope className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:info@itechlink.com.ng"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  info@itechlink.com.ng support@itechlink.com.ng
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiClock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-white/70 text-sm">
                  Mon–Fri, 8:00 AM – 5:00 PM WAT
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold text-white/80 mb-3">
                Stay Updated
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors min-w-0"
                />
                <button className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} iTechLink IT Services & Solutions. All
            rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
