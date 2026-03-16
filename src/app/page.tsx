import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ServicesGrid from '@/components/home/ServicesGrid'
import WhyiTechLink from '@/components/home/WhyiTechLink'
import PartnerStrip from '@/components/home/PartnerStrip'
import ZohoSpotlight from '@/components/home/ZohoSpotlight'
import Testimonials from '@/components/home/Testimonials'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'iTechLink IT Services & Solutions | Enterprise Technology Partner — Lagos, Nigeria',
  description: 'iTechLink delivers enterprise-grade IT solutions, Zoho implementations, web design, cybersecurity, cloud solutions, and digital transformation services trusted by 50+ businesses across Africa.',
  keywords: 'IT services Nigeria, Zoho partner Lagos, web development Nigeria, cybersecurity Africa, cloud solutions Lagos, IT consulting Nigeria',
  openGraph: {
    title: 'iTechLink IT Services & Solutions',
    description: 'Transforming businesses through intelligent technology. Enterprise IT, Zoho, cloud, cybersecurity and more.',
    type: 'website',
    locale: 'en_NG',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyiTechLink />
      <PartnerStrip />
      <ZohoSpotlight />
      <Testimonials />
      <CTABanner />
    </>
  )
}
