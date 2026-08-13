import {
  SmartphoneIcon,
  KeyRoundIcon,
  BellRingIcon,
  WalletIcon,
  TicketPercentIcon,
  NavigationIcon,
  LayoutDashboardIcon,
  StoreIcon,
  TruckIcon,
  CreditCardIcon,
  BarChart3Icon,
  PackageIcon,
  TrendingUpIcon,
  ZapIcon,
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
import type { LandingConfig } from '../schema/landing';

export const appLanding: LandingConfig = {
  id: 'app',
  eyebrow: 'Naxora Technology · Mobile App Development',
  headline: 'Professional Android & iOS Apps',
  headlineAccent: '₹9,999',
  description:
    'Launch your own branded mobile app that keeps customers coming back, increases repeat orders and grows your business from their pocket.',
  trustBadges: [
    'Free Consultation',
    'Fast Delivery',
    'Play Store Ready',
    'Android + iOS',
    'Secure Development',
    'Admin Panel Included'],

  mockup: "/a8c64150-c303-491a-81ed-035b83be676b.jpg",

  mockupAlt: 'Two smartphones showing a mobile app built by Naxora Technology',
  stats: [
    { value: 220, suffix: '+', label: 'Apps Launched' },
    { value: 15, suffix: ' Days', label: 'Average Launch Time' },
    { value: 97, suffix: '%', label: 'Client Satisfaction' },
    { value: 30, suffix: ' Min', label: 'Response Time' }],

  industriesTitle: 'Apps built for every business',
  industriesSubtitle:
    'From single stores to multi-vendor marketplaces — we have shipped it before.',
  industries: [
    {
      name: 'Restaurant',
      image: "/69d1653a-5970-4bea-95b6-fb55ffb9110b.jpg"

    },
    {
      name: 'Grocery',
      image: "/adcb7033-629e-46ea-8129-f903f6b5de63.jpg"

    },
    {
      name: 'Medicine',
      image: "/aff65a0e-81b4-4d3a-a31e-5cd410db677c.jpg"

    },
    {
      name: 'Fashion',
      image: "/619e6c38-bc7e-4519-b527-c593db6396d4.jpg"

    },
    {
      name: 'Education',
      image: "/a66cb7ef-1cc8-425e-b4ea-5af8ba7e0b9b.jpg"

    },
    {
      name: 'Healthcare',
      image: "/13a3afb9-59d5-4cc2-89e7-d36f53a1b08c.jpg"

    },
    {
      name: 'Salon',
      image: "/8cb1f5b1-7c99-474a-93da-ad5c7d44be18.jpg"

    },
    {
      name: 'Taxi',
      image: "/dd0c3312-3901-4d4f-9421-f010bd8a5fb7.jpg"

    },
    {
      name: 'Marketplace',
      image: "/28afd828-8e9b-4398-92d4-bd5af77c94e9.jpg"

    },
    {
      name: 'Real Estate',
      image: "/b4ef21af-dd43-4511-b011-fa1e7a28f630.jpg"

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
  featuresTitle: 'Everything included in your app',
  featuresSubtitle: 'Customer app, admin panel and dashboards — all in one package.',
  features: [
    {
      title: 'Android & iOS',
      description:
        'One app, both stores. Same premium experience on every device your customers own.',
      icon: SmartphoneIcon,
      size: 'lg'
    },
    {
      title: 'OTP Login',
      description: 'One-tap secure sign-in with mobile number verification.',
      icon: KeyRoundIcon,
      size: 'md'
    },
    {
      title: 'Push Notifications',
      description: 'Bring customers back with offers and order updates.',
      icon: BellRingIcon,
      size: 'sm'
    },
    {
      title: 'Wallet',
      description: 'In-app wallet, refunds and cashback support.',
      icon: WalletIcon,
      size: 'sm'
    },
    {
      title: 'Coupons',
      description: 'Run discounts and referral offers instantly.',
      icon: TicketPercentIcon,
      size: 'sm'
    },
    {
      title: 'Live Tracking',
      description: 'Real-time order and delivery tracking on the map.',
      icon: NavigationIcon,
      size: 'md'
    },
    {
      title: 'Admin Panel',
      description: 'Control orders, users and content from one dashboard.',
      icon: LayoutDashboardIcon,
      size: 'sm'
    },
    {
      title: 'Vendor Panel',
      description: 'Onboard multiple sellers with their own logins.',
      icon: StoreIcon,
      size: 'sm'
    },
    {
      title: 'Delivery App',
      description: 'A separate app for your delivery partners.',
      icon: TruckIcon,
      size: 'sm'
    },
    {
      title: 'Payments',
      description: 'UPI, cards, netbanking and cash on delivery.',
      icon: CreditCardIcon,
      size: 'md'
    },
    {
      title: 'Analytics',
      description: 'Sales, users and retention at a glance.',
      icon: BarChart3Icon,
      size: 'sm'
    },
    {
      title: 'Inventory',
      description: 'Stock, variants and low-stock alerts handled.',
      icon: PackageIcon,
      size: 'sm'
    }],

  plans: [
    {
      name: 'Starter',
      audience: 'A branded app for a single store or service',
      price: '₹9,999',
      priceNote: 'Starting From',
      highlight: true,
      badge: 'Best Value',
      features: [
        'Android app + admin panel',
        'OTP login & product catalogue',
        'Push notifications',
        'Play Store publishing help',
        'Enquiry / order flow',
        'Delivery in 15 days']

    },
    {
      name: 'Business',
      audience: 'For brands selling on Android and iOS',
      price: '₹24,999',
      priceNote: 'Starting From',
      features: [
        'Android + iOS apps',
        'Payments, wallet & coupons',
        'Live order tracking',
        'Full admin dashboard',
        'Analytics & inventory',
        'Priority support']

    },
    {
      name: 'Enterprise',
      audience: 'Multi-vendor marketplaces and custom platforms',
      price: 'Custom Quote',
      priceNote: 'Tailored For You',
      features: [
        'Vendor + delivery apps',
        'Dedicated project manager',
        'API & ERP integrations',
        'Scalable cloud on AWS',
        'Security audit',
        'Annual maintenance plan']

    }],

  testimonials: [
    {
      name: 'Rajesh Mehta',
      role: 'Owner',
      company: 'Spice Route Restaurants',
      quote:
        'Our own ordering app saved us lakhs in aggregator commission. Repeat orders went up within a month.',
      photo: "/7e3e9267-2159-4816-8b04-8318f7675e88.jpg"

    },
    {
      name: 'Priya Sharma',
      role: 'Co-founder',
      company: 'FreshCart Grocery',
      quote:
        'They built the customer app, delivery app and admin panel. Everything just works, and support is instant.',
      photo: "/a7f1b405-a562-4eb7-b5eb-884b04ca54d4.jpg"

    },
    {
      name: 'Arun Nair',
      role: 'Founder',
      company: 'RideEasy Cabs',
      quote:
        'Live tracking and wallet were live on the Play Store in three weeks. Genuinely a top-class team.',
      photo: "/6be506e4-642d-40ea-968e-2c4c555c9a96.jpg"

    },
    {
      name: 'Meera Iyer',
      role: 'Director',
      company: 'Glow Salon Studio',
      quote:
        'Bookings through the app are now half our business. Customers love the notifications and offers.',
      photo: "/393fa437-9c10-4357-91b8-6cf09ae04a84.jpg"

    }],

  faqs: [
    {
      question: 'How much does a mobile app cost?',
      answer:
        'Apps start at ₹9,999 for a branded Android app with an admin panel. The final price depends on the features you need — you always get a fixed quote before we begin.'
    },
    {
      question: 'Will I get both Android and iOS?',
      answer:
        'Yes. We build with Flutter and React Native, so a single project delivers polished apps for both the Play Store and the App Store.'
    },
    {
      question: 'How long does it take to launch?',
      answer:
        'A standard app goes live in about 15 working days. Multi-vendor marketplaces usually take 30 to 45 days.'
    },
    {
      question: 'Do you help with Play Store publishing?',
      answer:
        'We handle the complete submission — store listing, screenshots, policies and approval follow-ups.'
    },
    {
      question: 'Do I need to pay in advance?',
      answer:
        'No advance for the consultation and design direction. Payment starts only after you approve the plan.'
    },
    {
      question: 'Do I own the app and source code?',
      answer:
        'Yes. Complete source code, store accounts and design files are transferred to you after launch.'
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