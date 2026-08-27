"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full py-16 sm:py-24 bg-[#0c0d0d] relative border-t border-[#2a2c35]/40 overflow-hidden"
    >
      <div id="sub-menu-pricing" className="h-scroll-anchor" />

      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-purple-900/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            One plan, app of your choice.
          </h2>
        </div>

        {/* Pricing Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md sm:max-w-lg mx-auto bg-[#121316] border border-[#2a2c35]/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-left"
        >
          {/* Top Badge */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              AI automation apps
            </h3>
            <span className="px-3 py-1 text-xs font-bold text-[#a594ff] bg-[#252048] rounded-full">
              73% off
            </span>
          </div>

          {/* Pricing Display */}
          <div className="mb-4">
            <span className="text-xs sm:text-sm text-gray-400 line-through font-semibold block mb-0.5">
              ₹1,999
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                ₹549
              </span>
              <span className="text-sm font-semibold text-gray-300">/mo</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="w-full mt-4 mb-2 py-3.5 text-center text-sm sm:text-base font-bold text-black bg-white hover:bg-gray-100 rounded-xl transition-all shadow-md block"
          >
            Get Started
          </a>

          <p className="text-xs text-[#a1a5b0] text-center mb-6">
            Renews at ₹999/mo for 2 years. Cancel anytime.
          </p>

          {/* Managed Banner */}
          <div className="bg-[#18191e] border border-[#2a2c35]/30 p-5 rounded-2xl mb-8">
            <p className="text-sm font-bold text-white mb-1.5">Managed for you</p>
            <p className="text-xs text-[#a1a5b0] leading-relaxed">
              Launch your chosen application with no setup, maintenance, or infrastructure management.
            </p>
          </div>

          {/* Features List */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white mb-4">
              Included in your plan
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-200">
              {[
                "Ready out of the box",
                "No maintenance needed",
                "Visual interface included",
                "CLI access included",
                "Telegram pairing built in",
                "AI credits included",
                "Use your ChatGPT",
                "Web search included",
                "Agentic email pre-configured",
                "Security managed for you",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-[#00b090] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="border-b border-dashed border-gray-600/40 pb-0.5">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <p className="text-center text-xs text-[#727586] max-w-xl mx-auto mt-8 leading-relaxed">
          All plans are paid upfront. The monthly rate reflects the total plan price divided by the number of months in your plan.
        </p>
      </div>
    </section>
  );
}
