import { SiZoho } from 'react-icons/si'

function MicrosoftIcon({ size, colored }: { size: number; colored: boolean }) {
  const c = colored ? undefined : '#888'
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="11" height="11" fill={c ?? '#F25022'} />
      <rect x="13" y="0" width="11" height="11" fill={c ?? '#7FBA00'} />
      <rect x="0" y="13" width="11" height="11" fill={c ?? '#00A4EF'} />
      <rect x="13" y="13" width="11" height="11" fill={c ?? '#FFB900'} />
    </svg>
  )
}

interface PartnerLogoProps {
  partner: 'microsoft' | 'comptia' | 'zoho'
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
  colored?: boolean
}

const sizeMap = {
  sm: { icon: 32, text: 'text-xs' },
  md: { icon: 48, text: 'text-sm' },
  lg: { icon: 64, text: 'text-base' },
}

export default function PartnerLogo({
  partner,
  showLabel = true,
  size = 'md',
  colored = false,
}: PartnerLogoProps) {
  const { icon: iconSize, text: textSize } = sizeMap[size]

  const baseClass = `
    flex flex-col items-center gap-3 group cursor-default
  `

  const filterClass = colored
    ? ''
    : 'partner-logo-filter'

  if (partner === 'microsoft') {
    return (
      <div className={baseClass}>
        <div className={`transition-all duration-300 ${filterClass}`}>
          <MicrosoftIcon size={iconSize} colored={colored} />
        </div>
        {showLabel && (
          <span className={`${textSize} font-semibold text-neutral-500 group-hover:text-neutral-800 transition-colors`}>
            Microsoft Certified Partner
          </span>
        )}
      </div>
    )
  }

  if (partner === 'zoho') {
    return (
      <div className={baseClass}>
        <div className={`transition-all duration-300 ${filterClass}`}>
          <SiZoho size={iconSize} color={colored ? '#E42527' : '#666'} />
        </div>
        {showLabel && (
          <span className={`${textSize} font-semibold text-neutral-500 group-hover:text-neutral-800 transition-colors`}>
            Zoho Authorized Partner
          </span>
        )}
      </div>
    )
  }

  // CompTIA custom badge
  return (
    <div className={baseClass}>
      <div
        className={`
          transition-all duration-300 
          flex items-center justify-center 
          rounded-lg font-sora font-black tracking-tight
          ${filterClass}
        `}
        style={{
          width: iconSize + 16,
          height: iconSize,
          backgroundColor: colored ? '#C8202F' : '#999',
          color: 'white',
          fontSize: iconSize * 0.35,
        }}
      >
        CompTIA
      </div>
      {showLabel && (
        <span className={`${textSize} font-semibold text-neutral-500 group-hover:text-neutral-800 transition-colors`}>
          CompTIA Authorized Partner
        </span>
      )}
    </div>
  )
}
