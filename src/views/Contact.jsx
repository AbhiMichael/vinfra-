"use client";

import { useEffect, useState } from "react";
import { FaPhone, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { HiBuildingOffice } from "react-icons/hi2";
import ContactFooter from "../components/ContactFooter";

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

export default function Contact() {
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
          from_name: "Vinfra Website Contact Form",
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
          setStatus((prev) => ({ ...prev, success: false }));
        }, 5000);
      } else {
        setStatus({
          loading: false,
          success: false,
          error: result.message || "Something went wrong.",
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
      .forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("view-visible");
        }
        observer.observe(el);
      });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* Premium Light Theme Contact Page */
        .contact-light-page {
          background-color: #F8FAFC;
          color: #0F172A;
          min-height: 100vh;
          padding-top: 110px;
        }

        /* Unified Container */
        .contact-main-wrapper {
          max-width: 1240px;
          margin: 0 auto;
          padding: 24px 48px 80px 48px;
        }

        .contact-master-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.08);
          display: flex;
          flex-direction: column;
        }

        /* Feature Banner Video Inside Card */
        .contact-banner-image {
          width: 100%;
          height: 400px;
          position: relative;
          overflow: hidden;
          background: #0F172A;
        }

        .contact-banner-image img,
        .contact-banner-image video,
        .contact-banner-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .contact-master-card:hover .contact-banner-image img,
        .contact-master-card:hover .contact-banner-image video {
          transform: scale(1.03);
        }

        .banner-gradient-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%);
          display: flex;
          align-items: flex-end;
          padding: 36px 48px;
        }

        .banner-gradient-overlay h2 {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.02em;
          margin: 0;
        }

        /* Content Grid */
        .contact-content-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          padding: 48px 52px;
        }

        /* Left Column: Direct Info */
        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .info-header-tag {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: #B91C1C;
          margin-bottom: 8px;
          display: block;
        }

        .info-header-title {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .info-items-stack {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .info-card-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 18px 20px;
          transition: all 0.25s ease;
        }

        .info-card-item:hover {
          background: #FFFFFF;
          border-color: #CBD5E1;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.05);
        }

        .info-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FEF2F2;
          border: 1px solid #FECACA;
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .info-text-group h4 {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .info-text-group p,
        .info-text-group a {
          font-size: 14px;
          color: #475569;
          line-height: 1.5;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .info-text-group a:hover {
          color: #B91C1C;
        }

        .branches-pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }

        .branch-badge {
          background: #FFFFFF;
          color: #B91C1C;
          border: 1px solid #FECACA;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }

        /* Right Column: Interactive Form */
        .contact-form-col {
          border-left: 1px solid #E2E8F0;
          padding-left: 48px;
          display: flex;
          flex-direction: column;
        }

        .form-heading {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 640px) {
          .form-grid-2 {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        .form-field {
          margin-bottom: 18px;
        }

        .form-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #475569;
          margin-bottom: 6px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          background: #F8FAFC;
          border: 1px solid #CBD5E1;
          border-radius: 12px;
          padding: 13px 18px;
          font-family: var(--font-body);
          font-size: 14px;
          color: #0F172A;
          transition: all 0.25s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          background: #FFFFFF;
          border-color: #B91C1C;
          box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.12);
        }

        /* Combined Phone Input with Country Code */
        .phone-input-group {
          display: flex;
          align-items: stretch;
          background: #F8FAFC;
          border: 1px solid #CBD5E1;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.25s ease;
        }

        .phone-input-group:focus-within {
          background: #FFFFFF;
          border-color: #B91C1C;
          box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.12);
        }

        .phone-country-select {
          background: #F1F5F9;
          border: none;
          border-right: 1px solid #CBD5E1;
          padding: 13px 4px 13px 10px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          color: #0F172A;
          cursor: pointer;
          outline: none;
          width: 82px;
          min-width: 82px;
          max-width: 86px;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }

        .phone-country-select:hover {
          background: #E2E8F0;
        }

        .phone-number-input {
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          background: transparent !important;
          flex: 1;
          min-width: 0;
          padding: 13px 14px !important;
          font-size: 14px;
        }

        .phone-number-input:focus {
          box-shadow: none !important;
          border-color: transparent !important;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-action-btn {
          background: #B91C1C;
          color: #FFFFFF;
          border: none;
          padding: 15px 32px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          width: 100%;
          box-shadow: 0 8px 20px -4px rgba(185, 28, 28, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .submit-action-btn:hover:not(:disabled) {
          background: #991B1B;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -4px rgba(185, 28, 28, 0.5);
        }

        .submit-action-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .form-feedback-alert {
          margin-bottom: 20px;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
        }

        .form-feedback-alert.success {
          background: #ECFDF5;
          color: #065F46;
          border: 1px solid #A7F3D0;
        }

        .form-feedback-alert.error {
          background: #FEF2F2;
          color: #991B1B;
          border: 1px solid #FECACA;
        }

        .contact-form-social-connect {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .contact-social-label {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #64748B;
        }

        .contact-social-btns {
          display: flex;
          align-items: center;
          gap: 10px;
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

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-content-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 36px 32px;
          }
          .contact-form-col {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid #E2E8F0;
            padding-top: 36px;
          }
        }

        @media (max-width: 768px) {
          .contact-light-page {
            padding-top: 80px;
          }
          .contact-hero {
            padding: 48px 20px 32px 20px;
          }
          .contact-main-wrapper {
            padding: 32px 16px 60px 16px;
          }
          .contact-banner-image {
            height: 250px;
          }
          .banner-gradient-overlay {
            padding: 24px 20px;
          }
          .banner-gradient-overlay h2 {
            font-size: 22px;
          }
          .contact-content-grid {
            padding: 28px 20px;
          }
        }
      `}</style>

      <div className="contact-light-page">
        {/* Main Card */}
        <div className="contact-main-wrapper">
          <div className="contact-master-card">
            {/* Top Video Banner */}
            <div className="contact-banner-image">
              <video
                src="/about.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="contact-banner-video"
              />
              <div className="banner-gradient-overlay">
                <h2>Get In Touch With Us!</h2>
              </div>
            </div>

            {/* Content Split */}
            <div className="contact-content-grid">
              {/* Left Column: Details */}
              <div className="contact-info-col">
                <div>
                  <span className="info-header-tag">DIRECT ASSISTANCE</span>
                  <h3 className="info-header-title">
                    Let's talk about your next project
                  </h3>
                </div>

                <div className="info-items-stack">
                  <div className="info-card-item">
                    <div className="info-icon-badge">
                      <FaPhone />
                    </div>
                    <div className="info-text-group">
                      <h4>Phone</h4>
                      <p>
                        <a href="tel:+919072135550">+91 90721 35550</a>
                        <br />
                        <a href="tel:+919656813254">+91 96568 13254</a>
                      </p>
                    </div>
                  </div>

                  <div className="info-card-item">
                    <div className="info-icon-badge">
                      <MdEmail />
                    </div>
                    <div className="info-text-group">
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:info@vinfraprojects.com">
                          info@vinfraprojects.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="info-card-item">
                    <div className="info-icon-badge">
                      <IoLocationSharp />
                    </div>
                    <div className="info-text-group">
                      <h4>Head Office & Address</h4>
                      <p>Mannamkund, Karuvancal, Kannur, Kerala — 670571</p>
                    </div>
                  </div>

                  <div className="info-card-item">
                    <div className="info-icon-badge">
                      <HiBuildingOffice />
                    </div>
                    <div className="info-text-group">
                      <h4>Regional Branches</h4>
                      <div className="branches-pill-row">
                        <span className="branch-badge">Ernakulam</span>
                        <span className="branch-badge">Bangalore</span>
                        <span className="branch-badge">Chennai</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="contact-form-col">
                <h3 className="form-heading">Send Us a Message</h3>

                {status.success && (
                  <div className="form-feedback-alert success">
                    ✓ Your message has been sent successfully! Our engineers will contact you shortly.
                  </div>
                )}
                {status.error && (
                  <div className="form-feedback-alert error">
                    ⚠ {status.error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: "none" }}
                  />

                  <div className="form-field">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label className="form-label">Phone Number *</label>
                      <div className="phone-input-group">
                        <select
                          name="countryCode"
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="phone-country-select"
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
                          className="form-input phone-number-input"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label className="form-label">Project / Site Location *</label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Site location"
                        value={form.location}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">
                      Email Address <span style={{ textTransform: "none", fontWeight: 400, color: "#64748B" }}>(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">Project Details / Message *</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project, approximate area, and roofing requirements..."
                      value={form.message}
                      onChange={handleChange}
                      className="form-textarea"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit-action-btn"
                    disabled={status.loading}
                  >
                    {status.loading ? "Sending..." : "Send Message →"}
                  </button>
                </form>

                <div className="contact-form-social-connect">
                  <span className="contact-social-label">Follow us on</span>
                  <div className="contact-social-btns">
                    <a
                      href="https://www.facebook.com/vinfraprojects/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn social-fb"
                      title="Facebook"
                      aria-label="Facebook"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/vinfraprojects/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn social-ig"
                      title="Instagram"
                      aria-label="Instagram"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/919072135550"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn social-wa"
                      title="WhatsApp"
                      aria-label="WhatsApp"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/vinfra-projects/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn social-li"
                      title="LinkedIn"
                      aria-label="LinkedIn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/@vinfraprojects3107"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn social-yt"
                      title="YouTube"
                      aria-label="YouTube"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer */}
        <ContactFooter />
      </div>
    </>
  );
}