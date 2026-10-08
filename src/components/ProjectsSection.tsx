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
      githubUrl: 'https://github.com/Qiskit/qiskit',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'quantum-algorithms-lab',
      title: 'Quantum Algorithms Lab',
      slug: 'quantum-algorithms-lab',
      description: 'Experimenting with quantum algorithms and their real-world applications.',
      imageUrl: '/images/project-algorithms-lab.jpg',
      githubUrl: 'https://github.com/qiskit-community/qiskit-algorithms',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'quantum-ml-exploration',
      title: 'Quantum ML Exploration',
      slug: 'quantum-ml-exploration',
      description: 'Exploring the intersection of quantum computing and machine learning.',
      imageUrl: '/images/project-ml-exploration.jpg',
      githubUrl: 'https://github.com/qiskit-community/qiskit-machine-learning',
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

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold text-[#071126] group-hover:text-[#6D32D9] transition-colors flex items-center gap-1">
                      <span>DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>

                    {proj.githubUrl && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(proj.githubUrl, '_blank', 'noopener,noreferrer');
                        }}
                        className="text-[#64748B] hover:text-[#071126] p-1 transition-colors"
                        title="View GitHub Repository"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </span>
                    )}
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

