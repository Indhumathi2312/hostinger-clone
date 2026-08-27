"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#0c0d0d] border-b border-[#2a2c35]/60 text-white font-sans">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left Side: Logo & Main Navigation Links */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              {/* Desktop Full Logo */}
              <div className="hidden lg:flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 25 26" fill="none" className="text-white">
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M17.8175.798v8.729l7.0525 4.125V4.393zM0 .798v13.699h22.937l-6.979-3.836-9.091-.004V4.485zm17.817 25.472v-6.119l-9.161-.006c.008.041-7.095-3.897-7.095-3.897l23.308.11v13.698zM0 17.319l-.0002 8.952 6.8675 3.594V21.346z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-extrabold text-xl tracking-wider text-white">
                  HOSTINGER
                </span>
              </div>

              {/* Mobile Icon Logo */}
              <div className="lg:hidden flex items-center">
                <svg width="24" height="24" viewBox="0 0 25 26" fill="none" className="text-white">
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M17.8175.798v8.729l7.0525 4.125V4.393zM0 .798v13.699h22.937l-6.979-3.836-9.091-.004V4.485zm17.817 25.472v-6.119l-9.161-.006c.008.041-7.095-3.897-7.095-3.897l23.308.11v13.698zM0 17.319l-.0002 8.952 6.8675 3.594V21.346z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-200">
              <Link href="#sub-menu-pricing" className="hover:text-white transition-colors">
                Pricing
              </Link>
              <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                <span>Products</span>
                <svg className="w-3.5 h-3.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                <span>Developers</span>
                <svg className="w-3.5 h-3.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                <span>Resources</span>
                <svg className="w-3.5 h-3.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Ask AI Pill Button */}
            <a
              href="#promo"
              className="relative group p-[1px] rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 hover:shadow-[0_0_15px_rgba(217,70,239,0.5)] transition-all duration-300"
            >
              <div className="px-4 py-1.5 rounded-full bg-[#0c0d0d] flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
                </svg>
                <span>Ask AI</span>
              </div>
            </a>

            {/* Language Selector (Desktop) */}
            <button className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-700 hover:border-gray-500 text-xs font-semibold text-gray-200 transition-colors">
              <span className="w-4 h-4 rounded-full overflow-hidden inline-flex border border-gray-600">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect width="16" height="5.33" fill="#FF9811" />
                  <rect y="5.33" width="16" height="5.33" fill="#FFFFFF" />
                  <rect y="10.66" width="16" height="5.33" fill="#6DA544" />
                  <circle cx="8" cy="8" r="1.5" fill="#0052B4" />
                </svg>
              </span>
              <span>EN</span>
            </button>

            {/* User Profile Button (Desktop) */}
            <button className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 hover:border-gray-500 text-gray-200 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 11.25a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm0 1.25c-3.58 0-6.79 2.2-8.08 5.54a.75.75 0 00.7 1.01h14.76a.75.75 0 00.7-1.01C18.79 14.7 15.58 12.5 12 12.5z" />
              </svg>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Open mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen / Drawer Overlay Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white text-[#121316] flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          {/* Drawer Top Header */}
          <div className="px-6 py-5 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 25 26" fill="none" className="text-black">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M17.8175.798v8.729l7.0525 4.125V4.393zM0 .798v13.699h22.937l-6.979-3.836-9.091-.004V4.485zm17.817 25.472v-6.119l-9.161-.006c.008.041-7.095-3.897-7.095-3.897l23.308.11v13.698zM0 17.319l-.0002 8.952 6.8675 3.594V21.346z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-800 hover:text-black focus:outline-none"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Links List */}
          <div className="px-6 py-4 flex-grow space-y-1">
            <Link
              href="#sub-menu-pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 border-b border-gray-100 text-sm font-semibold text-gray-800"
            >
              <div className="flex items-center gap-3">
                <span className="text-base">🏷️</span>
                <span>Pricing</span>
              </div>
            </Link>

            <div className="flex items-center justify-between py-3.5 border-b border-gray-100 text-sm font-semibold text-gray-800 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-base">✨</span>
                <span>AI and automation</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>

            <div className="flex items-center justify-between py-3.5 border-b border-gray-100 text-sm font-semibold text-gray-800 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-base">🖥️</span>
                <span>Hosting</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>

            <div className="flex items-center justify-between py-3.5 border-b border-gray-100 text-sm font-semibold text-gray-800 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-base">🌐</span>
                <span>Domains</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>

            <div className="flex items-center justify-between py-3.5 border-b border-gray-100 text-sm font-semibold text-gray-800 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-base">💻</span>
                <span>Create a website</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>

            <div className="flex items-center justify-between py-3.5 border-b border-gray-100 text-sm font-semibold text-gray-800 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-base">🛒</span>
                <span>Sell online</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>

            <div className="flex items-center justify-between py-3.5 border-b border-gray-100 text-sm font-semibold text-gray-800 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-base">✉️</span>
                <span>Email and marketing</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>

            <div className="flex items-center justify-between py-3.5 border-b border-gray-100 text-sm font-semibold text-gray-800 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-base">🏢</span>
                <span>For agencies</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>

            <div className="flex items-center justify-between py-3.5 border-b border-gray-100 text-sm font-semibold text-gray-800 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-base font-mono">&lt;/&gt;</span>
                <span>Developers</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>

            <div className="flex items-center justify-between py-3.5 border-b border-gray-100 text-sm font-semibold text-gray-800 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-base">🔍</span>
                <span>Resources</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </div>
          </div>

          {/* Drawer Bottom Bar */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full overflow-hidden inline-flex border border-gray-300">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect width="16" height="5.33" fill="#FF9811" />
                  <rect y="5.33" width="16" height="5.33" fill="#FFFFFF" />
                  <rect y="10.66" width="16" height="5.33" fill="#6DA544" />
                  <circle cx="8" cy="8" r="1.5" fill="#0052B4" />
                </svg>
              </span>
              <span>EN</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-800 cursor-pointer hover:text-black">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 11.25a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm0 1.25c-3.58 0-6.79 2.2-8.08 5.54a.75.75 0 00.7 1.01h14.76a.75.75 0 00.7-1.01C18.79 14.7 15.58 12.5 12 12.5z" />
              </svg>
              <span>My account</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
