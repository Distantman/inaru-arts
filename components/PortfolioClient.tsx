"use client";

import React, { useState } from "react";
import {
  allPortfolioArtworks,
  ArtworkItem,
  heroData,
} from "@/lib/portfolio-data";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { WeddingSection } from "./WeddingSection";
import { MuralsSection } from "./MuralsSection";
import { FashionSection } from "./FashionSection";
import { PersonalArchiveSection } from "./PersonalArchiveSection";
import { AboutSection } from "./AboutSection";
import { ServicesAndContactSection } from "./ServicesAndContactSection";
import { LightboxModal } from "./LightboxModal";
import { HandDrawnDivider } from "./SketchDecorations";

const lightboxList: ArtworkItem[] = [
  heroData.collage.mainArtwork,
  heroData.collage.secondaryMural,
  heroData.collage.tertiaryLiveSketch,
  ...allPortfolioArtworks.filter((a) => a.id !== heroData.collage.mainArtwork.id),
];

export function PortfolioClient() {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(
    null
  );

  return (
    <div className="min-h-screen paper-grain-bg text-[#1D1A17] selection:bg-[#B46248]/20">
      {/* Skip to Main Content Accessibility Link */}
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#1D1A17] focus:text-[#F6F1E8] focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest"
      >
        Skip to portfolio works
      </a>

      <Navigation />

      <main>
        <HeroSection onSelectArtwork={setSelectedArtwork} />

        {/* Editorial Portfolio Index Banner (#work) */}
        <div
          id="work"
          className="border-b border-[#1D1A17]/12 bg-[#EFE8DC]/60 py-10"
        >
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#B46248] block mb-1">
                Selected Works & Exhibition Chapters
              </span>
              <p className="font-editorial text-2xl sm:text-3xl text-[#1D1A17]">
                Four disciplines united by direct observation and the drawn line.
              </p>
            </div>
            <HandDrawnDivider className="py-0 hidden lg:flex" />
            <p className="text-xs text-[#6E655C] max-w-xs">
              Click any plate across the chapters below to inspect high-resolution
              details and medium notes in the lightbox.
            </p>
          </div>
        </div>

        {/* Chapter 01 (formerly 02): Murals & Painted Spaces */}
        <MuralsSection onSelectArtwork={setSelectedArtwork} />

        {/* Chapter 02 (formerly 05): Personal Work & Interactive Archive */}
        <PersonalArchiveSection onSelectArtwork={setSelectedArtwork} />

        {/* Chapter 03 (formerly 01): Live Wedding Illustration */}
        <WeddingSection onSelectArtwork={setSelectedArtwork} />

        {/* Chapter 04 (formerly 03): Fashion & Figure Drawing */}
        <FashionSection onSelectArtwork={setSelectedArtwork} />

        {/* Biography & Studio Philosophy */}
        <AboutSection />

        {/* Services Directory & Contact */}
        <ServicesAndContactSection />
      </main>

      {/* Accessible Lightbox Modal */}
      <LightboxModal
        artwork={selectedArtwork}
        artworks={lightboxList}
        onClose={() => setSelectedArtwork(null)}
        onNavigate={(nextItem) => setSelectedArtwork(nextItem)}
      />
    </div>
  );
}
