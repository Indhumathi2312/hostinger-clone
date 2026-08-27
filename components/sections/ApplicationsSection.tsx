"use client";

import React from "react";
import { motion } from "framer-motion";

const apps = [
  {
    title: "OpenClaw",
    description: "A fast, chat-first AI assistant for everyday automation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9999 3.01813C6.46156 3.01813 3.69238 7.63342 3.69238 11.3257C3.69238 15.0179 6.46156 18.7101 9.23074 19.6332V21.4793H11.0769V19.6332C11.0769 19.6332 11.9999 20.0024 12.923 19.6332V21.4793H14.7691V19.6332C17.5383 18.7101 20.3074 15.0179 20.3074 11.3257C20.3074 7.63342 17.5383 3.01813 11.9999 3.01813Z" fill="url(#claw1)"/>
        <path d="M4.61557 9.47953C1.84639 8.55647 0.923332 10.4026 1.84639 12.2487C2.76945 14.0948 4.61557 13.1718 5.53863 11.3256C6.09246 10.0334 5.53863 9.47953 4.61557 9.47953Z" fill="url(#claw2)"/>
        <path d="M19.3845 9.47953C22.1537 8.55647 23.0767 10.4026 22.1537 12.2487C21.2306 14.0948 19.3845 13.1718 18.4614 11.3256C17.9076 10.0334 18.4614 9.47953 19.3845 9.47953Z" fill="url(#claw3)"/>
        <path d="M9.23085 3.94109C8.0001 2.71034 7.07704 2.27958 6.46167 2.6488" stroke="#FF4D4D" strokeWidth="0.55" strokeLinecap="round"/>
        <path d="M14.7688 3.94109C15.9995 2.71034 16.9226 2.27958 17.538 2.6488" stroke="#FF4D4D" strokeWidth="0.55" strokeLinecap="round"/>
        <path d="M9.23047 8.74104C9.84222 8.74104 10.3381 8.24512 10.3381 7.63337C10.3381 7.02162 9.84222 6.5257 9.23047 6.5257C8.61872 6.5257 8.1228 7.02162 8.1228 7.63337C8.1228 8.24512 8.61872 8.74104 9.23047 8.74104Z" fill="#050810"/>
        <path d="M14.769 8.74104C15.3808 8.74104 15.8767 8.24512 15.8767 7.63337C15.8767 7.02162 15.3808 6.5257 14.769 6.5257C14.1573 6.5257 13.6614 7.02162 13.6614 7.63337C13.6614 8.24512 14.1573 8.74104 14.769 8.74104Z" fill="#050810"/>
        <path d="M9.41526 7.91018C9.67016 7.91018 9.87679 7.70355 9.87679 7.44865C9.87679 7.19376 9.67016 6.98712 9.41526 6.98712C9.16037 6.98712 8.95374 7.19376 8.95374 7.44865C8.95374 7.70355 9.16037 7.91018 9.41526 7.91018Z" fill="#00E5CC"/>
        <path d="M14.9535 7.91018C15.2084 7.91018 15.415 7.70355 15.415 7.44865C15.415 7.19376 15.2084 6.98712 14.9535 6.98712C14.6986 6.98712 14.4919 7.19376 14.4919 7.44865C14.4919 7.70355 14.6986 7.91018 14.9535 7.91018Z" fill="#00E5CC"/>
        <defs>
          <linearGradient id="claw1" x1="3.69238" y1="3.01813" x2="22.0516" y2="19.5414" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4D4D"/>
            <stop offset="1" stopColor="#991B1B"/>
          </linearGradient>
          <linearGradient id="claw2" x1="1.50024" y1="9.23401" x2="5.51458" y2="13.4863" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4D4D"/>
            <stop offset="1" stopColor="#991B1B"/>
          </linearGradient>
          <linearGradient id="claw3" x1="18.2405" y1="9.23401" x2="22.2548" y2="13.4863" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4D4D"/>
            <stop offset="1" stopColor="#991B1B"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    features: [
      "Handles quick tasks on the go",
      "Works across chat and email channels",
      "Includes a visual agent and skills builder",
      "Great for bots, alerts, reports, and lookups",
    ],
    cta: "Buy Now",
  },
  {
    title: "Hermes Agent",
    description: "A self-improving AI agent for deeper, connected work.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-200">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6ZM12 20C9.33 20 7 18.33 6 16C6.03 14 10 12.9 12 12.9C13.99 12.9 17.97 14 18 16C17 18.33 14.67 20 12 20Z" fill="currentColor" />
      </svg>
    ),
    features: [
      "Builds memory and improves over time",
      "Handles more advanced, multi-step tasks",
      "Connects to your documents and tools",
      "Great for research, coding, troubleshooting, and planning",
    ],
    cta: "Buy Now",
  },
  {
    title: "Managed n8n",
    description:
      "Build AI automations with a visual workflow editor, without managing servers.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-400">
        <path fillRule="evenodd" clipRule="evenodd" d="M18 10a2 2 0 100-4 2 2 0 000 4zM6 18a2 2 0 100-4 2 2 0 000 4zM18 18a2 2 0 100-4 2 2 0 000 4zM8 16h8M8 8h8M16 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    features: [
      "Visual workflow editor",
      "1,000+ app integrations",
      "Always-on scheduled runs",
      "Managed updates and backups",
    ],
    cta: "Buy Now",
  },
];

export default function ApplicationsSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#0c0d0d] relative border-t border-[#2a2c35]/40">
      <div id="sub-menu-applications" className="h-scroll-anchor" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pick the application that fits <br className="hidden sm:block" />
            your work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {apps.map((app, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#121316] border border-[#2a2c35]/40 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-[#673de6]/60 transition-all group"
            >
              <div>
                {/* Icon Badge */}
                <div className="w-10 h-10 rounded-xl bg-[#1c1d22] border border-[#2a2c35]/30 flex items-center justify-center mb-6 shrink-0">
                  {app.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  {app.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a5b0] mb-6 leading-relaxed">
                  {app.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {app.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-[#d1d5db]"
                    >
                      <svg
                        className="w-4 h-4 text-[#00b090] shrink-0 mt-0.5"
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
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buy Now CTA */}
              <a
                href="#pricing"
                className="py-3 px-8 text-center text-xs sm:text-sm font-bold text-white bg-[#673de6] hover:bg-[#5025d1] rounded-xl shadow-md transition-all self-start inline-block"
              >
                {app.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
