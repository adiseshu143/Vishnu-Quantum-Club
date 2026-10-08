'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from './animations/Reveal';

export default function Footer() {
  return (
    <footer className="bg-[#071126] text-white pt-16 pb-12 border-t border-[#1A2642]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal yOffset={18} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            {/* Left Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <Link href="/" className="flex items-center gap-3 group inline-flex">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-9 h-9 text-white transition-transform duration-500 group-hover:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="50" cy="50" r="44" strokeDasharray="3 3" opacity="0.4" />
                    <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(0 50 50)" />
                    <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" stroke="#6D32D9" />
                    <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)" />
                    <circle cx="50" cy="50" r="5" fill="#6D32D9" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold tracking-tight text-white leading-none">
                    VISHNU QUANTUM CLUB
                  </div>
                </div>
              </Link>

              <div className="text-xs text-slate-400 pl-1 max-w-sm leading-relaxed">
                Vishnu Institute of Technology<br />
                Bhimavaram, Andhra Pradesh
              </div>
            </div>

            {/* Center Navigation Columns */}
            <div className="md:col-span-4">
              <h3 className="text-xs font-semibold text-white tracking-wider mb-4">
                Navigation
              </h3>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs text-slate-400">
                <Link href="/about" className="hover:text-white py-1 transition-colors">About</Link>
                <Link href="/team" className="hover:text-white py-1 transition-colors">Team</Link>
                <Link href="/activities" className="hover:text-white py-1 transition-colors">Activities</Link>
                <Link href="/resources" className="hover:text-white py-1 transition-colors">Resources</Link>
                <Link href="/projects" className="hover:text-white py-1 transition-colors">Projects</Link>
                <Link href="/join" className="hover:text-white py-1 transition-colors">Join Us</Link>
                <Link href="/#about" className="hover:text-white py-1 transition-colors">Contact</Link>
              </div>
            </div>

            {/* Right Social Column */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-semibold text-white tracking-wider mb-4">
                Follow Us
              </h3>
              <div className="flex items-center gap-4 text-slate-400">
                <a
                  href="https://www.linkedin.com/company/qff-vitb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8B5CF6] hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/qiskitfallfest_vitb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8B5CF6] hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Sub-Footer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © 2026 Vishnu Quantum Club. All rights reserved.
            </div>

            <div className="inline-flex items-center gap-2 sm:gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Explore
              </span>
              <span className="text-[#8B5CF6] font-black text-xs">—</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
                Compute
              </span>
              <span className="text-[#8B5CF6] font-black text-xs">—</span>
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Innovate
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

