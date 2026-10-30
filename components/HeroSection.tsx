"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Expand,
  Layers,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { ArtworkItem, artistProfile, heroData } from "@/lib/portfolio-data";
import { SketchUnderline } from "./SketchDecorations";

interface HeroSectionProps {
  onSelectArtwork: (artwork: ArtworkItem) => void;
}

export function HeroSection({ onSelectArtwork }: HeroSectionProps) {
  const { mainArtwork, secondaryMural, tertiaryLiveSketch } = heroData.collage;
  const [mobileMode, setMobileMode] = useState<"reel" | "collage">("reel");
  const [activeSlide, setActiveSlide] = useState(0);
  const reelRef = useRef<HTMLDivElement | null>(null);

  const heroPlates = [
    {
      artwork: mainArtwork,
      plateNum: "Plate 01",
      label: "Figure & Gesture",
      ratioClass: "aspect-[4/5]",
    },
    {
      artwork: secondaryMural,
      plateNum: "Plate 02",
      label: "Painted Spaces",
      ratioClass: "aspect-[7/9]",
    },
    {
      artwork: tertiaryLiveSketch,
      plateNum: "Plate 03",
      label: "Live Illustration",
      ratioClass: "aspect-[3/4]",
    },
  ];

  const handleReelScroll = () => {
    if (!reelRef.current) return;
    const { scrollLeft, offsetWidth } = reelRef.current;
    if (offsetWidth > 0) {
      const index = Math.round(scrollLeft / (offsetWidth * 0.78));
      setActiveSlide(Math.min(Math.max(index, 0), 2));
    }
  };

  const scrollToSlide = (idx: number) => {
    if (!reelRef.current) return;
    const cards = reelRef.current.children;
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveSlide(idx);
    }
  };

  return (
    <section
      id="top"
      aria-label="Introduction and Featured Artwork Collage"
      className="relative overflow-hidden border-b border-[#1D1A17]/15 pt-6 pb-12 sm:pb-20 md:pt-12 md:pb-24 lg:py-20"
    >
      {/* Top Editorial Issue Strip */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 mb-8 md:mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1D1A17]/12 pb-3 text-[11px] uppercase tracking-[0.2em] text-[#6E655C]">
          <span>{heroData.issueNumber}</span>
          <span className="hidden sm:inline font-editorial italic normal-case tracking-normal text-sm text-[#433429]">
            {artistProfile.availabilityBanner}
          </span>
          <span>Live Portraiture • Murals • Figurative Works</span>
        </div>
      </div>

      {/* Main Asymmetric Editorial Grid */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Expressive Magazine Typography & CTAs (Cols 1-6) */}
          <div className="lg:col-span-6 lg:pr-6 xl:pr-10 pt-2 lg:pt-8 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Artist Monogram / Studio Tag */}
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="h-[1px] w-8 bg-[#B46248]" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.22em] text-[#B46248] font-medium">
                  Portfolio of {artistProfile.name}
                </span>
              </div>

              {/* Expressive Editorial Headline */}
              <h1 className="font-editorial text-[44px] sm:text-[62px] xl:text-[76px] leading-[1.03] tracking-[-0.015em] text-[#1D1A17]">
                Drawing{" "}
                <span className="italic font-normal text-[#433429] relative inline-block">
                  life
                  <SketchUnderline className="absolute -bottom-1 left-0" />
                </span>{" "}
                <br className="hidden sm:inline" />
                as it happens.
              </h1>

              {/* Supporting Text */}
              <p className="mt-6 sm:mt-7 font-editorial text-2xl sm:text-[28px] leading-[1.35] text-[#433429] max-w-xl">
                {heroData.supportingText}
              </p>

              {/* Editorial Context Note */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-[15px] leading-relaxed text-[#6E655C] max-w-lg">
                From spontaneous ink-and-wash guest portraits drawn by
                candlelight to hand-painted limewash murals for neighborhood
                cafés and intimate observational drawing salons.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-5">
                <a
                  href={heroData.primaryCta.href}
                  className="group inline-flex items-center gap-3 bg-[#1D1A17] text-[#F6F1E8] px-6 sm:px-7 py-3.5 sm:py-4 text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#B46248] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248] focus-visible:ring-offset-2"
                >
                  <span>{heroData.primaryCta.label}</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>

                <a
                  href={heroData.secondaryCta.href}
                  className="group inline-flex items-center gap-2.5 border border-[#1D1A17]/35 bg-[#F6F1E8]/60 px-5 sm:px-6 py-3.5 sm:py-4 text-xs uppercase tracking-[0.2em] text-[#1D1A17] transition-all duration-300 hover:border-[#1D1A17] hover:bg-[#EFE8DC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
                >
                  <span>{heroData.secondaryCta.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B46248] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Curated Chapters Jump Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-10 lg:mt-14 pt-6 border-t border-[#1D1A17]/12"
            >
              <div className="flex items-center justify-between mb-3 text-[11px] uppercase tracking-[0.18em] text-[#6E655C]">
                <span>Curated Disciplines</span>
                <span className="font-editorial italic normal-case text-xs text-[#B46248]">
                  Chapters I–IV
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
                {[
                  { num: "I", name: "Murals", href: "#murals" },
                  { num: "II", name: "Archive", href: "#archive" },
                  { num: "III", name: "Runway", href: "#modeling" },
                  { num: "IV", name: "Weddings", href: "#weddings" },
                ].map((ch) => (
                  <a
                    key={ch.num}
                    href={ch.href}
                    className="group flex items-baseline gap-1.5 py-1 text-[#433429] hover:text-[#B46248] transition-colors"
                  >
                    <span className="font-editorial italic text-[#B46248]">
                      {ch.num}.
                    </span>
                    <span className="uppercase tracking-[0.12em] text-[11px] group-hover:underline underline-offset-4">
                      {ch.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Artwork Showcase */}
          <div className="lg:col-span-6 relative">
            {/* MOBILE PRESENTATION (< sm) */}
            <div className="block sm:hidden">
              {/* Mobile View Toggle & Counter */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1D1A17]/10">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#6E655C]">
                  Featured Plates ({mobileMode === "reel" ? `${activeSlide + 1}/3` : "Collage"})
                </span>
                <div className="inline-flex items-center bg-[#EFE8DC] p-0.5 border border-[#1D1A17]/15 rounded-xs text-[10px] uppercase tracking-[0.14em]">
                  <button
                    type="button"
                    onClick={() => setMobileMode("reel")}
                    className={`px-2.5 py-1 transition-colors ${
                      mobileMode === "reel"
                        ? "bg-[#1D1A17] text-[#F6F1E8]"
                        : "text-[#433429] hover:text-[#1D1A17]"
                    }`}
                  >
                    Horizontal Reel
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileMode("collage")}
                    className={`px-2.5 py-1 transition-colors ${
                      mobileMode === "collage"
                        ? "bg-[#1D1A17] text-[#F6F1E8]"
                        : "text-[#433429] hover:text-[#1D1A17]"
                    }`}
                  >
                    Compact Collage
                  </button>
                </div>
              </div>

              {mobileMode === "reel" ? (
                /* Mode A: Zero-Gap Horizontal Touch Reel */
                <div>
                  <div
                    ref={reelRef}
                    onScroll={handleReelScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-1 pb-4 scrollbar-none scroll-smooth"
                  >
                    {heroPlates.map((plate, idx) => (
                      <div
                        key={plate.artwork.id}
                        className="w-[78vw] max-w-[300px] shrink-0 snap-center"
                      >
                        <button
                          type="button"
                          onClick={() => onSelectArtwork(plate.artwork)}
                          className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
                        >
                          <div
                            className={`relative ${plate.ratioClass} w-full overflow-hidden bg-[#EFE8DC] border border-[#1D1A17]/15 shadow-md`}
                          >
                            <img
                              src={plate.artwork.image}
                              alt={plate.artwork.alt}
                              width={plate.artwork.width}
                              height={plate.artwork.height}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="absolute top-2.5 left-2.5 bg-[#F6F1E8]/95 px-2 py-0.5 border border-[#1D1A17]/10">
                              <span className="font-editorial italic text-[11px] text-[#433429]">
                                {plate.artwork.annotation || plate.plateNum}
                              </span>
                            </div>
                            <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 bg-[#F6F1E8]/95 text-[#1D1A17] px-2 py-1 text-[10px] uppercase tracking-[0.14em]">
                              <Expand className="w-2.5 h-2.5 text-[#B46248]" />
                              <span>Inspect</span>
                            </div>
                          </div>
                          <div className="pt-2 flex items-baseline justify-between gap-2">
                            <h3 className="font-editorial text-base text-[#1D1A17] truncate">
                              {plate.artwork.title}
                            </h3>
                            <span className="shrink-0 text-[10px] uppercase tracking-[0.14em] text-[#B46248]">
                              {plate.label}
                            </span>
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Dot Indicators & Hint */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1.5">
                      {heroPlates.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={() => scrollToSlide(dotIdx)}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            activeSlide === dotIdx
                              ? "w-6 bg-[#B46248]"
                              : "w-1.5 bg-[#1D1A17]/25"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#6E655C]">
                      Swipe to browse plates
                    </span>
                  </div>
                </div>
              ) : (
                /* Mode B: Seamless Tight Overlapping Collage (Single Frame, 360px tall, zero vertical gaps) */
                <div className="relative w-full max-w-[340px] mx-auto h-[360px]">
                  {/* Plate 1 — Main Figure (Upper Right) */}
                  <div className="absolute top-0 right-0 w-[72%] z-10">
                    <button
                      type="button"
                      onClick={() => onSelectArtwork(mainArtwork)}
                      className="group block w-full text-left"
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EFE8DC] border border-[#1D1A17]/15 shadow-md">
                        <img
                          src={mainArtwork.image}
                          alt={mainArtwork.alt}
                          width={mainArtwork.width}
                          height={mainArtwork.height}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-[#F6F1E8]/95 px-2 py-0.5 border border-[#1D1A17]/10 text-[10px] font-editorial italic text-[#433429]">
                          {mainArtwork.annotation}
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Plate 2 — Painted Mural (Bottom Left Overlapping Plate 1) */}
                  <div className="absolute bottom-4 left-0 w-[55%] z-20">
                    <button
                      type="button"
                      onClick={() => onSelectArtwork(secondaryMural)}
                      className="group block w-full text-left"
                    >
                      <div className="bg-[#F6F1E8] p-2 border border-[#1D1A17]/18 shadow-lg -rotate-2">
                        <div className="relative aspect-[7/9] w-full overflow-hidden bg-[#EFE8DC]">
                          <img
                            src={secondaryMural.image}
                            alt={secondaryMural.alt}
                            width={secondaryMural.width}
                            height={secondaryMural.height}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="pt-1.5 flex items-center justify-between text-[10px]">
                          <span className="font-editorial italic text-[#433429] truncate">
                            Mural
                          </span>
                          <span className="uppercase tracking-[0.14em] text-[#B46248]">
                            Spatial
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Plate 3 — Live Sketch (Bottom Right Overlapping Both) */}
                  <div className="absolute bottom-0 right-1 w-[46%] z-30">
                    <button
                      type="button"
                      onClick={() => onSelectArtwork(tertiaryLiveSketch)}
                      className="group block w-full text-left"
                    >
                      <div className="bg-[#F6F1E8] p-2 border border-[#1D1A17]/18 shadow-lg rotate-2">
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EFE8DC]">
                          <img
                            src={tertiaryLiveSketch.image}
                            alt={tertiaryLiveSketch.alt}
                            width={tertiaryLiveSketch.width}
                            height={tertiaryLiveSketch.height}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="pt-1.5 flex items-center justify-between text-[10px]">
                          <span className="font-editorial italic text-[#433429] truncate">
                            Live
                          </span>
                          <Sparkles className="w-2.5 h-2.5 text-[#B46248]" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* TABLET & DESKTOP COLLAGE (sm:block hidden) */}
            <div className="hidden sm:block relative mx-auto max-w-[600px] lg:max-w-none pb-16 sm:pb-20 lg:pb-16">
              {/* Decorative Warm Paper Backdrop Offset Sheet */}
              <div
                aria-hidden="true"
                className="absolute -top-4 right-4 w-[78%] h-[82%] bg-[#E6DDD0]/75 border border-[#1D1A17]/10 -rotate-1"
              />

              {/* Primary Centerpiece Figure Study (Top Right / Center — 1200x1500, 4:5) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 ml-auto w-[76%]"
              >
                <button
                  type="button"
                  onClick={() => onSelectArtwork(mainArtwork)}
                  aria-label={`Inspect ${mainArtwork.title} in lightbox`}
                  className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EFE8DC] border border-[#1D1A17]/15 shadow-[0_24px_60px_-20px_rgba(29,26,23,0.28)]">
                    <img
                      src={mainArtwork.image}
                      alt={mainArtwork.alt}
                      width={mainArtwork.width}
                      height={mainArtwork.height}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-3.5 right-3.5 bg-[#F6F1E8]/92 px-3 py-1 border border-[#1D1A17]/12">
                      <span className="font-editorial italic text-xs text-[#433429]">
                        {mainArtwork.annotation}
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>

              {/* Overlapping Secondary Vertical Plate (Middle-Bottom Left — 1050x1350, 7:9) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20 -mt-36 sm:-mt-40 w-[54%] mr-auto"
              >
                <button
                  type="button"
                  onClick={() => onSelectArtwork(secondaryMural)}
                  aria-label={`Inspect ${secondaryMural.title} in lightbox`}
                  className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
                >
                  <div className="bg-[#F6F1E8] p-2.5 sm:p-3 border border-[#1D1A17]/18 shadow-[0_20px_45px_-15px_rgba(29,26,23,0.3)] -rotate-1 transition-transform duration-300 group-hover:rotate-0">
                    <div className="relative aspect-[7/9] w-full overflow-hidden bg-[#EFE8DC]">
                      <img
                        src={secondaryMural.image}
                        alt={secondaryMural.alt}
                        width={secondaryMural.width}
                        height={secondaryMural.height}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="pt-2 flex items-center justify-between gap-2">
                      <span className="font-editorial italic text-xs sm:text-sm text-[#433429]">
                        {secondaryMural.annotation}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.16em] text-[#B46248]">
                        Painted Spaces
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>

              {/* Overlapping Tertiary Live Wedding Sketch Card (Bottom Right — 900x1200, 3:4) */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="absolute z-30 bottom-2 right-2 w-[42%] ml-auto"
              >
                <button
                  type="button"
                  onClick={() => onSelectArtwork(tertiaryLiveSketch)}
                  aria-label={`Inspect ${tertiaryLiveSketch.title} in lightbox`}
                  className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
                >
                  <div className="bg-[#F6F1E8] p-2.5 border border-[#1D1A17]/18 shadow-[0_18px_40px_-14px_rgba(29,26,23,0.28)] rotate-1 transition-transform duration-300 group-hover:rotate-0">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EFE8DC]">
                      <img
                        src={tertiaryLiveSketch.image}
                        alt={tertiaryLiveSketch.alt}
                        width={tertiaryLiveSketch.width}
                        height={tertiaryLiveSketch.height}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="font-editorial italic text-xs text-[#433429]">
                        {tertiaryLiveSketch.annotation}
                      </span>
                      <Sparkles className="w-3 h-3 text-[#B46248]" />
                    </div>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
