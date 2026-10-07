'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Reveal from './animations/Reveal';

export default function JoinCommunity() {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="bg-[#071126] text-white py-20 sm:py-24 lg:py-28 relative overflow-hidden border-b border-[#1A2642]">
      {/* Background subtle quantum geometry */}
      <div className="absolute inset-0 bg-quantum-grid opacity-20 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#6D32D9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            {/* Label */}
            <Reveal yOffset={14} duration={0.45}>
              <div className="flex items-center gap-3">
                <span className="text-sm sm:text-[15px] font-bold tracking-[0.18em] text-[#6D32D9] uppercase">
                  • JOIN THE COMMUNITY
                </span>
                <span className="inline-block w-16 sm:w-20 h-[2.5px] bg-gradient-to-r from-white via-white/40 to-transparent rounded-full" />
              </div>
            </Reveal>

            {/* Heading */}
            <Reveal yOffset={20} delay={0.1} duration={0.65}>
              <h2 className="text-3xl sm:text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to explore quantum?
              </h2>
            </Reveal>

            {/* Description */}
            <Reveal yOffset={16} delay={0.2} duration={0.65}>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Join Vishnu Quantum Club and learn, build, research and compete with a community passionate about the future of computing.
              </p>
            </Reveal>
          </div>

          {/* CTA Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <Reveal yOffset={16} delay={0.3} duration={0.65}>
              <Link
                href="/join"
                className="bg-[#6D32D9] hover:bg-[#5B27BA] text-white px-8 py-4 text-xs font-bold uppercase tracking-wider transition-all w-full sm:w-auto flex sm:inline-flex items-center justify-center gap-2 shadow-lg shadow-[#6D32D9]/30 hover:shadow-[#6D32D9]/50 active:scale-[0.98] group text-center"
              >
                <span>JOIN VISHNU QUANTUM CLUB</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

