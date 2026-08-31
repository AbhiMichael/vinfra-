"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

// Import local assets
import ProjectOne from "../assets/img1.webp";
import ProjectTwo from "../assets/img2.webp";
import ProjectThree from "../assets/img3.webp";
import ProjectFour from "../assets/img4.webp";
import MainFeature from "../assets/img5.webp";
import Logo from "../assets/logo1.webp";

const GLOBAL_STYLES = `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --white: #E9EEF2;
          --steel-light: #A4B3B6;
          --steel-bg: #879699;
          --orange: #8a0f0f;
          --dark: #0F1418;
          --panel-border: rgba(233, 238, 242, 0.15);
          --font-display: 'Space Grotesk', sans-serif;
          --font-body: 'Inter', sans-serif;
        }

        body { 
          max-width: 100%;
          overflow-x: hidden; 
          background: #000000; 
          font-family: var(--font-body);
          color: var(--white);
        }

        .global-nav-wrapper {
          position: fixed;
          top: 0; left: 0; right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 48px;
          z-index: 100;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--white);
          text-transform: uppercase;
        }

  


        .nav-links {
          display: flex;
          gap: 6px;
          background: rgba(15, 20, 24, 0.4);
          border: 1px solid var(--panel-border);
          border-radius: 50px;
          padding: 6px;
          backdrop-filter: blur(20px);
        }

        .nav-link {
          padding: 10px 22px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          color: rgba(233,238,242,0.6);
          border: none;
          background: transparent;
          text-decoration: none;
        }
        .nav-link:hover { color: var(--white); }
        .nav-link.active { background: var(--white); color: var(--dark); font-weight: 600; }

        .scroll-container {
          position: relative;
          height: calc(5500px + 100vh); /* 1100 frames × 5px + 100vh buffer so sticky holds through last frame */
          background: #000000;
          width: 100%;
        }

        .sticky-wrapper {
          position: sticky;
          top: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000000;
        }

        canvas.hero-sequence-canvas {
          width: 100%;
          height: 100vh;
          display: block;
          object-fit: cover;
          background: #000;
        }

        .hero-final-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
          z-index: 1;
        }

        .hero-overlay-ui { position: absolute; inset: 0; z-index: 2; pointer-events: none; }
        
        .hero-overlay-ui::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(
            to bottom, 
            rgba(0, 0, 0, 0) 0%, 
            rgba(0,0,0,0) 60%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .hero-content {
          position: absolute; inset: 0; display: flex; flex-direction: column;
          justify-content: space-between; padding: 140px 64px 80px 64px; z-index: 5;
        }

        .hero-top-row { display: flex; justify-content: space-between; align-items: flex-start; }
        
        .hero-eyebrow {
          font-size: 14px; font-weight: 400; color: var(--steel-light);
          line-height: 1.6; max-width: 280px; opacity: 2; transform: translateY(15px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }
        .loaded .hero-eyebrow { opacity: 2; transform: translateY(0); }

        .premium-stats-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: absolute;
          right: 48px;
          bottom: 130px; 
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s;
          width: 240px; 
        }
        .loaded .premium-stats-wrapper { opacity: 1; transform: translateY(0); }

        .premium-stat-box {
          background: rgba(255, 255, 255, 0);
          border: 1px solid rgba(255, 255, 255, 0);
          border-radius: 12px;
          padding: 5px 20px; 
          width: 180px; 

          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        
        .premium-stat-box.top-card { align-self: flex-end; }
        .premium-stat-box.bottom-card { align-self: flex-start; }
        .premium-stat-box:hover { border-color: rgba(255, 255, 255, 0); }

        .premium-stat-number {
          font-family: var(--font-body);
          font-size: 28px; 
          font-weight: 700;
          line-height: 1.1;
          color: var(--white);
          letter-spacing: -0.01em;
        }

        .premium-stat-label {
          font-family: var(--font-body);
          font-size: 11px; 
          color: rgba(233, 238, 242, 0.6);
          margin-top: 3px;
          letter-spacing: 0.01em;
        }

        .hero-bottom-row { display: flex; justify-content: space-between; align-items: flex-end; }
        
        .hero-tagline {
          font-family: var(--font-display); font-size: clamp(36px, 5vw, 68px);
          font-weight: 500; line-height: 0.95; text-transform: uppercase; letter-spacing: -0.03em;
          opacity: 0; transform: translateY(30px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
          color: var(--white);
          text-shadow: 0 4px 24px rgba(0,0,0,0.3);
        }
        .loaded .hero-tagline { opacity: 1; transform: translateY(0); }

        .reveal-group { opacity: 0; transform: translateY(40px); transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease; }
        .reveal-group.view-visible { opacity: 1; transform: translateY(0); }

        .bracket-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: transparent; color: inherit; border: none;
          font-family: var(--font-display); font-size: 16px; cursor: pointer; padding: 4px 0;
        }
        .bracket-btn::before { content: "["; color: rgba(233,238,242,0.4); transition: transform 0.3s; }
        .bracket-btn::after { content: "]"; color: rgba(233,238,242,0.4); transition: transform 0.3s; }
        .bracket-btn:hover::before { transform: translateX(-4px); }
        .bracket-btn:hover::after { transform: translateX(4px); }
        .bracket-btn .arrow { transition: transform 0.3s ease; }
        .bracket-btn:hover .arrow { transform: translateX(4px); color: var(--orange); }

        .page-evolution {
          background: var(--steel-bg); color: var(--dark);
          padding: 80px 48px 120px 48px; min-height: 100vh;
          display: flex; flex-direction: column; justify-content: center;
          position: relative; z-index: 5;
        }
        .evolution-header { text-align: center; max-width: 1000px; margin: 0 auto 80px auto; }
        .evolution-title { font-family: var(--font-display); font-size: clamp(50px, 7vw, 96px); font-weight: 800; text-transform: uppercase; line-height: 1.05; letter-spacing: -0.02em; margin-bottom: 24px; max-width: 900px; margin-inline: auto; }
        
        .evolution-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(15,20,24,0.11);
          border-top: 1px solid rgba(15,20,24,0.15);
          border-bottom: 1px solid rgba(15,20,24,0.15);
          margin-top: 40px;
          width: 100%;
        }
        .evo-card {
          background: var(--steel-bg);
          padding: clamp(18px, 2.2vw, 32px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: auto;
          min-height: 0;
          aspect-ratio: 1 / 1;
          position: relative;
          overflow: hidden;
        }
        .evo-card.image-box {
          padding: 0;
          overflow: hidden;
          height: auto;
          min-height: 0;
          aspect-ratio: 1 / 1;
        }
        .evo-card.image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .evo-card.image-box:hover img { transform: scale(1.05); }
        .evo-card.image-box video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 70% center;
          display: block;
        }
        
        .evo-card-orange-dot { position: absolute; top: -4px; left: -4px; width: 8px; height: 8px; background: var(--orange); border-radius: 50%; opacity: 0; transition: opacity 0.3s; }
        .evo-card:hover .evo-card-orange-dot { opacity: 1; }
        
        .evo-card h3 {
          font-family: var(--font-display);
          font-size: clamp(16px, 1.8vw, 24px);
          font-weight: 600;
          margin-bottom: clamp(6px, 1vw, 12px);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .evo-card p {
          font-size: clamp(11px, 1.05vw, 14px);
          line-height: 1.5;
          color: rgba(15,20,24,0.7);
        }
        .evo-icon {
          width: clamp(24px, 2vw, 32px);
          height: clamp(24px, 2vw, 32px);
          opacity: 0.8;
          margin-top: auto;
          stroke-width: 1.2;
        }
        
        .evo-flip-container {
          perspective: 1000px;
          height: auto;
          min-height: 0;
          aspect-ratio: 1 / 1;
          background: transparent;
        }
        .evo-flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .evo-flip-container:hover .evo-flip-inner {
          transform: rotateY(180deg);
        }
        .evo-flip-front, .evo-flip-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          overflow: hidden;
        }
        .evo-flip-front img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .evo-flip-back {
          transform: rotateY(180deg);
        }

        @media (max-width: 1100px) {
          .evolution-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .evo-flip-container, .evo-card.image-box, .evo-card {
            aspect-ratio: 1 / 1;
          }
        }
        .page-stories { 
          background: var(--orange); 
          color: var(--white); 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          min-height: 100vh;
          position: relative;
        }
        .story-hero-pane { padding: 140px 64px 120px 64px; display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid rgba(255,255,255,0.15); position: relative; z-index: 5; }
        .story-hero-pane h2 { font-family: var(--font-display); font-size: clamp(48px, 6vw, 96px); font-weight: 500; line-height: 0.95; letter-spacing: -0.03em; }
        .story-hero-pane p { font-size: 18px; line-height: 1.6; max-width: 440px; color: rgba(255,255,255,0.85); margin-top: 40px; }
        
        .story-split-pane { display: grid; grid-template-rows: 1fr 1fr; }
        .report-block { padding: 140px 64px 64px 64px; display: flex; flex-direction: column; justify-content: space-between; background: #E2E7EC; color: var(--dark); }
        .report-meta { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(15,20,24,0.5); }
        .report-title { font-family: var(--font-display); font-size: 32px; font-weight: 500; line-height: 1.2; margin: 24px 0; max-width: 500px; }
        .report-date { font-size: 14px; color: rgba(15,20,24,0.5); }
        .story-image-block { overflow: hidden; position: relative; background: #0f1418; }
        .story-image-block img { width: 100%; height: 100%; object-fit: contain; }

        .page-applications { background: var(--dark); padding: 140px 48px; min-height: 100vh; position: relative; }
        .app-header { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid var(--panel-border); padding-bottom: 40px; margin-bottom: 60px; position: relative; z-index: 5; }
        .app-header h2 { font-family: var(--font-display); font-size: 48px; font-weight: 400; letter-spacing: -0.02em; }
        .app-header h2 span { color: var(--steel-light); font-weight: 300; }
        
        .app-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; position: relative; z-index: 5; }
        .app-card { background: rgba(233,238,242,0.02); border: 1px solid var(--panel-border); border-radius: 1px; overflow: hidden; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .app-card:hover { border-color: var(--white); transform: translateY(-4px); background: rgba(233,238,242,0.04); }
        .app-img-wrapper { height: 260px; overflow: hidden; position: relative; background: #161d22; }
        .app-img-wrapper img { width: 100%; height: 100%; object-fit: cover; opacity: 0.85; transition: transform 0.6s ease; }
        .app-card:hover .app-img-wrapper img { transform: scale(1.04); opacity: 1; }
        .app-card-content { padding: 24px 20px; text-align: center; }
        .app-card-tag { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--orange); margin-bottom: 12px; }
        .app-card h4 { font-family: var(--font-display); font-size: 20px; font-weight: 500; margin-bottom: 0; }
        .app-card p { font-size: 14px; color: var(--steel-light); line-height: 1.6; }

        .page-services {
          background: var(--dark);
          padding: 140px 48px;
          position: relative;
          z-index: 5;
          border-top: 1px solid var(--panel-border);
        }

        .services-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 80px auto;
        }

        .services-eyebrow {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--orange);
          margin-bottom: 20px;
        }

        .services-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.05;
          color: var(--white);
          margin-bottom: 28px;
        }

        .services-body {
          font-size: 15px;
          line-height: 1.7;
          color: var(--steel-light);
          margin-bottom: 16px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--panel-border);
          border: 1px solid var(--panel-border);
          border-radius: 8px;
          overflow: hidden;
        }

        .service-cell {
          background: rgba(233,238,242,0.02);
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          transition: background 0.3s ease;
          cursor: default;
          text-align: center;
        }

          .service-cell:hover {
          background: rgba(138, 15, 15, 0.06);
        }

        .service-icon-ring {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1px solid rgba(138,15,15,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          transition: border-color 0.3s, background 0.3s;
        }

        .service-icon-ring svg {
          width: 26px;
          height: 26px;
        }

        .service-cell:hover .service-icon-ring {
          border-color: var(--orange);
          background: rgba(138,15,15,0.1);
        }

        .service-name {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 500;
          color: var(--white);
          letter-spacing: -0.01em;
        }

        .page-mission {
          background: var(--steel-bg);
          color: var(--dark);
          padding: 140px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          min-height: 100vh;
          position: relative;
          z-index: 5;
        }

        .mission-eyebrow {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--orange);
          margin-bottom: 24px;
          display: inline-block;
          border-bottom: 2px solid var(--orange);
          padding-bottom: 4px;
        }

        .mission-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 4.5vw, 64px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 32px;
          text-transform: uppercase;
        }

        .mission-body {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(15,20,24,0.72);
          max-width: 480px;
          margin-bottom: 40px;
        }

        .mission-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--orange);
          color: var(--white);
          border: none;
          padding: 16px 32px;
          border-radius: 4px;
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.3s;
        }

        .mission-cta:hover { opacity: 0.88; }

        .mission-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1.4fr 1fr;
          gap: 12px;
          height: 520px;
        }

        .mission-img-large {
          grid-column: 2;
          grid-row: 1;
          overflow: hidden;
          border-radius: 4px;
        }

        .mission-img-small {
          grid-column: 1;
          grid-row: 1 / 3;
          overflow: hidden;
          border-radius: 4px;
        }   

        .mission-img-bottom {
          grid-column: 2;
          grid-row: 2;
          overflow: hidden;
          border-radius: 4px;
        }

        .mission-img-large img,
        .mission-img-small img,
        .mission-img-bottom img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mission-img-large:hover img,
        .mission-img-small:hover img,
        .mission-img-bottom:hover img {
          transform: scale(1.04);
        }

        .page-benefits {
          background: var(--dark);
          padding: 140px 48px;
          position: relative;
          z-index: 5;
        }

        .benefits-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .benefits-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 4vw, 54px);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: var(--white);
          margin-bottom: 32px;
        }

        .benefits-title span { color: var(--orange); }

        .benefits-body {
          font-size: 14px;
          line-height: 1.75;
          color: var(--steel-light);
          max-width: 480px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--panel-border);
          border: 1px solid var(--panel-border);
          border-radius: 8px;
          overflow: hidden;
        }

        .benefit-tile {
          background: rgba(233,238,242,0.02);
          padding: 28px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background 0.3s;
        }

        .benefit-tile:hover { background: rgba(138,15,15,0.05); }

        .benefit-glyph {
          font-size: 22px;
          color: var(--orange);
          line-height: 1;
          min-width: 28px;
          text-align: center;
        }

        .benefit-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--white);
          letter-spacing: 0.01em;
          line-height: 1.4;
        }

        .page-certified {
          background: var(--steel-bg);
          color: var(--dark);
          padding: 140px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 5;
        }

        .certified-img-wrapper {
          overflow: hidden;
          border-radius: 4px;
          height: 520px;
        }

        .certified-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }

        .certified-img-wrapper:hover img { transform: scale(1.04); }

        .certified-eyebrow {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--orange);
          margin-bottom: 20px;
        }

        .certified-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 4vw, 60px);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 28px;
        }

        .certified-body {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(15,20,24,0.72);
          max-width: 460px;
        }

        .page-industries {
          background: #E2E7EC;
          color: var(--dark);
          padding: 140px 48px 80px 48px;
          position: relative;
          z-index: 5;
        }

        .industries-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .industries-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .industries-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin: 0 auto;
        }

        .industries-divider span:first-child,
        .industries-divider span:nth-child(2) {
          width: 8px;
          height: 8px;
          background: var(--orange);
          opacity: 0.3;
          border-radius: 50%;
          display: inline-block;
        }

        .industries-divider span:last-child {
          width: 40px;
          height: 3px;
          background: var(--orange);
          display: inline-block;
          border-radius: 2px;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(15,20,24,0.12);
          border-left: 1px solid rgba(15,20,24,0.12);
        }

        .industry-cell {
          border-right: 1px solid rgba(15,20,24,0.12);
          border-bottom: 1px solid rgba(15,20,24,0.12);
          padding: 36px 32px;
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 500;
          letter-spacing: -0.01em;
          transition: background 0.3s, color 0.3s;
          cursor: default;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .industry-cell::before {
          content: "";
          width: 6px;
          height: 6px;
          background: var(--orange);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s;
          flex-shrink: 0;
        }

        .industry-cell:hover {
          background: var(--orange);
          color: var(--white);
        }

        .industry-cell:hover::before { opacity: 1; background: var(--white); }

        .metrics-strip {
          background: var(--dark);
          padding: 80px 48px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          border-top: 1px solid var(--panel-border);
          border-bottom: 1px solid var(--panel-border);
          position: relative;
          z-index: 5;
        }

        .metric-block {
          text-align: center;
          padding: 40px 24px;
          border-right: 1px solid var(--panel-border);
          position: relative;
        }

        .metric-block:last-child { border-right: none; }

        .metric-number {
          font-family: var(--font-display);
          font-size: clamp(48px, 5vw, 72px);
          font-weight: 700;
          color: var(--orange);
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 12px;
        }

        .metric-label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--steel-light);
        }

        .page-contact {
          background: #0a1014;
          padding: 120px 48px 80px 48px;
          position: relative;
          z-index: 5;
          border-top: 1px solid var(--panel-border);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 80px;
          margin-bottom: 80px;
        }

        .contact-section-label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--orange);
          margin-bottom: 32px;
        }

        .contact-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.5vw, 48px);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: var(--white);
          margin-bottom: 0;
        }

        .contact-detail-block {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .contact-row-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(233,238,242,0.35);
        }

        .contact-row-value {
          font-size: 15px;
          color: var(--white);
          line-height: 1.5;
        }

        .contact-row-value a {
          color: var(--white);
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-row-value a:hover { color: var(--orange); }

        .contact-brand-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-brand-desc {
          font-size: 14px;
          line-height: 1.7;
          color: var(--steel-light);
          max-width: 300px;
        }

        .contact-social-row {
          display: flex;
          gap: 16px;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--panel-border);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.3s, background 0.3s;
          background: transparent;
          color: var(--steel-light);
        }

        .social-btn:hover {
          border-color: var(--orange);
          background: rgba(138,15,15,0.08);
          color: var(--orange);
        }

        .contact-divider {
          border: none;
          border-top: 1px solid var(--panel-border);
          margin-bottom: 32px;
        }

        .contact-footer-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-copy {
          font-size: 13px;
          color: rgba(233,238,242,0.35);
        }

        .footer-copy a { color: rgba(233,238,242,0.5); text-decoration: none; }
        .footer-copy a:hover { color: var(--orange); }

        .iso-badge {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(233,238,242,0.35);
          border: 1px solid var(--panel-border);
          padding: 6px 14px;
          border-radius: 4px;
        }

        .landing-hero-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          color: var(--white);
        }
        .landing-hero-title span { color: var(--orange); }
        .landing-hero-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 17px;
          font-weight: 600;
          text-transform: uppercase;
          line-height: 1.5;
          color: var(--steel-light);
          margin-bottom: 32px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .landing-stats-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
        }
        .landing-stat-card {
          background: rgba(2, 3, 4, 0);
          border: 1px solid var(--panel-border);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 48px 24px;
          text-align: center;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .landing-stat-number {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(48px, 5vw, 64px);
          font-weight: 700;
          color: var(--orange);
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }
        .landing-stat-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .benefit-card-small {
          display: flex;
          align-items: center;
          gap: 20px;
          min-width: 250px;
          color: var(--white);
        }
        .benefit-icon-small {
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .benefit-icon-small svg {
          width: 32px;
          height: 32px;
        }
        .benefit-text-small {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .benefit-title-small {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .benefit-desc-small {
          font-size: 12px;
          color: var(--steel-light);
        }

        .pan-india-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(32px, 4vw, 56px);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #000000fa;
          opacity: 0.7;
        }

        .pan-india-desc {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.5;
          color: #000000;
          max-width: 400px;
        }


        .landing-materials-text {
          position: absolute; top: 15%; left: 5%; width: 35%; max-width: 450px;
          padding: 30px;
          border-radius: 16px;
          color: #000;
          opacity: 0.75;
          mix-blend-mode: overlay;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .landing-materials-layers {
          position: absolute; top: 15%; left: 40%; transform: translateX(-50%); width: 30%; min-width: 300px;
          padding: 30px;
          border-radius: 16px;
          color: #000;
          opacity: 0.75;
          mix-blend-mode: overlay;
          display: flex;
          flex-direction: column;
        }
        .landing-product-badge {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #000;
          margin-bottom: 12px;
        }
        .landing-product-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: #000;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .landing-product-title span {
          color: #000;
        }
        .landing-product-description {
          font-size: 14px;
          line-height: 1.5;
          color: #000;
          margin-bottom: 24px;
          font-weight: 600;
        }
        .landing-layers-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
          text-align: left;
        }
        .landing-layer-item {
          padding: 10px 14px;
          background: rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 6px;
          font-size: 13px;
          color: #000;
          font-weight: 600;
        }


        /* =============================================
           MOBILE RESPONSIVENESS – Homepage
           ============================================= */
        @media (max-width: 1024px) {
          .landing-materials-text, .landing-materials-layers {
            position: relative !important; top: auto !important; left: auto !important; transform: none !important; width: 100% !important; max-width: none !important; min-width: auto !important;
            padding: 20px;
          }
          .landing-materials-layers { margin-top: 20px; }
          .material-overlay { display: flex !important; flex-direction: column !important; justify-content: center !important; padding: 24px; position: absolute; inset: 0; }
          .hero-content { padding: 100px 32px 60px 32px; }
          .premium-stats-wrapper { right: 24px; bottom: 80px; width: 180px; }
          .landing-stats-container { grid-template-columns: repeat(2, 1fr); }
          .page-evolution { padding: 60px 32px 80px 32px; }
          .evolution-grid { grid-template-columns: 1fr 1fr; }
          .page-stories { grid-template-columns: 1fr; min-height: auto; }
          .story-hero-pane { padding: 80px 40px 60px 40px; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.15); }
          .story-split-pane { grid-template-rows: auto 260px; }
          .app-grid { grid-template-columns: repeat(2, 1fr); }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .page-mission { grid-template-columns: 1fr 1fr; padding: 100px 32px; gap: 48px; }
          .page-certified { padding: 100px 32px; gap: 48px; }
          .industries-grid { grid-template-columns: repeat(2, 1fr); }
          .metrics-strip { padding: 60px 32px; grid-template-columns: repeat(2, 1fr); }
          .contact-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
          .page-applications { padding: 80px 32px; }
          .page-services { padding: 80px 32px; }
          .page-benefits { padding: 80px 32px; }
          .page-industries { padding: 80px 32px; }
          .page-contact { padding: 80px 32px; }
        }
        /* Mid-tablet (iPad Pro landscape / small tablets) */
        @media (max-width: 900px) {
          .premium-stats-wrapper {
            display: none;
          }
          .story-hero-pane h2 { font-size: clamp(40px, 6vw, 72px); }
          .page-mission { grid-template-columns: 1fr; padding: 80px 32px; gap: 40px; min-height: auto; }
          .mission-right { height: 340px; }
          .page-certified { grid-template-columns: 1fr; padding: 80px 32px; gap: 40px; }
          .certified-img-wrapper { height: 320px; }
          .benefits-layout { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 768px) {
          .scroll-container { height: calc(5850px + 100vh) !important; }
          .material-overlay { justify-content: flex-start !important; padding-top: 12vh !important; align-items: flex-start !important; padding-left: 5vw !important; padding-right: 5vw !important; text-align: left !important; }
          .landing-materials-text, .landing-materials-layers { padding: 0 !important; align-items: flex-start !important; text-align: left !important; width: 100% !important; }
          .landing-materials-layers { margin-top: 5px !important; }
          .landing-product-badge { font-size: 9px !important; margin-bottom: 6px !important; text-align: left !important; }
          .landing-product-title { font-size: 22px !important; margin-bottom: 10px !important; line-height: 1.2 !important; text-align: left !important; }
          .landing-product-description { font-size: 11px !important; line-height: 1.4 !important; margin-bottom: 10px !important; text-align: left !important; }
          .landing-layers-list { gap: 6px !important; align-items: flex-start !important; width: 100% !important; }
          .landing-layer-item { padding: 6px 10px !important; font-size: 10px !important; border-radius: 4px !important; text-align: left !important; }
          .landing-hero-title { font-size: 24px !important; line-height: 1.2; margin-bottom: 16px; }
          .landing-hero-description { font-size: 12px !important; line-height: 1.4; margin-bottom: 24px; }
          .pan-india-desc-container { bottom: 5% !important; right: 5% !important; max-width: 60vw; }
          .pan-india-desc { font-size: 11px !important; line-height: 1.4 !important; text-align: right; }
          .global-nav-wrapper { padding: 14px 16px; flex-wrap: wrap; gap: 12px; }
          .hero-content { padding: 80px 20px 48px 20px; }
          .hero-tagline { font-size: clamp(28px, 8vw, 48px); }
          .hero-bottom-row { flex-direction: column; align-items: flex-start; gap: 20px; }
          .premium-stats-wrapper { position: absolute; bottom: 48px; right: 20px; flex-direction: column; gap: 8px; opacity: 1; transform: none; width: auto; margin-top: 0; z-index: 10; }
          .premium-stat-box { width: auto; flex: none; min-width: unset; padding: 6px 10px; }
          .premium-stat-number { font-size: 16px !important; }
          .premium-stat-label { font-size: 10px !important; }
          .landing-stats-container { grid-template-columns: 1fr 1fr; gap: 12px; }
          .landing-stat-card { padding: 12px 10px; border-radius: 8px; }
          .landing-stat-number { font-size: 22px !important; margin-bottom: 4px; }
          .landing-stat-label { font-size: 9px; letter-spacing: 0.02em; }
          .page-evolution { padding: 30px 16px; }
          .evolution-grid { grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
          .evo-flip-container { height: auto !important; min-height: 0 !important; aspect-ratio: 1 / 1 !important; }
          .evo-flip-container:hover .evo-flip-inner { transform: none !important; }
          body.mobile-scroll-stopped .evo-flip-container .evo-flip-inner { transform: rotateY(180deg) !important; }
          .evo-card { min-height: 0 !important; height: auto !important; padding: 14px 10px !important; }
          .evo-card.image-box { height: auto !important; aspect-ratio: 1 / 1 !important; }
          .evolution-title { font-size: 22px !important; margin-bottom: 16px !important; }
          .evo-card h3 { font-size: 16px !important; margin-bottom: 6px !important; }
          .evo-card p { font-size: 12px !important; line-height: 1.4 !important; }
          .evo-icon { width: 22px !important; height: 22px !important; margin-top: 16px !important; }
          .page-stories { display: flex; flex-direction: column; }
          .story-hero-pane { padding: 60px 20px; }
          .story-split-pane { display: flex; flex-direction: column; }
          .report-block { padding: 40px 20px; }
          .story-image-block { height: 240px; }
          .page-applications { padding: 80px 20px; }
          .app-header { flex-direction: column; align-items: flex-start; gap: 16px; }
          .app-header h2 { font-size: 32px; }
          .app-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .app-img-wrapper { height: 120px; }
          .app-card-content { padding: 16px 12px; }
          .app-card h4 { font-size: 15px; margin-bottom: 0; text-align: center; line-height: 1.3; }
          .page-services { padding: 40px 12px; }
          .services-grid { grid-template-columns: repeat(3, 1fr); }
          .service-cell { padding: 20px 4px; gap: 8px; justify-content: center; }
          .service-icon-ring { width: 40px; height: 40px; }
          .service-icon-ring svg { width: 20px; height: 20px; }
          .service-name { font-size: 11px; line-height: 1.3; }
          .page-mission { grid-template-columns: 1fr; padding: 80px 20px; gap: 40px; min-height: auto; }
          .mission-right { height: 360px; }
          .page-benefits { padding: 80px 20px; }
          .benefits-layout { grid-template-columns: 1fr; gap: 40px; }
          .page-certified { grid-template-columns: 1fr; padding: 80px 20px; gap: 40px; }
          .certified-img-wrapper { height: 300px; }
          .page-industries { padding: 80px 20px 40px 20px; }
          .industries-grid { grid-template-columns: 1fr 1fr; }
          .industry-cell { padding: 24px 16px; font-size: 15px; }
          .metrics-strip { padding: 32px 12px; grid-template-columns: repeat(2, 1fr); gap: 0; }
          .metric-block { padding: 24px 8px; border: none; }
          .metric-block:nth-child(odd) { border-right: 1px solid rgba(233,238,242,0.15); }
          .metric-block:nth-child(1), .metric-block:nth-child(2) { border-bottom: 1px solid rgba(233,238,242,0.15); }
          .metric-number { font-size: 36px !important; margin-bottom: 8px; }
          .metric-label { font-size: 10px; line-height: 1.3; }
          .page-contact { padding: 60px 20px 40px 20px; }
          .contact-grid { grid-template-columns: 1fr; gap: 40px; margin-bottom: 40px; }
          .contact-footer-bar { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr; }
          .app-grid { grid-template-columns: 1fr; }
          .industries-grid { grid-template-columns: 1fr; }
          .mission-right { height: 280px; }
        }
      `;

