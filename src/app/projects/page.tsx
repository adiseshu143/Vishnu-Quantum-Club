'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JoinCommunity from '@/components/JoinCommunity';
import QuantumStrip from '@/components/QuantumStrip';
import { getProjects } from '@/lib/db';
import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    loadProjects();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="bg-white pt-12 pb-14 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal yOffset={14} duration={0.45}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm sm:text-[15px] font-bold tracking-[0.18em] text-[#6D32D9] uppercase">
                • RESEARCH & PROJECTS
              </span>
              <span className="inline-block w-16 sm:w-20 h-[2.5px] bg-gradient-to-r from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full" />
            </div>
          </Reveal>

          <Reveal yOffset={20} delay={0.1} duration={0.65}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#071126] tracking-tight mb-4">
              Pioneering student-led quantum experiments<span className="text-[#6D32D9]">.</span>
            </h1>
          </Reveal>

          <Reveal yOffset={14} delay={0.2} duration={0.55}>
            <p className="text-sm text-[#64748B] max-w-2xl leading-relaxed">
              Explore active open-source quantum implementations, algorithm benchmarking, and hybrid quantum-classical machine learning pipelines built by Vishnu Quantum Club members.
            </p>
          </Reveal>
        </div>
      </section>

      <QuantumStrip />

      {/* Projects Grid with Staggered Entrance / Single Row on Mobile */}
      <section className="py-16 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto no-scrollbar pb-2">
            <StaggerContainer
              staggerDelay={0.08}
              initialDelay={0.15}
              className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 min-w-full"
            >
              {projects.map((proj) => (
                <StaggerItem
                  key={proj.slug}
                  className="min-w-[280px] sm:min-w-[320px] md:min-w-0 shrink-0 md:shrink snap-start h-full"
                >
                  <div className="premium-card-hover bg-white border border-[#E5E7EB] overflow-hidden flex flex-col group h-full">
                    <div className="relative aspect-[16/9] w-full bg-[#071126] overflow-hidden">
                      <Image
                        src={proj.imageUrl || '/images/project-circuit-lab.jpg'}
                        alt={proj.title}
                        fill
                        className="object-cover premium-image-hover"
                      />
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#071126] mb-2 group-hover:text-[#6D32D9] transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          {proj.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <Link
                          href={`/projects/${proj.slug}`}
                          className="text-xs font-bold text-[#071126] hover:text-[#6D32D9] transition-colors flex items-center gap-1 group/link"
                        >
                          <span>DETAILS</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                        </Link>

                        <div className="flex items-center gap-3 text-[#64748B]">
                          {proj.githubUrl && (
                            <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#071126] transition-colors">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <JoinCommunity />
      <Footer />
    </main>
  );
}

