"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { ArtworkItem, artistProfile, heroData } from "@/lib/portfolio-data";
import { GestureFlourish, SketchUnderline } from "./SketchDecorations";

interface HeroSectionProps {
  onSelectArtwork: (artwork: ArtworkItem) => void;
}

export function HeroSection({ onSelectArtwork }: HeroSectionProps) {
  const { mainArtwork, secondaryMural, tertiaryLiveSketch } = heroData.collage;

  return (
    <section
      id="top"
      aria-label="Introduction and Featured Artwork Collage"
      className="relative overflow-hidden border-b border-[#1D1A17]/15 pt-6 pb-20 md:pt-12 md:pb-28 lg:py-20"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
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
              <h1 className="font-editorial text-[46px] sm:text-[62px] xl:text-[76px] leading-[1.02] tracking-[-0.015em] text-[#1D1A17]">
                Drawing{" "}
                <span className="italic font-normal text-[#433429] relative inline-block">
                  life
                  <SketchUnderline className="absolute -bottom-1 left-0" />
                </span>{" "}
                <br className="hidden sm:inline" />
                as it happens.
              </h1>

              {/* Supporting Text */}
              <p className="mt-7 font-editorial text-2xl sm:text-[28px] leading-[1.35] text-[#433429] max-w-xl">
                {heroData.supportingText}
              </p>

              {/* Editorial Context Note */}
              <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-[#6E655C] max-w-lg">
                From spontaneous ink-and-wash guest portraits drawn by
                candlelight to hand-painted limewash murals for neighborhood
                cafés and intimate observational drawing salons.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-5">
                <a
                  href={heroData.primaryCta.href}
                  className="group inline-flex items-center gap-3 bg-[#1D1A17] text-[#F6F1E8] px-7 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#B46248] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248] focus-visible:ring-offset-2"
                >
                  <span>{heroData.primaryCta.label}</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>

                <a
                  href={heroData.secondaryCta.href}
                  className="group inline-flex items-center gap-2.5 border border-[#1D1A17]/35 bg-[#F6F1E8]/60 px-6 py-4 text-xs uppercase tracking-[0.2em] text-[#1D1A17] transition-all duration-300 hover:border-[#1D1A17] hover:bg-[#EFE8DC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
                >
                  <span>{heroData.secondaryCta.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B46248] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Handwritten Marginalia & Chapter Index below Hero Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-12 lg:mt-16 pt-8 border-t border-[#1D1A17]/12"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#6E655C]">
                    Studio Marginalia & Notes
                  </p>
                  <ul className="space-y-1.5 font-editorial italic text-base sm:text-lg text-[#433429]">
                    {heroData.marginalia.map((note, idx) => (
                      <li key={idx} className="flex items-baseline gap-2.5">
                        <span className="text-xs not-italic text-[#B46248]">
                          0{idx + 1}
                        </span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <GestureFlourish className="hidden sm:block w-28 h-12 text-[#B46248]/60 shrink-0" />
              </div>

              {/* Discipline Jump Bar */}
              <div className="mt-7 pt-5 border-t border-[#1D1A17]/10 grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
                {[
                  { num: "I", name: "Murals", href: "#murals" },
                  { num: "II", name: "Archive", href: "#archive" },
                  { num: "III", name: "Runway", href: "#modeling" },
                  { num: "IV", name: "Weddings", href: "#weddings" },
                  { num: "V", name: "Fashion & Figure", href: "#fashion" },
                ].map((ch) => (
                  <a
                    key={ch.num}
                    href={ch.href}
                    className="group flex items-baseline gap-1.5 py-1 text-[#433429] hover:text-[#B46248] transition-colors"
                  >
                    <span className="font-editorial italic text-[#B46248]">
                      {ch.num}.
                    </span>
                    <span className="uppercase tracking-[0.13em] text-[11px] group-hover:underline underline-offset-4">
                      {ch.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Art-Directed Overlapping Collage (Cols 7-12) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[600px] lg:max-w-none pb-16 sm:pb-24 lg:pb-20">
              {/* Decorative Warm Paper Backdrop Offset Sheet */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-4 right-4 w-[78%] h-[82%] bg-[#E6DDD0]/75 border border-[#1D1A17]/10 -rotate-1"
              />

              {/* Primary Centerpiece Figure Study (Top Right / Center — 1200x1500, 4:5) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 ml-auto w-full sm:w-[76%]"
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
                className="relative z-20 -mt-20 sm:-mt-40 w-[72%] sm:w-[54%] mr-auto"
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
                className="relative sm:absolute z-30 mt-6 sm:mt-0 sm:bottom-2 sm:right-2 w-[62%] sm:w-[42%] ml-auto"
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
