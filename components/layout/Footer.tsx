"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const footerSections = [
  {
    title: "HOSTING",
    links: [
      "Web hosting",
      "Hosting for WordPress",
      "VPS hosting",
      "Self-hosted n8n",
      "Business email",
      "Cloud hosting",
      "Hosting for WooCommerce",
      "Hosting for agencies",
      "Minecraft hosting",
      "Hermes Agent VPS",
      "OpenClaw",
      "Paperclip VPS",
      "Google Workspace",
    ],
  },
  {
    title: "DOMAIN",
    links: [
      "Domains",
      "Buy a domain",
      "Cheap domains",
      "Free Domain Name",
      "WHOIS Lookup",
      "Free SSL certificate",
      "Domain transfer",
      "Domain Extensions",
      "Personal domain name",
      "Premium domains",
    ],
  },
  {
    title: "TOOLS",
    links: [
      "AI Builder",
      "Website Builder",
      "AI Website Builder",
      "Ecommerce Website Builder",
      "Templates",
      "Domain Name Generator",
      "Print on Demand",
      "Link in bio",
      "Business Name Generator",
      "AI Newsletter Generator",
      "AI Logo Generator",
      "Migrate to Hostinger",
      "Hostinger API",
    ],
  },
  {
    title: "INFORMATION",
    links: [
      "Pricing",
      "Hostinger Reviews",
      "Affiliate program",
      "Educational partnership",
      "Referral program",
      "Agency directory",
      "Roadmap",
      "System status",
      "Trust center",
      "Sitemap",
      "EntityMap",
    ],
  },
  {
    title: "COMPANY",
    links: [
      "About Hostinger",
      "Our technology",
      "Blog",
      "Student discount",
    ],
  },
  {
    title: "SUPPORT",
    links: [
      "Tutorials",
      "Knowledge Base",
      "Hostinger Academy",
      "Contact us",
      "Report Online Abuse",
    ],
  },
];

