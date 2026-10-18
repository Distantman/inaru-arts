"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Feather } from "lucide-react";
import {
  ArtworkItem,
  artistProfile,
  weddingSectionData,
} from "@/lib/portfolio-data";
import { ArtworkCard } from "./ArtworkCard";
import { BotanicalSprig } from "./SketchDecorations";

interface WeddingSectionProps {
  onSelectArtwork: (artwork: ArtworkItem) => void;
}

export function WeddingSection({ onSelectArtwork }: WeddingSectionProps) {
  const [leadCouple, guestTrio, artistTable, bridalStudy, monogramDetail] =
    weddingSectionData.artworks;

  const mailtoHref = `mailto:${artistProfile.email}?subject=${encodeURIComponent(
    weddingSectionData.inquirySubject
  )}`;

  return (
    <section
      id="weddings"
      aria-labelledby="wedding-section-heading"
      className="relative py-20 md:py-28 lg:py-32 border-b border-[#1D1A17]/15"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Chapter Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-14 border-b border-[#1D1A17]/12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#B46248] mb-4">
              <span className="font-editorial italic text-base">
                Chapter {weddingSectionData.chapterNumber}
              </span>
              <span className="h-[1px] w-8 bg-[#B46248]/60" />
              <span>{weddingSectionData.eyebrow}</span>
            </div>

            <h2
              id="wedding-section-heading"
              className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[#1D1A17]"
            >
              {weddingSectionData.title}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="font-editorial italic text-xl sm:text-2xl leading-relaxed text-[#433429]">
              {weddingSectionData.lead}
            </p>
          </div>
        </div>

        {/* Editorial Story + Specs Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-12 pb-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-[15px] leading-relaxed text-[#433429]">
              {weddingSectionData.description}
            </p>

            {/* Specifications Box */}
            <div className="bg-[#EFE8DC]/85 border border-[#1D1A17]/12 p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between border-b border-[#1D1A17]/10 pb-3">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#6E655C]">
                  On-Location Atelier Notes
                </span>
                <Feather className="w-4 h-4 text-[#B46248]" />
              </div>

              <dl className="space-y-3.5">
                {weddingSectionData.highlights.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-[#B46248] font-medium">
                      {item.label}
                    </dt>
                    <dd className="font-editorial text-lg text-[#1D1A17] mt-0.5">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2.5 bg-[#1D1A17] text-[#F6F1E8] px-6 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-[#B46248] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
              >
                <span>{weddingSectionData.ctaLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="text-xs uppercase tracking-[0.18em] text-[#433429] hover:text-[#B46248] underline underline-offset-4 py-2"
              >
                View Event Packages
              </a>
            </div>
          </div>

          {/* Right Column: Lead Couple Study + Guest Trio */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-8 items-start">
            <div className="sm:col-span-7">
              <ArtworkCard
                artwork={leadCouple}
                onSelect={onSelectArtwork}
                index={0}
              />
            </div>
            <div className="sm:col-span-5 sm:mt-14">
              <ArtworkCard
                artwork={guestTrio}
                onSelect={onSelectArtwork}
                index={1}
              />
              <div className="hidden sm:flex justify-end mt-6 pr-4">
                <BotanicalSprig className="w-16 h-24 text-[#687156]/65" />
              </div>
            </div>
          </div>
        </div>

        {/* Lower Curated Asymmetric Row: Documentary Table + Bridal Silhouette + Monogram Detail */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pt-8 border-t border-[#1D1A17]/10 items-start"
        >
          <div className="md:col-span-5">
            <ArtworkCard
              artwork={artistTable}
              onSelect={onSelectArtwork}
              index={2}
            />
          </div>

          <div className="md:col-span-4 md:-mt-4">
            <ArtworkCard
              artwork={bridalStudy}
              onSelect={onSelectArtwork}
              index={3}
            />
          </div>

          <div className="md:col-span-3 md:mt-8">
            <ArtworkCard
              artwork={monogramDetail}
              onSelect={onSelectArtwork}
              index={4}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
