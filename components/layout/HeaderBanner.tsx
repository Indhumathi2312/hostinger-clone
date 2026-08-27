"use client";

import React from "react";

export default function HeaderBanner() {
  return (
    <div className="w-full bg-[#673de6] text-white text-xs sm:text-sm py-2 px-4 flex items-center justify-center gap-2 z-[9999] relative font-medium shadow-md">
      <div className="flex items-center gap-2 max-w-7xl mx-auto text-center">
        <span>⚡ <strong>Managed AI Automations:</strong> Switch tools anytime under one plan.</span>
        <a
          href="#pricing"
          className="underline hover:opacity-90 font-semibold transition-opacity whitespace-nowrap hidden sm:inline-block ml-1"
        >
          Get started &rarr;
        </a>
      </div>
    </div>
  );
}
