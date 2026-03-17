export interface CaseStudyResult {
  metric: string;
  value: string;
  description: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  bannerColor: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial: CaseStudyTestimonial;
  servicesTags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "optimal-techie-zoho-implementation",
    title: "Transforming Inventory & Finance Operations with Zoho",
    client: "Aero Tech",
    industry: "Technology Retail",
    bannerColor: "#0077B6",
    challenge: `Aero Tech, a growing technology retail business in Lagos, was managing their entire inventory and financial operations through a combination of physical ledgers, isolated spreadsheets, and disconnected manual processes. With an expanding product catalogue, multiple warehouse locations, and a growing team, the lack of a centralised system was creating serious operational challenges. Stock discrepancies were frequent and difficult to trace, purchase orders were managed on paper and regularly misplaced, and financial reconciliation at month-end was a labour-intensive process taking days rather than hours. The business lacked real-time visibility into stock levels, outstanding payables, and sales performance — making confident business decisions nearly impossible.`,
    solution: `iTechLink conducted a thorough business process analysis with the Aero Tech team, mapping existing workflows across procurement, inventory management, showroom sales, and financial reporting. Based on this analysis, we designed and implemented an integrated Zoho solution centred on Zoho Inventory and Zoho Books, with carefully configured user roles and permissions tailored to each team member's responsibilities. Fuad, the Warehouse Operations Manager, received a configuration focused on stock receipts, warehouse transfers, and purchase order management. Ruth, the Showroom Attendant, was granted access to customer-facing sales functions, package creation, and shipment tracking. An approval workflow was established ensuring all significant transactions were reviewed by the appropriate senior stakeholders — Engr Dayo and the Operations Manager — before processing. Full data migration from spreadsheets was completed, comprehensive role-based training was delivered to all users, and detailed reference documentation was produced to support the team post-launch.`,
    results: [
      {
        metric: "95%",
        value: "Reduction in Stock Discrepancies",
        description:
          "Automated inventory tracking eliminated manual counting errors and provided real-time stock visibility across all locations",
      },
      {
        metric: "70%",
        value: "Faster Month-End Close",
        description:
          "Integrated Books and Inventory automation reduced financial reconciliation from days to hours",
      },
      {
        metric: "100%",
        value: "Purchase Order Traceability",
        description:
          "Every purchase order is now digitally raised, approved, tracked, and reconciled — zero paper documentation",
      },
      {
        metric: "3 Days",
        value: "Saved Per Month in Admin",
        description:
          "Role-specific workflows eliminated redundant data entry across the warehouse and showroom teams",
      },
    ],
    testimonial: {
      quote:
        "The iTechLink team took the time to truly understand how we operate before recommending any solution. The Zoho implementation has completely transformed how we manage our inventory and finances — we now have real-time visibility and control that was simply impossible before.",
      author: "Mr. Bola",
      role: "Director, Aero Tech",
    },
    servicesTags: ["business-solutions", "data-analytics"],
  },
  {
    slug: "swiftlogistics-it-infrastructure",
    title: "Building a Resilient IT Infrastructure for Rapid Scaling",
    client: "SwiftLogistics Nigeria",
    industry: "Logistics & Supply Chain",
    bannerColor: "#D42B2B",
    challenge: `SwiftLogistics Nigeria, a fast-growing third-party logistics provider operating across six states, was suffering from severe IT infrastructure limitations that were becoming a direct barrier to business growth. Their existing network — a patchwork of consumer-grade equipment installed years earlier — was unable to support the demands of their expanded operations. Frequent internet outages disrupted the real-time tracking systems their clients depended upon. Hardware failures were common and caused significant operational downtime. Critical shipment data was stored locally on unprotected workstations with no backup strategy in place, creating serious data loss risk. Remote connectivity for field managers was unreliable, and the IT environment had no centralised management, monitoring, or security controls.`,
    solution: `iTechLink conducted a comprehensive infrastructure assessment across all six SwiftLogistics locations, producing a detailed network architecture design and a phased implementation roadmap. Phase one addressed the Lagos headquarters: a new enterprise-grade network core was deployed, including Cisco switching infrastructure, Fortinet next-generation firewalls, and high-availability internet connectivity with automatic failover between two ISPs. A Microsoft Windows Server environment was deployed with Active Directory for centralised user and device management. Veeam-powered automated backups were configured to both local NAS and Microsoft Azure, with weekly restore testing built into the managed support agreement. Phase two extended the infrastructure improvements to all six regional offices through site-to-site VPN connections, standardised hardware, and centralised monitoring via N-able. All workstations were enrolled in Microsoft Intune for unified endpoint management and security policy enforcement.`,
    results: [
      {
        metric: "99.7%",
        value: "Network Uptime Achieved",
        description:
          "Dual-ISP failover configuration eliminated the connectivity outages that were disrupting real-time tracking operations",
      },
      {
        metric: "0",
        value: "Data Loss Incidents",
        description:
          "Automated backup to Azure and local NAS with weekly restore testing created a robust, tested disaster recovery capability",
      },
      {
        metric: "6",
        value: "Offices Unified",
        description:
          "All six regional locations connected via secure site-to-site VPN with centralised IT management and monitoring",
      },
      {
        metric: "60%",
        value: "IT Support Ticket Reduction",
        description:
          "Proactive monitoring and standardised infrastructure significantly reduced the frequency and impact of IT issues",
      },
    ],
    testimonial: {
      quote:
        "We were losing business because our IT simply couldn't keep up with our growth. iTechLink understood both our technical needs and our business context, and delivered an infrastructure that we can genuinely rely on. Our operations managers are no longer constantly firefighting IT problems.",
      author: "Amaka Okonkwo",
      role: "COO, SwiftLogistics Nigeria",
    },
    servicesTags: [
      "it-infrastructure-procurement",
      "cybersecurity",
      "managed-it-support",
      "cloud-solutions",
    ],
  },
  {
    slug: "afromarket-web-seo-growth",
    title: "Driving 220% Organic Growth with Web Development & SEO",
    client: "AfroMarket",
    industry: "E-Commerce & Retail",
    bannerColor: "#2DA94F",
    challenge: `AfroMarket, an e-commerce platform specialising in authentic African goods for the diaspora market, had developed a product catalogue of over 800 items but was struggling to generate meaningful organic traffic or conversions. Their existing website — built on a poorly optimised platform — suffered from 6+ second load times, no structured SEO, a checkout process that was converting at less than 1%, and a mobile experience so poor that 80% of mobile visitors were abandoning within seconds. Despite having a genuinely differentiated product range, AfroMarket was invisible in search engines for the keywords their target customers were using. Paid advertising costs were consuming a disproportionate share of the marketing budget with diminishing returns, and the business needed a sustainable, lower-cost acquisition channel to support its growth ambitions.`,
    solution: `iTechLink began with a comprehensive technical audit revealing over 140 critical and high-priority SEO issues, including duplicate content, missing meta data, broken internal links, Core Web Vitals failures across all pages, and zero structured data implementation. A complete website rebuild on Next.js was executed in parallel with the SEO strategy development, delivering a new site with sub-1.5 second load times, a redesigned mobile-first checkout flow, and product page templates optimised for both user experience and search engine visibility. A comprehensive keyword strategy targeting high-intent buyer searches in the UK, USA, and Canada diaspora markets was developed and implemented across 800+ product pages, 40 new category landing pages, and a content programme producing two SEO-optimised articles per week. Local Business, Product, and BreadcrumbList structured data was implemented throughout, and a digital PR campaign secured 35 high-authority backlinks within the first six months.`,
    results: [
      {
        metric: "220%",
        value: "Increase in Organic Traffic",
        description:
          "Organic search visits grew from 1,200 to 3,840 monthly visitors within 9 months of the SEO programme launch",
      },
      {
        metric: "3.4%",
        value: "Checkout Conversion Rate",
        description:
          "Rebuilt checkout and product page experience lifted conversions from 0.8% to 3.4% — a 4.25x improvement",
      },
      {
        metric: "#1",
        value: "Rankings Achieved",
        description:
          "AfroMarket achieved first-page Google rankings for 47 high-value target keywords within 6 months",
      },
      {
        metric: "68%",
        value: "Reduction in Paid Spend",
        description:
          "Growing organic traffic allowed AfroMarket to reduce paid advertising spend by 68% while maintaining revenue growth",
      },
    ],
    testimonial: {
      quote:
        "We went from being invisible on Google to competing with much bigger players in our niche. The combination of the new website and the SEO strategy iTechLink developed has been genuinely transformational — our organic channel is now our primary acquisition source.",
      author: "Tobi Adeleke",
      role: "Founder & CEO, AfroMarket",
    },
    servicesTags: [
      "web-design-development",
      "search-engine-optimisation",
      "digital-marketing",
      "ui-ux-design",
    ],
  },
];
