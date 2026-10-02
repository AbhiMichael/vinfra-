"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import logo from "../assets/logo1.webp";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects & Gallery", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Materials", href: "/material" },
  // Temporarily hidden:
  // { label: "Blogs & News", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLightPage =
    pathname === "/" ||
    pathname === "/about" ||
    pathname?.startsWith("/about/") ||
    pathname === "/projects" ||
    pathname?.startsWith("/projects/") ||
    pathname === "/services" ||
    pathname?.startsWith("/services/") ||
    pathname === "/material" ||
    pathname?.startsWith("/material/") ||
    pathname === "/blogs" ||
    pathname?.startsWith("/blogs/") ||
    pathname === "/careers" ||
    pathname?.startsWith("/careers/") ||
    pathname === "/contact" ||
    pathname?.startsWith("/contact/") ||
    pathname?.startsWith("/regions");

  return (
    <div
      className={`global-nav-wrapper ${
        isLightPage ? "theme-light-nav" : ""
      }`}
    >
      <Link href="/" className="nav-logo" style={{ cursor: "pointer", zIndex: 102 }}>
        <img
          src={logo.src || logo}
          alt="Vinfra Projects Logo"
          className="nav-logo-icon"
        />
      </Link>

      <button
        className={`nav-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link ${isActive ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
