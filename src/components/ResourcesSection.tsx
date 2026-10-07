'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, Wrench } from 'lucide-react';
import { Resource } from '@/types';
import { INITIAL_RESOURCES } from '@/data/mockData';
import Reveal from './animations/Reveal';
import { StaggerContainer, StaggerItem } from './animations/Stagger';

interface ResourcesSectionProps {
  resources?: Resource[];
}

export default function ResourcesSection({ resources }: ResourcesSectionProps) {
  const items = resources && resources.length > 0 ? resources : INITIAL_RESOURCES;

  const iconMap: Record<string, React.ElementType> = {
    fundamentals: BookOpen,
    qiskit: FileText,
    research: FileText,
    tools: Wrench,
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 border-b border-[#EAEAEA]" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal yOffset={16} duration={0.5}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#6D32D9] tracking-wider">06</span>
                <span className="text-[#6D32D9] font-bold text-xs sm:text-sm">•</span>
                <span className="text-sm sm:text-[15px] font-bold tracking-[0.18em] text-[#6D32D9] uppercase">
                  LEARNING & RESOURCES
                </span>
                <span className="inline-block w-12 sm:w-20 h-[2.5px] bg-gradient-to-r from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full" />
              </div>
              <p className="text-xs text-[#64748B] mt-1.5 sm:hidden">
                Curated resources to start and grow your quantum journey.
              </p>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 text-xs text-[#64748B]">
              <span className="hidden sm:inline">Curated resources to start and grow your quantum journey.</span>
              <Link
                href="/resources"
                className="font-semibold text-[#071126] hover:text-[#6D32D9] flex items-center gap-1 transition-colors group"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 4 Cards Grid - Vertical on Mobile, 4-col on Desktop */}
        <StaggerContainer
          staggerDelay={0.08}
          initialDelay={0.15}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {items.map((res) => {
            const Icon = iconMap[res.category] || FileText;
            return (
              <StaggerItem
                key={res.title}
                className="w-full h-full"
              >
                <a
                  href={res.url || '/resources'}
                  target={res.url?.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="premium-card-hover p-6 bg-white border border-[#E5E7EB] flex flex-col justify-between group h-full block"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 flex items-center justify-center text-[#6D32D9]">
                      <Icon className="w-7 h-7 stroke-[1.5] premium-icon-hover" />
                    </div>
                    <h3 className="text-sm font-bold text-[#071126] tracking-tight group-hover:text-[#6D32D9] transition-colors">
                      {res.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {res.description}
                    </p>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-gray-100 mt-6">
                    <ArrowRight className="w-4 h-4 text-[#071126] group-hover:text-[#6D32D9] premium-arrow-hover transition-colors" />
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

