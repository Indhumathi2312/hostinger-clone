"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section
      id="promo"
      className="relative w-full pt-12 pb-16 sm:pt-20 sm:pb-24 bg-[#0c0d0d] overflow-hidden"
    >
      {/* Background Radial Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-radial from-[#673de6]/25 via-[#673de6]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl"
        >
          Launch an AI <br className="hidden sm:block" />
          automation app. <br className="hidden sm:block" />
          Switch anytime.
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-sm sm:text-lg lg:text-xl text-[#a1a5b0] max-w-2xl leading-relaxed"
        >
          Choose the agent you need today, launch it without setup, and switch under the same plan whenever your needs change.
        </motion.p>

        {/* CTA Button & Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-3 w-full sm:w-auto"
        >
          <a
            href="#pricing"
            className="w-full sm:w-auto px-10 py-4 text-base sm:text-lg font-bold text-white bg-[#673de6] hover:bg-[#5025d1] rounded-2xl shadow-xl shadow-purple-900/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            Get started
          </a>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium mt-1">
            <svg
              className="w-4 h-4 text-white fill-current shrink-0"
              viewBox="0 0 16 16"
            >
              <path d="M10.8378 6.51759C11.1337 6.22083 11.1337 5.73968 10.8378 5.44291C10.5419 5.14615 10.0621 5.14615 9.76614 5.44291L7.47074 7.74482L6.45634 6.72748C6.16042 6.4307 5.68063 6.43069 5.3847 6.72744C5.08876 7.02419 5.08874 7.50535 5.38466 7.80212L6.93209 9.35404L6.93489 9.35687C7.23082 9.65364 7.71061 9.65364 8.00653 9.35687L10.8378 6.51759Z" fill="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M1.00313 4.4006C0.957266 3.57273 1.41895 2.80035 2.16866 2.45073L7.01856 0.188965C7.54876 -0.0582931 8.15976 -0.0631123 8.69377 0.175751L13.8024 2.46086C14.5681 2.80335 15.0434 3.58445 14.9969 4.42395L14.991 4.52938C14.7631 8.64456 12.9301 12.7809 9.22471 14.5639C8.6685 14.8316 8.18618 15 7.85317 15C7.51519 15 7.03626 14.8265 6.48985 14.5519C2.94198 12.7689 1.24391 8.74698 1.02378 4.77339L1.00313 4.4006ZM13.4837 4.33964L13.4778 4.44508C13.267 8.2506 11.5897 11.7402 8.56908 13.1937C8.32818 13.3096 8.13375 13.389 7.98661 13.437C7.92403 13.4574 7.88085 13.4685 7.85483 13.4744C7.83022 13.4685 7.7902 13.4578 7.73294 13.4384C7.5912 13.3906 7.40293 13.3108 7.16886 13.1932C4.29874 11.7507 2.74115 8.37464 2.53698 4.68909L2.51633 4.3163C2.50486 4.10933 2.62028 3.91624 2.80771 3.82883L7.65761 1.56707C7.79016 1.50525 7.94291 1.50405 8.07642 1.56377L13.1851 3.84887C13.3765 3.9345 13.4953 4.12977 13.4837 4.33964Z" fill="currentColor" />
            </svg>
            <span>30-day money-back guarantee</span>
          </div>
        </motion.div>

        {/* Trustpilot Micro Rating Combo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gray-300"
        >
          <span>Excellent</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="p-1 bg-[#00b090] text-white text-[10px] flex items-center justify-center rounded-sm">
                ★
              </span>
            ))}
          </div>
          <span className="text-[#a1a5b0]">71,674 reviews on</span>
          <span className="text-[#00b090] font-bold flex items-center gap-1">
            ★ Trustpilot
          </span>
        </motion.div>

        {/* Responsive Video Container with Gradient Border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 w-full max-w-4xl p-2.5 sm:p-4 rounded-3xl bg-gradient-to-b from-[#673de6]/40 via-[#2b186b]/20 to-[#121316] border border-[#673de6]/40 shadow-2xl relative"
        >
          <div className="w-full aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden relative bg-black shadow-inner">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-2xl block"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://customer-l1i0l3fn06n7hp6n.cloudflarestream.com/916037b04194dc495f6679e0e39251b2/downloads/default.mp4"
                type="video/mp4"
              />
              Your browser does not support embedded videos.
            </video>

            {/* Play / Pause Toggle Button on Video */}
            <button
              onClick={togglePlay}
              className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all shadow-lg"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
