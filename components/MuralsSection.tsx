"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Expand } from "lucide-react";
import {
  ArtworkItem,
  artistProfile,
  muralSectionData,
} from "@/lib/portfolio-data";

interface MuralsSectionProps {
  onSelectArtwork: (artwork: ArtworkItem) => void;
}

export function MuralsSection({ onSelectArtwork }: MuralsSectionProps) {
  const mailtoHref = `mailto:${artistProfile.email}?subject=${encodeURIComponent(
    muralSectionData.inquirySubject
  )}`;

  return (
    <section
      id="murals"
      aria-labelledby="murals-section-heading"
      className="relative bg-[#1E1B18] text-[#F6F1E8] py-24 md:py-32 border-b border-[#1D1A17]"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-16 border-b border-[#F6F1E8]/15">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#C48778] mb-4">
              <span className="font-editorial italic text-base">
                Chapter {muralSectionData.chapterNumber}
              </span>
              <span className="h-[1px] w-8 bg-[#C48778]/60" />
              <span>{muralSectionData.eyebrow}</span>
            </div>

            <h2
              id="murals-section-heading"
              className="font-editorial text-4xl sm:text-5xl lg:text-[58px] leading-[1.06] text-[#F6F1E8]"
            >
              {muralSectionData.title}
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-editorial italic text-xl sm:text-2xl leading-relaxed text-[#E6DDD0]">
              {muralSectionData.lead}
            </p>
            <p className="text-sm leading-relaxed text-[#BFB4A4]">
              {muralSectionData.description}
            </p>
          </div>
        </div>

        {/* Architectural Mural Case Studies */}
        <div className="divide-y divide-[#F6F1E8]/15">
          {muralSectionData.projects.map((project, idx) => (
            <article
              key={project.id}
              className="py-16 md:py-24 first:pt-16 last:pb-8"
            >
              {/* Project Metadata Strip */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-baseline">
                <div className="lg:col-span-5">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#C48778] block mb-2">
                    {project.number} — {project.spaceType}
                  </span>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#F6F1E8]">
                    {project.title}
                  </h3>
                </div>

                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t lg:border-t-0 border-[#F6F1E8]/12 pt-4 lg:pt-0 text-xs">
                  <div>
                    <span className="uppercase tracking-[0.16em] text-[#988E82] block mb-1">
                      Client / Space
                    </span>
                    <span className="text-[#E6DDD0] font-medium">
                      {project.client}
                    </span>
                  </div>
                  <div>
                    <span className="uppercase tracking-[0.16em] text-[#988E82] block mb-1">
                      Location
                    </span>
                    <span className="text-[#E6DDD0]">{project.location}</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="uppercase tracking-[0.16em] text-[#988E82] block mb-1">
                      Scale & Wall Area
                    </span>
                    <span className="text-[#E6DDD0]">{project.dimensions}</span>
                  </div>
                </div>
              </div>

              {/* Immersive Visual Composition: Full-Width / Large Landscape + Detail Plate */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Primary Wide Architectural View */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7 }}
                  className={
                    idx % 2 === 0
                      ? "lg:col-span-8"
                      : "lg:col-span-8 lg:order-2"
                  }
                >
                  <button
                    type="button"
                    onClick={() => onSelectArtwork(project.primaryImage)}
                    aria-label={`Inspect ${project.primaryImage.title} in lightbox`}
                    className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C48778]"
                  >
                    <div className="relative overflow-hidden border border-[#F6F1E8]/15 bg-[#2A2521]">
                      <img
                        src={project.primaryImage.image}
                        alt={project.primaryImage.alt}
                        width={project.primaryImage.width}
                        height={project.primaryImage.height}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute top-3.5 left-3.5 bg-[#1E1B18]/85 backdrop-blur-xs px-3 py-1 border border-[#F6F1E8]/15">
                        <span className="font-editorial italic text-xs text-[#E6DDD0]">
                          {project.primaryImage.annotation}
                        </span>
                      </div>
                      <div className="absolute bottom-3.5 right-3.5 flex items-center gap-1.5 bg-[#F6F1E8] text-[#1D1A17] px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Expand className="w-3 h-3 text-[#B46248]" />
                        <span>Full Scale View</span>
                      </div>
                    </div>
                  </button>

                  {/* Narrative & Medium Notes under Primary Image */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-6 pt-4 border-t border-[#F6F1E8]/10">
                    <div className="sm:col-span-7">
                      <p className="text-sm sm:text-[15px] leading-relaxed text-[#E6DDD0]/90">
                        {project.description}
                      </p>
                    </div>
                    <div className="sm:col-span-5 bg-[#282420] p-4 border border-[#F6F1E8]/10">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#C48778] block mb-1.5">
                        Surface & Mineral Medium
                      </span>
                      <p className="text-xs leading-relaxed text-[#BFB4A4]">
                        {project.surfaceAndMedium}
                      </p>
                      <p className="font-editorial italic text-sm text-[#E6DDD0] mt-2.5 pt-2 border-t border-[#F6F1E8]/10">
                        {project.curatorNote}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Close-Up / Elevation Study */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.12 }}
                  className={
                    idx % 2 === 0
                      ? "lg:col-span-4"
                      : "lg:col-span-4 lg:order-1"
                  }
                >
                  <button
                    type="button"
                    onClick={() => onSelectArtwork(project.detailImage)}
                    aria-label={`Inspect ${project.detailImage.title} in lightbox`}
                    className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C48778]"
                  >
                    <div className="relative overflow-hidden border border-[#F6F1E8]/15 bg-[#2A2521]">
                      <img
                        src={project.detailImage.image}
                        alt={project.detailImage.alt}
                        width={project.detailImage.width}
                        height={project.detailImage.height}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      />
                      <div className="absolute top-3 left-3 bg-[#1E1B18]/85 px-2.5 py-1 border border-[#F6F1E8]/15">
                        <span className="font-editorial italic text-xs text-[#E6DDD0]">
                          {project.detailImage.annotation}
                        </span>
                      </div>
                    </div>
                    <div className="pt-3">
                      <h4 className="font-editorial text-xl text-[#F6F1E8] group-hover:text-[#C48778] transition-colors">
                        {project.detailImage.title}
                      </h4>
                      <p className="text-xs text-[#BFB4A4] mt-1 leading-relaxed">
                        {project.detailImage.description}
                      </p>
                    </div>
                  </button>
                </motion.div>
              </div>
            </article>
          ))}
        </div>

        {/* Commercial Mural Commission Banner */}
        <div className="mt-12 pt-12 border-t border-[#F6F1E8]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-start gap-4 max-w-2xl">
            <Compass className="w-6 h-6 text-[#C48778] shrink-0 mt-1" />
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#F6F1E8]">
                Planning a café, restaurant, or studio interior?
              </h3>
              <p className="text-sm text-[#BFB4A4] mt-1.5 leading-relaxed">
                Share your architectural plans, wall dimensions, or moodboard
                for a bespoke mural proposal and site consultation.
              </p>
            </div>
          </div>

          <a
            href={mailtoHref}
            className="shrink-0 inline-flex items-center gap-2.5 bg-[#B46248] text-[#F6F1E8] px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C48778] hover:text-[#1D1A17] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6F1E8]"
          >
            <span>{muralSectionData.ctaLabel}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
