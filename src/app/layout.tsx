import type { Metadata } from 'next'
import { Sora, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'iTechLink IT Services & Solutions | Enterprise IT Partner, Lagos Nigeria',
  description: 'iTechLink delivers enterprise-grade IT solutions, Zoho implementations, web design, cybersecurity, cloud solutions, and digital transformation services trusted by businesses across Africa.',
  keywords: 'IT services Nigeria, Zoho partner Nigeria, web development Lagos, IT consulting Africa, cybersecurity Nigeria, cloud solutions',
  openGraph: {
    title: 'iTechLink IT Services & Solutions',
    description: 'Your trusted technology partner for enterprise IT, Zoho implementation, and digital transformation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body className="font-jakarta antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
