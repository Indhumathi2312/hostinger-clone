"use client";

import React, { useState } from "react";

const tabs = [
  { id: "sub-menu-how-it-works", label: "How it works" },
  { id: "sub-menu-applications", label: "Applications" },
  { id: "sub-menu-pricing", label: "Pricing" },
  { id: "sub-menu-use-cases", label: "Use cases" },
  { id: "sub-menu-faq", label: "FAQ" },
];

export default function SubMenuBadges() {
  const [activeTab, setActiveTab] = useState("sub-menu-how-it-works");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-16 z-40 w-full py-4 bg-[#0c0d0d]/90 backdrop-blur-md flex justify-center border-b border-[#2a2c35]/50">
      <div className="bg-[#1a1c23] border border-[#2a2c35] rounded-full p-1 flex items-center gap-1 overflow-x-auto max-w-full no-scrollbar shadow-lg">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "bg-white text-[#0c0d0d] shadow-sm"
                  : "text-[#a1a5b0] hover:text-white hover:bg-[#292c35]/50"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
