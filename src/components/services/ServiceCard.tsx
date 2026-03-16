import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'
import {
  HiCodeBracket, HiPaintBrush, HiBriefcase, HiArrowTrendingUp,
  HiServerStack, HiPhoto, HiCloudArrowUp, HiShieldCheck,
  HiLightBulb, HiLifebuoy, HiChartBar, HiMegaphone,
} from 'react-icons/hi2'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HiCodeBracket, HiPaintBrush, HiBriefcase, HiArrowTrendingUp,
  HiServerStack, HiPhoto, HiCloudArrowUp, HiShieldCheck,
  HiLightBulb, HiLifebuoy, HiChartBar, HiMegaphone,
}

interface ServiceCardProps {
  slug: string
  title: string
  shortDescription: string
  icon: string
  index?: number
}

const accentColors = [
  'group-hover:text-blue-500',
  'group-hover:text-purple-500',
  'group-hover:text-emerald-500',
  'group-hover:text-orange-500',
  'group-hover:text-slate-600',
  'group-hover:text-rose-500',
  'group-hover:text-sky-500',
  'group-hover:text-red-500',
  'group-hover:text-yellow-500',
  'group-hover:text-teal-500',
  'group-hover:text-indigo-500',
  'group-hover:text-pink-500',
]

const iconBgColors = [
  'bg-blue-50 group-hover:bg-blue-100',
  'bg-purple-50 group-hover:bg-purple-100',
  'bg-emerald-50 group-hover:bg-emerald-100',
  'bg-orange-50 group-hover:bg-orange-100',
  'bg-slate-50 group-hover:bg-slate-100',
  'bg-rose-50 group-hover:bg-rose-100',
  'bg-sky-50 group-hover:bg-sky-100',
  'bg-red-50 group-hover:bg-red-100',
  'bg-yellow-50 group-hover:bg-yellow-100',
  'bg-teal-50 group-hover:bg-teal-100',
  'bg-indigo-50 group-hover:bg-indigo-100',
  'bg-pink-50 group-hover:bg-pink-100',
]

const iconTextColors = [
  'text-blue-500', 'text-purple-500', 'text-emerald-500', 'text-orange-500',
  'text-slate-600', 'text-rose-500', 'text-sky-500', 'text-red-500',
  'text-yellow-500', 'text-teal-500', 'text-indigo-500', 'text-pink-500',
]

export default function ServiceCard({ slug, title, shortDescription, icon, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[icon] || HiCodeBracket
  const idx = index % 12

  return (
    <Link
      href={`/services/${slug}`}
      className="group bg-white border border-neutral-100 rounded-2xl p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/8 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl ${iconBgColors[idx]} flex items-center justify-center mb-5 transition-colors duration-300`}>
        <Icon className={`w-7 h-7 ${iconTextColors[idx]}`} />
      </div>

      {/* Number */}
      <span className="text-xs font-semibold text-neutral-300 mb-2 font-sora">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Content */}
      <h3 className="font-sora font-semibold text-xl text-neutral-900 mb-3 group-hover:text-primary-dark transition-colors">
        {title}
      </h3>
      <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-1">
        {shortDescription}
      </p>

      {/* CTA */}
      <div className="flex items-center gap-2 text-primary font-semibold text-sm">
        Learn More
        <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
      </div>
    </Link>
  )
}
