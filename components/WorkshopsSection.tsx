"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Check, Users } from "lucide-react";
import {
  ArtworkItem,
  artistProfile,
  workshopsSectionData,
} from "@/lib/portfolio-data";
import { ArtworkCard } from "./ArtworkCard";

interface WorkshopsSectionProps {
  onSelectArtwork: (artwork: ArtworkItem) => void;
}

export function WorkshopsSection({ onSelectArtwork }: WorkshopsSectionProps) {
  return (
    <section
      id="workshops"
      aria-labelledby="workshops-section-heading"
      className="relative py-24 md:py-32 border-b border-[#1D1A17]/15 bg-[#EFE8DC]/65"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Chapter Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-14 border-b border-[#1D1A17]/12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#687156] mb-4">
              <span className="font-editorial italic text-base text-[#B46248]">
                Chapter {workshopsSectionData.chapterNumber}
              </span>
              <span className="h-[1px] w-8 bg-[#687156]/60" />
              <span>{workshopsSectionData.eyebrow}</span>
            </div>

            <h2
              id="workshops-section-heading"
              className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[#1D1A17]"
            >
              {workshopsSectionData.title}
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-editorial italic text-xl sm:text-2xl leading-relaxed text-[#433429]">
              {workshopsSectionData.lead}
            </p>
            <p className="text-sm leading-relaxed text-[#6E655C]">
              {workshopsSectionData.description}
            </p>
          </div>
        </div>

        {/* Visual Showcase of the Teaching Practice */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-14 pb-16 items-start">
          <div className="md:col-span-5">
            <ArtworkCard
              artwork={workshopsSectionData.gallery[0]}
              onSelect={onSelectArtwork}
              index={0}
            />
          </div>
          <div className="md:col-span-3 md:mt-8">
            <ArtworkCard
              artwork={workshopsSectionData.gallery[1]}
              onSelect={onSelectArtwork}
              index={1}
            />
          </div>
          <div className="md:col-span-4">
            <ArtworkCard
              artwork={workshopsSectionData.gallery[2]}
              onSelect={onSelectArtwork}
              index={2}
            />
          </div>
        </div>

        {/* Configurable Workshop Offerings Grid (Private Lessons, Group Salons, Creative Events) */}
        <div className="pt-8 border-t border-[#1D1A17]/12">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#B46248] block mb-1">
                Configurable Formats & Curriculum
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#1D1A17]">
                Ways to Draw Together
              </h3>
            </div>
            <p className="font-editorial italic text-base sm:text-lg text-[#433429]">
              {workshopsSectionData.philosophyNote}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workshopsSectionData.offerings.map((offering, index) => {
              const mailto = `mailto:${artistProfile.email}?subject=${encodeURIComponent(
                offering.inquirySubject
              )}`;

              return (
                <motion.article
                  key={offering.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="flex flex-col justify-between bg-[#F6F1E8] border border-[#1D1A17]/15 p-7 sm:p-8 shadow-[0_12px_32px_-18px_rgba(29,26,23,0.12)]"
                >
                  <div>
                    {/* Format Code & Level Tag */}
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#1D1A17]/10">
                      <span className="font-editorial italic text-base text-[#B46248]">
                        {offering.code}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.15em] text-[#687156] bg-[#EFE8DC] px-2.5 py-1">
                        {offering.groupSize}
                      </span>
                    </div>

                    <h4 className="font-editorial text-2xl sm:text-[28px] leading-snug text-[#1D1A17] mt-5">
                      {offering.title}
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#6E655C]">
                      <span className="inline-flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#B46248]" />
                        {offering.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#687156]" />
                        {offering.format}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-[#433429]">
                      {offering.description}
                    </p>

                    {/* Curriculum Highlights */}
                    <div className="mt-6 pt-5 border-t border-[#1D1A17]/10">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#6E655C] block mb-3">
                        Session Focus
                      </span>
                      <ul className="space-y-2">
                        {offering.curriculumHighlights.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs leading-relaxed text-[#1D1A17]/85"
                          >
                            <Check className="w-3.5 h-3.5 text-[#B46248] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#1D1A17]/12">
                    <p className="font-editorial italic text-xs text-[#6E655C] mb-4">
                      {offering.materialsNote}
                    </p>
                    <a
                      href={mailto}
                      className="inline-flex w-full items-center justify-between border border-[#1D1A17] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#1D1A17] hover:bg-[#1D1A17] hover:text-[#F6F1E8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
                    >
                      <span>Book or Inquire</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
