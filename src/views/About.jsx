"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

// Import images
import ProjectOne from "../assets/img1.webp";
import ProjectTwo from "../assets/img2.webp";
import ProjectThree from "../assets/img3.webp";
import ProjectFour from "../assets/img4.webp";
import MainFeature from "../assets/img5.webp";

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

  // SVG icon components (orange outlined)
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
  const IconGlobe = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );

  return (
    <>
      <style>{`
        /* ---------- About Page Styles (unchanged) ---------- */
        .about-page {
          background: var(--dark);
          min-height: 100vh;
          padding-top: 100px;
        }

        .about-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 60px 48px 100px 48px;
          align-items: center;
        }
        .about-hero-content { max-width: 600px; }
        .about-hero-badge {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--orange);
          margin-bottom: 20px;
        }
        .about-hero-title {
          font-family: var(--font-display);
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          color: var(--white);
        }
        .about-hero-title span { color: var(--orange); }
        .about-hero-description {
          font-size: 16px;
          line-height: 1.7;
          color: var(--steel-light);
          margin-bottom: 32px;
        }
        .about-hero-buttons {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .about-hero-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          max-width: 100%;
          width: fit-content;
        }
        .about-hero-image img {
          display: block;
          max-width: 100%;
          height: auto;
          object-fit: contain;
          transition: transform 0.7s ease;
        }
        .about-hero-image:hover img { transform: scale(1.05); }
        .hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(138,15,15,0.1) 0%, rgba(0,0,0,0.3) 100%);
        }

        .about-mission {
          padding: 100px 48px;
          background: var(--steel-bg);
        }
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .section-label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--orange);
          margin-bottom: 20px;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 30px;
          color: var(--white);
        }
        .section-title span { color: var(--orange); }
        .mission-description {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(15,20,24,0.75);
          margin-bottom: 20px;
        }
        .mission-grid-images {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          height: 500px;
        }
        .mission-grid-img {
          overflow: hidden;
          border-radius: 8px;
          background: rgba(15,20,24,0.2);
        }
        .mission-grid-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .mission-grid-img:hover img { transform: scale(1.05); }
        .img-1 { grid-row: span 2; }

        .about-stats {
          padding: 100px 48px;
          background: var(--dark);
        }
        .stats-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--panel-border);
          border: 1px solid var(--panel-border);
          border-radius: 12px;
          overflow: hidden;
        }
        .stat-card {
          background: rgba(233,238,242,0.02);
          padding: 48px 24px;
          text-align: center;
          transition: background 0.3s ease;
        }
        .stat-card:hover { background: rgba(138,15,15,0.05); }
        .stat-number {
          font-family: var(--font-display);
          font-size: clamp(48px, 5vw, 64px);
          font-weight: 700;
          color: var(--orange);
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }
        .stat-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--steel-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .about-news {
          padding: 100px 48px;
          background: var(--steel-bg);
        }
        .news-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--panel-border);
          border: 1px solid var(--panel-border);
          border-radius: 12px;
          overflow: hidden;
        }
        .news-card {
          padding: 60px 48px;
          background: rgba(15,20,24,0.05);
        }
        .award-card h3 {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 500;
          line-height: 1.3;
          margin: 20px 0 30px 0;
          color: var(--dark);
        }
        .award-icon {
          width: 48px;
          height: 48px;
          color: var(--orange);
          margin-bottom: 16px;
        }
        .news-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .news-date {
          font-size: 14px;
          color: rgba(15,20,24,0.5);
          font-weight: 600;
        }
        .image-card {
          padding: 0;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, var(--orange) 0%, #b01515 100%);
          min-height: 300px;
        }
        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .image-card:hover img { transform: scale(1.05); }
        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
          font-size: 14px;
          font-weight: 600;
        }

        .about-commitment {
          padding: 100px 48px;
          background: var(--orange);
          text-align: center;
        }
        .commitment-content { max-width: 800px; margin: 0 auto; }
        .commitment-text {
          font-size: 16px;
          line-height: 1.8;
          color: rgba(255,255,255,0.9);
          margin-bottom: 40px;
        }
        .about-commitment .section-label { color: var(--white); opacity: 0.8; }
        .about-commitment .section-title { color: var(--white); }

        .about-expertise {
          padding: 100px 48px;
          background: var(--dark);
        }
        .expertise-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--panel-border);
          border: 1px solid var(--panel-border);
          border-radius: 12px;
          overflow: hidden;
        }
        .expertise-card {
          background: rgba(233,238,242,0.02);
          padding: 40px 24px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          color: var(--orange);
        }
        .expertise-card:hover {
          background: rgba(138,15,15,0.08);
          transform: translateY(-4px);
        }
        .expertise-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 16px;
          color: var(--orange);
        }
        .expertise-card h4 {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 500;
          color: var(--white);
          letter-spacing: -0.01em;
        }

        .about-services-detail {
          padding: 100px 48px;
          background: var(--steel-bg);
        }
        .services-detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .service-detail-card {
          background: rgba(15,20,24,0.05);
          padding: 48px 40px;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .service-detail-card:hover {
          transform: translateY(-8px);
          background: rgba(15,20,24,0.08);
        }
        .service-detail-card h3 {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 600;
          margin: 24px 0 16px;
          color: var(--dark);
        }
        .service-detail-card p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(15,20,24,0.7);
        }
        .service-icon-ring {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1px solid rgba(138,15,15,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          transition: border-color 0.3s, background 0.3s;
          margin: 0 auto;
        }
        .service-icon-ring svg {
          width: 26px;
          height: 26px;
        }
        .service-detail-card:hover .service-icon-ring {
          border-color: var(--orange);
          background: rgba(138,15,15,0.1);
        }

        .about-news-tiles {
          padding: 100px 48px;
          background: var(--dark);
          position: relative;
        }
        .news-tiles-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px auto;
        }
        .news-tiles-subtitle {
          font-size: 16px;
          line-height: 1.6;
          color: var(--steel-light);
          margin: 20px 0 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .tiles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(250px, auto);
          gap: 24px;
        }
        .tile {
          background: rgba(233,238,242,0.03);
          border: 1px solid var(--panel-border);
          border-radius: 12px;
          padding: 32px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .tile:hover {
          transform: translateY(-8px);
          border-color: var(--orange);
          background: rgba(138,15,15,0.05);
        }
        .tile-large {
          grid-column: span 2;
          grid-row: span 2;
          background: linear-gradient(135deg, rgba(138,15,15,0.1), rgba(138,15,15,0.02));
        }
        .tile-medium {
          grid-column: span 1;
          grid-row: span 2;
          background: linear-gradient(135deg, var(--orange) 0%, #b01515 100%);
          color: var(--white);
        }
        .tile-medium-alt {
          grid-column: span 2;
          grid-row: span 1;
        }
        .tile-small { grid-column: span 1; grid-row: span 1; }
        .tile-wide { grid-column: span 3; grid-row: span 1; }
        .tile-stat { background: rgba(138,15,15,0.1); text-align: center; }
        .tile-achievement { text-align: center; }
        .tile-metric {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .tile-global {
          grid-column: span 1;
          grid-row: span 1;
          text-align: center;
        }
        .tile-content {
          position: relative;
          z-index: 2;
        }
        .tile-badge {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--steel-light);
          margin-bottom: 16px;
        }
        .tile-badge.orange { color: var(--orange); }
        .tile-title {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 500;
          line-height: 1.3;
          margin-bottom: 20px;
          color: var(--white);
        }
        .tile-large .tile-title { font-size: 32px; }
        .tile-medium .tile-title {
          font-size: 28px;
          color: var(--white);
        }
        .tile-description {
          font-size: 14px;
          line-height: 1.6;
          color: var(--steel-light);
          margin-bottom: 20px;
        }
        .tile-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }
        .tile-date {
          font-size: 13px;
          color: var(--steel-light);
        }
        .tile-link {
          background: transparent;
          border: none;
          color: var(--orange);
          font-size: 24px;
          cursor: pointer;
          transition: transform 0.3s;
        }
        .tile-link:hover { transform: translateX(4px); }
        .tile-link-btn {
          background: transparent;
          border: 1px solid var(--orange);
          color: var(--orange);
          padding: 10px 20px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .tile-link-btn:hover {
          background: var(--orange);
          color: var(--white);
        }
        .quote-mark {
          font-size: 60px;
          color: var(--orange);
          font-family: var(--font-display);
          line-height: 1;
          margin-bottom: 10px;
        }
        .tile-quote {
          font-family: var(--font-display);
          font-size: 20px;
          line-height: 1.4;
          font-style: italic;
          color: var(--white);
          margin-bottom: 20px;
        }
        .tile-author {
          font-size: 13px;
          color: var(--steel-light);
        }
        .stat-number-large {
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 700;
          color: var(--orange);
          margin-bottom: 8px;
        }
        .stat-label-large {
          font-size: 14px;
          color: var(--steel-light);
          margin-bottom: 8px;
        }
        .stat-trend {
          font-size: 12px;
          color: #4caf50;
        }
        .achievement-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 16px;
          color: var(--orange);
        }
        .tile-achievement h4 {
          font-family: var(--font-display);
          font-size: 18px;
          margin-bottom: 8px;
          color: var(--white);
        }
        .tile-achievement p {
          font-size: 13px;
          color: var(--orange);
        }
        .metric-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 2px solid var(--orange);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .metric-value {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 700;
          color: var(--orange);
        }
        .metric-unit {
          font-size: 12px;
          color: var(--steel-light);
        }
        .global-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 16px;
          color: var(--orange);
        }
        .tile-global h3 {
          font-family: var(--font-display);
          font-size: 22px;
          margin-bottom: 12px;
          color: var(--white);
        }
        .tile-global p {
          font-size: 14px;
          color: var(--steel-light);
          margin-bottom: 16px;
        }
        .global-stats {
          display: flex;
          gap: 16px;
          justify-content: center;
        }
        .global-stats span {
          font-size: 12px;
          color: var(--orange);
        }
        .tech-tags {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        .tech-tags span {
          background: rgba(138,15,15,0.1);
          color: var(--orange);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }
        .tile-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%);
          pointer-events: none;
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
        .bracket-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          color: inherit;
          border: none;
          font-family: var(--font-display);
          font-size: 16px;
          cursor: pointer;
          padding: 4px 0;
        }
        .bracket-btn::before {
          content: '[';
          color: rgba(233,238,242,0.4);
          transition: transform 0.3s;
        }
        .bracket-btn::after {
          content: ']';
          color: rgba(233,238,242,0.4);
          transition: transform 0.3s;
        }
        .bracket-btn:hover::before { transform: translateX(-4px); }
        .bracket-btn:hover::after { transform: translateX(4px); }
        .bracket-btn .arrow { transition: transform 0.3s ease; }
        .bracket-btn:hover .arrow {
          transform: translateX(4px);
          color: var(--orange);
        }
        .mission-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--orange);
          color: var(--white);
          border: none;
          padding: 16px 32px;
          border-radius: 4px;
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.3s;
        }
        .mission-cta:hover { opacity: 0.88; }

        @media (max-width: 1024px) {
          .about-hero, .mission-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-hero { padding: 40px 32px 80px 32px; }
          .about-mission { padding: 60px 32px; }
          .about-stats { padding: 60px 32px; }
          .about-news { padding: 60px 32px; }
          .about-commitment { padding: 60px 32px; }
          .about-expertise { padding: 60px 32px; }
          .about-services-detail { padding: 60px 32px; }
          .about-news-tiles { padding: 60px 32px; }
          .expertise-grid { grid-template-columns: repeat(4, 1fr); }
          .stats-container { grid-template-columns: repeat(2, 1fr); }
          .news-grid { grid-template-columns: 1fr; }
          .mission-grid-images { height: 400px; }
          .tiles-grid { grid-template-columns: repeat(2, 1fr); }
          .tile-large, .tile-medium, .tile-medium-alt, .tile-wide { grid-column: span 1; }
        }
        @media (max-width: 768px) {
          .about-hero, .about-mission, .about-stats, .about-news,
          .about-commitment, .about-expertise, .about-services-detail,
          .about-news-tiles {
            padding: 60px 20px;
          }
          .about-hero {
            padding: 40px 20px 60px 20px;
          }
          .expertise-grid { grid-template-columns: repeat(4, 1fr); gap: 1px; }
          .expertise-card { padding: 16px 6px; }
          .expertise-icon { width: 28px; height: 28px; margin-bottom: 8px; }
          .expertise-card h4 { font-size: 10px; line-height: 1.2; word-wrap: break-word; hyphens: auto; }
          .services-detail-grid { grid-template-columns: 1fr; }
          .about-hero-buttons { flex-direction: column; align-items: flex-start; }
          .mission-grid-images { height: 280px; }
          .about-hero-image { width: 100%; }
          .about-hero-image img { max-height: 300px; width: 100%; object-fit: cover; }
          .image-card { height: 220px; }
          .tiles-grid { grid-template-columns: 1fr; }
          .tile-large .tile-title { font-size: 24px; }
          .news-card { padding: 40px 24px; }
        }
        @media (max-width: 480px) {
          .about-hero, .about-mission, .about-stats, .about-news,
          .about-commitment, .about-expertise, .about-services-detail,
          .about-news-tiles {
            padding: 48px 16px;
          }
          .expertise-grid { grid-template-columns: repeat(2, 1fr); }
          .expertise-card { padding: 20px 12px; }
          .expertise-icon { width: 36px; height: 36px; }
          .expertise-card h4 { font-size: 12px; }
          .stats-container { grid-template-columns: 1fr 1fr; }
          .stat-card { padding: 32px 16px; }
          .stat-number { font-size: 36px !important; }
          .mission-grid-images { height: 220px; }
          .about-hero-image img { max-height: 220px; }
        }
      `}</style>

      <div className="about-page">
        {/* Hero Section (unchanged) */}
        <section className="about-hero reveal-group">
          <div className="about-hero-content">
            <div className="about-hero-badge">About Us</div>
            <h1 className="about-hero-title">
              Crafting Excellence
              <br />
              <span>In Every Roof</span>
            </h1>
            <p className="about-hero-description">
              At Vinfra, we are committed to excellence, reliability, and client
              satisfaction, making us a trusted name in the roofing industry.
            </p>
            <div className="about-hero-buttons">
              <Link href="/projects">
                <button className="mission-cta">Our Works →</button>
              </Link>
              {/* <button className="bracket-btn">
                <span className="arrow">→</span>
              </button> */}
            </div>
          </div>
          <div className="about-hero-image">
            <img src="/about.webp" alt="Vinfra Roofing Excellence" />
            <div className="hero-image-overlay"></div>
          </div>
        </section>

        {/* Mission Section (unchanged) */}
        <section className="about-mission reveal-group">
          <div className="mission-grid">
            <div className="mission-text">
              <div className="section-label">Our Mission</div>
              <h2 className="section-title">
                Innovative. Functional.
                <br />
                <span>Visually Appealing.</span>
              </h2>
              <p className="mission-description">
                Vinfra Trussless Roofings has been at the forefront of
                delivering innovative roofing solutions across industrial,
                commercial, and institutional sectors. We specialize in
                trussless (K-Span) roofing systems that eliminate the need for
                conventional trusses, allowing for clear spans, reduced material
                usage, and maximized interior space.
              </p>
              <p className="mission-description">
                With over a decade of experience, our team blends engineering
                precision, structural strength, quality materials, and aesthetic
                appeal to deliver roofing systems that are not only strong and
                durable but also cost-efficient, low-maintenance, and built to
                last.
              </p>
              <p className="mission-description">
                Whether it's a warehouse, factory, storage facility, auditorium,
                or sports facilities, we bring innovation, speed, and quality to
                every project.
              </p>
              {/* <button className="mission-cta">Learn More →</button> */}
            </div>
            <div className="mission-grid-images">
              <div className="mission-grid-img img-1">
                <img src="/am.webp" alt="Vinfra Construction" />
              </div>
              <div className="mission-grid-img img-2">
                <img src={ProjectTwo.src} alt="Vinfra Roofing System" />
              </div>
              <div className="mission-grid-img img-3">
                <img src={ProjectThree.src} alt="Vinfra Installation" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section (unchanged) */}
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

        {/* News/Award Section – replaced emoji with SVG */}
        <section className="about-news reveal-group">
          <div className="news-grid">
            <div className="news-card award-card">
              <div className="award-icon">
                <IconTrophy />
              </div>
              <h3>"Vinfra Honored for Excellence in Roofing Innovation"</h3>
              <div className="news-meta">
                <span className="news-date">2025</span>
                {/* <button className="bracket-btn">
                  <span className="arrow"></span>
                </button> */}
              </div>
            </div>
            <div className="news-card image-card">
              <img src="/award.webp" alt="Industry Recognition" />
              <div className="image-overlay">
                <span>Industry Recognition</span>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section (unchanged) */}
        <section className="about-commitment reveal-group">
          <div className="commitment-content">
            <div className="section-label centered">Our Commitment</div>
            <h2 className="section-title centered">Committed to Excellence</h2>
            <p className="commitment-text">
              We take pride in our customer-focused approach, ensuring timely
              project execution and exceptional service at every stage. From
              consultation to installation, our experienced professionals work
              closely with clients to provide customized roofing solutions that
              stand the test of time. Our vision is to redefine modern roofing
              by combining cutting-edge technology with sustainable practices,
              delivering long-term value to our clients.
            </p>
            <Link href="/contact">
              <button className="mission-cta">Contact Us →</button>
            </Link>
          </div>
        </section>

        {/* Expertise Section – emojis replaced with orange outlined SVGs */}
        <section className="about-expertise reveal-group">
          <div className="expertise-header">
            <div className="section-label">Our Expertise</div>
            <h2 className="section-title">
              Experienced roofing
              <br />
              <span>experts in town</span>
            </h2>
          </div>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">
                <IconHouse />
              </div>
              <h4>Residential roofing</h4>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">
                <IconBuilding />
              </div>
              <h4>Commercial roofing</h4>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">
                <IconFactory />
              </div>
              <h4>Industrial Roofing</h4>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">
                <IconInstitution />
              </div>
              <h4>Institutional Roofing</h4>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">
                <IconInstitution />
              </div>
              <h4>Agricultural & Farm Roofing</h4>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">
                <IconTrussless />
              </div>
              <h4>Trussless Roofing (K-Span)</h4>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">
                <IconReplace />
              </div>
              <h4>Roof Replacement</h4>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">
                <IconCoating />
              </div>
              <h4>Roof Coating & Protection</h4>
            </div>
          </div>
        </section>

        {/* Services Detail Section (unchanged) */}
        <section className="about-services-detail reveal-group">
          <div className="services-detail-grid">
            <div className="service-detail-card">
              <div className="service-icon-ring">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>Inspection</h3>
              <p>
                Our preventive inspection services help detect early issues,
                reducing costly repairs and extending the life of your roofing
                system.
              </p>
            </div>
            <div className="service-detail-card">
              <div className="service-icon-ring">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Consultation</h3>
              <p>
                We help you choose the right roofing solution with clear,
                informed recommendations and planning support.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
