import {
  Globe,
  Smartphone,
  PenTool,
  Code2,
  Search,
  Bot,
  Cloud,
  Zap,
  Rocket,
  type LucideIcon } from
'lucide-react';

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  gradient: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  heroImage: string;
  stats?: {label: string;value: string;}[];
  benefits: {title: string;description: string;}[];
  faqs: {question: string;answer: string;}[];
  features: string[];
  technologies: string[];
  process?: string[];
  industries?: string[];
};

export const services: Service[] = [
{
  slug: 'web-development',
  title: 'Web Development',
  icon: Globe,
  color: 'text-blue-600',
  bg: 'bg-blue-600/10',
  gradient: 'from-blue-500 to-cyan-400',
  tagline: 'Build for the modern web',
  faqs: [
  {
    question: 'How long does it take to build a website?',
    answer:
    'Most projects ship in 4–10 weeks depending on scope. We share a detailed timeline after the requirement analysis phase.'
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer:
    'Yes. We offer flexible maintenance plans covering updates, security patches, monitoring, and feature enhancements.'
  },
  {
    question: 'Will my site work on mobile devices?',
    answer:
    'Every site we build is fully responsive and tested across mobile, tablet, and desktop for a consistent experience.'
  },
  {
    question: 'Can you work with my existing brand and content?',
    answer:
    'Absolutely. We integrate your brand guidelines and can migrate existing content, or help you create new assets.'
  }],

  shortDescription:
  'Modern websites and web applications built for speed, scalability, and business growth.',
  overview:
  'We develop custom websites, portals, SaaS products, and enterprise web applications using modern technologies and best development practices. Our solutions are tailored to meet your specific business objectives while ensuring a seamless user experience.',
  heroImage:
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
  stats: [
  { label: 'Projects Delivered', value: '150+' },
  { label: 'Client Satisfaction', value: '99%' },
  { label: 'Average Uptime', value: '99.9%' }],

  benefits: [
  {
    title: 'Lightning Fast',
    description:
    'Optimized performance ensures your site loads instantly, reducing bounce rates.'
  },
  {
    title: 'Scalable Architecture',
    description:
    'Built to grow with your business, handling increased traffic effortlessly.'
  },
  {
    title: 'SEO Ready',
    description:
    'Structured with best practices to ensure high visibility on search engines.'
  },
  {
    title: 'Secure by Design',
    description:
    'Robust security measures protect your data and your users.'
  }],

  features: [
  'Corporate Websites',
  'Business Portals',
  'Custom Web Applications',
  'E-Commerce Solutions',
  'CMS Development',
  'Landing Pages',
  'API Integration',
  'Progressive Web Apps'],

  technologies: [
  'React',
  'Next.js',
  'Angular',
  'Vue.js',
  'Node.js',
  'Laravel',
  'NestJS',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS'],

  process: [
  'Requirement Analysis',
  'UI/UX Design',
  'Development',
  'Testing',
  'Deployment',
  'Maintenance'],

  industries: [
  'Healthcare',
  'Education',
  'Finance',
  'Retail',
  'Real Estate',
  'Manufacturing']

},
{
  slug: 'mobile-app-dev',
  title: 'Mobile App Dev',
  icon: Smartphone,
  color: 'text-pink-500',
  bg: 'bg-pink-500/10',
  gradient: 'from-pink-500 to-rose-400',
  tagline: 'Reach users on any device',
  faqs: [
  {
    question: 'Do you build for both iOS and Android?',
    answer:
    'Yes. We build native apps for each platform, or cross-platform apps with Flutter or React Native to save time and cost.'
  },
  {
    question: 'Will you handle the App Store submission?',
    answer:
    'We manage the full submission process for both the Apple App Store and Google Play, including review compliance.'
  },
  {
    question: 'Can the app work offline?',
    answer:
    'We can architect offline-first functionality with local caching and background sync where your use case requires it.'
  },
  {
    question: 'Do you support apps after launch?',
    answer:
    'Yes — we offer post-launch support covering OS updates, bug fixes, performance tuning, and new features.'
  }],

  shortDescription:
  'Native and cross-platform mobile applications for Android and iOS.',
  overview:
  'We create high-performance mobile applications with intuitive user experiences for startups and enterprises. From concept to app store launch, we handle the entire lifecycle.',
  heroImage:
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070',
  stats: [
  { label: 'Apps Launched', value: '85+' },
  { label: 'Active Users', value: '2M+' },
  { label: 'App Store Rating', value: '4.8' }],

  benefits: [
  {
    title: 'Cross-Platform Reach',
    description: 'Deploy to both iOS and Android from a single codebase.'
  },
  {
    title: 'Native Performance',
    description:
    'Smooth animations and responsive interfaces that feel natural.'
  },
  {
    title: 'Offline Support',
    description:
    'Keep users engaged even when they lose internet connection.'
  },
  {
    title: 'Push Engagement',
    description:
    'Re-engage users with targeted, timely push notifications.'
  }],

  features: [
  'Android Apps',
  'iOS Apps',
  'Cross-Platform Apps',
  'App Store Deployment',
  'Flutter Development',
  'React Native Apps',
  'Push Notifications',
  'Offline Functionality'],

  technologies: [
  'Flutter',
  'React Native',
  'Swift',
  'Kotlin',
  'Firebase',
  'Node.js',
  'MongoDB'],

  process: [
  'Planning',
  'Wireframing',
  'UI Design',
  'Development',
  'QA Testing',
  'App Store Launch'],

  industries: ['E-commerce', 'Health & Fitness', 'Fintech', 'Social Media']
},
{
  slug: 'ui-ux-design',
  title: 'UI/UX Design',
  icon: PenTool,
  color: 'text-orange-500',
  bg: 'bg-orange-500/10',
  gradient: 'from-orange-500 to-amber-400',
  tagline: 'Design that drives results',
  faqs: [
  {
    question: 'What deliverables do I receive?',
    answer:
    'You get research findings, wireframes, interactive prototypes, and a complete, handoff-ready design system.'
  },
  {
    question: 'Do you conduct user testing?',
    answer:
    'Yes. We run usability tests and incorporate real user feedback to validate designs before development.'
  },
  {
    question: 'Can you redesign an existing product?',
    answer:
    'We frequently run UX audits and redesigns, improving usability and conversions while respecting your brand.'
  },
  {
    question: 'Which tools do you design in?',
    answer:
    'We primarily work in Figma, which makes collaboration, feedback, and developer handoff seamless.'
  }],

  shortDescription:
  'Beautiful, user-centered interfaces that improve engagement and conversions.',
  overview:
  'Our designers create intuitive digital experiences focused on usability, accessibility, and modern design principles. We bridge the gap between user needs and business goals.',
  heroImage:
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000',
  stats: [
  { label: 'Design Systems', value: '40+' },
  { label: 'User Interviews', value: '500+' },
  { label: 'Conversion Lift', value: '35%' }],

  benefits: [
  {
    title: 'Higher Conversion',
    description:
    'Intuitive flows that guide users naturally to your desired actions.'
  },
  {
    title: 'Brand Consistency',
    description:
    'Unified design systems that ensure your brand looks great everywhere.'
  },
  {
    title: 'Reduced Churn',
    description:
    'Frustration-free experiences that keep your users coming back.'
  },
  {
    title: 'Accessible Design',
    description: 'Inclusive interfaces that work for everyone, everywhere.'
  }],

  features: [
  'User Research',
  'Wireframing',
  'Interactive Prototypes',
  'Design Systems',
  'Mobile UI Design',
  'Web UI Design',
  'Usability Testing',
  'UX Audits'],

  technologies: [
  'Figma',
  'Adobe XD',
  'Photoshop',
  'Illustrator',
  'Miro',
  'Framer'],

  process: [
  'Discovery',
  'Research',
  'Wireframing',
  'Visual Design',
  'Prototyping',
  'Testing']

},
{
  slug: 'custom-software',
  title: 'Custom Software',
  icon: Code2,
  color: 'text-violet-600',
  bg: 'bg-violet-600/10',
  gradient: 'from-violet-600 to-purple-500',
  tagline: 'Software that fits perfectly',
  faqs: [
  {
    question: 'Why choose custom software over off-the-shelf?',
    answer:
    'Custom software fits your exact workflows, scales with you, and avoids per-seat licensing and feature gaps.'
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer:
    'Yes. We build secure integrations and custom APIs to connect your CRMs, ERPs, and third-party tools.'
  },
  {
    question: 'How do you ensure data security?',
    answer:
    'We follow security best practices, run audits, and implement role-based access, encryption, and monitoring.'
  },
  {
    question: 'Who owns the source code?',
    answer:
    'You do. On project completion you receive full ownership of the codebase and documentation.'
  }],

  shortDescription:
  'Tailor-made software solutions designed around your business workflows.',
  overview:
  'From internal business tools to enterprise platforms, we build scalable software that automates operations and drives efficiency. Stop adapting to off-the-shelf software and let the software adapt to you.',
  heroImage:
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070',
  stats: [
  { label: 'Enterprise Systems', value: '30+' },
  { label: 'Hours Saved/Mo', value: '10k+' },
  { label: 'System Uptime', value: '99.99%' }],

  benefits: [
  {
    title: 'Workflow Alignment',
    description: 'Software built exactly how your team actually works.'
  },
  {
    title: 'No Licensing Fees',
    description:
    'Own your software without per-seat monthly subscriptions.'
  },
  {
    title: 'Competitive Edge',
    description:
    'Unique tools that your competitors cannot simply buy off the shelf.'
  },
  {
    title: 'Seamless Integration',
    description: 'Connects perfectly with your existing legacy systems.'
  }],

  features: [
  'SaaS Platforms',
  'Enterprise Applications',
  'CRM Development',
  'ERP Solutions',
  'Inventory Systems',
  'HR Management Systems',
  'Admin Dashboards',
  'Custom APIs'],

  technologies: [
  'React',
  'Next.js',
  'Node.js',
  'Laravel',
  '.NET',
  'PostgreSQL',
  'MongoDB',
  'Redis'],

  process: [
  'Architecture Design',
  'Agile Development',
  'Integration',
  'Security Audits',
  'Deployment',
  'Ongoing Support']

},
{
  slug: 'ai-solutions',
  title: 'AI Solutions',
  icon: Bot,
  color: 'text-emerald-500',
  bg: 'bg-emerald-500/10',
  gradient: 'from-emerald-500 to-teal-400',
  tagline: 'Intelligence that scales',
  faqs: [
  {
    question: 'Which AI models do you work with?',
    answer:
    'We integrate leading models from OpenAI, Anthropic (Claude), and Google (Gemini), choosing the best fit per use case.'
  },
  {
    question: 'Is my data safe with AI integrations?',
    answer:
    'We design for privacy with secure data handling, scoped access, and options for self-hosted or private deployments.'
  },
  {
    question: 'Can AI integrate with my existing product?',
    answer:
    'Yes. We embed chatbots, agents, and automation directly into your existing apps and workflows via APIs.'
  },
  {
    question: 'How do you measure AI success?',
    answer:
    'We define clear KPIs upfront — automation rate, response quality, cost savings — and monitor them continuously.'
  }],

  shortDescription:
  'AI-powered applications, chatbots, automation, and intelligent business solutions.',
  overview:
  'Leverage the latest AI technologies to automate workflows, improve customer support, and unlock new business opportunities. We integrate cutting-edge LLMs into your existing products.',
  heroImage:
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
  stats: [
  { label: 'AI Models Deployed', value: '50+' },
  { label: 'Automation Rate', value: '80%' },
  { label: 'Cost Reduction', value: '45%' }],

  benefits: [
  {
    title: '24/7 Operations',
    description:
    'AI agents that handle customer queries and tasks around the clock.'
  },
  {
    title: 'Data-Driven Insights',
    description:
    'Extract actionable intelligence from your unstructured data.'
  },
  {
    title: 'Cost Efficiency',
    description:
    'Dramatically reduce operational costs through intelligent automation.'
  },
  {
    title: 'Personalized Experiences',
    description:
    'Deliver tailored content and recommendations to every user.'
  }],

  features: [
  'AI Chatbots',
  'AI Agents',
  'Generative AI',
  'LLM Integration',
  'Document Processing',
  'Knowledge Base AI',
  'Workflow Automation',
  'Custom AI Solutions'],

  technologies: [
  'OpenAI',
  'Claude',
  'Gemini',
  'LangChain',
  'Python',
  'Node.js',
  'Pinecone'],

  process: [
  'Use Case Identification',
  'Data Preparation',
  'Model Selection',
  'Integration',
  'Fine-tuning',
  'Monitoring']

},
{
  slug: 'seo-optimization',
  title: 'SEO Optimization',
  icon: Search,
  color: 'text-indigo-500',
  bg: 'bg-indigo-500/10',
  gradient: 'from-indigo-500 to-blue-400',
  tagline: 'Dominate search results',
  faqs: [
  {
    question: 'How long until I see SEO results?',
    answer:
    'SEO is a long-term investment. Most clients see meaningful ranking and traffic gains within 3–6 months.'
  },
  {
    question: 'Do you guarantee #1 rankings?',
    answer:
    'No reputable agency can guarantee specific rankings. We focus on sustainable strategies that drive real, lasting growth.'
  },
  {
    question: 'What does an SEO audit include?',
    answer:
    'A full technical, on-page, and content review with prioritized recommendations and a clear action roadmap.'
  },
  {
    question: 'Do you report on progress?',
    answer:
    'Yes. You receive regular reports tracking keywords, traffic, and conversions tied to business outcomes.'
  }],

  shortDescription:
  'Increase your online visibility with technical and content-driven SEO strategies.',
  overview:
  'We optimize websites to improve rankings, increase organic traffic, and generate quality leads through a blend of technical fixes, content strategy, and continuous measurement.',
  heroImage:
  'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=2070',
  stats: [
  { label: 'Avg. Traffic Growth', value: '120%' },
  { label: 'Keywords Ranked', value: '5k+' },
  { label: 'Audits Completed', value: '200+' }],

  benefits: [
  {
    title: 'Organic Growth',
    description:
    "Sustainable traffic that doesn't stop when you pause ad spend."
  },
  {
    title: 'Higher Quality Leads',
    description:
    'Attract users who are actively searching for your exact solutions.'
  },
  {
    title: 'Brand Authority',
    description:
    'Build trust by appearing at the top of relevant search queries.'
  },
  {
    title: 'Technical Excellence',
    description:
    'A faster, healthier website that search engines love to crawl.'
  }],

  features: [
  'Technical SEO',
  'On-Page SEO',
  'Keyword Research',
  'Content Optimization',
  'Local SEO',
  'Performance Optimization',
  'SEO Audits',
  'Analytics & Reporting'],

  technologies: [
  'Google Analytics',
  'Google Search Console',
  'Ahrefs',
  'SEMrush',
  'Screaming Frog'],

  process: [
  'SEO Audit',
  'Keyword Research',
  'On-Page Optimization',
  'Technical Fixes',
  'Content Strategy',
  'Reporting'],

  industries: ['SaaS', 'E-commerce', 'Local Business', 'Publishing']
},
{
  slug: 'cloud-solutions',
  title: 'Cloud Solutions',
  icon: Cloud,
  color: 'text-sky-500',
  bg: 'bg-sky-500/10',
  gradient: 'from-sky-500 to-cyan-400',
  tagline: 'Infrastructure that scales',
  faqs: [
  {
    question: 'Which cloud providers do you support?',
    answer:
    'We work across AWS, Azure, and Google Cloud, recommending the right platform for your workloads and budget.'
  },
  {
    question: 'Can you migrate us with zero downtime?',
    answer:
    'We plan phased, low-risk migrations and use strategies like blue-green deployments to minimize or eliminate downtime.'
  },
  {
    question: 'Do you set up CI/CD pipelines?',
    answer:
    'Yes. We automate build, test, and deploy pipelines so your team ships faster and more reliably.'
  },
  {
    question: 'How do you control cloud costs?',
    answer:
    'We right-size resources, add autoscaling, and set up monitoring and alerts to keep spend predictable.'
  }],

  shortDescription:
  'Scalable cloud infrastructure and DevOps solutions for modern applications.',
  overview:
  'We help businesses migrate, deploy, and manage applications in secure cloud environments, with automated pipelines and observability built in from day one.',
  heroImage:
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
  stats: [
  { label: 'Workloads Migrated', value: '60+' },
  { label: 'Infra Cost Saved', value: '40%' },
  { label: 'Deploy Frequency', value: '10x' }],

  benefits: [
  {
    title: 'Infinite Scalability',
    description:
    'Automatically handle traffic spikes without manual intervention.'
  },
  {
    title: 'Cost Optimization',
    description: 'Pay only for the resources you actually use.'
  },
  {
    title: 'Disaster Recovery',
    description: 'Robust backup strategies to ensure business continuity.'
  },
  {
    title: 'Faster Time-to-Market',
    description:
    'Automated CI/CD pipelines that let you ship features daily.'
  }],

  features: [
  'Cloud Migration',
  'Cloud Infrastructure',
  'DevOps',
  'CI/CD Pipelines',
  'Docker & Kubernetes',
  'Server Management',
  'Monitoring & Logging',
  'Cloud Security'],

  technologies: [
  'AWS',
  'Azure',
  'Google Cloud',
  'Docker',
  'Kubernetes',
  'Vercel',
  'GitHub Actions'],

  process: [
  'Assessment',
  'Architecture',
  'Migration',
  'Automation',
  'Security Hardening',
  'Monitoring'],

  industries: ['Fintech', 'Healthcare', 'SaaS', 'Logistics']
},
{
  slug: 'automation',
  title: 'Business Automation',
  icon: Zap,
  color: 'text-yellow-500',
  bg: 'bg-yellow-500/10',
  gradient: 'from-yellow-500 to-amber-400',
  tagline: 'Work smarter, not harder',
  faqs: [
  {
    question: 'What processes can be automated?',
    answer:
    'Repetitive, rule-based tasks — data entry, approvals, email workflows, reporting, and cross-tool syncing — are ideal.'
  },
  {
    question: 'Which tools do you automate with?',
    answer:
    'We use platforms like n8n, Zapier, Make, and Power Automate, plus custom code for advanced scenarios.'
  },
  {
    question: 'Will automation disrupt my current workflow?',
    answer:
    'We map your process first and roll out automation incrementally, testing each step to avoid disruption.'
  },
  {
    question: 'How much time can I save?',
    answer:
    'It varies, but clients commonly reduce manual effort on automated processes by 50–70%.'
  }],

  shortDescription:
  'Automate repetitive processes and improve business productivity.',
  overview:
  'Reduce manual work through intelligent automation, workflow optimization, and system integrations that connect the tools your team already uses.',
  heroImage:
  'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=2074',
  stats: [
  { label: 'Workflows Automated', value: '300+' },
  { label: 'Manual Hours Cut', value: '70%' },
  { label: 'Integrations Built', value: '120+' }],

  benefits: [
  {
    title: 'Eliminate Errors',
    description: 'Remove human error from repetitive, data-entry tasks.'
  },
  {
    title: 'Reclaim Time',
    description:
    'Free up your team to focus on high-value, strategic work.'
  },
  {
    title: 'Unified Systems',
    description:
    'Connect siloed apps so data flows seamlessly across your business.'
  },
  {
    title: 'Faster Responses',
    description: 'Instantly trigger actions based on customer behaviors.'
  }],

  features: [
  'Workflow Automation',
  'CRM Automation',
  'Email Automation',
  'Document Automation',
  'Approval Workflows',
  'API Integrations',
  'Task Automation',
  'Business Process Automation'],

  technologies: [
  'n8n',
  'Zapier',
  'Make',
  'Power Automate',
  'Node.js',
  'OpenAI'],

  process: [
  'Process Mapping',
  'Opportunity Analysis',
  'Workflow Design',
  'Integration',
  'Testing',
  'Optimization'],

  industries: ['Operations', 'Sales', 'Finance', 'HR']
},
{
  slug: 'digital-transformation',
  title: 'Digital Transformation',
  icon: Rocket,
  color: 'text-green-500',
  bg: 'bg-green-500/10',
  gradient: 'from-green-500 to-emerald-400',
  tagline: 'Future-proof your business',
  faqs: [
  {
    question: 'What is digital transformation, exactly?',
    answer:
    'It is the strategic adoption of technology to improve operations, customer experience, and growth across your organization.'
  },
  {
    question: 'Where do we start?',
    answer:
    'We begin with a discovery and strategy phase to assess your current state and build a prioritized roadmap.'
  },
  {
    question: 'Will this disrupt our existing operations?',
    answer:
    'We phase changes carefully and include change management and enablement so your team adapts smoothly.'
  },
  {
    question: 'How do you measure success?',
    answer:
    'We tie initiatives to measurable outcomes — efficiency gains, cost savings, and improved customer metrics.'
  }],

  shortDescription:
  'Modernize your business with technology-driven transformation strategies.',
  overview:
  'We help organizations embrace digital technologies to improve operations, customer experiences, and long-term growth — from strategy through execution and change management.',
  heroImage:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
  stats: [
  { label: 'Transformations Led', value: '45+' },
  { label: 'Efficiency Gain', value: '55%' },
  { label: 'Systems Modernized', value: '90+' }],

  benefits: [
  {
    title: 'Agility & Resilience',
    description: 'Adapt quickly to market changes and new opportunities.'
  },
  {
    title: 'Enhanced Customer Experience',
    description:
    'Deliver modern, digital-first interactions your customers expect.'
  },
  {
    title: 'Data-Driven Culture',
    description:
    'Empower your team to make decisions based on real-time insights.'
  },
  {
    title: 'Operational Excellence',
    description: 'Streamline processes across the entire organization.'
  }],

  features: [
  'Technology Consulting',
  'Legacy Modernization',
  'Digital Strategy',
  'Data Analytics',
  'Business Process Optimization',
  'Cloud Adoption',
  'Innovation Consulting',
  'Change Management'],

  technologies: [
  'React',
  'Next.js',
  'Node.js',
  'AWS',
  'Azure',
  'OpenAI',
  'Power BI'],

  process: [
  'Discovery',
  'Strategy',
  'Roadmap',
  'Implementation',
  'Enablement',
  'Continuous Improvement'],

  industries: ['Enterprise', 'Manufacturing', 'Retail', 'Government']
}];