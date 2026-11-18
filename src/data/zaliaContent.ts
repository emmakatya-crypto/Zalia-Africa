export interface HeroSlide {
  id: string;
  indexLabel: string;
  kicker: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
}

export interface CorePillar {
  id: string;
  number: string;
  title: string;
  description: string;
  focusAreas: string[];
  image: string;
  imageAlt: string;
}

export interface EditorialSection {
  id: string;
  anchor: string;
  kicker: string;
  title: string;
  body: string;
  highlights: { label: string; detail: string }[];
  image: string;
  imageAlt: string;
  mediaSide: 'left' | 'right';
}

export type SolutionCategory = 'all' | 'strategy' | 'sustainability' | 'partnership';

export interface ConsultancySolution {
  id: string;
  number: string;
  title: string;
  description: string;
  category: Exclude<SolutionCategory, 'all'>;
  categoryLabel: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'insights',
    indexLabel: '01',
    kicker: 'Zalia Africa · Value Chains Optimization',
    title: 'Empowering Agriculture with Expert Insights',
    description:
      'We are dedicated to transforming the agricultural industry with innovative consultancy services that boost productivity and sustainability.',
    image: '/src/assets/images/hero_agri_value_chain_1794986510766.jpg',
    imageAlt: 'Terraced agricultural fields with precision irrigation across fertile African hillsides at golden hour',
    imagePosition: 'object-[62%_60%]',
  },
  {
    id: 'expertise',
    indexLabel: '02',
    kicker: 'Zalia Africa · Tailored Advisory',
    title: 'Precision Strategy Built for Modern Farming',
    description:
      'Our expertise lies in creating tailored solutions that address the specific needs of modern farming, integrating advanced technology with proven agricultural practices.',
    image: '/src/assets/images/hero_agri_technology_1794986510974.jpg',
    imageAlt: 'Agronomist inspecting crop health in the field with digital monitoring tablet and weather sensor station',
    imagePosition: 'object-[60%_45%]',
  },
  {
    id: 'services',
    indexLabel: '03',
    kicker: 'Zalia Africa · Corporate Value Chains',
    title: 'Comprehensive Agricultural Consultancy Services',
    description:
      "We are committed to empowering farmers with the tools and knowledge needed to thrive in today's challenging agricultural landscape.",
    image: '/src/assets/images/hero_sustainable_harvest_1794986512516.jpg',
    imageAlt: 'Modern agricultural cooperative post-harvest sorting pavilion surrounded by productive crop rows',
    imagePosition: 'object-center',
  },
];

export const CORE_PILLARS: CorePillar[] = [
  {
    id: 'consultancy',
    number: '01',
    title: 'Agricultural Consultancy',
    description: "Tailored strategies to maximize your farm's efficiency and output.",
    focusAreas: ['Operational audits & yield diagnostics', 'Value chain structuring & market access'],
    image: '/src/assets/images/editorial_consultancy_field_1794986513222.jpg',
    imageAlt: 'Agricultural consultancy specialists examining soil samples and farm planning maps',
  },
  {
    id: 'sustainability',
    number: '02',
    title: 'Sustainable Farming Practices',
    description: 'Implementing eco-friendly methods for long-term success.',
    focusAreas: ['Soil regeneration & water conservation', 'Climate-resilient crop rotation models'],
    image: '/src/assets/images/editorial_sustainable_crops_1794986512691.jpg',
    imageAlt: 'Drip irrigation and healthy agroforestry crop cultivation in dark organic soil',
  },
  {
    id: 'technology',
    number: '03',
    title: 'Technology Integration',
    description:
      'Leveraging the latest agricultural technologies to streamline operations and improve yields.',
    focusAreas: ['Precision field telemetry & data workflows', 'Post-harvest traceability & grading systems'],
    image: '/src/assets/images/hero_agri_technology_1794986510974.jpg',
    imageAlt: 'Field agronomist using digital tablet and solar-powered crop monitoring sensors',
  },
];

