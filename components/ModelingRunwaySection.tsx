"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Expand,
  Pause,
  Play,
} from "lucide-react";
import {
  ArtworkItem,
  artistProfile,
  modelingRunwaySectionData,
} from "@/lib/portfolio-data";

interface ModelingRunwaySectionProps {
  onSelectArtwork: (artwork: ArtworkItem) => void;
}

export function ModelingRunwaySection({
  onSelectArtwork,
}: ModelingRunwaySectionProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [speedSeconds, setSpeedSeconds] = useState<number>(46);

  const { topRowArtworks, bottomRowArtworks } = modelingRunwaySectionData;

  // Duplicate arrays for seamless 50% infinite loop translation
  const topLoop = [...topRowArtworks, ...topRowArtworks];
  const bottomLoop = [...bottomRowArtworks, ...bottomRowArtworks];

  const mailtoHref = `mailto:${artistProfile.email}?subject=${encodeURIComponent(
    modelingRunwaySectionData.inquirySubject
  )}`;

  return (
    <section
      id="modeling"
      aria-labelledby="modeling-section-heading"
      className={`relative py-24 md:py-32 bg-[#181512] text-[#F6F1E8] border-b border-[#1D1A17] overflow-hidden ${
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 border-b border-[#F6F1E8]/15">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#C48778] mb-4">
              <span className="font-editorial italic text-base">
                Chapter {modelingRunwaySectionData.chapterNumber}
              </span>
              <span className="h-[1px] w-8 bg-[#C48778]/60" />
              <span>{modelingRunwaySectionData.eyebrow}</span>
            </div>

            <h2
              id="modeling-section-heading"
              className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.06] text-[#F6F1E8]"
            >
              {modelingRunwaySectionData.title}
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-editorial italic text-xl sm:text-2xl leading-relaxed text-[#E6DDD0]">
              {modelingRunwaySectionData.lead}
            </p>
            <p className="text-sm leading-relaxed text-[#BFB4A4]">
              {modelingRunwaySectionData.description}
            </p>
          </div>
        </div>

        {/* Theater Catwalk Controls Bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#F6F1E8]/10 mb-10">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#C48778]">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>
              Continuous Counter-Flow Catwalk • Click Any Look to Inspect
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>

          {/* Pace & Pause Controls */}
          <div className="flex items-center gap-2.5 text-xs">
            <div className="hidden sm:flex items-center border border-[#F6F1E8]/15 bg-[#221E1A]">
              {[
                { label: "Slow", sec: 68 },
                { label: "Runway", sec: 46 },
                { label: "Brisk", sec: 28 },
              ].map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setSpeedSeconds(s.sec)}
                  className={`px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] transition-colors ${
                    speedSeconds === s.sec
                      ? "bg-[#B46248] text-[#F6F1E8]"
                      : "text-[#BFB4A4] hover:text-[#F6F1E8]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-1.5 border border-[#F6F1E8]/20 bg-[#221E1A] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#F6F1E8] hover:border-[#C48778] transition-colors"
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#C48778]" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[#C48778]" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Top Dark Spotlight Track (Moves Left ←) */}
      <div className="runway-track-container relative w-full overflow-hidden py-2">
        <div className="animate-runway-left gap-5 px-3">
          {topLoop.map((artwork, i) => (
            <button
              key={`runway-top-${artwork.id}-${i}`}
              type="button"
              onClick={() => onSelectArtwork(artwork)}
              aria-label={`Inspect ${artwork.title} in lightbox`}
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
              key={`runway-bottom-${artwork.id}-${i}`}
              type="button"
              onClick={() => onSelectArtwork(artwork)}
              aria-label={`Inspect ${artwork.title} in lightbox`}
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

      {/* Bottom Commission CTA Strip */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-14 mt-10 border-t border-[#F6F1E8]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <p className="font-editorial italic text-xl sm:text-2xl text-[#F6F1E8]">
            Available for live runway sketching, backstage lookbooks & modeling
            portfolios.
          </p>
          <p className="text-xs text-[#BFB4A4] mt-1">
            Click any look on the runway stage above to inspect its full plate
            and recommended dimensions (1000 × 1500 px).
          </p>
        </div>

        <a
          href={mailtoHref}
          className="shrink-0 inline-flex items-center gap-2.5 bg-[#B46248] text-[#F6F1E8] px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C48778] hover:text-[#181512] transition-colors"
        >
          <span>{modelingRunwaySectionData.ctaLabel}</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
