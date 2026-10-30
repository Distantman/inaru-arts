"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Layers } from "lucide-react";
import {
  allPortfolioArtworks,
  ArtworkItem,
  DisciplineCategory,
  personalSectionData,
} from "@/lib/portfolio-data";
import { ArtworkCard } from "./ArtworkCard";

interface PersonalArchiveSectionProps {
  onSelectArtwork: (artwork: ArtworkItem) => void;
}

const filterTabs: { id: DisciplineCategory; label: string }[] = [
  { id: "personal", label: "Personal Studies & Commissions" },
  { id: "all", label: "Complete Curated Archive" },
  { id: "murals", label: "Painted Spaces" },
  { id: "modeling", label: "Runway & Model Studies" },
  { id: "wedding", label: "Live Weddings" },
];

export function PersonalArchiveSection({
  onSelectArtwork,
}: PersonalArchiveSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState<DisciplineCategory>("personal");

  const filteredArtworks = useMemo(() => {
    if (activeCategory === "personal") {
      return personalSectionData.artworks;
    }
    if (activeCategory === "all") {
      return allPortfolioArtworks.filter(
        (item) => item.featuredInArchive !== false
      );
    }
    return allPortfolioArtworks.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  // Split into 3 responsive columns for an organic masonry/flat-file rhythm
  const columns = useMemo(() => {
    const cols: ArtworkItem[][] = [[], [], []];
    filteredArtworks.forEach((item, index) => {
      cols[index % 3].push(item);
    });
    return cols;
  }, [filteredArtworks]);

  return (
    <section
      id="archive"
      aria-labelledby="archive-section-heading"
      className="relative py-24 md:py-32 border-b border-[#1D1A17]/15 bg-[#F6F1E8]"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Chapter Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 border-b border-[#1D1A17]/12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#B46248] mb-4">
              <span className="font-editorial italic text-base">
                Chapter {personalSectionData.chapterNumber}
              </span>
              <span className="h-[1px] w-8 bg-[#B46248]/60" />
              <span>{personalSectionData.eyebrow}</span>
            </div>

            <h2
              id="archive-section-heading"
              className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[#1D1A17]"
            >
              {personalSectionData.title}
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-editorial italic text-xl sm:text-2xl leading-relaxed text-[#433429]">
              {personalSectionData.lead}
            </p>
            <p className="text-sm leading-relaxed text-[#6E655C]">
              {personalSectionData.description}
            </p>
          </div>
        </div>

        {/* Interactive Category Filter Bar ("The Flat File Drawer Selector") */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#1D1A17]/10">
          <div
            role="tablist"
            aria-label="Filter portfolio archive by discipline"
            className="flex flex-wrap items-center gap-2 sm:gap-3"
          >
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248] ${
                    isActive
                      ? "bg-[#1D1A17] text-[#F6F1E8] border-[#1D1A17]"
                      : "bg-[#EFE8DC]/70 text-[#433429] border-[#1D1A17]/15 hover:border-[#1D1A17]/40"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs text-[#6E655C]">
            <Layers className="w-3.5 h-3.5 text-[#B46248]" />
            <span>Showing {filteredArtworks.length} curated plates</span>
          </div>
        </div>

        {/* Multi-Proportion Masonry-Inspired Editorial Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start"
          >
            {columns.map((colItems, colIdx) => (
              <div
                key={colIdx}
                className={`flex flex-col gap-10 ${
                  colIdx === 1 ? "lg:mt-10" : colIdx === 2 ? "lg:mt-4" : ""
                }`}
              >
                {colItems.map((artwork, itemIdx) => (
                  <ArtworkCard
                    key={artwork.id}
                    artwork={artwork}
                    onSelect={onSelectArtwork}
                    index={itemIdx}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
