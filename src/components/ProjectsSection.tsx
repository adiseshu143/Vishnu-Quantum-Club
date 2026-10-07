'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/types';
import Reveal from './animations/Reveal';
import { StaggerContainer, StaggerItem } from './animations/Stagger';

interface ProjectsSectionProps {
  projects?: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const defaultProjects: Project[] = [
    {
      id: 'quantum-circuit-lab',
      title: 'Quantum Circuit Lab',
      slug: 'quantum-circuit-lab',
      description: 'Exploring quantum circuits and hands-on implementations.',
      imageUrl: '/images/project-circuit-lab.jpg',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'quantum-algorithms-lab',
      title: 'Quantum Algorithms Lab',
      slug: 'quantum-algorithms-lab',
      description: 'Experimenting with quantum algorithms and their real-world applications.',
      imageUrl: '/images/project-algorithms-lab.jpg',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'quantum-ml-exploration',
      title: 'Quantum ML Exploration',
      slug: 'quantum-ml-exploration',
      description: 'Exploring the intersection of quantum computing and machine learning.',
      imageUrl: '/images/project-ml-exploration.jpg',
      createdAt: new Date().toISOString(),
    },
  ];

  const items = projects && projects.length > 0 ? projects.slice(0, 3) : defaultProjects;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 border-b border-[#EAEAEA]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal yOffset={16} duration={0.5}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#6D32D9] tracking-wider">03</span>
                <span className="text-[#6D32D9] font-bold text-xs sm:text-sm">•</span>
                <span className="text-sm sm:text-[15px] font-bold tracking-[0.18em] text-[#6D32D9] uppercase">
                  PROJECTS
                </span>
                <span className="inline-block w-12 sm:w-20 h-[2.5px] bg-gradient-to-r from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full" />
              </div>
              <p className="text-xs text-[#64748B] mt-1.5 sm:hidden">
                Events, projects and community explorations.
              </p>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 text-xs text-[#64748B]">
              <span className="hidden sm:inline">Events, projects and community explorations.</span>
              <Link
                href="/projects"
                className="font-semibold text-[#071126] hover:text-[#6D32D9] flex items-center gap-1 transition-colors group"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 3 Columns Grid: 1-col on mobile, 3-col on desktop */}
        <StaggerContainer
          staggerDelay={0.1}
          initialDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {items.map((proj) => (
            <StaggerItem key={proj.slug} className="w-full h-full">
              <Link
                href={`/projects/${proj.slug}`}
                className="premium-card-hover bg-white border border-[#E5E7EB] overflow-hidden flex flex-col group h-full block w-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/9] w-full bg-[#071126] overflow-hidden">
                  <Image
                    src={proj.imageUrl || '/images/project-circuit-lab.jpg'}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
                    quality={80}
                    className="object-cover premium-image-hover"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#071126] mb-2 group-hover:text-[#6D32D9] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex justify-end pt-2 border-t border-gray-100">
                    <ArrowRight className="w-4 h-4 text-[#071126] group-hover:text-[#6D32D9] premium-arrow-hover transition-colors" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

