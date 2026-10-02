"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";
import ContactFooter from "../../components/ContactFooter";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", paddingTop: "140px", paddingBottom: "80px", background: "#FFFFFF", color: "#0F172A", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: "999px", background: "#FEF2F2", color: "#B91C1C", fontWeight: "700", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
            Join Our Team
          </div>
          <h1 style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "clamp(32px, 5vw, 54px)", fontWeight: "800", letterSpacing: "-0.02em", marginBottom: "20px", color: "#0F172A" }}>
            Build the Future of <span style={{ color: "#B91C1C" }}>Trussless Roofing</span>
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#475569", marginBottom: "36px", maxWidth: "620px", margin: "0 auto 36px auto" }}>
            At Vinfra Projects, we are always on the lookout for passionate civil engineers, site supervisors, design specialists, and roofing technicians. Grow your career with South India's trusted roofing innovators.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:info@vinfraprojects.com?subject=Career%20Application%20-%20Vinfra%20Projects"
              style={{
                background: "#B91C1C",
                color: "#FFFFFF",
                padding: "14px 32px",
                borderRadius: "10px",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: "15px",
                boxShadow: "0 8px 20px -4px rgba(185, 28, 28, 0.35)",
                transition: "all 0.2s ease"
              }}
            >
              Send Resume to info@vinfraprojects.com
            </a>
            <Link
              href="/contact"
              style={{
                background: "#F1F5F9",
                color: "#0F172A",
                padding: "14px 32px",
                borderRadius: "10px",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: "15px",
                border: "1px solid #E2E8F0",
                transition: "all 0.2s ease"
              }}
            >
              Contact HR Team
            </Link>
          </div>
        </div>
      </main>
      <ContactFooter />
    </>
  );
}
