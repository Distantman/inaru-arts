"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { artistProfile, servicesData } from "@/lib/portfolio-data";
import { HandDrawnDivider } from "./SketchDecorations";

export function ServicesAndContactSection() {
  const [selectedService, setSelectedService] = useState<string>(
    servicesData[0].title
  );
  const [eventOrProjectDate, setEventOrProjectDate] = useState("");
  const [locationNote, setLocationNote] = useState("");
  const [projectNotes, setProjectNotes] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const composedMailtoHref = () => {
    const subject = `Inquiry: ${selectedService}`;
    const bodyLines = [
      `Hello ${artistProfile.name},`,
      "",
      `I would love to inquire about: ${selectedService}`,
      eventOrProjectDate ? `Preferred Date / Timeline: ${eventOrProjectDate}` : "",
      locationNote ? `Location / Venue / Space: ${locationNote}` : "",
      "",
      projectNotes
        ? `Project or Event Details:\n${projectNotes}`
        : "Please share your availability and commission guide.",
      "",
      "Warm regards,",
    ].filter(Boolean);

    return `mailto:${artistProfile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(artistProfile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback if clipboard is restricted
    }
  };

  return (
    <>
      {/* Services & Commissions Directory */}
      <section
        id="services"
        aria-labelledby="services-section-heading"
        className="relative py-24 md:py-32 border-b border-[#1D1A17]/15 bg-[#F6F1E8]"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-16 border-b border-[#1D1A17]/12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#B46248] mb-4">
                <span>Services & Commissions</span>
                <span className="h-[1px] w-8 bg-[#B46248]/60" />
                <span>Collaborative Practice</span>
              </div>

              <h2
                id="services-section-heading"
                className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[#1D1A17]"
              >
                Ways to commission, collaborate, or study.
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="font-editorial italic text-xl sm:text-2xl leading-relaxed text-[#433429]">
                Every project begins with a conversation about atmosphere,
                materiality, and the story you want your space or celebration to
                hold.
              </p>
            </div>
          </div>

          {/* 6 Services Editorial Index */}
          <div className="divide-y divide-[#1D1A17]/12">
            {servicesData.map((service, idx) => {
              const directMailto = `mailto:${
                artistProfile.email
              }?subject=${encodeURIComponent(service.inquirySubject)}`;

              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.25) }}
                  className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
                >
                  {/* Col 1-4: Number, Title & Category Tag */}
                  <div className="lg:col-span-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-editorial italic text-lg text-[#B46248]">
                        {service.index}.
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#6E655C]">
                        {service.categoryTag}
                      </span>
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#1D1A17]">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#687156] pt-1">
                      <span className="uppercase tracking-[0.14em] font-medium">
                        Ideal for:
                      </span>{" "}
                      {service.idealFor}
                    </p>
                  </div>

                  {/* Col 5-9: Summary & Deliverables */}
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-sm sm:text-[15px] leading-relaxed text-[#433429]">
                      {service.summary}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {service.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs leading-relaxed text-[#6E655C]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#B46248] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 10-12: Direct Action */}
                  <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-end gap-3">
                    <a
                      href={directMailto}
                      onClick={() => setSelectedService(service.title)}
                      className="inline-flex items-center gap-2 border border-[#1D1A17] px-5 py-3 text-xs uppercase tracking-[0.16em] text-[#1D1A17] hover:bg-[#1D1A17] hover:text-[#F6F1E8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Commission Inquiry Section */}
      <section
        id="contact"
        aria-labelledby="contact-section-heading"
        className="relative py-24 md:py-32 bg-[#EFE8DC] border-b border-[#1D1A17]/15"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Contact Details & Social Channels */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#B46248] mb-4">
                  <span>Inquiries & Correspondence</span>
                  <span className="h-[1px] w-8 bg-[#B46248]/60" />
                  <span>Studio Contact</span>
                </div>

                <h2
                  id="contact-section-heading"
                  className="font-editorial text-4xl sm:text-5xl lg:text-[58px] leading-[1.05] text-[#1D1A17]"
                >
                  Let&apos;s create something worth keeping.
                </h2>

                <p className="mt-5 font-editorial italic text-xl sm:text-2xl leading-relaxed text-[#433429]">
                  Whether you are planning an intimate celebration, imagining a
                  hand-painted wall for your café, or hoping to host a drawing
                  salon, I would love to hear from you.
                </p>
              </div>

              {/* Direct Studio Email Block */}
              <div className="bg-[#F6F1E8] border border-[#1D1A17]/15 p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#6E655C]">
                    Direct Studio Email
                  </span>
                  <Mail className="w-4 h-4 text-[#B46248]" />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={`mailto:${artistProfile.email}`}
                    className="font-editorial text-2xl sm:text-3xl text-[#1D1A17] hover:text-[#B46248] transition-colors break-all"
                  >
                    {artistProfile.email}
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 border border-[#1D1A17]/25 px-3.5 py-2 text-[11px] uppercase tracking-[0.16em] text-[#433429] hover:border-[#1D1A17] hover:text-[#1D1A17] transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#687156]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-4 border-t border-[#1D1A17]/10 flex flex-wrap items-center gap-6 text-xs text-[#6E655C]">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B46248]" />
                    {artistProfile.locationPlaceholder}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C2954E]" />
                    Replies within 2 business days
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#6E655C] block mb-4">
                  Elsewhere & Sketchbook Dispatches
                </span>
                <div className="flex flex-wrap items-center gap-6">
                  {[
                    {
                      label: `Instagram (${artistProfile.instagramHandle})`,
                      href: artistProfile.instagramUrl,
                    },
                    { label: "Pinterest Boards", href: artistProfile.pinterestUrl },
                    {
                      label: "Sketchbook Journal",
                      href: artistProfile.substackUrl,
                    },
                  ].map((soc) => (
                    <a
                      key={soc.label}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#1D1A17] hover:text-[#B46248] underline underline-offset-4"
                    >
                      <span>{soc.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Static-Friendly Mailto Brief Composer */}
            <div className="lg:col-span-6">
              <div className="bg-[#F6F1E8] border border-[#1D1A17]/18 p-7 sm:p-10 shadow-[0_20px_50px_-22px_rgba(29,26,23,0.18)]">
                <div className="border-b border-[#1D1A17]/12 pb-5 mb-6">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#B46248] block mb-1">
                    Direct Email Composer
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1D1A17]">
                    Prepare Your Inquiry Note
                  </h3>
                  <p className="text-xs text-[#6E655C] mt-1">
                    Select a discipline and add optional details below to open a
                    pre-addressed email in your mail client.
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="inquiry-discipline"
                      className="block text-[11px] uppercase tracking-[0.18em] text-[#433429] mb-2"
                    >
                      Discipline / Offering
                    </label>
                    <select
                      id="inquiry-discipline"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-[#EFE8DC]/70 border border-[#1D1A17]/20 px-4 py-3 text-sm text-[#1D1A17] focus:outline-none focus:border-[#B46248]"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-date"
                        className="block text-[11px] uppercase tracking-[0.18em] text-[#433429] mb-2"
                      >
                        Preferred Date or Season
                      </label>
                      <input
                        id="inquiry-date"
                        type="text"
                        value={eventOrProjectDate}
                        onChange={(e) => setEventOrProjectDate(e.target.value)}
                        placeholder="e.g., September 2026 / Autumn"
                        className="w-full bg-[#EFE8DC]/70 border border-[#1D1A17]/20 px-4 py-2.5 text-sm text-[#1D1A17] placeholder:text-[#988E82] focus:outline-none focus:border-[#B46248]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-location"
                        className="block text-[11px] uppercase tracking-[0.18em] text-[#433429] mb-2"
                      >
                        City, Venue or Interior Space
                      </label>
                      <input
                        id="inquiry-location"
                        type="text"
                        value={locationNote}
                        onChange={(e) => setLocationNote(e.target.value)}
                        placeholder="e.g., Lisbon / Corner Café Wall"
                        className="w-full bg-[#EFE8DC]/70 border border-[#1D1A17]/20 px-4 py-2.5 text-sm text-[#1D1A17] placeholder:text-[#988E82] focus:outline-none focus:border-[#B46248]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-notes"
                      className="block text-[11px] uppercase tracking-[0.18em] text-[#433429] mb-2"
                    >
                      A Few Words About Your Vision
                    </label>
                    <textarea
                      id="inquiry-notes"
                      rows={4}
                      value={projectNotes}
                      onChange={(e) => setProjectNotes(e.target.value)}
                      placeholder="Share estimated guest count, approximate wall dimensions, or workshop ideas..."
                      className="w-full bg-[#EFE8DC]/70 border border-[#1D1A17]/20 p-4 text-sm text-[#1D1A17] placeholder:text-[#988E82] focus:outline-none focus:border-[#B46248]"
                    />
                  </div>

                  <div className="pt-2">
                    <a
                      href={composedMailtoHref()}
                      className="inline-flex w-full items-center justify-center gap-2.5 bg-[#1D1A17] text-[#F6F1E8] px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#B46248] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B46248]"
                    >
                      <span>Open Pre-Filled Email Inquiry</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="bg-[#1D1A17] text-[#E6DDD0] py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <HandDrawnDivider className="opacity-40 mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F6F1E8]/12 items-start">
            <div className="md:col-span-5 space-y-3">
              <a
                href="#top"
                className="font-editorial text-3xl text-[#F6F1E8] tracking-tight"
              >
                {artistProfile.name}
                <span className="text-[#B46248]">.</span>
              </a>
              <p className="font-editorial italic text-lg text-[#BFB4A4] max-w-sm">
                {artistProfile.headline} {artistProfile.supportingText}
              </p>
            </div>

            <div className="md:col-span-4 space-y-2 text-xs">
              <span className="uppercase tracking-[0.2em] text-[#C48778] block mb-2">
                Chapters & Disciplines
              </span>
              <ul className="grid grid-cols-2 gap-2 text-[#BFB4A4]">
                <li>
                  <a href="#murals" className="hover:text-[#F6F1E8]">
                    01. Painted Spaces
                  </a>
                </li>
                <li>
                  <a href="#archive" className="hover:text-[#F6F1E8]">
                    02. Studio Archive
                  </a>
                </li>
                <li>
                  <a href="#weddings" className="hover:text-[#F6F1E8]">
                    03. Live Weddings
                  </a>
                </li>
                <li>
                  <a href="#fashion" className="hover:text-[#F6F1E8]">
                    04. Fashion & Figure
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#F6F1E8]">
                    05. Biography
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-2 text-xs text-[#BFB4A4]">
              <span className="uppercase tracking-[0.2em] text-[#C48778] block mb-2">
                Studio & Commissions
              </span>
              <p className="leading-relaxed">
                Available internationally for live wedding illustration,
                site-specific interior murals, and observational drawing salons.
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#988E82]">
            <p>
              © {new Date().getFullYear()} {artistProfile.name} Studio. All
              rights reserved.
            </p>
            <a
              href="#top"
              className="uppercase tracking-[0.18em] text-[#E6DDD0] hover:text-[#C48778] transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
