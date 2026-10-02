"use client";

import { useState, useEffect } from "react";
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
        @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --white: #FFFFFF;
          --steel-light: #475569;
          --steel-bg: #F1F5F9;
          --orange: #B91C1C;
          --dark: #0F172A;
          --panel-border: #E2E8F0;
          --bg-page: #F8FAFC;
          --bg-card: #FFFFFF;
          --font-display: 'Cabinet Grotesk', 'Space Grotesk', sans-serif;
          --font-body: 'Inter', sans-serif;
        }

        body { 
          max-width: 100%;
          overflow-x: hidden; 
          background: #F8FAFC; 
          font-family: var(--font-body);
          color: #0F172A;
        }

        .vinfra-root {
          background-color: #F8FAFC;
          color: #0F172A;
          min-height: 100vh;
          position: relative;
        }

        /* --- HERO LANDING (LIGHT THEME OVERLAY) --- */
        .hero-landing {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 100vh;
          overflow: hidden;
          background: #F8FAFC;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #E2E8F0;
        }

        .hero-video-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
          opacity: 1;
        }

        .hero-bg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-video-overlay {
          display: none;
        }

        .hero-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 140px 64px 80px 64px;
          z-index: 5;
        }

        .hero-top-row { display: flex; justify-content: space-between; align-items: flex-start; }
        
        .hero-eyebrow,
        .hero-quote-card {
          position: relative;
          background: transparent;
          border: none;
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          padding: 0;
          margin: 0;
          max-width: 420px;
          text-align: center;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }
        .loaded .hero-eyebrow,
        .loaded .hero-quote-card {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-quote-badge {
          background: transparent;
          border: none;
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          color: #111827;
          width: auto;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px auto;
          position: static;
          transform: none;
        }

        .hero-quote-text {
          font-family: var(--font-body), sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #171717;
          line-height: 1.38;
          letter-spacing: -0.01em;
        }

        .hero-quote-text .text-red {
          color: #B91C1C;
          font-weight: 800;
        }

        @media (max-width: 768px) {
          .hero-quote-card {
            max-width: 320px;
            padding: 22px 20px 18px 20px;
            margin-top: 10px;
          }
          .hero-quote-text {
            font-size: 16px;
          }
          .hero-quote-badge {
            top: -14px;
            width: 38px;
            height: 28px;
          }
        }

        .premium-stats-wrapper {
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: absolute;
          right: 48px;
          bottom: 130px; 
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s;
          width: 220px; 
        }
        .loaded .premium-stats-wrapper { opacity: 1; transform: translateY(0); }

        .premium-stat-box {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 14px;
          padding: 14px 20px; 
          width: 200px; 
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }
        
        .premium-stat-box.top-card { align-self: flex-end; }
        .premium-stat-box.bottom-card { align-self: flex-start; }
        .premium-stat-box:hover { 
          background: rgba(255, 255, 255, 0.25);
          border-color: #EF4444; 
          transform: translateY(-3px);
          box-shadow: 0 14px 34px -4px rgba(239, 68, 68, 0.3);
        }

        .premium-stat-number {
          font-family: var(--font-display);
          font-size: 28px; 
          font-weight: 800;
          line-height: 1.1;
          color: #FFFFFF;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
          letter-spacing: -0.01em;
        }

        .premium-stat-label {
          font-family: var(--font-body);
          font-size: 11px; 
          font-weight: 700; 
          color: rgba(255, 255, 255, 0.92);
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
          margin-top: 4px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .hero-bottom-row { display: flex; justify-content: space-between; align-items: flex-end; }
        
        .hero-tagline {
          font-family: var(--font-display); 
          font-size: clamp(36px, 5vw, 68px);
          font-weight: 800; 
          line-height: 0.95; 
          text-transform: uppercase; 
          letter-spacing: -0.03em;
          opacity: 0; 
          transform: translateY(30px); 
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
          color: #FFFFFF;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.7), 0 2px 6px rgba(0, 0, 0, 0.5);
        }
        .loaded .hero-tagline { opacity: 1; transform: translateY(0); }

        .reveal-group { opacity: 0; transform: translateY(40px); transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease; }
        .reveal-group.view-visible { opacity: 1; transform: translateY(0); }

        .bracket-btn {
          display: inline-flex; 
          align-items: center; 
          gap: 12px;
          background: transparent; 
          color: #0F172A; 
          border: none;
          font-family: var(--font-display); 
          font-size: 16px; 
          font-weight: 700;
          cursor: pointer; 
          padding: 4px 0;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .bracket-btn::before { content: "["; color: #B91C1C; font-weight: 700; transition: transform 0.3s; }
        .bracket-btn::after { content: "]"; color: #B91C1C; font-weight: 700; transition: transform 0.3s; }
        .bracket-btn:hover::before { transform: translateX(-4px); }
        .bracket-btn:hover::after { transform: translateX(4px); }
        .bracket-btn .arrow { color: #B91C1C; transition: transform 0.3s ease; }
        .bracket-btn:hover { color: #B91C1C; }
        .bracket-btn:hover .arrow { transform: translateX(4px); }

        .hero-content .bracket-btn {
          color: #FFFFFF;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
        }
        .hero-content .bracket-btn::before,
        .hero-content .bracket-btn::after,
        .hero-content .bracket-btn .arrow {
          color: #EF4444;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
        }
        .hero-content .bracket-btn:hover {
          color: #EF4444;
        }

        /* --- PAGE 3: PAN-INDIA GROWTH STORY --- */
        .page-stories { 
          background: #FFFFFF; 
          color: #0F172A; 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          min-height: 100vh;
          position: relative;
          border-bottom: 1px solid #E2E8F0;
        }
        .story-hero-pane { 
          padding: 140px 64px 120px 64px; 
          display: flex; 
          flex-direction: column; 
          justify-content: space-between; 
          background: #B91C1C;
          border-right: 1px solid rgba(0, 0, 0, 0.08); 
          position: relative; 
          z-index: 5; 
        }
        .story-hero-pane h2 { 
          font-family: var(--font-display); 
          font-size: clamp(48px, 6vw, 96px); 
          font-weight: 800; 
          line-height: 0.95; 
          letter-spacing: -0.03em; 
          color: #FFFFFF;
        }
        .story-hero-pane p { 
          font-size: 18px; 
          line-height: 1.6; 
          max-width: 460px; 
          color: #FFFFFF; 
          opacity: 0.95;
          margin-top: 40px; 
        }
        .story-hero-pane .bracket-btn {
          color: #FFFFFF;
        }
        .story-hero-pane .bracket-btn::before,
        .story-hero-pane .bracket-btn::after,
        .story-hero-pane .bracket-btn .arrow {
          color: #FFFFFF;
        }
        .story-hero-pane .bracket-btn:hover {
          color: #FFFFFF;
          opacity: 0.85;
        }
        
        /* --- KEYFRAME ANIMATIONS --- */
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes liveDot {
          0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(185, 28, 28, 0.6); }
          50% { transform: scale(1.2); opacity: 0.8; box-shadow: 0 0 0 6px rgba(185, 28, 28, 0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.06); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(14px, -16px); }
        }

        .story-split-pane { display: grid; grid-template-rows: 1fr 1fr; }
        .report-block { 
          padding: 80px 64px 64px 64px; 
          display: flex; 
          flex-direction: column; 
          justify-content: space-between; 
          background-color: #FFFFFF; 
          background-image: 
            radial-gradient(circle, rgba(15, 23, 42, 0.05) 1.2px, transparent 1.2px),
            linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);
          background-size: 24px 24px, 100% 100%;
          color: #0F172A; 
          border-bottom: 1px solid #E2E8F0;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .report-block::before {
          content: "";
          position: absolute;
          top: -40px;
          right: -40px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(185, 28, 28, 0.07) 0%, transparent 70%);
          pointer-events: none;
          animation: pulseGlow 5s ease-in-out infinite;
        }
        .report-meta { 
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px; 
          font-weight: 700; 
          text-transform: uppercase; 
          letter-spacing: 0.16em; 
          color: #B91C1C; 
          background: #FEF2F2;
          padding: 5px 14px;
          border-radius: 20px;
          border: 1px solid rgba(185, 28, 28, 0.2);
          width: fit-content;
        }
        .report-meta::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #B91C1C;
          animation: liveDot 2s infinite;
        }
        .report-title { 
          font-family: var(--font-display); 
          font-size: 28px; 
          font-weight: 700; 
          line-height: 1.3; 
          margin: 20px 0 0 0; 
          max-width: 520px; 
          color: #0F172A; 
        }
        .report-date { 
          font-size: 13px; 
          font-weight: 600;
          color: #64748B; 
          letter-spacing: 0.02em;
        }
        .story-image-block { 
          overflow: hidden; 
          position: relative; 
          background: #F1F5F9; 
        }
        .story-image-block img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .story-image-block:hover img {
          transform: scale(1.04);
        }

        /* --- PAGE 4: PROJECT HIGHLIGHTS --- */
        .page-applications { 
          background-color: #F8FAFC; 
          background-image: 
            linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
            radial-gradient(circle at 10% 20%, rgba(185, 28, 28, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(185, 28, 28, 0.04) 0%, transparent 45%);
          background-size: 44px 44px, 44px 44px, 100% 100%, 100% 100%;
          padding: 70px 48px 50px 48px; 
          min-height: auto; 
          position: relative; 
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
        }
        .page-applications::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          right: -150px;
          top: 15%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(185, 28, 28, 0.05) 0%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          animation: floatSlow 8s ease-in-out infinite;
        }
        .app-header { 
          display: flex; 
          justify-content: space-between; 
          align-items: flex-end; 
          border-bottom: 1px solid #E2E8F0; 
          padding-bottom: 24px; 
          margin-bottom: 36px; 
          position: relative; 
          z-index: 5; 
        }
        .app-header h2 { 
          font-family: var(--font-display); 
          font-size: 48px; 
          font-weight: 800; 
          letter-spacing: -0.02em; 
          color: #0F172A;
        }
        .app-header h2 span { 
          color: #B91C1C; 
          font-weight: 800; 
        }
        
        .app-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 28px; 
          position: relative; 
          z-index: 5; 
        }
        .app-card { 
          background: #FFFFFF; 
          border: 1px solid #E2E8F0; 
          border-radius: 18px; 
          overflow: hidden; 
          position: relative;
          box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.05);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        .app-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
          transform: translateX(-150%) skewX(-20deg);
          pointer-events: none;
          transition: transform 0.75s ease;
          z-index: 3;
        }
        .app-card:hover::after {
          transform: translateX(260%) skewX(-20deg);
        }
        .app-card:hover { 
          border-color: #B91C1C; 
          transform: translateY(-8px) scale(1.01); 
          box-shadow: 0 20px 42px -10px rgba(185, 28, 28, 0.18), 0 6px 20px rgba(15, 23, 42, 0.06); 
        }
        .app-img-wrapper { 
          height: 240px; 
          overflow: hidden; 
          position: relative; 
          background: #F1F5F9; 
        }
        .app-card-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #B91C1C;
          padding: 4px 12px;
          border-radius: 30px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          z-index: 2;
          transition: all 0.3s ease;
        }
        .app-card:hover .app-card-badge {
          background: #B91C1C;
          color: #FFFFFF;
        }
        .app-img-wrapper img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          opacity: 1; 
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        .app-card:hover .app-img-wrapper img { 
          transform: scale(1.08); 
        }
        .app-card-content { 
          padding: 22px 20px; 
          text-align: center; 
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .app-card h4 { 
          font-family: var(--font-display); 
          font-size: 19px; 
          font-weight: 700; 
          color: #0F172A;
          margin-bottom: 0; 
          transition: color 0.25s ease;
        }
        .app-card:hover h4 {
          color: #B91C1C;
        }
        .app-card-arrow {
          font-size: 12px;
          font-weight: 700;
          color: #B91C1C;
          opacity: 0;
          transform: translateY(4px);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .app-card:hover .app-card-arrow {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- PAGE 5: SERVICES --- */
        .page-services {
          background-color: #FFFFFF;
          background-image: 
            radial-gradient(circle, rgba(15, 23, 42, 0.055) 1.5px, transparent 1.5px),
            radial-gradient(ellipse at 50% 10%, rgba(185, 28, 28, 0.05) 0%, transparent 60%),
            radial-gradient(ellipse at 85% 85%, rgba(15, 23, 42, 0.03) 0%, transparent 50%);
          background-size: 32px 32px, 100% 100%, 100% 100%;
          padding: 130px 48px;
          position: relative;
          z-index: 5;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
        }

        .services-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 70px auto;
        }

        .services-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #B91C1C;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 20px;
        }

        .services-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #0F172A;
          margin-bottom: 24px;
        }

        .services-body {
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 16px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          background: transparent;
          border: none;
          position: relative;
          z-index: 2;
        }

        .service-cell {
          background: rgba(248, 250, 252, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 44px 32px 38px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          position: relative;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          text-align: center;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
        }

        .service-cell::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #B91C1C, #EF4444);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-watermark {
          position: absolute;
          bottom: 8px;
          right: 16px;
          font-family: var(--font-display);
          font-size: 46px;
          font-weight: 800;
          color: rgba(15, 23, 42, 0.04);
          line-height: 1;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .service-cell:hover::before {
          transform: scaleX(1);
        }

        .service-cell:hover .service-watermark {
          color: rgba(185, 28, 28, 0.1);
          transform: translateY(-4px);
        }

        .service-cell:hover {
          background: #FFFFFF;
          border-color: rgba(185, 28, 28, 0.3);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -8px rgba(185, 28, 28, 0.14), 0 4px 16px rgba(15, 23, 42, 0.04);
        }

        .service-icon-ring {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #FEF2F2;
          border: 1.5px solid rgba(185, 28, 28, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #B91C1C;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-icon-ring svg {
          width: 28px;
          height: 28px;
        }

        .service-cell:hover .service-icon-ring {
          border-color: #B91C1C;
          background: #B91C1C;
          color: #FFFFFF;
          transform: scale(1.1) rotate(6deg);
          box-shadow: 0 10px 24px -4px rgba(185, 28, 28, 0.4);
        }

        .service-name {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: -0.01em;
        }

        .service-click-tag {
          font-size: 12px;
          font-weight: 600;
          color: #B91C1C;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          opacity: 0.65;
          transform: translateY(2px);
          transition: all 0.25s ease;
          margin-top: -6px;
        }
        .service-cell:hover .service-click-tag {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- SERVICE POPUP MODAL --- */
        .service-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: serviceModalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes serviceModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .service-modal-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          max-width: 520px;
          width: 100%;
          padding: 34px 32px 28px 32px;
          position: relative;
          box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.35);
          animation: serviceModalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .service-modal-box.service-modal-box--wide {
          max-width: 820px;
          max-height: 90vh;
          overflow-y: auto;
        }

        /* Subitems inside modal for Accessories & Installation */
        .modal-subitems-wrapper {
          margin: 18px 0 24px 0;
        }

        .modal-subitems-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 12px;
        }

        .modal-subitem-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 16px 14px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.25s ease;
        }

        .modal-subitem-card:hover {
          background: #FFFFFF;
          border-color: #B91C1C;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -4px rgba(185, 28, 28, 0.12);
        }

        .modal-subitem-thumb {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #FFFFFF;
          box-shadow: 0 4px 10px rgba(15, 23, 42, 0.12);
          flex-shrink: 0;
        }

        .modal-subitem-info {
          flex: 1;
        }

        .modal-subitem-header-row {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 3px;
        }

        .modal-subitem-icon {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          background: #FEF2F2;
          color: #B91C1C;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .modal-subitem-icon svg {
          width: 12px;
          height: 12px;
        }

        .modal-subitem-tag {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #B91C1C;
          display: block;
        }

        .modal-subitem-title {
          font-family: var(--font-display);
          font-size: 14.5px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 3px 0;
          line-height: 1.25;
        }

        .modal-subitem-desc {
          font-size: 11.5px;
          line-height: 1.45;
          color: #64748B;
          margin: 0;
        }

        @keyframes serviceModalSlideUp {
          from {
            opacity: 0;
            transform: translateY(22px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .service-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #F1F5F9;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #475569;
          font-size: 16px;
          font-weight: 700;
          transition: all 0.2s ease;
        }
        .service-modal-close:hover {
          background: #B91C1C;
          color: #FFFFFF;
          transform: rotate(90deg);
        }

        .service-modal-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }

        .service-modal-icon-ring {
          width: 62px;
          height: 62px;
          border-radius: 18px;
          background: #FEF2F2;
          border: 1.5px solid rgba(185, 28, 28, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #B91C1C;
          flex-shrink: 0;
        }

        .service-modal-icon-ring svg {
          width: 30px;
          height: 30px;
        }

        .service-modal-meta {
          display: flex;
          flex-direction: column;
        }

        .service-modal-badge {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #B91C1C;
          margin-bottom: 2px;
        }

        .service-modal-title {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.2;
        }

        .service-modal-tagline {
          font-size: 13px;
          color: #64748B;
          font-weight: 600;
          margin-top: 2px;
        }

        .service-modal-body {
          font-size: 15px;
          line-height: 1.65;
          color: #475569;
          margin-bottom: 20px;
        }

        .service-modal-features-title {
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #0F172A;
          margin-bottom: 12px;
        }

        .service-modal-features {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .service-modal-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #334155;
          line-height: 1.5;
        }

        .service-modal-check {
          color: #B91C1C;
          font-weight: 800;
          font-size: 15px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .service-modal-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid #F1F5F9;
        }

        .service-modal-btn-primary {
          flex: 1;
          background: #B91C1C;
          color: #FFFFFF;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          text-align: center;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .service-modal-btn-primary:hover {
          background: #991B1B;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -4px rgba(185, 28, 28, 0.35);
        }

        .service-modal-btn-secondary {
          background: #F1F5F9;
          color: #475569;
          padding: 12px 18px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .service-modal-btn-secondary:hover {
          background: #E2E8F0;
          color: #0F172A;
        }

        @media (max-width: 640px) {
          .service-modal-box {
            padding: 24px 20px 20px 20px;
            border-radius: 20px;
          }
          .service-modal-title {
            font-size: 20px;
          }
          .service-modal-actions {
            flex-direction: column;
          }
          .service-modal-btn-primary,
          .service-modal-btn-secondary {
            width: 100%;
          }
        }

        /* --- PAGE 6: TESTIMONIALS & MISSION --- */
        .page-mission {
          background-color: #F8FAFC !important;
          background-image: 
            linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            radial-gradient(circle at 10% 20%, rgba(185, 28, 28, 0.04) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(185, 28, 28, 0.035) 0%, transparent 40%) !important;
          background-size: 40px 40px, 40px 40px, 100% 100%, 100% 100% !important;
          color: #0F172A !important;
          padding: 80px 48px !important;
          min-height: auto !important;
          position: relative !important;
          z-index: 5 !important;
          overflow: hidden !important;
          border-bottom: 1px solid #E2E8F0 !important;
          display: grid !important;
          grid-template-columns: 1.25fr 0.75fr !important;
          gap: 40px !important;
          align-items: start !important;
        }

        .mission-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .mission-eyebrow {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #B91C1C;
          margin-bottom: 4px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          padding: 6px 16px;
          border-radius: 50px;
          align-self: flex-start;
        }
        .mission-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #B91C1C;
        }

        .mission-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.2vw, 42px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #0F172A;
          margin: 0 0 6px 0;
        }
        .mission-title span {
          color: #B91C1C;
        }

        .mission-statement-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-left: 4px solid #B91C1C;
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);
        }

        .mission-statement-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .mission-quote-mark {
          font-family: Georgia, serif;
          font-size: 30px;
          line-height: 1;
          color: #B91C1C;
          font-weight: 700;
        }

        .mission-core-tag {
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #B91C1C;
          background: #FEF2F2;
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid rgba(185, 28, 28, 0.15);
        }

        .mission-statement-text {
          font-size: 14.5px;
          line-height: 1.7;
          color: #334155;
          margin: 0;
        }

        /* Google Reputation Bar */
        .google-reputation-strip {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);
          flex-wrap: wrap;
        }

        .google-reputation-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .google-score-box {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #334155;
          flex-wrap: wrap;
        }
        .google-stars {
          color: #F59E0B;
          font-size: 14px;
          letter-spacing: 1.5px;
        }
        .google-score-box strong {
          color: #0F172A;
          font-weight: 700;
        }
        .google-dot {
          color: #94A3B8;
        }
        .google-source {
          color: #64748B;
          font-size: 12px;
        }

        .google-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #B91C1C;
          color: #FFFFFF;
          padding: 9px 18px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px -2px rgba(185, 28, 28, 0.35);
          white-space: nowrap;
        }
        .google-action-btn:hover {
          background: #DC2626;
          transform: translateY(-1px);
          box-shadow: 0 8px 18px -2px rgba(220, 38, 38, 0.45);
          color: #FFFFFF;
        }

        /* 4 Google Reviews Grid (Equal Size) */
        .testimonials-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: 1fr;
          gap: 16px;
          width: 100%;
        }

        .review-card-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 18px 20px;
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 220px;
          height: 100%;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .review-card-item:hover {
          border-color: rgba(185, 28, 28, 0.35);
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -4px rgba(185, 28, 28, 0.1), 0 4px 12px rgba(15, 23, 42, 0.03);
        }

        .review-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .review-stars-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .review-stars {
          color: #F59E0B;
          font-size: 13px;
          letter-spacing: 1.5px;
          line-height: 1;
        }

        .review-time {
          font-size: 11px;
          color: #94A3B8;
          font-weight: 500;
        }

        .review-card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin-bottom: 12px;
        }

        .review-card-text {
          font-size: 13px;
          line-height: 1.55;
          color: #334155;
          margin: 0;
          word-break: break-word;
        }

        .review-card-text.is-clamped {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 60.5px; /* exactly 3 lines */
          max-height: 60.5px;
        }

        .review-card-text.is-expanded {
          display: block;
          min-height: 60.5px;
          max-height: none;
          white-space: pre-line;
        }

        .review-readmore-btn {
          background: none;
          border: none;
          color: #B91C1C;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          padding: 0;
          margin-top: 6px;
          display: inline-block;
          align-self: flex-start;
          transition: color 0.2s ease;
          font-family: inherit;
        }
        .review-readmore-btn:hover {
          color: #DC2626;
          text-decoration: underline;
        }

        .review-card-author {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px solid #F1F5F9;
        }

        .review-author-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0F172A, #334155);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 13px;
          font-family: var(--font-display);
          flex-shrink: 0;
        }

        .review-author-info {
          min-width: 0;
        }

        .review-author-name {
          display: block;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .review-author-meta {
          display: block;
          font-size: 10.5px;
          color: #64748B;
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Right Column: Sticky Gallery */
        .mission-right {
          position: sticky;
          top: 100px;
          margin-top: 170px;
          display: grid;
          grid-template-rows: 1.35fr 1fr;
          gap: 16px;
          height: 680px;
        }

        .gallery-card-top {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid #E2E8F0;
          background: #F1F5F9;
          box-shadow: 0 10px 24px -6px rgba(15, 23, 42, 0.06);
          min-height: 280px;
        }
        .gallery-card-top img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-card-top:hover img {
          transform: scale(1.05);
        }

        .gallery-glass-pill-top {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 11.5px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }
        .pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #EF4444;
        }

        .gallery-glass-pill-bottom {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(16px);
          border: 1px solid #E2E8F0;
          border-left: 4px solid #B91C1C;
          padding: 12px 18px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 24px -4px rgba(15, 23, 42, 0.12);
        }
        .trust-pill-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #B91C1C;
          box-shadow: 0 0 0 4px rgba(185, 28, 28, 0.18);
          animation: liveDot 2.2s infinite;
          flex-shrink: 0;
        }
        .gallery-glass-pill-bottom strong {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 800;
          color: #0F172A;
          display: block;
        }
        .gallery-glass-pill-bottom p {
          font-size: 11px;
          color: #64748B;
          margin: 0;
        }

        /* Dual Bottom Images */
        .gallery-cards-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          height: 100%;
          min-height: 180px;
        }

        .gallery-card-sub {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          background: #F1F5F9;
          box-shadow: 0 6px 18px -4px rgba(15, 23, 42, 0.05);
        }
        .gallery-card-sub img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-card-sub:hover img {
          transform: scale(1.06);
        }

        .gallery-sub-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(15, 23, 42, 0.78);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        /* --- PAGE: ADVANTAGES OF TRUSS-LESS ROOFS (MINIMAL) --- */
        .page-advantages {
          background: #FFFFFF;
          padding: 90px 48px;
          border-bottom: 1px solid #E2E8F0;
          position: relative;
          z-index: 5;
        }

        .adv-header-minimal {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 44px auto;
        }

        .section-tag-red {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #B91C1C;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          padding: 5px 16px;
          border-radius: 50px;
          margin-bottom: 14px;
        }

        .adv-title-minimal {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 10px 0;
        }

        .adv-title-minimal span {
          color: #B91C1C;
        }

        .adv-subtitle-minimal {
          font-size: 15px;
          line-height: 1.65;
          color: #64748B;
          margin: 0;
        }

        /* 8 Minimal Hallmarks Grid */
        .adv-badges-grid-minimal {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 36px;
        }

        .adv-badge-card-minimal {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 18px 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.25s ease;
        }

        .adv-badge-card-minimal:hover {
          background: #FFFFFF;
          border-color: #B91C1C;
          transform: translateY(-3px);
          box-shadow: 0 10px 24px -4px rgba(185, 28, 28, 0.12);
        }

        .adv-badge-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .adv-badge-icon-wrap svg {
          width: 22px;
          height: 22px;
        }

        .adv-badge-text h4 {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 2px 0;
        }

        .adv-badge-text span {
          font-size: 11.5px;
          color: #64748B;
          display: block;
        }

        /* 14 Points Minimal Checklist */
        .adv-checklist-minimal {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 28px 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 28px;
        }

        .adv-check-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #334155;
          line-height: 1.5;
        }

        .adv-check-icon {
          color: #B91C1C;
          font-weight: 800;
          font-size: 13px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* --- PAGE: BENEFITS OF ROOFING MATERIALS (MINIMAL) --- */
        .page-benefits {
          background: #F8FAFC;
          padding: 90px 48px;
          border-bottom: 1px solid #E2E8F0;
          position: relative;
          z-index: 5;
        }

        .benefits-header-minimal {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 36px auto;
        }

        .galvalume-quote-minimal {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-left: 4px solid #B91C1C;
          border-radius: 12px;
          padding: 14px 22px;
          font-size: 13.5px;
          color: #334155;
          margin: 16px auto 0 auto;
          line-height: 1.6;
          font-style: italic;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
          max-width: 660px;
        }

        .materials-grid-minimal {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 36px;
        }

        .mat-card-minimal {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 24px 22px;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .mat-card-minimal:hover {
          border-color: #B91C1C;
          transform: translateY(-3px);
          box-shadow: 0 12px 28px -6px rgba(185, 28, 28, 0.12);
        }

        .mat-card-top-minimal {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .mat-card-icon-minimal {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          color: #B91C1C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mat-card-minimal:hover .mat-card-icon-minimal {
          background: #B91C1C;
          color: #FFFFFF;
          transform: scale(1.08) rotate(4deg);
          box-shadow: 0 6px 16px rgba(185, 28, 28, 0.25);
        }

        .mat-card-icon-minimal svg {
          width: 22px;
          height: 22px;
        }

        .mat-badge-minimal {
          font-size: 10.5px;
          font-weight: 700;
          color: #B91C1C;
          background: #FEF2F2;
          padding: 3px 8px;
          border-radius: 50px;
        }

        .mat-title-minimal {
          font-family: var(--font-display);
          font-size: 16.5px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .mat-desc-minimal {
          font-size: 13px;
          line-height: 1.6;
          color: #64748B;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .adv-badges-grid-minimal { grid-template-columns: repeat(2, 1fr); }
          .materials-grid-minimal { grid-template-columns: repeat(2, 1fr); }
          .modal-subitems-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .page-advantages, .page-benefits { padding: 60px 20px; }
          .adv-badges-grid-minimal, .materials-grid-minimal { grid-template-columns: 1fr; }
          .adv-checklist-minimal { grid-template-columns: 1fr; padding: 22px 18px; }
        }

        /* --- PAGE 7: CERTIFIED PROFESSIONALS --- */
        .page-certified {
          background-color: #FFFFFF;
          background-image: 
            radial-gradient(circle, rgba(15, 23, 42, 0.055) 1.5px, transparent 1.5px),
            radial-gradient(circle at 80% 20%, rgba(185, 28, 28, 0.05) 0%, transparent 50%),
            linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
          background-size: 28px 28px, 100% 100%, 100% 100%;
          color: #0F172A;
          padding: 130px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 5;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
        }

        .certified-img-wrapper {
          overflow: hidden;
          border-radius: 20px;
          height: 520px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 16px 40px -10px rgba(15, 23, 42, 0.12);
          background: #F1F5F9;
          position: relative;
        }

        .cert-floating-tag {
          position: absolute;
          bottom: 24px;
          right: 24px;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(16px);
          color: #FFFFFF;
          padding: 12px 20px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
          animation: subtleFloat 3.8s ease-in-out infinite;
          z-index: 3;
        }
        .cert-floating-tag .cert-icon {
          color: #EF4444;
          font-size: 16px;
        }

        .certified-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }

        .certified-img-wrapper:hover img { transform: scale(1.05); }

        .certified-eyebrow {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #B91C1C;
          margin-bottom: 20px;
          display: inline-block;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          padding: 6px 16px;
          border-radius: 50px;
        }

        .certified-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.12;
          color: #0F172A;
          margin-bottom: 28px;
        }

        .certified-body {
          font-size: 16px;
          line-height: 1.75;
          color: #475569;
          max-width: 480px;
        }

        .certified-pills {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 28px;
        }
        .cert-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 12px 18px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #1E293B;
          transition: all 0.3s ease;
          cursor: default;
        }
        .cert-pill span {
          color: #B91C1C;
          font-size: 14px;
          transition: transform 0.3s ease;
        }
        .cert-pill:hover {
          background: #FFFFFF;
          border-color: #B91C1C;
          transform: translateX(6px);
          box-shadow: 0 6px 18px -2px rgba(185, 28, 28, 0.12);
        }
        .cert-pill:hover span {
          transform: scale(1.3) rotate(45deg);
        }

        /* --- PAGE 9: INDUSTRIES WE CATER --- */
        .page-industries {
          background-color: #FFFFFF;
          background-image: 
            radial-gradient(circle, rgba(15, 23, 42, 0.055) 1.5px, transparent 1.5px),
            radial-gradient(circle at 50% 20%, rgba(185, 28, 28, 0.05) 0%, transparent 60%);
          background-size: 30px 30px, 100% 100%;
          color: #0F172A;
          padding: 130px 48px 100px 48px;
          position: relative;
          z-index: 5;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
        }

        .industries-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .industries-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #0F172A;
          margin-bottom: 18px;
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
          background: #B91C1C;
          opacity: 0.35;
          border-radius: 50%;
          display: inline-block;
        }

        .industries-divider span:last-child {
          width: 44px;
          height: 3px;
          background: #B91C1C;
          display: inline-block;
          border-radius: 2px;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          border: none;
          margin-top: 48px;
        }

        .industry-cell {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 26px 24px;
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: -0.01em;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
          position: relative;
          overflow: hidden;
        }

        .industry-cell-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .industry-cell-left::before {
          content: "";
          width: 8px;
          height: 8px;
          background: #B91C1C;
          border-radius: 50%;
          opacity: 0.7;
          transition: all 0.3s;
          flex-shrink: 0;
        }

        .industry-cell .ind-arrow {
          font-size: 16px;
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.3s ease;
          color: #FFFFFF;
        }

        .industry-cell:hover {
          background: #B91C1C;
          border-color: #B91C1C;
          color: #FFFFFF;
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 14px 28px -4px rgba(185, 28, 28, 0.35);
        }

        .industry-cell:hover .industry-cell-left::before { 
          background: #FFFFFF; 
          opacity: 1; 
          transform: scale(1.3);
        }

        .industry-cell:hover .ind-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* --- PAGE 9.5: PREFERRED MATERIAL PARTNERS (BRANDS) --- */
        .page-brands {
          background-color: #FFFFFF;
          background-image: 
            radial-gradient(circle, rgba(15, 23, 42, 0.055) 1.5px, transparent 1.5px),
            radial-gradient(circle at 50% 20%, rgba(185, 28, 28, 0.04) 0%, transparent 60%);
          background-size: 30px 30px, 100% 100%;
          color: #0F172A;
          padding: 100px 48px 100px 48px;
          position: relative;
          z-index: 5;
          overflow: hidden;
          border-bottom: 1px solid #E2E8F0;
        }

        .brands-container {
          max-width: 1050px;
          margin: 0 auto;
        }

        .brands-header {
          text-align: center;
          margin-bottom: 16px;
        }

        .brands-main-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #0F172A;
          margin-bottom: 18px;
        }

        .brands-simple-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 900px;
          margin: 48px auto 0 auto;
        }

        .brand-logo-card {
          background: #FFFFFF;
          border: 0px solid #E2E8F0;
          border-radius: 16px;
          padding: 44px 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 160px;
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }

        .brand-logo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px -4px rgba(15, 23, 42, 0.07);
          border-color: #CBD5E1;
        }

        .brand-logo-pure {
          max-height: 95px;
          max-width: 90%;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        /* --- PAGE 10: METRICS STRIP --- */
        .metrics-strip {
          background-color: #F8FAFC;
          background-image: 
            linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
          background-size: 32px 32px;
          padding: 90px 48px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          border-bottom: 1px solid #E2E8F0;
          position: relative;
          z-index: 5;
        }

        .metric-block {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          text-align: center;
          padding: 44px 24px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
          position: relative;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .metric-block::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #B91C1C;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .metric-block:hover::before {
          transform: scaleX(1);
        }

        .metric-block:hover {
          transform: translateY(-6px);
          border-color: #B91C1C;
          box-shadow: 0 16px 36px -6px rgba(185, 28, 28, 0.15);
        }

        .metric-number {
          font-family: var(--font-display);
          font-size: clamp(44px, 4.5vw, 64px);
          font-weight: 800;
          color: #B91C1C;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 10px;
        }

        .metric-label {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #64748B;
        }

        /* --- FAQ SECTION (SEO & KNOWLEDGE BASE) --- */
        .page-faq {
          background-color: #F8FAFC;
          background-image: 
            radial-gradient(circle, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
          background-size: 24px 24px;
          padding: 100px 48px;
          border-bottom: 1px solid #E2E8F0;
          position: relative;
          z-index: 5;
        }

        .faq-container {
          max-width: 960px;
          margin: 0 auto;
          width: 100%;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .faq-badge {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #B91C1C;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          padding: 6px 16px;
          border-radius: 50px;
          display: inline-block;
          margin-bottom: 16px;
        }

        .faq-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.4vw, 44px);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .faq-description {
          font-size: 15px;
          color: #64748B;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-item {
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
        }

        .faq-item:hover {
          border-color: #CBD5E1;
        }

        .faq-item.active {
          border-color: #B91C1C;
          box-shadow: 0 8px 24px -4px rgba(185, 28, 28, 0.12);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          gap: 16px;
          font-family: var(--font-display);
          font-size: 16.5px;
          font-weight: 700;
          color: #0F172A;
          transition: color 0.2s ease;
        }

        .faq-question:hover {
          color: #B91C1C;
        }

        .faq-item.active .faq-question {
          color: #B91C1C;
        }

        .faq-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #F1F5F9;
          color: #64748B;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, color 0.2s ease;
        }

        .faq-item.active .faq-icon-wrapper {
          background: #FEF2F2;
          color: #B91C1C;
          transform: rotate(180deg);
        }

        .faq-answer-collapse {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, padding 0.3s ease;
          padding: 0 24px;
        }

        .faq-item.active .faq-answer-collapse {
          max-height: 400px;
          opacity: 1;
          padding: 0 24px 22px 24px;
        }

        .faq-answer-text {
          font-size: 14.5px;
          line-height: 1.7;
          color: #475569;
          border-top: 1px solid #F1F5F9;
          padding-top: 14px;
        }

        .faq-answer-text strong {
          color: #0F172A;
        }

        .faq-bottom-cta {
          margin-top: 36px;
          padding: 18px 24px;
          background: #FFFFFF;
          border: 1px dashed #CBD5E1;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 14px;
          color: #475569;
          font-weight: 500;
        }

        .faq-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #B91C1C;
          color: #FFFFFF !important;
          padding: 9px 18px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 13.5px;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .faq-cta-btn:hover {
          background: #991B1B;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px -4px rgba(185, 28, 28, 0.3);
        }

        /* --- PAGE 11: CONTACT & FOOTER --- */
        .page-contact {
          background-color: #FFFFFF;
          background-image: 
            radial-gradient(circle, rgba(15, 23, 42, 0.05) 1.5px, transparent 1.5px),
            linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);
          background-size: 32px 32px, 100% 100%;
          padding: 120px 48px 80px 48px;
          position: relative;
          z-index: 5;
          overflow: hidden;
          border-top: 1px solid #E2E8F0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr 1.2fr 1.35fr;
          gap: 40px;
          margin-bottom: 70px;
        }

        .contact-links-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-quick-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-quick-links li a {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #0F172A;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .footer-quick-links li a:hover {
          color: #B91C1C;
          transform: translateX(4px);
        }

        .contact-section-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #B91C1C;
          margin-bottom: 24px;
          display: inline-block;
          background: #FEF2F2;
          border: 1px solid rgba(185, 28, 28, 0.2);
          padding: 5px 14px;
          border-radius: 50px;
        }

        .contact-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.5vw, 48px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #0F172A;
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
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #64748B;
        }

        .contact-row-value {
          font-size: 15px;
          font-weight: 600;
          color: #0F172A;
          line-height: 1.5;
        }

        .contact-row-value a {
          color: #0F172A;
          text-decoration: none;
          transition: color 0.2s;
          display: block;
        }

        .contact-row-value a:hover { color: #B91C1C; }

        .contact-brand-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-brand-col .nav-logo {
          color: #0F172A;
        }

        .contact-brand-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #475569;
          max-width: 320px;
        }

        .contact-social-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .social-follow-label {
          font-family: var(--font-display), sans-serif;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #B91C1C;
        }

        .contact-social-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
        }

        .social-btn:hover {
          transform: translateY(-3px) scale(1.08);
          color: #FFFFFF !important;
        }

        /* Facebook: #1877F2 */
        .social-btn.social-fb {
          background: #EEF4FF;
          border: 1.5px solid #D0E1FD;
          color: #1877F2;
        }
        .social-btn.social-fb:hover {
          background: #1877F2;
          border-color: #1877F2;
          box-shadow: 0 10px 22px -3px rgba(24, 119, 242, 0.4);
        }

        /* Instagram: Sunset pink/magenta #E1306C */
        .social-btn.social-ig {
          background: #FFF1F5;
          border: 1.5px solid #FBCFE8;
          color: #E1306C;
        }
        .social-btn.social-ig:hover {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          border-color: #d6249f;
          box-shadow: 0 10px 22px -3px rgba(225, 48, 108, 0.4);
        }

        /* WhatsApp: #25D366 */
        .social-btn.social-wa {
          background: #F0FDF4;
          border: 1.5px solid #BBF7D0;
          color: #25D366;
        }
        .social-btn.social-wa:hover {
          background: #25D366;
          border-color: #25D366;
          box-shadow: 0 10px 22px -3px rgba(37, 211, 102, 0.4);
        }

        /* LinkedIn: #0A66C2 */
        .social-btn.social-li {
          background: #EFF6FF;
          border: 1.5px solid #BFDBFE;
          color: #0A66C2;
        }
        .social-btn.social-li:hover {
          background: #0A66C2;
          border-color: #0A66C2;
          box-shadow: 0 10px 22px -3px rgba(10, 102, 194, 0.4);
        }

        /* YouTube: #FF0000 */
        .social-btn.social-yt {
          background: #FEF2F2;
          border: 1.5px solid #FECACA;
          color: #FF0000;
        }
        .social-btn.social-yt:hover {
          background: #FF0000;
          border-color: #FF0000;
          box-shadow: 0 10px 22px -3px rgba(255, 0, 0, 0.4);
        }

        .iso-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #64748B;
          border: 1px solid #E2E8F0;
          padding: 6px 14px;
          border-radius: 6px;
          background: #F8FAFC;
          display: inline-block;
        }

        .contact-divider {
          border: none;
          border-top: 1px solid #E2E8F0;
          margin-bottom: 32px;
        }

        .contact-footer-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-copy {
          font-size: 13px;
          color: #64748B;
        }

        .footer-copy a { color: #64748B; text-decoration: none; }
        .footer-copy a:hover { color: #B91C1C; }

        /* =============================================
           MOBILE RESPONSIVENESS – Homepage
           ============================================= */
        @media (max-width: 1024px) {
          .hero-content { padding: 100px 32px 60px 32px; }
          .premium-stats-wrapper { right: 24px; bottom: 80px; width: 180px; }
          .page-stories { grid-template-columns: 1fr; min-height: auto; }
          .story-hero-pane { padding: 80px 40px 60px 40px; border-right: none; border-bottom: 1px solid #E2E8F0; }
          .story-split-pane { grid-template-rows: auto 300px; }
          .app-grid { grid-template-columns: repeat(2, 1fr); }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .page-mission { grid-template-columns: 1fr 1fr; padding: 100px 32px; gap: 48px; }
          .page-certified { padding: 100px 32px; gap: 48px; }
          .industries-grid { grid-template-columns: repeat(2, 1fr); }
          .metrics-strip { padding: 60px 32px; grid-template-columns: repeat(2, 1fr); }
          .contact-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
          .page-applications { padding: 50px 32px 35px 32px; min-height: auto; }
          .page-services { padding: 80px 32px; }
          .page-benefits { padding: 80px 32px; }
          .page-industries { padding: 80px 32px; }
          .page-brands { padding: 80px 32px; }
          .page-faq { padding: 80px 32px; }
          .page-contact { padding: 80px 32px; }
          .contact-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
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
          .hero-landing { height: 100vh !important; min-height: 100vh !important; }
          .global-nav-wrapper { padding: 14px 16px; flex-wrap: wrap; gap: 12px; }
          .hero-content { padding: 80px 20px 48px 20px; }
          .hero-tagline { font-size: clamp(28px, 8vw, 48px); }
          .hero-bottom-row { flex-direction: column; align-items: flex-start; gap: 20px; }
          .page-stories { display: flex; flex-direction: column; }
          .story-hero-pane { padding: 60px 20px; }
          .story-split-pane { display: flex; flex-direction: column; }
          .report-block { padding: 40px 20px; }
          .story-image-block { height: 240px; }
          .page-applications { padding: 40px 20px 24px 20px; min-height: auto; }
          .app-header { flex-direction: column; align-items: flex-start; gap: 16px; margin-bottom: 24px; padding-bottom: 16px; }
          .app-header h2 { font-size: 32px; }
          .app-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .app-img-wrapper { height: 140px; }
          .app-card-content { padding: 16px 12px; }
          .app-card h4 { font-size: 15px; margin-bottom: 0; text-align: center; line-height: 1.3; }
          .page-services { padding: 60px 20px; }
          .services-grid { grid-template-columns: 1fr; gap: 12px; }
          .page-mission { grid-template-columns: 1fr !important; padding: 60px 20px !important; gap: 36px !important; }
          .testimonials-cards-grid { grid-template-columns: 1fr; }
          .mission-right { height: 380px; position: relative; top: 0; }
          .page-benefits { padding: 80px 20px; }
          .benefits-layout { grid-template-columns: 1fr; gap: 40px; }
          .benefits-grid { grid-template-columns: 1fr; }
          .page-certified { grid-template-columns: 1fr; padding: 80px 20px; gap: 40px; }
          .certified-img-wrapper { height: 300px; }
          .page-industries { padding: 80px 20px 40px 20px; }
          .industries-grid { grid-template-columns: 1fr; }
          .industry-cell { padding: 20px 16px; font-size: 15px; }
          .page-brands { padding: 60px 20px 40px 20px; }
          .brands-simple-grid { grid-template-columns: 1fr; gap: 20px; margin-top: 32px; }
          .brand-logo-card { padding: 32px 24px; min-height: 125px; }
          .brand-logo-pure { max-height: 70px; }
          .metrics-strip { padding: 40px 20px; grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .metric-block { padding: 24px 16px; }
          .metric-number { font-size: 36px !important; margin-bottom: 8px; }
          .metric-label { font-size: 10px; line-height: 1.3; }
          .page-faq { padding: 50px 20px 40px 20px; }
          .faq-question { padding: 16px 18px; font-size: 15px; }
          .faq-item.active .faq-answer-collapse { padding: 0 18px 18px 18px; }
          .faq-bottom-cta { flex-direction: column; text-align: center; }
          .faq-cta-btn { width: 100%; justify-content: center; }
          .page-contact { padding: 60px 20px 40px 20px; }
          .contact-grid { grid-template-columns: 1fr; gap: 40px; margin-bottom: 40px; }
          .contact-footer-bar { flex-direction: column; gap: 12px; text-align: center; }
        }

        @media (max-width: 480px) {
          .app-grid { grid-template-columns: 1fr; }
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
  { value: "9+", label: "Years of Experience" },
  { value: "100+", label: "Skilled labours" },
  { value: "500+", label: "Completed Projects" },
  { value: "5 +", label: "States" },
];

const SERVICES = [
  {
    name: "Consultation",
    tagline: "Expert Engineering & Span Feasibility",
    description:
      "Our team provides end-to-end architectural and structural consultation for industrial, commercial, and warehousing projects. We evaluate site parameters, wind loads, and functional needs to engineer the ideal clear-span roofing architecture.",
    features: [
      "Zero-obligation span feasibility & site orientation study",
      "Structural load, slope, and curvature calculations up to 38m clear span",
      "Comprehensive material specification & cost-benefit analysis",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
  },
  {
    name: "Free Inspection",
    tagline: "Comprehensive Site Survey & Health Check",
    description:
      "We offer complimentary, zero-cost on-site technical inspections by certified structural engineers. We inspect existing plinths, verify foundation levels, examine old roof conditions, and deliver actionable assessments.",
    features: [
      "Precision laser leveling and elevation surveys",
      "Structural tie-beam alignment & boundary clearance audit",
      "Detailed inspection report and transparent cost forecast",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    name: "Own Site Manufacturing",
    tagline: "On-Location Mobile Roll-Forming Units",
    description:
      "Vinfra brings specialized mobile roll-forming machinery straight to your project site. We fabricate continuous, custom-curved arch panels directly on location, eliminating transport size limits and vulnerable overlapping joints.",
    features: [
      "Continuous seam panels fabricated without transport joints",
      "Computerized roll-forming with calibrated curvature precision",
      "High-speed production capacity of hundreds of meters per day",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20M5 20V9l5 4V9l5 4V5l5 4v11" />
        <path d="M9 16h2M14 16h2" />
      </svg>
    ),
  },
  {
    name: "Installation",
    tagline: "4-Stage On-Site Crane-Assisted Erection",
    description:
      "Our certified erection crews employ calibrated tandem crane systems and automated mechanical seamers. We assemble, lift, and lock arch panels into position—installing up to 1,000m² every 24 hours.",
    features: [
      "Coil Loading: Hydraulic uncoiling and precision roll-feed",
      "Panel Fabrication: Continuous on-site arch forming without end-laps",
      "Panel Seaming: 100% puncture-free motorized mechanical interlock",
      "Crane Setup & Installation: Calibrated hoisting onto boundary beams",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 22h20M4 22V6l10-4v20M14 2h7l-3 4h4" />
        <path d="M9 11l5 4M9 17l5-4" />
      </svg>
    ),
  },
  {
    name: "Accessories",
    tagline: "Turbo Ventilators, Skylights, Hangers & Ceilings",
    description:
      "Enhance operational efficiency, natural lighting, and interior aesthetics with custom accessories engineered specifically for curved trussless arches without requiring perforations.",
    features: [
      "Turbo - Ventilators: Wind-driven rooftop exhaust systems for continuous airflow",
      "Skylights: Curved UV-stabilized polycarbonate daylighting panels",
      "Hangers: Specially engineered clamps for suspended lights, ducts & trays",
      "False ceilings: Aesthetic, acoustic, and climate-controlled ceiling solutions",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    name: "Support",
    tagline: "Lifecycle Maintenance & Warranty Guarantee",
    description:
      "Our relationship continues well after installation. Vinfra offers comprehensive warranty coverage, periodic structural checkups, and rapid-response emergency maintenance throughout India.",
    features: [
      "Comprehensive structural warranty & leak-proof performance guarantee",
      "Scheduled preventive maintenance & joint integrity audits",
      "Dedicated client support helpline with swift pan-India response",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
      </svg>
    ),
  },
];

const ACCESSORIES_LIST = [
  {
    title: "Turbo - Ventilators",
    category: "Natural Airflow",
    badge: "01",
    img: "/features/turbo_ventilators.webp",
    summary: "Wind-driven rooftop turbo ventilators engineered for continuous, zero-power natural air circulation.",
    points: [
      "Operates 100% on wind energy with zero electricity cost",
      "Continuously expels hot air, humidity, toxic fumes & smoke",
      "Stainless steel & aluminum anti-corrosive build",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeOpacity="0.25" />
        <path d="M12 12c-2.2 0-4-1.8-4-4 0-1.8 1.2-3.3 2.8-3.8C10.3 3.5 10 2.8 10 2" strokeWidth="1.8" />
        <path d="M12 12c0 2.2 1.8 4 4 4 1.8 0 3.3-1.2 3.8-2.8.7.5 1.4.8 2.2.8" strokeWidth="1.8" />
        <path d="M12 12c0-2.2-1.8-4-4-4-1.8 0-3.3 1.2-3.8 2.8-.7-.5-1.4-.8-2.2-.8" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Skylights",
    category: "Daylight System",
    badge: "02",
    img: "/features/skylights.webp",
    summary: "Curved polycarbonate translucent roof panels tailored seamlessly to trussless arch corrugations.",
    points: [
      "Transmits abundant natural daylight, reducing daytime lighting bills",
      "UV-resistant, shatter-proof multi-wall polycarbonate",
      "Seamlessly seamed with zero leak or penetration points",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18C3 11 7 5 12 5C17 5 21 11 21 18" strokeWidth="2" />
        <path d="M12 5V1" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 6L4 3" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 6L20 3" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 11L8 18M15 11L16 18M12 8V18" strokeWidth="1.6" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "Hangers",
    category: "Utility Support",
    badge: "03",
    img: "/features/hangers.webp",
    summary: "Heavy-duty structural clamp brackets engineered specifically for rib attachment without puncturing.",
    points: [
      "Secure clamp-on mounting for lights, cables, and false ceilings",
      "Preserves watertight integrity with zero hole drilling",
      "High load-bearing capability tested for industrial fittings",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3H18V7C18 8.1 17.1 9 16 9H8C6.9 9 6 8.1 6 7V3Z" strokeWidth="2" />
        <path d="M12 9V17" strokeWidth="2.2" />
        <path d="M8 17H16L18 21H6L8 17Z" strokeWidth="2" />
        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "False ceilings",
    category: "Interior Finish",
    badge: "04",
    img: "/features/false_ceilings.webp",
    summary: "Integrated false ceiling framing systems providing thermal insulation, acoustics, and elegance.",
    points: [
      "Enhanced thermal comfort and significant HVAC load reduction",
      "Superior acoustic dampening for auditoriums & event halls",
      "Clean architectural aesthetics concealing utilities",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5H21" strokeWidth="2.5" />
        <path d="M6 5V9M12 5V9M18 5V9" strokeWidth="1.8" />
        <rect x="3" y="9" width="18" height="11" rx="2" strokeWidth="2" />
        <path d="M3 14H21M9 9V20M15 9V20" strokeWidth="1.6" />
      </svg>
    ),
  },
];

const INSTALLATION_STAGES = [
  {
    stage: "Stage 01",
    title: "Coil Loading",
    category: "Preparation & Feed",
    badge: "01",
    img: "/features/coil_loading.webp",
    summary: "High-grade Galvalume structural steel coils are loaded onto automated hydraulic mobile de-coilers.",
    points: [
      "Heavy-capacity de-coiler handles prime coated master coils",
      "Laser-guided alignment ensures straight automated feeding",
      "Eliminates transport deformation and factory handling damage",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="8" rx="8" ry="4" strokeWidth="2" />
        <path d="M4 8V16C4 18.2 7.6 20 12 20C16.4 20 20 18.2 20 16V8" strokeWidth="2" />
        <ellipse cx="12" cy="8" rx="4" ry="2" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1" />
        <path d="M12 6V10" strokeWidth="2" />
      </svg>
    ),
  },
  {
    stage: "Stage 02",
    title: "Panel Fabrication",
    category: "On-Site Roll-Forming",
    badge: "02",
    img: "/features/panel_fabrication.webp",
    summary: "Mobile computerized roll-forming units shape raw coils into continuous curved arch panels on location.",
    points: [
      "Continuous seam lengths fabricated without end-laps or joints",
      "Deep profile corrugation for maximum structural stiffness",
      "Precision computerized radius control matching exact span curves",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="3.5" strokeWidth="2" />
        <circle cx="18" cy="12" r="3.5" strokeWidth="2" />
        <path d="M2 12H2.5M21.5 12H22" strokeWidth="2" />
        <path d="M9.5 12H14.5" strokeWidth="2.5" />
        <path d="M2 7C8 7 16 4 22 4" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 17C8 17 16 20 22 20" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    stage: "Stage 03",
    title: "Panel Seaming",
    category: "Mechanical Interlock",
    badge: "03",
    img: "/features/panel_seaming.webp",
    summary: "Motorized electric seaming machines crimp adjacent panel edges with 100% puncture-free seams.",
    points: [
      "Zero nuts, bolts, or screws through the roofing sheet surface",
      "360-degree double-lock seam guarantees hermetic waterproofing",
      "Rapid automatic interlocking of arches on ground staging area",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14V10C4 8.9 4.9 8 6 8H18C19.1 8 20 8.9 20 10V14" strokeWidth="2" />
        <path d="M2 14H22V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V14Z" strokeWidth="2" />
        <circle cx="7" cy="17.5" r="1.5" fill="currentColor" />
        <circle cx="17" cy="17.5" r="1.5" fill="currentColor" />
        <path d="M12 4V8M9 4H15" strokeWidth="2" />
      </svg>
    ),
  },
  {
    stage: "Stage 04",
    title: "Crane Setup & Installation",
    category: "Precision Hoisting",
    badge: "04",
    img: "/features/crane_setup.webp",
    summary: "Calibrated crane assemblies hoist multiple pre-seamed arches onto perimeter tie-beams.",
    points: [
      "Up to 1,000 m² hoisted and locked into position within 24 hours",
      "Anchored securely to RCC or steel perimeter ring beams",
      "Strict compliance with industrial safety & tandem lift protocols",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21H21" strokeWidth="2.5" />
        <path d="M5 21V11L14 3H19L8 15V21" strokeWidth="2" />
        <path d="M14 3V11M14 11H19" strokeWidth="1.8" />
        <path d="M19 11V16" strokeWidth="2" strokeDasharray="2 2" />
        <path d="M16 16C17 18 21 18 22 16" strokeWidth="2" />
      </svg>
    ),
  },
];

const ADVANTAGES_POINTS = [
  "Girderless - wide- clear Spans up to 38 meters",
  "Quick & Easy installation",
  "Installation of 1000m² in just 24 hours",
  "The faster installation enables you to start your project quicker",
  "Savings in structural cost(truss and purlins)",
  "Design freedom & Aesthetic value",
  "Freedom from Bird Infiltration",
  "The depth of corrugation in the steel adds to the inherent strength",
  "Ability to withstand live & dead load",
  "Higher corrosion resistance",
  "Mechanical interlocked sheets prevent holes in the roof- caused by bolts & nuts",
  "The overlapping and seaming between different sheets prevents leakage of water and provides dry interiors.",
  "Zero maintenance cost",
  "Higher durability than conventional roofing",
];

const ADVANTAGES_BADGES = [
  {
    name: "Wide Span",
    tagline: "Up to 38m Girderless",
    desc: "100% unobstructed internal volume without pillars or trusses.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 19V14C3 8.5 7 4.5 12 4.5C17 4.5 21 8.5 21 14V19" />
        <path d="M6 19V15.5C6 11.5 8.7 8 12 8C15.3 8 18 11.5 18 15.5V19" strokeOpacity="0.45" strokeDasharray="2 2" />
        <path d="M2 19H7M17 19H22" strokeWidth="2.2" />
        <path d="M7 15H17M7 15L9 13.5M7 15L9 16.5M17 15L15 13.5M17 15L15 16.5" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    name: "Maintanance Free",
    tagline: "Zero Recurring Costs",
    desc: "Seamless interlocking eliminates rust spots, loose bolts, and paint re-coats.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5L4 6V12C4 17.5 7.5 21 12 22C16.5 21 20 17.5 20 12V6L12 2.5Z" />
        <path d="M8.5 12C8.5 10.9 9.4 10 10.5 10C11.1 10 11.6 10.4 12 10.9C12.4 10.4 12.9 10 13.5 10C14.6 10 15.5 10.9 15.5 12C15.5 13.1 14.6 14 13.5 14C12.9 14 12.4 13.6 12 13.1C11.6 13.6 11.1 14 10.5 14C9.4 14 8.5 13.1 8.5 12Z" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="7.5" strokeOpacity="0.3" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: "Cost Saving",
    tagline: "Truss & Purlin Free",
    desc: "Huge savings in structural steel, foundation mass, and total construction timeline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20H21" strokeWidth="2.2" />
        <path d="M3 15L9 9.5L14 14.5L21 7.5" strokeWidth="2" />
        <path d="M21 7.5H16M21 7.5V12.5" strokeWidth="2" />
        <path d="M6 20V17M11 20V14M16 20V11M21 20V8" strokeOpacity="0.35" strokeWidth="2.2" />
        <circle cx="9" cy="9.5" r="1.5" fill="currentColor" />
        <circle cx="14" cy="14.5" r="1.5" fill="currentColor" />
        <circle cx="21" cy="7.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Interlocking System",
    tagline: "Puncture-Free Seal",
    desc: "Continuous mechanical seaming locks panels without bolts, screws, or punctures.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 13.5L6.5 16C5.1 17.4 5.1 19.6 6.5 21C7.9 22.4 10.1 22.4 11.5 21L14 18.5" strokeWidth="2" />
        <path d="M15 10.5L17.5 8C18.9 6.6 18.9 4.4 17.5 3C16.1 1.6 13.9 1.6 12.5 3L10 5.5" strokeWidth="2" />
        <path d="M8.5 15.5L15.5 8.5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    name: "Fast Installation",
    tagline: "1000m² in 24 Hours",
    desc: "Speed-driven on-site execution enables earliest possible project commissioning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="8" strokeWidth="2" />
        <path d="M12 9V13L15 15" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 2.5H14M12 2.5V5" strokeWidth="2" />
        <path d="M3 10L6 10M2 14L5 14M3 18L6 18" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18.5 5.5L20.5 7.5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Best After sale service",
    tagline: "Pan-India Assurance",
    desc: "Dedicated structural audit teams and responsive lifecycle support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11V17C3 18.1 3.9 19 5 19H7V11H3Z" strokeWidth="1.8" />
        <path d="M21 11V17C21 18.1 20.1 19 19 19H17V11H21Z" strokeWidth="1.8" />
        <path d="M3 13C3 8 7 4 12 4C17 4 21 8 21 13" strokeWidth="2" />
        <path d="M19 19V20C19 21.1 18.1 22 17 22H13C12.4 22 12 21.6 12 21V20" strokeWidth="1.8" />
        <path d="M8.5 12L10.5 14L15.5 9.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Sturdy & Strong",
    tagline: "Deep Steel Corrugation",
    desc: "Engineered arch profile withstands high wind loads and heavy dead/live loads.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18C3 11.5 7 6 12 6C17 6 21 11.5 21 18" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M6 18C6 13.5 8.7 9.5 12 9.5C15.3 9.5 18 13.5 18 18" strokeWidth="1.8" strokeOpacity="0.4" />
        <path d="M2 19H22" strokeWidth="2.2" />
        <path d="M12 2.5V6M9.5 4.5L12 6L14.5 4.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 18V21M17.5 18V21" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "High Corrosion Resistance",
    tagline: "Weatherproof Coating",
    desc: "Galvalume alloy shield resists harsh industrial acid rains, humidity, and coastal air.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5L4 6V12C4 17.5 7.5 21 12 22C16.5 21 20 17.5 20 12V6L12 2.5Z" strokeWidth="2" />
        <path d="M12 7C10.2 9.5 9 11.2 9 12.5C9 14.2 10.3 15.5 12 15.5C13.7 15.5 15 14.2 15 12.5C15 11.2 13.8 9.5 12 7Z" strokeWidth="1.8" />
        <path d="M10.8 13C10.8 13.7 11.3 14.2 12 14.2" strokeLinecap="round" />
        <path d="M7 6.5L17 6.5" strokeWidth="1.5" strokeOpacity="0.4" />
      </svg>
    ),
  },
];

const MATERIAL_BENEFITS = [
  {
    title: "Durability",
    metricBadge: "4x Exposure • 6x Industrial • 3x Rural",
    description: "Four times durable in exposure test. Six times durable in industrial enviroments. Three times durable in rural Enviroments.",
    highlight: "Outperforms standard sheets across all testing environments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7.5L12 13L22 7.5L12 2Z" strokeWidth="2" />
        <path d="M2 12L12 17.5L22 12" strokeWidth="1.8" />
        <path d="M2 16.5L12 22L22 16.5" strokeWidth="2" />
        <circle cx="12" cy="7.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Corrosion Resistance",
    metricBadge: "Advanced Alloy Shield",
    description: "Offers higher corrosion resistance than galvanized steel under identical roof conditions.",
    highlight: "Barrier protection that repels atmospheric oxidation and rust",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5L3.5 6.5V12C3.5 17.5 7.2 21.2 12 22C16.8 21.2 20.5 17.5 20.5 12V6.5L12 2.5Z" strokeWidth="2" />
        <path d="M8 11.5L10.5 14L16 9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6.5V7.5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "High Temperature Resistance",
    metricBadge: "Heat & Flame Resilient",
    description: "Resists intermediate and high temperature far more effectively than galvanized steel.",
    highlight: "Maintains structural integrity under sustained thermal heat exposure",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4V13.3C14 15.3 12.4 17 10.5 17C8.6 17 7 15.3 7 13.3V4C7 2.9 7.9 2 9 2H12C13.1 2 14 2.9 14 4Z" strokeWidth="1.8" />
        <circle cx="10.5" cy="14" r="1.8" fill="currentColor" />
        <path d="M10.5 6V10" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 6.5H21M18 10.5H21M17 14.5H21" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Better Heat Reflectivity",
    metricBadge: "Thermal Comfort Efficiency",
    description: "It keeps the building 'cooler' in summer and 'warmer' in winter.",
    highlight: "Reflects solar radiation efficiently, lowering interior air conditioning costs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 17C6 13.8 18 13.8 22 17" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M6 3L11 13" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 13L9.5 8.5" strokeWidth="1.8" />
        <path d="M13 13L18 3" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 3L14.5 4.5" strokeWidth="1.8" />
        <circle cx="12" cy="4" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Retains The Luster For A Longer Period",
    metricBadge: "No Darkening or Oxidation",
    description: "Unlike galvanized steel, galvalume does not oxidise & get darken in colour.",
    highlight: "Preserves gleaming aesthetic appeal over decades of exterior exposure",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3.5H18L22 9.5L12 21L2 9.5L6 3.5Z" strokeWidth="2" />
        <path d="M2 9.5H22" strokeWidth="1.8" />
        <path d="M12 21L7.5 9.5L10.5 3.5" strokeWidth="1.6" />
        <path d="M12 21L16.5 9.5L13.5 3.5" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Comparable Cost and No Crack On Peel",
    metricBadge: "Zero Delamination • High Value",
    description: "Cost similar to that of galvanized steel. Does not crack or peel when exposed to various elements.",
    highlight: "Maximum economic value with zero cracking or peeling defects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18C3 10.3 9.3 4 17 4H21V8C21 15.7 14.7 22 7 22H3V18Z" strokeWidth="2" />
        <path d="M8 8.5C8 7.7 8.7 7 9.5 7H13.5C14.3 7 15 7.7 15 8.5V12.5C15 13.3 14.3 14 13.5 14H9.5C8.7 14 8 13.3 8 12.5V8.5Z" strokeWidth="1.6" strokeOpacity="0.5" />
        <path d="M10 10.5L11.5 12L14 9.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const GOOGLE_REVIEWS = [
  {
    name: "Arjun Ajikumar",
    meta: "Local Guide · 60 reviews · 72 photos",
    time: "2 years ago",
    initial: "A",
    badge: null,
    rating: 5,
    text: "Vinfra Projects’ trussless roofing solutions stand out for their innovative design and structural efficiency. By eliminating traditional trusses, these roofs offer a sleeker, more modern aesthetic while maximizing open space beneath. The materials used are durable and well-suited for a variety of applications, from industrial to commercial spaces. Installation is straightforward, and the resulting roof is both lightweight and strong, providing excellent weather resistance. Overall, Vinfra Projects delivers a high-quality, cost-effective roofing solution that’s both practical and visually appealing.",
  },
  {
    name: "ALBIN MATHEW",
    meta: "3 reviews",
    time: "4 years ago",
    initial: "A",
    badge: null,
    rating: 5,
    text: "This is the best option for roofing solutions.",
  },
  {
    name: "Ann Louisa Paul J",
    meta: "Local Guide · 377 reviews · 2,008 photos",
    time: "5 days ago",
    initial: "A",
    badge: "Reasonable price | ₹200,000+",
    rating: 5,
    text: "Highly Recommended! Vinfra Truss-less Roofings in Karuvanchal is hands down the best in the business! Their innovative truss-less design completely maximized our interior space with massive, open clear spans. The installation team was incredibly fast, professional, and backed by over a decade of clear expertise. The roofing material itself is top-tier—it keeps the building noticeably cooler, resists rust perfectly, and requires practically zero maintenance. If you are looking for durable, modern, and cost-effective roofing solutions in Kannur, this team is unmatched!",
  },
  {
    name: "T T T",
    meta: "8 reviews",
    time: "3 years ago",
    initial: "T",
    badge: null,
    rating: 5,
    text: "They are providing very good service for truss less Roofing...\nThey are very Intellectual for the work.\nThe work was very perfect and clean..\nThe engineers and workers are very Friendly with the customers...",
  },
];

const FAQS = [
  {
    q: "What is trussless roofing and how does it eliminate internal columns or trusses?",
    a: "Trussless roofing (also called arch or self-supporting roofing) uses high-tensile structural steel panels that are mechanically arched and seamed together directly on-site. Because the curved arch profile itself distributes vertical and wind loads to boundary tie-beams, it completely eliminates intermediate trusses, purlins, columns, and structural clutter—delivering 100% usable, unobstructed floor space.",
  },
  {
    q: "What is the maximum clear span achievable with Vinfra trussless roofing?",
    a: "Vinfra specializes in uninterrupted clear spans up to 38 meters (and up to 50 meters for customized engineering projects) without requiring a single center pillar or internal support. This makes it the premier choice for industrial warehouses, sports arenas, badminton turfs, aircraft hangars, rice mills, and large-scale factories.",
  },
  {
    q: "Is trussless roofing 100% leak-proof and rust-resistant?",
    a: "Yes. Conventional corrugated roofing systems rely on thousands of screws, nuts, and drilled puncture holes that degrade and cause leaks over time. In contrast, Vinfra panels are joined using motorized mechanical seamers that fold and lock the steel edges together without any holes or bolts. This creates an impervious, 100% watertight barrier from eaves to eaves with exceptional corrosion resistance.",
  },
  {
    q: "Which certified steel materials and brand partners are used by Vinfra?",
    a: "We exclusively construct roofs using world-class certified high-tensile steel coils from industry leaders: Tata BlueScope Steel (ZINCALUME® alloy-coated steel & COLORBOND® pre-painted steel) and Dongkuk Steel (South Korea high-performance Galvalume). These certified alloys provide exceptional thermal reflectivity, high load capacity, and decades of maintenance-free service life.",
  },
  {
    q: "How fast is the installation process compared to conventional PEB or truss roofs?",
    a: "Vinfra's mobile roll-forming and crane-assisted installation is typically 40% to 50% faster than conventional steel roofing. Because continuous curved panels are roll-formed directly on your job site and hoisted into place in assembled clusters, facilities between 10,000 to 25,000 sq.ft can often be enclosed within just a few days, drastically minimizing construction downtime.",
  },
  {
    q: "Which locations and sectors across South India does Vinfra Projects serve?",
    a: "Vinfra Projects executes commercial, industrial, and institutional roofing projects throughout Kerala, Karnataka, Tamil Nadu, and across South India. With corporate offices in Ernakulam (Kochi), Bangalore, and Chennai, we cater to factories, food processing plants, cold storages, rice mills, indoor badminton & football turfs, auditoriums, and logistics hubs.",
  },
];

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? -1 : index));
  };

  const toggleReview = (index) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveService(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // CSS loaded class for entry animations
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Intersection observer for reveal animations
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
    <div className={`vinfra-root ${loaded ? "loaded" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />

      {/* NAVBAR COMPONENT */}
      <Navbar />

      {/* PAGE 1: VIDEO HERO LANDING */}
      <section className="hero-landing">
        <div className="hero-video-wrapper">
          <video
            src="/aboutcover.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hero-bg-video"
          />
          <div className="hero-video-overlay" />
        </div>

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
              <Link
                href="/projects"
                className="bracket-btn"
                style={{ textDecoration: "none" }}
              >
                Explore Projects <span className="arrow">→</span>
              </Link>
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
                style={{ textDecoration: "none" }}
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

      {/* SERVICES */}
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
          {SERVICES.map((svc, idx) => (
            <div
              className="service-cell"
              key={svc.name}
              onClick={() => setActiveService(svc)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${svc.name}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveService(svc);
                }
              }}
            >
              <span className="service-watermark">0{idx + 1}</span>
              <div className="service-icon-ring">{svc.icon}</div>
              <div className="service-name">{svc.name}</div>
              <div className="service-click-tag">
                View Details <span className="arrow">↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE DETAILS POPUP MODAL */}
      {activeService && (
        <div
          className="service-modal-backdrop"
          onClick={() => setActiveService(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`service-modal-box ${
              activeService.name === "Accessories" || activeService.name === "Installation"
                ? "service-modal-box--wide"
                : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="service-modal-close"
              onClick={() => setActiveService(null)}
              aria-label="Close dialog"
            >
              ✕
            </button>

            <div className="service-modal-header">
              <div className="service-modal-icon-ring">
                {activeService.icon}
              </div>
              <div className="service-modal-meta">
                <span className="service-modal-badge">
                  {SERVICES.findIndex((s) => s.name === activeService.name) + 1 < 10
                    ? `0${SERVICES.findIndex((s) => s.name === activeService.name) + 1}`
                    : SERVICES.findIndex((s) => s.name === activeService.name) + 1}{" "}
                  • Service Detail
                </span>
                <h3 className="service-modal-title">{activeService.name}</h3>
                <span className="service-modal-tagline">
                  {activeService.tagline}
                </span>
              </div>
            </div>

            <p className="service-modal-body">{activeService.description}</p>

            {/* IF ACCESSORIES MODAL: SHOW THE 4 ACCESSORIES FROM SCREENSHOT */}
            {activeService.name === "Accessories" && (
              <div className="modal-subitems-wrapper">
                <div className="service-modal-features-title">
                  Roofing Accessories &amp; Components
                </div>
                <div className="modal-subitems-grid">
                  {ACCESSORIES_LIST.map((item) => (
                    <div className="modal-subitem-card" key={item.title}>
                      <img src={item.img} alt={item.title} className="modal-subitem-thumb" />
                      <div className="modal-subitem-info">
                        <div className="modal-subitem-header-row">
                          <span className="modal-subitem-icon">{item.icon}</span>
                          <span className="modal-subitem-tag">{item.category}</span>
                        </div>
                        <h4 className="modal-subitem-title">{item.title}</h4>
                        <p className="modal-subitem-desc">{item.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* IF INSTALLATION MODAL: SHOW THE 4 INSTALLATION STAGES FROM SCREENSHOT */}
            {activeService.name === "Installation" && (
              <div className="modal-subitems-wrapper">
                <div className="service-modal-features-title">
                  4-Stage Precision Installation Workflow
                </div>
                <div className="modal-subitems-grid">
                  {INSTALLATION_STAGES.map((stage) => (
                    <div className="modal-subitem-card" key={stage.title}>
                      <img src={stage.img} alt={stage.title} className="modal-subitem-thumb" />
                      <div className="modal-subitem-info">
                        <div className="modal-subitem-header-row">
                          <span className="modal-subitem-icon">{stage.icon}</span>
                          <span className="modal-subitem-tag">{stage.stage} • {stage.category}</span>
                        </div>
                        <h4 className="modal-subitem-title">{stage.title}</h4>
                        <p className="modal-subitem-desc">{stage.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STANDARD FEATURES FOR OTHER SERVICES */}
            {activeService.name !== "Accessories" && activeService.name !== "Installation" && (
              <>
                <div className="service-modal-features-title">Key Capabilities &amp; Highlights</div>
                <ul className="service-modal-features">
                  {activeService.features?.map((feat, i) => (
                    <li className="service-modal-feature-item" key={i}>
                      <span className="service-modal-check">
                        <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="service-modal-actions">
              <Link
                href="/contact"
                className="service-modal-btn-primary"
                data-lead-modal="true"
                onClick={() => setActiveService(null)}
              >
                Inquire About {activeService.name} →
              </Link>
              <button
                className="service-modal-btn-secondary"
                onClick={() => setActiveService(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 1: ADVANTAGES OF VINFRA TRUSS-LESS ROOFS (MINIMAL) */}
      <section id="advantages" className="page-advantages reveal-group">
        <div className="adv-header-minimal">
          <span className="section-tag-red">Truss-less Arch Technology</span>
          <h2 className="adv-title-minimal">
            Advantages of <span>Vinfra Truss-less Roofs</span>
          </h2>
          <p className="adv-subtitle-minimal">
            Pioneering arch engineering eliminating trusses, purlins, and columns for 100% usable clear spans, rapid installation, and zero recurring maintenance.
          </p>
        </div>

        {/* 8 Minimal Hallmark Badges */}
        <div className="adv-badges-grid-minimal">
          {ADVANTAGES_BADGES.map((b) => (
            <div className="adv-badge-card-minimal" key={b.name}>
              <div className="adv-badge-icon-wrap">
                {b.icon}
              </div>
              <div className="adv-badge-text">
                <h4>{b.name}</h4>
                <span>{b.tagline}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 14 Points Minimal Checklist */}
        <div className="adv-checklist-minimal">
          {ADVANTAGES_POINTS.map((pt, idx) => (
            <div className="adv-check-row" key={idx}>
              <span className="adv-check-icon">
                <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
              </span>
              <span>{pt}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: BENEFITS OF VINFRA ROOFING MATERIALS (MINIMAL) */}
      <section id="benefits" className="page-benefits reveal-group">
        <div className="benefits-header-minimal">
          <span className="section-tag-red">Advanced Material Science</span>
          <h2 className="adv-title-minimal">
            Know The Benefits Of <span>Vinfra Roofing Materials</span>
          </h2>
          <div className="galvalume-quote-minimal">
            “ The combination of Long-lasting Galvalume sheet and modern High performance paint system offers Durable, Versatile, Light Weight. ”
          </div>
        </div>

        {/* 6 Minimal Material Cards */}
        <div className="materials-grid-minimal">
          {MATERIAL_BENEFITS.map((mat) => (
            <div className="mat-card-minimal" key={mat.title}>
              <div className="mat-card-top-minimal">
                <span className="mat-card-icon-minimal">{mat.icon}</span>
                <span className="mat-badge-minimal">{mat.metricBadge}</span>
              </div>
              <h3 className="mat-title-minimal">{mat.title}</h3>
              <p className="mat-desc-minimal">{mat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PROJECTS */}
      <section className="page-applications reveal-group">
        <div className="app-header">
          <h2>
            Our <span>Projects</span>
          </h2>
          <Link
            href="/projects"
            className="bracket-btn"
          >
            View All Projects <span className="arrow">→</span>
          </Link>
        </div>
        <div className="app-grid">
          <Link href="/projects" className="app-card" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="app-card-badge">Industrial Span</span>
            <div className="app-img-wrapper">
              <img src={ProjectOne.src} alt="Multi Purpose Hall project" />
            </div>
            <div className="app-card-content">
              <h4>Multi Purpose Hall</h4>
              <span className="app-card-arrow">View Project <span>→</span></span>
            </div>
          </Link>
          <Link href="/projects" className="app-card" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="app-card-badge">Commercial Span</span>
            <div className="app-img-wrapper">
              <img src={ProjectTwo.src} alt="Convention Centre project" />
            </div>
            <div className="app-card-content">
              <h4>Convention Centre</h4>
              <span className="app-card-arrow">View Project <span>→</span></span>
            </div>
          </Link>
          <Link href="/projects" className="app-card" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="app-card-badge">Logistics Hub</span>
            <div className="app-img-wrapper">
              <img src={ProjectThree.src} alt="Warehouse Roofing project" />
            </div>
            <div className="app-card-content">
              <h4>Warehouse Roofing</h4>
              <span className="app-card-arrow">View Project <span>→</span></span>
            </div>
          </Link>
          <Link href="/projects" className="app-card" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="app-card-badge">Residential Span</span>
            <div className="app-img-wrapper">
              <img src="/Residential%20Roofing.webp" alt="Residential Roofing project" />
            </div>
            <div className="app-card-content">
              <h4>Residential Roofing</h4>
              <span className="app-card-arrow">View Project <span>→</span></span>
            </div>
          </Link>
        </div>
      </section>

      {/* PAGE 6: TESTIMONIALS & MISSION */}
      <section className="page-mission reveal-group">
        {/* Left Column: Title, Description, Rating Card & 4 Equal-Size Reviews */}
        <div className="mission-left">
          <div className="mission-eyebrow">
            <span className="mission-eyebrow-dot"></span>
            Client Testimonials &amp; Company Reputation
          </div>
          <h2 className="mission-title">
            Precision Truss-less Engineering. <br />
            <span>Validated by Our Clients.</span>
          </h2>

          {/* Mission Statement Box */}
          <div className="mission-statement-card">
            <div className="mission-statement-top">
              <span className="mission-quote-mark">“</span>
              <span className="mission-core-tag">Core Commitment</span>
            </div>
            <p className="mission-statement-text">
              At Vinfra Truss-less Roofings, our dedication to excellence is
              evident in every project we undertake. We combine innovative roofing
              technology with expert craftsmanship to deliver results that stand
              the test of time. Whether it's a large-scale industrial facility or
              a commercial site, we ensure every detail meets the highest quality
              standards. Excellence isn't optional — it's what defines us.
            </p>
          </div>

          {/* Google Reputation Bar */}
          <div className="google-reputation-strip">
            <div className="google-reputation-left">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
              </svg>
              <div className="google-score-box">
                <span className="google-stars">★★★★★</span>
                <strong>4.5 Star Rating</strong>
                <span className="google-dot">·</span>
                <span className="google-source">Google Reviews</span>
              </div>
            </div>
            <a
              href="https://share.google/tpt1f9Y91MgWkNfqN"
              target="_blank"
              rel="noopener noreferrer"
              className="google-action-btn"
            >
              Read Google Reviews ↗
            </a>
          </div>

          {/* 4 Equal-Size Reviews Grid with 3-Line Clamp & Read More */}
          <div className="testimonials-cards-grid">
            {GOOGLE_REVIEWS.map((rev, idx) => (
              <div className="review-card-item" key={rev.name}>
                <div className="review-card-top">
                  <div className="review-stars-row">
                    <span className="review-stars">{"★".repeat(rev.rating)}</span>
                    <span className="review-time">· {rev.time}</span>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                  </svg>
                </div>

                <div className="review-card-body">
                  <p className={`review-card-text ${expandedReviews[idx] ? "is-expanded" : "is-clamped"}`}>
                    "{rev.text}"
                  </p>
                  {rev.text.length > 70 && (
                    <button
                      type="button"
                      onClick={() => toggleReview(idx)}
                      className="review-readmore-btn"
                    >
                      {expandedReviews[idx] ? "Show less" : "... Read more"}
                    </button>
                  )}
                </div>

                <div className="review-card-author">
                  <div className="review-author-avatar">{rev.initial}</div>
                  <div className="review-author-info">
                    <span className="review-author-name">{rev.name}</span>
                    <span className="review-author-meta">{rev.meta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Architectural Image Gallery */}
        <div className="mission-right">
          {/* Top Large Showcase Image */}
          <div className="gallery-card-top">
            <img src="/mission2.webp" alt="Vinfra roofing canopy structure" />
            <div className="gallery-glass-pill-top">
              <span className="pill-dot"></span>
              <span>38M Clear Span · Zero Trusses</span>
            </div>
            <div className="gallery-glass-pill-bottom">
              <span className="trust-pill-dot"></span>
              <div>
                <strong>500+ Spans Completed</strong>
                <p>Industrial &amp; Commercial Excellence</p>
              </div>
            </div>
          </div>

          {/* Dual Sub Images */}
          <div className="gallery-cards-bottom">
            <div className="gallery-card-sub">
              <img src="/mission1.webp" alt="On-site fabrication" />
              <div className="gallery-sub-tag">On-Site Roll Forming</div>
            </div>
            <div className="gallery-card-sub">
              <img src="/mission3.webp" alt="Precision installation" />
              <div className="gallery-sub-tag">Certified Installation</div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 7: CERTIFIED PROFESSIONALS */}
      <section className="page-certified reveal-group">
        <div className="certified-img-wrapper">
          <img src="/certi.webp" alt="Certified roofing professionals at work" />
          <div className="cert-floating-tag">
            <span className="cert-icon">✦</span>
            <span>Certified Safety & Quality Standards</span>
          </div>
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
          <div className="certified-pills">
            <div className="cert-pill"><span>✦</span> Structural Engineering Compliance</div>
            <div className="cert-pill"><span>✦</span> Precision Mobile Roll-Forming</div>
            <div className="cert-pill"><span>✦</span> Turnkey On-Site Erection</div>
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
              <div className="industry-cell-left">{ind}</div>
              <span className="ind-arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* PAGE 9.5: PREFERRED MATERIAL PARTNERS (BRANDS) */}
      <section className="page-brands reveal-group">
        <div className="brands-container">
          <div className="brands-header">
            <h2 className="brands-main-title">Brands & Material Partners</h2>
            <div className="industries-divider">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="brands-simple-grid">
            <div className="brand-logo-card">
              <img
                src="/brands/dongkuk-steel.png"
                alt="Dongkuk Steel"
                className="brand-logo-pure"
              />
            </div>
            <div className="brand-logo-card">
              <img
                src="/brands/tata-bluescope.png"
                alt="Tata BlueScope Steel"
                className="brand-logo-pure"
              />
            </div>
          </div>
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

      {/* FAQ SECTION (FOR SEO RANKING) */}
      <section id="faq" className="page-faq reveal-group">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": FAQS.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a,
                },
              })),
            }),
          }}
        />
        <div className="faq-container">
          <div className="faq-header">
            <span className="faq-badge">Got Questions?</span>
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-description">
              Find quick answers to common questions about self-supporting trussless curved arch roofing, clear spans, leak-proof mechanical seaming, and certified steel materials.
            </p>
          </div>

          <div className="faq-accordion">
            {FAQS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-btn-${idx}`}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon-wrapper" aria-hidden="true">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="faq-answer-collapse"
                  >
                    <p className="faq-answer-text">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="faq-bottom-cta">
            <span>Have a specific architectural requirement or need a span calculation?</span>
            <Link href="/contact" className="faq-cta-btn">
              Contact our Support Team <span>→</span>
            </Link>
          </div>
        </div>
      </section>

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
                <a href="mailto:info@vinfraprojects.com">
                  info@vinfraprojects.com
                </a>
                <a href="mailto:sales@vinfraprojects.com">
                  sales@vinfraprojects.com
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
            <div className="nav-logo" style={{ fontSize: "20px", color: "#0F172A" }}>
              <img
                src={Logo.src}
                alt="Vinfra Projects"
                style={{ height: "32px", width: "auto" }}
              />
              <span style={{ color: "#0F172A", fontWeight: 800 }}>Vinfra Projects</span>
            </div>
            <p className="contact-brand-desc">
              A professional company providing Trusless Roofing all over in
              South India with years of experience in Trusless Roofing
              Industries. We emphasize on quality of products.
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
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
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
                  <svg
                    width="18"
                    height="18"
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
                <a
                  href="https://wa.me/919072135550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn social-wa"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
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
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
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
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
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
            <a href="#"></a> All rights
            reserved by Vinfra Projects
          </div>
          <div className="footer-copy">vinfraprojects.com</div>
        </div>
      </section>
    </div>
  );
}