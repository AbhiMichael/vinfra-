"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import ContactFooter from "../components/ContactFooter";
import { BLOG_POSTS, CATEGORIES } from "../data/blogsData";

// Premium SVG Icon Components
function IconSparkle({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

function IconHardHat({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 18h20v2H2z" />
      <path d="M4 18a8 8 0 0 1 16 0" />
      <path d="M12 6v4" />
      <path d="M8 8v2" />
      <path d="M16 8v2" />
    </svg>
  );
}

function IconCoffee({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

function IconMilestone({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
      <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
      <path d="M18 4H6v7a6 6 0 0 0 12 0V4z" />
    </svg>
  );
}

function IconHandshake({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6" />
      <path d="m18 10 1-1a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0l-5.6 5.6a1 1 0 0 0 0 1.4l2 2" />
      <path d="M12 22 2 12a3 3 0 0 1 0-4.2l1.4-1.4a3 3 0 0 1 4.2 0l2.4 2.4" />
      <path d="m7 7 4 4" />
    </svg>
  );
}

function IconSearch({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconMapPin({ size = 13, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconHeart({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconCamera({ size = 36, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function IconStar({ size = 13, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconShieldAlert({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function IconCheckCircle({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function StoryIcon({ type, size = 14, className = "" }) {
  switch (type) {
    case "celebration":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
    case "coffee":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
        </svg>
      );
    case "tradition":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "handover":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="m21 2-2 2m-6 6a5 5 0 1 1-7.07-7.07 5 5 0 0 1 7.07 7.07zm0 0L19 7l2 2-2 2 2 2-2 2-4-4" />
        </svg>
      );
    case "monsoon":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <line x1="8" y1="19" x2="8" y2="21" />
          <line x1="8" y1="13" x2="8" y2="15" />
          <line x1="16" y1="19" x2="16" y2="21" />
          <line x1="16" y1="13" x2="16" y2="15" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="12" y1="15" x2="12" y2="17" />
          <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
        </svg>
      );
    case "retreat":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
      );
    case "community":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <line x1="3" y1="21" x2="21" y2="21" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="m12 3 9 7H3l9-7z" />
          <line x1="6" y1="10" x2="6" y2="21" />
          <line x1="10" y1="10" x2="10" y2="21" />
          <line x1="14" y1="10" x2="14" y2="21" />
          <line x1="18" y1="10" x2="18" y2="21" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
}

export default function BlogsView() {
  const [selectedCategory, setSelectedCategory] = useState("All Moments");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStory, setActiveStory] = useState(null);
  const [likes, setLikes] = useState({});

  // Story submission popup state
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [submissionData, setSubmissionData] = useState({
    authorName: "",
    authorRole: "Client / Building Owner",
    email: "",
    phone: "",
    title: "",
    category: "Site Life & Moments",
    location: "",
    narrative: "",
    highlightQuote: "",
    photoNote: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubmissionData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const handleStorySubmit = (e) => {
    e.preventDefault();
    if (
      !submissionData.authorName.trim() ||
      !submissionData.email.trim() ||
      !submissionData.title.trim() ||
      !submissionData.location.trim() ||
      !submissionData.narrative.trim()
    ) {
      setFormError("Please fill in all required fields (Name, Email, Story Title, Location, and Narrative).");
      return;
    }
    setSubmissionSuccess(true);
  };

  const handleResetSubmission = () => {
    setSubmissionSuccess(false);
    setFormError("");
    setSubmissionData({
      authorName: "",
      authorRole: "Client / Building Owner",
      email: "",
      phone: "",
      title: "",
      category: "Site Life & Moments",
      location: "",
      narrative: "",
      highlightQuote: "",
      photoNote: "",
    });
    setIsSubmissionModalOpen(false);
  };

  // Lock scroll when story reader or submission popup is open
  useEffect(() => {
    if (activeStory || isSubmissionModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeStory, isSubmissionModalOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveStory(null);
        setIsSubmissionModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLike = (storyId, e) => {
    e.stopPropagation();
    setLikes((prev) => ({
      ...prev,
      [storyId]: (prev[storyId] || 0) + 1,
    }));
  };

  const filteredStories = useMemo(() => {
    return BLOG_POSTS.filter((story) => {
      const matchesCategory =
        selectedCategory === "All Moments" || story.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        story.title.toLowerCase().includes(query) ||
        story.subtitle.toLowerCase().includes(query) ||
        story.excerpt.toLowerCase().includes(query) ||
        story.location.toLowerCase().includes(query) ||
        story.category.toLowerCase().includes(query) ||
        story.tags.some((t) => t.toLowerCase().includes(query)) ||
        story.author.name.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const heroStory = BLOG_POSTS[0];

  return (
    <div className="vinfra-journal-root">
      {/* FRESH HERO: EDITORIAL JOURNAL HEADER */}
      <section className="journal-hero">
        <div className="journal-hero-inner">
          <div className="journal-badge">
            <span className="badge-sparkle">
              <IconSparkle size={13} />
            </span>
            <span>LIFE AT VINFRA · STORIES, MOMENTS &amp; CELEBRATIONS</span>
          </div>

          <h1 className="journal-title">
            Site Stories, Staff Celebrations &amp;{" "}
            <span className="text-red">Happy Moments</span>
          </h1>

          <p className="journal-subtitle">
            Behind every curved steel roof is a dedicated field crew, hot ginger tea at golden
            hour, festive blessings, heartfelt client handovers, and the proud people who build
            South India&apos;s skies.
          </p>

          {/* WARM HIGHLIGHT STATS */}
          <div className="warm-stats-bar">
            <div className="stat-pill">
              <span className="stat-icon-wrap">
                <IconHardHat size={20} />
              </span>
              <div>
                <strong>100+ Field Crew</strong>
                <p>Engineers, riggers &amp; staff</p>
              </div>
            </div>
            <div className="stat-divider" />
            <div className="stat-pill">
              <span className="stat-icon-wrap">
                <IconCoffee size={20} />
              </span>
              <div>
                <strong>10,000+ Chai Breaks</strong>
                <p>Daily sunset camaraderie</p>
              </div>
            </div>
            <div className="stat-divider" />
            <div className="stat-pill">
              <span className="stat-icon-wrap">
                <IconMilestone size={20} />
              </span>
              <div>
                <strong>10+ Years of Joy</strong>
                <p>Milestones &amp; celebrations</p>
              </div>
            </div>
            <div className="stat-divider" />
            <div className="stat-pill">
              <span className="stat-icon-wrap">
                <IconHandshake size={20} />
              </span>
              <div>
                <strong>500+ Proud Smiles</strong>
                <p>Heartfelt client handovers</p>
              </div>
            </div>
          </div>

          {/* SEARCH & CATEGORY CHIPS */}
          <div className="filter-controls-wrap">
            <div className="journal-search-input">
              <span className="search-ico">
                <IconSearch size={16} />
              </span>
              <input
                type="text"
                placeholder="Search moments, Onam, chai breaks, Kozhikode, Wayanad, team..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search stories"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-btn"
                  onClick={() => setSearchQuery("")}
                >
                  ✕
                </button>
              )}
            </div>

            {/* SORTING BOXES / CATEGORIES: WITHOUT COUNTS */}
            <div className="journal-categories-bar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  <span>{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN STORIES CONTAINER */}
      <div className="journal-content-wrap">
        {/* HERO FEATURED STORY (When viewing all and not searching) */}
        {selectedCategory === "All Moments" && !searchQuery && (
          <section className="featured-moment-section">
            <div
              className="featured-moment-card"
              onClick={() => setActiveStory(heroStory)}
            >
              <div className="featured-photo-box">
                <img
                  src={heroStory.image}
                  alt={heroStory.title}
                  className="featured-photo"
                />
                <div className="photo-stamp">
                  <StoryIcon type={heroStory.iconType} size={14} />
                  <span>{heroStory.badge}</span>
                </div>
                <div className="photo-location-tag">
                  <IconMapPin size={13} />
                  <span>{heroStory.location}</span>
                </div>
              </div>

              <div className="featured-body-box">
                <div className="story-meta-top">
                  <span className="meta-category">{heroStory.category}</span>
                  <span className="meta-dot">•</span>
                  <span>{heroStory.date}</span>
                  <span className="meta-dot">•</span>
                  <span>{heroStory.readTime}</span>
                </div>

                <h2 className="featured-story-title">{heroStory.title}</h2>
                <p className="featured-story-desc">{heroStory.excerpt}</p>

                {/* Highlight Tag Chips */}
                <div className="story-tags-row">
                  {heroStory.tags.map((t, idx) => (
                    <span key={idx} className="story-tag-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="featured-card-footer">
                  <div className="author-badge-row">
                    <div className="author-circ">{heroStory.author.initials}</div>
                    <div>
                      <div className="author-title">{heroStory.author.name}</div>
                      <div className="author-sub">{heroStory.author.role}</div>
                    </div>
                  </div>

                  <div className="action-buttons-group">
                    <button
                      type="button"
                      className="heart-btn"
                      onClick={(e) => handleLike(heroStory.id, e)}
                    >
                      <IconHeart size={14} />
                      <span>{likes[heroStory.id] ? likes[heroStory.id] + 48 : 48}</span>
                    </button>
                    <button type="button" className="read-story-btn">
                      Read Full Story <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STORIES MOSAIC GRID */}
        <section className="stories-mosaic-section">
          <div className="mosaic-header-row">
            <div>
              <h3 className="mosaic-heading">
                {selectedCategory === "All Moments"
                  ? "Diaries, Site Memories & Celebrations"
                  : `${selectedCategory} (${filteredStories.length})`}
              </h3>
              <p className="mosaic-subheading">
                Real photos, genuine laughs, and candid moments recorded by our team.
              </p>
            </div>
            {searchQuery && (
              <span className="search-count-pill">
                Showing {filteredStories.length} matching moments
              </span>
            )}
          </div>

          {filteredStories.length === 0 ? (
            <div className="no-stories-box">
              <span className="no-stories-icon">
                <IconCamera size={40} />
              </span>
              <h4>No moments found matching your search</h4>
              <p>Try searching for keywords like &ldquo;chai&rdquo;, &ldquo;Pooja&rdquo;, &ldquo;celebration&rdquo;, or reset filters.</p>
              <button
                type="button"
                className="reset-btn"
                onClick={() => {
                  setSelectedCategory("All Moments");
                  setSearchQuery("");
                }}
              >
                Show All Moments
              </button>
            </div>
          ) : (
            <div className="stories-grid">
              {filteredStories.map((story) => (
                <article
                  key={story.id}
                  className="story-card"
                  onClick={() => setActiveStory(story)}
                >
                  {/* Photo with Polarodi/Journal Vibe */}
                  <div className="story-photo-wrapper">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="story-photo"
                      loading="lazy"
                    />
                    <div className="card-top-chips">
                      <span className="card-emoji-badge">
                        <StoryIcon type={story.iconType} size={13} />
                        <span>{story.category}</span>
                      </span>
                    </div>
                    <div className="card-loc-pill">
                      <IconMapPin size={12} />
                      <span>{story.location}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="story-card-body">
                    <div className="card-date-line">
                      <span>{story.date}</span>
                      <span className="sep">•</span>
                      <span>{story.readTime}</span>
                    </div>

                    <h4 className="card-story-title">{story.title}</h4>
                    <p className="card-story-excerpt">{story.excerpt}</p>

                    {/* Tag list */}
                    <div className="card-tags-list">
                      {story.tags.slice(0, 3).map((tg, i) => (
                        <span key={i} className="mini-tag">
                          {tg}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="card-story-footer">
                      <div className="story-author-mini">
                        <span className="mini-avatar">{story.author.initials}</span>
                        <span className="mini-name">{story.author.name}</span>
                      </div>

                      <div className="card-actions-row">
                        <button
                          type="button"
                          className="card-heart-btn"
                          onClick={(e) => handleLike(story.id, e)}
                        >
                          <IconHeart size={13} />
                          <span>{likes[story.id] ? likes[story.id] + 32 : 32}</span>
                        </button>
                        <span className="view-story-link">
                          Read <span>→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* COMMUNITY / SHARE YOUR SITE STORY STRIP */}
        <section className="community-share-strip">
          <div className="community-share-inner">
            <div className="community-text">
              <span className="community-badge">COMMUNITY &amp; CLIENTS</span>
              <h3 className="community-title">
                Were You Part of a Vinfra Project Site?
              </h3>
              <p className="community-desc">
                Whether you are a building owner who celebrated a handover with us, an architect who
                walked the curved arches, or a team member with a candid photo—we would love to feature
                your memories in our Vinfra Chronicles!
              </p>
            </div>

            <div className="community-action">
              <button
                type="button"
                className="share-story-btn"
                onClick={() => setIsSubmissionModalOpen(true)}
              >
                <span>Share Your Site Story</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* FULL STORY MODAL READER */}
      {activeStory && (
        <div
          className="story-modal-overlay"
          onClick={() => setActiveStory(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="story-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="story-modal-close"
              onClick={() => setActiveStory(null)}
              aria-label="Close story"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="modal-top-bar">
              <div className="modal-cat-row">
                <span className="modal-emoji-tag">
                  <StoryIcon type={activeStory.iconType} size={14} />
                  <span>{activeStory.category}</span>
                </span>
                <span className="modal-loc-tag">
                  <IconMapPin size={13} />
                  <span>{activeStory.location}</span>
                </span>
                <span className="modal-date-tag">{activeStory.date}</span>
              </div>

              <h1 className="modal-story-heading">{activeStory.title}</h1>
              <p className="modal-story-sub">{activeStory.subtitle}</p>

              <div className="modal-author-strip">
                <div className="modal-author-avatar">
                  {activeStory.author.initials}
                </div>
                <div>
                  <div className="modal-author-name">{activeStory.author.name}</div>
                  <div className="modal-author-role">{activeStory.author.role}</div>
                </div>
              </div>
            </div>

            {/* Modal Large Photo Banner */}
            <div className="modal-photo-banner">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="modal-banner-img"
              />
              <div className="modal-photo-caption">
                <span>{activeStory.badge} · Captured on location at {activeStory.location}</span>
              </div>
            </div>

            {/* Modal Rich Narrative Body */}
            <div className="modal-narrative-body">
              <p className="narrative-intro">{activeStory.content.intro}</p>

              <h3 className="narrative-h3">{activeStory.content.storySection1Heading}</h3>
              <p className="narrative-p">{activeStory.content.storySection1Body}</p>

              {/* Heartfelt Quote Callout */}
              <blockquote className="heartfelt-quote">
                <div className="quote-mark">“</div>
                <p>{activeStory.content.quote}</p>
                <cite>{activeStory.content.quoteAuthor}</cite>
              </blockquote>

              <h3 className="narrative-h3">{activeStory.content.storySection2Heading}</h3>
              <p className="narrative-p">{activeStory.content.storySection2Body}</p>

              {/* Moments Highlight Box */}
              <div className="moments-highlight-box">
                <h4>
                  <IconSparkle size={15} className="text-red" />
                  <span>Unforgettable Highlights from This Day:</span>
                </h4>
                <ul>
                  {activeStory.content.momentsList.map((m, i) => (
                    <li key={i}>
                      <span className="moment-bullet">
                        <IconStar size={12} />
                      </span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Closing Thought */}
              <div className="closing-note-card">
                <p><strong>Reflections:</strong> {activeStory.content.closingNote}</p>
              </div>

              {/* Tag Row */}
              <div className="modal-tags-row">
                {activeStory.tags.map((tg, i) => (
                  <span key={i} className="modal-tag">
                    {tg}
                  </span>
                ))}
              </div>

              {/* Modal Footer Actions */}
              <div className="modal-footer-action-bar">
                <button
                  type="button"
                  className="modal-heart-action"
                  onClick={(e) => handleLike(activeStory.id, e)}
                >
                  <IconHeart size={16} />
                  <span>Loved this moment ({likes[activeStory.id] ? likes[activeStory.id] + 56 : 56})</span>
                </button>

                <Link
                  href="/contact"
                  className="modal-connect-btn"
                  onClick={() => setActiveStory(null)}
                >
                  Connect with Our Team →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STORY SUBMISSION POPUP MODAL */}
      {isSubmissionModalOpen && (
        <div
          className="story-modal-overlay"
          onClick={() => setIsSubmissionModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="submission-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="story-modal-close"
              onClick={() => setIsSubmissionModalOpen(false)}
              aria-label="Close story submission"
            >
              ✕
            </button>

            {submissionSuccess ? (
              <div className="submission-success-view">
                <div className="success-icon-wrap">
                  <IconCheckCircle size={44} />
                </div>
                <h2 className="success-title">Story Received for Review!</h2>

                {/* MANDATORY ADMIN REVIEW ALERT */}
                <div className="admin-review-alert success-alert-box">
                  <div className="alert-icon-col">
                    <IconShieldAlert size={22} />
                  </div>
                  <div>
                    <strong>Admin Verification Pending</strong>
                    <p>The blog will be reviewed by the admin, then only it publishes on the official Vinfra Chronicles journal.</p>
                  </div>
                </div>

                <div className="submission-summary-card">
                  <div className="summary-row">
                    <span>Story Title:</span>
                    <strong>{submissionData.title}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Author:</span>
                    <strong>{submissionData.authorName} ({submissionData.authorRole})</strong>
                  </div>
                  <div className="summary-row">
                    <span>Category:</span>
                    <strong>{submissionData.category}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Location:</span>
                    <strong>{submissionData.location}</strong>
                  </div>
                </div>

                <p className="success-desc">
                  Our content team will verify site details and reach out via <strong>{submissionData.email}</strong> or <strong>{submissionData.phone || "your contact number"}</strong> if photos or clarifications are needed.
                </p>

                <div className="success-actions-row">
                  <button
                    type="button"
                    className="submit-another-btn"
                    onClick={() => {
                      setSubmissionSuccess(false);
                      setSubmissionData({
                        authorName: "",
                        authorRole: "Client / Building Owner",
                        email: "",
                        phone: "",
                        title: "",
                        category: "Site Life & Moments",
                        location: "",
                        narrative: "",
                        highlightQuote: "",
                        photoNote: "",
                      });
                    }}
                  >
                    Submit Another Story
                  </button>
                  <button
                    type="button"
                    className="close-success-btn"
                    onClick={handleResetSubmission}
                  >
                    Done &amp; Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="submission-form-container">
                <div className="submission-modal-header">
                  <span className="submission-badge">
                    <IconSparkle size={13} />
                    <span>COMMUNITY &amp; SITE STORIES TEMPLATE</span>
                  </span>
                  <h2 className="submission-heading">Share Your Vinfra Moment</h2>
                  <p className="submission-subheading">
                    Did you witness a great site moment, attend a celebration, cut a handover cake, or build an arch with us? Write your story template below to be featured!
                  </p>

                  {/* MANDATORY ADMIN REVIEW ALERT */}
                  <div className="admin-review-alert">
                    <div className="alert-icon-col">
                      <IconShieldAlert size={22} />
                    </div>
                    <div>
                      <strong>Important Notice:</strong>
                      <p>The blog will be reviewed by the admin, then only it publishes on the public page to ensure authentic site data and photo permissions.</p>
                    </div>
                  </div>
                </div>

                {formError && (
                  <div className="form-error-banner">
                    <IconShieldAlert size={16} />
                    <span>{formError}</span>
                  </div>
                )}

                <form onSubmit={handleStorySubmit} className="submission-form">
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label htmlFor="authorName">Your Full Name *</label>
                      <input
                        type="text"
                        id="authorName"
                        name="authorName"
                        placeholder="e.g. Er. Rajesh Kumar / Manoj Nair"
                        value={submissionData.authorName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="authorRole">Your Role / Association *</label>
                      <select
                        id="authorRole"
                        name="authorRole"
                        value={submissionData.authorRole}
                        onChange={handleInputChange}
                      >
                        <option value="Client / Building Owner">Client / Building Owner</option>
                        <option value="Site Engineer / Supervisor">Site Engineer / Supervisor</option>
                        <option value="Architect / Structural Consultant">Architect / Structural Consultant</option>
                        <option value="Technician / Rigging Crew">Technician / Rigging Crew</option>
                        <option value="Vendor / Logistics Partner">Vendor / Logistics Partner</option>
                        <option value="Community Member / Guest">Community Member / Guest</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. you@example.com"
                        value={submissionData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="e.g. +91 9876543210"
                        value={submissionData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label htmlFor="title">Story Title / Headline *</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="e.g. The Day We Cut the Handover Cake in Kozhikode"
                        value={submissionData.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="category">Category *</label>
                      <select
                        id="category"
                        name="category"
                        value={submissionData.category}
                        onChange={handleInputChange}
                      >
                        <option value="Site Life & Moments">Site Life &amp; Moments (Chai, Camaraderie, Teamwork)</option>
                        <option value="Staff & Celebrations">Staff &amp; Celebrations (Birthdays, Milestones, Retreats)</option>
                        <option value="Client Handovers">Client Handovers (Keys, Gratitude, Dreams Realized)</option>
                        <option value="Festivals & Culture">Festivals &amp; Culture (Ayudha Pooja, Onam, Blessings)</option>
                        <option value="Project Diaries">Project Diaries (Community Transformations &amp; Arches)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label htmlFor="location">Site Location / District *</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="e.g. Kozhikode, Kerala / Vythiri, Wayanad"
                        value={submissionData.location}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="highlightQuote">Memorable Quote or Highlight (Optional)</label>
                      <input
                        type="text"
                        id="highlightQuote"
                        name="highlightQuote"
                        placeholder="e.g. 'A roof is built with cranes, but sustained with camaraderie.'"
                        value={submissionData.highlightQuote}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="narrative">Story Narrative / What Happened? *</label>
                    <textarea
                      id="narrative"
                      name="narrative"
                      rows={5}
                      placeholder="Write your story: Describe the scene, who was there, what was celebrated or achieved, funny conversations, and how the team felt..."
                      value={submissionData.narrative}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <div className="form-field">
                    <label htmlFor="photoNote">Photos / Media Notes (Optional)</label>
                    <input
                      type="text"
                      id="photoNote"
                      name="photoNote"
                      placeholder="e.g. 'I have 3 high-res site photos on my phone; please contact me on WhatsApp to receive them.'"
                      value={submissionData.photoNote}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="submission-footer-bar">
                    <div className="admin-reminder-subtext">
                      <IconShieldAlert size={16} />
                      <span>Note: The blog will be reviewed by the admin, then only it publishes.</span>
                    </div>

                    <button type="submit" className="form-submit-btn">
                      <span>Submit Story for Review</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <ContactFooter />

      {/* STYLES */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .vinfra-journal-root {
          background-color: #F8FAFC;
          color: #0F172A;
          min-height: 100vh;
          font-family: var(--font-body, 'Inter', sans-serif);
          padding-top: 90px;
        }

        .text-red {
          color: #B91C1C;
        }

        /* HERO SECTION */
        .journal-hero {
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
          padding: 60px 24px 44px;
          position: relative;
        }

        .journal-hero-inner {
          max-width: 1080px;
          margin: 0 auto;
          text-align: center;
        }

        .journal-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          color: #B91C1C;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          padding: 6px 18px;
          border-radius: 50px;
          margin-bottom: 18px;
        }

        .badge-sparkle {
          font-size: 13px;
        }

        .journal-title {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(30px, 4.2vw, 52px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #0F172A;
          margin-bottom: 16px;
        }

        .journal-subtitle {
          font-size: 17px;
          line-height: 1.65;
          color: #64748B;
          max-width: 760px;
          margin: 0 auto 32px auto;
        }

        /* WARM STATS BAR */
        .warm-stats-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 16px 24px;
          max-width: 880px;
          margin: 0 auto 36px auto;
          gap: 20px;
          flex-wrap: wrap;
        }

        .stat-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          text-align: left;
        }

        .stat-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.18);
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(185, 28, 28, 0.08);
        }

        .stat-pill strong {
          display: block;
          font-size: 14px;
          color: #0F172A;
          font-weight: 700;
          line-height: 1.2;
        }

        .stat-pill p {
          margin: 0;
          font-size: 11.5px;
          color: #64748B;
        }

        .stat-divider {
          width: 1px;
          height: 30px;
          background: #E2E8F0;
        }

        /* FILTER & SEARCH */
        .filter-controls-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          max-width: 820px;
          margin: 0 auto;
        }

        .journal-search-input {
          position: relative;
          width: 100%;
          max-width: 580px;
        }

        .search-ico {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
        }

        .journal-search-input input {
          width: 100%;
          padding: 13px 44px 13px 46px;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 50px;
          font-size: 14px;
          color: #0F172A;
          outline: none;
          transition: all 0.2s ease;
        }

        .journal-search-input input:focus {
          border-color: #B91C1C;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.1);
        }

        .clear-btn {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #94A3B8;
          font-size: 13px;
          cursor: pointer;
        }

        .journal-categories-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .cat-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 20px;
          border-radius: 30px;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          color: #475569;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cat-btn:hover {
          background: #E2E8F0;
          color: #0F172A;
          transform: translateY(-1px);
        }

        .cat-btn.active {
          background: #B91C1C;
          border-color: #B91C1C;
          color: #FFFFFF;
          box-shadow: 0 4px 14px rgba(185, 28, 28, 0.25);
        }

        /* MAIN CONTENT AREA */
        .journal-content-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 24px 80px;
        }

        /* FEATURED STORY CARD */
        .featured-moment-section {
          margin-bottom: 56px;
        }

        .featured-moment-card {
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          border-radius: 22px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          box-shadow: 0 8px 28px rgba(15, 23, 42, 0.06);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .featured-moment-card:hover {
          transform: translateY(-4px);
          border-color: #CBD5E1;
          box-shadow: 0 16px 40px -10px rgba(15, 23, 42, 0.12);
        }

        .featured-photo-box {
          position: relative;
          min-height: 400px;
          background: #0F172A;
          overflow: hidden;
        }

        .featured-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .featured-moment-card:hover .featured-photo {
          transform: scale(1.03);
        }

        .photo-stamp {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #B91C1C;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 6px 14px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          box-shadow: 0 4px 12px rgba(185, 28, 28, 0.4);
        }

        .photo-location-tag {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 30px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .featured-body-box {
          padding: 38px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .story-meta-top {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
          margin-bottom: 12px;
        }

        .meta-category {
          color: #B91C1C;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 0.08em;
          background: #FEF2F2;
          padding: 3px 10px;
          border-radius: 4px;
          border: 1px solid rgba(185, 28, 28, 0.2);
        }

        .meta-dot {
          color: #CBD5E1;
        }

        .featured-story-title {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(22px, 2.1vw, 30px);
          font-weight: 800;
          line-height: 1.25;
          color: #0F172A;
          margin-bottom: 14px;
          transition: color 0.2s ease;
        }

        .featured-moment-card:hover .featured-story-title {
          color: #B91C1C;
        }

        .featured-story-desc {
          font-size: 14.5px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .story-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .story-tag-pill {
          font-size: 11.5px;
          font-weight: 600;
          color: #B91C1C;
          background: #FFF1F2;
          border: 1px solid #FFE4E6;
          padding: 3px 10px;
          border-radius: 20px;
        }

        .featured-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F1F5F9;
          padding-top: 20px;
          gap: 16px;
        }

        .author-badge-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author-circ {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #FEF2F2;
          color: #B91C1C;
          border: 2px solid rgba(185, 28, 28, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 13.5px;
        }

        .author-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #0F172A;
        }

        .author-sub {
          font-size: 11.5px;
          color: #64748B;
        }

        .action-buttons-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .heart-btn {
          background: #FFF1F2;
          border: 1px solid #FECDD3;
          color: #E11D48;
          font-weight: 700;
          font-size: 13px;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .heart-btn:hover {
          background: #FFE4E6;
          transform: scale(1.05);
        }

        .read-story-btn {
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .read-story-btn:hover {
          background: #991B1B;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(185, 28, 28, 0.3);
        }

        /* STORIES MOSAIC SECTION */
        .stories-mosaic-section {
          margin-bottom: 60px;
        }

        .mosaic-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 28px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .mosaic-heading {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(22px, 2.4vw, 30px);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.015em;
          margin-bottom: 4px;
        }

        .mosaic-subheading {
          font-size: 14.5px;
          color: #64748B;
          margin: 0;
        }

        .search-count-pill {
          font-size: 13px;
          background: #FEF2F2;
          color: #B91C1C;
          border: 1px solid rgba(185, 28, 28, 0.2);
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 600;
        }

        .stories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .story-card {
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 3px 12px rgba(15, 23, 42, 0.03);
        }

        .story-card:hover {
          transform: translateY(-6px);
          border-color: #CBD5E1;
          box-shadow: 0 16px 36px -8px rgba(15, 23, 42, 0.1);
        }

        .story-photo-wrapper {
          position: relative;
          height: 220px;
          background: #0F172A;
          overflow: hidden;
        }

        .story-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .story-card:hover .story-photo {
          transform: scale(1.05);
        }

        .card-top-chips {
          position: absolute;
          top: 12px;
          left: 12px;
        }

        .card-emoji-badge {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 4px;
          letter-spacing: 0.04em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .card-loc-pill {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          color: #0F172A;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .story-card-body {
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-date-line {
          font-size: 12px;
          color: #64748B;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .card-story-title {
          font-family: var(--font-display, sans-serif);
          font-size: 17.5px;
          font-weight: 700;
          line-height: 1.35;
          color: #0F172A;
          margin-bottom: 10px;
          transition: color 0.2s ease;
        }

        .story-card:hover .card-story-title {
          color: #B91C1C;
        }

        .card-story-excerpt {
          font-size: 13.5px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
        }

        .card-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }

        .mini-tag {
          font-size: 11px;
          color: #B91C1C;
          background: #FEF2F2;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
        }

        .card-story-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F1F5F9;
          padding-top: 14px;
        }

        .story-author-mini {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mini-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #FEF2F2;
          color: #B91C1C;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mini-name {
          font-size: 12px;
          color: #475569;
          font-weight: 600;
          max-width: 100px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-actions-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .card-heart-btn {
          background: #FFF1F2;
          border: 1px solid #FECDD3;
          color: #E11D48;
          font-size: 11.5px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .view-story-link {
          font-size: 12.5px;
          font-weight: 700;
          color: #B91C1C;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* NO STORIES */
        .no-stories-box {
          text-align: center;
          padding: 60px 20px;
          background: #FFFFFF;
          border: 1px dashed #CBD5E1;
          border-radius: 18px;
        }

        .no-stories-icon {
          font-size: 40px;
          margin-bottom: 12px;
          display: block;
        }

        .no-stories-box h4 {
          font-size: 18px;
          color: #0F172A;
          margin-bottom: 6px;
        }

        .no-stories-box p {
          color: #64748B;
          font-size: 14px;
          margin-bottom: 18px;
        }

        .reset-btn {
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 8px 20px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
        }

        /* COMMUNITY SHARE STRIP: LIGHT THEME */
        .community-share-strip {
          background: linear-gradient(135deg, #FFF5F5 0%, #FFFFFF 100%);
          border: 1.5px solid #FECDD3;
          color: #0F172A;
          border-radius: 20px;
          padding: 40px 44px;
          box-shadow: 0 10px 30px rgba(185, 28, 28, 0.05);
        }

        .community-share-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .community-badge {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #B91C1C;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 10px;
          display: inline-block;
        }

        .community-title {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(22px, 2.4vw, 30px);
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 8px;
        }

        .community-desc {
          color: #64748B;
          font-size: 14.5px;
          line-height: 1.65;
          max-width: 680px;
          margin: 0;
        }

        .share-story-btn {
          background: #B91C1C;
          color: #FFFFFF !important;
          padding: 13px 26px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .share-story-btn:hover {
          background: #991B1B;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(185, 28, 28, 0.35);
        }

        /* MODAL STORY READER */
        .story-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(6px);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          overflow-y: auto;
          padding: 40px 16px;
        }

        .story-modal-box {
          background: #FFFFFF;
          width: 100%;
          max-width: 860px;
          border-radius: 22px;
          position: relative;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          overflow: hidden;
          margin: auto 0;
        }

        .story-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          color: #0F172A;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.2s ease;
        }

        .story-modal-close:hover {
          background: #B91C1C;
          color: #FFFFFF;
          border-color: #B91C1C;
        }

        .modal-top-bar {
          padding: 38px 44px 20px;
        }

        .modal-cat-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #64748B;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .modal-emoji-tag {
          background: #FEF2F2;
          color: #B91C1C;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 4px;
          border: 1px solid rgba(185, 28, 28, 0.2);
          font-size: 12px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .modal-loc-tag {
          font-weight: 600;
          color: #0F172A;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .modal-story-heading {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(24px, 2.8vw, 34px);
          font-weight: 800;
          line-height: 1.25;
          color: #0F172A;
          margin-bottom: 10px;
        }

        .modal-story-sub {
          font-size: 16px;
          line-height: 1.6;
          color: #64748B;
          margin-bottom: 20px;
        }

        .modal-author-strip {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid #F1F5F9;
          padding-top: 16px;
        }

        .modal-author-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #FEF2F2;
          color: #B91C1C;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(185, 28, 28, 0.2);
        }

        .modal-author-name {
          font-size: 14px;
          font-weight: 700;
          color: #0F172A;
        }

        .modal-author-role {
          font-size: 12px;
          color: #64748B;
        }

        .modal-photo-banner {
          position: relative;
          width: 100%;
          height: 380px;
          background: #0F172A;
        }

        .modal-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-photo-caption {
          position: absolute;
          bottom: 14px;
          left: 18px;
          right: 18px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          font-size: 12px;
          padding: 6px 14px;
          border-radius: 6px;
        }

        .modal-narrative-body {
          padding: 36px 44px 48px;
          font-size: 15.5px;
          line-height: 1.8;
          color: #334155;
        }

        .narrative-intro {
          font-size: 17px;
          font-weight: 500;
          color: #0F172A;
          line-height: 1.75;
          margin-bottom: 26px;
          border-left: 3px solid #B91C1C;
          padding-left: 18px;
        }

        .narrative-h3 {
          font-family: var(--font-display, sans-serif);
          font-size: 21px;
          font-weight: 800;
          color: #0F172A;
          margin: 30px 0 12px;
        }

        .narrative-p {
          margin-bottom: 20px;
        }

        .heartfelt-quote {
          background: #FEF2F2;
          border: 1.5px solid rgba(185, 28, 28, 0.2);
          border-radius: 14px;
          padding: 24px 28px;
          margin: 30px 0;
        }

        .quote-mark {
          font-size: 42px;
          line-height: 1;
          color: #B91C1C;
          font-family: serif;
          margin-bottom: 4px;
        }

        .heartfelt-quote p {
          font-size: 16px;
          font-style: italic;
          color: #0F172A;
          line-height: 1.65;
          margin-bottom: 8px;
        }

        .heartfelt-quote cite {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #B91C1C;
          font-style: normal;
        }

        .moments-highlight-box {
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 14px;
          padding: 22px 26px;
          margin: 28px 0;
        }

        .moments-highlight-box h4 {
          font-size: 15px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .moments-highlight-box ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .moments-highlight-box li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14.5px;
          color: #475569;
          line-height: 1.6;
        }

        .moment-bullet {
          color: #B91C1C;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .closing-note-card {
          background: #FFFBEB;
          border: 1px solid #FDE68A;
          border-radius: 12px;
          padding: 16px 20px;
          margin-bottom: 28px;
          font-size: 14px;
          color: #92400E;
          line-height: 1.6;
        }

        .modal-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
        }

        .modal-tag {
          font-size: 12px;
          color: #B91C1C;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.15);
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 600;
        }

        .modal-footer-action-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F1F5F9;
          padding-top: 22px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .modal-heart-action {
          background: #FFF1F2;
          border: 1.5px solid #FECDD3;
          color: #E11D48;
          font-size: 14px;
          font-weight: 700;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .modal-heart-action:hover {
          background: #FFE4E6;
          transform: scale(1.04);
        }

        .modal-connect-btn {
          background: #B91C1C;
          color: #FFFFFF !important;
          padding: 11px 22px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 13.5px;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        /* STORY SUBMISSION POPUP MODAL */
        .submission-modal-box {
          background: #FFFFFF;
          width: 100%;
          max-width: 800px;
          border-radius: 22px;
          position: relative;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          overflow: hidden;
          margin: auto 0;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
        }

        .submission-form-container {
          padding: 38px 44px;
          overflow-y: auto;
        }

        .submission-modal-header {
          margin-bottom: 24px;
        }

        .submission-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          color: #B91C1C;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 5px 14px;
          border-radius: 50px;
          margin-bottom: 12px;
        }

        .submission-heading {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(22px, 2.6vw, 30px);
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 8px;
          line-height: 1.25;
        }

        .submission-subheading {
          font-size: 14.5px;
          line-height: 1.6;
          color: #64748B;
          margin: 0;
        }

        /* ADMIN REVIEW ALERT (MANDATORY REQUIREMENT) */
        .admin-review-alert {
          margin-top: 18px;
          background: #FFFBEB;
          border: 1.5px solid #FDE68A;
          border-radius: 12px;
          padding: 14px 18px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          text-align: left;
        }

        .alert-icon-col {
          color: #D97706;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .admin-review-alert strong {
          display: block;
          font-size: 13.5px;
          font-weight: 700;
          color: #92400E;
          margin-bottom: 2px;
        }

        .admin-review-alert p {
          font-size: 13px;
          color: #78350F;
          line-height: 1.55;
          margin: 0;
        }

        .form-error-banner {
          background: #FEF2F2;
          border: 1px solid #FECDD3;
          color: #B91C1C;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 14px;
          border-radius: 8px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .submission-form {
          display: flex;
          flex-direction: column;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 16px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .form-field label {
          font-size: 13px;
          font-weight: 700;
          color: #1E293B;
        }

        .form-field input,
        .form-field select,
        .form-field textarea {
          width: 100%;
          padding: 11px 14px;
          background: #F8FAFC;
          border: 1.5px solid #CBD5E1;
          border-radius: 8px;
          font-size: 14px;
          color: #0F172A;
          font-family: inherit;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          border-color: #B91C1C;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.1);
        }

        .submission-footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F1F5F9;
          padding-top: 22px;
          margin-top: 8px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .admin-reminder-subtext {
          font-size: 12px;
          color: #B45309;
          display: flex;
          align-items: center;
          gap: 7px;
          font-weight: 600;
          max-width: 400px;
          line-height: 1.45;
        }

        .form-submit-btn {
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 13px 26px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .form-submit-btn:hover {
          background: #991B1B;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(185, 28, 28, 0.3);
        }

        /* SUCCESS VIEW */
        .submission-success-view {
          padding: 48px 40px;
          text-align: center;
        }

        .success-icon-wrap {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: #F0FDF4;
          color: #16A34A;
          border: 2px solid #BBF7D0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
        }

        .success-title {
          font-family: var(--font-display, sans-serif);
          font-size: 26px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 12px;
        }

        .success-alert-box {
          margin: 16px auto 22px;
          max-width: 580px;
        }

        .submission-summary-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 18px 24px;
          max-width: 580px;
          margin: 0 auto 20px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 13.5px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .summary-row span {
          color: #64748B;
        }

        .summary-row strong {
          color: #0F172A;
          text-align: right;
        }

        .success-desc {
          font-size: 14px;
          color: #64748B;
          line-height: 1.6;
          max-width: 580px;
          margin: 0 auto 24px;
        }

        .success-actions-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .close-success-btn {
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 11px 26px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .close-success-btn:hover {
          background: #991B1B;
        }

        .submit-another-btn {
          background: #F1F5F9;
          color: #475569;
          border: 1px solid #CBD5E1;
          padding: 11px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 13.5px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .submit-another-btn:hover {
          background: #E2E8F0;
          color: #0F172A;
        }

        /* CONTACT FOOTER LIGHT OVERRIDE */
        .page-contact {
          background-color: #FFFFFF !important;
          background-image: 
            radial-gradient(circle, rgba(15, 23, 42, 0.04) 1.5px, transparent 1.5px),
            linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%) !important;
          background-size: 32px 32px, 100% 100% !important;
          border-top: 1px solid #E2E8F0 !important;
          color: #0F172A !important;
          padding: 90px 48px 60px !important;
        }
        .contact-title {
          color: #0F172A !important;
        }
        .contact-section-label {
          color: #B91C1C !important;
        }
        .contact-divider {
          border: none !important;
          border-top: 1px solid #E2E8F0 !important;
        }
        .footer-copy {
          color: #64748B !important;
        }
        .footer-copy a {
          color: #475569 !important;
        }
        .footer-copy a:hover {
          color: #B91C1C !important;
        }
        .iso-badge {
          color: #B91C1C !important;
          background: #FEF2F2 !important;
          border: 1px solid rgba(185, 28, 28, 0.25) !important;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 1024px) {
          .journal-content-wrap {
            padding: 40px 20px 60px;
          }
          .warm-stats-bar {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            max-width: 680px;
          }
          .stat-divider {
            display: none;
          }
          .stories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 22px;
          }
          .featured-moment-card {
            grid-template-columns: 1fr;
          }
          .featured-photo-box {
            min-height: 260px;
            max-height: 320px;
          }
          .community-share-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .page-contact {
            padding: 70px 32px 50px !important;
          }
          .contact-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 36px !important;
          }
        }

        @media (max-width: 768px) {
          .vinfra-journal-root {
            padding-top: 80px;
          }
          .journal-hero {
            padding: 32px 16px 24px;
          }
          .journal-badge {
            font-size: 10px;
            letter-spacing: 0.08em;
            padding: 5px 14px;
            margin-bottom: 14px;
          }
          .journal-title {
            font-size: clamp(24px, 6.2vw, 34px);
            margin-bottom: 12px;
          }
          .journal-subtitle {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 24px;
          }
          .warm-stats-bar {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 14px 16px;
            margin-bottom: 24px;
          }
          .stat-pill {
            gap: 12px;
          }
          .journal-search-input input {
            padding: 11px 38px 11px 40px;
            font-size: 13.5px;
          }
          .journal-categories-bar {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            width: 100%;
          }
          .cat-btn {
            padding: 7px 15px;
            font-size: 12.5px;
          }
          .journal-content-wrap {
            padding: 24px 14px 50px;
          }
          .featured-moment-section {
            margin-bottom: 36px;
          }
          .featured-moment-card {
            border-radius: 16px;
          }
          .featured-body-box {
            padding: 20px 16px;
          }
          .featured-story-title {
            font-size: 20px;
            line-height: 1.3;
          }
          .featured-story-desc {
            font-size: 13.5px;
            margin-bottom: 16px;
          }
          .featured-card-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 14px;
            padding-top: 16px;
          }
          .action-buttons-group {
            width: 100%;
            display: flex;
            gap: 8px;
          }
          .heart-btn {
            flex-shrink: 0;
            padding: 8px 12px;
          }
          .read-story-btn {
            flex-grow: 1;
            justify-content: center;
          }
          .stories-mosaic-section {
            margin-bottom: 40px;
          }
          .mosaic-heading {
            font-size: 21px;
          }
          .mosaic-subheading {
            font-size: 13px;
          }
          .stories-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .story-card {
            border-radius: 16px;
          }
          .story-photo-wrapper {
            height: 190px;
          }
          .story-card-body {
            padding: 18px 16px;
          }
          .story-card-footer {
            gap: 10px;
          }
          .community-share-strip {
            padding: 26px 18px;
            border-radius: 16px;
          }
          .community-share-inner {
            flex-direction: column;
            align-items: stretch;
            gap: 18px;
          }
          .community-title {
            font-size: 20px;
          }
          .community-desc {
            font-size: 13.5px;
          }
          .share-story-btn {
            width: 100%;
            justify-content: center;
          }
          .story-modal-overlay {
            padding: 16px 8px;
          }
          .story-modal-box {
            border-radius: 16px;
            max-width: 100%;
          }
          .modal-top-bar {
            padding: 22px 16px 14px;
          }
          .modal-story-heading {
            font-size: 20px;
          }
          .modal-story-sub {
            font-size: 13.5px;
            margin-bottom: 14px;
          }
          .modal-photo-banner {
            height: 200px;
          }
          .modal-narrative-body {
            padding: 20px 16px 28px;
            font-size: 14px;
          }
          .narrative-intro {
            font-size: 15px;
            padding-left: 12px;
          }
          .narrative-h3 {
            font-size: 17px;
            margin: 22px 0 8px;
          }
          .heartfelt-quote {
            padding: 16px 18px;
          }
          .heartfelt-quote p {
            font-size: 14px;
          }
          .moments-highlight-box {
            padding: 16px 18px;
          }
          .moments-highlight-box li {
            font-size: 13.5px;
          }
          .modal-footer-action-bar {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .modal-heart-action {
            justify-content: center;
          }
          .modal-connect-btn {
            text-align: center;
          }
          .submission-modal-box {
            max-height: 94vh;
            border-radius: 16px;
          }
          .submission-modal-header {
            padding: 18px 16px 14px;
          }
          .submission-modal-title {
            font-size: 19px;
          }
          .submission-modal-subtitle {
            font-size: 13px;
          }
          .submission-form-container {
            padding: 16px 14px 22px;
          }
          .admin-review-alert {
            padding: 12px 14px;
            gap: 10px;
          }
          .admin-review-alert-title {
            font-size: 13px;
          }
          .admin-review-alert-desc {
            font-size: 12px;
          }
          .form-grid-2 {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .submission-footer-bar {
            flex-direction: column-reverse;
            align-items: stretch;
            gap: 12px;
          }
          .submission-actions-wrap {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;
          }
          .form-submit-btn {
            width: 100%;
            justify-content: center;
          }
          .form-cancel-btn {
            width: 100%;
            text-align: center;
            padding: 10px;
          }
          .submission-success-view {
            padding: 28px 16px;
          }
          .success-title {
            font-size: 20px;
          }
          .success-message {
            font-size: 13.5px;
          }
          .page-contact {
            padding: 50px 18px 36px !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            margin-bottom: 36px !important;
          }
          .contact-footer-bar {
            flex-direction: column !important;
            gap: 10px !important;
            text-align: center !important;
          }
        }
      `
        }}
      />
    </div>
  );
}
