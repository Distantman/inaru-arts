"use client";

import React from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { AspectRatioType, ArtworkItem } from "@/lib/portfolio-data";

const aspectClasses: Record<AspectRatioType, string> = {
  "portrait-tall": "aspect-[2/3]",
  portrait: "aspect-[3/4]",
  "portrait-editorial": "aspect-[4/5]",
  square: "aspect-square",
  "landscape-classic": "aspect-[4/3]",
  "landscape-editorial": "aspect-[16/10]",
  "landscape-wide": "aspect-[16/9]",
};

interface ArtworkCardProps {
  artwork: ArtworkItem;
  onSelect: (artwork: ArtworkItem) => void;
  priority?: boolean;
  showExtendedCaption?: boolean;
  index?: number;
  className?: string;
}

export function ArtworkCard({
  artwork,
  onSelect,
  priority = false,
  showExtendedCaption = true,
  index = 0,
  className = "",
}: ArtworkCardProps) {
  const ratioClass = aspectClasses[artwork.aspectRatio] || "aspect-[4/5]";

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.08, 0.32),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative flex flex-col ${className}`}
    >
      <button
        type="button"
        onClick={() => onSelect(artwork)}
        aria-label={`View "${artwork.title}" (${artwork.medium}) in high-resolution lightbox`}
        className="text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F6F1E8]"
      >
        {/* Artwork Frame */}
        <div
          className={`relative w-full overflow-hidden bg-[#EFE8DC] border border-[#1D1A17]/12 shadow-[0_10px_30px_-15px_rgba(29,26,23,0.14)] transition-shadow duration-500 group-hover:shadow-[0_20px_45px_-18px_rgba(29,26,23,0.25)] ${ratioClass}`}
        >
          <img
            src={artwork.image}
            alt={artwork.alt}
            width={artwork.width}
            height={artwork.height}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />

          {/* Subtle warm hover veil */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1D1A17]/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Top-left handwritten plate annotation badge */}
          {artwork.annotation && (
            <div className="pointer-events-none absolute top-3 left-3 bg-[#F6F1E8]/92 backdrop-blur-xs px-2.5 py-1 border border-[#1D1A17]/10">
              <span className="font-editorial italic text-xs tracking-wide text-[#433429]">
                {artwork.annotation}
              </span>
            </div>
          )}

          {/* Bottom-right Lightbox inspection prompt on hover */}
          <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 bg-[#F6F1E8]/95 text-[#1D1A17] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <Expand className="w-3 h-3 text-[#B46248]" />
            <span>Inspect Plate</span>
          </div>
        </div>

        {/* Editorial Caption Below Artwork */}
        <figcaption className="pt-3.5 pb-1 flex flex-col gap-1">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-editorial text-xl md:text-[22px] leading-snug text-[#1D1A17] group-hover:text-[#B46248] transition-colors">
              {artwork.title}
            </h3>
            {artwork.dimensionsOrDuration && (
              <span className="shrink-0 text-[11px] uppercase tracking-[0.14em] text-[#6E655C]">
                {artwork.dimensionsOrDuration}
              </span>
            )}
          </div>

          <p className="text-xs text-[#6E655C] leading-relaxed">
            {artwork.medium}
          </p>

          {showExtendedCaption && artwork.description && (
            <p className="text-[13px] text-[#433429]/85 leading-relaxed pt-1 line-clamp-2">
              {artwork.description}
            </p>
          )}
        </figcaption>
      </button>
    </motion.figure>
  );
}
