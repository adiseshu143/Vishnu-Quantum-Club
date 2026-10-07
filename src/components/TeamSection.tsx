'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Mail, Phone, User } from 'lucide-react';
import { TeamMember } from '@/types';
import { INITIAL_TEAM } from '@/data/mockData';
import Reveal from './animations/Reveal';
import { StaggerContainer, StaggerItem } from './animations/Stagger';

interface TeamSectionProps {
  team?: TeamMember[];
}

export default function TeamSection({ team }: TeamSectionProps) {
  const members = team && team.length > 0 ? team : INITIAL_TEAM;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 border-b border-[#EAEAEA]" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal yOffset={16} duration={0.5}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="flex items-start gap-3">
              {/* Vertical Purple Indicator Line */}
              <div className="w-[3px] h-9 sm:h-10 bg-gradient-to-b from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#6D32D9] tracking-wider">05</span>
                  <span className="text-[#6D32D9] font-bold text-xs sm:text-sm">•</span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-[#071126] uppercase leading-none inline">
                    OUR TEAM
                  </h2>
                </div>
                <p className="text-xs text-[#64748B] mt-1.5 font-medium">
                  Student co-organizers and community leads
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 text-xs text-[#64748B]">
              <span className="hidden sm:inline">Meet the people behind Vishnu Quantum Club.</span>
              <Link
                href="/team"
                className="font-semibold text-[#071126] hover:text-[#6D32D9] flex items-center gap-1 transition-colors group"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 4 Team Member Cards: 1-col on mobile, 2-col on tablet, 4-col on desktop */}
        <StaggerContainer
          staggerDelay={0.08}
          initialDelay={0.15}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {members.map((member) => (
            <StaggerItem
              key={member.name}
              className="w-full h-full flex flex-col"
            >
              <div className="premium-card-hover border border-[#E5E7EB] bg-white overflow-hidden flex flex-col flex-1 h-full group w-full">
                {/* Portrait Image Container with Cloudinary Support */}
                <div className="relative aspect-[4/5] w-full bg-[#F8FAFC] overflow-hidden border-b border-[#E5E7EB] flex items-center justify-center shrink-0">
                  {member.imageUrl && member.imageUrl.startsWith('http') ? (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover object-top premium-image-hover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center bg-slate-100 text-[#071126] w-full h-full">
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-2 border border-slate-200">
                        <User className="w-8 h-8 text-[#6D32D9]" />
                      </div>
                      <span className="text-[10px] text-[#64748B] tracking-wider uppercase font-semibold">
                        Student Co-Organizer
                      </span>
                    </div>
                  )}
                </div>

                {/* Member Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-[#071126] uppercase leading-snug">
                      {member.name}
                    </h3>
                    <div className="text-[11px] font-bold tracking-wider text-[#6D32D9] uppercase mt-1">
                      {member.role || 'STUDENT CO-ORGANIZER'}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-gray-100 text-[11px] text-[#475569]">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#071126] hover:text-[#6D32D9] font-bold tracking-wider uppercase transition-colors group/link py-1"
                      >
                        <span>LINKEDIN</span>
                        <ArrowUpRight className="w-3 h-3 text-[#6D32D9] transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}

                    {member.email && (
                      <div className="flex items-center gap-1.5 text-gray-600 truncate py-0.5">
                        <Mail className="w-3.5 h-3.5 text-[#6D32D9] shrink-0" />
                        <a href={`mailto:${member.email}`} className="truncate hover:underline">
                          {member.email}
                        </a>
                      </div>
                    )}

                    {member.phone && (
                      <div className="flex items-center gap-1.5 text-gray-600 py-0.5">
                        <Phone className="w-3.5 h-3.5 text-[#6D32D9] shrink-0" />
                        <a href={`tel:${member.phone}`} className="hover:underline">
                          {member.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

