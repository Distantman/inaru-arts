"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { artistProfile } from "@/lib/portfolio-data";

const primaryNavLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Workshops", href: "#workshops" },
  { label: "Contact", href: "#contact" },
];

const disciplineQuickLinks = [
  { number: "01", label: "Live Wedding Illustration", href: "#weddings" },
  { number: "02", label: "Murals & Painted Spaces", href: "#murals" },
  { number: "03", label: "Fashion & Figure Drawing", href: "#fashion" },
  { number: "04", label: "Classes & Workshops", href: "#workshops" },
  { number: "05", label: "Personal Archive", href: "#archive" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#F6F1E8]/92 backdrop-blur-md border-b border-[#1D1A17]/12 py-3.5"
            : "bg-transparent border-b border-[#1D1A17]/10 py-5"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
          {/* Artist Wordmark */}
          <a
            href="#top"
            className="group flex items-baseline gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
            aria-label={`${artistProfile.name} — Home`}
          >
            <span className="font-editorial text-3xl sm:text-[34px] tracking-tight text-[#1D1A17] transition-colors group-hover:text-[#B46248]">
              {artistProfile.name}
              <span className="text-[#B46248]">.</span>
            </span>
            <span className="hidden xl:inline-block text-[11px] uppercase tracking-[0.22em] text-[#6E655C] border-l border-[#1D1A17]/20 pl-3">
              {artistProfile.wordmarkSubtitle}
            </span>
          </a>

          {/* Primary Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10"
          >
            {primaryNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-[13px] uppercase tracking-[0.18em] text-[#1D1A17]/85 hover:text-[#B46248] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Editorial Commission Link + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 border border-[#1D1A17]/30 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#1D1A17] hover:bg-[#1D1A17] hover:text-[#F6F1E8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden inline-flex items-center justify-center p-2 text-[#1D1A17] hover:text-[#B46248] border border-[#1D1A17]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[65px] bottom-0 z-30 bg-[#F6F1E8] border-t border-[#1D1A17]/15 overflow-y-auto md:hidden"
          >
            <div className="px-6 py-8 flex flex-col justify-between min-h-full">
              <div className="space-y-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#6E655C] mb-4">
                    Index & Navigation
                  </p>
                  <ul className="space-y-3 border-t border-[#1D1A17]/12 pt-4">
                    {primaryNavLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-editorial text-3xl text-[#1D1A17] hover:text-[#B46248] py-1 transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#6E655C] mb-3">
                    Curated Disciplines
                  </p>
                  <ul className="space-y-2.5 border-t border-[#1D1A17]/12 pt-4">
                    {disciplineQuickLinks.map((item) => (
                      <li key={item.number}>
                        <a
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-baseline gap-3 text-sm text-[#433429] hover:text-[#B46248] py-1"
                        >
                          <span className="font-editorial italic text-[#B46248]">
                            {item.number}.
                          </span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-[#1D1A17]/12 mt-8">
                <p className="font-editorial italic text-base text-[#433429] mb-3">
                  {artistProfile.availabilityBanner}
                </p>
                <a
                  href={`mailto:${artistProfile.email}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#B46248] font-medium"
                >
                  <span>{artistProfile.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
