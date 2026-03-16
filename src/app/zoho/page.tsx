import type { Metadata } from 'next'
import ZohoHero from '@/components/zoho/ZohoHero'
import WhatIsZoho from '@/components/zoho/WhatIsZoho'
import AppExplorer from '@/components/zoho/AppExplorer'
import ZohoOneSection from '@/components/zoho/ZohoOneSection'
import ZohoQuiz from '@/components/zoho/ZohoQuiz'
import WhyPartnerWithUs from '@/components/zoho/WhyPartnerWithUs'
import ZohoProcess from '@/components/zoho/ZohoProcess'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Zoho Solutions | iTechLink IT Services & Solutions',
  description: 'iTechLink is an Authorized Zoho Partner delivering expert Zoho CRM, Books, Inventory, and full Zoho One implementations for businesses in Nigeria and beyond.',
}

export default function ZohoPage() {
  return (
    <>
      <ZohoHero />
      <WhatIsZoho />
      <AppExplorer />
      <ZohoOneSection />
      <ZohoQuiz />
      <WhyPartnerWithUs />
      <ZohoProcess />
      <CTABanner />
    </>
  )
}
