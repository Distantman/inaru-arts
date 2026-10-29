"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { aboutArtistData, artistProfile } from "@/lib/portfolio-data";
import { BotanicalSprig } from "./SketchDecorations";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-section-heading"
      className="relative py-20 md:py-28 border-b border-[#1D1A17]/15 bg-[#EFE8DC]/55"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Top Editorial Eyebrow */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#B46248] mb-6">
          <span>{aboutArtistData.eyebrow}</span>
          <span className="h-[1px] w-10 bg-[#B46248]/60" />
          <span>Biography & Studio Practice</span>
        </div>

        {/* Main Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Portrait & Studio Workbench (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-[#F6F1E8] p-3.5 sm:p-4 border border-[#1D1A17]/15 shadow-[0_18px_45px_-20px_rgba(29,26,23,0.2)]"
            >
              <div className="aspect-square w-full overflow-hidden bg-[#E6DDD0]">
                <img
                  src={aboutArtistData.portraitImage.src}
                  alt={aboutArtistData.portraitImage.alt}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="pt-3 font-editorial italic text-xs sm:text-sm text-[#6E655C]">
                {aboutArtistData.portraitImage.caption}
              </figcaption>
            </motion.figure>

            {/* Secondary Studio Workbench Image */}
            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="sm:w-[86%] sm:ml-auto bg-[#F6F1E8] p-3 border border-[#1D1A17]/15"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E6DDD0]">
                <img
                  src={aboutArtistData.studioImage.src}
                  alt={aboutArtistData.studioImage.alt}
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="pt-2.5 font-editorial italic text-xs text-[#6E655C]">
                {aboutArtistData.studioImage.caption}
              </figcaption>
            </motion.figure>
          </div>

          {/* Right Column: Biography & Artistic Philosophy (Cols 6-12) */}
          <div className="lg:col-span-7 space-y-8">
            <h2
              id="about-section-heading"
              className="font-editorial text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] text-[#1D1A17]"
            >
              {aboutArtistData.title}
            </h2>

            {/* Architectural & Global Practice Credential Strip */}
            <div className="flex items-center gap-3 bg-[#F6F1E8] border-l-2 border-[#B46248] px-4 py-3 text-xs uppercase tracking-[0.15em] text-[#433429]">
              <Compass className="w-4 h-4 text-[#B46248] shrink-0" />
              <span>{aboutArtistData.backgroundTag}</span>
            </div>

            {/* Extended Biography */}
            <div className="space-y-6 pt-1">
              {aboutArtistData.extendedBioParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-editorial text-lg sm:text-xl md:text-[21px] leading-[1.65] text-[#433429]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Artistic Philosophy Pull-Quote */}
            <blockquote className="my-8 py-6 px-6 sm:px-8 bg-[#F6F1E8] border border-[#1D1A17]/12 relative">
              <p className="font-editorial italic text-2xl sm:text-3xl leading-snug text-[#433429]">
                {aboutArtistData.philosophyQuote}
              </p>
              <footer className="mt-3 text-xs uppercase tracking-[0.2em] text-[#B46248]">
                — {artistProfile.name}, Studio Notes
              </footer>
              <BotanicalSprig className="hidden sm:block absolute right-4 bottom-2 w-12 h-16 text-[#687156]/35" />
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
