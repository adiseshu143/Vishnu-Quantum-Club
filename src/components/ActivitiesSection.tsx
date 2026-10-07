'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Zap, BookOpen, Box, Search, Trophy } from 'lucide-react';
import Reveal from './animations/Reveal';
import { StaggerContainer, StaggerItem } from './animations/Stagger';

export default function ActivitiesSection() {
  const activities = [
    {
      icon: Users,
      title: 'Workshops',
      description: 'Hands-on technical sessions.',
    },
    {
      icon: Zap,
      title: 'Hackathons',
      description: 'Build and innovate together.',
    },
    {
      icon: BookOpen,
      title: 'Study Sessions',
      description: 'Structured learning and discussions.',
    },
    {
      icon: Box,
      title: 'Projects',
      description: 'Work on real quantum projects.',
    },
    {
      icon: Search,
      title: 'Research',
      description: 'Explore new ideas and publish.',
    },
    {
      icon: Trophy,
      title: 'Competitions',
      description: 'Participate in global challenges.',
    },
  ];

  return (
    <section className="bg-[#FAF8FE] py-20 sm:py-24 lg:py-28 border-b border-[#EAEAEA]" id="activities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal yOffset={16} duration={0.5}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#6D32D9] tracking-wider">02</span>
                <span className="text-[#6D32D9] font-bold text-xs sm:text-sm">•</span>
                <span className="text-sm sm:text-[15px] font-bold tracking-[0.18em] text-[#6D32D9] uppercase">
                  ACTIVITIES
                </span>
                <span className="inline-block w-12 sm:w-20 h-[2.5px] bg-gradient-to-r from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full" />
              </div>
              <p className="text-xs text-[#64748B] mt-1.5 sm:hidden">
                Hands-on learning, collaboration and real-world exposure.
              </p>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 text-xs text-[#64748B]">
              <span className="hidden sm:inline">Hands-on learning, collaboration and real-world exposure.</span>
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

        {/* 6 Compact Cards: 2-col on mobile, 3-col on tablet, 6-col on desktop */}
        <StaggerContainer
          staggerDelay={0.06}
          initialDelay={0.12}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 w-full"
        >
          {activities.map((act) => {
            const Icon = act.icon;
            return (
              <StaggerItem key={act.title} className="w-full h-full">
                <div className="premium-card-hover p-4 sm:p-6 text-center flex flex-col items-center justify-center bg-white border border-[#E5E7EB] h-full group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[#6D32D9] mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75] premium-icon-hover" />
                  </div>
                  <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#071126] mb-1.5 sm:mb-2">
                    {act.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#64748B] leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

