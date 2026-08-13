import {
  MonitorSmartphoneIcon,
  TrendingUpIcon,
  LayoutDashboardIcon,
  ZapIcon,
  CreditCardIcon,
  BarChart3Icon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  FileTextIcon,
  BadgeIndianRupeeIcon,
  SparklesIcon,
  CpuIcon,
  HeadphonesIcon,
  FileCode2Icon,
  ScalingIcon,
  ShieldCheckIcon,
  GaugeIcon,
  RocketIcon,
  SearchIcon,
  PaletteIcon,
  Code2Icon,
  BugIcon,
  LifeBuoyIcon
} from
  'lucide-react';
import type { LandingConfig, Benefit, ProcessStep, Tech } from '../schema/landing';

export const websiteLanding: LandingConfig = {
  id: 'website',
  eyebrow: 'Naxora Technology · Website Development',
  headline: 'Professional Business Website',
  headlineAccent: '₹9,999',
  description:
    'Get a beautifully designed website that makes your business look premium, builds instant trust and turns visitors into paying customers.',
  trustBadges: [
    'Free Consultation',
    'Fast Delivery',
    'SEO Ready',
    'Mobile Responsive',
    'Secure Development',
    'Admin Panel Included'],

  mockup: "/8d59ae92-8e02-48ce-ace3-6aece7686ce1.jpg",

  mockupAlt: 'Laptop showing a modern business website designed by Naxora Technology',
  stats: [
    { value: 450, suffix: '+', label: 'Websites Delivered' },
    { value: 7, suffix: ' Days', label: 'Average Launch Time' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 30, suffix: ' Min', label: 'Response Time' }],

  industriesTitle: 'Websites built for every business',
  industriesSubtitle:
    'We have designed high-converting websites across industries. Yours is next.',
  industries: [
    {
      name: 'Corporate',
      image: "/06fab853-fdee-4bce-8b04-9ef31b3138c9.jpg"

    },
    {
      name: 'Business',
      image: "/a64245a2-abfa-4bc8-abcb-3797200b4b23.jpg"

    },
    {
      name: 'Ecommerce',
      image: "/32d3f50b-087a-481a-b1d5-225ceb73e50d.jpg"

    },
    {
      name: 'Portfolio',
      image: "/42bce2c1-b6f3-4c09-ac35-196652bc41c5.jpg"

    },
    {
      name: 'School',
      image: "/3e6fbcc0-b188-4fe1-906f-91c0d1353572.jpg"

    },
    {
      name: 'Hospital',
      image: "/13a3afb9-59d5-4cc2-89e7-d36f53a1b08c.jpg"

    },
    {
      name: 'Travel',
      image: "/c2fe1060-719f-47dd-81df-6d8b9bd1ff8e.jpg"

    },
    {
      name: 'Construction',
      image: "/353c24f6-144e-438b-b5ab-10872edf8409.jpg"

    },
    {
      name: 'Restaurant',
      image: "/69d1653a-5970-4bea-95b6-fb55ffb9110b.jpg"

    },
    {
      name: 'Manufacturing',
      image: "/6f34ddfa-0a25-4a5e-9d0b-78d01f1bd391.jpg"

    }],

  benefits: [
    {
      title: 'Affordable Pricing',
      description: 'Premium quality at a price small businesses can actually say yes to.',
      icon: BadgeIndianRupeeIcon
    },
    {
      title: 'Modern Design',
      description: 'Designs that make customers trust you before they even call.',
      icon: SparklesIcon
    },
    {
      title: 'Latest Technology',
      description: 'Built on the same stack used by the world’s best products.',
      icon: CpuIcon
    },
    {
      title: 'SEO Friendly',
      description: 'Structured to rank, so new customers find you on Google.',
      icon: TrendingUpIcon
    },
    {
      title: 'Fast Loading',
      description: 'Every screen loads in under a second. Fewer drop-offs, more leads.',
      icon: ZapIcon
    },
    {
      title: 'Admin Panel',
      description: 'Update content, prices and offers yourself in a few clicks.',
      icon: LayoutDashboardIcon
    },
    {
      title: 'Dedicated Support',
      description: 'One point of contact who replies in minutes, not days.',
      icon: HeadphonesIcon
    },
    {
      title: 'Source Code',
      description: '100% ownership. The full code is handed over to you.',
      icon: FileCode2Icon
    },
    {
      title: 'Scalable',
      description: 'Starts small, grows to thousands of users without a rebuild.',
      icon: ScalingIcon
    },
    {
      title: 'Secure',
      description: 'SSL, encrypted data and safe payments as standard.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Google Optimized',
      description: 'Built for Core Web Vitals and high quality ad scores.',
      icon: GaugeIcon
    },
    {
      title: 'Fast Delivery',
      description: 'Most projects go live within 7 to 15 working days.',
      icon: RocketIcon
    }],
  featuresTitle: 'Everything included in your website',
  featuresSubtitle: 'No hidden add-ons. No surprise invoices.',
  features: [
    {
      title: 'Fully Responsive',
      description:
        'Pixel perfect on mobile, tablet and desktop — where 80% of your customers are.',
      icon: MonitorSmartphoneIcon,
      size: 'lg'
    },
    {
      title: 'SEO Setup',
      description: 'On-page SEO, sitemap and Google indexing done for you.',
      icon: TrendingUpIcon,
      size: 'md'
    },
    {
      title: 'Admin Panel',
      description: 'Edit pages, images and offers yourself, anytime.',
      icon: LayoutDashboardIcon,
      size: 'sm'
    },
    {
      title: 'CMS Ready',
      description: 'Add blogs, products or services without a developer.',
      icon: FileTextIcon,
      size: 'sm'
    },
    {
      title: 'Blazing Fast',
      description: 'Optimised images and code for under-1s load times.',
      icon: ZapIcon,
      size: 'sm'
    },
    {
      title: 'Payment Gateway',
      description: 'Accept UPI, cards and netbanking securely.',
      icon: CreditCardIcon,
      size: 'md'
    },
    {
      title: 'Analytics',
      description: 'Google Analytics and Search Console connected.',
      icon: BarChart3Icon,
      size: 'sm'
    },
    {
      title: 'Lead Forms',
      description: 'Enquiries delivered straight to your inbox.',
      icon: MailIcon,
      size: 'sm'
    },
    {
      title: 'Google Maps',
      description: 'Customers find your store in one tap.',
      icon: MapPinIcon,
      size: 'sm'
    },
    {
      title: 'WhatsApp Chat',
      description: 'A floating chat button that turns visits into conversations.',
      icon: MessageCircleIcon,
      size: 'md'
    }],

  plans: [
    {
      name: 'Starter',
      audience: 'Perfect for new businesses and local services',
      price: '₹9,999',
      priceNote: 'Starting From',
      highlight: true,
      badge: 'Best Value',
      features: [
        'Up to 5 premium pages',
        'Mobile responsive design',
        'Enquiry form + WhatsApp chat',
        'Basic SEO setup',
        'Free domain guidance',
        'Delivery in 7 days']

    },
    {
      name: 'Business',
      audience: 'For growing brands that need to sell online',
      price: '₹24,999',
      priceNote: 'Starting From',
      features: [
        'Up to 15 pages or catalogue',
        'CMS + full admin panel',
        'Payment gateway integration',
        'Advanced SEO + Analytics',
        'Blog and lead automation',
        'Priority support']

    },
    {
      name: 'Enterprise',
      audience: 'Custom platforms, portals and integrations',
      price: 'Custom Quote',
      priceNote: 'Tailored For You',
      features: [
        'Custom web application',
        'Dedicated project manager',
        'API and ERP integrations',
        'Cloud setup on AWS',
        'Security audit',
        'Annual maintenance plan']

    }],

  testimonials: [
    {
      name: 'Rajesh Mehta',
      role: 'Director',
      company: 'Mehta Interiors',
      quote:
        'Our new website looks better than brands 10x our size. We started getting enquiries in the first week itself.',
      photo: "/7e3e9267-2159-4816-8b04-8318f7675e88.jpg"

    },
    {
      name: 'Priya Sharma',
      role: 'Founder',
      company: 'Bloom Skincare',
      quote:
        'They delivered in 6 days, set up payments and taught me the admin panel. Online orders are now 40% of our sales.',
      photo: "/a7f1b405-a562-4eb7-b5eb-884b04ca54d4.jpg"

    },
    {
      name: 'Arun Nair',
      role: 'Partner',
      company: 'Nair & Associates',
      quote:
        'Clean, fast and professional. Clients tell us the website is what made them trust us before the first call.',
      photo: "/6be506e4-642d-40ea-968e-2c4c555c9a96.jpg"

    },
    {
      name: 'Meera Iyer',
      role: 'Principal',
      company: 'Sunrise Public School',
      quote:
        'Admissions enquiries doubled after launch. The team handled everything and still replies within minutes.',
      photo: "/393fa437-9c10-4357-91b8-6cf09ae04a84.jpg"

    }],

  faqs: [
    {
      question: 'How much does a professional website cost?',
      answer:
        'Websites start at ₹9,999 for a complete 5-page business website. The final price depends on the number of pages and features you need — you get a fixed quote before we start, with no hidden charges.'
    },
    {
      question: 'How long will it take to go live?',
      answer:
        'Most business websites are delivered in 7 working days. Larger ecommerce or custom projects usually take 15 to 25 days.'
    },
    {
      question: 'Do I need to pay in advance?',
      answer:
        'No advance is needed for the consultation and design direction. You only pay once you approve the design and scope.'
    },
    {
      question: 'Will my website work on mobile?',
      answer:
        'Yes. Every website is designed mobile-first and tested on all popular phones, tablets and browsers.'
    },
    {
      question: 'Can I update the website myself?',
      answer:
        'Absolutely. You get an easy admin panel plus a short training call, so you can change text, images, prices and offers anytime.'
    },
    {
      question: 'Do I own the code and content?',
      answer:
        'Yes. Full source code, design files and hosting access are handed over to you after launch.'
    }],

  techStack: [
    { name: 'Next.js', short: 'N', tint: 'text-ink' },
    { name: 'React', short: 'R', tint: 'text-sky-500' },
    { name: 'Angular', short: 'A', tint: 'text-red-500' },
    { name: 'Flutter', short: 'F', tint: 'text-blue-500' },
    { name: 'React Native', short: 'RN', tint: 'text-cyan-500' },
    { name: 'Node.js', short: 'No', tint: 'text-green-600' },
    { name: 'MongoDB', short: 'M', tint: 'text-emerald-600' },
    { name: 'MySQL', short: 'My', tint: 'text-orange-500' },
    { name: 'AWS', short: 'aws', tint: 'text-amber-600' },
    { name: 'Docker', short: 'D', tint: 'text-blue-600' },
    { name: 'Firebase', short: 'Fb', tint: 'text-yellow-500' },
    { name: 'WordPress', short: 'W', tint: 'text-slate-600' }],
  process: [
    {
      title: 'Discover',
      description: 'A quick call to understand your business, customers and goals.',
      icon: SearchIcon
    },
    {
      title: 'Design',
      description: 'You approve a premium design before a single line is written.',
      icon: PaletteIcon
    },
    {
      title: 'Develop',
      description: 'Built with the latest technology, fast and future ready.',
      icon: Code2Icon
    },
    {
      title: 'Test',
      description: 'Checked on every device, browser and screen size.',
      icon: BugIcon
    },
    {
      title: 'Launch',
      description: 'Live, indexed on Google and ready to bring you customers.',
      icon: RocketIcon
    },
    {
      title: 'Support',
      description: 'Free support after launch. We stay with you as you grow.',
      icon: LifeBuoyIcon
    }]
};