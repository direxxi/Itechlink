import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'
import { CaseStudy } from '@/data/case-studies'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  index?: number
}

export default function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  const firstResult = caseStudy.results[0]

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group bg-white border border-neutral-100 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/8 hover:border-primary/20 transition-all duration-300 flex flex-col"
    >
      {/* Colored banner */}
      <div
        className="h-3 w-full"
        style={{ background: `linear-gradient(90deg, ${caseStudy.bannerColor}, ${caseStudy.bannerColor}CC)` }}
      />

      <div className="p-8 flex flex-col flex-1">
        {/* Industry badge */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: caseStudy.bannerColor }}
          >
            {caseStudy.industry}
          </span>
          <span className="text-xs text-neutral-400 font-medium">Case Study</span>
        </div>

        {/* Client + Title */}
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">{caseStudy.client}</p>
        <h3 className="font-sora font-bold text-xl text-neutral-900 mb-4 group-hover:text-primary-dark transition-colors leading-snug">
          {caseStudy.title}
        </h3>

        {/* Challenge excerpt */}
        <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {caseStudy.challenge}
        </p>

        {/* Key result highlight */}
        {firstResult && (
          <div className="bg-neutral-50 rounded-xl p-4 mb-6 border border-neutral-100">
            <p className="text-xs text-neutral-400 font-medium mb-1">Key Result</p>
            <div className="flex items-baseline gap-2">
              <span
                className="font-sora font-black text-3xl"
                style={{ color: caseStudy.bannerColor }}
              >
                {firstResult.metric}
              </span>
              <span className="text-sm text-neutral-600 font-medium leading-tight">{firstResult.value}</span>
            </div>
          </div>
        )}

        {/* Service tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudy.servicesTags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs bg-primary/8 text-primary px-2.5 py-1 rounded-full font-medium capitalize">
              {tag.replace(/-/g, ' ')}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-primary font-semibold text-sm pt-4 border-t border-neutral-100">
          Read Full Story
          <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  )
}
