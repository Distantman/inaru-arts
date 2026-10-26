"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { ArtworkItem, artistProfile } from "@/lib/portfolio-data";

interface LightboxModalProps {
  artwork: ArtworkItem | null;
  artworks: ArtworkItem[];
  onClose: () => void;
  onNavigate: (artwork: ArtworkItem) => void;
}

export function LightboxModal({
  artwork,
  artworks,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const currentIndex = artwork
    ? artworks.findIndex((item) => item.id === artwork.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex === -1 || artworks.length === 0) return;
    const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    onNavigate(artworks[prevIndex]);
  }, [currentIndex, artworks, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === -1 || artworks.length === 0) return;
    const nextIndex = (currentIndex + 1) % artworks.length;
    onNavigate(artworks[nextIndex]);
  }, [currentIndex, artworks, onNavigate]);

  useEffect(() => {
    if (!artwork) return;

    // Focus the close button when lightbox opens for keyboard accessibility
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [artwork, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-artwork-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#181512]/94 backdrop-blur-md p-4 sm:p-6 md:p-10 overflow-y-auto"
          onClick={onClose}
        >
          {/* Lightbox Dialog Container */}
          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl bg-[#F6F1E8] text-[#1D1A17] border border-[#F6F1E8]/20 shadow-2xl overflow-hidden my-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-[#1D1A17]/12 bg-[#EFE8DC]/70">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#6E655C]">
                <span className="text-[#B46248] font-medium">
                  {artwork.categoryLabel}
                </span>
                <span>•</span>
                <span>
                  Plate {currentIndex + 1} of {artworks.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous artwork (Left Arrow)"
                  className="p-2 border border-[#1D1A17]/15 text-[#1D1A17] hover:bg-[#1D1A17] hover:text-[#F6F1E8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next artwork (Right Arrow)"
                  className="p-2 border border-[#1D1A17]/15 text-[#1D1A17] hover:bg-[#1D1A17] hover:text-[#F6F1E8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close lightbox (Escape)"
                  className="ml-2 inline-flex items-center gap-1.5 px-3 py-2 border border-[#1D1A17]/20 text-xs uppercase tracking-[0.16em] text-[#1D1A17] hover:bg-[#B46248] hover:text-[#F6F1E8] hover:border-[#B46248] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
                >
                  <span>Close</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Artwork & Curatorial Notes Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Canvas */}
              <div className="lg:col-span-8 bg-[#E6DDD0]/65 p-4 sm:p-8 flex items-center justify-center max-h-[72vh]">
                <img
                  src={artwork.image}
                  alt={artwork.alt}
                  width={artwork.width}
                  height={artwork.height}
                  className="max-h-[64vh] w-auto max-w-full object-contain shadow-[0_16px_40px_-15px_rgba(29,26,23,0.3)]"
                />
              </div>

              {/* Curatorial Details Sidebar */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1D1A17]/12 bg-[#F6F1E8]">
                <div className="space-y-5">
                  {artwork.annotation && (
                    <span className="inline-block font-editorial italic text-sm text-[#B46248] bg-[#EFE8DC] px-3 py-1 border border-[#1D1A17]/10">
                      {artwork.annotation}
                    </span>
                  )}

                  <div>
                    <h2
                      id="lightbox-artwork-title"
                      className="font-editorial text-2xl sm:text-3xl text-[#1D1A17] leading-snug"
                    >
                      {artwork.title}
                    </h2>
                    {artwork.subtitle && (
                      <p className="font-editorial italic text-lg text-[#6E655C] mt-1">
                        {artwork.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-[#433429]">
                    {artwork.description}
                  </p>

                  <dl className="space-y-3 pt-4 border-t border-[#1D1A17]/12 text-xs">
                    <div>
                      <dt className="uppercase tracking-[0.16em] text-[#6E655C]">
                        Medium & Surface
                      </dt>
                      <dd className="text-[#1D1A17] mt-0.5 font-medium">
                        {artwork.medium}
                      </dd>
                    </div>

                    {artwork.dimensionsOrDuration && (
                      <div>
                        <dt className="uppercase tracking-[0.16em] text-[#6E655C]">
                          Dimensions / Format
                        </dt>
                        <dd className="text-[#1D1A17] mt-0.5">
                          {artwork.dimensionsOrDuration}
                        </dd>
                      </div>
                    )}

                    <div className="bg-[#EFE8DC] p-3 border border-[#1D1A17]/10 text-[11px] text-[#6E655C] space-y-1">
                      <div>
                        Temporary curated sample plate (
                        <code>{artwork.image}</code>). Replaceable anytime via{" "}
                        <code>IMAGE-GUIDE.md</code>.
                      </div>
                      <div className="text-[#433429] font-medium">
                        Recommended dimensions: {artwork.width} ×{" "}
                        {artwork.height} px
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1D1A17]/12 space-y-3">
                  <a
                    href={`mailto:${
                      artistProfile.email
                    }?subject=${encodeURIComponent(
                      `Commission Inquiry regarding "${artwork.title}"`
                    )}`}
                    className="inline-flex w-full items-center justify-between bg-[#1D1A17] text-[#F6F1E8] px-5 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-[#B46248] transition-colors"
                  >
                    <span>Inquire About Similar Work</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <p className="text-[11px] text-center text-[#6E655C]">
                    Use ← / → arrow keys to browse plates, Esc to close
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
