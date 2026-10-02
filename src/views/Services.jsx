"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const SERVICES = [
  {
    name: "Consultation",
    tagline: "Expert Engineering & Span Feasibility",
    description:
      "Our team provides end-to-end architectural and structural consultation for industrial, commercial, and warehousing projects. We evaluate site parameters, wind loads, and functional needs to engineer the ideal clear-span roofing architecture.",
    features: [
      "Zero-obligation span feasibility & site orientation study",
      "Structural load, slope, and curvature calculations up to 38m clear span",
      "Comprehensive material specification & cost-benefit analysis",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
  },
  {
    name: "Free Inspection",
    tagline: "Comprehensive Site Survey & Health Check",
    description:
      "We offer complimentary, zero-cost on-site technical inspections by certified structural engineers. We inspect existing plinths, verify foundation levels, examine old roof conditions, and deliver actionable assessments.",
    features: [
      "Precision laser leveling and elevation surveys",
      "Structural tie-beam alignment & boundary clearance audit",
      "Detailed inspection report and transparent cost forecast",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    name: "Own Site Manufacturing",
    tagline: "On-Location Mobile Roll-Forming Units",
    description:
      "Vinfra brings specialized mobile roll-forming machinery straight to your project site. We fabricate continuous, custom-curved arch panels directly on location, eliminating transport size limits and vulnerable overlapping joints.",
    features: [
      "Continuous seam panels fabricated without transport joints",
      "Computerized roll-forming with calibrated curvature precision",
      "High-speed production capacity of hundreds of meters per day",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20M5 20V9l5 4V9l5 4V5l5 4v11" />
        <path d="M9 16h2M14 16h2" />
      </svg>
    ),
  },
  {
    name: "Installation",
    tagline: "4-Stage On-Site Crane-Assisted Erection",
    description:
      "Our certified erection crews employ calibrated tandem crane systems and automated mechanical seamers. We assemble, lift, and lock arch panels into position—installing up to 1,000m² every 24 hours.",
    features: [
      "Coil Loading: Hydraulic uncoiling and precision roll-feed",
      "Panel Fabrication: Continuous on-site arch forming without end-laps",
      "Panel Seaming: 100% puncture-free motorized mechanical interlock",
      "Crane Setup & Installation: Calibrated hoisting onto boundary beams",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 22h20M4 22V6l10-4v20M14 2h7l-3 4h4" />
        <path d="M9 11l5 4M9 17l5-4" />
      </svg>
    ),
  },
  {
    name: "Accessories",
    tagline: "Turbo Ventilators, Skylights, Hangers & Ceilings",
    description:
      "Enhance operational efficiency, natural lighting, and interior aesthetics with custom accessories engineered specifically for curved trussless arches without requiring perforations.",
    features: [
      "Turbo - Ventilators: Wind-driven rooftop exhaust systems for continuous airflow",
      "Skylights: Curved UV-stabilized polycarbonate daylighting panels",
      "Hangers: Specially engineered clamps for suspended lights, ducts & trays",
      "False ceilings: Aesthetic, acoustic, and climate-controlled ceiling solutions",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    name: "After Sales Support",
    tagline: "Lifecycle Maintenance & Warranty Guarantee",
    description:
      "Our relationship continues well after installation. Vinfra offers comprehensive warranty coverage, periodic structural checkups, and rapid-response emergency maintenance throughout India.",
    features: [
      "Comprehensive structural warranty & leak-proof performance guarantee",
      "Scheduled preventive maintenance & joint integrity audits",
      "Dedicated client support helpline with swift pan-India response",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
      </svg>
    ),
  },
];

const ACCESSORIES_LIST = [
  {
    title: "Turbo - Ventilators",
    category: "Natural Airflow",
    badge: "01",
    img: "/features/turbo_ventilators.webp",
    summary: "Wind-driven rooftop turbo ventilators engineered for continuous, zero-power natural air circulation.",
    points: [
      "Operates 100% on wind energy with zero electricity cost",
      "Continuously expels hot air, humidity, toxic fumes & smoke",
      "Stainless steel & aluminum anti-corrosive build",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeOpacity="0.25" />
        <path d="M12 12c-2.2 0-4-1.8-4-4 0-1.8 1.2-3.3 2.8-3.8C10.3 3.5 10 2.8 10 2" strokeWidth="1.8" />
        <path d="M12 12c0 2.2 1.8 4 4 4 1.8 0 3.3-1.2 3.8-2.8.7.5 1.4.8 2.2.8" strokeWidth="1.8" />
        <path d="M12 12c0-2.2-1.8-4-4-4-1.8 0-3.3 1.2-3.8 2.8-.7-.5-1.4-.8-2.2-.8" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Skylights",
    category: "Daylight System",
    badge: "02",
    img: "/features/skylights.webp",
    summary: "Curved polycarbonate translucent roof panels tailored seamlessly to trussless arch corrugations.",
    points: [
      "Transmits abundant natural daylight, reducing daytime lighting bills",
      "UV-resistant, shatter-proof multi-wall polycarbonate",
      "Seamlessly seamed with zero leak or penetration points",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18C3 11 7 5 12 5C17 5 21 11 21 18" strokeWidth="2" />
        <path d="M12 5V1" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 6L4 3" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 6L20 3" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 11L8 18M15 11L16 18M12 8V18" strokeWidth="1.6" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "Hangers",
    category: "Utility Support",
    badge: "03",
    img: "/features/hangers.webp",
    summary: "Heavy-duty structural clamp brackets engineered specifically for rib attachment without puncturing.",
    points: [
      "Secure clamp-on mounting for lights, cables, and false ceilings",
      "Preserves watertight integrity with zero hole drilling",
      "High load-bearing capability tested for industrial fittings",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3H18V7C18 8.1 17.1 9 16 9H8C6.9 9 6 8.1 6 7V3Z" strokeWidth="2" />
        <path d="M12 9V17" strokeWidth="2.2" />
        <path d="M8 17H16L18 21H6L8 17Z" strokeWidth="2" />
        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "False ceilings",
    category: "Interior Finish",
    badge: "04",
    img: "/features/false_ceilings.webp",
    summary: "Integrated false ceiling framing systems providing thermal insulation, acoustics, and elegance.",
    points: [
      "Enhanced thermal comfort and significant HVAC load reduction",
      "Superior acoustic dampening for auditoriums & event halls",
      "Clean architectural aesthetics concealing utilities",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5H21" strokeWidth="2.5" />
        <path d="M6 5V9M12 5V9M18 5V9" strokeWidth="1.8" />
        <rect x="3" y="9" width="18" height="11" rx="2" strokeWidth="2" />
        <path d="M3 14H21M9 9V20M15 9V20" strokeWidth="1.6" />
      </svg>
    ),
  },
];

const INSTALLATION_STAGES = [
  {
    stage: "Stage 01",
    title: "Coil Loading",
    category: "Preparation & Feed",
    badge: "01",
    img: "/features/coil_loading.webp",
    summary: "High-grade Galvalume structural steel coils are loaded onto automated hydraulic mobile de-coilers.",
    points: [
      "Heavy-capacity de-coiler handles prime coated master coils",
      "Laser-guided alignment ensures straight automated feeding",
      "Eliminates transport deformation and factory handling damage",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="8" rx="8" ry="4" strokeWidth="2" />
        <path d="M4 8V16C4 18.2 7.6 20 12 20C16.4 20 20 18.2 20 16V8" strokeWidth="2" />
        <ellipse cx="12" cy="8" rx="4" ry="2" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1" />
        <path d="M12 6V10" strokeWidth="2" />
      </svg>
    ),
  },
  {
    stage: "Stage 02",
    title: "Panel Fabrication",
    category: "On-Site Roll-Forming",
    badge: "02",
    img: "/features/panel_fabrication.webp",
    summary: "Mobile computerized roll-forming units shape raw coils into continuous curved arch panels on location.",
    points: [
      "Continuous seam lengths fabricated without end-laps or joints",
      "Deep profile corrugation for maximum structural stiffness",
      "Precision computerized radius control matching exact span curves",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="3.5" strokeWidth="2" />
        <circle cx="18" cy="12" r="3.5" strokeWidth="2" />
        <path d="M2 12H2.5M21.5 12H22" strokeWidth="2" />
        <path d="M9.5 12H14.5" strokeWidth="2.5" />
        <path d="M2 7C8 7 16 4 22 4" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 17C8 17 16 20 22 20" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    stage: "Stage 03",
    title: "Panel Seaming",
    category: "Mechanical Interlock",
    badge: "03",
    img: "/features/panel_seaming.webp",
    summary: "Motorized electric seaming machines crimp adjacent panel edges with 100% puncture-free seams.",
    points: [
      "Zero nuts, bolts, or screws through the roofing sheet surface",
      "360-degree double-lock seam guarantees hermetic waterproofing",
      "Rapid automatic interlocking of arches on ground staging area",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14V10C4 8.9 4.9 8 6 8H18C19.1 8 20 8.9 20 10V14" strokeWidth="2" />
        <path d="M2 14H22V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V14Z" strokeWidth="2" />
        <circle cx="7" cy="17.5" r="1.5" fill="currentColor" />
        <circle cx="17" cy="17.5" r="1.5" fill="currentColor" />
        <path d="M12 4V8M9 4H15" strokeWidth="2" />
      </svg>
    ),
  },
  {
    stage: "Stage 04",
    title: "Crane Setup & Installation",
    category: "Precision Hoisting",
    badge: "04",
    img: "/features/crane_setup.webp",
    summary: "Calibrated crane assemblies hoist multiple pre-seamed arches onto perimeter tie-beams.",
    points: [
      "Up to 1,000 m² hoisted and locked into position within 24 hours",
      "Anchored securely to RCC or steel perimeter ring beams",
      "Strict compliance with industrial safety & tandem lift protocols",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21H21" strokeWidth="2.5" />
        <path d="M5 21V11L14 3H19L8 15V21" strokeWidth="2" />
        <path d="M14 3V11M14 11H19" strokeWidth="1.8" />
        <path d="M19 11V16" strokeWidth="2" strokeDasharray="2 2" />
        <path d="M16 16C17 18 21 18 22 16" strokeWidth="2" />
      </svg>
    ),
  },
];

const ADVANTAGES_POINTS = [
  "Girderless - wide- clear Spans up to 38 meters",
  "Quick & Easy installation",
  "Installation of 1000m² in just 24 hours",
  "The faster installation enables you to start your project quicker",
  "Savings in structural cost(truss and purlins)",
  "Design freedom & Aesthetic value",
  "Freedom from Bird Infiltration",
  "The depth of corrugation in the steel adds to the inherent strength",
  "Ability to withstand live & dead load",
  "Higher corrosion resistance",
  "Mechanical interlocked sheets prevent holes in the roof- caused by bolts & nuts",
  "The overlapping and seaming between different sheets prevents leakage of water and provides dry interiors.",
  "Zero maintenance cost",
  "Higher durability than conventional roofing",
];

const ADVANTAGES_BADGES = [
  {
    name: "Wide Span",
    tagline: "Up to 38m Girderless",
    desc: "100% unobstructed internal volume without pillars or trusses.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 19V14C3 8.5 7 4.5 12 4.5C17 4.5 21 8.5 21 14V19" />
        <path d="M6 19V15.5C6 11.5 8.7 8 12 8C15.3 8 18 11.5 18 15.5V19" strokeOpacity="0.45" strokeDasharray="2 2" />
        <path d="M2 19H7M17 19H22" strokeWidth="2.2" />
        <path d="M7 15H17M7 15L9 13.5M7 15L9 16.5M17 15L15 13.5M17 15L15 16.5" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    name: "Maintanance Free",
    tagline: "Zero Recurring Costs",
    desc: "Seamless interlocking eliminates rust spots, loose bolts, and paint re-coats.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5L4 6V12C4 17.5 7.5 21 12 22C16.5 21 20 17.5 20 12V6L12 2.5Z" />
        <path d="M8.5 12C8.5 10.9 9.4 10 10.5 10C11.1 10 11.6 10.4 12 10.9C12.4 10.4 12.9 10 13.5 10C14.6 10 15.5 10.9 15.5 12C15.5 13.1 14.6 14 13.5 14C12.9 14 12.4 13.6 12 13.1C11.6 13.6 11.1 14 10.5 14C9.4 14 8.5 13.1 8.5 12Z" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="7.5" strokeOpacity="0.3" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: "Cost Saving",
    tagline: "Truss & Purlin Free",
    desc: "Huge savings in structural steel, foundation mass, and total construction timeline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20H21" strokeWidth="2.2" />
        <path d="M3 15L9 9.5L14 14.5L21 7.5" strokeWidth="2" />
        <path d="M21 7.5H16M21 7.5V12.5" strokeWidth="2" />
        <path d="M6 20V17M11 20V14M16 20V11M21 20V8" strokeOpacity="0.35" strokeWidth="2.2" />
        <circle cx="9" cy="9.5" r="1.5" fill="currentColor" />
        <circle cx="14" cy="14.5" r="1.5" fill="currentColor" />
        <circle cx="21" cy="7.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Interlocking System",
    tagline: "Puncture-Free Seal",
    desc: "Continuous mechanical seaming locks panels without bolts, screws, or punctures.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 13.5L6.5 16C5.1 17.4 5.1 19.6 6.5 21C7.9 22.4 10.1 22.4 11.5 21L14 18.5" strokeWidth="2" />
        <path d="M15 10.5L17.5 8C18.9 6.6 18.9 4.4 17.5 3C16.1 1.6 13.9 1.6 12.5 3L10 5.5" strokeWidth="2" />
        <path d="M8.5 15.5L15.5 8.5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    name: "Fast Installation",
    tagline: "1000m² in 24 Hours",
    desc: "Speed-driven on-site execution enables earliest possible project commissioning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="8" strokeWidth="2" />
        <path d="M12 9V13L15 15" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 2.5H14M12 2.5V5" strokeWidth="2" />
        <path d="M3 10L6 10M2 14L5 14M3 18L6 18" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18.5 5.5L20.5 7.5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Best After sale service",
    tagline: "Pan-India Assurance",
    desc: "Dedicated structural audit teams and responsive lifecycle support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11V17C3 18.1 3.9 19 5 19H7V11H3Z" strokeWidth="1.8" />
        <path d="M21 11V17C21 18.1 20.1 19 19 19H17V11H21Z" strokeWidth="1.8" />
        <path d="M3 13C3 8 7 4 12 4C17 4 21 8 21 13" strokeWidth="2" />
        <path d="M19 19V20C19 21.1 18.1 22 17 22H13C12.4 22 12 21.6 12 21V20" strokeWidth="1.8" />
        <path d="M8.5 12L10.5 14L15.5 9.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Sturdy & Strong",
    tagline: "Deep Steel Corrugation",
    desc: "Engineered arch profile withstands high wind loads and heavy dead/live loads.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18C3 11.5 7 6 12 6C17 6 21 11.5 21 18" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M6 18C6 13.5 8.7 9.5 12 9.5C15.3 9.5 18 13.5 18 18" strokeWidth="1.8" strokeOpacity="0.4" />
        <path d="M2 19H22" strokeWidth="2.2" />
        <path d="M12 2.5V6M9.5 4.5L12 6L14.5 4.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 18V21M17.5 18V21" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "High Corrosion Resistance",
    tagline: "Weatherproof Coating",
    desc: "Galvalume alloy shield resists harsh industrial acid rains, humidity, and coastal air.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5L4 6V12C4 17.5 7.5 21 12 22C16.5 21 20 17.5 20 12V6L12 2.5Z" strokeWidth="2" />
        <path d="M12 7C10.2 9.5 9 11.2 9 12.5C9 14.2 10.3 15.5 12 15.5C13.7 15.5 15 14.2 15 12.5C15 11.2 13.8 9.5 12 7Z" strokeWidth="1.8" />
        <path d="M10.8 13C10.8 13.7 11.3 14.2 12 14.2" strokeLinecap="round" />
        <path d="M7 6.5L17 6.5" strokeWidth="1.5" strokeOpacity="0.4" />
      </svg>
    ),
  },
];

const MATERIAL_BENEFITS = [
  {
    title: "Durability",
    metricBadge: "4x Exposure • 6x Industrial • 3x Rural",
    description: "Four times durable in exposure test. Six times durable in industrial enviroments. Three times durable in rural Enviroments.",
    highlight: "Outperforms standard sheets across all testing environments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7.5L12 13L22 7.5L12 2Z" strokeWidth="2" />
        <path d="M2 12L12 17.5L22 12" strokeWidth="1.8" />
        <path d="M2 16.5L12 22L22 16.5" strokeWidth="2" />
        <circle cx="12" cy="7.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Corrosion Resistance",
    metricBadge: "Advanced Alloy Shield",
    description: "Offers higher corrosion resistance than galvanized steel under identical roof conditions.",
    highlight: "Barrier protection that repels atmospheric oxidation and rust",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5L3.5 6.5V12C3.5 17.5 7.2 21.2 12 22C16.8 21.2 20.5 17.5 20.5 12V6.5L12 2.5Z" strokeWidth="2" />
        <path d="M8 11.5L10.5 14L16 9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6.5V7.5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "High Temperature Resistance",
    metricBadge: "Heat & Flame Resilient",
    description: "Resists intermediate and high temperature far more effectively than galvanized steel.",
    highlight: "Maintains structural integrity under sustained thermal heat exposure",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4V13.3C14 15.3 12.4 17 10.5 17C8.6 17 7 15.3 7 13.3V4C7 2.9 7.9 2 9 2H12C13.1 2 14 2.9 14 4Z" strokeWidth="1.8" />
        <circle cx="10.5" cy="14" r="1.8" fill="currentColor" />
        <path d="M10.5 6V10" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 6.5H21M18 10.5H21M17 14.5H21" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Better Heat Reflectivity",
    metricBadge: "Thermal Comfort Efficiency",
    description: "It keeps the building 'cooler' in summer and 'warmer' in winter.",
    highlight: "Reflects solar radiation efficiently, lowering interior air conditioning costs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 17C6 13.8 18 13.8 22 17" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M6 3L11 13" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 13L9.5 8.5" strokeWidth="1.8" />
        <path d="M13 13L18 3" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 3L14.5 4.5" strokeWidth="1.8" />
        <circle cx="12" cy="4" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Retains The Luster For A Longer Period",
    metricBadge: "No Darkening or Oxidation",
    description: "Unlike galvanized steel, galvalume does not oxidise & get darken in colour.",
    highlight: "Preserves gleaming aesthetic appeal over decades of exterior exposure",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3.5H18L22 9.5L12 21L2 9.5L6 3.5Z" strokeWidth="2" />
        <path d="M2 9.5H22" strokeWidth="1.8" />
        <path d="M12 21L7.5 9.5L10.5 3.5" strokeWidth="1.6" />
        <path d="M12 21L16.5 9.5L13.5 3.5" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Comparable Cost and No Crack On Peel",
    metricBadge: "Zero Delamination • High Value",
    description: "Cost similar to that of galvanized steel. Does not crack or peel when exposed to various elements.",
    highlight: "Maximum economic value with zero cracking or peeling defects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18C3 10.3 9.3 4 17 4H21V8C21 15.7 14.7 22 7 22H3V18Z" strokeWidth="2" />
        <path d="M8 8.5C8 7.7 8.7 7 9.5 7H13.5C14.3 7 15 7.7 15 8.5V12.5C15 13.3 14.3 14 13.5 14H9.5C8.7 14 8 13.3 8 12.5V8.5Z" strokeWidth="1.6" strokeOpacity="0.5" />
        <path d="M10 10.5L11.5 12L14 9.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [stats, setStats] = useState({
    projects: 0,
    experts: 0,
    cities: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    if (!statsInView || hasAnimated) return;
    setHasAnimated(true);

    const targets = {
      projects: 500,
      experts: 45,
      cities: 100,
      satisfaction: 99,
    };
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setStats({
        projects: Math.min(
          Math.floor((step / steps) * targets.projects),
          targets.projects,
        ),
        experts: Math.min(
          Math.floor((step / steps) * targets.experts),
          targets.experts,
        ),
        cities: Math.min(
          Math.floor((step / steps) * targets.cities),
          targets.cities,
        ),
        satisfaction: Math.min(
          Math.floor((step / steps) * targets.satisfaction),
          targets.satisfaction,
        ),
      });
      if (step >= steps) clearInterval(interval);
    }, stepTime);
    return () => clearInterval(interval);
  }, [statsInView, hasAnimated]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeService]);

  return (
    <>
      <style>{`
        /* Premium Light Theme Services Page */
        .services-light-page {
          background-color: #F8FAFC;
          color: #0F172A;
          min-height: 100vh;
          padding-top: 90px;
        }

        /* Hero Section */
        .services-hero {
          padding: 80px 48px 70px 48px;
          text-align: center;
          position: relative;
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
        }

        .services-hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 50% 20%, rgba(185, 28, 28, 0.04) 0%, transparent 55%),
            linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px);
          background-size: 100% 100%, 36px 36px, 36px 36px;
          pointer-events: none;
        }

        .services-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 880px;
          margin: 0 auto;
        }

        .services-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          color: #0F172A;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          padding: 6px 18px;
          border-radius: 50px;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
        }

        .services-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #B91C1C;
          box-shadow: 0 0 8px rgba(185, 28, 28, 0.6);
        }

        .services-title {
          font-family: var(--font-display);
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: #0F172A;
          margin-bottom: 22px;
        }

        .services-title .accent-red {
          color: #B91C1C;
        }

        .services-subtitle {
          font-size: 17px;
          color: #475569;
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* --- 1. SERVICES SECTION (MATCHING HOMEPAGE) --- */
        .services-main-section {
          padding: 90px 48px;
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
        }

        .services-main-inner {
          max-width: 1400px;
          margin: 0 auto;
        }

        .services-header-row {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 48px;
        }

        .section-tag-red {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #B91C1C;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          padding: 5px 16px;
          border-radius: 50px;
          margin-bottom: 14px;
        }

        .services-headline {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 10px 0;
        }

        .services-headline span {
          color: #B91C1C;
        }

        .services-intro-p {
          font-size: 15px;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        .services-grid-home {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .service-cell {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 34px 28px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 200px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);
        }

        .service-cell:hover {
          transform: translateY(-4px);
          border-color: #B91C1C;
          box-shadow: 0 16px 36px -6px rgba(185, 28, 28, 0.14);
        }

        .service-watermark {
          position: absolute;
          top: 14px;
          right: 20px;
          font-family: var(--font-display);
          font-size: 38px;
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1;
          user-select: none;
          pointer-events: none;
          transition: color 0.3s ease;
        }

        .service-cell:hover .service-watermark {
          color: #FEE2E2;
        }

        .service-icon-ring {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          transition: all 0.3s ease;
        }

        .service-icon-ring svg {
          width: 24px;
          height: 24px;
        }

        .service-cell:hover .service-icon-ring {
          background: #B91C1C;
          color: #FFFFFF;
          transform: scale(1.05);
        }

        .service-name {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: -0.015em;
          margin-bottom: 12px;
        }

        .service-click-tag {
          font-size: 13px;
          font-weight: 600;
          color: #B91C1C;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          transition: gap 0.2s ease;
        }

        .service-cell:hover .service-click-tag {
          gap: 10px;
        }

        /* --- 2. PROCESS IN FLOW CHART DESIGN --- */
        .process-flowchart-section {
          padding: 100px 48px;
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
        }

        .flowchart-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .flowchart-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
        }

        .flowchart-track {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }

        /* Connecting Flowchart Beam */
        .flowchart-track::before {
          content: "";
          position: absolute;
          top: 36px;
          left: 60px;
          right: 60px;
          height: 3px;
          background: linear-gradient(to right, #B91C1C, #EF4444, #B91C1C);
          z-index: 1;
          border-radius: 4px;
        }

        .flowchart-card {
          position: relative;
          z-index: 2;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 22px;
          padding: 26px 22px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .flowchart-card:hover {
          background: #FFFFFF;
          border-color: #B91C1C;
          transform: translateY(-5px);
          box-shadow: 0 16px 36px -6px rgba(185, 28, 28, 0.14);
        }

        .flowchart-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .flowchart-stage-pill {
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.25);
          color: #B91C1C;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 50px;
        }

        .flowchart-node-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #FEF2F2;
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flowchart-node-icon svg {
          width: 18px;
          height: 18px;
        }

        .flowchart-img-wrap {
          width: 100%;
          height: 140px;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 16px;
          background: #0F172A;
          border: 1px solid #E2E8F0;
        }

        .flowchart-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .flowchart-card:hover .flowchart-img-wrap img {
          transform: scale(1.06);
        }

        .flowchart-category {
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #B91C1C;
          margin-bottom: 4px;
          display: block;
        }

        .flowchart-title {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 8px 0;
          line-height: 1.25;
        }

        .flowchart-desc {
          font-size: 12.5px;
          line-height: 1.5;
          color: #64748B;
          margin-bottom: 14px;
        }

        .flowchart-points {
          list-style: none;
          padding: 0;
          margin: auto 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-top: 1px solid #E2E8F0;
          padding-top: 12px;
        }

        .flowchart-point-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 11.5px;
          color: #475569;
          line-height: 1.4;
        }

        .flowchart-check-icon {
          color: #B91C1C;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Flowchart Directional Step Arrow Connector */
        .flowchart-step-arrow {
          position: absolute;
          right: -15px;
          top: 24px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2px solid #B91C1C;
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          box-shadow: 0 2px 8px rgba(185, 28, 28, 0.2);
          font-size: 12px;
          font-weight: 800;
        }

        /* --- 3. ADVANTAGES SECTION (MATCHING HOMEPAGE) --- */
        .page-advantages {
          background: #F8FAFC;
          padding: 90px 48px;
          border-bottom: 1px solid #E2E8F0;
          position: relative;
        }

        .adv-header-minimal {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 44px auto;
        }

        .adv-title-minimal {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 10px 0;
        }

        .adv-title-minimal span {
          color: #B91C1C;
        }

        .adv-subtitle-minimal {
          font-size: 15px;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        .adv-badges-grid-minimal {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 40px;
          max-width: 1400px;
          margin-inline: auto;
        }

        .adv-badge-card-minimal {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.25s ease;
        }

        .adv-badge-card-minimal:hover {
          background: #FFFFFF;
          border-color: #B91C1C;
          transform: translateY(-3px);
          box-shadow: 0 10px 24px -4px rgba(185, 28, 28, 0.12);
        }

        .adv-badge-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .adv-badge-icon-wrap svg {
          width: 22px;
          height: 22px;
        }

        .adv-badge-text h4 {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 2px 0;
        }

        .adv-badge-text span {
          font-size: 11.5px;
          color: #64748B;
          display: block;
        }

        .adv-checklist-minimal {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 28px 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 28px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .adv-check-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #334155;
          line-height: 1.5;
        }

        .adv-check-icon {
          color: #B91C1C;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* --- 4. BENEFITS OF ROOFING MATERIALS (MATCHING HOMEPAGE) --- */
        .page-benefits {
          background: #FFFFFF;
          padding: 90px 48px;
          border-bottom: 1px solid #E2E8F0;
          position: relative;
        }

        .benefits-header-minimal {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 36px auto;
        }

        .galvalume-quote-minimal {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-left: 4px solid #B91C1C;
          border-radius: 12px;
          padding: 14px 22px;
          font-size: 13.5px;
          color: #334155;
          margin: 16px auto 0 auto;
          line-height: 1.6;
          font-style: italic;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
          max-width: 700px;
        }

        .materials-grid-minimal {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 36px;
          max-width: 1400px;
          margin-inline: auto;
        }

        .mat-card-minimal {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 24px 22px;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .mat-card-minimal:hover {
          background: #FFFFFF;
          border-color: #B91C1C;
          transform: translateY(-3px);
          box-shadow: 0 12px 28px -6px rgba(185, 28, 28, 0.12);
        }

        .mat-card-top-minimal {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .mat-card-icon-minimal {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mat-card-icon-minimal svg {
          width: 22px;
          height: 22px;
        }

        .mat-card-minimal:hover .mat-card-icon-minimal {
          background: #B91C1C;
          color: #FFFFFF;
          transform: scale(1.08) rotate(4deg);
        }

        .mat-badge-minimal {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #64748B;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          padding: 4px 10px;
          border-radius: 50px;
        }

        .mat-title-minimal {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 8px 0;
        }

        .mat-desc-minimal {
          font-size: 12.5px;
          line-height: 1.55;
          color: #64748B;
          margin: 0;
        }

        /* --- 5. STATS STRIP --- */
        .services-stats-strip {
          padding: 72px 48px;
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
        }

        .services-stats-inner {
          max-width: 1400px;
          margin: 0 auto;
        }

        .services-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .service-stat-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
          transition: all 0.3s ease;
        }

        .service-stat-card:hover {
          transform: translateY(-4px);
          border-color: #CBD5E1;
          box-shadow: 0 12px 28px -6px rgba(15, 23, 42, 0.08);
        }

        .service-stat-number {
          font-family: var(--font-display);
          font-size: 50px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1;
          margin-bottom: 10px;
          letter-spacing: -0.03em;
        }

        .service-stat-number span {
          color: #B91C1C;
        }

        .service-stat-label {
          font-size: 13px;
          font-weight: 600;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* --- 6. CONSULTATION BANNER --- */
        .services-cta-banner {
          padding: 84px 48px;
          background: #0F172A;
          color: #FFFFFF;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-backdrop-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(circle, rgba(185, 28, 28, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .services-cta-inner {
          max-width: 680px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .services-cta-inner h2 {
          font-family: var(--font-display);
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 18px;
          letter-spacing: -0.02em;
        }

        .services-cta-inner p {
          font-size: 17px;
          color: #94A3B8;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .services-cta-btn {
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 15px 36px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 10px 24px -4px rgba(185, 28, 28, 0.5);
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .services-cta-btn:hover {
          background: #DC2626;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -4px rgba(220, 38, 38, 0.6);
        }

        /* --- SERVICE DETAILS POPUP MODAL --- */
        .service-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: serviceModalFadeIn 0.25s ease forwards;
        }

        @keyframes serviceModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .service-modal-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          max-width: 520px;
          width: 100%;
          padding: 34px 32px 28px 32px;
          position: relative;
          box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.35);
          animation: serviceModalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .service-modal-box.service-modal-box--wide {
          max-width: 820px;
          max-height: 90vh;
          overflow-y: auto;
        }

        @keyframes serviceModalSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .service-modal-close {
          position: absolute;
          top: 18px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #E2E8F0;
          background: #F8FAFC;
          color: #64748B;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .service-modal-close:hover {
          background: #B91C1C;
          color: #FFFFFF;
          border-color: #B91C1C;
        }

        .service-modal-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }

        .service-modal-icon-ring {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .service-modal-icon-ring svg {
          width: 26px;
          height: 26px;
        }

        .service-modal-title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          color: #0F172A;
          margin: 0;
          line-height: 1.2;
        }

        .service-modal-tagline {
          font-size: 13px;
          color: #B91C1C;
          font-weight: 600;
          margin-top: 3px;
        }

        .service-modal-body {
          font-size: 14px;
          line-height: 1.65;
          color: #475569;
          margin-bottom: 22px;
        }

        .service-modal-features-title {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #0F172A;
          margin-bottom: 12px;
        }

        .service-modal-features {
          list-style: none;
          padding: 0;
          margin: 0 0 26px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .service-modal-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #334155;
          line-height: 1.5;
        }

        .service-modal-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #FEF2F2;
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .modal-subitems-wrapper {
          margin: 18px 0 24px 0;
        }

        .modal-subitems-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 12px;
        }

        .modal-subitem-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 16px 14px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.25s ease;
        }

        .modal-subitem-card:hover {
          background: #FFFFFF;
          border-color: #B91C1C;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -4px rgba(185, 28, 28, 0.12);
        }

        .modal-subitem-thumb {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #FFFFFF;
          box-shadow: 0 4px 10px rgba(15, 23, 42, 0.12);
          flex-shrink: 0;
        }

        .modal-subitem-info {
          flex: 1;
        }

        .modal-subitem-header-row {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 3px;
        }

        .modal-subitem-icon {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          background: #FEF2F2;
          color: #B91C1C;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .modal-subitem-icon svg {
          width: 12px;
          height: 12px;
        }

        .modal-subitem-tag {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #B91C1C;
          display: block;
        }

        .modal-subitem-title {
          font-family: var(--font-display);
          font-size: 14.5px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 3px 0;
          line-height: 1.25;
        }

        .modal-subitem-desc {
          font-size: 11.5px;
          line-height: 1.45;
          color: #64748B;
          margin: 0;
        }

        .service-modal-actions {
          display: flex;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid #F1F5F9;
        }

        .service-modal-btn-primary {
          flex: 1;
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 12px 20px;
          border-radius: 12px;
          font-family: var(--font-display);
          font-size: 13.5px;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .service-modal-btn-primary:hover {
          background: #991B1B;
        }

        .service-modal-btn-secondary {
          background: #F1F5F9;
          color: #334155;
          border: 1px solid #E2E8F0;
          padding: 12px 20px;
          border-radius: 12px;
          font-family: var(--font-display);
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .service-modal-btn-secondary:hover {
          background: #E2E8F0;
          color: #0F172A;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .services-grid-home { grid-template-columns: repeat(2, 1fr); }
          .flowchart-track { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .flowchart-track::before { display: none; }
          .flowchart-step-arrow { display: none; }
          .adv-badges-grid-minimal { grid-template-columns: repeat(2, 1fr); }
          .materials-grid-minimal { grid-template-columns: repeat(2, 1fr); }
          .services-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .services-light-page { padding-top: 80px; }
          .services-hero { padding: 50px 20px 40px; }
          .services-main-section, .process-flowchart-section, .page-advantages, .page-benefits { padding: 60px 20px; }
          .services-grid-home { grid-template-columns: 1fr; }
          .flowchart-track { grid-template-columns: 1fr; }
          .adv-badges-grid-minimal { grid-template-columns: 1fr; }
          .adv-checklist-minimal { grid-template-columns: 1fr; padding: 20px; }
          .materials-grid-minimal { grid-template-columns: 1fr; }
          .services-stats-grid { grid-template-columns: 1fr; }
          .modal-subitems-grid { grid-template-columns: 1fr; }
          .service-modal-box { padding: 26px 20px 20px; }
          .services-cta-banner { padding: 60px 20px; }
        }
      `}</style>

      <div className="services-light-page">
        {/* HERO SECTION */}
        <section className="services-hero">
          <div className="services-hero-grid-bg" />
          <div className="services-hero-inner">
            <div className="services-badge">
              <span className="services-badge-dot" />
              ENGINEERED EXCELLENCE
            </div>
            <h1 className="services-title">
              Comprehensive <span className="accent-red">Roofing</span>
              <br />
              Services &amp; Solutions
            </h1>
            <p className="services-subtitle">
              Pioneering self-supported trussless roofing architecture, on-site mobile roll-forming,
              and precision engineering for industrial warehouses, production hubs, and commercial spans across India.
            </p>
          </div>
        </section>

        {/* 1. SERVICES SECTION (SAME AS HOMEPAGE) */}
        <section id="services" className="services-main-section">
          <div className="services-main-inner">
            <div className="services-header-row">
              <span className="section-tag-red">Core Capabilities</span>
              <h2 className="services-headline">
                Our Specialized <span>Roofing Services</span>
              </h2>
              <p className="services-intro-p">
                We specialize in trussless (K-Span) roofing systems that eliminate conventional trusses,
                allowing for clear spans up to 38m, zero-hole mechanical interlocking, and lightning-fast installation.
              </p>
            </div>

            <div className="services-grid-home">
              {SERVICES.map((svc, idx) => (
                <div
                  className="service-cell"
                  key={svc.name}
                  onClick={() => setActiveService(svc)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${svc.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveService(svc);
                    }
                  }}
                >
                  <span className="service-watermark">0{idx + 1}</span>
                  <div className="service-icon-ring">{svc.icon}</div>
                  <div>
                    <div className="service-name">{svc.name}</div>
                    <div className="service-click-tag">
                      View Details ↗
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. OUR PROCESS IN FLOW CHART DESIGN */}
        <section id="process" className="process-flowchart-section">
          <div className="flowchart-container">
            <div className="flowchart-header">
              <span className="section-tag-red">On-Site Execution Pipeline</span>
              <h2 className="services-headline">
                Our <span>Installation Process</span> Flow Chart
              </h2>
              <p className="services-intro-p">
                A seamless 4-stage sequential workflow executed directly on your site by calibrated mobile rigs and crane crews.
              </p>
            </div>

            <div className="flowchart-track">
              {INSTALLATION_STAGES.map((stage, idx) => (
                <div className="flowchart-card" key={stage.title}>
                  {/* Directional arrow between nodes for flowchart visualization */}
                  {idx < INSTALLATION_STAGES.length - 1 && (
                    <div className="flowchart-step-arrow" aria-hidden="true">
                      →
                    </div>
                  )}

                  <div className="flowchart-top-bar">
                    <span className="flowchart-stage-pill">{stage.stage}</span>
                    <div className="flowchart-node-icon">{stage.icon}</div>
                  </div>

                  <div className="flowchart-img-wrap">
                    <img src={stage.img} alt={stage.title} />
                  </div>

                  <span className="flowchart-category">{stage.category}</span>
                  <h3 className="flowchart-title">{stage.title}</h3>
                  <p className="flowchart-desc">{stage.summary}</p>

                  <ul className="flowchart-points">
                    {stage.points.map((pt, pIdx) => (
                      <li className="flowchart-point-item" key={pIdx}>
                        <span className="flowchart-check-icon">
                          <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
                            <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ADVANTAGES SECTION (MATCHING HOMEPAGE) */}
        <section id="advantages" className="page-advantages">
          <div className="adv-header-minimal">
            <span className="section-tag-red">Truss-less Arch Technology</span>
            <h2 className="adv-title-minimal">
              Advantages of <span>Vinfra Truss-less Roofs</span>
            </h2>
            <p className="adv-subtitle-minimal">
              Pioneering arch engineering eliminating trusses, purlins, and columns for 100% usable clear spans, rapid installation, and zero recurring maintenance.
            </p>
          </div>

          {/* 8 Hallmark Cards with Premium Architectural SVGs */}
          <div className="adv-badges-grid-minimal">
            {ADVANTAGES_BADGES.map((b) => (
              <div className="adv-badge-card-minimal" key={b.name}>
                <div className="adv-badge-icon-wrap">
                  {b.icon}
                </div>
                <div className="adv-badge-text">
                  <h4>{b.name}</h4>
                  <span>{b.tagline}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 14 Points Minimal Checklist */}
          <div className="adv-checklist-minimal">
            {ADVANTAGES_POINTS.map((pt, idx) => (
              <div className="adv-check-row" key={idx}>
                <span className="adv-check-icon">
                  <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. BENEFITS OF ROOFING MATERIALS (MATCHING HOMEPAGE) */}
        <section id="benefits" className="page-benefits">
          <div className="benefits-header-minimal">
            <span className="section-tag-red">Advanced Material Science</span>
            <h2 className="adv-title-minimal">
              Know The Benefits Of <span>Vinfra Roofing Materials</span>
            </h2>
            <div className="galvalume-quote-minimal">
              “ The combination of Long-lasting Galvalume sheet and modern High performance paint system offers Durable, Versatile, Light Weight. ”
            </div>
          </div>

          {/* 6 Minimal Material Cards with Premium Architectural SVGs */}
          <div className="materials-grid-minimal">
            {MATERIAL_BENEFITS.map((mat) => (
              <div className="mat-card-minimal" key={mat.title}>
                <div className="mat-card-top-minimal">
                  <span className="mat-card-icon-minimal">{mat.icon}</span>
                  <span className="mat-badge-minimal">{mat.metricBadge}</span>
                </div>
                <h3 className="mat-title-minimal">{mat.title}</h3>
                <p className="mat-desc-minimal">{mat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. STATS STRIP */}
        <section ref={statsRef} className="services-stats-strip">
          <div className="services-stats-inner">
            <div className="services-stats-grid">
              <div className="service-stat-card">
                <div className="service-stat-number">
                  {stats.projects}
                  <span>+</span>
                </div>
                <div className="service-stat-label">Projects Completed</div>
              </div>
              <div className="service-stat-card">
                <div className="service-stat-number">
                  {stats.experts}
                  <span>+</span>
                </div>
                <div className="service-stat-label">Expert Professionals</div>
              </div>
              <div className="service-stat-card">
                <div className="service-stat-number">
                  {stats.cities}
                  <span>+</span>
                </div>
                <div className="service-stat-label">Cities Served</div>
              </div>
              <div className="service-stat-card">
                <div className="service-stat-number">
                  {stats.satisfaction}
                  <span>%</span>
                </div>
                <div className="service-stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. BOTTOM CONSULTATION BANNER */}
        <section className="services-cta-banner">
          <div className="cta-backdrop-glow" />
          <div className="services-cta-inner">
            <h2>Need a Custom Engineering Estimate?</h2>
            <p>
              Schedule a site inspection or speak directly with our senior structural
              engineers for span feasibility, structural load analysis, and quotation.
            </p>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button className="services-cta-btn" data-lead-modal="true">
                Schedule Consultation →
              </button>
            </Link>
          </div>
        </section>

        {/* SERVICE DETAILS POPUP MODAL (SAME AS HOMEPAGE) */}
        {activeService && (
          <div
            className="service-modal-backdrop"
            onClick={() => setActiveService(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className={`service-modal-box ${
                activeService.name === "Accessories" || activeService.name === "Installation"
                  ? "service-modal-box--wide"
                  : ""
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="service-modal-close"
                onClick={() => setActiveService(null)}
                aria-label="Close dialog"
              >
                ✕
              </button>

              <div className="service-modal-header">
                <div className="service-modal-icon-ring">
                  {activeService.icon}
                </div>
                <div>
                  <h3 className="service-modal-title">{activeService.name}</h3>
                  <div className="service-modal-tagline">{activeService.tagline}</div>
                </div>
              </div>

              <p className="service-modal-body">{activeService.description}</p>

              {/* IF ACCESSORIES MODAL */}
              {activeService.name === "Accessories" && (
                <div className="modal-subitems-wrapper">
                  <div className="service-modal-features-title">
                    Roofing Accessories &amp; Components
                  </div>
                  <div className="modal-subitems-grid">
                    {ACCESSORIES_LIST.map((item) => (
                      <div className="modal-subitem-card" key={item.title}>
                        <img src={item.img} alt={item.title} className="modal-subitem-thumb" />
                        <div className="modal-subitem-info">
                          <div className="modal-subitem-header-row">
                            <span className="modal-subitem-icon">{item.icon}</span>
                            <span className="modal-subitem-tag">{item.category}</span>
                          </div>
                          <h4 className="modal-subitem-title">{item.title}</h4>
                          <p className="modal-subitem-desc">{item.summary}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* IF INSTALLATION MODAL */}
              {activeService.name === "Installation" && (
                <div className="modal-subitems-wrapper">
                  <div className="service-modal-features-title">
                    4-Stage Precision Installation Workflow
                  </div>
                  <div className="modal-subitems-grid">
                    {INSTALLATION_STAGES.map((stage) => (
                      <div className="modal-subitem-card" key={stage.title}>
                        <img src={stage.img} alt={stage.title} className="modal-subitem-thumb" />
                        <div className="modal-subitem-info">
                          <div className="modal-subitem-header-row">
                            <span className="modal-subitem-icon">{stage.icon}</span>
                            <span className="modal-subitem-tag">{stage.stage} • {stage.category}</span>
                          </div>
                          <h4 className="modal-subitem-title">{stage.title}</h4>
                          <p className="modal-subitem-desc">{stage.summary}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STANDARD FEATURES FOR OTHER SERVICES */}
              {activeService.name !== "Accessories" && activeService.name !== "Installation" && (
                <>
                  <div className="service-modal-features-title">Key Capabilities &amp; Highlights</div>
                  <ul className="service-modal-features">
                    {activeService.features?.map((feat, i) => (
                      <li className="service-modal-feature-item" key={i}>
                        <span className="service-modal-check">
                          <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
                            <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="service-modal-actions">
                <Link
                  href="/contact"
                  className="service-modal-btn-primary"
                  data-lead-modal="true"
                  onClick={() => setActiveService(null)}
                >
                  Inquire About {activeService.name} →
                </Link>
                <button
                  className="service-modal-btn-secondary"
                  onClick={() => setActiveService(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}