export const EDITORIAL_SECTIONS: EditorialSection[] = [
  {
    id: 'transforming',
    anchor: 'about',
    kicker: 'Corporate Overview',
    title: 'Transforming Agriculture with Expert Consultancy',
    body: 'Zalia Africa is a consultancy dedicated to advancing agricultural practices worldwide. Our mission is to provide expert guidance and innovative solutions to the complex challenges facing modern agriculture. Our multidisciplinary team of experts spans a wide range of agricultural sciences and business disciplines, ensuring that our clients receive comprehensive and tailored advice.',
    highlights: [
      { label: 'Disciplines', detail: 'Agronomy, supply chain economics & agribusiness strategy' },
      { label: 'Scope', detail: 'Farm-level productivity through export value chains' },
    ],
    image: '/src/assets/images/editorial_consultancy_field_1794986513222.jpg',
    imageAlt: 'Multidisciplinary agricultural consultants evaluating crop plans and soil quality on-site',
    mediaSide: 'left',
  },
  {
    id: 'mission',
    anchor: 'mission',
    kicker: 'Purpose & Stewardship',
    title: 'Our Mission',
    body: 'Zalia Africa is dedicated to enhancing agricultural productivity and sustainability. Our goal is to bridge the gap in agricultural expertise by providing consultancy services tailored to the unique needs of our clients.',
    highlights: [
      { label: 'Productivity', detail: 'Measurable yield optimization across seasonal cycles' },
      { label: 'Sustainability', detail: 'Resource-efficient methods built for long-term resilience' },
    ],
    image: '/src/assets/images/editorial_sustainable_crops_1794986512691.jpg',
    imageAlt: 'Sustainable agroforestry farm plot with efficient drip irrigation lines',
    mediaSide: 'right',
  },
  {
    id: 'offer',
    anchor: 'services-overview',
    kicker: 'Advisory Scope',
    title: 'What We Offer',
    body: 'At Zalia Africa we offer a comprehensive range of consultancy services tailored to meet the unique needs of the agricultural industry. Our expertise spans various disciplines, ensuring that we provide the highest quality advice and solutions.',
    highlights: [
      { label: 'Value Chains', detail: 'Input sourcing, production efficiency & post-harvest logistics' },
      { label: 'Execution', detail: 'Hands-on technical advisory paired with ongoing support' },
    ],
    image: '/src/assets/images/editorial_value_chain_offer_1794986512917.jpg',
    imageAlt: 'Agricultural quality assurance team inspecting graded specialty coffee and grain lots in a modern warehouse',
    mediaSide: 'left',
  },
];

export const CONSULTANCY_SOLUTIONS: ConsultancySolution[] = [
  {
    id: 'sector-expertise',
    number: '01',
    title: 'Expertise Across Agricultural Sectors',
    description:
      'We cover a wide range of agricultural areas, ensuring our solutions are relevant and effective.',
    category: 'strategy',
    categoryLabel: 'Strategy & Reach',
  },
  {
    id: 'global-network',
    number: '02',
    title: 'Global Network',
    description:
      'Our team is based across continents, including the Americas, Europe, Africa, and South Asia, providing a vast network of agricultural professionals and organizations.',
    category: 'strategy',
    categoryLabel: 'Strategy & Reach',
  },
  {
    id: 'efficient-operations',
    number: '03',
    title: 'Efficient Operations',
    description:
      "Our company is registered in Estonia, allowing us to manage our global operations remotely and efficiently. Estonia's advanced digital infrastructure helps us streamline our business processes and serve our clients effectively.",
    category: 'strategy',
    categoryLabel: 'Strategy & Reach',
  },
  {
    id: 'customized-solutions',
    number: '04',
    title: 'Customized Solutions',
    description:
      'We know each client has unique needs. Our solutions are specifically designed to address individual challenges and goals, ensuring the best outcomes.',
    category: 'partnership',
    categoryLabel: 'Client Partnership',
  },
  {
    id: 'ongoing-support',
    number: '05',
    title: 'Ongoing Support',
    description:
      'We go beyond initial consultations, providing continuous support and guidance to ensure long-term success.',
    category: 'partnership',
    categoryLabel: 'Client Partnership',
  },
  {
    id: 'commitment-sustainability',
    number: '06',
    title: 'Commitment to Sustainability',
    description:
      'We emphasize sustainability across all agricultural fields, ensuring our solutions promote environmental conservation, resource efficiency, and long-term viability.',
    category: 'sustainability',
    categoryLabel: 'Sustainability & Tech',
  },
  {
    id: 'innovative-approaches',
    number: '07',
    title: 'Innovative Approaches',
    description:
      'We stay at the cutting edge of agricultural innovation, integrating the latest research and technologies into our solutions.',
    category: 'sustainability',
    categoryLabel: 'Sustainability & Tech',
  },
  {
    id: 'client-focused',
    number: '08',
    title: 'Client-Focused',
    description:
      "Our clients' needs are our top priority. We are dedicated to understanding your requirements and delivering solutions that drive your success.",
    category: 'partnership',
    categoryLabel: 'Client Partnership',
  },
  {
    id: 'multidisciplinary-team',
    number: '09',
    title: 'Multidisciplinary Team',
    description:
      'Our team includes experts from various agricultural and business disciplines, providing comprehensive and integrated solutions.',
    category: 'sustainability',
    categoryLabel: 'Sustainability & Tech',
  },
];

export const SOLUTION_FILTERS: { id: SolutionCategory; label: string }[] = [
  { id: 'all', label: 'All Solutions (9)' },
  { id: 'strategy', label: 'Strategy & Reach' },
  { id: 'sustainability', label: 'Sustainability & Tech' },
  { id: 'partnership', label: 'Client Partnership' },
];
