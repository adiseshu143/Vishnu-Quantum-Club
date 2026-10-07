'use client';

import React from 'react';
import Reveal from './animations/Reveal';

export default function EcosystemSection() {
  return (
    <section className="bg-[#FAF8FE] py-20 sm:py-24 lg:py-28 border-b border-[#EAEAEA]" id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal yOffset={16} duration={0.5}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#6D32D9] tracking-wider">07</span>
                <span className="text-[#6D32D9] font-bold text-xs sm:text-sm">•</span>
                <span className="text-sm sm:text-[15px] font-bold tracking-[0.18em] text-[#6D32D9] uppercase">
                  OUR ECOSYSTEM
                </span>
                <span className="inline-block w-12 sm:w-20 h-[2.5px] bg-gradient-to-r from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full" />
              </div>
              <p className="text-xs text-[#64748B] mt-1.5 sm:hidden">
                We collaborate and learn with the global quantum ecosystem.
              </p>
            </div>

            <div className="hidden sm:block text-xs text-[#64748B]">
              We collaborate and learn with the global quantum ecosystem.
            </div>
          </div>
        </Reveal>

        {/* Logos & Supporting Text Grid with scale and fade entrance */}
        <Reveal yOffset={18} scale={0.97} delay={0.15} duration={0.65}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Brand Marks */}
            <div className="lg:col-span-6 flex flex-wrap items-center gap-10 sm:gap-16">
              {/* IBM Quantum Logo */}
              <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 hover:scale-105 duration-300">
                <span className="text-2xl font-bold tracking-tight text-[#071126]">
                  <span className="text-blue-700">IBM</span> Quantum
                </span>
              </div>

              {/* Qiskit Logo */}
              <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100 hover:scale-105 duration-300">
                <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#6D32D9]" fill="none" stroke="currentColor" strokeWidth="6">
                  <circle cx="50" cy="50" r="40" />
                  <path d="M50 10 L50 90 M10 50 L90 50" strokeWidth="4" />
                  <circle cx="50" cy="50" r="16" fill="#6D32D9" />
                </svg>
                <span className="text-2xl font-bold tracking-tight text-[#071126]">
                  Qiskit
                </span>
              </div>
            </div>

            {/* Right Description */}
            <div className="lg:col-span-6 lg:border-l lg:border-[#EAEAEA] lg:pl-10">
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Access to world-class resources, tools and learning opportunities through leading quantum initiatives.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

