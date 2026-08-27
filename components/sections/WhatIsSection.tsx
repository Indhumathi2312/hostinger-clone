"use client";

import React from "react";
import { motion } from "framer-motion";

const featureCards = [
  {
    title: "You just talk to it",
    description:
      "Message it like a person through Telegram or WhatsApp. It understands what you mean.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#8c85ff]"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 18H15.75L11.1221 22.1137C10.2998 22.8446 9 22.2609 9 21.1608V18H6C3.51472 18 1.5 15.9853 1.5 13.5V6C1.5 3.51472 3.51472 1.5 6 1.5H18C20.4853 1.5 22.5 3.51472 22.5 6V13.5C22.5 15.9853 20.4853 18 18 18ZM11 16H6C4.61929 16 3.5 14.8807 3.5 13.5V6C3.5 4.61929 4.61929 3.5 6 3.5H18C19.3807 3.5 20.5 4.61929 20.5 6V13.5C20.5 14.8807 19.3807 16 18 16H14.9896L11 19.5463V16Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "It does the work",
    description:
      "Sorts your inbox, sets reminders, drafts replies, and looks things up on the web for you.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#8c85ff]"
      >
        <path
          d="M16.3383 10.67C16.7288 10.2795 16.7288 9.6463 16.3383 9.25578C15.9478 8.86525 15.3146 8.86525 14.9241 9.25577L11.0212 13.1586L9.35341 11.4908C8.96289 11.1003 8.32972 11.1003 7.9392 11.4908C7.54867 11.8813 7.54867 12.5145 7.93919 12.905L10.0825 15.0483C10.6009 15.5667 11.4415 15.5667 11.9599 15.0483L16.3383 10.67Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1.50029C6.20116 1.50029 1.50031 6.20117 1.50031 12C1.50031 17.7988 6.20116 22.4997 12 22.4997C17.7988 22.4997 22.4996 17.7988 22.4996 12C22.4996 6.20117 17.7988 1.50029 12 1.50029ZM3.50031 12C3.50031 7.30573 7.30574 3.50029 12 3.50029C16.6942 3.50029 20.4996 7.30573 20.4996 12C20.4996 16.6942 16.6942 20.4997 12 20.4997C7.30574 20.4997 3.50031 16.6942 3.50031 12Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "It learns your way",
    description:
      "Remembers your preferences and gets more useful the more you work with it.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#8c85ff]"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.1367 18.7897C15.1367 16.7686 16.1959 14.9488 17.2379 13.1585C17.5378 12.6433 17.8362 12.1306 18.1075 11.6163C18.6141 10.6561 18.9009 9.56196 18.9009 8.40087C18.9009 4.58962 15.8112 1.5 12 1.5C8.18874 1.5 5.09912 4.58962 5.09912 8.40087C5.09912 9.56196 5.38587 10.6561 5.89243 11.6163C6.16377 12.1306 6.46218 12.6433 6.76201 13.1585C7.80404 14.9488 8.86323 16.7686 8.86323 18.7897C8.86323 18.9422 8.98687 19.0658 9.13939 19.0658H14.8606C15.0131 19.0658 15.1367 18.9422 15.1367 18.7897ZM16.9009 8.40087C16.9009 9.22898 16.6971 10.0036 16.3386 10.6831C16.088 11.1582 15.8113 11.6336 15.5083 12.1544L15.4019 12.3372C15.0667 12.9138 14.7047 13.5429 14.3784 14.1949C13.9508 15.0488 13.5484 16.0096 13.3232 17.0658H10.6768C10.4515 16.0096 10.0491 15.0488 9.62162 14.1949C9.29523 13.5429 8.93323 12.9138 8.59805 12.3372L8.49171 12.1544C8.18865 11.6336 7.91201 11.1582 7.66136 10.6831C7.3029 10.0036 7.09912 9.22898 7.09912 8.40087C7.09912 5.69419 9.29331 3.5 12 3.5C14.7067 3.5 16.9009 5.69419 16.9009 8.40087Z"
          fill="currentColor"
        />
        <path
          d="M15.1793 19.9433H8.82069C8.82069 21.3553 9.96538 22.5 11.3774 22.5H12.6226C14.0346 22.5 15.1793 21.3553 15.1793 19.9433Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function WhatIsSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#0c0d0d] relative">
      <div id="sub-menu-how-it-works" className="h-scroll-anchor" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            What is an AI automation <br className="hidden sm:block" />
            app?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a1a5b0] leading-relaxed max-w-2xl mx-auto">
            It&apos;s a smart assistant that lives in your chat apps and inbox. You
            talk to it in plain language, and it takes care of the busywork. No
            technical setup, no commands to learn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {featureCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1a1c23] flex items-center justify-center mb-5 shrink-0">
                {card.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                {card.title}
              </h3>
              <p className="text-[#a1a5b0] text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
