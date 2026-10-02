"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HomeLeadModal from "../components/HomeLeadModal";

const LeadModalContext = createContext({
  isOpen: false,
  openLeadModal: () => {},
  closeLeadModal: () => {},
});

export function LeadModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const pathname = usePathname();

  const openLeadModal = () => setIsOpen(true);
  const closeLeadModal = () => setIsOpen(false);

  // Automatically open popup when the website launches / is opened on homepage
  useEffect(() => {
    if (pathname === "/" && !hasAutoOpened) {
      setIsOpen(true);
      setHasAutoOpened(true);
    }
  }, [pathname, hasAutoOpened]);

  // Global event listener for custom open event
  useEffect(() => {
    const handleCustomOpen = () => setIsOpen(true);
    window.addEventListener("open-lead-modal", handleCustomOpen);
    return () => window.removeEventListener("open-lead-modal", handleCustomOpen);
  }, []);

  // Global click interceptor for any button or link representing quote or consultation
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("button, a, [data-lead-modal]");
      if (!target) return;

      // Explicit data-lead-modal attribute
      if (target.getAttribute("data-lead-modal") === "true") {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);
        return;
      }

      // Check text inside button or link
      const text = (target.textContent || "").trim().toLowerCase();

      // "Get in touch" must redirect to contact page - don't intercept
      if (text.includes("get in touch")) {
        return;
      }

      // Intercept any quote or consultation buttons
      const isQuoteOrConsultation =
        text.includes("request a quote") ||
        text.includes("request quote") ||
        text.includes("get a quote") ||
        text.includes("get quote") ||
        text.includes("schedule consultation") ||
        text.includes("get consultation") ||
        text.includes("free consultation") ||
        text.includes("book consultation") ||
        text.includes("inquire about");

      if (isQuoteOrConsultation) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <LeadModalContext.Provider value={{ isOpen, openLeadModal, closeLeadModal }}>
      {children}
      <HomeLeadModal isOpen={isOpen} onClose={closeLeadModal} />
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    return {
      isOpen: false,
      openLeadModal: () => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("open-lead-modal"));
        }
      },
      closeLeadModal: () => {},
    };
  }
  return context;
}
