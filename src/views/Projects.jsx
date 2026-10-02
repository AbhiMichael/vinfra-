"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import ContactFooter from "../components/ContactFooter";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Project data (all 10 projects preserved)
  const projects = [
    {
      id: 1,
      title: "Multi Purpose Hall",
      category: "commercial",
      image: "/Multi%20Purpose%20Hall.webp",
      size: "large",
      description:
        "State-of-the-art multi-purpose facility with clear span roofing spanning 45 meters, featuring superior acoustics and thermal insulation.",
      location: "Kochi, Kerala",
      year: "2024",
      area: "25,000 sq.ft",
    },
    {
      id: 2,
      title: "Convention Centre",
      category: "commercial",
      image: "/Convention%20Centre.webp",
      size: "medium",
      description:
        "Premium convention center with curved architectural roofing that enhances aesthetics while providing optimal climate control.",
      location: "Bangalore, Karnataka",
      year: "2023",
      area: "35,000 sq.ft",
    },
    {
      id: 3,
      title: "Warehouse Roofing",
      category: "industrial",
      image: "/Warehouse%20Roofing.webp",
      size: "large",
      description:
        "Massive warehouse facility with trussless roofing system maximizing storage space and structural integrity.",
      location: "Chennai, Tamil Nadu",
      year: "2024",
      area: "100,000 sq.ft",
    },
    {
      id: 4,
      title: "Residential Roofing",
      category: "residential",
      image: "/Residential%20Roofing.webp",
      size: "small",
      description:
        "Luxury residential complex with modern roofing solutions combining durability with aesthetic appeal.",
      location: "Kannur, Kerala",
      year: "2024",
      area: "12,000 sq.ft",
    },
    {
      id: 5,
      title: "Shopping Complex",
      category: "commercial",
      image: "/Shoping%20Complex.webp",
      size: "medium",
      description:
        "Premium shopping destination with innovative roofing that allows natural light while maintaining energy efficiency.",
      location: "Trivandrum, Kerala",
      year: "2023",
      area: "45,000 sq.ft",
    },
    {
      id: 6,
      title: "Factory",
      category: "industrial",
      image: "/Factory.webp",
      size: "large",
      description:
        "High-performance industrial facility with corrosion-resistant roofing designed for heavy machinery operations.",
      location: "Coimbatore, Tamil Nadu",
      year: "2024",
      area: "80,000 sq.ft",
    },
    {
      id: 7,
      title: "Outdoor Roofs",
      category: "commercial",
      image: "/Outdoor%20Roofs.webp",
      size: "small",
      description:
        "Elegant outdoor roofing solutions for restaurants and public spaces, providing weather protection without compromising views.",
      location: "Goa, India",
      year: "2023",
      area: "8,000 sq.ft",
    },
    {
      id: 8,
      title: "Basketball Court",
      category: "sports",
      image: "/Basketball%20Court.webp",
      size: "medium",
      description:
        "Professional indoor sports facility with high-ceiling roofing system designed for optimal acoustics and ventilation.",
      location: "Hyderabad, Telangana",
      year: "2024",
      area: "15,000 sq.ft",
    },
    {
      id: 9,
      title: "Roof Inspection",
      category: "service",
      image: "/Roof%20Inspection.webp",
      size: "small",
      description:
        "Comprehensive roof inspection and maintenance services using drone technology and thermal imaging.",
      location: "Pan India",
      year: "2024",
      area: "Service",
    },
    {
      id: 10,
      title: "Educational Institution",
      category: "institutional",
      image: "/Educational%20Institution.webp",
      size: "large",
      description:
        "Modern educational campus with sustainable roofing solutions that enhance learning environments.",
      location: "Mysore, Karnataka",
      year: "2023",
      area: "30,000 sq.ft",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "commercial",
      name: "Commercial",
      count: projects.filter((p) => p.category === "commercial").length,
    },
    {
      id: "industrial",
      name: "Industrial",
      count: projects.filter((p) => p.category === "industrial").length,
    },
    {
      id: "residential",
      name: "Residential",
      count: projects.filter((p) => p.category === "residential").length,
    },
    {
      id: "institutional",
      name: "Institutional",
      count: projects.filter((p) => p.category === "institutional").length,
    },
    {
      id: "sports",
      name: "Sports",
      count: projects.filter((p) => p.category === "sports").length,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  // Counter animation for stats
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    cities: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    if (statsInView) {
      const targets = {
        projects: 500,
        clients: 350,
        cities: 100,
        satisfaction: 98,
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
          clients: Math.min(
            Math.floor((step / steps) * targets.clients),
            targets.clients,
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

  return (
    <>
      <style>{`
        /* Premium Light Theme Projects Page */
        .projects-light-page {
          background-color: #F8FAFC;
          color: #0F172A;
          min-height: 100vh;
          padding-top: 100px;
          position: relative;
        }

        /* Hero Section */
        .projects-hero {
          padding: 70px 48px 60px 48px;
          text-align: center;
          position: relative;
          background: radial-gradient(circle at 50% 0%, #FFFFFF 0%, #F1F5F9 70%, #F8FAFC 100%);
          border-bottom: 1px solid #E2E8F0;
        }

        .projects-hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%);
          pointer-events: none;
        }

        .projects-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
        }

        .projects-badge {
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

        .projects-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #B91C1C;
          box-shadow: 0 0 8px rgba(185, 28, 28, 0.6);
        }

        .projects-title {
          font-family: var(--font-display);
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: #0F172A;
          margin-bottom: 22px;
        }

        .projects-title .accent-red {
          color: #B91C1C;
          position: relative;
          display: inline-block;
        }

        .projects-subtitle {
          font-size: 17px;
          color: #475569;
          max-width: 640px;
          margin: 0 auto 36px auto;
          line-height: 1.65;
        }

        .projects-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .projects-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 13px 30px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 8px 20px -4px rgba(185, 28, 28, 0.35);
        }

        .projects-cta-primary:hover {
          background: #991B1B;
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -4px rgba(185, 28, 28, 0.45);
        }

        .projects-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFFFFF;
          color: #0F172A;
          border: 1px solid #CBD5E1;
          padding: 13px 26px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .projects-cta-secondary:hover {
          background: #F1F5F9;
          border-color: #94A3B8;
          color: #B91C1C;
          transform: translateY(-2px);
        }

        /* Filter Toolbar */
        .projects-filter-bar {
          position: sticky;
          top: 86px;
          z-index: 40;
          padding: 16px 24px;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid #E2E8F0;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
        }

        .filter-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }

        .filter-btn {
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          color: #475569;
          padding: 9px 20px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .filter-btn:hover {
          background: #FFFFFF;
          color: #0F172A;
          border-color: #CBD5E1;
          transform: translateY(-1px);
        }

        .filter-btn.active {
          background: #0F172A;
          border-color: #0F172A;
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.18);
        }

        .filter-count {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 20px;
          background: rgba(15, 23, 42, 0.08);
          color: inherit;
        }

        .filter-btn.active .filter-count {
          background: #B91C1C;
          color: #FFFFFF;
        }

        /* Projects Grid Section */
        .projects-grid-section {
          padding: 56px 48px 80px 48px;
          max-width: 1380px;
          margin: 0 auto;
        }

        .projects-count-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
          font-size: 14px;
          color: #64748B;
        }

        .projects-count-bar strong {
          color: #0F172A;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
          gap: 28px;
        }

        /* Project Card */
        .project-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: #CBD5E1;
          box-shadow: 0 20px 35px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(185, 28, 28, 0.1);
        }

        .project-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 250px;
          background: #E2E8F0;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.06);
        }

        .project-category-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          padding: 5px 12px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          z-index: 2;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.75) 0%, transparent 65%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 9px 18px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .project-info {
          padding: 22px 24px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-title {
          font-family: var(--font-display);
          font-size: 21px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 14px;
          line-height: 1.3;
          transition: color 0.25s ease;
        }

        .project-card:hover .project-title {
          color: #B91C1C;
        }

        .project-meta-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #F1F5F9;
        }

        .project-meta-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          color: #475569;
          font-size: 12px;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 6px;
        }

        /* Stats Section */
        .projects-stats-strip {
          padding: 72px 48px;
          background: #F1F5F9;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }

        .stats-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .stats-header-tag {
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #B91C1C;
          margin-bottom: 10px;
        }

        .stats-header-title {
          text-align: center;
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 40px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stat-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #B91C1C;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          border-color: #CBD5E1;
          box-shadow: 0 12px 28px -6px rgba(15, 23, 42, 0.08);
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-number {
          font-family: var(--font-display);
          font-size: 50px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1;
          margin-bottom: 10px;
          letter-spacing: -0.03em;
        }

        .stat-plus {
          color: #B91C1C;
        }

        .stat-label {
          font-size: 13px;
          font-weight: 600;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* CTA Section */
        .projects-cta-banner {
          padding: 84px 48px;
          background: #0F172A;
          color: #FFFFFF;
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

        .cta-content {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .cta-badge {
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

        .cta-content h2 {
          font-family: var(--font-display);
          font-size: clamp(34px, 4.5vw, 48px);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 18px;
          letter-spacing: -0.02em;
        }

        .cta-content p {
          font-size: 17px;
          color: #94A3B8;
          margin-bottom: 34px;
          line-height: 1.6;
        }

        .cta-button {
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

        .cta-button:hover {
          background: #DC2626;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -4px rgba(220, 38, 38, 0.6);
        }

        /* Modal Dialog */
        .project-modal {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 20px;
          animation: modalFadeIn 0.25s ease;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-card {
          background: #FFFFFF;
          border-radius: 20px;
          max-width: 1080px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.35);
          border: 1px solid #E2E8F0;
          position: relative;
          animation: modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalSlideUp {
          from { transform: translateY(30px) scale(0.98); }
          to { transform: translateY(0) scale(1); }
        }

        .modal-image-col {
          height: 100%;
          background: #0F172A;
          overflow: hidden;
          position: relative;
        }

        .modal-image-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-body {
          padding: 44px 40px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .modal-cat-tag {
          align-self: flex-start;
          background: #FEF2F2;
          color: #B91C1C;
          border: 1px solid #FECACA;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 12px;
          border-radius: 50px;
          margin-bottom: 16px;
        }

        .modal-title {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .modal-desc {
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 28px;
        }

        .modal-specs-table {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 8px 18px;
          margin-bottom: 30px;
        }

        .modal-spec-row {
          display: flex;
          justify-content: space-between;
          padding: 11px 0;
          border-bottom: 1px solid #E2E8F0;
          font-size: 13px;
        }

        .modal-spec-row:last-child {
          border-bottom: none;
        }

        .spec-label {
          color: #64748B;
          font-weight: 500;
        }

        .spec-value {
          color: #0F172A;
          font-weight: 700;
        }

        .modal-action-btn {
          margin-top: auto;
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 14px 28px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: center;
          text-decoration: none;
          display: block;
        }

        .modal-action-btn:hover {
          background: #991B1B;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -4px rgba(185, 28, 28, 0.4);
        }

        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          color: #0F172A;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.1);
          transition: all 0.2s ease;
          z-index: 10;
        }

        .modal-close-btn:hover {
          background: #B91C1C;
          border-color: #B91C1C;
          color: #FFFFFF;
          transform: rotate(90deg);
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
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .modal-card {
            grid-template-columns: 1fr;
            max-height: 85vh;
          }
          .modal-image-col {
            height: 240px;
          }
          .modal-body {
            padding: 28px 24px;
          }
        }

        @media (max-width: 768px) {
          .projects-light-page {
            padding-top: 80px;
          }
          .projects-hero {
            padding: 50px 20px 40px 20px;
          }
          .projects-filter-bar {
            top: 70px;
            padding: 12px 16px;
          }
          .projects-grid-section {
            padding: 32px 16px 60px 16px;
          }
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .project-image-wrapper {
            height: 200px;
          }
          .projects-stats-strip {
            padding: 48px 20px;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .stat-number {
            font-size: 40px;
          }
          .projects-cta-banner {
            padding: 60px 20px;
          }
        }
      `}</style>

      <div className="projects-light-page">
        {/* Hero Section */}
        <section className="projects-hero reveal-group">
          <div className="projects-hero-grid-bg" />
          <div className="projects-hero-inner">
            <div className="projects-badge">
              <span className="projects-badge-dot" />
              OUR PORTFOLIO
            </div>
            <h1 className="projects-title">
              Where Vision Meets
              <br />
              <span className="accent-red">Structural Excellence</span>
            </h1>
            <p className="projects-subtitle">
              Get professional advice on the best roofing solutions for your home
              or business—tailored to your budget, climate, and needs.
            </p>
            <div className="projects-hero-actions">
              <button
                className="projects-cta-primary"
                onClick={() =>
                  document
                    .getElementById("projects-grid")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Projects ↓
              </button>
              <Link href="/contact" className="projects-cta-secondary" data-lead-modal="true">
                Request a Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="projects-filter-bar reveal-group">
          <div className="filter-container">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${filter === cat.id ? "active" : ""}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.name}
                <span className="filter-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects-grid" className="projects-grid-section reveal-group">
          <div className="projects-count-bar">
            <span>
              Showing <strong>{filteredProjects.length}</strong> of{" "}
              <strong>{projects.length}</strong> completed works
            </span>
            <span>Trussless Arch & Industrial Engineering</span>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image?.src ?? project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-category-badge">{project.category}</div>
                  <div className="project-overlay">
                    <span className="project-view-btn">View Details →</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta-pills">
                    <span className="project-meta-tag">📍 {project.location}</span>
                    <span className="project-meta-tag">📐 {project.area}</span>
                    <span className="project-meta-tag">📅 {project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="projects-stats-strip reveal-group">
          <div className="stats-inner">
            <div className="stats-header-tag">PROVEN TRACK RECORD</div>
            <h2 className="stats-header-title">Engineering Milestones Across India</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">
                  {stats.projects}
                  <span className="stat-plus">+</span>
                </div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  {stats.clients}
                  <span className="stat-plus">+</span>
                </div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  {stats.cities}
                  <span className="stat-plus">+</span>
                </div>
                <div className="stat-label">Cities Served</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  {stats.satisfaction}
                  <span className="stat-plus">%</span>
                </div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="projects-cta-banner reveal-group">
          <div className="cta-backdrop-glow" />
          <div className="cta-content">
            <span className="cta-badge">GET IN TOUCH</span>
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss your roofing needs and create something
              extraordinary together.
            </p>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button className="cta-button">
                Get in Touch →
              </button>
            </Link>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="project-modal"
            onClick={() => setSelectedProject(null)}
          >
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
              >
                ✕
              </button>
              <div className="modal-image-col">
                <img
                  src={selectedProject.image?.src ?? selectedProject.image}
                  alt={selectedProject.title}
                />
              </div>
              <div className="modal-body">
                <div className="modal-cat-tag">
                  {selectedProject.category.toUpperCase()}
                </div>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-desc">{selectedProject.description}</p>
                <div className="modal-specs-table">
                  <div className="modal-spec-row">
                    <span className="spec-label">Location</span>
                    <span className="spec-value">{selectedProject.location}</span>
                  </div>
                  <div className="modal-spec-row">
                    <span className="spec-label">Project Area</span>
                    <span className="spec-value">{selectedProject.area}</span>
                  </div>
                  <div className="modal-spec-row">
                    <span className="spec-label">Completion Year</span>
                    <span className="spec-value">{selectedProject.year}</span>
                  </div>
                  <div className="modal-spec-row">
                    <span className="spec-label">Roofing Type</span>
                    <span className="spec-value">Trussless K-Span System</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="modal-action-btn"
                  data-lead-modal="true"
                  onClick={() => setSelectedProject(null)}
                >
                  Request Similar Project →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Global Contact Footer */}
        <ContactFooter />
      </div>
    </>
  );
}