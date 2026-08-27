"use client";

import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { HiBuildingOffice } from "react-icons/hi2";

export default function Contact() {
  // 1. Setup form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 2. Setup status state (loading, success, error)
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  // Helper to handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3d195390-a922-4d99-938f-8ee87f26b1c7", // Your new access key
          ...form,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus({ loading: false, success: true, error: null });
        // Clear form on success
        setForm({ name: "", email: "", message: "" });

        // Hide success message after 5 seconds
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
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page">
      <style>{`
        .contact-page {
          background: var(--dark);
          min-height: 100vh;
          padding-top: 100px;
        }

        /* Single container */
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 48px;
        }

        /* Unified card */
        .contact-card {
          background: rgba(233,238,242,0.02);
          border: 1px solid var(--panel-border);
          border-radius: 32px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Image section inside the card */
        .contact-card-image {
          width: 100%;
          height: 300px;
          overflow: hidden;
          position: relative;
        }
        .contact-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .contact-card-image:hover img {
          transform: scale(1.02);
        }
        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          padding: 40px 40px 20px;
        }
        .image-overlay h2 {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 700;
          color: var(--white);
          margin: 0;
        }

        /* Content section inside the card */
        .contact-card-content {
          padding: 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        /* Left side of content – details */
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .contact-badge {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--orange);
          margin-bottom: 8px;
        }
        .contact-title {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 24px;
          line-height: 1.2;
        }
        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .detail-icon {
          font-size: 24px;
          color: var(--orange);
          min-width: 32px;
        }
        .detail-content h4 {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 4px;
        }
        .detail-content p {
          font-size: 14px;
          color: var(--steel-light);
          line-height: 1.5;
        }
        .branch-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }
        .branch-tag {
          background: rgba(138,15,15,0.1);
          color: var(--orange);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        /* Right side of content – form */
        .contact-form {
          border-left: 1px solid var(--panel-border);
          padding-left: 40px;
        }
        .form-title {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 24px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          background: rgba(233,238,242,0.05);
          border: 1px solid var(--panel-border);
          border-radius: 12px;
          padding: 14px 18px;
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--white);
          transition: all 0.3s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--orange);
          background: rgba(138,15,15,0.05);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }
        .submit-btn {
          background: var(--orange);
          color: var(--white);
          border: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(138,15,15,0.3);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .social-links {
          margin-top: 24px;
          text-align: center;
        }
        .social-links a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--steel-light);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
        }
        .social-links a:hover {
          color: var(--orange);
        }
        
        .form-message {
          margin-bottom: 20px;
          padding: 12px;
          border-radius: 8px;
          font-size: 14px;
          text-align: center;
        }
        .form-message.success {
          background: rgba(76, 175, 80, 0.1);
          color: #4CAF50;
          border: 1px solid #4CAF50;
        }
        .form-message.error {
          background: rgba(244, 67, 54, 0.1);
          color: #f44336;
          border: 1px solid #f44336;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-container {
            padding: 40px 24px;
          }
          .contact-card-content {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 32px;
          }
          .contact-form {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid var(--panel-border);
            padding-top: 32px;
          }
          .contact-title {
            font-size: 26px;
          }
          .contact-card-image {
            height: 260px;
          }
        }
        @media (max-width: 768px) {
          .contact-container { padding: 20px 16px; }
          .contact-card-content { padding: 24px 20px; gap: 28px; }
          .contact-title { font-size: 22px; }
          .image-overlay h2 { font-size: 20px; }
          .image-overlay { padding: 30px 24px 16px; }
          .form-title { font-size: 20px; margin-bottom: 16px; }
          .detail-item { gap: 12px; }
          .detail-icon { font-size: 20px; min-width: 28px; }
          .detail-content h4 { font-size: 14px; }
          .detail-content p { font-size: 13px; }
          .form-group input, .form-group textarea { padding: 12px 14px; font-size: 14px; }
          .submit-btn { padding: 14px 20px; font-size: 14px; }
          .branch-tag { font-size: 11px; padding: 4px 10px; }
          .contact-card-image { height: 220px; }
        }
        @media (max-width: 480px) {
          .contact-card-content { padding: 16px; gap: 20px; }
          .contact-container { padding: 12px; }
          .contact-card { border-radius: 20px; }
          .contact-title { font-size: 20px; }
          .form-group input, .form-group textarea { padding: 10px 12px; font-size: 13px; }
          .contact-card-image { height: 180px; }
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

      <div className="contact-container reveal-group">
        <div className="contact-card">
          {/* Image section at the top */}
          <div className="contact-card-image">
            <img src="/contact.webp" alt="Vinfra roofing project" />
            <div className="image-overlay">
              <h2>Get In Touch With Us!</h2>
            </div>
          </div>

          {/* Content section below */}
          <div className="contact-card-content">
            {/* Left side – contact details */}
            <div className="contact-details">
              <div>
                <div className="contact-badge">CONTACT INFO</div>
                <h3 className="contact-title">
                  Let's talk about your next project
                </h3>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><FaPhone /></div>
                <div className="detail-content">
                  <h4>Phone</h4>
                  <p>+91 90721 35550</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><MdEmail /></div>
                <div className="detail-content">
                  <h4>Email</h4>
                  <p>info@vinfraprojects.com</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><IoLocationSharp /></div>
                <div className="detail-content">
                  <h4>Address</h4>
                  <p>Mannamkund, Karuvancal, Kannur, Kerala — 670571</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><HiBuildingOffice /></div>
                <div className="detail-content">
                  <h4>Branch Office</h4>
                  <div className="branch-list">
                    <span className="branch-tag">Ernakulam</span>
                    <span className="branch-tag">Bangalore</span>
                    <span className="branch-tag">Chennai</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side – form */}
            <div className="contact-form">
              <h3 className="form-title">Send a message</h3>

              {/* Added Feedback Messages */}
              {status.success && (
                <div className="form-message success">
                  Your message has been sent successfully!
                </div>
              )}
              {status.error && (
                <div className="form-message error">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Honeypot field to prevent spam */}
                <input type="checkbox" name="botcheck" style={{ display: "none" }} />

                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status.loading}
                >
                  {status.loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
              <div className="social-links">
                <a
                  href="https://linkedin.com/in/vinfra-projects-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/*  LinkedIn / Vinfra Projects */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}