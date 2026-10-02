"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { value: "250+", label: "Premium Listings", placement: "top-card" },
  { value: "42", label: "Global Locations", placement: "bottom-card" },
];

export default function HeroSequence() {
  const scrollContainerRef = useRef(null);
  const videoRef = useRef(null);

  // Autoplay on mount (in case the browser needs a nudge)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was blocked; will retry on user interaction if needed
        });
      }
    }
  }, []);

  // Scroll → zoom effect applied via CSS transform on the video itself
  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      const video = videoRef.current;
      if (!container || !video) return;

      const rect = container.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      const scrolledAmount = -rect.top;

      let scrollPercent = scrolledAmount / totalScrollableHeight;
      scrollPercent = Math.max(0, Math.min(1, scrollPercent));

      const zoomStartThreshold = 0.5;
      const maxZoomScale = 1.25;
      let currentScale = 1.0;

      if (scrollPercent > zoomStartThreshold) {
        const zoomFactor =
          (scrollPercent - zoomStartThreshold) / (1.0 - zoomStartThreshold);
        currentScale = 1.0 + (maxZoomScale - 1.0) * zoomFactor;
      }

      const render = () => {
        video.style.transform = `scale(${currentScale})`;
      };

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    const initialTimeout = setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(initialTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={scrollContainerRef} className="scroll-container">
      <div className="sticky-wrapper">
        <video
          ref={videoRef}
          className="hero-sequence-canvas"
          src="/cover.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="hero-overlay-ui">
          <div className="hero-content">
            <div className="hero-top-row">
              <div className="hero-quote-card">
                <div className="hero-quote-badge" aria-hidden="true">
                  <svg width="20" height="16" viewBox="0 0 24 18" fill="currentColor">
                    <path d="M0 10.5C0 4.7 3.8 0.5 9 0l1 2.2C6.8 3.1 5.3 5.4 5.3 7.5H9v10.5H0V10.5zm14 0c0-5.8 3.8-10 9-10.5l1 2.2c-3.2 0.9-4.7 3.2-4.7 5.3H23v10.5H14V10.5z" />
                  </svg>
                </div>
                <div className="hero-quote-text">
                  Clear <span className="text-red">Spans</span> up to <span className="text-red">38 meters</span>
                  <br />
                  gives you unobstructed space
                </div>
              </div>
            </div>
            <div className="premium-stats-wrapper">
              {STATS.map((s) => (
                <div
                  className={`premium-stat-box ${s.placement}`}
                  key={s.label}
                >
                  <div className="premium-stat-number">{s.value}</div>
                  <div className="premium-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="hero-bottom-row">
              <div className="hero-tagline">
                Where
                <br />
                Strength
                <br />
                Meets Form
              </div>
              <div style={{ pointerEvents: "auto" }}>
                <button
                  className="bracket-btn"
                  style={{ color: "var(--white)" }}
                >
                  Explore Systems <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}