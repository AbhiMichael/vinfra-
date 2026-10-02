"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import ContactFooter from "../components/ContactFooter";

// Import images
import ProjectOne from "../assets/img1.webp";
import ProjectTwo from "../assets/img2.webp";
import ProjectThree from "../assets/img3.webp";
import ProjectFour from "../assets/img4.webp";
import MainFeature from "../assets/img5.webp";

const INDUSTRIES = [
  "Agricultural Warehouses",
  "Aircraft Hangers",
  "Auditoriums",
  "Automobile Industries",
  "Bus Station",
  "Cold Storages",
  "Educational Institution",
  "Parking Areas",
  "Shopping Malls",
];

export default function About() {
  const [counters, setCounters] = useState({
    years: 0,
    experts: 0,
    projects: 0,
    cities: 0,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Counter animation
  useEffect(() => {
    if (statsInView) {
      const targets = { years: 10, experts: 25, projects: 500, cities: 100 };
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        setCounters({
          years: Math.min(
            Math.floor((step / steps) * targets.years),
            targets.years,
          ),
          experts: Math.min(
            Math.floor((step / steps) * targets.experts),
            targets.experts,
          ),
          projects: Math.min(
            Math.floor((step / steps) * targets.projects),
            targets.projects,
          ),
          cities: Math.min(
            Math.floor((step / steps) * targets.cities),
            targets.cities,
          ),
        });
        if (step >= steps) clearInterval(interval);
      }, stepTime);
      return () => clearInterval(interval);
    }
  }, [statsInView]);

  // Scroll reveal animation
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

  // SVG icon components
  const IconHouse = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
  const IconBuilding = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="12" y2="14" />
    </svg>
  );
  const IconFactory = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="8" width="16" height="12" rx="1" />
      <path d="M8 8V4h8v4" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="16" y2="16" />
    </svg>
  );
  const IconInstitution = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="12" cy="12" r="2" />
      <line x1="12" y1="14" x2="12" y2="18" />
    </svg>
  );
  const IconTrussless = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
  const IconReplace = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M21 2v6h-6" />
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M3 22v-6h6" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    </svg>
  );
  const IconCoating = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4 12H2" />
      <path d="M22 12h-2" />
      <circle cx="12" cy="12" r="4" />
      <path d="M7 5l2 2" />
      <path d="M17 7l2-2" />
    </svg>
  );
  const IconTrophy = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
      <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
      <path d="M12 13v8" />
      <path d="M8 21h8" />
      <path d="M12 13a5 5 0 0 0 5-5V3H7v5a5 5 0 0 0 5 5z" />
    </svg>
  );
  const IconTarget = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
  const IconEye = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
  const IconCompass = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
  const IconCheck = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <>
      <style>{`
        /* ---------- Premium Light Theme About Page ---------- */
        .about-page {
          background: #F8FAFC;
          color: #0F172A;
          min-height: 100vh;
          padding-top: 90px;
        }

        /* ----------------------------------------------------
           1. HERO / LANDING SECTION (Redesigned Architectural)
        ----------------------------------------------------- */
        .about-hero-fresh {
          position: relative;
          padding: 80px 48px 70px;
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
          overflow: hidden;
        }

        /* Subtle architectural background texture */
        .about-hero-fresh::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 50% 20%, rgba(185, 28, 28, 0.04) 0%, transparent 55%),
            linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px);
          background-size: 100% 100%, 36px 36px, 36px 36px;
          pointer-events: none;
        }

        .about-hero-fresh-inner {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          color: #0F172A;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          padding: 8px 22px;
          border-radius: 50px;
          margin-bottom: 26px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
        }

        .hero-top-badge .pulse-ring {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #B91C1C;
          box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.2);
        }

        .about-hero-fresh-title {
          font-family: var(--font-display);
          font-size: clamp(38px, 5.2vw, 64px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.03em;
          color: #0F172A;
          margin-bottom: 22px;
        }

        .about-hero-fresh-title .accent-red {
          color: #B91C1C;
          position: relative;
          display: inline-block;
        }

        .about-hero-fresh-description {
          font-size: 17px;
          line-height: 1.75;
          color: #475569;
          max-width: 720px;
          margin: 0 auto 36px;
        }

        .about-hero-fresh-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          align-items: center;
          margin-bottom: 0;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 15px 34px;
          border-radius: 12px;
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 24px -4px rgba(185, 28, 28, 0.35);
        }

        .hero-btn-primary:hover {
          transform: translateY(-2px);
          background: #991B1B;
          box-shadow: 0 12px 28px -4px rgba(185, 28, 28, 0.45);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFFFFF;
          color: #0F172A;
          border: 1px solid #CBD5E1;
          padding: 15px 30px;
          border-radius: 12px;
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
        }

        .hero-btn-secondary:hover {
          transform: translateY(-2px);
          border-color: #94A3B8;
          background: #F8FAFC;
        }

        /* Hero Architectural Pillars Ribbon */
        .hero-pillars-ribbon {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          text-align: left;
        }

        .pillar-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px 22px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.04);
        }

        .pillar-card:hover {
          transform: translateY(-3px);
          border-color: #FCA5A5;
          box-shadow: 0 10px 24px -4px rgba(185, 28, 28, 0.08);
        }

        .pillar-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: #FEF2F2;
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-text h4 {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 6px;
        }

        .pillar-text p {
          font-size: 13px;
          line-height: 1.55;
          color: #64748B;
          margin: 0;
        }


        /* ----------------------------------------------------
           2. MISSION & VISION SECTION (Unboxed & Left-Aligned)
        ----------------------------------------------------- */
        .about-mission-vision {
          padding: 96px 48px;
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
        }

        .mv-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .mv-content-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 64px;
          align-items: start;
        }

        .mv-text-column {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .mv-section-header {
          margin-bottom: 32px;
        }

        .section-tag {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #B91C1C;
          margin-bottom: 12px;
        }

        .mv-section-headline {
          font-family: var(--font-display);
          font-size: clamp(32px, 3.8vw, 46px);
          font-weight: 800;
          line-height: 1.16;
          letter-spacing: -0.025em;
          color: #0F172A;
          margin-bottom: 14px;
        }

        .mv-section-headline span {
          color: #B91C1C;
        }

        .mv-section-subtext {
          font-size: 16px;
          line-height: 1.7;
          color: #64748B;
          max-width: 560px;
        }

        /* Editorial Unboxed Mission / Vision Blocks */
        .mv-editorial-block {
          padding: 0;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        .mv-block-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #B91C1C;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          margin-bottom: 8px;
        }

        .mv-block-badge svg {
          width: 18px;
          height: 18px;
        }

        .mv-block-title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 12px 0;
          letter-spacing: -0.015em;
        }

        .mv-block-body {
          font-size: 15px;
          line-height: 1.75;
          color: #475569;
          margin-bottom: 18px;
        }

        .mv-editorial-divider {
          height: 1px;
          background: #E2E8F0;
          margin: 32px 0;
          width: 100%;
        }

        .mv-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mv-point-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #1E293B;
        }

        .mv-point-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #FEF2F2;
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Image Showcase Mosaic - Expanded Length & Presence */
        .mv-images-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 18px;
          height: 720px;
          min-height: 680px;
          position: sticky;
          top: 100px;
        }

        .mv-img-box {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #0F172A;
          border: 1px solid #E2E8F0;
          box-shadow: 0 10px 30px -4px rgba(15, 23, 42, 0.08);
        }

        .mv-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mv-img-box:hover img {
          transform: scale(1.05);
        }

        .mv-img-tall {
          grid-row: span 2;
        }

        .mv-img-caption {
          position: absolute;
          bottom: 0;
          inset-inline: 0;
          padding: 18px 20px;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 100%);
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }


        /* ----------------------------------------------------
           3. OUR JOURNEY SECTION (New Timeline)
        ----------------------------------------------------- */
        .about-journey {
          padding: 100px 48px;
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
        }

        .journey-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .journey-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 60px;
        }

        .journey-timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }

        /* Connecting horizontal tracker line */
        .journey-timeline-grid::before {
          content: "";
          position: absolute;
          top: 36px;
          left: 40px;
          right: 40px;
          height: 2px;
          background: #E2E8F0;
          z-index: 1;
        }

        .journey-node {
          position: relative;
          z-index: 2;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.03);
        }

        .journey-node:hover {
          transform: translateY(-4px);
          border-color: #B91C1C;
          box-shadow: 0 12px 24px -6px rgba(185, 28, 28, 0.1);
        }

        .journey-year-bubble {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2px solid #B91C1C;
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 22px;
          box-shadow: 0 0 0 6px #F8FAFC;
        }

        .journey-node:hover .journey-year-bubble {
          background: #B91C1C;
          color: #FFFFFF;
        }

        .journey-node-title {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .journey-node-desc {
          font-size: 13.5px;
          line-height: 1.65;
          color: #64748B;
          margin: 0;
        }


        /* ----------------------------------------------------
           4. STATS COUNTER SECTION
        ----------------------------------------------------- */
        .about-stats {
          padding: 80px 48px;
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #E2E8F0;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.04);
          max-width: 1200px;
          margin: 0 auto;
        }

        .stat-card {
          background: #FFFFFF;
          padding: 44px 24px;
          text-align: center;
          transition: background 0.3s ease;
        }

        .stat-card:hover {
          background: #FFFDFD;
        }

        .stat-number {
          font-family: var(--font-display);
          font-size: clamp(44px, 5vw, 60px);
          font-weight: 800;
          color: #B91C1C;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
          line-height: 1.1;
        }

        .stat-label {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 600;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }


        /* ----------------------------------------------------
           5. ACHIEVEMENTS & HONORS (Enhanced with KSEA Award)
        ----------------------------------------------------- */
        .about-achievements {
          padding: 100px 48px;
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
        }

        .achievements-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .achievements-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 56px;
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 44px;
        }

        .achievement-row {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 1px;
          background: #E2E8F0;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px -8px rgba(15, 23, 42, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 420px;
        }

        .achievement-row:hover {
          box-shadow: 0 20px 44px -10px rgba(15, 23, 42, 0.12);
          transform: translateY(-2px);
        }

        .achievement-text-card {
          padding: 56px 52px;
          background: #F8FAFC;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .achievement-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FEF2F2;
          color: #B91C1C;
          border: 1px solid #FECACA;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 50px;
          width: fit-content;
          margin-bottom: 20px;
        }

        .achievement-text-card h3 {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 18px;
          color: #0F172A;
          letter-spacing: -0.015em;
        }

        .achievement-text-card p {
          font-size: 15.5px;
          line-height: 1.75;
          color: #475569;
          margin-bottom: 26px;
        }

        .achievement-footer-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid #E2E8F0;
        }

        .achievement-year {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: #B91C1C;
        }

        .achievement-verifier {
          font-size: 12.5px;
          color: #64748B;
          font-weight: 600;
        }

        .achievement-image-card {
          position: relative;
          overflow: hidden;
          background: #0F172A;
          min-height: 420px;
        }

        .achievement-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .achievement-image-card:hover img {
          transform: scale(1.05);
        }

        .achievement-img-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 100%);
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }


        /* ----------------------------------------------------
           6. COMMITMENT SECTION
        ----------------------------------------------------- */
        .about-commitment {
          padding: 96px 48px;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          text-align: center;
          position: relative;
          border-bottom: 1px solid #E2E8F0;
        }

        .commitment-content {
          max-width: 820px;
          margin: 0 auto;
        }

        .commitment-text {
          font-size: 16px;
          line-height: 1.8;
          color: #CBD5E1;
          margin-bottom: 36px;
        }

        .about-commitment .section-tag {
          color: #F87171;
        }

        .about-commitment .section-headline {
          color: #FFFFFF;
        }

        .commitment-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 15px 36px;
          border-radius: 12px;
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 8px 24px -4px rgba(185, 28, 28, 0.5);
        }

        .commitment-btn:hover {
          background: #DC2626;
          transform: translateY(-2px);
        }


        /* ----------------------------------------------------
           3. FOUNDER SECTION (Demis Manuel)
        ----------------------------------------------------- */
        .about-founder {
          padding: 100px 48px;
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
          position: relative;
        }

        .founder-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .founder-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
        }

        .founder-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FEF2F2;
          border: 1px solid #FECACA;
          color: #B91C1C;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 20px;
        }

        .founder-name {
          font-family: var(--font-display);
          font-size: clamp(34px, 4.2vw, 50px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #0F172A;
          margin-bottom: 6px;
        }

        .founder-role {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          color: #B91C1C;
          letter-spacing: 0.04em;
          margin-bottom: 24px;
          display: block;
        }

        .founder-quote-box {
          position: relative;
          background: #FFFFFF;
          border-left: 3px solid #B91C1C;
          border-radius: 0 16px 16px 0;
          padding: 22px 26px;
          margin-bottom: 24px;
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
        }

        .founder-quote-text {
          font-size: 15.5px;
          font-style: italic;
          line-height: 1.7;
          color: #1E293B;
          margin: 0;
        }

        .founder-bio {
          font-size: 15px;
          line-height: 1.75;
          color: #475569;
          margin-bottom: 28px;
        }

        .founder-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid #E2E8F0;
        }

        .founder-stat-item h4 {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 800;
          color: #B91C1C;
          margin: 0 0 4px 0;
          letter-spacing: -0.02em;
        }

        .founder-stat-item p {
          font-size: 12px;
          font-weight: 600;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0;
        }

        /* Founder Visual Card */
        .founder-visual-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #0F172A;
          border: 1px solid #E2E8F0;
          box-shadow: 0 16px 36px -8px rgba(15, 23, 42, 0.1);
        }

        .founder-visual-card img {
          width: 100%;
          height: 100%;
          min-height: 480px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .founder-visual-card:hover img {
          transform: scale(1.03);
        }

        .founder-visual-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 26px 28px;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 65%, transparent 100%);
          color: #FFFFFF;
        }

        .founder-visual-overlay h4 {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 700;
          margin: 0 0 4px 0;
          letter-spacing: -0.01em;
        }

        .founder-visual-overlay p {
          font-size: 13px;
          color: #CBD5E1;
          margin: 0;
        }


        /* ----------------------------------------------------
           7. INDUSTRIES WE CATER SECTION
        ----------------------------------------------------- */
        .about-industries {
          background-color: #FFFFFF;
          background-image: 
            radial-gradient(circle, rgba(15, 23, 42, 0.05) 1.5px, transparent 1.5px),
            radial-gradient(circle at 50% 20%, rgba(185, 28, 28, 0.04) 0%, transparent 60%);
          background-size: 30px 30px, 100% 100%;
          color: #0F172A;
          padding: 100px 48px;
          position: relative;
          z-index: 5;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
        }

        .industries-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .industries-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .industries-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 800;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #0F172A;
          margin-bottom: 16px;
        }

        .industries-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin: 0 auto;
        }

        .industries-divider span:first-child,
        .industries-divider span:nth-child(2) {
          width: 8px;
          height: 8px;
          background: #B91C1C;
          opacity: 0.35;
          border-radius: 50%;
          display: inline-block;
        }

        .industries-divider span:last-child {
          width: 44px;
          height: 3px;
          background: #B91C1C;
          display: inline-block;
          border-radius: 2px;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          border: none;
          margin-top: 48px;
        }

        .industry-cell {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 24px 22px;
          font-family: var(--font-display);
          font-size: 15.5px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: -0.01em;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
          position: relative;
          overflow: hidden;
        }

        .industry-cell-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .industry-cell-left::before {
          content: "";
          width: 8px;
          height: 8px;
          background: #B91C1C;
          border-radius: 50%;
          opacity: 0.7;
          transition: all 0.3s;
          flex-shrink: 0;
        }

        .industry-cell .ind-arrow {
          font-size: 16px;
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.3s ease;
          color: #FFFFFF;
        }

        .industry-cell:hover {
          background: #B91C1C;
          border-color: #B91C1C;
          color: #FFFFFF;
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 14px 28px -4px rgba(185, 28, 28, 0.35);
        }

        .industry-cell:hover .industry-cell-left::before { 
          background: #FFFFFF; 
        }

        .industry-cell:hover .ind-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Scroll reveal */
        .reveal-group {
          opacity: 0;
          transform: translateY(30px);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
        }

        .reveal-group.view-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ----------------------------------------------------
           RESPONSIVE BREAKPOINTS
        ----------------------------------------------------- */
        @media (max-width: 1024px) {
          .about-hero-fresh { padding: 60px 32px 50px; }
          .hero-pillars-ribbon { grid-template-columns: 1fr; gap: 16px; }
          .mv-content-grid { grid-template-columns: 1fr; gap: 36px; }
          .mv-images-column { height: 480px; min-height: unset; position: static; }
          .founder-grid { grid-template-columns: 1fr; gap: 40px; }
          .founder-visual-card img { min-height: 360px; }
          .journey-timeline-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .journey-timeline-grid::before { display: none; }
          .stats-container { grid-template-columns: repeat(2, 1fr); }
          .achievement-row { grid-template-columns: 1fr; }
          .industries-grid { grid-template-columns: repeat(2, 1fr); }
          .about-mission-vision, .about-founder, .about-journey, .about-stats,
          .about-achievements, .about-commitment, .about-industries {
            padding: 60px 32px;
          }
        }

        @media (max-width: 768px) {
          .about-hero-fresh { padding: 48px 20px 40px; }
          .about-hero-fresh-title { font-size: 34px; }
          .about-hero-fresh-actions { flex-direction: column; width: 100%; gap: 12px; }
          .hero-btn-primary, .hero-btn-secondary { width: 100%; justify-content: center; }
          .founder-highlights { grid-template-columns: 1fr; gap: 16px; }
          .journey-timeline-grid { grid-template-columns: 1fr; }
          .mv-points { grid-template-columns: 1fr; }
          .achievement-text-card { padding: 36px 24px; }
          .achievement-image-card { min-height: 260px; }
          .industries-grid { grid-template-columns: 1fr; }
          .stat-card { padding: 32px 16px; }
          .stat-number { font-size: 38px !important; }
          .about-mission-vision, .about-founder, .about-journey, .about-stats,
          .about-achievements, .about-commitment, .about-industries {
            padding: 50px 20px;
          }
        }

        @media (max-width: 480px) {
          .about-hero-fresh { padding: 40px 16px; }
          .stats-container { grid-template-columns: 1fr 1fr; }
          .mv-images-column { min-height: 280px; }
          .stat-number { font-size: 32px !important; }
        }
      `}</style>

      <div className="about-page">
        {/* ----------------------------------------------------
            1. HERO / LANDING SECTION (Architectural Redesign)
        ----------------------------------------------------- */}
        <section className="about-hero-fresh reveal-group">
          <div className="about-hero-fresh-inner">
            <div className="hero-top-badge">
              <span className="pulse-ring" />
              <span>ESTD. 2014 • Trussless Roofing Specialists</span>
            </div>

            <h1 className="about-hero-fresh-title">
              Crafting Excellence
              <br />
              <span className="accent-red">In Every Clear-Span Roof</span>
            </h1>

            <div className="about-hero-fresh-description">
              <p style={{ margin: "0 0 12px 0" }}>
                At Vinfra, we are committed to excellence, reliability, and client satisfaction,
                making us a trusted name in the roofing industry.
              </p>
              <p style={{ margin: 0, fontWeight: "500", color: "#64748B", fontSize: "15px" }}>
                Many companies provide self-supported roofing. But we are not one among them.
                We work differently from selecting the best raw material to the execution to ensure quality.
              </p>
            </div>

            <div className="about-hero-fresh-actions">
              <Link href="/projects" style={{ textDecoration: "none" }}>
                <button className="hero-btn-primary">
                  Explore Our Works →
                </button>
              </Link>
              <button
                type="button"
                data-lead-modal="true"
                className="hero-btn-secondary"
              >
                Get Free Consultation →
              </button>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            2. OUR MISSION & VISION SECTION
        ----------------------------------------------------- */}
        <section className="about-mission-vision reveal-group">
          <div className="mv-container">
            <div className="mv-content-grid">
              {/* Left Column: Unboxed text content moved to the left-side most */}
              <div className="mv-text-column">
                <div className="mv-section-header">
                  <span className="section-tag">Purpose & Direction</span>
                  <h2 className="mv-section-headline">
                    Driven by Mission,<br />
                    <span>Guided by Vision</span>
                  </h2>
                  <p className="mv-section-subtext">
                    Shaping the future of industrial, commercial, and institutional
                    roofing through uncompromising engineering precision and sustainable practices.
                  </p>
                </div>

                {/* Mission Block - Clean & Unboxed */}
                <div className="mv-editorial-block">
                  <div className="mv-block-badge">
                    <IconTarget />
                    <span>Our Mission</span>
                  </div>
                  <h3 className="mv-block-title">Innovative. Functional. Visually Appealing.</h3>
                  <p className="mv-block-body">
                    Vinfra Trussless Roofings has been at the forefront of delivering
                    innovative roofing solutions across industrial, commercial, and
                    institutional sectors. We specialize in trussless (K-Span) roofing
                    systems that eliminate the need for conventional trusses, allowing
                    for clear spans, reduced material usage, and maximized interior space.
                  </p>
                  <p className="mv-block-body" style={{ marginTop: "-6px" }}>
                    With over a decade of experience, our team blends engineering precision,
                    structural strength, quality materials and aesthetic appeal to deliver
                    roofing systems that are not only strong and durable but also cost-efficient,
                    low-maintenance and built to last.
                    Whether it's a warehouse, factory, storage facility, auditorium or sports facilities,
                    we bring innovation, speed, and quality to every project.
                  </p>
                  <ul className="mv-points">
                    <li className="mv-point-item">
                      <span className="mv-point-icon"><IconCheck /></span>
                      100% Usable Clear Span
                    </li>
                    <li className="mv-point-item">
                      <span className="mv-point-icon"><IconCheck /></span>
                      Zero Structural Trusses
                    </li>
                    <li className="mv-point-item">
                      <span className="mv-point-icon"><IconCheck /></span>
                      Rapid On-Site Roll-Forming
                    </li>
                    <li className="mv-point-item">
                      <span className="mv-point-icon"><IconCheck /></span>
                      Minimal Maintenance Footprint
                    </li>
                  </ul>
                </div>

                <div className="mv-editorial-divider" />

                {/* Vision Block - Clean & Unboxed */}
                <div className="mv-editorial-block">
                  <div className="mv-block-badge">
                    <IconEye />
                    <span>Our Vision</span>
                  </div>
                  <h3 className="mv-block-title">Redefining Modern Infrastructure</h3>
                  <p className="mv-block-body">
                    Our vision is to redefine modern roofing by combining cutting-edge
                    technology with sustainable practices, delivering long-term value to
                    our clients. We aspire to set the national benchmark in self-supported
                    arch-span architecture—empowering warehouses, production hubs, and sports
                    facilities with enduring structural strength and sustainable lifetime performance.
                  </p>
                  <ul className="mv-points">
                    <li className="mv-point-item">
                      <span className="mv-point-icon"><IconCheck /></span>
                      National Engineering Benchmarks
                    </li>
                    <li className="mv-point-item">
                      <span className="mv-point-icon"><IconCheck /></span>
                      Sustainable & Eco-Conscious
                    </li>
                    <li className="mv-point-item">
                      <span className="mv-point-icon"><IconCheck /></span>
                      Advanced Metallurgical Standards
                    </li>
                    <li className="mv-point-item">
                      <span className="mv-point-icon"><IconCheck /></span>
                      Lifelong Client Partnerships
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Architectural Image Mosaic - Increased Length and Scale */}
              <div className="mv-images-column">
                <div className="mv-img-box mv-img-tall">
                  <img src="/am.webp" alt="Vinfra Clear Span Construction" />
                  <div className="mv-img-caption">Architectural Clear Spans</div>
                </div>
                <div className="mv-img-box">
                  <img src={ProjectTwo.src} alt="Vinfra Industrial Roofing System" />
                  <div className="mv-img-caption">Industrial Warehousing</div>
                </div>
                <div className="mv-img-box">
                  <img src={ProjectThree.src} alt="Vinfra Commercial Arch Installation" />
                  <div className="mv-img-caption">Institutional Structures</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            3. MEET OUR FOUNDER (Demis Manuel)
        ----------------------------------------------------- */}
        <section className="about-founder reveal-group">
          <div className="founder-container">
            <div className="founder-grid">
              <div className="founder-text-column">
                <div className="founder-badge">
                  <IconTrophy />
                  <span>Leadership & Vision</span>
                </div>
                <h2 className="founder-name">Demis Manuel</h2>
                <span className="founder-role">Founder & Managing Director, Vinfra Trussless Roofings</span>

                <div className="founder-quote-box">
                  <p className="founder-quote-text">
                    "Our founding objective has always been to liberate industrial architecture from structural clutter—bringing speed, aesthetic clarity, and lifetime durability to Indian infrastructure."
                  </p>
                </div>

                <p className="founder-bio">
                  As the founding visionary behind Vinfra, <strong>Demis Manuel</strong> pioneered the introduction of advanced self-supported arch roofing technology across Kerala and South India. With deep structural engineering acumen and an unwavering commitment to quality, he has led Vinfra from an ambitious engineering venture into an industry-recognized national specialist with over 500+ landmark clear-span projects across 100+ cities.
                </p>

                <div className="founder-highlights">
                  <div className="founder-stat-item">
                    <h4>10+</h4>
                    <p>Years Leadership</p>
                  </div>
                  <div className="founder-stat-item">
                    <h4>500+</h4>
                    <p>Clear Spans Delivered</p>
                  </div>
                  <div className="founder-stat-item">
                    <h4>100+</h4>
                    <p>Cities Nationwide</p>
                  </div>
                </div>
              </div>

              <div className="founder-visual-card">
                <img src="/ksea-award.jpg" alt="Demis Manuel receiving Kerala State Engineers Association Felicitation" />
                <div className="founder-visual-overlay">
                  <h4>Demis Manuel</h4>
                  <p>Founder & MD receiving honor from Kerala State Engineers Association</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            4. OUR JOURNEY SECTION (Milestone Timeline)
        ----------------------------------------------------- */ }
        <section className="about-journey reveal-group">
          <div className="journey-container">
            <div className="journey-header">
              <span className="section-tag">Decade of Excellence</span>
              <h2 className="section-headline">
                Our <span>Journey</span>
              </h2>
              <p className="section-subtext">
                Tracing over a decade of continuous engineering innovation,
                expanding from regional pioneering projects to a pan-India footprint.
              </p>
            </div>

            <div className="journey-timeline-grid">
              {/* Milestone 1 */}
              <div className="journey-node">
                <div className="journey-year-bubble">2014</div>
                <h4 className="journey-node-title">Founding & Vision</h4>
                <p className="journey-node-desc">
                  Established Vinfra with a clear ambition to introduce self-supported
                  arch-panel roofing across Kerala, breaking free from conventional truss limitations.
                </p>
              </div>

              {/* Milestone 2 */}
              <div className="journey-node">
                <div className="journey-year-bubble">2017</div>
                <h4 className="journey-node-title">On-Site Roll-Forming</h4>
                <p className="journey-node-desc">
                  Deployed specialized mobile roll-forming machinery, enabling on-site seamless
                  arch shaping, zero-joint seaming, and rapid installation turnaround for industrial clients.
                </p>
              </div>

              {/* Milestone 3 */}
              <div className="journey-node">
                <div className="journey-year-bubble">2021</div>
                <h4 className="journey-node-title">Regional Expansion</h4>
                <p className="journey-node-desc">
                  Surpassed 250+ completed installations, extending operations into Karnataka and Tamil Nadu
                  for mega-logistics hubs, food processing units, and auditoriums.
                </p>
              </div>

              {/* Milestone 4 */}
              <div className="journey-node">
                <div className="journey-year-bubble">2025</div>
                <h4 className="journey-node-title">Pan-India Leadership</h4>
                <p className="journey-node-desc">
                  Crossed 500+ successful projects across 100+ cities. Honored for roofing innovation and
                  felicitated by the Kerala State Engineers Association.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            4. STATS COUNTER SECTION
        ----------------------------------------------------- */}
        <section ref={statsRef} className="about-stats reveal-group">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-number">{counters.years}+</div>
              <div className="stat-label">Years of experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.experts}</div>
              <div className="stat-label">Roofing Experts</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.projects}+</div>
              <div className="stat-label">Completed Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.cities}+</div>
              <div className="stat-label">Cities we serve</div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            5. ACHIEVEMENTS & RECOGNITION (With KSEA Award)
        ----------------------------------------------------- */}
        <section className="about-achievements reveal-group">
          <div className="achievements-container">
            <div className="achievements-header">
              <span className="section-tag">Honors & Recognition</span>
              <h2 className="section-headline">
                Recognized for <span>Engineering Distinction</span>
              </h2>
              <p className="section-subtext">
                Our relentless pursuit of structural integrity, safety standards, and
                trussless architectural innovation has earned acclaim from prestigious industry bodies.
              </p>
            </div>

            <div className="achievements-list">
              {/* Achievement 1: Excellence in Roofing Innovation */}
              <div className="achievement-row">
                <div className="achievement-text-card">
                  <div className="achievement-badge-pill">
                    <IconTrophy />
                    <span>Industry Recognition • 2025</span>
                  </div>
                  <h3>"Vinfra Honored for Excellence in Roofing Innovation"</h3>
                  <p>
                    Acknowledging Vinfra's cutting-edge achievements in clear-span trussless
                    roofing architecture, on-site mechanical roll-forming, and setting superior
                    benchmarks for structural resilience and durability across commercial and industrial infrastructure.
                  </p>
                  <div className="achievement-footer-meta">
                    <span className="achievement-year">2025 Annual Awards</span>
                    <span className="achievement-verifier">Excellence in Roofing Innovation</span>
                  </div>
                </div>
                <div className="achievement-image-card">
                  <img src="/award.webp" alt="Vinfra Honored for Excellence in Roofing Innovation" />
                  <div className="achievement-img-overlay">
                    <span>Excellence in Roofing Innovation</span>
                  </div>
                </div>
              </div>

              {/* Achievement 2: Kerala State Engineers Association (Directly underneath as requested) */}
              <div className="achievement-row">
                <div className="achievement-text-card">
                  <div className="achievement-badge-pill">
                    <IconTrophy />
                    <span>Engineering Association Honor • 2025</span>
                  </div>
                  <h3>"Kerala State Engineers Association"</h3>
                  <p>
                    Felicitation and prestigious honor presented by the Kerala State Engineers
                    Association, recognizing Vinfra for engineering precision, advanced trussless
                    technology deployment, and exceptional contributions to structural durability in modern infrastructure.
                  </p>
                  <div className="achievement-footer-meta">
                    <span className="achievement-year">Kerala State Engineers Association</span>
                    <span className="achievement-verifier">Technical Craftsmanship & Innovation</span>
                  </div>
                </div>
                <div className="achievement-image-card">
                  <img src="/ksea-award.jpg" alt="Kerala State Engineers Association Award Ceremony" />
                  <div className="achievement-img-overlay">
                    <span>Kerala State Engineers Association</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------
            6. COMMITMENT SECTION
        ----------------------------------------------------- */}
        <section className="about-commitment reveal-group">
          <div className="commitment-content">
            <div className="section-tag">Our Commitment</div>
            <h2 className="section-headline">Committed to Excellence</h2>
            <p className="commitment-text">
              We take pride in our customer-focused approach, ensuring timely
              project execution and exceptional service at every stage. From
              consultation to installation, our experienced professionals work
              closely with clients to provide customized roofing solutions that
              stand the test of time. Our vision is to redefine modern roofing
              by combining cutting-edge technology with sustainable practices,
              delivering long-term value to our clients.
            </p>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button className="commitment-btn">Contact Our Team →</button>
            </Link>
          </div>
        </section>

        {/* ----------------------------------------------------
            7. INDUSTRIES WE CATER SECTION (From Home Page)
        ----------------------------------------------------- */}
        <section className="about-industries reveal-group">
          <div className="industries-container">
            <div className="industries-header">
              <span className="section-tag">Sectors We Empower</span>
              <h2 className="industries-title">Industries We Cater</h2>
              <div className="industries-divider">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="industries-grid">
              {INDUSTRIES.map((ind) => (
                <div className="industry-cell" key={ind}>
                  <div className="industry-cell-left">{ind}</div>
                  <span className="ind-arrow">→</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Footer */}
        <ContactFooter />
      </div>
    </>
  );
}
