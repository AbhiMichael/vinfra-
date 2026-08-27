"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const [activeTab, setActiveTab] = useState("overview");
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

  // ---------- Orange Outlined SVG Icons ----------
  const IconWideSpan = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  );
  const IconCostSaving = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
      <path d="M16 8l-4-4-4 4" />
    </svg>
  );
  const IconFastProcess = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
      <path d="M4 4L8 8" />
      <path d="M20 4L16 8" />
    </svg>
  );
  const IconStrong = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
  const IconSturdy = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <line x1="7" y1="9" x2="17" y2="9" />
      <line x1="7" y1="13" x2="17" y2="13" />
      <path d="M12 19v2" />
    </svg>
  );
  const IconSupport = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l2 2" />
      <path d="M4 4L8 8" />
      <path d="M20 4L16 8" />
    </svg>
  );
  const IconExperts = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2a5 5 0 0 0-5 5c0 2 1 3 2 4l-2 3h10l-2-3c1-1 2-2 2-4a5 5 0 0 0-5-5z" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  );
  const IconInstallation = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  );

  const IconCrane = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <polygon points="12 4 2 12 22 12 12 4" />
      <line x1="12" y1="12" x2="12" y2="20" />
      <rect x="8" y="20" width="8" height="2" />
    </svg>
  );
  const IconNewRoof = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
  const IconRepair = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
      <path d="M8 8L12 4l4 4" />
    </svg>
  );
  const IconFabrication = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="6" width="16" height="12" rx="1" />
      <path d="M8 6V4h8v2" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="12" y2="14" />
    </svg>
  );
  const IconCoil = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M4 4l4 4M20 4l-4 4M4 20l4-4M20 20l-4-4" />
    </svg>
  );
  const IconReplace = () => (
    <svg
      width="48"
      height="48"
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
  const IconFlashing = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2v4M12 18v4M4 12H2M22 12h-2" />
      <circle cx="12" cy="12" r="4" />
      <path d="M7 5l2 2M17 7l2-2" />
    </svg>
  );

  const IconInspection = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l2 2" />
      <path d="M4 4L8 8" />
      <path d="M20 4L16 8" />
    </svg>
  );
  const IconRemoval = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M8 6v4" />
      <path d="M16 6v4" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
  const IconCoating = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2v4M12 18v4M4 12H2M22 12h-2" />
      <circle cx="12" cy="12" r="4" />
      <path d="M7 5l2 2M17 7l2-2" />
    </svg>
  );
  const IconReplacement = () => (
    <svg
      width="48"
      height="48"
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
  const IconRepairs = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
      <path d="M8 8L12 4l4 4" />
    </svg>
  );
  const IconConsultation = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  );

  const getBenefitIcon = (name) => {
    switch (name) {
      case "Wide Span":
        return <IconWideSpan />;
      case "Cost Saving":
        return <IconCostSaving />;
      case "Fast Process":
        return <IconFastProcess />;
      case "Strong":
        return <IconStrong />;
      case "Sturdy":
        return <IconSturdy />;
      case "Support":
        return <IconSupport />;
      case "Experts":
        return <IconExperts />;
      case "Installation":
        return <IconInstallation />;
      default:
        return null;
    }
  };

  const getProcessIcon = (name) => {
    switch (name) {
      case "Crane setup & Installation":
        return <IconCrane />;
      case "New Roofs":
        return <IconNewRoof />;
      case "Repair and Inspection":
        return <IconRepair />;
      case "Panel Fabrication":
        return <IconFabrication />;
      case "Coil Loading":
        return <IconCoil />;
      case "Roof Replacement":
        return <IconReplace />;
      case "Roof Flashing":
        return <IconFlashing />;
      default:
        return null;
    }
  };

  const getServiceIcon = (name) => {
    switch (name) {
      case "Inspection":
        return <IconInspection />;
      case "Removal":
        return <IconRemoval />;
      case "Coating":
        return <IconCoating />;
      case "Replacement":
        return <IconReplacement />;
      case "Repairs":
        return <IconRepairs />;
      case "Consultation":
        return <IconConsultation />;
      default:
        return null;
    }
  };

  const benefits = [
    {
      name: "Wide Span",
      description: "Clear spans up to 50 meters without intermediate columns",
    },
    {
      name: "Cost Saving",
      description: "Reduced material and labor costs by up to 30%",
    },
    {
      name: "Fast Process",
      description:
        "Installation time reduced by 40% compared to traditional roofing",
    },
    {
      name: "Strong",
      description: "High tensile strength steel for superior durability",
    },
    {
      name: "Sturdy",
      description: "Engineered to withstand extreme weather conditions",
    },
    {
      name: "Support",
      description: "24/7 customer support and maintenance services",
    },
    {
      name: "Experts",
      description: "Certified professionals with 10+ years experience",
    },
    {
      name: "Installation",
      description: "Precision installation using advanced techniques",
    },
  ];

  const processSteps = [
    {
      name: "Crane setup & Installation",
      description:
        "We provide safe and quick crane setup for roofing projects. The crane base is secured, and the boom is assembled carefully. All equipment is tested to ensure smooth and efficient operation during roofing work.",
    },
    {
      name: "New Roofs",
      description:
        "We specialize in new roof installations using the advanced K-Span trussless roofing system, delivering strong, durable, and cost-effective solutions tailored to your needs.",
    },
    {
      name: "Repair and Inspection",
      description:
        "We handle all types of roof repairs quickly and efficiently, restoring strength and sealing any damage to prevent future issues.",
    },
    {
      name: "Panel Fabrication",
      description:
        "We specialize in precise panel fabrication for roofing and construction. Our skilled team ensures accurate cutting, shaping, and assembling of panels to meet project specifications. Quality and durability are our priorities in every panel we produce.",
    },
    {
      name: "Coil Loading",
      description:
        "We offer safe and efficient coil loading services. Our team handles coils carefully to prevent damage and ensures proper placement for transport or installation. Precision and safety are guaranteed in every job.",
    },
    {
      name: "Roof Replacement",
      description:
        "We offer professional roof replacement services using high-quality materials, ensuring a durable, modern upgrade for old or damaged roofs.",
    },
    {
      name: "Roof Flashing",
      description:
        "Our expert roof flashing installation ensures watertight seals around joints and edges, preventing leaks and protecting your roof's integrity.",
    },
  ];

  const serviceList = [
    {
      name: "Inspection",
      description:
        "Ensure the safety and longevity of your roof with a thorough inspection to detect leaks, wear, and hidden damage early.",
    },
    {
      name: "Removal",
      description:
        "Fix minor to major roof issues quickly and effectively—patching leaks, replacing damaged shingles, and restoring structural integrity.",
    },
    {
      name: "Coating",
      description:
        "Enhance your roof's durability and energy efficiency with high-quality protective coatings that guard against heat, UV rays, and water damage.",
    },
    {
      name: "Replacement",
      description:
        "Upgrade your property with a complete roof replacement using premium materials, expert installation, and long-term warranties.",
    },
    {
      name: "Repairs",
      description:
        "Fix minor to major roof issues quickly and effectively—patching leaks, replacing damaged shingles, and restoring structural integrity.",
    },
    {
      name: "Consultation",
      description:
        "Get professional advice on the best roofing solutions for your home or business—tailored to your budget, climate, and needs.",
    },
  ];

  return (
    <>
      <style>{`
        .services-page {
          background: var(--dark);
          min-height: 100vh;
          padding-top: 100px;
        }

        /* Hero Section */
        .services-hero {
          padding: 60px 48px 80px 48px;
          text-align: center;
        }
        .services-badge {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--orange);
          margin-bottom: 20px;
          display: inline-block;
        }
        .services-title {
          font-family: var(--font-display);
          font-size: clamp(48px, 6vw, 74px);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--white);
          margin-bottom: 24px;
        }
        .services-title span { color: var(--orange); }
        .services-subtitle {
          font-size: 18px;
          color: var(--steel-light);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Tabs – no sticky behavior (scrolls away) */
        .services-tabs {
          padding: 20px 48px;
          border-bottom: 1px solid var(--panel-border);
          background: var(--dark);
        }
        .tab-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .tab-btn {
          background: transparent;
          border: 1px solid var(--panel-border);
          color: var(--steel-light);
          padding: 12px 28px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-display);
        }
        .tab-btn:hover { border-color: var(--orange); color: var(--white); }
        .tab-btn.active { background: var(--orange); border-color: var(--orange); color: var(--white); }

        /* All sections – scroll-margin-top can be removed or kept; no sticky tabs anymore */
        .overview-section,
        .benefits-section,
        .process-section,
        .services-detail-section {
          scroll-margin-top: 20px;
        }

        /* Overview Section */
        .overview-section { padding: 80px 48px; }
        .overview-content { max-width: 1000px; margin: 0 auto; }
        .overview-text { text-align: center; margin-bottom: 60px; }
        .section-label {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--orange);
          margin-bottom: 16px;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 24px;
        }
        .section-description {
          font-size: 16px;
          line-height: 1.7;
          color: var(--steel-light);
          max-width: 800px;
          margin: 0 auto;
        }
        .certified-card {
          background: rgba(233,238,242,0.03);
          border: 1px solid var(--panel-border);
          border-radius: 20px;
          padding: 48px;
          margin-top: 40px;
        }
        .certified-title {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 20px;
        }
        .certified-text {
          font-size: 16px;
          line-height: 1.7;
          color: var(--steel-light);
        }

        /* Benefits Grid */
        .benefits-section {
          padding: 80px 48px;
          background: rgba(138,15,15,0.03);
          border-top: 1px solid var(--panel-border);
          border-bottom: 1px solid var(--panel-border);
        }
        .benefits-header { text-align: center; margin-bottom: 60px; }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .benefit-card {
          background: rgba(233,238,242,0.02);
          border: 1px solid var(--panel-border);
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .benefit-card:hover {
          transform: translateY(-5px);
          border-color: var(--orange);
          background: rgba(138,15,15,0.05);
        }
        .benefit-icon svg {
          width: 48px;
          height: 48px;
          color: var(--orange);
          margin-bottom: 16px;
          stroke: currentColor;
          stroke-width: 1.5;
          fill: none;
        }
        .benefit-name {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 8px;
        }
        .benefit-desc { font-size: 13px; color: var(--steel-light); line-height: 1.5; }

        /* Process Section */
        .process-section { padding: 80px 48px; }
        .process-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .process-card {
          background: rgba(233,238,242,0.02);
          border: 1px solid var(--panel-border);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
        }
        .process-card:hover {
          transform: translateY(-5px);
          border-color: var(--orange);
          background: rgba(138,15,15,0.05);
        }
        .process-icon svg {
          width: 48px;
          height: 48px;
          color: var(--orange);
          margin-bottom: 20px;
          stroke: currentColor;
          stroke-width: 1.5;
          fill: none;
        }
        .process-name {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 12px;
        }
        .process-description { font-size: 14px; line-height: 1.6; color: var(--steel-light); }

        /* Services Detail */
        .services-detail-section {
          padding: 80px 48px;
          background: rgba(138,15,15,0.02);
          border-top: 1px solid var(--panel-border);
        }
        .services-detail-header { text-align: center; margin-bottom: 60px; }
        .services-detail-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .service-detail-card {
          background: rgba(233,238,242,0.02);
          border: 1px solid var(--panel-border);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
        }
        .service-detail-card:hover {
          transform: translateY(-5px);
          border-color: var(--orange);
          background: rgba(138,15,15,0.08);
        }
        .service-detail-icon svg {
          width: 48px;
          height: 48px;
          color: var(--orange);
          margin-bottom: 20px;
          stroke: currentColor;
          stroke-width: 1.5;
          fill: none;
        }
        .service-detail-card .service-detail-name {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 12px;
        }
        .service-detail-card .service-detail-description { font-size: 14px; line-height: 1.6; color: var(--steel-light); }

        /* Stats Section */
        .stats-section {
          padding: 80px 48px;
          background: linear-gradient(135deg, var(--orange), #b01515);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .stat-card {
          text-align: center;
          padding: 32px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.15);
        }
        .stat-number {
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 14px;
          color: rgba(255,255,255,0.9);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* No reveal animations – always visible */
        .reveal-group {
          opacity: 1;
          transform: none;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .benefits-grid,
          .services-detail-grid,
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .process-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .services-hero,
          .services-tabs,
          .overview-section,
          .benefits-section,
          .process-section,
          .services-detail-section,
          .stats-section {
            padding: 40px 16px;
          }
          .benefits-grid,
          .services-detail-grid,
          .stats-grid,
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .benefit-card, .process-card, .service-detail-card, .stat-card {
            padding: 16px 12px;
          }
          .benefit-icon svg, .process-icon svg, .service-detail-icon svg {
            width: 32px;
            height: 32px;
            margin-bottom: 12px;
          }
          .benefit-name, .process-name, .service-detail-card .service-detail-name {
            font-size: 14px;
            margin-bottom: 8px;
            line-height: 1.3;
          }
          .benefit-description, .process-description, .service-detail-card .service-detail-description {
            font-size: 11px;
            line-height: 1.4;
          }
          .stat-number { font-size: 28px; margin-bottom: 4px; }
          .stat-label { font-size: 10px; }
          .certified-card { padding: 24px; }
          .section-title { font-size: 28px; }
        }
      `}</style>

      <div className="services-page">
        {/* Hero Section */}
        <div className="services-hero reveal-group">
          <div className="services-badge">WHAT WE OFFER</div>
          <h1 className="services-title">
            Premium <span>Roofing</span>
            <br />
            Services
          </h1>
          <p className="services-subtitle">
            We specialize in delivering efficient, trussless roofing solutions
            that maximize space, reduce material usage, and ensure lasting
            durability. With a service approach rooted in quality and client
            satisfaction, we're proud to be a trusted partner for modern roofing
            needs.
          </p>
        </div>

        {/* Tabs – no sticky, scrolls away */}
        <div className="services-tabs reveal-group">
          <div className="tab-container">
            <button
              className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`tab-btn ${activeTab === "benefits" ? "active" : ""}`}
              onClick={() => setActiveTab("benefits")}
            >
              Benefits
            </button>
            <button
              className={`tab-btn ${activeTab === "process" ? "active" : ""}`}
              onClick={() => setActiveTab("process")}
            >
              Our Process
            </button>
            <button
              className={`tab-btn ${activeTab === "services" ? "active" : ""}`}
              onClick={() => setActiveTab("services")}
            >
              All Services
            </button>
          </div>
        </div>

        {/* Tab content */}
        <div key={activeTab}>
          {activeTab === "overview" && (
            <div className="overview-section reveal-group">
              <div className="overview-content">
                <div className="overview-text">
                  <div className="section-label">WHAT WE DO</div>
                  <h2 className="section-title">
                    Certified Roofing Professional
                  </h2>
                  <p className="section-description">
                    At Vinfra Trussless Roofings, our team of certified roofing
                    professionals brings a high level of technical expertise and
                    industry knowledge to every project. We follow strict
                    quality and safety standards to deliver roofing solutions
                    that are structurally sound, durable, and tailored to your
                    specific needs.
                  </p>
                  <p
                    className="section-description"
                    style={{ marginTop: "20px" }}
                  >
                    Our certifications include ISO 9001:2015 for quality
                    management and ISO 14001 for environmental standards. Every
                    installer undergoes rigorous training in advanced
                    roll‑forming techniques and site safety protocols.
                  </p>
                </div>
                <div className="certified-card">
                  <h3 className="certified-title">
                    Protecting your roof assets
                  </h3>
                  <p className="certified-text">
                    At Vinfra, we help safeguard your roofing investment with
                    quality materials, expert workmanship, and proactive
                    maintenance to ensure lasting protection and performance.
                    Our roofs come with a 20‑year corrosion warranty and a
                    10‑year workmanship guarantee.
                  </p>
                  <p className="certified-text" style={{ marginTop: "16px" }}>
                    We use only premium Zincalume® and Colorbond® steel, tested
                    to withstand harsh coastal and industrial environments.
                    Regular maintenance plans are available to extend roof life
                    beyond 50 years.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "benefits" && (
            <div className="benefits-section reveal-group">
              <div className="benefits-header">
                <div className="section-label">WHY CHOOSE US</div>
                <h2 className="section-title">The Vinfra Advantage</h2>
                <p
                  className="section-description"
                  style={{ maxWidth: "700px", margin: "0 auto" }}
                >
                  Over 500 successful installations across India – here’s why
                  industry leaders trust Vinfra.
                </p>
              </div>
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <div className="benefit-card" key={index}>
                    <div className="benefit-icon">
                      {getBenefitIcon(benefit.name)}
                    </div>
                    <h3 className="benefit-name">{benefit.name}</h3>
                    <p className="benefit-desc">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "process" && (
            <div className="process-section reveal-group">
              <div className="benefits-header">
                <div className="section-label">OUR WORKFLOW</div>
                <h2 className="section-title">How We Work</h2>
                <p
                  className="section-description"
                  style={{ maxWidth: "700px", margin: "0 auto" }}
                >
                  From consultation to final inspection – a transparent,
                  step‑by‑step process.
                </p>
              </div>
              <div className="process-grid">
                {processSteps.map((step, index) => (
                  <div className="process-card" key={index}>
                    <div className="process-icon">
                      {getProcessIcon(step.name)}
                    </div>
                    <h3 className="process-name">{step.name}</h3>
                    <p className="process-description">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className="services-detail-section reveal-group">
              <div className="services-detail-header">
                <div className="section-label">ALL SERVICES</div>
                <h2 className="section-title">
                  Comprehensive Roofing Solutions
                </h2>
                <p
                  className="section-description"
                  style={{ maxWidth: "700px", margin: "0 auto" }}
                >
                  End‑to‑end services – from initial design to lifetime
                  maintenance.
                </p>
              </div>
              <div className="services-detail-grid">
                {serviceList.map((service, index) => (
                  <div className="service-detail-card" key={index}>
                    <div className="service-detail-icon">
                      {getServiceIcon(service.name)}
                    </div>
                    <h3 className="service-detail-name">{service.name}</h3>
                    <p className="service-detail-description">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="stats-section reveal-group">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{stats.projects}+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.experts}</div>
              <div className="stat-label">Expert Professionals</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.cities}+</div>
              <div className="stat-label">Cities Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.satisfaction}%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// testing for deploy