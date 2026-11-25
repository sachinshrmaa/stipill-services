export const contact = {
  email: "stipillin@gmail.com",
  phone: "+91 93823 41382",
  phoneHref: "tel:+919382341382",
  whatsapp: "https://wa.me/919382341382",
};

export const services = [
  {
    name: "Software & Technical Consultancy",
    desc: "Strategic architecture, technology stack selection, and product roadmapping to validate your ideas and build scalable systems from day one.",
    icon: "bi-compass",
  },
  {
    name: "Custom Web Development",
    desc: "High-performance, responsive websites and full-stack web applications engineered for speed, security, and seamless user experiences.",
    icon: "bi-window",
  },
  {
    name: "Mobile App Development",
    desc: "End-to-end iOS and Android application development, delivering intuitive interfaces and reliable cross-platform performance.",
    icon: "bi-phone",
  },
  {
    name: "Search & AI Visibility",
    tag: "SEO & AISEO",
    desc: "Data-driven search engine optimization and Generative Engine Optimization (GEO) so your brand ranks on Google and gets cited across AI search platforms.",
    icon: "bi-search",
  },
  {
    name: "Brand Motion & Ad Animations",
    desc: "High-converting 2D/3D explainer videos, product demos, and promotional motion graphics designed to capture attention and elevate brand recall.",
    icon: "bi-play-circle",
  },
];

export type Project = {
  client: string;
  work: string[];
  url: string;
  domain: string;
  inHouse?: boolean;
};

export const projects: Project[] = [
  {
    client: "BALKAPSO Constructions",
    work: ["Official website", "Blu app"],
    url: "https://balkapso.com",
    domain: "balkapso.com",
  },
  {
    client: "LASS School",
    work: ["Official website"],
    url: "https://lasss.edu.in",
    domain: "lasss.edu.in",
  },
  {
    client: "Wicklog",
    work: ["SaaS web platform"],
    url: "https://wicklog.in",
    domain: "wicklog.in",
    inHouse: true,
  },
  {
    client: "Replog",
    work: ["Workout tracking mobile app"],
    url: "https://replog.sachinbuilds.in",
    domain: "replog.sachinbuilds.in",
    inHouse: true,
  },
  {
    client: "The Basics Cohort",
    work: ["Learning platform"],
    url: "https://tbc.sachinbuilds.in",
    domain: "tbc.sachinbuilds.in",
    inHouse: true,
  },
];

export type Plan = {
  name: string;
  price: string;
  unit?: string;
  desc: string;
  features?: string[];
  tiers?: { name: string; price: string; unit?: string; from?: boolean; features: string[] }[];
};

export const plans: Plan[] = [
  {
    name: "Hourly Consultancy",
    price: "₹500",
    unit: "/hr",
    desc: "Architecture reviews, stack decisions, and product roadmapping on demand.",
    features: ["Technical & product advice", "Architecture review", "No long-term commitment"],
  },
  {
    name: "Simple Website",
    price: "₹8,000",
    desc: "A fast, polished site to establish your presence online.",
    features: ["Responsive design", "Contact & WhatsApp integration", "Basic on-page SEO"],
  },
  {
    name: "Dynamic Multi-Page Website",
    price: "₹15,000",
    desc: "Full-featured websites and web apps with content management and custom functionality.",
    features: ["Multiple pages & CMS", "Custom features & integrations", "Performance & security tuned"],
  },
  {
    name: "SEO & AI Search Optimization",
    price: "₹5,000",
    unit: "/month",
    desc: "Rank on Google and get cited by AI search engines.",
    tiers: [
      {
        name: "Starter",
        price: "₹5k",
        unit: "/mo",
        features: [
          "Technical SEO",
          "Schema markup (crucial for AI search)",
          "Google Business Profile",
          "2 optimized articles / month",
        ],
      },
      {
        name: "Growth",
        price: "₹10k",
        unit: "/mo",
        features: [
          "Everything in Starter",
          "4–6 authority articles / month",
          "Entity optimization for LLMs",
          "Monthly backlink outreach",
        ],
      },
    ],
  },
  {
    name: "Animated Videos",
    price: "₹2,000",
    desc: "Explainers, product demos, and ads in 2D/3D motion.",
    tiers: [
      {
        name: "Short-form",
        price: "₹2,000",
        from: true,
        features: ["Reels, shorts & ad spots", "Social-ready formats"],
      },
      {
        name: "Long-form",
        price: "₹10,000",
        from: true,
        features: ["Explainers & product demos", "Script & storyboard support"],
      },
    ],
  },
];

export const faq = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "Websites, web apps, mobile apps, technical consultancy, SEO & AI search optimization, and animated brand videos. If it is digital and helps your business grow, we can likely help.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "A simple website typically ships in 1–2 weeks. Dynamic websites and apps depend on scope; we share a clear timeline after our first conversation.",
  },
  {
    question: "What is AISEO / GEO, and do I need it?",
    answer:
      "More people now ask ChatGPT, Gemini, and Perplexity instead of searching Google. Generative Engine Optimization structures your content and brand data so these AI tools understand and cite you. If customers search for what you offer, it matters.",
  },
  {
    question: "How does pricing and payment work?",
    answer:
      "Prices above are starting ranges. After understanding your requirements, we send a fixed quote. Projects are usually split into an advance and a final payment on delivery; SEO plans are billed monthly.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every project includes a short post-launch support window, and we offer ongoing maintenance, hosting help, and feature updates as needed.",
  },
];
