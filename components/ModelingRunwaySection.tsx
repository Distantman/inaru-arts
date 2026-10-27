"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Expand,
  Layers,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import {
  ArtworkItem,
  artistProfile,
  modelingRunwaySectionData,
} from "@/lib/portfolio-data";

interface ModelingRunwaySectionProps {
  onSelectArtwork: (artwork: ArtworkItem) => void;
}

type RunwayVariationMode = "all" | "editorial" | "staggered" | "spotlight";

export function ModelingRunwaySection({
  onSelectArtwork,
}: ModelingRunwaySectionProps) {
  // Default to "all" so the site owner can preview all 3 variations right away,
  // or click any tab to isolate a single variation.
  const [activeVariation, setActiveVariation] =
    useState<RunwayVariationMode>("all");
  const [isPaused, setIsPaused] = useState(false);
  const [speedSeconds, setSpeedSeconds] = useState<number>(46);

  const { topRowArtworks, bottomRowArtworks } = modelingRunwaySectionData;

  // Duplicate arrays for seamless 50% infinite loop translation
  const topLoop = [...topRowArtworks, ...topRowArtworks];
  const bottomLoop = [...bottomRowArtworks, ...bottomRowArtworks];

  const mailtoHref = `mailto:${artistProfile.email}?subject=${encodeURIComponent(
    modelingRunwaySectionData.inquirySubject
  )}`;

  const showEditorial =
    activeVariation === "all" || activeVariation === "editorial";
  const showStaggered =
    activeVariation === "all" || activeVariation === "staggered";
  const showSpotlight =
    activeVariation === "all" || activeVariation === "spotlight";

  return (
    <section
      id="modeling"
      aria-labelledby="modeling-section-heading"
      className={`relative py-24 md:py-32 border-b border-[#1D1A17]/15 bg-[#EFE8DC]/50 overflow-hidden ${
        isPaused ? "runway-paused" : ""
      }`}
      style={
        {
          "--runway-duration": `${speedSeconds}s`,
        } as React.CSSProperties
      }
    >
      {/* Section Header */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 border-b border-[#1D1A17]/12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#B46248] mb-4">
              <span className="font-editorial italic text-base">
                Chapter {modelingRunwaySectionData.chapterNumber}
              </span>
              <span className="h-[1px] w-8 bg-[#B46248]/60" />
              <span>{modelingRunwaySectionData.eyebrow}</span>
            </div>

            <h2
              id="modeling-section-heading"
              className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.06] text-[#1D1A17]"
            >
              {modelingRunwaySectionData.title}
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-editorial italic text-xl sm:text-2xl leading-relaxed text-[#433429]">
              {modelingRunwaySectionData.lead}
            </p>
            <p className="text-sm leading-relaxed text-[#6E655C]">
              {modelingRunwaySectionData.description}
            </p>
          </div>
        </div>

        {/* Variation Switcher & Catwalk Pace Controls */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#1D1A17]/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#B46248] mr-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Runway Style Variations:</span>
            </span>

            {[
              { id: "all", label: "Preview All 3 Styles" },
              { id: "editorial", label: "Style I — Classic Catwalk" },
              { id: "staggered", label: "Style II — Staggered Filmstrip" },
              { id: "spotlight", label: "Style III — Nocturne Stage" },
            ].map((tab) => {
              const active = activeVariation === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveVariation(tab.id as RunwayVariationMode)
                  }
                  className={`px-3.5 py-2 text-[11px] uppercase tracking-[0.15em] border transition-colors ${
                    active
                      ? "bg-[#1D1A17] text-[#F6F1E8] border-[#1D1A17]"
                      : "bg-[#F6F1E8] text-[#433429] border-[#1D1A17]/15 hover:border-[#B46248]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Pace & Pause Controls */}
          <div className="flex items-center gap-2 text-xs">
            <div className="hidden sm:flex items-center border border-[#1D1A17]/15 bg-[#F6F1E8]">
              {[
                { label: "Slow", sec: 68 },
                { label: "Runway", sec: 46 },
                { label: "Brisk", sec: 28 },
              ].map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setSpeedSeconds(s.sec)}
                  className={`px-2.5 py-1.5 text-[10px] uppercase tracking-[0.15em] transition-colors ${
                    speedSeconds === s.sec
                      ? "bg-[#B46248] text-[#F6F1E8]"
                      : "text-[#6E655C] hover:text-[#1D1A17]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-1.5 border border-[#1D1A17]/20 bg-[#F6F1E8] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] text-[#1D1A17] hover:border-[#B46248]"
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#B46248]" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[#B46248]" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          VARIATION I: CLASSIC EDITORIAL CATWALK (Clean Gallery Plates)
         ===================================================================== */}
      {showEditorial && (
        <div className="pt-14 pb-8">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-editorial italic text-lg text-[#B46248]">
                Variation I.
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#1D1A17]">
                Classic Editorial Catwalk — Dual Counter-Flow
              </h3>
            </div>
            <span className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#6E655C]">
              <ArrowLeft className="w-3.5 h-3.5 text-[#B46248]" />
              <span>Top Row Left • Bottom Row Right</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B46248]" />
            </span>
          </div>

          {/* Top Slide Track (Moves Left ←) */}
          <div className="runway-track-container relative w-full overflow-hidden py-3">
            <div className="animate-runway-left gap-6 px-3">
              {topLoop.map((artwork, i) => (
                <button
                  key={`var1-top-${artwork.id}-${i}`}
                  type="button"
                  onClick={() => onSelectArtwork(artwork)}
                  aria-label={`Inspect ${artwork.title} in lightbox`}
                  className="group relative w-[240px] sm:w-[275px] shrink-0 text-left focus:outline-none"
                >
                  <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#F6F1E8] border border-[#1D1A17]/15 shadow-[0_12px_30px_-14px_rgba(29,26,23,0.18)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_45px_-16px_rgba(29,26,23,0.28)]">
                    <img
                      src={artwork.image}
                      alt={artwork.alt}
                      width={artwork.width}
                      height={artwork.height}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-3 left-3 bg-[#F6F1E8]/92 px-2.5 py-0.5 border border-[#1D1A17]/10">
                      <span className="font-editorial italic text-xs text-[#433429]">
                        {artwork.annotation}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#F6F1E8]/95 text-[#1D1A17] px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center gap-1">
                      <Expand className="w-3 h-3 text-[#B46248]" />
                      <span>Inspect</span>
                    </div>
                  </div>
                  <div className="pt-2.5 flex items-baseline justify-between gap-2">
                    <span className="font-editorial text-lg text-[#1D1A17] group-hover:text-[#B46248] transition-colors">
                      {artwork.title}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#6E655C]">
                      ← Walk I
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Slide Track (Moves Right →) */}
          <div className="runway-track-container relative w-full overflow-hidden py-3 mt-4">
            <div className="animate-runway-right gap-6 px-3">
              {bottomLoop.map((artwork, i) => (
                <button
                  key={`var1-bottom-${artwork.id}-${i}`}
                  type="button"
                  onClick={() => onSelectArtwork(artwork)}
                  aria-label={`Inspect ${artwork.title} in lightbox`}
                  className="group relative w-[240px] sm:w-[275px] shrink-0 text-left focus:outline-none"
                >
                  <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#F6F1E8] border border-[#1D1A17]/15 shadow-[0_12px_30px_-14px_rgba(29,26,23,0.18)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_45px_-16px_rgba(29,26,23,0.28)]">
                    <img
                      src={artwork.image}
                      alt={artwork.alt}
                      width={artwork.width}
                      height={artwork.height}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-3 left-3 bg-[#F6F1E8]/92 px-2.5 py-0.5 border border-[#1D1A17]/10">
                      <span className="font-editorial italic text-xs text-[#433429]">
                        {artwork.annotation}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#F6F1E8]/95 text-[#1D1A17] px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center gap-1">
                      <Expand className="w-3 h-3 text-[#B46248]" />
                      <span>Inspect</span>
                    </div>
                  </div>
                  <div className="pt-2.5 flex items-baseline justify-between gap-2">
                    <span className="font-editorial text-lg text-[#1D1A17] group-hover:text-[#B46248] transition-colors">
                      {artwork.title}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#B46248]">
                      Walk II →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          VARIATION II: STAGGERED ATELIER FILMSTRIP (Sketchbook Mounts & Offset Rhythm)
         ===================================================================== */}
      {showStaggered && (
        <div className="pt-14 pb-10 border-t border-[#1D1A17]/12">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-editorial italic text-lg text-[#B46248]">
                Variation II.
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#1D1A17]">
                Staggered Atelier Sketchbook — Mat-Framed & Offset
              </h3>
            </div>
            <span className="hidden md:inline-block font-editorial italic text-sm text-[#6E655C]">
              Mounted cotton cards with alternating vertical rhythm
            </span>
          </div>

          {/* Top Staggered Track (Moves Left ←) */}
          <div className="runway-track-container relative w-full overflow-hidden py-5">
            <div className="animate-runway-left gap-8 px-4 items-center">
              {topLoop.map((artwork, i) => {
                const isEven = i % 2 === 0;
                return (
                  <button
                    key={`var2-top-${artwork.id}-${i}`}
                    type="button"
                    onClick={() => onSelectArtwork(artwork)}
                    className={`group relative shrink-0 text-left transition-transform duration-500 ${
                      isEven
                        ? "w-[250px] sm:w-[290px] -translate-y-2"
                        : "w-[220px] sm:w-[255px] translate-y-3"
                    } hover:translate-y-0 focus:outline-none`}
                  >
                    <div className="bg-[#F6F1E8] p-3 sm:p-4 border border-[#1D1A17]/18 shadow-[0_16px_36px_-15px_rgba(29,26,23,0.2)]">
                      <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#E6DDD0]">
                        <img
                          src={artwork.image}
                          alt={artwork.alt}
                          width={artwork.width}
                          height={artwork.height}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="pt-3 flex items-center justify-between border-t border-[#1D1A17]/10 mt-3">
                        <span className="font-editorial italic text-sm text-[#1D1A17] group-hover:text-[#B46248]">
                          {artwork.title}
                        </span>
                        <Sparkles className="w-3 h-3 text-[#B46248]" />
                      </div>
                      <p className="text-[11px] text-[#6E655C] truncate mt-0.5">
                        {artwork.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Staggered Track (Moves Right →) */}
          <div className="runway-track-container relative w-full overflow-hidden py-5 mt-2">
            <div className="animate-runway-right gap-8 px-4 items-center">
              {bottomLoop.map((artwork, i) => {
                const isEven = i % 2 === 0;
                return (
                  <button
                    key={`var2-bottom-${artwork.id}-${i}`}
                    type="button"
                    onClick={() => onSelectArtwork(artwork)}
                    className={`group relative shrink-0 text-left transition-transform duration-500 ${
                      isEven
                        ? "w-[225px] sm:w-[260px] translate-y-2"
                        : "w-[255px] sm:w-[295px] -translate-y-3"
                    } hover:translate-y-0 focus:outline-none`}
                  >
                    <div className="bg-[#F6F1E8] p-3 sm:p-4 border border-[#1D1A17]/18 shadow-[0_16px_36px_-15px_rgba(29,26,23,0.2)]">
                      <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#E6DDD0]">
                        <img
                          src={artwork.image}
                          alt={artwork.alt}
                          width={artwork.width}
                          height={artwork.height}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="pt-3 flex items-center justify-between border-t border-[#1D1A17]/10 mt-3">
                        <span className="font-editorial italic text-sm text-[#1D1A17] group-hover:text-[#B46248]">
                          {artwork.title}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.14em] text-[#B46248]">
                          Series B
                        </span>
                      </div>
                      <p className="text-[11px] text-[#6E655C] truncate mt-0.5">
                        {artwork.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          VARIATION III: NOCTURNE SPOTLIGHT RUNWAY STAGE (Dark Catwalk Theater)
         ===================================================================== */}
      {showSpotlight && (
        <div className="mt-8 bg-[#181512] text-[#F6F1E8] py-16 border-y border-[#1D1A17]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-editorial italic text-lg text-[#C48778]">
                Variation III.
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#F6F1E8]">
                Nocturne Spotlight Runway — Theater Stage
              </h3>
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C48778]">
              Continuous Counter-Flow Catwalk • Click Any Look to Inspect
            </span>
          </div>

          {/* Top Dark Spotlight Track (Moves Left ←) */}
          <div className="runway-track-container relative w-full overflow-hidden py-2">
            <div className="animate-runway-left gap-5 px-3">
              {topLoop.map((artwork, i) => (
                <button
                  key={`var3-top-${artwork.id}-${i}`}
                  type="button"
                  onClick={() => onSelectArtwork(artwork)}
                  className="group relative w-[250px] sm:w-[285px] shrink-0 text-left focus:outline-none"
                >
                  <div className="relative aspect-[2/3] w-full overflow-hidden border border-[#F6F1E8]/15 bg-[#24201C]">
                    <img
                      src={artwork.image}
                      alt={artwork.alt}
                      width={artwork.width}
                      height={artwork.height}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-92 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14110F]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                    <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] text-[#F6F1E8] bg-[#181512]/80 px-2.5 py-1 border border-[#F6F1E8]/15">
                      {artwork.annotation}
                    </div>
                    <div className="absolute bottom-3.5 inset-x-3.5 flex items-end justify-between gap-2">
                      <div>
                        <p className="font-editorial text-xl text-[#F6F1E8] leading-tight">
                          {artwork.title}
                        </p>
                        <p className="font-editorial italic text-xs text-[#C48778] mt-0.5">
                          {artwork.subtitle}
                        </p>
                      </div>
                      <Expand className="w-4 h-4 text-[#C48778] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Dark Spotlight Track (Moves Right →) */}
          <div className="runway-track-container relative w-full overflow-hidden py-2 mt-5">
            <div className="animate-runway-right gap-5 px-3">
              {bottomLoop.map((artwork, i) => (
                <button
                  key={`var3-bottom-${artwork.id}-${i}`}
                  type="button"
                  onClick={() => onSelectArtwork(artwork)}
                  className="group relative w-[250px] sm:w-[285px] shrink-0 text-left focus:outline-none"
                >
                  <div className="relative aspect-[2/3] w-full overflow-hidden border border-[#F6F1E8]/15 bg-[#24201C]">
                    <img
                      src={artwork.image}
                      alt={artwork.alt}
                      width={artwork.width}
                      height={artwork.height}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-92 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14110F]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                    <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] text-[#F6F1E8] bg-[#181512]/80 px-2.5 py-1 border border-[#F6F1E8]/15">
                      {artwork.annotation}
                    </div>
                    <div className="absolute bottom-3.5 inset-x-3.5 flex items-end justify-between gap-2">
                      <div>
                        <p className="font-editorial text-xl text-[#F6F1E8] leading-tight">
                          {artwork.title}
                        </p>
                        <p className="font-editorial italic text-xs text-[#C48778] mt-0.5">
                          {artwork.subtitle}
                        </p>
                      </div>
                      <Expand className="w-4 h-4 text-[#C48778] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Commission CTA Strip */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <p className="font-editorial italic text-xl sm:text-2xl text-[#1D1A17]">
            Available for live runway sketching, backstage lookbooks & modeling
            portfolios.
          </p>
          <p className="text-xs text-[#6E655C] mt-1">
            Click any look on the runway above to inspect its full plate and
            recommended replacement dimensions (1000 × 1500 px).
          </p>
        </div>

        <a
          href={mailtoHref}
          className="shrink-0 inline-flex items-center gap-2.5 bg-[#1D1A17] text-[#F6F1E8] px-6 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-[#B46248] transition-colors"
        >
          <span>{modelingRunwaySectionData.ctaLabel}</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