const socialIcons = [
  {
    name: "LinkedIn",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5V16.5C1.5 19.8137 4.18629 22.5 7.5 22.5H16.5C19.8137 22.5 22.5 19.8137 22.5 16.5V7.5C22.5 4.18629 19.8137 1.5 16.5 1.5H7.5ZM7.04294 8.60884C7.75777 8.60884 8.33693 8.02498 8.33693 7.30442C8.33693 6.58438 7.75777 6 7.04294 6C6.32812 6 5.74896 6.58438 5.74896 7.30442C5.74896 8.02498 6.32812 8.60884 7.04294 8.60884ZM5.73853 18.0006V9.65237H8.34736V18.0006H5.73853ZM9.91995 9.65237H12.5121V10.7768C13.6057 8.75285 18.2609 8.60309 18.2609 12.7146V18.0006H15.6584V13.6183C15.6584 10.9824 12.5126 11.1817 12.5126 13.6183V18.0006H9.91995V9.65237Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.9996 12.0336C21.9996 6.49047 17.5225 1.99683 11.9998 1.99683C6.47711 1.99683 2 6.49047 2 12.0336C2 16.7404 5.22874 20.69 9.58425 21.7748V15.1008H7.52229V12.0336H9.58425V10.7119C9.58425 7.29582 11.1246 5.71242 14.4662 5.71242C15.0997 5.71242 16.1929 5.83728 16.6401 5.96174V8.74191C16.4041 8.71702 15.9941 8.70458 15.4849 8.70458C13.8454 8.70458 13.2118 9.32806 13.2118 10.9488V12.0336H16.4781L15.9169 15.1008H13.2118V21.9968C18.1633 21.3966 22 17.1651 22 12.0336H21.9996Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.0302 0.0839254C5.7534 0.144166 4.88147 0.347926 4.11923 0.647447C3.33035 0.954889 2.6617 1.36745 1.99642 2.03513C1.33114 2.70281 0.921459 3.37194 0.616178 4.16202C0.320737 4.92594 0.120576 5.79859 0.064176 7.07611C0.00777578 8.35363 -0.00470426 8.76428 0.00153576 12.023C0.00777578 15.2817 0.0221758 15.6902 0.084096 16.9704C0.145056 18.2469 0.348097 19.1186 0.647618 19.8811C0.955539 20.67 1.36762 21.3384 2.03554 22.0039C2.70346 22.6694 3.37211 23.0782 4.16411 23.3839C4.92731 23.6789 5.8002 23.88 7.07748 23.9359C8.35476 23.9918 8.76589 24.0048 12.0237 23.9986C15.2814 23.9923 15.6916 23.9779 16.9715 23.9172C18.2514 23.8565 19.1186 23.652 19.8813 23.3539C20.6702 23.0453 21.339 22.6339 22.0041 21.9658C22.6691 21.2976 23.0786 20.628 23.3836 19.8374C23.6793 19.0742 23.8802 18.2013 23.9356 16.925C23.9915 15.6441 24.0047 15.2352 23.9985 11.9769C23.9923 8.71868 23.9776 8.31019 23.9169 7.03051C23.8562 5.75083 23.6529 4.88178 23.3536 4.11882C23.0452 3.32994 22.6336 2.66201 21.9659 1.99601C21.2982 1.33001 20.6282 0.920808 19.8378 0.616487C19.0742 0.321046 18.2018 0.119686 16.9245 0.0644854C15.6472 0.00928517 15.2361 -0.00487488 11.9771 0.00136514C8.71813 0.00760516 8.31013 0.0215252 7.0302 0.0839254ZM7.17036 21.7771C6.00036 21.7262 5.36507 21.5318 4.94171 21.3691C4.38107 21.1531 3.98171 20.892 3.55979 20.4742C3.13787 20.0563 2.87867 19.6555 2.65978 19.0961C2.49538 18.6727 2.29738 18.0381 2.24266 16.8681C2.18314 15.6036 2.17066 15.2239 2.1637 12.0201C2.15674 8.81636 2.16898 8.43715 2.22442 7.17211C2.27434 6.00307 2.46994 5.36706 2.63242 4.94394C2.84843 4.38258 3.10859 3.98394 3.52739 3.56226C3.94619 3.14058 4.34579 2.8809 4.90571 2.66201C5.32859 2.49689 5.96316 2.30057 7.13268 2.24489C8.3982 2.18489 8.77741 2.17289 11.9807 2.16593C15.184 2.15897 15.5641 2.17097 16.8302 2.22665C17.9992 2.27753 18.6354 2.47121 19.0581 2.63465C19.619 2.85066 20.0181 3.1101 20.4398 3.52962C20.8614 3.94914 21.1214 4.3473 21.3402 4.90842C21.5056 5.3301 21.7019 5.96443 21.7571 7.13467C21.8174 8.4002 21.831 8.77964 21.8368 11.9827C21.8426 15.1857 21.8313 15.5661 21.7759 16.8307C21.7247 18.0007 21.5308 18.6362 21.3678 19.0601C21.1518 19.6205 20.8914 20.0201 20.4724 20.4415C20.0534 20.863 19.6542 21.1226 19.0941 21.3415C18.6717 21.5064 18.0364 21.7032 16.8678 21.7589C15.6023 21.8184 15.2231 21.8309 12.0186 21.8378C8.81413 21.8448 8.43612 21.8318 7.1706 21.7771M16.953 5.58642C16.9535 5.87125 17.0384 6.14954 17.1971 6.38609C17.3557 6.62265 17.581 6.80684 17.8443 6.91538C18.1076 7.02391 18.3972 7.05192 18.6765 6.99585C18.9558 6.93978 19.2121 6.80216 19.4131 6.60039C19.6142 6.39862 19.7509 6.14176 19.8059 5.8623C19.8609 5.58285 19.8319 5.29334 19.7224 5.03041C19.6129 4.76747 19.4278 4.54291 19.1907 4.38514C18.9536 4.22736 18.675 4.14345 18.3902 4.14402C18.0083 4.14478 17.6424 4.29716 17.3729 4.56765C17.1034 4.83814 16.9524 5.20459 16.953 5.58642ZM5.8386 12.012C5.84532 15.4152 8.60917 18.1677 12.0117 18.1613C15.4141 18.1548 18.1686 15.3912 18.1622 11.988C18.1557 8.58475 15.3911 5.83147 11.9881 5.83819C8.58517 5.84491 5.83212 8.60924 5.8386 12.012ZM8.00004 12.0076C7.99848 11.2165 8.23155 10.4427 8.66978 9.78399C9.10802 9.12531 9.73173 8.61137 10.462 8.30717C11.1924 8.00296 11.9965 7.92216 12.7727 8.07496C13.549 8.22777 14.2625 8.60733 14.823 9.16565C15.3835 9.72396 15.7659 10.436 15.9218 11.2116C15.0777 11.9872 16.0001 12.7917 15.6988 13.5232C15.3974 14.2547 14.886 14.8804 14.229 15.3213C13.5721 15.7621 12.7992 15.9983 12.0081 15.9998C11.4827 16.0009 10.9623 15.8985 10.4766 15.6985C9.99087 15.4985 9.54929 15.2047 9.1771 14.834C8.80491 14.4632 8.50939 14.0228 8.30743 13.5379C8.10547 13.0529 8.00102 12.533 8.00004 12.0076Z" />
      </svg>
    ),
  },
  {
    name: "X",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.2117 16.7815H15.0886L7.75913 7.15474H8.96408L16.2117 16.7815Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5V16.5C1.5 19.8137 4.18629 22.5 7.5 22.5H16.5C19.8137 22.5 22.5 19.8137 22.5 16.5V7.5C22.5 4.18629 19.8137 1.5 16.5 1.5H7.5ZM17.8262 6H15.7999L12.4606 9.83444L9.57387 6H5.39299L10.3884 12.5632L5.65384 17.9999H7.68116L11.3358 13.8053L14.5294 17.9999H18.607L13.3996 11.0833L17.8262 6Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.331 12.0046L10.5491 9.77658V14.2234L14.331 12.0046Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5V16.5C1.5 19.8137 4.18629 22.5 7.5 22.5H16.5C19.8137 22.5 22.5 19.8137 22.5 16.5V7.5C22.5 4.18629 19.8137 1.5 16.5 1.5H7.5ZM6.30908 7.10842C7.44993 6.80585 11.9954 6.80585 11.9954 6.80585C11.9954 6.80585 16.5499 6.80586 17.6907 7.12677C18.3105 7.29181 18.8045 7.79602 18.9662 8.42867C19.2806 9.59311 19.2716 12.0137 19.2716 12.0137C19.2716 12.0137 19.2716 14.4252 18.9662 15.5805C18.8045 16.2223 18.3105 16.7173 17.6907 16.8915C16.5499 17.1941 11.9954 17.1941 11.9954 17.1941C11.9954 17.1941 7.45891 17.1941 6.30908 16.8824C5.68924 16.7081 5.19524 16.2039 5.02456 15.5713C4.72812 14.4252 4.72811 12.0046 4.72811 12.0046C4.72811 12.0046 4.72812 9.59311 5.02456 8.42867C5.19524 7.79602 5.69823 7.28263 6.30908 7.10842Z" />
      </svg>
    ),
  },
  {
    name: "Reddit",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.4998 1.49951C19.8134 1.49959 22.4997 4.1859 22.4998 7.49951V16.4995C22.4998 19.8132 19.8135 22.4994 16.4998 22.4995H7.49981C4.18607 22.4995 1.49981 19.8133 1.49981 16.4995V7.49951C1.49993 4.18587 4.18614 1.49955 7.49981 1.49951H16.4998ZM15.7977 5.99951C15.3987 5.99967 15.0569 6.22787 14.8973 6.56982L12.5369 6.06787C12.4685 6.05647 12.3996 6.06784 12.3426 6.10205C12.2856 6.13626 12.2511 6.19381 12.2283 6.26221L11.5106 9.66064C9.994 9.70625 8.63674 10.1503 7.65606 10.8687C7.40526 10.6293 7.05173 10.4703 6.67559 10.4702C5.88884 10.4702 5.24996 11.1083 5.24981 11.895C5.24981 12.4765 5.59196 12.9667 6.09356 13.1948C6.07076 13.3316 6.05939 13.4802 6.05938 13.6284C6.05938 15.8179 8.60245 17.5854 11.7498 17.5854C14.8972 17.5854 17.4402 15.8179 17.4402 13.6284C17.4402 13.4803 17.4289 13.3433 17.4061 13.2065C17.8735 12.9784 18.2273 12.4765 18.2273 11.895C18.2272 11.1083 17.5883 10.4702 16.8016 10.4702C16.414 10.4702 16.0719 10.6179 15.8211 10.8687C14.8518 10.173 13.5057 9.71766 12.0232 9.66064L12.6736 6.61572L14.783 7.06006C14.8058 7.59589 15.2505 8.02957 15.7977 8.02979C16.3564 8.02979 16.8133 7.57293 16.8133 7.01416C16.8131 6.45559 16.3563 5.99951 15.7977 5.99951ZM13.7908 15.2134C13.8935 15.1108 14.0652 15.1108 14.1678 15.2134C14.2476 15.3274 14.247 15.4877 14.1443 15.5903C13.4487 16.2857 12.1258 16.3315 11.7381 16.3315C11.3499 16.3315 10.0159 16.2743 9.33184 15.5903C9.2293 15.4877 9.22928 15.316 9.33184 15.2134C9.43445 15.1108 9.60615 15.1108 9.70879 15.2134C10.1421 15.6467 11.077 15.8071 11.7498 15.8071C12.4226 15.8071 13.3461 15.6467 13.7908 15.2134ZM9.492 11.895C10.0507 11.8951 10.5066 12.3519 10.5066 12.9106C10.5064 13.4692 10.0506 13.9253 9.492 13.9253C8.93337 13.9253 8.47759 13.4692 8.47735 12.9106C8.47735 12.3519 8.93322 11.895 9.492 11.895ZM13.9617 11.895C14.5205 11.895 14.9773 12.3519 14.9773 12.9106C14.9771 13.4692 14.5203 13.9253 13.9617 13.9253C13.4033 13.9251 12.9473 13.4691 12.9471 12.9106C12.9471 12.352 13.4031 11.8952 13.9617 11.895Z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.5 1.49988C4.18629 1.49988 1.5 4.18617 1.5 7.49988V16.4999C1.5 19.8136 4.18629 22.4999 7.5 22.4999H16.5C19.8137 22.4999 22.5 19.8136 22.5 16.4999V7.49988C22.5 4.18617 19.8137 1.49988 16.5 1.49988H7.5ZM14.6201 5.31738C14.8446 7.21283 15.9028 8.34625 17.7435 8.46792V10.6003C16.6724 10.7028 15.7361 10.357 14.6458 9.6974V13.6868C14.6458 18.7584 9.11104 20.3465 6.88559 16.7093C5.45541 14.372 6.32763 10.2673 10.9196 10.1008V12.3549C10.5733 12.4125 10.1949 12.5021 9.85499 12.611C8.83526 12.9568 8.25806 13.6036 8.41839 14.737C8.72624 16.9206 12.741 17.5609 12.4011 13.2962V5.31098H14.6137L14.6201 5.31738Z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.2891 5.23351C17.9297 4.5975 16.4762 4.13527 14.9566 3.87207C14.77 4.20948 14.5519 4.66331 14.4016 5.02432C12.7862 4.78139 11.1857 4.78139 9.60004 5.02432C9.44974 4.66331 9.22676 4.20948 9.03847 3.87207C7.51723 4.13527 6.06205 4.5992 4.70268 5.23688C1.96081 9.3802 1.21754 13.4206 1.58918 17.4036C3.40773 18.7617 5.17012 19.5867 6.90277 20.1265C7.33057 19.5377 7.71211 18.9118 8.0408 18.2522C7.4148 18.0144 6.81523 17.7208 6.2487 17.38C6.399 17.2687 6.54602 17.1523 6.68805 17.0325C10.1434 18.6487 13.8978 18.6487 17.3119 17.0325C17.4556 17.1523 17.6026 17.2687 17.7513 17.38C17.1831 17.7225 16.5819 18.016 15.9559 18.2539C16.2846 18.9118 16.6645 19.5394 17.0939 20.1282C18.8282 19.5883 20.5923 18.7634 22.4108 17.4036C22.8469 12.7863 21.6659 8.78299 19.2891 5.23351ZM8.51155 14.9541C7.47428 14.9541 6.62362 13.9857 6.62362 12.8065C6.62362 11.6273 7.45611 10.6573 8.51155 10.6573C9.56702 10.6573 10.4176 11.6256 10.3995 12.8065C10.4011 13.9857 9.56702 14.9541 8.51155 14.9541ZM15.4884 14.9541C14.4512 14.9541 13.6005 13.9857 13.6005 12.8065C13.6005 11.6273 14.433 10.6573 15.4884 10.6573C16.5439 10.6573 17.3945 11.6256 17.3764 12.8065C17.3764 13.9857 16.5439 14.9541 15.4884 14.9541Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <footer className="w-full bg-[#0c0d0d] text-[#a1a5b0] pt-12 pb-16 border-t border-[#2a2c35]/40 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-white transition-colors">
            Hostinger
          </Link>
          <span>&gt;</span>
          <span className="text-white font-semibold">AI automation apps</span>
        </div>

        {/* Desktop / Tablet Grid (Hidden on Mobile) */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {footerSections.map((sec, i) => (
            <div key={i}>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                {sec.title}
              </h4>
              <ul className="space-y-2.5 text-xs text-[#a1a5b0]">
                {sec.links.map((link, j) => (
                  <li key={j}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Accordion (Visible on Mobile) */}
        <div className="block sm:hidden border-t border-[#2a2c35]/50 divide-y divide-[#2a2c35]/50 mb-10">
          {footerSections.map((sec, i) => {
            const isOpen = !!openSections[sec.title];
            return (
              <div key={i} className="py-2">
                <button
                  onClick={() => toggleSection(sec.title)}
                  className="w-full py-3.5 flex items-center justify-between text-xs font-bold text-white uppercase tracking-wider focus:outline-none"
                >
                  <span>{sec.title}</span>
                  <span className="text-base text-gray-400">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden space-y-2 pb-3 pt-1 text-xs text-[#a1a5b0]"
                    >
                      {sec.links.map((link, j) => (
                        <li key={j}>
                          <Link href="#" className="hover:text-white transition-colors block">
                            {link}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Social Icons Row */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 mb-10 text-gray-400">
          {socialIcons.map((soc, i) => (
            <a
              key={i}
              href="#"
              aria-label={soc.name}
              className="hover:text-white transition-colors p-1"
            >
              {soc.svg}
            </a>
          ))}
        </div>

        {/* Logo, Legal Links & Payment Badges Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-6 border-t border-[#2a2c35]/40 text-xs">
          {/* Left: Brand Logo Image & Legal Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Hostinger Local Image Logo */}
            <div className="flex items-center gap-2 shrink-0">
              <img
                src="/images/public.png"
                alt="Hostinger"
                className="h-6 w-auto object-contain"
              />
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#a1a5b0]">
              <Link href="#" className="hover:text-white transition-colors">
                NPRD request policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Refund policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of service
              </Link>
            </div>
          </div>

          {/* Right: Payment Method Local Images */}
          <div className="flex flex-wrap items-center gap-2.5">
            {["public_1.png", "public_2.png", "public_3.png", "public_4.png", "public_5.png"].map((img, idx) => (
              <img
                key={idx}
                src={`/images/${img}`}
                alt="Payment method"
                className="h-6 w-auto object-contain rounded"
              />
            ))}
            <span className="text-xs font-semibold text-[#8c85ff] ml-1">and more</span>
          </div>
        </div>

        {/* Bottom Copyright & GST Disclaimer */}
        <div className="pt-6 border-t border-[#2a2c35]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#727586]">
          <p>© 2004–2026 Hostinger – Premium Web Hosting, Cloud, VPS, AI Website Builder & Domain Registration Services.</p>
          <p>Prices are listed without GST</p>
        </div>
      </div>
    </footer>
  );
}
