'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Atom, Share2, BrainCircuit, FileText } from 'lucide-react';
import Reveal from './animations/Reveal';
import { StaggerContainer, StaggerItem } from './animations/Stagger';

export default function ExploreSection() {
  const cards = [
    {
      num: '01',
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Learn the fundamentals of quantum computation and quantum hardware.',
      href: '/activities#quantum-computing',
    },
    {
      num: '02',
      icon: Share2,
      title: 'Quantum Algorithms',
      description: 'Explore quantum algorithms and computational techniques.',
      href: '/activities#quantum-algorithms',
    },
    {
      num: '03',
      icon: BrainCircuit,
      title: 'Quantum Machine Learning',
      description: 'Explore the intersection of quantum computing and machine learning.',
      href: '/activities#qml',
    },
    {
      num: '04',
      icon: FileText,
      title: 'Quantum Research',
      description: 'Encourage experimentation, research and emerging applications.',
      href: '/activities#research',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 border-b border-[#EAEAEA]" id="explore">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal yOffset={16} duration={0.5}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#6D32D9] tracking-wider">01</span>
                <span className="text-[#6D32D9] font-bold text-xs sm:text-sm">•</span>
                <span className="text-sm sm:text-[15px] font-bold tracking-[0.18em] text-[#6D32D9] uppercase">
                  WHAT WE EXPLORE
                </span>
                <span className="inline-block w-12 sm:w-20 h-[2.5px] bg-gradient-to-r from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full" />
              </div>
              <p className="text-xs text-[#64748B] mt-1.5 sm:hidden">
                Explore the key areas we focus on in quantum computing.
              </p>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 text-xs text-[#64748B]">
              <span className="hidden sm:inline">Explore the key areas we focus on in quantum computing.</span>
              <Link
                href="/activities"
                className="font-semibold text-[#071126] hover:text-[#6D32D9] flex items-center gap-1 transition-colors group"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 4 Cards: 1-col on mobile, 4-col on desktop */}
        <StaggerContainer
          staggerDelay={0.08}
          initialDelay={0.15}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.num} className="w-full h-full">
                <Link
                  href={card.href}
                  className="premium-card-hover p-6 sm:p-7 flex flex-col justify-between h-full group bg-white border border-[#E5E7EB] block w-full"
                >
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#6D32D9] mb-4 sm:mb-6">
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.5] premium-icon-hover" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#071126] mb-2 sm:mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed mb-6 sm:mb-8">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-[#94A3B8]">
                    <span className="font-semibold text-gray-400 group-hover:text-[#6D32D9] transition-colors">{card.num}</span>
                    <ArrowRight className="w-4 h-4 text-[#071126] group-hover:text-[#6D32D9] premium-arrow-hover transition-colors" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

