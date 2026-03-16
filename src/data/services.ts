export interface ServiceFeature {
  title: string
  description: string
  icon: string
}

export interface ServiceProcess {
  step: number
  title: string
  description: string
}

export interface ServiceDifferentiator {
  title: string
  description: string
}

export interface Service {
  slug: string
  title: string
  icon: string
  shortDescription: string
  fullDescription: string
  features: ServiceFeature[]
  process: ServiceProcess[]
  technologies: string[]
  differentiators: ServiceDifferentiator[]
}

export const services: Service[] = [
  {
    slug: 'web-design-development',
    title: 'Web Design & Development',
    icon: 'HiCodeBracket',
    shortDescription: 'Custom websites and web applications engineered for performance, conversion, and brand impact — built on modern frameworks.',
    fullDescription: `In today's digital economy, your website is often the first — and most critical — touchpoint between your business and prospective clients. At iTechLink, we design and develop high-performance websites that do more than look good: they convert visitors into customers, establish credibility, and scale alongside your business ambitions.

Our web development process combines strategic thinking with technical excellence. From bespoke corporate websites and e-commerce platforms to complex web applications and customer portals, we deliver solutions built on robust, maintainable code using modern frameworks like Next.js, React, and Node.js. Every project is crafted with SEO, accessibility, and mobile-first principles baked in from day one.`,
    features: [
      { title: 'Custom Design & Branding', description: 'Bespoke designs tailored to your brand identity, ensuring every visual element communicates your value proposition effectively.', icon: 'HiPaintBrush' },
      { title: 'Responsive & Mobile-First', description: 'Pixel-perfect experiences across all devices — from smartphones to ultrawide monitors — with fluid layouts and optimised performance.', icon: 'HiDevicePhoneMobile' },
      { title: 'Performance Optimisation', description: 'Sub-2-second load times through image optimisation, lazy loading, CDN integration, and code splitting strategies.', icon: 'HiBolt' },
      { title: 'SEO-Ready Architecture', description: 'Clean semantic HTML, structured data, sitemaps, and technical SEO foundations built into every site from the ground up.', icon: 'HiMagnifyingGlass' },
      { title: 'CMS Integration', description: 'Headless CMS integration (Sanity, Contentful, WordPress) empowering your team to manage content without developer dependency.', icon: 'HiSquares2X2' },
      { title: 'E-Commerce Solutions', description: 'Full-featured online stores with secure payment gateways, inventory management, and seamless checkout experiences.', icon: 'HiShoppingCart' },
    ],
    process: [
      { step: 1, title: 'Discovery & Strategy', description: 'We deep-dive into your business goals, target audience, competitor landscape, and content requirements to establish a clear strategic direction.' },
      { step: 2, title: 'Design & Prototyping', description: 'Interactive wireframes and high-fidelity mockups are created and iterated until every stakeholder is aligned before a single line of code is written.' },
      { step: 3, title: 'Development & Integration', description: 'Our engineers build your site using modern frameworks, integrating third-party tools, APIs, and CMS platforms as required.' },
      { step: 4, title: 'Testing & QA', description: 'Rigorous cross-browser, cross-device testing, performance audits, and accessibility checks ensure a flawless launch-ready product.' },
      { step: 5, title: 'Launch & Support', description: 'Seamless deployment to your hosting environment, with post-launch monitoring, training, and ongoing maintenance packages available.' },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'WordPress', 'Sanity CMS', 'Vercel', 'AWS', 'PostgreSQL'],
    differentiators: [
      { title: 'Conversion-Focused Design', description: 'Every design decision is informed by UX best practices and conversion rate optimisation principles — not just aesthetics.' },
      { title: 'End-to-End Ownership', description: 'From strategy through design, development, and launch, one team owns your project — eliminating miscommunication and delays.' },
      { title: 'Long-Term Partnership', description: 'We build relationships, not just websites. Post-launch support, updates, and growth iterations are always available.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'HiPaintBrush',
    shortDescription: 'User-centred interface design that reduces friction, increases engagement, and turns complex workflows into intuitive experiences.',
    fullDescription: `Great software built on a poor user experience fails to retain users — no matter how powerful the underlying technology. At iTechLink, our UI/UX practice puts your users at the centre of every design decision, producing interfaces that are not just visually compelling but genuinely intuitive and efficient.

We apply a rigorous, research-driven design process spanning user research, information architecture, interaction design, and visual design. Whether you need a full product design from scratch, a design system for your engineering team, or a UX audit of an existing product, our designers deliver solutions grounded in both human psychology and business strategy.`,
    features: [
      { title: 'User Research & Testing', description: 'In-depth user interviews, surveys, and usability testing sessions that reveal how real users think, behave, and make decisions.', icon: 'HiUsers' },
      { title: 'Information Architecture', description: 'Logical site maps, navigation structures, and content hierarchies that make finding information effortless for every user.', icon: 'HiRectangleGroup' },
      { title: 'Wireframing & Prototyping', description: 'Low and high-fidelity prototypes in Figma that bring concepts to life and allow meaningful stakeholder feedback before development.', icon: 'HiCursorArrowRays' },
      { title: 'Design Systems', description: 'Comprehensive component libraries and design tokens that ensure visual consistency across your entire product and accelerate development.', icon: 'HiSquares2X2' },
      { title: 'Interaction Design', description: 'Thoughtful micro-interactions, transitions, and motion design that make your product feel polished and responsive.', icon: 'HiSparkles' },
      { title: 'Accessibility Compliance', description: 'WCAG 2.1 AA compliant designs ensuring your product is usable by people with disabilities and legally compliant.', icon: 'HiShieldCheck' },
    ],
    process: [
      { step: 1, title: 'Research & Discovery', description: 'User interviews, competitor analysis, and stakeholder workshops to define the problem space and user needs clearly.' },
      { step: 2, title: 'Information Architecture', description: 'Defining the content structure, user flows, and navigation patterns that will form the backbone of the interface.' },
      { step: 3, title: 'Wireframing', description: 'Low-fidelity sketches and digital wireframes that map out layout and functionality without visual distraction.' },
      { step: 4, title: 'Visual Design', description: 'High-fidelity mockups applying your brand system, typography, colour, and visual hierarchy with pixel precision.' },
      { step: 5, title: 'Handoff & Support', description: 'Developer-ready Figma files with annotations, assets, and a design system, plus support during the build phase.' },
    ],
    technologies: ['Figma', 'FigJam', 'Maze', 'Hotjar', 'Miro', 'Zeplin', 'Adobe Creative Suite'],
    differentiators: [
      { title: 'Research-Grounded Decisions', description: 'Every design choice is backed by user data and behavioural insights, not assumptions or personal preferences.' },
      { title: 'Business-Aligned Design', description: 'We balance user needs with business objectives, ensuring the final product serves both your users and your bottom line.' },
      { title: 'Developer Collaboration', description: 'Our designers work closely with developers during implementation to ensure the final product matches the design intent faithfully.' },
    ],
  },
  {
    slug: 'business-solutions',
    title: 'Business Solutions & Zoho Implementation',
    icon: 'HiBriefcase',
    shortDescription: 'End-to-end Zoho ecosystem implementation that transforms disconnected tools into a unified, automated business operating system.',
    fullDescription: `Running a modern business on disconnected spreadsheets, siloed email threads, and incompatible software is a growth bottleneck waiting to become a crisis. As an Authorized Zoho Partner, iTechLink specialises in transforming your business operations with the Zoho ecosystem — a comprehensive suite of 45+ integrated applications covering every business function from sales and marketing to finance, HR, and customer support.

Our implementation practice goes far beyond software installation. We analyse your existing workflows, identify inefficiencies, and design a Zoho configuration tailored precisely to your processes, team structure, and industry requirements. From initial discovery through data migration, training, and ongoing support, we ensure your Zoho investment delivers measurable returns from day one.`,
    features: [
      { title: 'Zoho CRM Setup & Customisation', description: 'Full CRM configuration including custom modules, workflows, automation rules, and sales pipeline design specific to your sales process.', icon: 'HiChartBar' },
      { title: 'Zoho Books & Finance', description: 'Complete accounting setup including chart of accounts, invoice templates, tax configuration, bank feeds, and financial reporting.', icon: 'HiCurrencyDollar' },
      { title: 'Process Automation', description: 'Workflow automation that eliminates repetitive manual tasks, triggers actions across apps, and ensures nothing falls through the cracks.', icon: 'HiCog6Tooth' },
      { title: 'Data Migration', description: 'Secure, structured migration of your existing data from legacy systems, spreadsheets, or other CRMs into Zoho with full data integrity verification.', icon: 'HiArrowDownTray' },
      { title: 'Integration & API', description: 'Seamless integration of Zoho with your website, payment gateways, WhatsApp Business, accounting tools, and third-party APIs.', icon: 'HiLink' },
      { title: 'Training & Documentation', description: 'Role-based training sessions for all users plus comprehensive documentation ensuring your team is confident and self-sufficient.', icon: 'HiAcademicCap' },
    ],
    process: [
      { step: 1, title: 'Business Discovery', description: 'We conduct a thorough analysis of your current processes, tools, pain points, and goals to define the ideal Zoho configuration.' },
      { step: 2, title: 'Solution Design', description: 'A detailed implementation blueprint is produced showing which Zoho apps are needed, how they connect, and how workflows will be automated.' },
      { step: 3, title: 'Configuration & Build', description: 'Our certified Zoho specialists configure every app, custom module, workflow rule, and integration according to the approved blueprint.' },
      { step: 4, title: 'Data Migration & Testing', description: 'Existing data is migrated, cleaned, and validated. End-to-end testing ensures every workflow and integration performs correctly.' },
      { step: 5, title: 'Training & Go-Live', description: 'Role-based training for all team members, followed by a managed go-live with hypercare support during the critical first weeks.' },
    ],
    technologies: ['Zoho CRM', 'Zoho Books', 'Zoho Inventory', 'Zoho Desk', 'Zoho People', 'Zoho Projects', 'Zoho One', 'Zoho Flow', 'Zoho Analytics'],
    differentiators: [
      { title: 'Authorized Zoho Partner', description: 'Certified status means access to advanced resources, priority support from Zoho, and verified expertise your business can trust.' },
      { title: 'Process-First Approach', description: 'We design around your processes, not the other way around — ensuring Zoho fits your business rather than forcing you to fit the software.' },
      { title: 'Post-Go-Live Support', description: 'Our support does not end at launch. We offer ongoing Zoho management, optimisation, and user support packages tailored to your needs.' },
    ],
  },
  {
    slug: 'search-engine-optimisation',
    title: 'Search Engine Optimisation (SEO)',
    icon: 'HiArrowTrendingUp',
    shortDescription: 'Data-driven SEO strategies that build sustainable organic visibility, drive qualified traffic, and generate measurable business growth.',
    fullDescription: `Achieving and maintaining prominent search engine rankings in today's competitive landscape requires far more than keyword stuffing and backlink buying. At iTechLink, our SEO practice is built on technical rigour, content strategy, and a deep understanding of search engine algorithms and user intent.

We take a holistic approach that covers every dimension of search visibility: technical site health, on-page optimisation, content strategy, local SEO, and authoritative link acquisition. Our strategies are designed for sustainable, long-term results rather than quick wins that risk algorithm penalties. Every recommendation is backed by data, every campaign is tracked, and every result is reported with full transparency.`,
    features: [
      { title: 'Technical SEO Audit', description: 'Comprehensive analysis of crawlability, indexation, Core Web Vitals, site structure, and technical issues impacting search performance.', icon: 'HiWrenchScrewdriver' },
      { title: 'Keyword Research & Strategy', description: 'In-depth keyword analysis mapping user search intent to your products and services to identify the highest-value opportunities.', icon: 'HiMagnifyingGlass' },
      { title: 'On-Page Optimisation', description: 'Systematic optimisation of title tags, meta descriptions, headings, internal linking, and content structure across your entire site.', icon: 'HiDocumentText' },
      { title: 'Content Strategy & Creation', description: 'Strategic content plans and SEO-optimised articles, landing pages, and guides that attract and convert your target audience.', icon: 'HiPencilSquare' },
      { title: 'Local SEO', description: 'Google Business Profile optimisation, local citation building, and geo-targeted strategies to dominate local search results in your area.', icon: 'HiMapPin' },
      { title: 'Reporting & Analytics', description: 'Monthly performance reports with rankings, organic traffic, conversion data, and clear ROI metrics with actionable insights.', icon: 'HiChartBar' },
    ],
    process: [
      { step: 1, title: 'SEO Audit', description: 'Complete technical and content audit identifying all issues, opportunities, and competitive gaps affecting your search visibility.' },
      { step: 2, title: 'Strategy Development', description: 'A prioritised SEO roadmap covering technical fixes, keyword targets, content opportunities, and link acquisition plans.' },
      { step: 3, title: 'Technical Optimisation', description: 'Implementation of all technical fixes including site speed improvements, structured data, XML sitemaps, and crawl optimisation.' },
      { step: 4, title: 'Content & On-Page', description: 'Systematic optimisation of existing pages and creation of new high-value content targeting priority keywords and topics.' },
      { step: 5, title: 'Monitor & Iterate', description: 'Continuous monitoring of rankings, traffic, and algorithm updates with monthly reporting and strategy refinement.' },
    ],
    technologies: ['Google Search Console', 'Google Analytics 4', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Google Business Profile', 'Schema Markup'],
    differentiators: [
      { title: 'Sustainable White-Hat Methods', description: 'We exclusively use ethical, algorithm-proof strategies that build lasting rankings without the risk of manual penalties.' },
      { title: 'Local Market Expertise', description: 'Deep understanding of the Nigerian and African digital market, including local search behaviour and regional competitive landscapes.' },
      { title: 'Transparent Reporting', description: 'No vanity metrics — every report connects SEO activity directly to business outcomes like leads, revenue, and cost per acquisition.' },
    ],
  },
  {
    slug: 'it-infrastructure-procurement',
    title: 'IT Infrastructure & Procurement',
    icon: 'HiServerStack',
    shortDescription: 'Strategic IT infrastructure design, procurement, and deployment — from network architecture to server environments and endpoint management.',
    fullDescription: `Your IT infrastructure is the backbone of your entire business operation. Poorly designed or ageing infrastructure creates bottlenecks, security vulnerabilities, and costly downtime that directly impact productivity and revenue. At iTechLink, we design, procure, and deploy robust IT infrastructure solutions that provide the reliability, security, and scalability modern businesses demand.

From enterprise network design and server deployment to workstation procurement and cloud-hybrid architectures, our certified engineers deliver infrastructure tailored to your business size, budget, and growth trajectory. We maintain strong partnerships with leading hardware and software vendors, ensuring our clients receive enterprise-grade products at competitive prices with full warranty and support coverage.`,
    features: [
      { title: 'Network Design & Deployment', description: 'Complete LAN/WAN design, structured cabling, wireless infrastructure, and network security configuration for offices and campuses.', icon: 'HiWifi' },
      { title: 'Server & Storage Solutions', description: 'On-premise server procurement, rack installation, operating system deployment, and storage area network (SAN) configuration.', icon: 'HiServer' },
      { title: 'Workstation & Device Procurement', description: 'Vendor-agnostic hardware procurement, imaging, asset tagging, and deployment for laptops, desktops, and peripherals.', icon: 'HiComputerDesktop' },
      { title: 'Infrastructure Security', description: 'Firewall configuration, network segmentation, VPN setup, and intrusion detection system deployment protecting your infrastructure perimeter.', icon: 'HiShieldCheck' },
      { title: 'Virtualisation', description: 'VMware and Hyper-V virtualisation environments that maximise hardware utilisation, simplify management, and improve disaster recovery.', icon: 'HiCircleStack' },
      { title: 'Infrastructure Monitoring', description: 'Proactive 24/7 monitoring of network devices, servers, and endpoints with automated alerting and performance reporting.', icon: 'HiEye' },
    ],
    process: [
      { step: 1, title: 'Infrastructure Assessment', description: 'Audit of existing infrastructure, capacity planning analysis, and identification of risks and upgrade priorities.' },
      { step: 2, title: 'Solution Design', description: 'Detailed network diagrams, bill of materials, and infrastructure architecture aligned to your requirements and budget.' },
      { step: 3, title: 'Procurement & Sourcing', description: 'Vendor negotiation, hardware and software procurement through authorised channels with full warranty coverage.' },
      { step: 4, title: 'Installation & Configuration', description: 'Professional on-site installation, cabling, device configuration, and system integration by certified engineers.' },
      { step: 5, title: 'Handover & Documentation', description: 'Full as-built documentation, network diagrams, credentials handover, and staff training on new systems.' },
    ],
    technologies: ['Cisco', 'HP Enterprise', 'Dell Technologies', 'VMware', 'Microsoft Hyper-V', 'Fortinet', 'Ubiquiti', 'Synology NAS', 'Windows Server', 'Linux'],
    differentiators: [
      { title: 'Vendor-Agnostic Advice', description: 'We recommend the best solution for your needs, not the product that earns us the highest margin — always aligned to your budget and goals.' },
      { title: 'Microsoft Certified Engineers', description: 'Our infrastructure team holds Microsoft certifications, ensuring best-practice deployment of Windows Server and Microsoft 365 environments.' },
      { title: 'Full Project Lifecycle', description: 'From initial scoping through procurement, installation, and ongoing support — we manage the entire infrastructure project lifecycle.' },
    ],
  },
  {
    slug: 'graphics-design-branding',
    title: 'Graphics Design & Branding',
    icon: 'HiPhoto',
    shortDescription: 'Strategic brand identity design and creative graphics that communicate your value proposition with clarity and visual impact.',
    fullDescription: `A powerful brand is more than a logo — it's the complete visual and emotional language through which your business communicates with the world. At iTechLink, our creative studio combines strategic brand thinking with expert design execution to build identities that are distinctive, memorable, and built to endure.

Whether you are launching a new venture and need a brand built from the ground up, or an established business seeking to modernise a dated identity, our designers craft visual systems that reflect your values, resonate with your audience, and differentiate you in a crowded market. From brand strategy and logo design to comprehensive brand guidelines, marketing collateral, and digital assets, we deliver everything you need to show up consistently and professionally.`,
    features: [
      { title: 'Brand Strategy & Positioning', description: 'Defining your brand purpose, values, personality, and positioning to create a strategic foundation for all visual and messaging decisions.', icon: 'HiLightBulb' },
      { title: 'Logo & Identity Design', description: 'Custom logo design with multiple concepts, refinement rounds, and delivery in all required formats for print and digital use.', icon: 'HiStar' },
      { title: 'Brand Guidelines', description: 'Comprehensive brand style guides covering logo usage, colour palette, typography, imagery style, and tone of voice.', icon: 'HiDocumentText' },
      { title: 'Marketing Collateral', description: 'Business cards, letterheads, brochures, flyers, banners, and presentation templates aligned to your brand identity.', icon: 'HiRectangleStack' },
      { title: 'Digital & Social Media Assets', description: 'Social media graphics, email templates, digital banners, and online advertising assets optimised for each platform.', icon: 'HiPhoto' },
      { title: 'Packaging & Environmental Design', description: 'Product packaging, signage, exhibition stand graphics, and environmental branding for physical touchpoints.', icon: 'HiGift' },
    ],
    process: [
      { step: 1, title: 'Brand Discovery', description: 'Brand questionnaire, stakeholder interviews, and competitor analysis to establish the strategic brief for your identity.' },
      { step: 2, title: 'Creative Exploration', description: 'Multiple distinct creative directions presented for feedback — each with distinct aesthetic approaches and rationale.' },
      { step: 3, title: 'Design Development', description: 'The chosen direction is refined through collaboration, applying feedback until the identity is precisely right.' },
      { step: 4, title: 'Brand System Build', description: 'The core identity is extended into a full brand system including all specified collateral, guidelines, and digital assets.' },
      { step: 5, title: 'Delivery & Handover', description: 'All files delivered in required formats (AI, EPS, SVG, PNG, PDF) with brand guidelines and usage documentation.' },
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma', 'Adobe After Effects', 'Canva Pro'],
    differentiators: [
      { title: 'Strategy-Led Design', description: 'Every visual decision is rooted in brand strategy — ensuring your identity is not just attractive but strategically effective.' },
      { title: 'Industry Experience', description: 'We have designed for technology, finance, healthcare, retail, and professional services sectors across Nigeria and West Africa.' },
      { title: 'Full Asset Delivery', description: 'No incomplete handovers. Every project delivers a complete, professionally organised file package ready for immediate use.' },
    ],
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions & Migration',
    icon: 'HiCloudArrowUp',
    shortDescription: 'Secure, strategic cloud migration and managed cloud services that reduce infrastructure costs and unlock enterprise-grade scalability.',
    fullDescription: `The shift to cloud computing is no longer optional for businesses seeking operational efficiency, resilience, and competitive agility. At iTechLink, our cloud practice helps organisations successfully navigate their cloud journey — from initial cloud strategy and architecture through migration execution and ongoing managed services.

Whether you are moving your infrastructure to Microsoft Azure, Google Cloud, or Amazon Web Services, adopting Microsoft 365 for productivity, or building a cloud-native application, our certified cloud engineers design and execute cloud strategies that reduce costs, improve reliability, and give your team the freedom to work from anywhere without compromising security or performance.`,
    features: [
      { title: 'Cloud Strategy & Assessment', description: 'Readiness assessment, workload analysis, and total cost of ownership modelling to define the optimal cloud strategy for your organisation.', icon: 'HiLightBulb' },
      { title: 'Cloud Migration', description: 'Structured migration of servers, applications, and data to public cloud platforms with minimal disruption and full rollback planning.', icon: 'HiArrowUpCircle' },
      { title: 'Microsoft 365 Deployment', description: 'Full Microsoft 365 tenant setup, email migration, SharePoint configuration, Teams deployment, and user training for seamless adoption.', icon: 'HiEnvelope' },
      { title: 'Cloud Security', description: 'Identity and access management, multi-factor authentication, conditional access policies, and cloud security posture management.', icon: 'HiShieldCheck' },
      { title: 'Cloud Cost Optimisation', description: 'Ongoing analysis of cloud spend with right-sizing recommendations, reserved instance planning, and waste elimination strategies.', icon: 'HiCurrencyDollar' },
      { title: 'Managed Cloud Services', description: 'Proactive monitoring, patching, backup management, and incident response for your cloud environment as a fully managed service.', icon: 'HiCog6Tooth' },
    ],
    process: [
      { step: 1, title: 'Cloud Discovery', description: 'Inventory of existing workloads, dependencies, and infrastructure to create a comprehensive migration candidate list.' },
      { step: 2, title: 'Cloud Architecture Design', description: 'Target architecture design including network topology, security controls, high-availability configuration, and cost modelling.' },
      { step: 3, title: 'Migration Execution', description: 'Phased migration of workloads using proven migration tools with testing at each phase to validate performance and functionality.' },
      { step: 4, title: 'Security & Governance', description: 'Implementation of cloud security controls, compliance policies, backup strategy, and disaster recovery configuration.' },
      { step: 5, title: 'Optimisation & Management', description: 'Ongoing monitoring, cost optimisation reviews, and performance tuning as your cloud environment evolves with your business.' },
    ],
    technologies: ['Microsoft Azure', 'Microsoft 365', 'Google Cloud Platform', 'Amazon Web Services', 'Terraform', 'Azure AD', 'SharePoint Online', 'Teams'],
    differentiators: [
      { title: 'Microsoft Certified Partner', description: 'Our Microsoft certification validates our expertise in Azure and Microsoft 365, ensuring best-practice cloud deployments.' },
      { title: 'Zero-Downtime Migration Strategy', description: 'Our phased migration methodology minimises business disruption with tested rollback procedures at every stage.' },
      { title: 'Ongoing Managed Services', description: 'We provide continuous cloud management so your team can focus on core business activities rather than infrastructure management.' },
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity Services',
    icon: 'HiShieldCheck',
    shortDescription: 'Comprehensive cybersecurity services protecting your business from evolving threats — from vulnerability assessments to managed security operations.',
    fullDescription: `Cyber threats are no longer a concern exclusive to large enterprises — Nigerian businesses of all sizes are increasingly targeted by ransomware, phishing attacks, data breaches, and insider threats. At iTechLink, our cybersecurity practice provides the proactive defences and rapid incident response capabilities needed to protect your business, your data, and your reputation in an increasingly hostile digital landscape.

Our cybersecurity services span the full threat management lifecycle: from identifying vulnerabilities before attackers do, through deploying appropriate technical controls and building a security-aware culture in your organisation, to providing 24/7 monitoring and rapid incident response when threats materialise. We align our services to internationally recognised frameworks including ISO 27001 and NIST to ensure your security posture meets both regulatory requirements and best-practice standards.`,
    features: [
      { title: 'Vulnerability Assessment & Penetration Testing', description: 'Authorised ethical hacking engagements that identify exploitable weaknesses in your networks, applications, and infrastructure before attackers do.', icon: 'HiBug' },
      { title: 'Endpoint Protection', description: 'Enterprise endpoint detection and response (EDR) deployment, management, and monitoring across all devices in your organisation.', icon: 'HiComputerDesktop' },
      { title: 'Email Security', description: 'Advanced email threat protection including anti-phishing, anti-malware, DKIM/SPF/DMARC configuration, and user awareness training.', icon: 'HiEnvelope' },
      { title: 'Security Awareness Training', description: 'Engaging, scenario-based training programmes that build a security-conscious culture and reduce human-factor risk across your team.', icon: 'HiAcademicCap' },
      { title: 'Firewall & Network Security', description: 'Next-generation firewall deployment, configuration, and management protecting your network perimeter and internal segments.', icon: 'HiShieldCheck' },
      { title: 'Incident Response', description: 'Rapid incident response services including threat containment, forensic investigation, recovery support, and post-incident reporting.', icon: 'HiBell' },
    ],
    process: [
      { step: 1, title: 'Security Assessment', description: 'Comprehensive audit of your current security posture, identifying gaps against best-practice frameworks and industry standards.' },
      { step: 2, title: 'Risk Analysis', description: 'Prioritised risk register mapping identified vulnerabilities to potential business impact and likelihood of exploitation.' },
      { step: 3, title: 'Security Architecture', description: 'Design of the target security architecture and a prioritised remediation roadmap aligned to your risk appetite and budget.' },
      { step: 4, title: 'Control Implementation', description: 'Deployment of technical controls, security tools, and policy frameworks across your environment.' },
      { step: 5, title: 'Continuous Monitoring', description: 'Ongoing threat monitoring, log analysis, vulnerability scanning, and periodic penetration testing to maintain your security posture.' },
    ],
    technologies: ['Microsoft Defender', 'CrowdStrike', 'Fortinet', 'Barracuda', 'Qualys', 'Nessus', 'Splunk', 'KnowBe4', 'Cisco Umbrella'],
    differentiators: [
      { title: 'CompTIA Certified Team', description: 'Our security professionals hold CompTIA Security+ and related certifications, validating their expertise in cybersecurity fundamentals and practice.' },
      { title: 'Local Threat Intelligence', description: 'Understanding of the Nigerian and West African threat landscape enables us to prioritise the threats most relevant to your business context.' },
      { title: 'Business-Aligned Security', description: 'We balance security rigour with operational practicality, implementing controls that protect your business without impeding productivity.' },
    ],
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting & Strategy',
    icon: 'HiLightBulb',
    shortDescription: 'Strategic technology advisory services aligning your IT investments with business objectives for maximum competitive advantage.',
    fullDescription: `Technology investments without strategic direction lead to wasted budgets, misaligned tools, and frustrated users. At iTechLink, our IT consulting practice provides the senior technology leadership and strategic advisory services that help growing businesses make informed, confident decisions about their technology — whether they have an internal IT team or not.

Our consultants bring deep expertise across enterprise architecture, digital transformation, vendor selection, and IT governance. We work as a trusted extension of your leadership team, helping you cut through technology complexity to identify the right solutions, build the right roadmap, and execute with precision. From fractional CTO advisory to specific project strategy and IT due diligence, our consulting engagements are built around measurable business outcomes.`,
    features: [
      { title: 'IT Strategy Development', description: 'Multi-year IT roadmaps aligned to your business growth strategy, defining technology priorities, budgets, and timelines.', icon: 'HiMap' },
      { title: 'Digital Transformation Advisory', description: 'Guidance on digitising manual processes, adopting cloud services, and leveraging technology to create competitive advantage.', icon: 'HiArrowTrendingUp' },
      { title: 'Technology Vendor Selection', description: 'Objective vendor evaluation and recommendation across software, hardware, and service categories to ensure you select the best solution for your needs.', icon: 'HiCheckBadge' },
      { title: 'IT Governance & Policy', description: 'Development of IT policies, procedures, and governance frameworks that reduce risk and ensure consistent technology management.', icon: 'HiDocumentCheck' },
      { title: 'Fractional CTO Services', description: 'Part-time senior technology leadership for growing businesses that need executive-level IT guidance without a full-time hire.', icon: 'HiUserCircle' },
      { title: 'IT Due Diligence', description: 'Technology audits for mergers, acquisitions, or investment decisions — providing an independent assessment of IT assets and risks.', icon: 'HiClipboardDocumentCheck' },
    ],
    process: [
      { step: 1, title: 'Business Context Discovery', description: 'Understanding your business model, strategy, pain points, and technology landscape to frame the consulting engagement correctly.' },
      { step: 2, title: 'Current State Assessment', description: 'Objective evaluation of your existing IT capabilities, systems, processes, and team competencies against industry benchmarks.' },
      { step: 3, title: 'Strategy Development', description: 'Development of a clear, actionable technology strategy with prioritised initiatives, business cases, and success metrics.' },
      { step: 4, title: 'Roadmap & Planning', description: 'Detailed implementation roadmap with milestones, resource requirements, budget estimates, and risk mitigation strategies.' },
      { step: 5, title: 'Execution Support', description: 'Ongoing advisory support through implementation phases, vendor negotiations, and progress reviews against the approved roadmap.' },
    ],
    technologies: ['ITIL Framework', 'COBIT', 'ISO 27001', 'TOGAF', 'Microsoft 365', 'Azure', 'Zoho One', 'Project Management Tools'],
    differentiators: [
      { title: 'Business-First Perspective', description: 'Our consultants think about your business first and technology second — ensuring every recommendation serves a clear commercial purpose.' },
      { title: 'Unbiased Advisory', description: 'We have no financial incentive to recommend specific vendors unless it is genuinely in your best interest — our loyalty is to your outcomes.' },
      { title: 'Implementation Capability', description: 'Unlike pure advisory firms, we have the technical team to implement our recommendations — ensuring no gap between strategy and execution.' },
    ],
  },
  {
    slug: 'managed-it-support',
    title: 'Managed IT Support',
    icon: 'HiLifebuoy',
    shortDescription: 'Proactive, reliable managed IT support services keeping your technology running at peak performance — so your team can focus on business.',
    fullDescription: `Technology issues don't wait for convenient moments. When your systems fail, email goes down, or a critical application stops working, every minute of downtime translates directly into lost productivity and revenue. At iTechLink, our Managed IT Support service provides businesses with a dedicated technology team available when needed — delivering fast, expert resolution of IT issues alongside proactive monitoring and maintenance that prevents problems before they occur.

Our managed support packages are designed for businesses that want the benefits of a professional IT department without the overhead of full-time IT staff. From unlimited helpdesk support and remote assistance to on-site visits and strategic quarterly reviews, we provide the coverage your business needs at a predictable monthly cost.`,
    features: [
      { title: 'Helpdesk & Remote Support', description: 'Fast-response helpdesk with remote desktop access for immediate resolution of software, connectivity, and configuration issues.', icon: 'HiLifebuoy' },
      { title: 'Proactive Monitoring', description: '24/7 monitoring of servers, network devices, and workstations with automated alerting ensuring issues are caught before they cause downtime.', icon: 'HiEye' },
      { title: 'Patch Management', description: 'Automated deployment of security patches and software updates across all managed devices on a scheduled, tested basis.', icon: 'HiArrowDownTray' },
      { title: 'Backup & Disaster Recovery', description: 'Automated backup solutions with regular restore testing and documented disaster recovery procedures to protect critical data.', icon: 'HiArchiveBox' },
      { title: 'On-Site Support', description: 'Scheduled and ad-hoc on-site visits for hardware issues, infrastructure changes, and user support that cannot be handled remotely.', icon: 'HiWrenchScrewdriver' },
      { title: 'Vendor Management', description: 'We manage relationships with your technology vendors — internet providers, hardware suppliers, software vendors — on your behalf.', icon: 'HiUsers' },
    ],
    process: [
      { step: 1, title: 'Environment Audit', description: 'Complete audit of your IT environment including all devices, software, network infrastructure, and existing documentation.' },
      { step: 2, title: 'Onboarding & Monitoring Setup', description: 'Deployment of monitoring agents, configuration of alerting thresholds, and documentation of your environment into our systems.' },
      { step: 3, title: 'Support Commencement', description: 'Full managed support begins with agreed SLA response times, helpdesk access, and dedicated account manager assignment.' },
      { step: 4, title: 'Proactive Maintenance', description: 'Ongoing scheduled maintenance activities including patching, backup verification, performance reviews, and system optimisation.' },
      { step: 5, title: 'Quarterly Strategic Review', description: 'Regular business reviews presenting your IT health, incident trends, upcoming needs, and technology recommendations.' },
    ],
    technologies: ['N-able', 'ConnectWise', 'Veeam Backup', 'Windows Server', 'Microsoft 365', 'TeamViewer', 'Acronis', 'ManageEngine'],
    differentiators: [
      { title: 'Predictable Monthly Cost', description: 'Fixed monthly pricing eliminates unpredictable IT spend and allows accurate technology budget planning all year round.' },
      { title: 'Local Lagos-Based Engineers', description: 'On-site support delivered by local engineers who understand the specific infrastructure challenges of operating in Lagos, Nigeria.' },
      { title: 'SLA-Backed Response Times', description: 'Contractually guaranteed response and resolution times ensure your IT issues are treated with the urgency your business demands.' },
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics & Business Intelligence',
    icon: 'HiChartBar',
    shortDescription: 'Transform raw business data into actionable insights with custom dashboards, reporting, and analytics solutions that drive smarter decisions.',
    fullDescription: `Most businesses are sitting on a goldmine of data they are unable to extract value from. Disconnected systems, manual reports, and a lack of analytical capability mean critical insights remain hidden while decisions are made on gut feel rather than evidence. At iTechLink, our Data Analytics & Business Intelligence practice bridges the gap between raw data and strategic insight — giving leaders the visibility they need to make confident, data-driven decisions.

We design and implement end-to-end analytics solutions spanning data integration, warehousing, visualisation, and reporting. Whether you need a single executive dashboard or a complete enterprise BI infrastructure, our data specialists combine technical expertise with business domain knowledge to deliver analytics that are not only accurate but genuinely useful to your decision-makers.`,
    features: [
      { title: 'Business Intelligence Dashboards', description: 'Custom interactive dashboards in Power BI or Zoho Analytics providing real-time visibility of key performance indicators and business metrics.', icon: 'HiPresentationChartBar' },
      { title: 'Data Integration', description: 'Connecting and consolidating data from multiple sources — CRM, ERP, spreadsheets, databases — into a unified, reliable data foundation.', icon: 'HiLink' },
      { title: 'Custom Reporting', description: 'Automated recurring reports delivered on schedule, eliminating manual data pulling and ensuring consistent, accurate reporting across the organisation.', icon: 'HiDocumentChartBar' },
      { title: 'Data Quality & Governance', description: 'Data cleansing, validation rules, and governance frameworks ensuring your analytics are built on accurate, trustworthy data.', icon: 'HiCheckBadge' },
      { title: 'Predictive Analytics', description: 'Statistical modelling and machine learning models that identify trends, forecast performance, and surface predictive insights from your historical data.', icon: 'HiSparkles' },
      { title: 'Zoho Analytics Implementation', description: 'Full Zoho Analytics setup connecting your Zoho apps and external data sources for unified business intelligence across your operation.', icon: 'HiChartPie' },
    ],
    process: [
      { step: 1, title: 'Data Discovery', description: 'Mapping all your data sources, understanding current reporting processes, and defining the key questions your analytics must answer.' },
      { step: 2, title: 'Data Architecture Design', description: 'Designing the data infrastructure — integration pipelines, data warehouse structure, and analytics layer — to support your requirements.' },
      { step: 3, title: 'Data Integration & ETL', description: 'Building the pipelines that extract, transform, and load data from all sources into a clean, structured analytical data store.' },
      { step: 4, title: 'Dashboard & Report Build', description: 'Designing and developing intuitive dashboards and reports that make insights accessible to both technical and non-technical users.' },
      { step: 5, title: 'Training & Handover', description: 'Training your team to self-serve analytics, create custom reports, and maintain the solution as your data needs evolve.' },
    ],
    technologies: ['Power BI', 'Zoho Analytics', 'Google Looker Studio', 'Microsoft SQL Server', 'Python', 'Excel', 'Google BigQuery', 'PostgreSQL'],
    differentiators: [
      { title: 'Business Context Understanding', description: 'We combine data engineering expertise with business acumen to build analytics that answer the real questions executives and managers need answered.' },
      { title: 'Zoho Analytics Expertise', description: 'As Zoho partners, we deliver powerful BI solutions fully integrated with your Zoho ecosystem, eliminating data silos across your operation.' },
      { title: 'Actionable Insights Focus', description: 'We prioritise delivering insights that drive action, not just beautiful charts — every dashboard is designed with decision-making workflows in mind.' },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'HiMegaphone',
    shortDescription: 'Strategic digital marketing campaigns across search, social, and email that build your brand, generate qualified leads, and deliver measurable ROI.',
    fullDescription: `In an increasingly crowded digital marketplace, reaching your target audience requires more than simply having a website. At iTechLink, our Digital Marketing practice delivers integrated campaigns across the channels where your customers spend their time — combining paid advertising, social media management, email marketing, and content strategy to build brand awareness and generate a consistent pipeline of qualified leads.

Our approach is rooted in data: every campaign is tracked, every investment is justified, and every strategy is continuously optimised based on real performance data. We work closely with your sales team to ensure marketing activity is aligned to revenue goals and that every naira invested in digital marketing is accountable to a clear return.`,
    features: [
      { title: 'Pay-Per-Click Advertising', description: 'Google Ads and Bing Ads campaign management — from keyword strategy and ad creation to bid management and conversion optimisation.', icon: 'HiCursorArrowRays' },
      { title: 'Social Media Marketing', description: 'Strategic social media management across LinkedIn, Instagram, Twitter/X, and Facebook with engaging content and community management.', icon: 'HiShareShare' },
      { title: 'Email Marketing', description: 'Zoho Campaigns-powered email programmes including automated nurture sequences, newsletters, and promotional campaigns.', icon: 'HiEnvelope' },
      { title: 'Content Marketing', description: 'Blog articles, case studies, white papers, and lead magnets that position your brand as an authority and attract organic traffic.', icon: 'HiPencilSquare' },
      { title: 'Social Media Advertising', description: 'Targeted paid campaigns on LinkedIn, Instagram, and Facebook reaching your exact buyer persona with compelling creative.', icon: 'HiMegaphone' },
      { title: 'Marketing Analytics', description: 'Unified marketing dashboards tracking all channel performance, attribution reporting, and ROI analysis across every campaign.', icon: 'HiChartBar' },
    ],
    process: [
      { step: 1, title: 'Marketing Audit & Strategy', description: 'Audit of existing digital presence and marketing activity, followed by a comprehensive digital marketing strategy aligned to your business goals.' },
      { step: 2, title: 'Audience & Channel Research', description: 'Defining target buyer personas and identifying the most effective channels and messaging to reach and engage them.' },
      { step: 3, title: 'Campaign Creation', description: 'Development of campaign assets including ad copy, creative, landing pages, and email sequences ready for launch.' },
      { step: 4, title: 'Launch & Monitoring', description: 'Campaign launch with intensive monitoring during the first two weeks to identify optimisation opportunities and address any issues.' },
      { step: 5, title: 'Optimise & Scale', description: 'Ongoing optimisation of every campaign element based on performance data, with monthly reporting and quarterly strategy reviews.' },
    ],
    technologies: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'Zoho Campaigns', 'Google Analytics 4', 'Mailchimp', 'Hootsuite', 'Canva'],
    differentiators: [
      { title: 'ROI-Accountability', description: 'Every campaign is tied to measurable business outcomes — leads, sales, or revenue — with transparent reporting on cost per acquisition.' },
      { title: 'Zoho Marketing Integration', description: 'As Zoho partners, we connect your marketing tools directly to CRM and sales workflows — ensuring no lead is lost and every touchpoint is tracked.' },
      { title: 'Nigerian Market Expertise', description: 'We understand the nuances of the Nigerian digital market — consumer behaviour, platform preferences, and cultural context — for campaigns that truly connect.' },
    ],
  },
]
