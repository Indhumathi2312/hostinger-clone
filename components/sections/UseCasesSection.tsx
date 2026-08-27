"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const useCases = [
  {
    title: "Personal assistant",
    description:
      "Keep tasks, reminders, and chats organized. Your agent learns and remembers it all.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#8c85ff]">
        <path d="M19.1248 11.007L19.2273 11.0118C19.7314 11.0632 20.1248 11.4893 20.1248 12.007C20.1248 12.5246 19.7314 12.9507 19.2273 13.0021L19.1248 13.007H4.87476C4.32247 13.007 3.87476 12.5592 3.87476 12.007C3.87476 11.4547 4.32247 11.007 4.87476 11.007H19.1248Z" fill="currentColor"/>
        <path d="M19.0557 3.88489L19.1582 3.88977C19.6623 3.94116 20.0557 4.36725 20.0557 4.88489C20.0557 5.40252 19.6623 5.82862 19.1582 5.88L19.0557 5.88489L11.5801 5.88489C11.0278 5.88489 10.5801 5.43717 10.5801 4.88489C10.5801 4.3326 11.0278 3.88489 11.5801 3.88489L19.0557 3.88489Z" fill="currentColor"/>
        <path d="M19.1249 18.0583L19.2264 18.0632C19.7309 18.1142 20.1249 18.5404 20.1249 19.0583C20.1249 19.5763 19.7309 20.0025 19.2264 20.0535L19.1249 20.0583L4.84656 20.0583C4.29427 20.0583 3.84656 19.6106 3.84656 19.0583C3.84656 18.5061 4.29427 18.0583 4.84656 18.0583L19.1249 18.0583Z" fill="currentColor"/>
        <path d="M5.30913 1.7995C5.17333 1.45518 4.68604 1.45518 4.55025 1.7995L3.84101 3.59779C3.79955 3.70291 3.71634 3.78612 3.61122 3.82758L1.81292 4.53682C1.46861 4.67261 1.46861 5.15991 1.81292 5.2957L3.61122 6.00494C3.71634 6.0464 3.79955 6.12961 3.84101 6.23473L4.55025 8.03302C4.68604 8.37734 5.17333 8.37734 5.30913 8.03302L6.01836 6.23473C6.05982 6.12961 6.14304 6.0464 6.24816 6.00494L8.04645 5.2957C8.39077 5.15991 8.39077 4.67261 8.04645 4.53682L6.24816 3.82758C6.14304 3.78612 6.05982 3.70291 6.01836 3.59779L5.30913 1.7995Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Sales assistant",
    description:
      "Capture leads and qualify prospects on your own infrastructure.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#8c85ff]">
        <path d="M2.625 3.875C3.17728 3.875 3.625 4.32272 3.625 4.875V18.375C3.625 19.4796 4.52043 20.375 5.625 20.375H21.375C21.9273 20.375 22.375 20.8227 22.375 21.375C22.375 21.9273 21.9273 22.375 21.375 22.375H5.625C3.41586 22.375 1.625 20.5841 1.625 18.375V4.875C1.625 4.32272 2.07272 3.875 2.625 3.875Z" fill="currentColor"/>
        <path d="M20.75 9.16421V11.25C20.75 11.8023 21.1977 12.25 21.75 12.25C22.3023 12.25 22.75 11.8023 22.75 11.25V6.75C22.75 6.48478 22.6446 6.23043 22.4571 6.04289C22.2696 5.85536 22.0152 5.75 21.75 5.75L17.25 5.75C16.6977 5.75 16.25 6.19772 16.25 6.75C16.25 7.30228 16.6977 7.75 17.25 7.75L19.3358 7.75L15 12.0858L12.4874 9.57322C11.804 8.88981 10.696 8.8898 10.0126 9.57322L6.04289 13.5429C5.65237 13.9334 5.65237 14.5666 6.04289 14.9571C6.43342 15.3476 7.06658 15.3476 7.45711 14.9571L11.25 11.1642L13.7626 13.6768C14.446 14.3602 15.554 14.3602 16.2374 13.6768L20.75 9.16421Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Coding assistant",
    description:
      "Write and debug faster with an agent that can learn your codebase.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#8c85ff]">
        <path d="M6.99121 8.53882C7.37984 8.21336 7.95926 8.22919 8.33008 8.59058C8.72555 8.97609 8.73415 9.60917 8.34863 10.0046L6.39648 12.0066L8.34863 14.0085L8.41602 14.0857C8.73138 14.4825 8.70085 15.0612 8.33008 15.4226C7.95925 15.7839 7.37981 15.7998 6.99121 15.4744L6.91602 15.405L4.28418 12.7048C3.90564 12.3165 3.90572 11.6967 4.28418 11.3083L6.91602 8.60815L6.99121 8.53882Z" fill="currentColor"/>
        <path d="M15.502 8.59058C15.8726 8.22921 16.4522 8.21365 16.8408 8.53882L16.916 8.60815L19.5488 11.3083C19.9272 11.6967 19.9273 12.3165 19.5488 12.7048L16.916 15.405C16.5305 15.8001 15.8973 15.8078 15.502 15.4226C15.1068 15.0371 15.0991 14.4039 15.4844 14.0085L17.4355 12.0066L15.4844 10.0046L15.416 9.92749C15.101 9.5308 15.1316 8.95193 15.502 8.59058Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Researcher",
    description:
      "Summarize topics and compare options with context kept across sessions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#8c85ff]">
        <path d="M10 1.69025C9.30662 1.82396 8.63753 2.02589 8 2.28878C6.11805 3.06479 4.51104 4.37193 3.3657 6.02348C2.18934 7.71977 1.5 9.77938 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C14.2206 22.5 16.2802 21.8107 17.9765 20.6343C19.6281 19.489 20.9352 17.882 21.7112 16C21.9741 15.3625 22.176 14.6934 22.3098 14H20.2638C19.3644 17.7294 16.0055 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.99446 6.27063 4.63603 10 3.73663V1.69025Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Social media manager",
    description:
      "Go from rough notes to scheduled posts, starting with a plan your agent keeps on track.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 25 24" fill="none" className="text-[#8c85ff]">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.1336 12.168C17.5241 12.5585 17.5241 13.1917 17.1336 13.5822L12.7085 18.0071C12.2544 18.4612 11.5181 18.4612 11.064 18.0071L8.7365 15.6796C8.34597 15.2891 8.34597 14.6559 8.7365 14.2654C9.12702 13.8749 9.76019 13.8749 10.1507 14.2654L11.8863 16.001L15.7194 12.1679C16.1099 11.7774 16.743 11.7774 17.1336 12.168Z" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function UseCasesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPos = scrollRef.current.scrollLeft;
      const cardWidth = 320;
      const index = Math.round(scrollPos / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), useCases.length - 1));
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-[#0c0d0d] relative border-t border-[#2a2c35]/40 overflow-hidden">
      <div id="sub-menu-use-cases" className="h-scroll-anchor" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-xl">
            What your application can do for you
          </h2>

          {/* Carousel Left / Right Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-gray-800 bg-[#121316] hover:border-gray-600 flex items-center justify-center text-white transition-colors focus:outline-none"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-gray-800 bg-[#121316] hover:border-gray-600 flex items-center justify-center text-white transition-colors focus:outline-none"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Cards Track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {useCases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="min-w-[280px] sm:min-w-[300px] max-w-[320px] bg-[#121316] border border-[#2a2c35]/40 p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-[#673de6]/60 transition-all shrink-0 snap-start"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1c1d22] flex items-center justify-center mb-6 shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a5b0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {useCases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({ left: idx * 320, behavior: "smooth" });
                }
              }}
              className={`h-2 rounded-full transition-all ${
                activeIndex === idx ? "w-6 bg-[#673de6]" : "w-2 bg-gray-700"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
