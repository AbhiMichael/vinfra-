"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Don't show in the first landing page video section
      // Show as soon as scrolling starts past the hero video header (scrollY > 70)
      if (window.scrollY > 70) {
        setShowWidget(true);
      } else {
        setShowWidget(false);
        setIsOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div
      className={`floating-contact-stack whatsapp-widget-container ${
        showWidget ? "floating-stack-visible" : "floating-stack-hidden"
      }`}
      aria-hidden={!showWidget}
    >
      {/* Blue Phone Call Floating Button */}
      <a
        href="tel:+919656813254"
        className="call-floating-btn call-floating-btn-blue"
        aria-label="Call Vinfra Projects at +91 9656813254"
        title="Call +91 9656813254"
        tabIndex={showWidget ? 0 : -1}
      >
        <span className="call-floating-icon-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.57 3.99c0-.55-.45-1-1-1H4.02c-.55 0-1 .45-1 1C3.02 13.28 10.73 21 20.01 21c.55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1z" />
          </svg>
        </span>
        <span className="call-floating-tooltip">
          Call: +91 9656813254
        </span>
      </a>

      {/* Real WhatsApp Chat Window or Floating Button */}
      {isOpen ? (
        <div className="whatsapp-chat-window">
          <div className="whatsapp-chat-header">
            <div className="whatsapp-header-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="#ffffff"
                aria-hidden="true"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91A9.87 9.87 0 0 0 12.04 2zm0 18.16c-1.45 0-2.88-.39-4.13-1.12l-.3-.18-3.07.81.82-2.99-.19-.31a8.17 8.17 0 0 1-1.25-4.46c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.25-8.26 8.25zm4.53-6.18c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.78.98-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.06 0 1.21.88 2.38 1.01 2.55.13.17 1.74 2.65 4.21 3.72 2.47 1.07 2.47.71 2.92.67.44-.05 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29z" />
              </svg>
              <span>WhatsApp</span>
            </div>
            <button className="whatsapp-close-btn" onClick={toggleChat} aria-label="Close chat">
              ✕
            </button>
          </div>

          <div className="whatsapp-chat-body">
            <div className="whatsapp-message">
              Hi 👋, welcome to <strong>Vinfra Trussless Roofings</strong> - Innovative & Durable Roofing Solutions
            </div>
            <div className="whatsapp-message">
              Can we help you?
            </div>
          </div>

          <div className="whatsapp-chat-footer">
            <a
              href="https://wa.me/919072135550"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-open-chat-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: '8px' }}
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Open Chat
            </a>
          </div>
        </div>
      ) : (
        <button
          className="whatsapp-floating-btn whatsapp-floating-btn-real"
          aria-label="Chat with us on WhatsApp"
          onClick={toggleChat}
          title="Chat on WhatsApp"
          tabIndex={showWidget ? 0 : -1}
        >
          <span className="whatsapp-floating-icon-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91A9.87 9.87 0 0 0 12.04 2zm0 18.16c-1.45 0-2.88-.39-4.13-1.12l-.3-.18-3.07.81.82-2.99-.19-.31a8.17 8.17 0 0 1-1.25-4.46c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.25-8.26 8.25zm4.53-6.18c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.78.98-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.06 0 1.21.88 2.38 1.01 2.55.13.17 1.74 2.65 4.21 3.72 2.47 1.07 2.47.71 2.92.67.44-.05 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29z" />
            </svg>
          </span>
          <span className="whatsapp-floating-tooltip">
            WhatsApp Us
          </span>
        </button>
      )}
    </div>
  );
}