const STATS = [
  { value: "500+", label: "Completed Projects", placement: "top-card" },
  { value: "10+", label: "Years of Experience", placement: "bottom-card" },
];

const INDUSTRIES = [
  "Agricultural Warehouses",
  "Aircraft Hangers",
  "Auditoriums",
  "Automobile Industries",
  "Bus Station",
  "Cold Storages",
  "Educational Institution",
  "Parking Areas",
  "Shopping Malls",
];

const METRICS = [
  { value: "10+", label: "Years of Experience" },
  { value: "25", label: "Roofing Experts" },
  { value: "500+", label: "Completed Projects" },
  { value: "38+", label: "Cities We Serve" },
];

const SERVICES = [
  {
    name: "Inspection",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    name: "Panel Fabrication",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    name: "Customization",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    name: "Support",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
      </svg>
    ),
  },
  {
    name: "Replacement",
    icon: (
      <svg
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
    ),
  },
  {
    name: "Consultation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];


const coatingLayers = [
  "Top Coat* paint with Super Durable Polyester Resin (Nominal 20µm)**",
  "Universal Corrosion Inhibitive Primer (Nominal 5µm)**",
  "Conversion Coating",
  "ZINCALUME® – Zn-Al Alloy Coated Steel Substrate",
  "Conversion Coating",
  "Universal Corrosion Inhibitive Primer (Nominal 5µm)**",
  "Backing Coat (Nominal 5µm)* (Refer Note 4)",
];

const IconWideSpan = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"> <rect x="3" y="3" width="18" height="18" rx="2" /> <path d="M3 9h18M3 15h18M9 3v18M15 3v18" /> </svg>);
const IconCostSaving = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"> <circle cx="12" cy="12" r="10" /> <path d="M12 6v6l4 2" /> <path d="M16 8l-4-4-4 4" /> </svg>);
const IconFastProcess = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"> <circle cx="12" cy="12" r="10" /> <polyline points="12 6 12 12 16 14" /> <path d="M4 4L8 8" /> <path d="M20 4L16 8" /> </svg>);
const IconStrong = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"> <path d="M12 2L2 7l10 5 10-5-10-5z" /> <path d="M2 17l10 5 10-5" /> <path d="M2 12l10 5 10-5" /> </svg>);
const IconSturdy = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"> <rect x="3" y="5" width="18" height="14" rx="2" /> <line x1="7" y1="9" x2="17" y2="9" /> <line x1="7" y1="13" x2="17" y2="13" /> <path d="M12 19v2" /> </svg>);
const IconSupport = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"> <circle cx="12" cy="12" r="10" /> <path d="M12 8v4l2 2" /> <path d="M4 4L8 8" /> <path d="M20 4L16 8" /> </svg>);
const IconExperts = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"> <path d="M12 2a5 5 0 0 0-5 5c0 2 1 3 2 4l-2 3h10l-2-3c1-1 2-2 2-4a5 5 0 0 0-5-5z" /> <line x1="8" y1="22" x2="16" y2="22" /> </svg>);
const IconInstallation = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"> <rect x="4" y="4" width="16" height="16" rx="2" /> <line x1="9" y1="8" x2="15" y2="8" /> <line x1="9" y1="12" x2="15" y2="12" /> <line x1="9" y1="16" x2="13" y2="16" /> </svg>);

const benefitsTop = [
  { name: "Wide Span", icon: <IconWideSpan />, description: "Clear spans up to 50m" },
  { name: "Cost Saving", icon: <IconCostSaving />, description: "Reduced material costs" },
  { name: "Fast Process", icon: <IconFastProcess />, description: "Installation time reduced" },
  { name: "Strong", icon: <IconStrong />, description: "High tensile strength" }
];
const benefitsBottom = [
  { name: "Sturdy", icon: <IconSturdy />, description: "Engineered to withstand" },
  { name: "Support", icon: <IconSupport />, description: "24/7 Support" },
  { name: "Experts", icon: <IconExperts />, description: "Expert team" },
  { name: "Installation", icon: <IconInstallation />, description: "Quick installation" }
];

const BENEFITS = [
  { name: "Wide Span", icon: "⟷" },
  { name: "Maintenance Free", icon: "✦" },
  { name: "Cost Saving", icon: "◈" },
  { name: "Interlocking System", icon: "⧉" },
  { name: "Fast Installation", icon: "⬡" },
  { name: "Best After Sale Service", icon: "★" },
  { name: "Sturdy & Strong", icon: "◆" },
  { name: "High Corrosion Resistance", icon: "⬡" },
];

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("Home");
  const [loaded, setLoaded] = useState(false);
  const [framesReady, setFramesReady] = useState(false);

  // Canvas ref and preloaded image store
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const scrollContainerRef = useRef(null);
  const finalImgRef = useRef(null);
  const animFrameRef = useRef(null);
  const existingUIRef = useRef(null);
  const newUIRef = useRef(null);
  const statsUIRef = useRef(null);
  const statsTriggeredRef = useRef(false);
  const yearCounterRef = useRef(null);
  const expertsCounterRef = useRef(null);
  const projectsCounterRef = useRef(null);
  const citiesCounterRef = useRef(null);
  const benefitsUIRef = useRef(null);
  const benefitsTopRef = useRef(null);
  const benefitsBottomRef = useRef(null);
  const panIndiaUIRef = useRef(null);
  const materialUIRef = useRef(null);
  const mobileCoverRef = useRef(null);
  const mobileTimeoutRef = useRef(null);
  const mobileAutoScrollTriggered = useRef(false);
  const lastScrollYRef = useRef(0);
  const scrollStopTimerRef = useRef(null);

  // Frame configuration
  const SETS = [
    { folder: "set1", count: 500 },
    { folder: "set2", count: 300 },
    { folder: "set3", count: 300 },
  ];
  const TOTAL_FRAMES = 1100;
  const SCROLL_PER_FRAME = 5; // px scroll per frame

  // Pad number to 2 digits minimum (e.g. 1 -> "01", 10 -> "10", 100 -> "100")
  const padFrameNum = useCallback((n) => String(n).padStart(2, "0"), []);

  // ─── Preload all 1100 frames on mount ─────────────────────────────────
  useEffect(() => {
    let loadedCount = 0;

    // Build ordered URL list: set1 1-500, set2 1-300, set3 1-300
    const urlList = [];
    SETS.forEach(({ folder, count }) => {
      for (let i = 1; i <= count; i++) {
        urlList.push(`/${folder}/frame_${padFrameNum(i)}.webp`);
      }
    });

    const total = urlList.length;
    framesRef.current = new Array(total).fill(null);

    const BATCH_SIZE = 30;
    let batchStart = 0;

    function dispatchProgress(loaded) {
      window.dispatchEvent(
        new CustomEvent("frameload-progress", { detail: { loaded, total } })
      );
    }

    function loadBatch() {
      if (batchStart >= total) return;
      const end = Math.min(batchStart + BATCH_SIZE, total);
      let batchDone = 0;
      const batchSize = end - batchStart;

      for (let i = batchStart; i < end; i++) {
        const img = new Image();
        const idx = i;
        img.onload = img.onerror = () => {
          framesRef.current[idx] = img;
          loadedCount++;
          batchDone++;
          dispatchProgress(loadedCount);

          if (batchDone === batchSize) {
            batchStart = end;
            if (loadedCount >= total) {
              window.dispatchEvent(new CustomEvent("frameload-complete"));
              setFramesReady(true);
            } else {
              loadBatch();
            }
          }
        };
        img.src = urlList[i];
      }
    }

    loadBatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── CSS loaded class for entry animations ─────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  // ─── Intersection observer for reveal animations ────────────────────────
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

  // ─── Draw a single frame to canvas (object-fit cover, centered) ────────
  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const img = framesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover fit: scale to fill, center crop
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  // ─── Scroll-driven canvas animation ────────────────────────────────────
  useEffect(() => {
    if (!framesReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };
    resize();
    window.addEventListener("resize", resize);

    // Draw first frame immediately
    drawFrame(0);

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      animFrameRef.current = requestAnimationFrame(() => {
        ticking = false;
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const currentScrollY = window.scrollY;
        lastScrollYRef.current = currentScrollY;

        // While scrolling, remove the stopped class to show images
        document.body.classList.remove('mobile-scroll-stopped');

        if (scrollStopTimerRef.current) clearTimeout(scrollStopTimerRef.current);
        scrollStopTimerRef.current = setTimeout(() => {
          // When scrolling stops, add the class to show text
          document.body.classList.add('mobile-scroll-stopped');
        }, 200);

        const containerTop = scrollContainer.offsetTop;
        const scrolled = Math.max(0, window.scrollY - containerTop);
        const rawFrame = Math.floor(scrolled / SCROLL_PER_FRAME);

        const isMobile = window.innerWidth <= 768;
        const maxFrame = isMobile ? 970 : TOTAL_FRAMES - 1;
        const frameIndex = Math.min(rawFrame, maxFrame);

        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);

        if (isMobile && rawFrame >= 970) {
          if (canvasRef.current) canvasRef.current.style.filter = "blur(10px)";
          if (mobileCoverRef.current) mobileCoverRef.current.style.opacity = "1";
        } else {
          if (canvasRef.current) canvasRef.current.style.filter = "none";
          if (mobileCoverRef.current) mobileCoverRef.current.style.opacity = "0";
        }

        // Show/hide final image overlay at last frame
        if (finalImgRef.current) {
          finalImgRef.current.style.opacity = frameIndex >= TOTAL_FRAMES - 1 ? "1" : "0";
        }

        // Custom UI fading logic
        if (existingUIRef.current) {
          existingUIRef.current.style.opacity = frameIndex > 40 ? "0" : "1";
          existingUIRef.current.style.pointerEvents = frameIndex > 40 ? "none" : "auto";
        }

        if (newUIRef.current) {
          const isNewUIVisible = frameIndex >= 45 && frameIndex < 120;
          newUIRef.current.style.opacity = isNewUIVisible ? "1" : "0";
          newUIRef.current.style.pointerEvents = isNewUIVisible ? "auto" : "none";
        }

        if (statsUIRef.current) {
          const isStatsVisible = frameIndex >= 122 && frameIndex < 260;
          statsUIRef.current.style.opacity = isStatsVisible ? "1" : "0";
          statsUIRef.current.style.pointerEvents = isStatsVisible ? "auto" : "none";
        }

        if (benefitsUIRef.current && benefitsTopRef.current && benefitsBottomRef.current) {
          if (frameIndex >= 320 && frameIndex <= 432) {
            benefitsUIRef.current.style.opacity = "1";
            const progress = (frameIndex - 320) / (432 - 320);
            const translateX = 100 - (progress * 200);
            benefitsTopRef.current.style.transform = `translateX(${translateX}vw)`;
            benefitsBottomRef.current.style.transform = `translateX(${translateX}vw)`;
          } else {
            benefitsUIRef.current.style.opacity = "0";
          }
        }

        if (frameIndex >= 122 && !statsTriggeredRef.current) {
          statsTriggeredRef.current = true;
          const targets = { years: 10, experts: 25, projects: 500, cities: 100 };
          const duration = 2000;
          const stepTime = 20;
          const steps = duration / stepTime;
          let step = 0;
          const interval = setInterval(() => {
            step++;
            if (yearCounterRef.current) yearCounterRef.current.innerText = Math.min(Math.floor((step / steps) * targets.years), targets.years) + "+";
            if (expertsCounterRef.current) expertsCounterRef.current.innerText = Math.min(Math.floor((step / steps) * targets.experts), targets.experts);
            if (projectsCounterRef.current) projectsCounterRef.current.innerText = Math.min(Math.floor((step / steps) * targets.projects), targets.projects) + "+";
            if (citiesCounterRef.current) citiesCounterRef.current.innerText = Math.min(Math.floor((step / steps) * targets.cities), targets.cities) + "+";
            if (step >= steps) clearInterval(interval);
          }, stepTime);
        }

        if (panIndiaUIRef.current) {
          const isPanIndiaVisible = frameIndex >= 434 && frameIndex <= 493;
          panIndiaUIRef.current.style.opacity = isPanIndiaVisible ? "1" : "0";
          panIndiaUIRef.current.style.pointerEvents = isPanIndiaVisible ? "auto" : "none";
        }


        if (materialUIRef.current) {
          const isMaterialVisible = frameIndex >= 673 && frameIndex < 800;
          materialUIRef.current.style.opacity = isMaterialVisible ? "1" : "0";
          materialUIRef.current.style.pointerEvents = isMaterialVisible ? "auto" : "none";
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (scrollStopTimerRef.current) clearTimeout(scrollStopTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [framesReady, drawFrame]);


  return (
    <div className={`vinfra-root ${loaded ? "loaded" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />

      {/* NAVBAR COMPONENT */}
      <Navbar />

      {/* PAGE 1: SCROLL SEQUENCE LANDING */}
      <section className="scroll-container" ref={scrollContainerRef}>
        <div className="sticky-wrapper">
          <canvas
            ref={canvasRef}
            className="hero-sequence-canvas"
            style={{ transition: "filter 1s ease" }}
          />
          <img
            ref={mobileCoverRef}
            src="/cover_m.webp"
            alt="Mobile Cover"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0,
              transition: "opacity 1s ease",
              pointerEvents: "none",
              zIndex: 2
            }}
          />
          {/* Final image revealed at last frame */}
          <img
            ref={finalImgRef}
            src="/final.webp"
            alt="Final frame"
            className="hero-final-image"
            aria-hidden="true"
          />
          <div className="hero-overlay-ui">
            <div className="hero-content" ref={existingUIRef} style={{ transition: 'opacity 0.5s ease' }}>
              <div className="hero-top-row">
                <div className="hero-eyebrow">
                  Engineering structural steel &amp; advanced curvature
                  enclosures across global landscapes.
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
                  <Link
                    href="/projects"
                    className="bracket-btn"
                    style={{ color: "var(--white)", textDecoration: "none" }}
                  >
                    Explore Projects <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              ref={newUIRef}
              className="landing-hero-overlay"
              style={{
                position: 'absolute',
                bottom: '2%',
                left: '0',
                right: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                opacity: 0,
                transition: 'opacity 0.5s ease',
                pointerEvents: 'none',
                zIndex: 5,
                padding: '0 20px'
              }}
            >
              <h1 className="landing-hero-title">
                Crafting Excellence
                <br />
                <span>In Every Roof</span>
              </h1>
              <p className="landing-hero-description">
                At Vinfra, we are committed to excellence, reliability, and client
                satisfaction, making us a trusted name in the roofing industry.
              </p>
            </div>

            <div
              ref={statsUIRef}
              className="landing-stats-overlay"
              style={{
                position: 'absolute',
                bottom: '5%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: '1200px',
                opacity: 0,
                transition: 'opacity 0.5s ease',
                pointerEvents: 'none',
                zIndex: 5,
                padding: '0 20px'
              }}
            >
              <div className="landing-stats-container">
                <div className="landing-stat-card">
                  <div className="landing-stat-number" ref={yearCounterRef}>0+</div>
                  <div className="landing-stat-label">Years of experience</div>
                </div>
                <div className="landing-stat-card">
                  <div className="landing-stat-number" ref={expertsCounterRef}>0</div>
                  <div className="landing-stat-label">Roofing Experts</div>
                </div>
                <div className="landing-stat-card">
                  <div className="landing-stat-number" ref={projectsCounterRef}>0+</div>
                  <div className="landing-stat-label">Completed Projects</div>
                </div>
                <div className="landing-stat-card">
                  <div className="landing-stat-number" ref={citiesCounterRef}>0+</div>
                  <div className="landing-stat-label">Cities we serve</div>
                </div>
              </div>
            </div>

            <div
              ref={benefitsUIRef}
              className="landing-benefits-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 5,
                overflow: "hidden",
                opacity: 0
              }}
            >
              <div
                ref={benefitsTopRef}
                className="benefits-marquee benefits-top"
                style={{ position: 'absolute', top: '30%', display: 'flex', gap: '120px', whiteSpace: 'nowrap' }}
              >
                {benefitsTop.map((b, i) => (
                  <div key={i} className="benefit-card-small">
                    <div className="benefit-icon-small">{b.icon}</div>
                    <div className="benefit-text-small">
                      <div className="benefit-title-small">{b.name}</div>
                      <div className="benefit-desc-small">{b.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                ref={benefitsBottomRef}
                className="benefits-marquee benefits-bottom"
                style={{ position: 'absolute', bottom: '30%', display: 'flex', gap: '120px', whiteSpace: 'nowrap' }}
              >
                {benefitsBottom.map((b, i) => (
                  <div key={i} className="benefit-card-small">
                    <div className="benefit-icon-small">{b.icon}</div>
                    <div className="benefit-text-small">
                      <div className="benefit-title-small">{b.name}</div>
                      <div className="benefit-desc-small">{b.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={panIndiaUIRef}
              className="pan-india-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                transition: "opacity 0.5s ease",
                pointerEvents: "none",
                zIndex: 5
              }}
            >
              <div style={{ position: "absolute", top: "10%", right: "5%", textAlign: "right" }}>
                <h1 className="pan-india-title">
                  Pan-India
                  <br />
                  Growth Story
                </h1>
              </div>
              <div className="pan-india-desc-container" style={{ position: "absolute", bottom: "10%", right: "5%", textAlign: "right" }}>
                <p className="pan-india-desc">
                  Delivering trusted structural and engineering solutions across India,<br />
                  backed by rapid growth, nationwide delivery, and a relentless focus<br />
                  on quality in every region.
                </p>
              </div>
            </div>


            <div
              ref={materialUIRef}
              className="material-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                transition: "opacity 0.5s ease",
                pointerEvents: "none",
                zIndex: 5,
              }}
            >
              <div className="landing-materials-text">
                <div className="landing-product-badge">PREMIUM MATERIAL</div>
                <h1 className="landing-product-title">
                  COLORBOND<span>®</span> XMA STEEL
                </h1>
                <p className="landing-product-description">
                  COLORBOND® XMA steel – pre-painted steel is an efficient solution
                  for Properties of Steel Base (other steel base possible on design
                  flexibility and outdoor durability). It is an ideal choice for manu
                  accessories.
                </p>
              </div>

              <div className="landing-materials-layers">
                {/* <div className="landing-layers-list">
                  {coatingLayers.map((layer, idx) => (
                    <div key={idx} className="landing-layer-item">
                      {layer}
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 2: EVOLUTION IN STEEL */}
      <section className="page-evolution reveal-group">
        <div className="evolution-header">
          <h2 className="evolution-title">Vinfra Roofing Innovation</h2>
          <Link href="/material" style={{ color: "var(--dark)", textDecoration: "none" }}>
            <button className="bracket-btn">
              Explore Roofing Materials <span className="arrow">→</span>
            </button>
          </Link>
        </div>
        <div className="evolution-grid">
          <div className="evo-card image-box">
            <video
              src="/one.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
          {/* Card 1 */}
          <div className="evo-flip-container">
            <div className="evo-flip-inner">
              <div className="evo-flip-front">
                <img src="/e1.webp" alt="Precision Roof Engineering" />
              </div>
              <div className="evo-flip-back evo-card">
                <div className="evo-card-orange-dot" />
                <div>
                  <h3>Precision Roof Engineering</h3>
                  <p>
                    Vinfra’s roofing systems are engineered for wide-span coverage
                    and exact fit, delivering industrial strength without
                    compromising on elegant architectural form.
                  </p>
                </div>
                <svg
                  className="evo-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="evo-flip-container">
            <div className="evo-flip-inner">
              <div className="evo-flip-front">
                <img src="/e2.webp" alt="Thermal Shield Performance" />
              </div>
              <div
                className="evo-flip-back evo-card"
                style={{ backgroundColor: "rgba(233,238,242,0.25)" }}
              >
                <div className="evo-card-orange-dot" />
                <div>
                  <h3>Thermal Shield Performance</h3>
                  <p>
                    Our thermal roof membranes and coated panels cut heat gain,
                    improve energy efficiency, and keep interiors comfortable even
                    under India’s hottest skies.
                  </p>
                </div>
                <svg
                  className="evo-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="evo-flip-container">
            <div className="evo-flip-inner">
              <div className="evo-flip-front">
                <img src="/e3.webp" alt="Rainproof Lifecycle" />
              </div>
              <div className="evo-flip-back evo-card">
                <div className="evo-card-orange-dot" />
                <div>
                  <h3>Rainproof Lifecycle</h3>
                  <p>
                    Designed for seamless assembly and long-term durability, Vinfra
                    roofing ensures leak-free protection and dependable performance
                    for every industrial and commercial project.
                  </p>
                </div>
                <svg
                  className="evo-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path d="M12 18V6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 3: NEWS & STORIES */}
      <section className="page-stories reveal-group">
        <div className="story-hero-pane">
          <h2>
            Pan-India <br />
            Growth Story
          </h2>
          <div>
            <p>
              Delivering trusted structural and engineering solutions across
              India, backed by rapid growth, nationwide delivery, and a
              relentless focus on quality in every region.
            </p>
            <div style={{ marginTop: "32px" }}>
              <Link
                href="/services"
                className="bracket-btn"
                style={{ color: "#FFF", textDecoration: "none" }}
              >
                Discover Our Reach <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="story-split-pane">
          <div className="report-block">
            <div>
              <div className="report-meta">Committed to excellence</div>
              <h3 className="report-title">
                We take pride in our customer-focused approach, ensuring timely
                project execution and exceptional service at every stage.
              </h3>
              {/* <p>
                From consultation to installation, our experienced professionals
                work closely with clients to provide customized roofing
                solutions that stand the test of time.
              </p>
              <p>
                Our vision is to redefine modern roofing by combining cutting-
                edge technology with sustainable practices, delivering long-term
                value to our clients.
              </p> */}
            </div>
          </div>
          <div className="story-image-block">
            <img
              src={MainFeature.src}
              alt="Sustainable Wind Power Grid Lines"
            />
          </div>
        </div>
      </section>

      {/* PAGE 4: PROJECT HIGHLIGHTS */}
      <section className="page-applications reveal-group">
        <div className="app-header">
          <h2>
            Our <span>Projects</span>
          </h2>
          <Link
            href="/projects"
            className="bracket-btn"
            style={{ color: "var(--white)" }}
          >
            View All Projects <span className="arrow">→</span>
          </Link>
        </div>
        <div className="app-grid">
          <Link href="/projects" className="app-card" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="app-img-wrapper">
              <img src={ProjectOne.src} alt="Multi Purpose Hall project" />
            </div>
            <div className="app-card-content">
              <h4>Multi Purpose Hall</h4>
            </div>
          </Link>
          <Link href="/projects" className="app-card" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="app-img-wrapper">
              <img src={ProjectTwo.src} alt="Convention Centre project" />
            </div>
            <div className="app-card-content">
              <h4>Convention Centre</h4>
            </div>
          </Link>
          <Link href="/projects" className="app-card" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="app-img-wrapper">
              <img src={ProjectThree.src} alt="Warehouse Roofing project" />
            </div>
            <div className="app-card-content">
              <h4>Warehouse Roofing</h4>
            </div>
          </Link>
          <Link href="/projects" className="app-card" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="app-img-wrapper">
              <img src="/Residential%20Roofing.webp" alt="Residential Roofing project" />
            </div>
            <div className="app-card-content">
              <h4>Residential Roofing</h4>
            </div>
          </Link>
        </div>
      </section>

      {/* PAGE 5: SERVICES */}
      <section id="services" className="page-services reveal-group">
        <div className="services-header">
          <div className="services-eyebrow">Services</div>
          <h2 className="services-title">Protecting your roof assets</h2>
          <p className="services-body">
            Vinfra Truss-less Roofings has been at the forefront of delivering
            innovative roofing solutions across industrial, commercial, and
            institutional sectors. We specialize in trussless (K-Span) roofing
            systems that eliminate the need for conventional trusses, allowing
            for clear spans, reduced material usage, and maximized interior
            space.
          </p>
          <p className="services-body">
            With over a decade of experience, our team blends engineering
            precision, structural strength, quality materials and aesthetic
            appeal to deliver roofing systems that are not only strong and
            durable but also cost-efficient, low-maintenance and built to last.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((svc) => (
            <div className="service-cell" key={svc.name}>
              <div className="service-icon-ring">{svc.icon}</div>
              <div className="service-name">{svc.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PAGE 6: MISSION */}
      <section className="page-mission reveal-group">
        <div className="mission-left">
          <div className="mission-eyebrow">Mission</div>
          <h2 className="mission-title">
            Innovative
            <br />
            Functional
            <br />
            Appealing
          </h2>
          <p className="mission-body">
            At Vinfra Truss-less Roofings, our dedication to excellence is
            evident in every project we undertake. We combine innovative roofing
            technology with expert craftsmanship to deliver results that stand
            the test of time. Whether it's a large-scale industrial facility or
            a commercial site, we ensure every detail meets the highest quality
            standards. Excellence isn't optional — it's what defines us.
          </p>
          <Link href="/projects">
            <button className="mission-cta">Our Works →</button>
          </Link>
        </div>
        <div className="mission-right">
          <div
            className="mission-img-small"
            style={{ background: "rgba(15,20,24,0.15)" }}
          >
            <img src="/mission1.webp" alt="Vinfra construction site" />
          </div>
          <div
            className="mission-img-large"
            style={{ background: "rgba(15,20,24,0.1)" }}
          >
            <img src="/mission2.webp" alt="Vinfra roofing canopy structure" />
          </div>
          <div
            className="mission-img-bottom"
            style={{ background: "rgba(15,20,24,0.1)" }}
          >
            <img src="/mission3.webp" alt="Vinfra installation process" />
          </div>
        </div>
      </section>

      {/* PAGE 7: CERTIFIED PROFESSIONALS */}
      <section className="page-certified reveal-group">
        <div className="certified-img-wrapper">
          <img src="/certi.webp" alt="Certified roofing professionals at work" />
        </div>
        <div className="certified-right">
          <div className="certified-eyebrow">Our Team</div>
          <h2 className="certified-title">Certified roofing professional</h2>
          <p className="certified-body">
            At Vinfra Truss-less Roofings, our team consists of certified
            professionals with extensive knowledge in modern roofing
            technologies. Each member is trained to deliver structurally sound,
            long-lasting solutions tailored to a wide range of building types.
            Their credentials reflect a commitment to safety, efficiency, and
            technical excellence — ensuring every project is executed to the
            highest standards. Whether it's a new installation or a complex
            retrofit, our experts bring confidence, quality, and peace of mind
            to every roof we build.
          </p>
          <div style={{ marginTop: "40px" }}>
            {/* <button className="bracket-btn" style={{ color: "var(--dark)" }}>
              Meet the Team <span className="arrow">→</span>
            </button> */}
          </div>
        </div>
      </section>

      {/* PAGE 8: BENEFITS */}
      <section className="page-benefits reveal-group">
        <div className="benefits-layout">
          <div className="benefits-left">
            <h2 className="benefits-title">
              Know The Benefits Of
              <br />
              <span>Vinfra</span> Roofing Material
            </h2>
            <p className="benefits-body">
              Vinfra Roofing Material offers multiple benefits, making it a
              reliable choice for long-lasting roofing solutions. It is highly
              durable, performing four times better in exposure tests, six times
              better in industrial environments, and three times more durable in
              rural conditions. With excellent corrosion resistance, it
              outperforms conventional galvanized steel, ensuring extended
              protection against rust. Its high-temperature resistance enables
              it to withstand intermediate and prolonged heat exposure more
              effectively than traditional roofing sheets. The material also
              reflects heat better, keeping buildings cooler in summer and
              warmer in winter, while retaining its luster for longer periods
              compared to ordinary galvanized coatings. Additionally, Vinfra
              Roofing Material provides cost efficiency by reducing maintenance
              needs and lowering overall crack or peel costs.
            </p>
          </div>
          <div className="benefits-right">
            <div className="benefits-grid">
              {BENEFITS.map((b) => (
                <div className="benefit-tile" key={b.name}>
                  <div className="benefit-glyph">{b.icon}</div>
                  <div className="benefit-name">{b.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 9: INDUSTRIES */}
      <section className="page-industries reveal-group">
        <div className="industries-header">
          <h2 className="industries-title">Industries We Cater</h2>
          <div className="industries-divider">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="industries-grid">
          {INDUSTRIES.map((ind) => (
            <div className="industry-cell" key={ind}>
              {ind}
            </div>
          ))}
        </div>
      </section>

      {/* PAGE 10: METRICS STRIP */}
      <div className="metrics-strip reveal-group">
        {METRICS.map((m) => (
          <div className="metric-block" key={m.label}>
            <div className="metric-number">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      {/* PAGE 11: CONTACT & FOOTER */}
      <section className="page-contact reveal-group">
        <div className="contact-grid">
          <div>
            <div className="contact-section-label">Get in Touch</div>
            <h2 className="contact-title">
              Let's build
              <br />
              something
              <br />
              enduring.
            </h2>
          </div>

          <div className="contact-detail-block">
            <div className="contact-row">
              <div className="contact-row-label">Phone</div>
              <div className="contact-row-value">
                <a href="tel:+919656813254">+91 9656813254</a>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-row-label">Mail</div>
              <div className="contact-row-value">
                <a href="mailto:info@vinfraprojects.com">
                  info@vinfraprojects.com
                </a>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-row-label">PO Box</div>
              <div className="contact-row-value">670571</div>
            </div>
            <div className="contact-row">
              <div className="contact-row-label">Address</div>
              <div className="contact-row-value">
                Mannamkund, Karuvanchal,
                <br />
                Kannur, Kerala
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-row-label">Branches</div>
              <div className="contact-row-value">
                Ernakulam · Banglore · Chennai
              </div>
            </div>
          </div>

          <div className="contact-brand-col">
            <div className="nav-logo" style={{ fontSize: "20px" }}>
              <img
                src={Logo.src}
                alt="Vinfra Projects"
                style={{ height: "32px", width: "auto" }}
              />
              Vinfra Projects
            </div>
            <p className="contact-brand-desc">
              A professional company providing Trusless Roofing all over in
              South India with years of experience in Trusless Roofing
              Industries. We emphasize on quality of products.
            </p>
            <div className="contact-social-row">
              <a href="https://www.facebook.com/vinfraprojects/" target="_blank" rel="noopener noreferrer" className="social-btn" title="Facebook">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/vinfraprojects/?hl=en" target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a href="https://wa.me/919072135550" target="_blank" rel="noopener noreferrer" className="social-btn" title="WhatsApp">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
            <div className="iso-badge">ISO 9001:2015 Certified</div>
          </div>
        </div>

        <hr className="contact-divider" />

        <div className="contact-footer-bar">
          <div className="footer-copy">
            <a href="#"></a> All rights
            reserved by Vinfra Projects
          </div>
          <div className="footer-copy">vinfraprojects.com</div>
        </div>
      </section>
    </div>
  );
}