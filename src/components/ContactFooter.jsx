import Link from "next/link";
import Logo from "../assets/logo1.webp";

export default function ContactFooter() {
  return (
    <section className="page-contact">
      <div className="contact-grid">
        <div>
          <div className="contact-section-label">Get in Touch</div>
          <h2 className="contact-title">Let's build<br />something<br />enduring.</h2>
        </div>

        <div className="contact-links-col">
          <div className="contact-row-label">Quick Links</div>
          <ul className="footer-quick-links">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            {/* Temporarily hidden:
            <li>
              <Link href="/blogs">Blogs & News</Link>
            </li>
            */}
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="contact-detail-block">
          <div className="contact-row">
            <div className="contact-row-label">Phone</div>
            <div className="contact-row-value">
              <a href="tel:+919656813254">+91 9656813254</a>
              <a href="tel:+919074013254">+91 9074013254</a>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-row-label">Mail</div>
            <div className="contact-row-value">
              <a href="mailto:info@vinfraprojects.com">info@vinfraprojects.com</a>
              <a href="mailto:sales@vinfraprojects.com">sales@vinfraprojects.com</a>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-row-label">PO Box</div>
            <div className="contact-row-value">670571</div>
          </div>
          <div className="contact-row">
            <div className="contact-row-label">Address</div>
            <div className="contact-row-value">Mannamkund, Karuvanchal,<br />Kannur, Kerala</div>
          </div>
          <div className="contact-row">
            <div className="contact-row-label">Branches</div>
            <div className="contact-row-value">Ernakulam · Banglore · Chennai</div>
          </div>
        </div>

        <div className="contact-brand-col">
          <div className="nav-logo" style={{ fontSize: "20px", color: "#0F172A" }}>
            <img
              src={Logo.src}
              alt="Vinfra Projects"
              style={{ height: "32px", width: "auto" }}
            />
            <span style={{ color: "#0F172A", fontWeight: 800 }}>Vinfra Projects</span>
          </div>
          <p className="contact-brand-desc">
            A professional company providing Trusless Roofing all over in South India with years of experience in Trusless Roofing Industries. We emphasize on quality of products.
          </p>
          <div className="contact-social-section">
            <div className="social-follow-label">Follow us on</div>
            <div className="contact-social-row">
              <a
                href="https://www.facebook.com/vinfraprojects/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-fb"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
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
          <div className="iso-badge">ISO 9001:2015 Certified</div>
        </div>
      </div>

      <hr className="contact-divider" />

      <div className="contact-footer-bar">
        <div className="footer-copy">
          All rights reserved by Vinfra Projects
        </div>
        <div className="footer-copy">vinfraprojects.com</div>
      </div>
    </section>
  );
}