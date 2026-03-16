export interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  company: string
  rating: number
  service: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'iTechLink completely transformed how our business operates. The Zoho implementation they delivered gave us real-time visibility we never had before. Our inventory discrepancies dropped to near zero within the first month, and our finance team has saved days of work every single month.',
    author: 'Engr Dayo',
    role: 'Director',
    company: 'Optimal Techie',
    rating: 5,
    service: 'Zoho Implementation',
  },
  {
    id: 2,
    quote: 'Our IT infrastructure was an embarrassment — constant downtime, no backups, total chaos. The iTechLink team designed and deployed a professional enterprise-grade environment across all our offices. We haven\'t had a major outage since the project went live. The difference is night and day.',
    author: 'Amaka Okonkwo',
    role: 'Chief Operating Officer',
    company: 'SwiftLogistics Nigeria',
    rating: 5,
    service: 'IT Infrastructure',
  },
  {
    id: 3,
    quote: 'We\'d tried other agencies before and been burned. iTechLink was different — they were transparent about what was achievable, gave us realistic timelines, and then exceeded them. Our organic traffic has more than tripled and our website is now something we\'re genuinely proud to send clients to.',
    author: 'Tobi Adeleke',
    role: 'Founder & CEO',
    company: 'AfroMarket',
    rating: 5,
    service: 'Web Design & SEO',
  },
  {
    id: 4,
    quote: 'The cybersecurity assessment iTechLink conducted opened our eyes to vulnerabilities we had no idea existed. They not only identified the risks but helped us fix them methodically and trained our entire team. We now feel genuinely confident in our security posture for the first time.',
    author: 'Chukwuemeka Nwosu',
    role: 'IT Manager',
    company: 'Meridian Financial Services',
    rating: 5,
    service: 'Cybersecurity',
  },
]
