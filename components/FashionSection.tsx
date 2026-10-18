"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  ArtworkItem,
  artistProfile,
  fashionSectionData,
} from "@/lib/portfolio-data";
import { ArtworkCard } from "./ArtworkCard";
import { GestureFlourish } from "./SketchDecorations";

interface FashionSectionProps {
  onSelectArtwork: (artwork: ArtworkItem) => void;
}

export function FashionSection({ onSelectArtwork }: FashionSectionProps) {
  const [
    tallCoat,
    standingContour,
    pleatedMotion,
    pastelProfile,
    notebookSpread,
    seatedDrybrush,
  ] = fashionSectionData.artworks;

  const mailtoHref = `mailto:${artistProfile.email}?subject=${encodeURIComponent(
    fashionSectionData.inquirySubject
  )}`;

  return (
    <section
      id="fashion"
      aria-labelledby="fashion-section-heading"
      className="relative py-24 md:py-32 border-b border-[#1D1A17]/15 bg-[#F6F1E8]"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Editorial Art-Book Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-16 border-b border-[#1D1A17]/12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#B46248] mb-4">
              <span className="font-editorial italic text-base">
                Chapter {fashionSectionData.chapterNumber}
              </span>
              <span className="h-[1px] w-8 bg-[#B46248]/60" />
              <span>{fashionSectionData.eyebrow}</span>
            </div>

            <h2
              id="fashion-section-heading"
              className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.06] text-[#1D1A17]"
            >
              {fashionSectionData.title}
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pl-8 space-y-5">
            <p className="font-editorial italic text-xl sm:text-2xl leading-relaxed text-[#433429]">
              {fashionSectionData.lead}
            </p>
            <p className="text-[15px] leading-relaxed text-[#6E655C]">
              {fashionSectionData.description}
            </p>
          </div>
        </div>

        {/* Irregular Art-Book Grid — Row 1: Tall 2:3 Silhouette + Offset 4:5 Sanguine + Editorial Margin Note & 1:1 Square */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-16 items-start">
          {/* Col 1-5: Tall 2:3 Sumi Ink Coat */}
          <div className="md:col-span-5">
            <ArtworkCard
              artwork={tallCoat}
              onSelect={onSelectArtwork}
              index={0}
            />
          </div>

          {/* Col 6-12: Staggered Sanguine Contour + Square Movement Study */}
          <div className="md:col-span-7 flex flex-col gap-12 md:pl-4 lg:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start">
              <div className="sm:col-span-7 sm:mt-10">
                <ArtworkCard
                  artwork={standingContour}
                  onSelect={onSelectArtwork}
                  index={1}
                />
              </div>

              {/* Art-Book Marginalia Quote Box */}
              <div className="sm:col-span-5 sm:mt-24 bg-[#EFE8DC]/75 border-l-2 border-[#B46248] p-6 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B46248] block">
                  From the Life Room
                </span>
                <p className="font-editorial italic text-lg leading-relaxed text-[#1D1A17]">
                  &ldquo;In a three-minute pose there is no time to hesitate.
                  The charcoal either finds the spine of the gesture on the
                  first pass, or you turn the page.&rdquo;
                </p>
                <GestureFlourish className="w-24 h-8 text-[#433429]/60" />
              </div>
            </div>

            {/* Offset Square Study */}
            <div className="sm:w-[68%] sm:ml-auto">
              <ArtworkCard
                artwork={pleatedMotion}
                onSelect={onSelectArtwork}
                index={2}
              />
            </div>
          </div>
        </div>

        {/* Irregular Art-Book Grid — Row 2: Double-Page Sketchbook Spread + Two Vertical Studies */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-16 mt-16 border-t border-[#1D1A17]/10 items-start">
          {/* Left: Double-Page Atelier Notebook Spread (16:10) */}
          <div className="md:col-span-6 lg:col-span-6">
            <ArtworkCard
              artwork={notebookSpread}
              onSelect={onSelectArtwork}
              index={3}
            />

            <div className="mt-10 pt-8 border-t border-[#1D1A17]/12 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-editorial italic text-xl text-[#1D1A17]">
                  Available for editorial commissions, lookbooks & private
                  acquisitions.
                </p>
                <p className="text-xs text-[#6E655C] mt-1">
                  Original works on archival cotton paper or high-resolution
                  publication plates.
                </p>
              </div>

              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 border border-[#1D1A17] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#1D1A17] hover:bg-[#1D1A17] hover:text-[#F6F1E8] transition-colors"
              >
                <span>{fashionSectionData.ctaLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Two Vertical Studies with Asymmetric Offset */}
          <div className="md:col-span-6 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
            <div>
              <ArtworkCard
                artwork={pastelProfile}
                onSelect={onSelectArtwork}
                index={4}
              />
            </div>
            <div className="sm:mt-14">
              <ArtworkCard
                artwork={seatedDrybrush}
                onSelect={onSelectArtwork}
                index={5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
