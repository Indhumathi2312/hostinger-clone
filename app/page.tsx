import React from "react";
import HeaderBanner from "@/components/layout/HeaderBanner";
import Navbar from "@/components/layout/Navbar";
import SubMenuBadges from "@/components/layout/SubMenuBadges";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import PricingSection from "@/components/sections/PricingSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ComparisonTableSection from "@/components/sections/ComparisonTableSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0d0d] text-white flex flex-col font-sans">
      <HeaderBanner />
      <Navbar />
      <HeroSection />
      <SubMenuBadges />
      <WhatIsSection />
      <ApplicationsSection />
      <PricingSection />
      <WhyChooseSection />
      <ComparisonTableSection />
      <UseCasesSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
