"use client";

import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const COUNTRY_CODES = [
  { code: "+91", short: "IN", country: "India" },
  { code: "+971", short: "AE", country: "UAE" },
  { code: "+966", short: "SA", country: "Saudi Arabia" },
  { code: "+974", short: "QA", country: "Qatar" },
  { code: "+968", short: "OM", country: "Oman" },
  { code: "+965", short: "KW", country: "Kuwait" },
  { code: "+973", short: "BH", country: "Bahrain" },
  { code: "+1", short: "US", country: "USA / Canada" },
  { code: "+44", short: "UK", country: "UK" },
  { code: "+61", short: "AU", country: "Australia" },
  { code: "+65", short: "SG", country: "Singapore" },
  { code: "+60", short: "MY", country: "Malaysia" },
  { code: "+49", short: "DE", country: "Germany" },
  { code: "+33", short: "FR", country: "France" },
  { code: "+39", short: "IT", country: "Italy" },
  { code: "+31", short: "NL", country: "Netherlands" },
  { code: "+41", short: "CH", country: "Switzerland" },
  { code: "+64", short: "NZ", country: "New Zealand" },
  { code: "+27", short: "ZA", country: "South Africa" },
  { code: "+353", short: "IE", country: "Ireland" },
  { code: "+94", short: "LK", country: "Sri Lanka" },
  { code: "+977", short: "NP", country: "Nepal" },
  { code: "+880", short: "BD", country: "Bangladesh" },
  { code: "+63", short: "PH", country: "Philippines" },
  { code: "+62", short: "ID", country: "Indonesia" },
  { code: "+81", short: "JP", country: "Japan" },
  { code: "+86", short: "CN", country: "China" },
];

