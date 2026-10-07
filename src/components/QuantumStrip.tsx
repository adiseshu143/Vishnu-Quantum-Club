'use client';

import React from 'react';
import { motion } from 'motion/react';
import Reveal from './animations/Reveal';

export default function QuantumStrip() {
  const items = [
    'QUANTUM COMPUTING',
    'RESEARCH',
    'INNOVATION',
    'COMMUNITY',
  ];

  return (
    <section className="bg-[#071126] text-white border-y border-[#1A2642] py-3.5 sm:py-5 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal yOffset={12} duration={0.5}>
          {/* Mobile 2-Row Balanced Layout */}
          <div className="sm:hidden flex flex-col items-center gap-2.5 text-[10.5px] tracking-[0.16em] font-bold text-white/95 text-center">
            <div className="flex items-center justify-center gap-2.5">
              <span>QUANTUM COMPUTING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D32D9] shrink-0 inline-block" />
              <span>RESEARCH</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <span>INNOVATION</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D32D9] shrink-0 inline-block" />
              <span>COMMUNITY</span>
            </div>
          </div>

          {/* Desktop Single Row Strip */}
          <div className="hidden sm:flex items-center justify-between gap-y-3 text-xs tracking-[0.18em] font-bold text-white/95">
            {items.map((item, idx) => (
              <React.Fragment key={item}>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08 * idx,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="hover:text-[#F1EBFF] transition-colors whitespace-nowrap"
                >
                  {item}
                </motion.span>
                {idx < items.length - 1 && (
                  <div className="flex items-center justify-center px-2">
                    <span className="w-2 h-2 rounded-full bg-[#6D32D9] shrink-0 inline-block" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

