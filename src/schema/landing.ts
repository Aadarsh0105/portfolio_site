import type { LucideIcon } from 'lucide-react';

export type Industry = {
  name: string;
  image: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Tech = {
  name: string;
  short: string;
  tint: string;
};

export type Plan = {
  name: string;
  audience: string;
  price: string;
  priceNote: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  photo: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type LandingConfig = {
  id: 'website' | 'app';
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  description: string;
  trustBadges: string[];
  mockup: string;
  mockupAlt: string;
  stats: Stat[];
  industriesTitle: string;
  industriesSubtitle: string;
  industries: Industry[];
  benefits: Benefit[];
  featuresTitle: string;
  featuresSubtitle: string;
  features: Feature[];
  plans: Plan[];
  testimonials: Testimonial[];
  faqs: Faq[];
  techStack: Tech[];
  process: ProcessStep[];
};