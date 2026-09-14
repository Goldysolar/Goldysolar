/**
 * Strenge TypeScript Typdefinitionen für die Goldy Solar Webpräsenz
 */

export interface AddressInfo {
  street: string;
  city: string;
  zip: string;
  country: string;
  full: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  mobile: string;
  mobileDisplay: string;
  email: string;
  web: string;
}

export interface LegalInfo {
  register: string;
  vatId: string;
  mstvResponsible: string;
}

export interface WhyUsItem {
  title: string;
  desc: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  subtitle: string;
  description: string;
  ceo: string;
  ceoTitle: string;
  experienceYears: string;
  address: AddressInfo;
  contact: ContactInfo;
  legal: LegalInfo;
  servicesList: string[];
  whyUs: WhyUsItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isMock: boolean;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  link: string;
  isMock: boolean;
  imageAlt?: string;
}

export interface BentoCardItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Sun' | 'BatteryCharging' | 'Home' | 'Zap' | 'Cpu';
  tag: string;
  isMock: boolean;
}

export interface PricingPlan {
  id: string;
  title: string;
  category: string;
  priceText: string;
  period: string;
  highlight: boolean;
  badgeText?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isMock: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
  text: string;
  isMock: boolean;
}

export interface ReferenceItem {
  id: string;
  category: 'Wohngebäude' | 'Gewerbe' | 'Utility';
  title: string;
  location: string;
  details: string;
  specs: string;
  isMock: boolean;
}
