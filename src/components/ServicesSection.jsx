"use client";

import { useState, useEffect } from "react";
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
    tagline: "Precision Crane-Assisted Mechanical Seaming",
    description:
      "Our certified erection crews employ calibrated crane systems and motorized mechanical seamers. We assemble, lift, and lock arch panels into position up to 3x faster than conventional steel truss or PEB systems.",
    features: [
      "100% puncture-free motorized seaming with zero leak risk",
      "High-speed crane-assisted erection minimizing site downtime",
      "Adherence to highest industrial safety (PPE/OSHA) protocols",
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
    tagline: "Ventilation, Skylights & Integrated Systems",
    description:
      "Enhance operational efficiency and natural lighting with custom roofing accessories designed specifically for curved trussless arches. From wind-powered ventilators to custom gutters and polycarbonates.",
    features: [
      "Wind-driven stainless steel & aluminum turbo ventilators",
      "Curved polycarbonate skylight panels for natural daylighting",
      "Custom flashing, gutters, downspouts, and lighting hanger brackets",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    name: "Support",
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

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveService(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="page-services reveal-group">
      <div className="services-header">
        <div className="services-eyebrow">Services</div>
        <h2 className="services-title">Protecting your roof assets</h2>
        <p className="services-body">
          Vinfra Truss-less Roofings has been at the forefront of delivering innovative roofing solutions across industrial, commercial, and institutional sectors. We specialize in trussless (K-Span) roofing systems that eliminate the need for conventional trusses, allowing for clear spans, reduced material usage, and maximized interior space.
        </p>
        <p className="services-body">
          With over a decade of experience, our team blends engineering precision, structural strength, quality materials and aesthetic appeal to deliver roofing systems that are not only strong and durable but also cost-efficient, low-maintenance and built to last.
        </p>
      </div>

      <div className="services-grid">
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
            <div className="service-name">{svc.name}</div>
            <div className="service-click-tag">
              View Details <span className="arrow">↗</span>
            </div>
          </div>
        ))}
      </div>

      {/* SERVICE DETAILS POPUP MODAL */}
      {activeService && (
        <div
          className="service-modal-backdrop"
          onClick={() => setActiveService(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="service-modal-box"
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
              <div className="service-modal-meta">
                <span className="service-modal-badge">
                  {SERVICES.findIndex((s) => s.name === activeService.name) + 1 < 10
                    ? `0${SERVICES.findIndex((s) => s.name === activeService.name) + 1}`
                    : SERVICES.findIndex((s) => s.name === activeService.name) + 1}{" "}
                  • Service Detail
                </span>
                <h3 className="service-modal-title">{activeService.name}</h3>
                <span className="service-modal-tagline">
                  {activeService.tagline}
                </span>
              </div>
            </div>

            <p className="service-modal-body">{activeService.description}</p>

            <div className="service-modal-features-title">Key Capabilities &amp; Highlights</div>
            <ul className="service-modal-features">
              {activeService.features?.map((feat, i) => (
                <li className="service-modal-feature-item" key={i}>
                  <span className="service-modal-check">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="service-modal-actions">
              <Link
                href="/contact"
                className="service-modal-btn-primary"
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
    </section>
  );
}