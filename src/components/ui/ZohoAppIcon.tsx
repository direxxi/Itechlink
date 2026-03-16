import type React from 'react'

// Real Zoho app icons served from Zoho's CDN
// Each slug maps to Zoho's official product logo URL

const zohoIconMap: Record<string, string> = {
  // Sales & Marketing
  'zoho-crm':                   'https://www.zohowebstatic.com/sites/zweb/images/productlogos/crm.svg',
  'zoho-salesiq':               'https://www.zohowebstatic.com/sites/zweb/images/productlogos/salesiq.svg',
  'zoho-campaigns':             'https://www.zohowebstatic.com/sites/zweb/images/productlogos/campaigns.svg',
  'zoho-social':                'https://www.zohowebstatic.com/sites/zweb/images/productlogos/social.svg',
  'zoho-marketing-automation':  'https://www.zohowebstatic.com/sites/zweb/images/productlogos/marketingautomation.svg',
  // Finance
  'zoho-books':                 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/books.svg',
  'zoho-inventory':             'https://www.zohowebstatic.com/sites/zweb/images/productlogos/inventory.svg',
  'zoho-invoice':               'https://www.zohowebstatic.com/sites/zweb/images/productlogos/invoice.svg',
  'zoho-billing':               'https://www.zohowebstatic.com/sites/zweb/images/productlogos/billing.svg',
  'zoho-expense':               'https://www.zohowebstatic.com/sites/zweb/images/productlogos/expense.svg',
  // HR & Operations
  'zoho-people':                'https://www.zohowebstatic.com/sites/zweb/images/productlogos/people.svg',
  'zoho-recruit':               'https://www.zohowebstatic.com/sites/zweb/images/productlogos/recruit.svg',
  'zoho-projects':              'https://www.zohowebstatic.com/sites/zweb/images/productlogos/projects.svg',
  'zoho-sprints':               'https://www.zohowebstatic.com/sites/zweb/images/productlogos/sprints.svg',
  // IT & Helpdesk
  'zoho-desk':                  'https://www.zohowebstatic.com/sites/zweb/images/productlogos/desk.svg',
  'zoho-assist':                'https://www.zohowebstatic.com/sites/zweb/images/productlogos/assist.svg',
  'zoho-creator':               'https://www.zohowebstatic.com/sites/zweb/images/productlogos/creator.svg',
  // Productivity
  'zoho-mail':                  'https://www.zohowebstatic.com/sites/zweb/images/productlogos/mail.svg',
  'zoho-workdrive':             'https://www.zohowebstatic.com/sites/zweb/images/productlogos/workdrive.svg',
  'zoho-sign':                  'https://www.zohowebstatic.com/sites/zweb/images/productlogos/sign.svg',
  'zoho-analytics':             'https://www.zohowebstatic.com/sites/zweb/images/productlogos/analytics.svg',
}

// Fallback colors per app (used if image fails to load)
const fallbackColors: Record<string, string> = {
  'zoho-crm': '#E42527', 'zoho-salesiq': '#E91E63', 'zoho-campaigns': '#1B75BB',
  'zoho-social': '#2196F3', 'zoho-marketing-automation': '#FF5722',
  'zoho-books': '#2B9E35', 'zoho-inventory': '#1B75BB', 'zoho-invoice': '#2DA94F',
  'zoho-billing': '#4CAF50', 'zoho-expense': '#F4A623',
  'zoho-people': '#F4A623', 'zoho-recruit': '#7B68EE', 'zoho-projects': '#2DA94F',
  'zoho-sprints': '#00BCD4', 'zoho-desk': '#1F7DE5', 'zoho-assist': '#FF9800',
  'zoho-creator': '#9C27B0', 'zoho-mail': '#E42527', 'zoho-workdrive': '#26A69A',
  'zoho-sign': '#3F51B5', 'zoho-analytics': '#FF5722',
}

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// ─── CHANGE SIZES HERE ───────────────────────────────────────────────────────
// containerPx = the white box.  imgPx = the icon inside it.
// Keep imgPx a bit smaller than containerPx for padding around the logo.
const sizeMap: Record<Size, { containerPx: number; imgPx: number; radius: number }> = {
  xs: { containerPx: 32,  imgPx: 20,  radius: 8  },
  sm: { containerPx: 40,  imgPx: 28,  radius: 10 },
  md: { containerPx: 56,  imgPx: 40,  radius: 12 },
  lg: { containerPx: 72,  imgPx: 52,  radius: 16 },
  xl: { containerPx: 88,  imgPx: 64,  radius: 16 },
}
// ─────────────────────────────────────────────────────────────────────────────

interface ZohoAppIconProps {
  slug?: string
  color?: string
  initial?: string
  size?: Size
  className?: string
}

export default function ZohoAppIcon({ slug, color, initial, size = 'md', className = '' }: ZohoAppIconProps) {
  const { containerPx, imgPx, radius } = sizeMap[size]
  const iconUrl = slug ? zohoIconMap[slug] : undefined
  const fallbackColor = slug ? (fallbackColors[slug] || '#E42527') : (color || '#E42527')
  const fallbackInitial = initial || (slug ? slug.replace('zoho-', '').slice(0, 2).toUpperCase() : 'Z')

  const containerStyle: React.CSSProperties = {
    width: containerPx,
    height: containerPx,
    minWidth: containerPx,
    borderRadius: radius,
    flexShrink: 0,
  }

  if (iconUrl) {
    return (
      <div
        className={`bg-white shadow-sm border border-neutral-100 flex items-center justify-center overflow-hidden ${className}`}
        style={containerStyle}
      >
        <img
          src={iconUrl}
          alt={slug?.replace('zoho-', '').replace(/-/g, ' ') || 'Zoho app'}
          style={{ width: imgPx, height: imgPx, objectFit: 'contain' }}
          onError={(e) => {
            const parent = (e.target as HTMLImageElement).parentElement
            if (parent) {
              parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${fallbackColor};color:white;font-weight:900;font-size:0.7em">${fallbackInitial}</div>`
            }
          }}
        />
      </div>
    )
  }

  return (
    <div
      className={`flex items-center justify-center text-white font-sora font-black text-sm ${className}`}
      style={{ ...containerStyle, backgroundColor: fallbackColor }}
    >
      {fallbackInitial}
    </div>
  )
}

// Export the icon URL map for use in other components
export { zohoIconMap }
