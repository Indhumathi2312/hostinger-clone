"use client";

import React from "react";
import { motion } from "framer-motion";

const rows = [
  { feature: "Chat & research", hostinger: "Yes", chatgpt: "Yes" },
  { feature: "Works while you’re away", hostinger: "Yes", chatgpt: "No" },
  { feature: "Messaging (Telegram, WhatsApp)", hostinger: "Partially", chatgpt: "No" },
  { feature: "Persistent memory", hostinger: "Partially", chatgpt: "Partially" },
  { feature: "Local file access", hostinger: "Yes", chatgpt: "No" },
  { feature: "Web automation", hostinger: "Yes", chatgpt: "Partially" },
  { feature: "Coding & analysis", hostinger: "Yes", chatgpt: "Partially" },
  { feature: "Extensibility (skills & plugins)", hostinger: "Partially", chatgpt: "Partially" },
  { feature: "Model flexibility", hostinger: "Yes", chatgpt: "No" },
];

export default function ComparisonTableSection() {
  const renderCell = (val: string) => {
    if (val === "Yes") {
      return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 font-semibold text-white text-xs sm:text-sm">
          <span className="w-4 h-4 rounded-full bg-[#00b090] text-white flex items-center justify-center shrink-0">
            <svg className="w-2.5 h-2.5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>Yes</span>
        </div>
      );
    }
    if (val === "Partially") {
      return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 font-semibold text-white text-xs sm:text-sm">
          <span className="w-4 h-4 rounded-full bg-[#eab308] text-black font-extrabold text-[10px] flex items-center justify-center shrink-0">
            !
          </span>
          <span className="border-b border-dashed border-gray-400/50 pb-0.5">Partially</span>
        </div>
      );
    }
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 font-semibold text-white text-xs sm:text-sm">
        <span className="w-4 h-4 rounded-full bg-[#ff4d4d] text-white flex items-center justify-center shrink-0">
          <svg className="w-2.5 h-2.5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
        <span>No</span>
      </div>
    );
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-[#0c0d0d] relative border-t border-[#2a2c35]/40 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How Hostinger AI automation apps <br className="hidden sm:block" />
            compare to ChatGPT
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a1a5b0] leading-relaxed max-w-2xl mx-auto">
            While ChatGPT chats with you, your AI automation apps get the job done.
          </p>
        </div>

        {/* Highlighted Responsive Table Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto my-6"
        >
          <div className="grid grid-cols-12 items-stretch text-left">
            {/* Left Column - Feature List */}
            <div className="col-span-5 sm:col-span-5 space-y-3 sm:space-y-4 py-8 pr-2 sm:pr-4">
              <div className="h-10 sm:h-12 flex items-center text-xs sm:text-sm font-bold text-white"></div>
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="h-10 sm:h-12 flex items-center text-xs sm:text-sm font-bold text-white leading-tight border-b border-[#2a2c35]/30 last:border-0"
                >
                  {row.feature}
                </div>
              ))}
            </div>

            {/* Center Column - Hostinger (Highlighted Glowing Purple Card) */}
            <div className="col-span-4 sm:col-span-4 bg-[#131224] border border-[#673de6] rounded-3xl p-2.5 sm:p-5 shadow-2xl shadow-purple-900/30 flex flex-col justify-between z-10 -my-4">
              <div className="space-y-3 sm:space-y-4 text-center">
                <div className="h-10 sm:h-12 flex items-center justify-center">
                  <img
                    src="/images/public.png"
                    alt="Hostinger"
                    className="h-5 sm:h-7 w-auto object-contain"
                  />
                </div>
                {rows.map((row, i) => (
                  <div
                    key={i}
                    className="h-10 sm:h-12 flex items-center justify-center border-b border-[#2a2c35]/40 last:border-0"
                  >
                    {renderCell(row.hostinger)}
                  </div>
                ))}
              </div>

              {/* Get Started CTA Button inside Hostinger Card */}
              <a
                href="#pricing"
                className="w-full py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-bold text-white bg-[#673de6] hover:bg-[#5025d1] rounded-xl shadow-lg transition-all mt-4 block"
              >
                Get started
              </a>
            </div>

            {/* Right Column - ChatGPT */}
            <div className="col-span-3 sm:col-span-3 space-y-3 sm:space-y-4 py-8 text-center pl-2 sm:pl-4">
              <div className="h-10 sm:h-12 flex items-center justify-center text-xs sm:text-base font-extrabold text-white">
                ChatGPT
              </div>
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="h-10 sm:h-12 flex items-center justify-center border-b border-[#2a2c35]/30 last:border-0"
                >
                  {renderCell(row.chatgpt)}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
