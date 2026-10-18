"use client";

import React from "react";

export function HandDrawnDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center py-4 select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 360 22"
        fill="none"
        className="w-64 md:w-80 h-5 text-[#433429]/45"
      >
        <path
          d="M4 12C68 8 134 15 180 11C226 7 294 14 356 10"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M174 5C178 9 182 13 186 17M186 5C182 9 178 13 174 17"
          stroke="#B46248"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function BotanicalSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M58 152C56 112 63 68 72 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M61 112C42 106 28 96 22 86C34 84 49 94 61 112Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M63 84C82 77 96 66 102 54C88 53 74 65 63 84Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M67 52C49 45 38 35 34 24C46 24 58 35 67 52Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SketchUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 14"
      fill="none"
      className={`w-full h-3 ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 9.5C58 4.2 142 3.8 237 8.2"
        stroke="#B46248"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18 12C88 8.5 162 7.8 228 10.5"
        stroke="#B46248"
        strokeOpacity="0.45"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GestureFlourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 48C36 16 74 10 92 28C108 44 82 54 76 38C70 22 114 12 172 22"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
