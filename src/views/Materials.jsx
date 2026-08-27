"use client";

import { useEffect } from "react";

// Import your image for the left side
import steelImage from "../assets/material.webp";

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
    "Top Coat* paint with Super Durable Polyester Resin (Nominal 20µm)**",
    "Universal Corrosion Inhibitive Primer (Nominal 5µm)**",
    "Conversion Coating",
    "ZINCALUME® – Zn-Al Alloy Coated Steel Substrate",
    "Conversion Coating",
    "Universal Corrosion Inhibitive Primer (Nominal 5µm)**",
    "Backing Coat (Nominal 5µm)* (Refer Note 4)",
  ];

  return (
    <div className="materials-page">
      <style>{`
        .materials-page {
          background: var(--dark);
          min-height: 100vh;
          padding-top: 100px;
        }

        /* Two‑column layout */
        .materials-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 48px;
          align-items: start;
        }

        /* Left side – image */
        .materials-image {
          position: sticky;
          top: 140px;
          border-radius: 24px;
          overflow: hidden;
          background: var(--dark);
          border: 1px solid var(--panel-border);
        }
        .materials-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }
        .materials-image img:hover {
          transform: scale(1.02);
        }

        /* Right side – text content */
        .materials-content {
          background: rgba(233,238,242,0.02);
          border: 1px solid var(--panel-border);
          border-radius: 24px;
          padding: 40px;
        }
        .product-badge {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--orange);
          margin-bottom: 16px;
        }
        .product-title {
          font-family: var(--font-display);
          font-size: 42px;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 24px;
          line-height: 1.2;
        }
        .product-title span {
          color: var(--orange);
        }
        .product-description {
          font-size: 16px;
          line-height: 1.7;
          color: var(--steel-light);
          margin-bottom: 32px;
        }

        /* Layer list */
        .layers-list {
          margin: 32px 0;
          border-left: 2px solid var(--orange);
          padding-left: 20px;
        }
        .layer-item {
          font-size: 14px;
          line-height: 1.6;
          color: var(--white);
          margin-bottom: 12px;
          position: relative;
        }
        .layer-item::before {
          content: "▹";
          color: var(--orange);
          position: absolute;
          left: -20px;
        }

        /* Technical notes */
        .tech-notes {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--panel-border);
        }
        .note {
          font-size: 13px;
          color: var(--steel-light);
          margin-bottom: 8px;
        }
        .note strong {
          color: var(--orange);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .materials-container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 24px;
          }
          .materials-image {
            position: relative;
            top: 0;
            max-height: none;
          }
          .product-title {
            font-size: 32px;
          }
        }
        @media (max-width: 768px) {
          .materials-container {
            padding: 24px 20px;
            gap: 32px;
          }
          .materials-content {
            padding: 24px;
          }
          .product-title {
            font-size: 28px;
          }
          .materials-cta {
            padding: 60px 20px !important;
          }
          .materials-cta h2 {
            font-size: 32px !important;
          }
          .materials-cta p {
            font-size: 15px !important;
          }
          .materials-footer {
            padding: 40px 20px 32px !important;
          }
        }
        @media (max-width: 480px) {
          .materials-content {
            padding: 16px;
          }
          .product-title {
            font-size: 24px;
          }
          .materials-cta {
            padding: 48px 16px !important;
          }
          .materials-cta h2 {
            font-size: 26px !important;
          }
          .materials-footer {
            padding: 32px 16px 24px !important;
          }
        }

        .reveal-group {
          opacity: 0;
          transform: translateY(40px);
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease;
        }
        .reveal-group.view-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="materials-container reveal-group">
        {/* Left side – img1.webp */}
        <div className="materials-image">
          <img src={steelImage.src} alt="COLORBOND XMA Steel cross-section" />
        </div>

        {/* Right side – Content */}
        <div className="materials-content">
          <div className="product-badge">PREMIUM MATERIAL</div>
          <h1 className="product-title">
            COLORBOND<span>®</span> XMA STEEL
          </h1>
          <p className="product-description">
            COLORBOND® XMA steel – pre-painted steel is an efficient solution
            for Properties of Steel Base (other steel base possible on design
            flexibility and outdoor durability). It is an ideal choice for manu
            accessories.
          </p>

          <div className="layers-list">
            {coatingLayers.map((layer, idx) => (
              <div key={idx} className="layer-item">
                {layer}
              </div>
            ))}
          </div>

          <div className="tech-notes">
            <div className="note">
              <strong>Note 1:</strong> The top coat is free of lead
            </div>
            <div className="note">
              <strong>Note 2:</strong> Triple spot minimum coat thickness – 80%
              of nominal value
            </div>
            <div className="note">
              <strong>Note 3:</strong> Refer to COLORBOND® technical
              specifications for detailed testing standards
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div
        className="materials-cta reveal-group"
        style={{
          background: "linear-gradient(135deg, var(--orange), #b01515)",
          padding: "80px 48px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "42px",
            fontWeight: "800",
            color: "var(--white)",
            marginBottom: "20px",
          }}
        >
          Get in Touch
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.9)",
            marginBottom: "32px",
          }}
        >
          Request a sample or discuss your project requirements
        </p>
        <button
          style={{
            background: "var(--white)",
            color: "var(--orange)",
            border: "none",
            padding: "16px 40px",
            borderRadius: "50px",
            fontFamily: "var(--font-display)",
            fontSize: "16px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Contact Us →
        </button>
      </div>

      {/* Footer */}
      <div
        className="materials-footer"
        style={{
          background: "#0a1014",
          padding: "60px 48px 40px",
          marginTop: "0",
          borderTop: "1px solid var(--panel-border)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                fontWeight: "700",
                color: "var(--orange)",
                marginBottom: "20px",
              }}
            >
              Contact Info
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "var(--steel-light)",
                marginBottom: "10px",
              }}
            >
              📞 +91 9656813254
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--steel-light)",
                marginBottom: "10px",
              }}
            >
              ✉️ info@vinfraprojects.com
            </p>
            <p style={{ fontSize: "14px", color: "var(--steel-light)" }}>
              📍 Mannamkund, Karuvanchal, Kannur, Kerala
            </p>
          </div>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                fontWeight: "700",
                color: "var(--orange)",
                marginBottom: "20px",
              }}
            >
              Branches
            </h4>
            <p style={{ fontSize: "14px", color: "var(--steel-light)" }}>
              Ernakulam · Bangalore · Chennai
            </p>
          </div>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                fontWeight: "700",
                color: "var(--orange)",
                marginBottom: "20px",
              }}
            >
              Vinfra
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "var(--steel-light)",
                lineHeight: "1.6",
              }}
            >
              Professional Trussless Roofing across South India. Quality
              assured.
            </p>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid var(--panel-border)",
            fontSize: "12px",
            color: "var(--steel-light)",
          }}
        >
          Powered by White Marketing Studio. All rights reserved.
        </div>
      </div>
    </div>
  );
}