export default function HomeLeadModal({ isOpen, onClose }) {
  const [countryCode, setCountryCode] = useState("+91");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  // Freeze background page scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const fullPhoneNumber = `${countryCode} ${form.phone}`.trim();

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3d195390-a922-4d99-938f-8ee87f26b1c7",
          from_name: "Vinfra Homepage Popup Form",
          subject: `New Lead: ${form.name} (${form.location || fullPhoneNumber})`,
          ...form,
          phone: fullPhoneNumber,
          country_code: countryCode,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus({ loading: false, success: true, error: null });
        setForm({ name: "", phone: "", location: "", email: "", message: "" });
        setCountryCode("+91");

        setTimeout(() => {
          onClose();
        }, 3500);
      } else {
        setStatus({
          loading: false,
          success: false,
          error: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Network error. Please try again later.",
      });
    }
  };

  return (
    <div
      className="lead-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="lead-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button at Top */}
        <button
          type="button"
          className="lead-modal-close"
          onClick={onClose}
          aria-label="Close inquiry form"
          title="Close (Esc)"
        >
          <IoClose size={22} />
        </button>

        {/* Modal Header */}
        <div className="lead-modal-header">
          <div className="lead-badge">VINFRA PROJECTS • Get a Quote</div>
          <h2 id="modal-title" className="lead-title">
            Plan Your Roofing Project With Us
          </h2>
          <p className="lead-subtitle">
            Connect directly with our engineering team for free structural design insights, span calculations, and project estimates.
          </p>
        </div>

        {/* Success or Error Feedback */}
        {status.success && (
          <div className="lead-feedback success">
            ✓ <strong>Inquiry Submitted!</strong> Thank you, our engineering specialists will get in touch with you shortly.
          </div>
        )}
        {status.error && (
          <div className="lead-feedback error">
            ⚠ {status.error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="lead-modal-form">
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
          />

          <div className="modal-field">
            <label className="modal-label">Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name here"
              value={form.name}
              onChange={handleChange}
              className="modal-input"
              required
            />
          </div>

          <div className="modal-field-grid">
            <div className="modal-field">
              <label className="modal-label">Phone Number *</label>
              <div className="modal-phone-group">
                <select
                  name="countryCode"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="modal-country-select"
                  aria-label="Select Country Code"
                >
                  {COUNTRY_CODES.map((item) => (
                    <option
                      key={`${item.code}-${item.short}`}
                      value={item.code}
                      title={`${item.country} (${item.code})`}
                    >
                      {item.short} {item.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className="modal-input modal-phone-input"
                  required
                />
              </div>
            </div>

            <div className="modal-field">
              <label className="modal-label">Project / Site Location *</label>
              <input
                type="text"
                name="location"
                placeholder="Site Location"
                value={form.location}
                onChange={handleChange}
                className="modal-input"
                required
              />
            </div>
          </div>

          <div className="modal-field">
            <label className="modal-label">
              Email Address <span className="modal-optional">(Optional)</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="your email address"
              value={form.email}
              onChange={handleChange}
              className="modal-input"
            />
          </div>

          <div className="modal-field">
            <label className="modal-label">Project Details / Message *</label>
            <textarea
              name="message"
              placeholder="Brief details about your building type, span requirement, or estimated roof area..."
              value={form.message}
              onChange={handleChange}
              className="modal-textarea"
              rows={3}
              required
            />
          </div>

          <button
            type="submit"
            className="modal-submit-btn"
            disabled={status.loading}
          >
            {status.loading ? "Submitting Inquiry..." : "Get Free Project Consultation →"}
          </button>
        </form>
      </div>

      <style>{`
        .lead-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .lead-modal-card {
          position: relative;
          background: #FFFFFF;
          border-radius: 16px;
          width: 100%;
          max-width: 580px;
          max-height: 92vh;
          overflow-y: auto;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(226, 232, 240, 0.9);
          padding: 32px 32px 28px;
          animation: modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          font-family: var(--font-body, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
        }

        /* Custom scrollbar for card */
        .lead-modal-card::-webkit-scrollbar {
          width: 6px;
        }
        .lead-modal-card::-webkit-scrollbar-thumb {
          background-color: #CBD5E1;
          border-radius: 4px;
        }

        .lead-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
          z-index: 10;
        }

        .lead-modal-close:hover {
          background: #E2E8F0;
          color: #0F172A;
          transform: scale(1.08);
        }

        .lead-modal-header {
          margin-bottom: 20px;
          padding-right: 32px;
        }

        .lead-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #B91C1C;
          background: #FEF2F2;
          border: 1px solid #FCA5A5;
          padding: 4px 10px;
          border-radius: 20px;
          margin-bottom: 10px;
        }

        .lead-title {
          font-family: var(--font-display, inherit);
          font-size: 22px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
          margin: 0 0 6px;
        }

        .lead-subtitle {
          font-size: 13.5px;
          color: #64748B;
          line-height: 1.45;
          margin: 0;
        }

        .lead-feedback {
          padding: 12px 14px;
          border-radius: 8px;
          font-size: 13.5px;
          line-height: 1.4;
          margin-bottom: 18px;
        }

        .lead-feedback.success {
          background-color: #ECFDF5;
          color: #065F46;
          border: 1px solid #A7F3D0;
        }

        .lead-feedback.error {
          background-color: #FEF2F2;
          color: #991B1B;
          border: 1px solid #FECACA;
        }

        .lead-modal-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .modal-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .modal-field-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 14px;
        }

        @media (max-width: 580px) {
          .modal-field-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .lead-modal-card {
            padding: 24px 20px 22px;
          }
          .lead-title {
            font-size: 19px;
          }
        }

        .modal-label {
          font-size: 12.5px;
          font-weight: 600;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .modal-optional {
          text-transform: none;
          font-weight: 400;
          color: #94A3B8;
        }

        .modal-input,
        .modal-textarea {
          width: 100%;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 14px;
          color: #0F172A;
          outline: none;
          transition: all 0.2s ease;
          font-family: inherit;
          box-sizing: border-box;
        }

        .modal-input:focus,
        .modal-textarea:focus {
          border-color: #B91C1C;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.12);
        }

        .modal-phone-group {
          display: flex;
          align-items: stretch;
          gap: 8px;
          width: 100%;
        }

        .modal-country-select {
          width: 82px;
          flex-shrink: 0;
          background: #F1F5F9;
          border: 1.5px solid #E2E8F0;
          border-radius: 8px;
          padding: 10px 4px 10px 8px;
          font-size: 13px;
          font-weight: 600;
          color: #0F172A;
          cursor: pointer;
          outline: none;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .modal-country-select:focus {
          border-color: #B91C1C;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.12);
        }

        .modal-phone-input {
          flex: 1;
          min-width: 0;
        }

        .modal-textarea {
          resize: vertical;
          min-height: 78px;
        }

        .modal-submit-btn {
          margin-top: 6px;
          width: 100%;
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          border-radius: 8px;
          padding: 12px 20px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(185, 28, 28, 0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .modal-submit-btn:hover:not(:disabled) {
          background: #991B1B;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(185, 28, 28, 0.35);
        }

        .modal-submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .modal-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
