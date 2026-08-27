"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Project data (unchanged)
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
        /* Projects Page Styles */
        .projects-page {
          background: var(--dark);
          min-height: 100vh;
          padding-top: 100px;
        }

        /* Hero Section */
        .projects-hero {
          padding: 60px 48px 100px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .projects-hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(233,238,242,0.05), transparent);
          pointer-events: none;
        }

        .projects-badge {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--orange);
          margin-bottom: 20px;
          display: inline-block;
        }

        .projects-title {
          font-family: var(--font-display);
          font-size: clamp(48px, 6vw, 84px);
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--white);
          margin-bottom: 24px;
        }

        .projects-title span {
          color: var(--orange);
          position: relative;
          display: inline-block;
        }

        .projects-title span::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--orange);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.5s ease;
        }

        .projects-title span:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .projects-subtitle {
          font-size: 18px;
          color: var(--steel-light);
          max-width: 600px;
          margin: 0 auto 40px auto;
          line-height: 1.6;
        }

        .projects-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--orange);
          color: var(--white);
          border: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .projects-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(138,15,15,0.3);
        }

        /* Filter Section - Updated with rgba(233,238,242,0.5) theme */
        .projects-filter {
          padding: 20px 48px 40px 48px;
          border-bottom: 1px solid var(--panel-border);
          position: relative;
          background: rgba(233,238,242,0.03);
          backdrop-filter: blur(12px);
        }

        .filter-container {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid rgba(233,238,242,0.2);
          color: var(--steel-light);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .filter-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--orange);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .filter-btn:hover {
          border-color: var(--orange);
          color: var(--white);
        }

        .filter-btn:hover::before {
          left: 0;
        }

        .filter-btn.active {
          background: var(--orange);
          border-color: var(--orange);
          color: var(--white);
        }

        .filter-count {
          margin-left: 8px;
          font-size: 12px;
          opacity: 0.7;
        }

        /* Projects Grid */
        .projects-grid-section {
          padding: 60px 48px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 32px;
        }

        .project-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(233,238,242,0.02);
          border: 1px solid rgba(233,238,242,0.1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(233,238,242,0.5);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .project-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 300px;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(233,238,242,0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 24px;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-category {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--orange);
          color: var(--white);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 2;
        }

        .project-info {
          padding: 24px;
        }

        .project-title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: var(--orange);
        }

        .project-meta {
          display: flex;
          gap: 16px;
          margin-top: 12px;
          font-size: 13px;
          color: var(--steel-light);
        }

        .project-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Modal - Updated with rgba(233,238,242,0.5) theme */
        .project-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          max-width: 1200px;
          width: 100%;
          max-height: 90vh;
          background: rgba(15,20,24,0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid rgba(233,238,242,0.3);
          animation: slideUp 0.4s ease;
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-image {
          height: 100%;
          overflow: hidden;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-info {
          padding: 48px;
        }

        .modal-category {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--orange);
          margin-bottom: 16px;
        }

        .modal-title {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 20px;
        }

        .modal-description {
          font-size: 15px;
          line-height: 1.7;
          color: var(--steel-light);
          margin-bottom: 30px;
        }

        .modal-details {
          display: grid;
          gap: 16px;
          margin-bottom: 30px;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid rgba(233,238,242,0.2);
        }

        .detail-label {
          font-size: 13px;
          color: var(--steel-light);
        }

        .detail-value {
          font-size: 14px;
          font-weight: 600;
          color: var(--white);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(233,238,242,0.2);
          border: 1px solid rgba(233,238,242,0.3);
          color: var(--white);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
          transition: all 0.3s;
        }

        .modal-close:hover {
          background: var(--orange);
          transform: rotate(90deg);
          border-color: var(--orange);
        }

        /* Stats Section - Updated with rgba(233,238,242,0.5) theme */
        .projects-stats {
          padding: 80px 48px;
          background: rgba(233,238,242,0.03);
          border-top: 1px solid rgba(233,238,242,0.15);
          border-bottom: 1px solid rgba(233,238,242,0.15);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
          padding: 32px;
          background: rgba(233,238,242,0.05);
          border: 1px solid rgba(233,238,242,0.1);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(233,238,242,0.08);
          border-color: rgba(233,238,242,0.5);
        }

        .stat-number {
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 700;
          color: var(--orange);
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: var(--steel-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-plus {
          font-size: 32px;
        }

        /* CTA Section - Updated with rgba(233,238,242,0.5) theme */
        .projects-cta-section {
          padding: 100px 48px;
          text-align: center;
          background: linear-gradient(135deg, var(--orange), #b01515);
          position: relative;
          overflow: hidden;
        }

        .projects-cta-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(45deg, rgba(233,238,242,0.05) 0px, rgba(233,238,242,0.05) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .cta-content h2 {
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .cta-content p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 1;
        }

        .cta-button {
          background: var(--white);
          color: var(--orange);
          border: none;
          padding: 16px 40px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .modal-content {
            grid-template-columns: 1fr;
            max-height: 80vh;
            overflow-y: auto;
          }
        }

        @media (max-width: 768px) {
          .projects-hero,
          .projects-filter,
          .projects-grid-section,
          .projects-stats,
          .projects-cta-section {
            padding: 40px 24px;
          }
          
          .projects-title {
            font-size: 36px;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          
          .project-image-wrapper {
            height: 160px;
          }
          
          .project-info {
            padding: 16px;
          }
          
          .project-title {
            font-size: 14px;
            margin-bottom: 8px;
            white-space: normal;
            line-height: 1.3;
          }
          
          .project-category {
            top: 10px;
            right: 10px;
            padding: 4px 10px;
            font-size: 9px;
          }
          
          .project-meta {
            font-size: 10px;
            gap: 8px;
            flex-wrap: wrap;
          }
          
          .project-meta span {
            font-size: 9px;
          }
          
          .modal-info {
            padding: 32px;
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

      <div className="projects-page">
        {/* Hero Section */}
        <section className="projects-hero reveal-group">
          <div className="projects-badge">OUR PORTFOLIO</div>
          <h1 className="projects-title">
            Where Vision Meets
            <br />
            <span>Structural Excellence</span>
          </h1>
          <p className="projects-subtitle">
            Get professional advice on the best roofing solutions for your home
            or business—tailored to your budget, climate, and needs.
          </p>
          <button
            className="projects-cta"
            onClick={() =>
              document
                .getElementById("projects-grid")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Projects
          </button>
        </section>

        {/* Filter Section */}
        <section className="projects-filter reveal-group">
          <div className="filter-container">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${filter === cat.id ? "active" : ""}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.name}
                <span className="filter-count">({cat.count})</span>
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section
          id="projects-grid"
          className="projects-grid-section reveal-group"
        >
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
                  <div className="project-overlay">
                    <button
                      className="projects-cta"
                      style={{ padding: "10px 20px" }}
                    >
                      View Details →
                    </button>
                  </div>
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <span>📍 {project.location}</span>
                    <span>📐 {project.area}</span>
                    <span>📅 {project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="projects-stats reveal-group">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">
                {stats.projects}
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {stats.clients}
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {stats.cities}
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Cities Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.satisfaction}%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="projects-cta-section reveal-group">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss your roofing needs and create something
              extraordinary together.
            </p>
            <Link href="/contact">
              <button className="cta-button">Get in Touch →</button>
            </Link>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="project-modal"
            onClick={() => setSelectedProject(null)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-image">
                <img
                  src={selectedProject.image?.src ?? selectedProject.image}
                  alt={selectedProject.title}
                />
              </div>
              <div className="modal-info">
                <div className="modal-category">
                  {selectedProject.category.toUpperCase()}
                </div>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-description">
                  {selectedProject.description}
                </p>
                <div className="modal-details">
                  <div className="detail-item">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">
                      {selectedProject.location}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Project Area</span>
                    <span className="detail-value">{selectedProject.area}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Completion Year</span>
                    <span className="detail-value">{selectedProject.year}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Roofing Type</span>
                    <span className="detail-value">
                      Trussless K-Span System
                    </span>
                  </div>
                </div>
                <button className="projects-cta" style={{ width: "100%" }}>
                  Request Similar Project →
                </button>
              </div>
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}