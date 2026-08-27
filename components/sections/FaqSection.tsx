"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are AI automation apps?",
    answer:
      "AI automation apps are ready-to-use smart software solutions that help you automate tasks, organize information, and interact through chat and email. You don’t need to handle setup, databases, or infrastructure—everything is managed for you.",
  },
  {
    question: "Do I need coding experience to use AI automation apps?",
    answer:
      "No, you don't need any coding or technical experience. You talk to your application in plain language through messaging apps or email, and it handles the work for you.",
  },
  {
    question: "Which AI models can I use?",
    answer:
      "You can connect your own ChatGPT/OpenAI API keys or use our pre-configured AI models directly out of the box with your included AI credits.",
  },
  {
    question: "What can I do with AI automation apps?",
    answer:
      "You can automate customer support, capture leads, summarize documents, manage reminders, draft emails, perform web lookups, and schedule tasks automatically.",
  },
  {
    question: "Can I switch between OpenClaw and Hermes Agent after launching?",
    answer:
      "Yes, your subscription gives you access to the ecosystem of AI automation apps. If your needs change, you can switch to a different available app under the same plan.",
  },
  {
    question: "Will I lose my data or configurations if I switch apps?",
    answer:
      "Because each app has its own architecture, your configurations, conversation history, and custom setups don’t transfer automatically when you switch. You’ll start fresh on the new app. We recommend exporting or noting down any important settings before switching.",
  },
  {
    question: "How much does it cost?",
    answer:
      "AI automation apps run on one plan. You get your app plus AI credits in a single subscription, with no separate tool fees or per-agent charges. You can switch between apps under the same plan as your needs change, so you’re never locked into one tool.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-[#0c0d0d] relative border-t border-[#2a2c35]/40">
      <div id="sub-menu-faq" className="h-scroll-anchor" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Hostinger managed ecosystem <br className="hidden sm:block" />
            FAQs
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a1a5b0] leading-relaxed max-w-2xl mx-auto">
            Find answers to the most frequently asked questions about our managed AI automation apps.
          </p>
        </div>

        {/* Divider-separated FAQ List */}
        <div className="border-t border-[#2a2c35]/50 divide-y divide-[#2a2c35]/50">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-2">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 text-left font-semibold text-base sm:text-lg text-white flex items-center justify-between gap-4 focus:outline-none hover:text-[#8c85ff] transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <span className="text-xl sm:text-2xl font-light text-gray-300 shrink-0 ml-2">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 text-[#a1a5b0] text-sm sm:text-base leading-relaxed pr-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
