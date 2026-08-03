export const site = {
  name: 'UniHunt',
  legalName: 'UniHunt',
  parent: 'UniMarg Higher Education Consultancy',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://unihunt.in',
  tagline: 'Find your future abroad.',
  description:
    'UniHunt guides students and professionals to study and build careers abroad, Dubai-first, with select UK and Germany programmes. Admissions, licensing, placement and visa support, end to end.',
  // TODO: replace placeholders before go-live.
  email: 'hello@unihunt.in',
  phonePlaceholder: '+91 00000 00000',
  whatsappPlaceholder: '910000000000', // digits only, no +, placeholder
  address: {
    city: 'Ahmedabad',
    region: 'Gujarat',
    country: 'IN',
  },
  socials: {
    // Add real profile URLs to strengthen sameAs / brand-entity signals.
    linkedin: '',
    instagram: '',
    youtube: '',
    facebook: '',
  },
  nav: [
    { label: 'Study Abroad', href: '/study-abroad' },
    { label: 'Careers Abroad', href: '/careers-abroad' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
  ],
};

export const demoContent = process.env.NEXT_PUBLIC_DEMO_CONTENT !== 'false';

export const sameAs = Object.values(site.socials).filter(Boolean);
