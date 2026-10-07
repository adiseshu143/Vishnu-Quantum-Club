'use client';

import React from 'react';
import { BookOpen, Box, Network, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import Reveal from './animations/Reveal';
import { StaggerContainer, StaggerItem } from './animations/Stagger';

export default function AboutClub() {
  const ease = [0.22, 1, 0.36, 1] as const;

  const principles = [
    {
      icon: BookOpen,
      title: 'LEARN',
      description: 'Build strong foundations in quantum computing.',
    },
    {
      icon: Box,
      title: 'BUILD',
      description: 'Turn concepts into working quantum projects.',
    },
    {
      icon: Network,
      title: 'RESEARCH',
      description: 'Explore emerging ideas and quantum applications.',
    },
    {
      icon: Trophy,
      title: 'COMPETE',
      description: 'Participate in hackathons, challenges and competitions.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 border-b border-[#EAEAEA]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <Reveal yOffset={14} duration={0.45}>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm sm:text-[15px] font-bold tracking-[0.18em] text-[#6D32D9] uppercase">
              • ABOUT THE CLUB
            </span>
            <span className="inline-block w-16 sm:w-20 h-[2.5px] bg-gradient-to-r from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full" />
          </div>
        </Reveal>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            <Reveal yOffset={22} delay={0.1} duration={0.65}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#071126] leading-tight">
                Building the next<br />
                generation of quantum<br />
                thinkers<span className="text-[#6D32D9]">.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal yOffset={20} delay={0.2} duration={0.65}>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Vishnu Quantum Club is a student-led community at Vishnu Institute of Technology
                dedicated to making quantum computing accessible, practical, and exciting. From
                learning the fundamentals of quantum mechanics and quantum circuits to building projects
                and participating in global quantum initiatives, the club provides a space for students
                to learn, experiment, and collaborate.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 4 Principle Blocks - Vertical on mobile, 4-col on desktop */}
        <div className="pt-8 border-t border-[#EAEAEA]">
          <StaggerContainer
            staggerDelay={0.1}
            initialDelay={0.25}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title} className="w-full">
                  <div
                    className={`space-y-3 ${
                      index !== 0 ? 'sm:border-l sm:border-[#EAEAEA] sm:pl-8' : ''
                    }`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center text-[#6D32D9] transition-transform duration-300 hover:scale-110">
                      <Icon className="w-7 h-7 stroke-[1.5]" />
                    </div>
                    <h3 className="text-sm font-bold tracking-wider text-[#071126] uppercase">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

