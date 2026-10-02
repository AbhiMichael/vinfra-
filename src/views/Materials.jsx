"use client";

import { useEffect } from "react";
import Link from "next/link";
import steelImage from "../assets/material.webp";
import ContactFooter from "../components/ContactFooter";

export default function Materials() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("view-visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    document
      .querySelectorAll(".reveal-group")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const coatingLayers = [
    {
      id: "01",
      name: "Top Coat* paint with Super Durable Polyester Resin (Nominal 20µm)**",
      thickness: "20µm",
      role: "UV & Weather Shield",
      highlight: true,
    },
    {
      id: "02",
      name: "Universal Corrosion Inhibitive Primer (Nominal 5µm)**",
      thickness: "5µm",
      role: "Primer Barrier",
      highlight: false,
    },
    {
      id: "03",
      name: "Conversion Coating",
      thickness: "Micro",
      role: "Chemical Bond",
      highlight: false,
    },
    {
      id: "04",
      name: "ZINCALUME® – Zn-Al Alloy Coated Steel Substrate",
      thickness: "Substrate",
      role: "Structural Core",
      highlight: true,
    },
    {
      id: "05",
      name: "Conversion Coating",
      thickness: "Micro",
      role: "Chemical Bond",
      highlight: false,
    },
    {
      id: "06",
      name: "Universal Corrosion Inhibitive Primer (Nominal 5µm)**",
      thickness: "5µm",
      role: "Primer Barrier",
      highlight: false,
    },
    {
      id: "07",
      name: "Backing Coat (Nominal 5µm)* (Refer Note 4)",
      thickness: "5µm",
      role: "Underside Protection",
      highlight: false,
    },
  ];

  const technicalFeatures = [
    {
      title: "Corrosion Shield",
      desc: "Sacrificial zinc-aluminium alloy prevents rust even at sheared edges.",
      tag: "50+ Year Life",
    },
    {
      title: "UV & Color Retention",
      desc: "Super durable polyester resin resists fading in extreme tropical sun.",
      tag: "Solar Reflective",
    },
    {
      title: "100% Lead-Free",
      desc: "Eco-conscious top coat formulation compliant with global environmental codes.",
      tag: "Green Certified",
    },
    {
      title: "Tested Standards",
      desc: "Triple-spot minimum thickness checked across every coil batch.",
      tag: "80% Min Nominal",
    },
  ];

  return (
    <>
      <style>{`
        /* Premium Light Theme Materials Page */
        .materials-light-page {
          background-color: #F8FAFC;
          color: #0F172A;
          min-height: 100vh;
          padding-top: 100px;
        }

        /* Hero Header */
        .materials-hero {
          padding: 60px 48px 40px 48px;
          text-align: center;
          position: relative;
          background: radial-gradient(circle at 50% 0%, #FFFFFF 0%, #F1F5F9 70%, #F8FAFC 100%);
          border-bottom: 1px solid #E2E8F0;
        }

        .materials-hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%);
          pointer-events: none;
        }

        .materials-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 860px;
          margin: 0 auto;
        }

        .materials-badge {
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
          margin-bottom: 20px;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
        }

        .materials-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #B91C1C;
          box-shadow: 0 0 8px rgba(185, 28, 28, 0.6);
        }

        .materials-hero-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #0F172A;
          margin-bottom: 18px;
        }

        .materials-hero-title .accent-red {
          color: #B91C1C;
        }

        .materials-hero-desc {
          font-size: 17px;
          color: #475569;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* Two-Column Technical Showcase */
        .materials-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          max-width: 1360px;
          margin: 0 auto;
          padding: 60px 48px;
          align-items: start;
        }

        /* Left Side: Sticky Visualizer */
        .materials-image-card {
          position: sticky;
          top: 120px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.08);
          overflow: hidden;
        }

        .image-viewport {
          border-radius: 18px;
          overflow: hidden;
          background: #0F172A;
          border: 1px solid rgba(15, 23, 42, 0.1);
          position: relative;
        }

        .image-viewport img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .image-viewport:hover img {
          transform: scale(1.03);
        }

        .image-caption-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 18px;
          padding: 12px 16px;
          background: #F8FAFC;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
        }

        .caption-spec {
          font-size: 12px;
          font-weight: 700;
          color: #0F172A;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .caption-spec span {
          color: #B91C1C;
        }

        /* Right Side: Specifications & Layer Breakdown */
        .materials-content-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 48px 44px;
          box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.06);
        }

        .product-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #B91C1C;
          background: #FEF2F2;
          border: 1px solid #FECACA;
          padding: 4px 12px;
          border-radius: 50px;
          margin-bottom: 18px;
        }

        .product-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 3.5vw, 44px);
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 20px;
          line-height: 1.18;
          letter-spacing: -0.02em;
        }

        .product-title span {
          color: #B91C1C;
        }

        .product-description {
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 34px;
        }

        /* Strata Layers List */
        .strata-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid #E2E8F0;
        }

        .strata-header-title {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #0F172A;
        }

        .strata-header-count {
          font-size: 12px;
          font-weight: 600;
          color: #64748B;
        }

        .layers-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 36px;
        }

        .layer-card {
          display: grid;
          grid-template-columns: 36px 1fr auto;
          align-items: center;
          gap: 14px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 12px 16px;
          transition: all 0.25s ease;
        }

        .layer-card:hover {
          background: #FFFFFF;
          border-color: #CBD5E1;
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
        }

        .layer-card.highlighted {
          background: #FFFFFF;
          border-color: #FECACA;
          border-left: 3px solid #B91C1C;
        }

        .layer-num {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 800;
          color: #B91C1C;
          background: #FEF2F2;
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .layer-name {
          font-size: 13px;
          font-weight: 600;
          color: #0F172A;
          line-height: 1.4;
        }

        .layer-tag {
          font-size: 11px;
          font-weight: 700;
          color: #64748B;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          padding: 3px 8px;
          border-radius: 6px;
          white-space: nowrap;
        }

        .layer-card.highlighted .layer-tag {
          color: #B91C1C;
          background: #FEF2F2;
          border-color: #FECACA;
        }

        /* Technical Notes Box */
        .tech-notes-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px;
        }

        .notes-heading {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #0F172A;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .notes-heading-icon {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #B91C1C;
        }

        .note-item {
          font-size: 13px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 10px;
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .note-item:last-child {
          margin-bottom: 0;
        }

        .note-item strong {
          color: #B91C1C;
          font-weight: 700;
          white-space: nowrap;
        }

        /* Four Feature Pillars */
        .pillars-section {
          padding: 20px 48px 80px 48px;
          max-width: 1360px;
          margin: 0 auto;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .pillar-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 30px 24px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .pillar-card:hover {
          transform: translateY(-4px);
          border-color: #CBD5E1;
          box-shadow: 0 14px 28px -6px rgba(15, 23, 42, 0.08);
        }

        .pillar-badge {
          align-self: flex-start;
          background: #FEF2F2;
          color: #B91C1C;
          border: 1px solid #FECACA;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 6px;
          margin-bottom: 16px;
        }

        .pillar-title {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 8px;
        }

        .pillar-desc {
          font-size: 13px;
          line-height: 1.6;
          color: #64748B;
        }

        /* Call To Action */
        .materials-cta {
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

        .materials-cta-inner {
          max-width: 680px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .materials-cta-tag {
          display: inline-block;
          background: rgba(185, 28, 28, 0.2);
          border: 1px solid rgba(185, 28, 28, 0.4);
          color: #F87171;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 50px;
          margin-bottom: 20px;
        }

        .materials-cta h2 {
          font-family: var(--font-display);
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .materials-cta p {
          font-size: 17px;
          color: #94A3B8;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .materials-cta-btn {
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 15px 38px;
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

        .materials-cta-btn:hover {
          background: #DC2626;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -4px rgba(220, 38, 38, 0.6);
        }

        /* Materials Footer */
        .materials-footer {
          background: #0A0F14;
          color: #94A3B8;
          padding: 70px 48px 40px 48px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 48px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-col-title {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 20px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-col-title::before {
          content: "";
          display: inline-block;
          width: 4px;
          height: 14px;
          background: #B91C1C;
          border-radius: 2px;
        }

        .footer-contact-item {
          font-size: 14px;
          color: #94A3B8;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          line-height: 1.5;
        }

        .footer-text {
          font-size: 14px;
          line-height: 1.7;
          color: #94A3B8;
        }

        .footer-bottom-bar {
          text-align: center;
          margin-top: 50px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 13px;
          color: #64748B;
        }

        /* Scroll Reveal */
        .reveal-group {
          opacity: 0;
          transform: translateY(30px);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
        }
        .reveal-group.view-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .materials-container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 24px;
          }
          .materials-image-card {
            position: relative;
            top: 0;
          }
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .materials-light-page {
            padding-top: 80px;
          }
          .materials-hero {
            padding: 48px 20px 32px 20px;
          }
          .materials-container {
            padding: 24px 16px;
          }
          .materials-content-card {
            padding: 30px 20px;
          }
          .product-title {
            font-size: 28px;
          }
          .pillars-section {
            padding: 20px 16px 60px 16px;
          }
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .materials-cta {
            padding: 60px 20px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .materials-footer {
            padding: 50px 20px 30px 20px;
          }
        }
      `}</style>

      <div className="materials-light-page">
        {/* Hero Section */}
        <section className="materials-hero reveal-group">
          <div className="materials-hero-grid" />
          <div className="materials-hero-inner">
            <div className="materials-badge">
              <span className="materials-badge-dot" />
              PREMIUM MATERIAL SPECIFICATION
            </div>
            <h1 className="materials-hero-title">
              COLORBOND<span className="accent-red">®</span> XMA Steel
            </h1>
            <p className="materials-hero-desc">
              Pre-painted structural steel engineered for extreme outdoor durability,
              superior corrosion resistance, and total design freedom in trussless arch roofing.
            </p>
          </div>
        </section>

        {/* Two-Column Technical Showcase */}
        <div className="materials-container reveal-group">
          {/* Left Side: Sticky Visualizer */}
          <div className="materials-image-card">
            <div className="image-viewport">
              <img
                src={steelImage.src || steelImage}
                alt="COLORBOND XMA Steel cross-section coating layers"
              />
            </div>
            <div className="image-caption-bar">
              <div className="caption-spec">
                <span>●</span> 7-Stage Multi-Layer Shield
              </div>
              <div className="caption-spec">
                Zincalume® Zn-Al Alloy Base
              </div>
            </div>
          </div>

          {/* Right Side: Specifications & Layer Breakdown */}
          <div className="materials-content-card">
            <div className="product-badge">BLUESCOPE CERTIFIED SUBSTRATE</div>
            <h2 className="product-title">
              COLORBOND<span>®</span> XMA STEEL
            </h2>
            <p className="product-description">
              COLORBOND® XMA steel – pre-painted steel is an efficient solution
              for Properties of Steel Base (other steel base possible on design
              flexibility and outdoor durability). It is an ideal choice for manu
              accessories.
            </p>

            <div className="strata-header">
              <div className="strata-header-title">Engineered Strata Breakdown</div>
              <div className="strata-header-count">7 Protective Layers</div>
            </div>

            <div className="layers-list">
              {coatingLayers.map((layer) => (
                <div
                  key={layer.id}
                  className={`layer-card ${layer.highlight ? "highlighted" : ""}`}
                >
                  <div className="layer-num">{layer.id}</div>
                  <div className="layer-name">{layer.name}</div>
                  <div className="layer-tag">{layer.thickness}</div>
                </div>
              ))}
            </div>

            <div className="tech-notes-box">
              <div className="notes-heading">
                <span className="notes-heading-icon" />
                Technical Compliance & Standards
              </div>
              <div className="note-item">
                <strong>Note 1:</strong> The top coat is free of lead
              </div>
              <div className="note-item">
                <strong>Note 2:</strong> Triple spot minimum coat thickness – 80% of nominal value
              </div>
              <div className="note-item">
                <strong>Note 3:</strong> Refer to COLORBOND® technical specifications for detailed testing standards
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars */}
        <section className="pillars-section reveal-group">
          <div className="pillars-grid">
            {technicalFeatures.map((feat, idx) => (
              <div className="pillar-card" key={idx}>
                <span className="pillar-badge">{feat.tag}</span>
                <h3 className="pillar-title">{feat.title}</h3>
                <p className="pillar-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="materials-cta reveal-group">
          <div className="cta-backdrop-glow" />
          <div className="materials-cta-inner">
            <span className="materials-cta-tag">GET IN TOUCH</span>
            <h2>Get in Touch</h2>
            <p>
              Request a physical material sample or discuss your project specifications
              with our roofing specialists.
            </p>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button className="materials-cta-btn">
                Contact Us →
              </button>
            </Link>
          </div>
        </section>

        {/* Global Contact Footer */}
        <ContactFooter />
      </div>
    </>
  );
}
