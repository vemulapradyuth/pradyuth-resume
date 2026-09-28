export interface ScreenMockup {
  id: string;
  title: string;
  subtitle: string;
  deviceType: 'mobile' | 'desktop' | 'watch';
  description: string;
  keyFeatures: string[];
  screenData: {
    accentColor: string;
    headerTitle: string;
    sections: {
      type: 'hero' | 'metric' | 'list' | 'cards' | 'form' | 'specs';
      heading?: string;
      items?: { label: string; value: string; desc?: string; status?: string }[];
    }[];
  };
}

export interface Project {
  id: string;
  title: string;
  client: string;
  role: string;
  timeline: string;
  category: 'Healthcare' | 'Robotics & Automation' | 'Smart Tourism' | 'E-Commerce & Wellness' | 'FoodTech & Sustainability';
  figmaUrl: string;
  liveUrl?: string;
  tools: string[];
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  keyHighlights: string[];
  screens: ScreenMockup[];
  gradientTheme: string;
  accentColor: string;
  badgeAccent: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'med-xpert',
    title: 'MED-XPERT Medical App',
    client: 'adnim inc',
    role: 'UX/UI & Visual Designer',
    timeline: 'Oct 2021 – Apr 2023',
    category: 'Healthcare',
    figmaUrl: 'https://www.figma.com/design/UT5DRL07B2TgiQZU0L0Gfw/MED-XPERT-APP?node-id=0-1&t=p0P5tT0Wshvn72zf-1',
    tools: ['Figma', 'User Research', 'Design Systems', 'Micro-interactions'],
    summary: 'Comprehensive end-to-end healthcare mobile application covering multi-specialty doctor consultation scheduling, home diagnostic lab bookings, digital prescription management, and patient care journeys.',
    challenge: 'Healthcare users navigate high anxiety and cognitive load when booking tests and consultations. Complex multi-step scheduling, medical terminologies, and urgent slot selections frequently cause drop-offs.',
    solution: 'Designed an intuitive, accessibility-first mobile experience with clear triage filters, progressive disclosure for diagnostic preparation, transparent pricing, and instant appointment confirmation with calendar sync.',
    deliverables: [
      'Complete Mobile UI Design System & Component Library',
      'End-to-End Patient Flow & Diagnostic Booking Architecture',
      'Interactive Micro-interactions & Error-Prevention Modals',
      'Telemedicine Consultation Interface & Video Call States'
    ],
    keyHighlights: [
      'Reduced consultation booking friction through simplified 3-step scheduling',
      'Engineered accessible color contrast and typography for elderly patient demographics',
      'Designed diagnostic test scheduling with automated preparation guidelines & slot picking'
    ],
    gradientTheme: 'from-blue-600/20 via-cyan-500/10 to-transparent',
    accentColor: '#0284c7',
    badgeAccent: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
    screens: [
      {
        id: 'med-1',
        title: 'Specialist Discovery & Slot Reservation',
        subtitle: 'Doctor profile, rating, hospital affiliation and instantaneous slot selection',
        deviceType: 'mobile',
        description: 'Enables patients to filter by specialty, clinical experience, language, and real-time appointment availability with video or in-clinic options.',
        keyFeatures: ['Live doctor availability badges', 'In-clinic vs Video consultation selector', 'Verified credentials and patient reviews'],
        screenData: {
          accentColor: '#0284c7',
          headerTitle: 'Find Specialist',
          sections: [
            {
              type: 'hero',
              heading: 'Dr. Sarah Mitchell, MD',
              items: [
                { label: 'Specialty', value: 'Cardiologist · 12 Yrs Exp' },
                { label: 'Rating', value: '★ 4.9 (428 reviews)' },
                { label: 'Fee', value: '$65 Consultation' }
              ]
            },
            {
              type: 'list',
              heading: 'Available Today',
              items: [
                { label: '10:30 AM', value: 'Video Call', status: 'Available' },
                { label: '02:15 PM', value: 'In-Clinic Slot', status: 'Available' },
                { label: '04:45 PM', value: 'Video Call', status: 'Fast Filling' }
              ]
            }
          ]
        }
      },
      {
        id: 'med-2',
        title: 'Home Diagnostic Test Scheduling',
        subtitle: 'Pathology package booking with certified phlebotomist tracking',
        deviceType: 'mobile',
        description: 'Streamlined lab test bookings with pre-test fasting instructions, home sample collection slot selection, and digital report delivery.',
        keyFeatures: ['Preparation checklist (10hr fasting alert)', 'Home sample pickup address picker', 'Digital receipt with insurance coverage breakdown'],
        screenData: {
          accentColor: '#06b6d4',
          headerTitle: 'Diagnostic Lab Packages',
          sections: [
            {
              type: 'cards',
              heading: 'Selected Package',
              items: [
                { label: 'Complete Vital Panel', value: '64 Parameters Checked', desc: 'Fasting Blood Sugar, Lipid Profile, Liver & Kidney Function' },
                { label: 'Sample Pickup', value: 'Tomorrow, 07:30 AM', desc: 'At Home · Certified Phlebotomist Assigned' }
              ]
            }
          ]
        }
      },
      {
        id: 'med-3',
        title: 'Digital Health Records & Active Rx',
        subtitle: 'Automated dosage reminder schedules and refill dispatch',
        deviceType: 'mobile',
        description: 'Centralized health locker storing electronic prescriptions, lab reports with trend lines, and automated medication dosage reminders.',
        keyFeatures: ['Visual dosage time tracker', 'One-tap prescription refill', 'Lab result normal range visualization'],
        screenData: {
          accentColor: '#3b82f6',
          headerTitle: 'My Health Locker',
          sections: [
            {
              type: 'metric',
              heading: 'Active Medication Tracker',
              items: [
                { label: 'Atorvastatin 10mg', value: 'Take 1 with Dinner', status: '8:00 PM Tonight' },
                { label: 'Metformin 500mg', value: 'Take 1 with Breakfast', status: 'Taken 8:15 AM' }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: 'sk-robotics',
    title: 'SK-Robotics Industrial Automation',
    client: 'SK Robotics, USA',
    role: 'UX/UI & Web Product Designer',
    timeline: 'May 2025 – Oct 2025',
    category: 'Robotics & Automation',
    figmaUrl: 'https://www.figma.com/design/y5AGfl4B7onKIVDhpRCJJO/SK-Robotics?node-id=150-680&p=f&t=IuRNMKLMCi8PXu6c-0',
    liveUrl: 'https://skrobotics.us',
    tools: ['Figma', 'Affinity Designer', 'IA Architecture', 'Product Strategy'],
    summary: 'Complete responsive web platform, technical product catalog, and hardware-software console for an American industrial robotics and factory automation manufacturer.',
    challenge: 'Industrial robotics involve highly technical engineering specifications, complex multi-axis hardware kinematics, and diverse buyer personas from factory floor managers to enterprise CTOs.',
    solution: 'Engineered an architectural information hierarchy and high-contrast dark aesthetic that highlights robot payloads, reach tolerances, software integration APIs, and turnkey factory automation cell case studies.',
    deliverables: [
      'Complete Responsive Enterprise Website & System Architecture',
      'Technical Hardware Product Catalog & Spec Sheet Layouts',
      'Interactive Software Integration Console & Telemetry UI',
      'Enterprise Inbound Lead Generation & Deployment Calculator'
    ],
    keyHighlights: [
      'Structured complex industrial engineering specs into scannable comparison matrices',
      'Live website deployed at skrobotics.us serving global manufacturing clients',
      'Created reusable modular components for case studies, automation software, and robotics hardware'
    ],
    gradientTheme: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: '#f59e0b',
    badgeAccent: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    screens: [
      {
        id: 'sk-1',
        title: 'Industrial Robotic Arms Product Showcase',
        subtitle: 'High-payload articulated robot series with kinematic parameters',
        deviceType: 'desktop',
        description: 'Presents enterprise articulated arms with interactive payload-to-reach filters, cycle time calculators, and precision repeatability figures.',
        keyFeatures: ['Payload range filter (5kg to 250kg)', '6-Axis kinematics specification matrix', 'Turnkey tooling & gripper compatibility charts'],
        screenData: {
          accentColor: '#f59e0b',
          headerTitle: 'Articulated Robot Catalog',
          sections: [
            {
              type: 'specs',
              heading: 'SK-Apex 120 Series',
              items: [
                { label: 'Payload Capacity', value: '120 kg' },
                { label: 'Max Radial Reach', value: '2,850 mm' },
                { label: 'Repeatability', value: '±0.04 mm' },
                { label: 'IP Rating', value: 'IP67 Dust & Water' }
              ]
            }
          ]
        }
      },
      {
        id: 'sk-2',
        title: 'Factory Automation Cell Architecture',
        subtitle: 'Automated palletizing, CNC machine tending, and welding cells',
        deviceType: 'desktop',
        description: 'Visual breakdown of turnkey manufacturing solutions with CAD layout previews, safety enclosure requirements, and throughput estimation.',
        keyFeatures: ['Modular cell footprint diagram', 'Cycle time throughput benchmarks', 'PLC & Industrial Ethernet protocol support'],
        screenData: {
          accentColor: '#ea580c',
          headerTitle: 'Turnkey Solution Cells',
          sections: [
            {
              type: 'cards',
              heading: 'Production Workcells',
              items: [
                { label: 'High-Speed Palletizing Cell', value: '18 Boxes/min Throughput', desc: 'Dual-station layout with pallet dispenser and safety laser scanners' },
                { label: 'Robotic MIG/TIG Welding Cell', value: '99.4% Joint Accuracy', desc: 'Integrated Fronius power source and 2-axis positioner table' }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: 'andaman-goa-tourism',
    title: 'Andaman & Goa Smart Tourism Platform',
    client: 'Department of Tourism / Freelance',
    role: 'Product & UX/UI Designer',
    timeline: 'Jan 2026 – May 2026',
    category: 'Smart Tourism',
    figmaUrl: 'https://www.figma.com/design/ZMINftBobUfInzLIMXyWRG/Andaman?node-id=1-1043&t=meDlDhBr2YNMThnb-1',
    tools: ['Figma', 'Stitch', 'Information Architecture', 'User Journey Mapping'],
    summary: 'Next-generation digital tourism ecosystem spanning attraction discovery, multimodal ferry & excursion booking, offline QR ticketing, and administrative dashboards for island authorities.',
    challenge: 'Remote island destinations suffer from fragmented operators, intermittent cellular connectivity, paper permit bottlenecks, and traveler anxiety over inter-island ferry scheduling.',
    solution: 'Designed an integrated mobile-first platform featuring multimodal transit bookings, WhatsApp-assisted confirmation, offline-cached digital QR passes, and real-time operational consoles for jetty operators.',
    deliverables: [
      'Responsive Web Portal & Traveler Companion Mobile App',
      'Unified Multimodal Ferry & Activity Booking Engine',
      'Offline Cryptographic QR Pass & Ticket Inspection Interface',
      'Tourism Authority Operator & Vendor Management Dashboard'
    ],
    keyHighlights: [
      'Designed offline-first digital QR boarding passes verified by jetty scanners without cellular reception',
      'Created AI-assisted smart itinerary recommendations tailored to tide times and weather conditions',
      'Engineered service-provider workflows supporting hundreds of local dive centers, cab operators, and guides'
    ],
    gradientTheme: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentColor: '#10b981',
    badgeAccent: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    screens: [
      {
        id: 'tour-1',
        title: 'Island Expedition & Activity Discovery',
        subtitle: 'Curated experiences across Port Blair, Havelock (Swaraj Dweep), and Neil Island',
        deviceType: 'mobile',
        description: 'Immersive activity discovery with water sports status, live weather advisory, and certified vendor badges.',
        keyFeatures: ['Tide & sea condition live indicators', 'Scuba & snorkeling slot booking', 'Eco-sensitivity guidelines & permit alert'],
        screenData: {
          accentColor: '#10b981',
          headerTitle: 'Explore Andaman Islands',
          sections: [
            {
              type: 'cards',
              heading: 'Featured Expeditions',
              items: [
                { label: 'Radhanagar Beach Sunset Cruise', value: '4.9 ★ · Havelock Island', desc: 'Includes speed boat transfer & refreshments' },
                { label: 'Elephant Beach Coral Snorkel', value: 'Govt Certified Operator', desc: 'Guided session with marine biodiversity briefing' }
              ]
            }
          ]
        }
      },
      {
        id: 'tour-2',
        title: 'Unified Smart QR Digital Boarding Pass',
        subtitle: 'Inter-island private & government ferry ticketing with offline verification',
        deviceType: 'mobile',
        description: 'All-in-one digital boarding pass with embedded cryptographic QR that works offline at maritime terminals.',
        keyFeatures: ['Offline accessible digital barcode', 'Real-time vessel departure countdown', 'Harbor gate & luggage baggage allowance details'],
        screenData: {
          accentColor: '#0d9488',
          headerTitle: 'Smart Ferry Pass',
          sections: [
            {
              type: 'hero',
              heading: 'Makruzz Gold · Port Blair → Havelock',
              items: [
                { label: 'Departure Jetty', value: 'Phoenix Bay Terminal 2' },
                { label: 'Boarding Time', value: '07:45 AM (Gates close 08:15 AM)' },
                { label: 'Seat Assigned', value: 'Premium Class · Row 4A, 4B' }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: 'power-herbs',
    title: 'Power-Herbs UK Wellness E-Commerce',
    client: 'Envizon / Power Herbs Ltd',
    role: 'UX/UI & Product Designer',
    timeline: 'Jan 2023 – May 2025',
    category: 'E-Commerce & Wellness',
    figmaUrl: 'https://www.figma.com/design/vD00DPvmpJcxQW4yz866R4/Power-Herbs?node-id=0-1&p=f&t=EDFO04wO04VV4vDG-0',
    liveUrl: 'https://www.powerherbs.store',
    tools: ['Figma', 'Adobe Illustrator', 'E-Commerce UX', 'Conversion Optimization'],
    summary: 'Clean, trustworthy e-commerce digital storefront for a premium United Kingdom organic herbal supplement and wellness brand, focusing on scientific credibility and conversion rates.',
    challenge: 'Wellness consumers are skeptical of herbal claims. Cluttered nutritional data, unclear ingredient sourcing, and complicated subscription sign-ups lead to elevated checkout abandonment.',
    solution: 'Designed an elegant, botanical-inspired minimalist storefront with certified lab reports, interactive dosage calculators, transparent ingredient sourcing, and a streamlined 2-step subscription checkout.',
    deliverables: [
      'Complete Web E-Commerce Experience & Mobile Responsive Templates',
      'High-Conversion Product Detail Page (PDP) & Nutrition Breakdown',
      'Custom Wellness Assessment Quiz & Personalized Regimen Builder',
      'Recurring Subscription Management Portal & 2-Tap Express Checkout'
    ],
    keyHighlights: [
      'Live commercial website serving customers across the UK at powerherbs.store',
      'Enhanced customer trust through prominent third-party UK laboratory testing certificates',
      'Architected intuitive bundle-and-save checkout flows to increase average order value'
    ],
    gradientTheme: 'from-lime-500/20 via-emerald-500/10 to-transparent',
    accentColor: '#84cc16',
    badgeAccent: 'text-lime-400 border-lime-500/30 bg-lime-500/10',
    screens: [
      {
        id: 'power-1',
        title: 'Premium Herbal Supplement Product Detail (PDP)',
        subtitle: 'Organic KSM-66 Ashwagandha with transparent bio-availability data',
        deviceType: 'desktop',
        description: 'Conversion-optimized layout with clinical study highlights, customer verified reviews, and flexible subscribe-and-save toggles.',
        keyFeatures: ['Subscribe & Save 20% auto-toggle', 'Verified UK GMP manufacturing seal', 'Interactive capsule daily dosage schedule'],
        screenData: {
          accentColor: '#84cc16',
          headerTitle: 'Product Showcase',
          sections: [
            {
              type: 'hero',
              heading: 'Organic KSM-66® Ashwagandha Root 600mg',
              items: [
                { label: 'Rating', value: '4.95 ★ (840+ UK verified buyers)' },
                { label: 'Standard Price', value: '£24.99 (£19.99 on 30-Day Sub)' },
                { label: 'Purity Tested', value: '100% Organic · Vegan HPMC' }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: 'aarani',
    title: 'AArani Luxury Hair & Topper E-Commerce',
    client: 'Envizon / Aarani',
    role: 'UX/UI & Product Designer',
    timeline: 'Jan 2023 – May 2025',
    category: 'E-Commerce & Wellness',
    figmaUrl: 'https://www.figma.com/design/nhOananM84LthkpzOjbfpa/Aarani?node-id=728-2&p=f&t=GdCNPEACsAt2VZY1-0',
    tools: ['Figma', 'Adobe Illustrator', 'Visual Design', 'E-Commerce UX'],
    summary: 'Luxury hair wig and topper e-commerce platform featuring customized shade matching, interactive cap construction guides, and private consultation appointment booking.',
    challenge: 'Hair replacement and cosmetic toppers represent intimate, high-investment purchases. Shoppers struggle with selecting correct lace types, color matching to natural hair, and sizing cap dimensions online.',
    solution: 'Created an editorial luxury shopping experience with interactive hair density and texture selectors, 360-degree cap construction visualizers, and a discrete virtual styling consultation funnel.',
    deliverables: [
      'Luxury Brand Editorial Design System & Responsive Web Experience',
      'Interactive Hair Topper Shade Matching & Length Selector',
      'HD Lace vs Silk Base Educational Decision Tool',
      'Private 1-on-1 Virtual Consultation Booking Flow'
    ],
    keyHighlights: [
      'Empowered customer confidence with realistic shade comparison tools and daylight test photos',
      'Simplified technical jargon (denier, lace tint, base size) into accessible visual guides',
      'Structured high-ticket conversion funnel with discreet customer care inquiries'
    ],
    gradientTheme: 'from-rose-500/20 via-pink-500/10 to-transparent',
    accentColor: '#f43f5e',
    badgeAccent: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
    screens: [
      {
        id: 'aar-1',
        title: 'HD Silk Base Topper Customizer',
        subtitle: 'Precision hair length, density, parting, and color shade selector',
        deviceType: 'desktop',
        description: 'Interactive product configuration tool guiding users through scalp size measurements and human hair texture selection.',
        keyFeatures: ['Base size measurement diagram', '360° virgin hair motion showcase', 'Lace tint selection for diverse skin undertones'],
        screenData: {
          accentColor: '#f43f5e',
          headerTitle: 'Custom Topper Builder',
          sections: [
            {
              type: 'specs',
              heading: 'Aarani Signature Monofilament Top',
              items: [
                { label: 'Hair Origin', value: '100% Remy Human Hair' },
                { label: 'Base Dimension', value: '6" x 6" Multi-Directional Part' },
                { label: 'Density Option', value: '130% Natural Everyday Volume' },
                { label: 'Color Shade', value: '#2 Dark Espresso with Warm Lowlights' }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: 'bvm-meat',
    title: 'BVM Plant-Based Meat Website',
    client: 'Envizon / BVM Foods',
    role: 'UX/UI & Product Designer',
    timeline: 'Jan 2023 – May 2025',
    category: 'FoodTech & Sustainability',
    figmaUrl: 'https://www.figma.com/design/yh9jqS7Jit4X5oRCqqeLkw/BVM-Website?node-id=0-1&p=f&t=ZzdjLORLbNFNWMwb-0',
    tools: ['Figma', 'Adobe Illustrator', 'Brand Storytelling', 'Responsive Web'],
    summary: 'Storytelling-driven responsive web experience for a sustainable plant-based meat alternative brand, harmonizing environmental metrics, culinary recipes, and wholesale B2B partner inquiries.',
    challenge: 'Plant-based food brands must overcome taste skepticism while clearly conveying nutritional superiority (protein density, zero cholesterol) and planetary sustainability benefits.',
    solution: 'Designed an appetizing, high-energy layout pairing mouth-watering culinary imagery with interactive carbon/water savings calculators, retail store locators, and food-service partner portals.',
    deliverables: [
      'Brand Identity Web Guidelines & Responsive Web Architecture',
      'Interactive Environmental Impact & Carbon Savings Calculator',
      'Culinary Recipe Hub & Retail Store Locator Map Integration',
      'B2B Foodservice & Restaurant Wholesale Partner Inquiry System'
    ],
    keyHighlights: [
      'Visualized tangible sustainability metrics (gallons of water saved per meal) with relatable comparisons',
      'Crafted seamless transition between consumer retail storytelling and commercial B2B inquiries',
      'Implemented clean nutritional comparison charts highlighting pea-protein isolate advantages'
    ],
    gradientTheme: 'from-green-500/20 via-lime-500/10 to-transparent',
    accentColor: '#22c55e',
    badgeAccent: 'text-green-400 border-green-500/30 bg-green-500/10',
    screens: [
      {
        id: 'bvm-1',
        title: 'Plant Protein Innovation & Culinary Range',
        subtitle: 'Artisanal plant-based patties, sausages, and minced meat alternatives',
        deviceType: 'desktop',
        description: 'Appetizing showcase featuring cooking tips, amino acid profile, and non-GMO certification seals.',
        keyFeatures: ['22g plant protein per serving macro highlight', 'Non-GMO & zero cholesterol verification', 'Interactive chef recipe video library'],
        screenData: {
          accentColor: '#22c55e',
          headerTitle: 'Future of Sustainable Protein',
          sections: [
            {
              type: 'hero',
              heading: 'BVM Prime Artisan Burger Patty',
              items: [
                { label: 'Protein Content', value: '22g Plant-Powered' },
                { label: 'Water Saved', value: '88% vs Beef Cattle' },
                { label: 'Key Ingredient', value: 'Non-GMO Pea Protein & Beet Extract' }
              ]
            }
          ]
        }
      }
    ]
  }
];

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  type: string;
  timeline: string;
  tools: string[];
  description: string;
  achievements: string[];
}

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Product / UX/UI Designer',
    company: 'Routkin (Germany-based Startup)',
    type: 'Freelance',
    timeline: 'Aug 2026 – Present',
    tools: ['Figma', 'Product Strategy', 'User Research'],
    description: 'Startup platform helping international students discover and secure safe accommodation across European university cities.',
    achievements: [
      'Currently architecting the core end-to-end product experience for student housing discovery, verified landlord listings, and booking security.',
      'Translating student housing anxieties (fraud risks, lease legalese, deposit safety) into transparent, verified product workflows.'
    ]
  },
  {
    role: 'Product & UX/UI Designer',
    company: 'Andaman Tourism & Goa Smart Tourism',
    type: 'Freelance',
    timeline: 'Jan 2026 – May 2026',
    tools: ['Figma', 'Stitch', 'Service Design'],
    description: 'Integrated digital tourism ecosystem spanning attraction discovery, multimodal ferry booking, and administrative operational dashboards.',
    achievements: [
      'Designed integrated digital tourism experiences across responsive web and mobile: attraction discovery, itinerary planning, bookings, payments, and QR ticketing.',
      'Mapped traveler journeys and service-provider workflows to simplify interactions across multiple tourism services.',
      'Designed administrative and service-provider dashboards supporting the operational side of the platform.',
      'Explored AI-assisted travel planning and smart tourism concepts alongside traveler-facing experiences.'
    ]
  },
  {
    role: 'Product / UX/UI Designer',
    company: 'Merai (Germany-based Photography Platform)',
    type: 'Freelance',
    timeline: 'Nov 2025 – Mar 2026',
    tools: ['Figma', 'Affinity Designer', 'Design Systems'],
    description: 'Photography platform connecting creative clients with verified professional photographers for commercial, event, and portrait shoots.',
    achievements: [
      'Owned the end-to-end mobile product design process from early concept exploration through high-fidelity delivery.',
      'Translated user needs and product requirements into information architecture, user journeys, wireframes, and interactive prototypes.',
      'Built and maintained a scalable design system to improve visual consistency and accelerate future engineering sprints.'
    ]
  },
  {
    role: 'UX/UI & Web Product Designer',
    company: 'SK Robotics, USA',
    type: 'Freelance',
    timeline: 'May 2025 – Oct 2025',
    tools: ['Figma', 'Affinity Designer', 'Design Systems'],
    description: 'Industrial robotics and manufacturing automation company specializing in robotic workcells and factory automation systems.',
    achievements: [
      'Designed the complete responsive website experience (skrobotics.us) for an industrial robotics and automation company.',
      'Structured information architecture and navigation to make complex robotics products, software, applications, and technical specifications easy to digest.',
      'Created reusable components and consistent visual patterns across product pages, software consoles, and case studies.',
      'Used visual storytelling and product-focused layouts to communicate advanced automation technology.'
    ]
  },
  {
    role: 'UX/UI & Product Designer',
    company: 'Envizon (Client Engagements)',
    type: 'Client Engagements',
    timeline: 'Jan 2023 – May 2025',
    tools: ['Figma', 'Adobe Illustrator', 'E-Commerce UX'],
    description: 'Multi-client design practice driving UX/UI across consumer digital experiences, e-commerce, wellness, and sustainability.',
    achievements: [
      'AArani (Hair Wig & Topper E-Commerce): Designed product-focused interfaces, customized shade-picker, and simplified navigation to maximize customer conversion.',
      'Power Herbs (UK Wellness E-Commerce): Crafted clean, trustworthy e-commerce experience for premium wellness brand with transparent nutritional breakdowns.',
      'BVM (Plant-Based Meat): Designed storytelling-driven web experiences communicating sustainability, products, and brand purpose.',
      'Dwibashi (Ayurvedic Brand) & Spicytude: Contributed to UX/UI design, brand consistency, and digital storefront layouts.'
    ]
  },
  {
    role: 'UX/UI & Visual Designer',
    company: 'adnim inc',
    type: 'Full-time / Engagement',
    timeline: 'Oct 2021 – Apr 2023',
    tools: ['Figma', 'Mobile Design', 'Micro-interactions'],
    description: 'Design agency delivering high-impact healthcare, wearable, and mobile applications.',
    achievements: [
      'MED-XPERT: Designed end-to-end healthcare application covering doctor booking, diagnostic scheduling, medicine ordering, and patient workflows.',
      'Created comprehensive user flows from onboarding through booking and order completion.',
      'Apple Watch App (Metrics): Designed an Apple Watch app for tracking key health metrics, adapting information hierarchy to small-screen wearable contexts.',
      'Chego (Food App): Designed mobile experience for food discovery, ordering flows, and checkout interactions.'
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: 'Certified Usability Analyst (CUA)',
    issuer: 'Human Factors International (HFI)',
    credentialId: 'CUA Verified',
    topics: 'Human-centered design, cognitive psychology, usability testing, interaction design, error reduction, and WCAG accessibility standards.'
  },
  {
    title: 'Google UX Professional Certificate',
    issuer: 'Google (via Coursera)',
    credentialId: 'Professional Certificate',
    topics: 'UX foundations, user research, wireframing, high-fidelity prototypes in Figma, usability studies, and inclusive design.'
  },
  {
    title: 'Bachelor of Technology (B.Tech)',
    issuer: 'Computer Science Engineering · Vaagdevi College of Engineering',
    credentialId: 'Warangal, Telangana',
    topics: 'Computer Science foundations, software engineering, frontend architectures, algorithms, data structures, and developer handoff workflows.'
  }
];

export const SKILL_CATEGORIES = [
  {
    category: 'Product Design',
    skills: ['Product Thinking', 'Feature Definition', 'User Flows', 'Interaction Design', 'Responsive Web', 'Rapid Prototyping']
  },
  {
    category: 'UI Design & Systems',
    skills: ['Visual Design', 'Mobile UI (iOS / Android)', 'Web UI', 'SaaS Interfaces', 'Dashboards', 'Component Libraries & Variants', 'Auto Layout']
  },
  {
    category: 'UX Strategy & Research',
    skills: ['User Research', 'Competitive Analysis', 'Personas & Empathy Maps', 'Journey Mapping', 'Information Architecture', 'WCAG Accessibility']
  },
  {
    category: 'Engineering & Emerging',
    skills: ['Computer Science CS Background', 'Technical Feasibility', 'Developer Handoff', 'AI-Assisted Experiences', 'Smart Recommendations', 'Workflow Automation']
  },
  {
    category: 'Tools & Technologies',
    skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Affinity Designer', 'Miro', 'Framer', 'Stitch', 'SwiftUI', 'UIKit', 'Tailwind CSS']
  }
];
