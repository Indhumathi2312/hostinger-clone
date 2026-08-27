"use client";

import React from "react";
import { motion } from "framer-motion";

const whyChooseItems = [
  {
    title: "Affordable",
    description:
      "Get your managed application and AI credits in one subscription, without paying for separate tools or extra agent fees.",
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
          d="M20.5002 15.7533V17.3099C20.5002 18.9355 19.1824 20.2533 17.5567 20.2533H4.44359C2.81796 20.2533 1.50012 18.9355 1.50012 17.3099V6.69676C1.50012 5.07113 2.81795 3.7533 4.44358 3.7533H17.5567C19.1824 3.7533 20.5002 5.07113 20.5002 6.69676V8.2533H21.0282C21.841 8.2533 22.4999 8.91221 22.4999 9.72503V14.2816C22.4999 15.0944 21.841 15.7533 21.0282 15.7533H20.5002ZM3.50012 6.69676C3.50012 6.1757 3.92252 5.7533 4.44358 5.7533H17.5567C18.0778 5.7533 18.5002 6.1757 18.5002 6.69676V8.2533H16.9433C15.3177 8.2533 13.9999 9.57113 13.9999 11.1968V12.8098C13.9999 14.4355 15.3177 15.7533 16.9433 15.7533H18.5002V17.3099C18.5002 17.8309 18.0778 18.2533 17.5567 18.2533H4.44359C3.92252 18.2533 3.50012 17.8309 3.50012 17.3099V6.69676ZM20.4999 10.2533H16.9433C16.4223 10.2533 15.9999 10.6757 15.9999 11.1968V12.8098C15.9999 13.3309 16.4223 13.7533 16.9433 13.7533H20.4999V10.2533Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Easy to set up",
    description:
      "Launch in about 60 seconds. We handle setup, updates, backups, and security, so you do not touch the technical side.",
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
          d="M1.49923 23.5018C1.23923 23.5018 0.979231 23.4018 0.789231 23.2118C0.569231 22.9918 0.459231 22.6818 0.509231 22.3718C0.569231 21.9218 1.14923 17.9118 3.00923 16.3518C3.63923 15.8218 4.43923 15.5518 5.26923 15.5618C6.09923 15.5918 6.87923 15.9118 7.47923 16.4918C8.69923 17.6918 8.76923 19.6718 7.64923 20.9918C6.08923 22.8518 2.08923 23.4318 1.63923 23.4918C1.59923 23.4918 1.54923 23.4918 1.50923 23.4918L1.49923 23.5018ZM5.16923 17.5618C4.84923 17.5618 4.53923 17.6718 4.29923 17.8818C3.60923 18.4618 3.07923 19.9318 2.75923 21.2418C4.06923 20.9218 5.53923 20.3918 6.11923 19.7018C6.55923 19.1718 6.54923 18.3818 6.08923 17.9218C5.85923 17.7018 5.54923 17.5718 5.20923 17.5618C5.19923 17.5618 5.17923 17.5618 5.16923 17.5618ZM11.7292 21.8818C11.4992 21.8818 11.2692 21.8018 11.0892 21.6518C10.8592 21.4618 10.7292 21.1818 10.7292 20.8818V15.9118L8.08923 13.2718H3.11923C2.81923 13.2718 2.53923 13.1418 2.34923 12.9118C2.15923 12.6818 2.07923 12.3818 2.12923 12.0918C2.19923 11.7118 2.84923 8.37183 4.70923 7.13183C6.33923 6.05183 8.96923 6.50183 10.2492 6.81183C11.5492 4.97183 13.2592 3.43183 15.2392 2.34183C17.4592 1.12183 19.9892 0.521831 22.4992 0.501831C23.0492 0.501831 23.4892 0.951831 23.4892 1.50183C23.4892 5.04183 22.3792 9.98183 17.1792 13.7618C17.4892 15.0418 17.9392 17.6618 16.8592 19.2818C15.6192 21.1418 12.2792 21.7918 11.8992 21.8618C11.8392 21.8718 11.7792 21.8818 11.7192 21.8818H11.7292ZM12.7292 16.1818V19.6018C13.7192 19.2918 14.7992 18.7918 15.2092 18.1818C15.6792 17.4818 15.6092 16.0918 15.3892 14.9018C14.5292 15.3818 13.6392 15.8118 12.7292 16.1818ZM9.66923 12.0318L11.9692 14.3318C13.1892 13.8318 14.3692 13.2218 15.4892 12.5118C19.9392 9.52183 21.2392 5.61183 21.4592 2.54183C19.6192 2.68183 17.8292 3.21183 16.2092 4.10183C14.2892 5.15183 12.6592 6.69183 11.4992 8.55183C10.7892 9.66183 10.1792 10.8218 9.66923 12.0318ZM4.39923 11.2718H7.81923C8.19923 10.3618 8.63923 9.47183 9.11923 8.61183C7.92923 8.39183 6.51923 8.32183 5.81923 8.79183C5.19923 9.20183 4.70923 10.3118 4.39923 11.2718Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Freedom to change",
    description:
      "Start with the application you need today, then move to another under the same plan when your needs change.",
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

export default function WhyChooseSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#0c0d0d] relative border-t border-[#2a2c35]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why choose Hostinger AI <br className="hidden sm:block" />
            automation apps
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a1a5b0] leading-relaxed max-w-2xl mx-auto">
            Run an application without technical setup, separate subscriptions, or getting stuck with one tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {whyChooseItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1a1c23] flex items-center justify-center mb-5 shrink-0">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[#a1a5b0] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
