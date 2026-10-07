'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="flex-1 relative overflow-hidden bg-white flex flex-col justify-center py-4 sm:py-6 lg:py-8">
      {/* Background subtle geometric elements */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute right-10 top-12 w-64 h-64 rounded-full border border-purple-200/50" />
        <div className="absolute right-20 top-6 w-80 h-80 rounded-full border border-purple-300/30" />
        <div className="absolute right-1/3 top-1/4 w-2 h-2 rounded-full bg-[#6D32D9]" />
        <div className="absolute left-1/4 bottom-6 w-1.5 h-1.5 rounded-full bg-[#6D32D9]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Pill Capsule Badge with Quantum Logo */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#6D32D9] bg-white shadow-xs text-xs font-semibold text-[#071126] tracking-wide hover:shadow-sm hover:shadow-[#6D32D9]/20 transition-all">
                {/* Quantum Logo Mark */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-4 h-4 text-[#6D32D9]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(0 50 50)" />
                  <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" stroke="#6D32D9" />
                  <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)" />
                  <circle cx="50" cy="50" r="6" fill="#6D32D9" />
                </svg>
                <span>Vishnu Quantum Club</span>
                <Sparkles className="w-3.5 h-3.5 text-[#6D32D9] stroke-[2.2]" />
              </div>
            </motion.div>

            {/* Display Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#071126] leading-[1.15]"
            >
              Quantum starts here<span className="text-[#6D32D9]">.</span>
            </motion.h1>

            {/* Styled Tech Tagline: Explore - Compute - Innovate */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease }}
            >
              <div className="inline-flex items-center gap-2 sm:gap-3.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#F1EBFF]/80 border border-[#6D32D9]/30 shadow-xs max-w-full overflow-hidden">
                <span className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-[#071126]">
                  Explore
                </span>
                <span className="text-[#6D32D9] font-black text-xs sm:text-sm">—</span>
                <span className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-[#6D32D9]">
                  Compute
                </span>
                <span className="text-[#6D32D9] font-black text-xs sm:text-sm">—</span>
                <span className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-[#071126]">
                  Innovate
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4, ease }}
              className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl"
            >
              A student-driven community at Vishnu Institute of Technology exploring quantum computing,
              quantum algorithms, research, and emerging technologies through workshops, projects,
              competitions and collaborative learning experiences.
            </motion.p>

            {/* Action Buttons - Stacked on Mobile, Row on Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5, ease }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto"
            >
              <Link
                href="/join"
                className="bg-[#071126] text-white px-6 py-3 sm:py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#1A2642] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm group text-center"
              >
                <span>JOIN THE CLUB</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/activities"
                className="bg-white text-[#071126] border border-[#E2E8F0] px-6 py-3 sm:py-2.5 text-xs font-bold uppercase tracking-wider hover:border-[#94A3B8] hover:bg-[#F8FAFC] active:scale-[0.98] transition-all text-center flex items-center justify-center"
              >
                EXPLORE ACTIVITIES
              </Link>
            </motion.div>

            {/* Institution Metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
              className="pt-2 flex items-center gap-2 text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wider text-[#64748B]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#6D32D9] shrink-0" />
              <span>VISHNU INSTITUTE OF TECHNOLOGY — BHIMAVARAM, AP</span>
            </motion.div>
          </div>

          {/* Right Column: Quantum Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.25, ease }}
              className="relative w-full max-w-[340px] sm:max-w-[440px] aspect-[4/4.1] rounded-none overflow-hidden border border-gray-200/80 shadow-xl bg-[#071126] mx-auto lg:mx-0"
            >
              <Image
                src="/images/hero-quantum.jpg"
                alt="Quantum Cryostat Chandelier - Vishnu Quantum Club"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                quality={80}
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Floating metadata badges */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 backdrop-blur-md border border-white/20 px-2.5 sm:px-3 py-1.5 sm:py-2 text-[8.5px] sm:text-[9px] font-bold tracking-widest text-white/90 text-right leading-tight">
                <div>IDEAS</div>
                <div>CIRCUITS</div>
                <div>PEOPLE</div>
                <div>REAL IMPACT</div>
              </div>

              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/60 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[9px] sm:text-[10px] font-bold tracking-wider text-white">
                VISHNU QUANTUM CLUB
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

