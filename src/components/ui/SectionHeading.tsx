interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  label?: string
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
  label,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <span className={`
          inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3
          ${light ? 'text-primary/70' : 'text-primary'}
        `}>
          {label}
        </span>
      )}
      <h2 className={`
        font-sora font-bold leading-tight mb-4
        text-3xl md:text-4xl lg:text-[2.625rem]
        ${light ? 'text-white' : 'text-neutral-950'}
      `}>
        {title}
      </h2>
      {/* Accent underline */}
      <div className={`
        h-1 w-16 rounded-full mb-5
        ${centered ? 'mx-auto' : ''}
        bg-gradient-to-r from-primary to-accent
      `} />
      {subtitle && (
        <p className={`
          text-lg leading-relaxed max-w-2xl
          ${centered ? 'mx-auto' : ''}
          ${light ? 'text-white/70' : 'text-neutral-500'}
        `}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
