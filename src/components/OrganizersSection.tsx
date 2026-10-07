'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import Reveal from './animations/Reveal';
import { StaggerContainer, StaggerItem } from './animations/Stagger';

export interface Organizer {
  id: string;
  name: string;
  role: string;
  designation: string;
  imageUrl: string;
}

export const INITIAL_ORGANIZERS: Organizer[] = [
  {
    id: 'dr-b-sri-devi',
    name: 'DR. B. SRI DEVI',
    role: 'LEAD ORGANIZER',
    designation: 'Associate Professor (CSE)',
    imageUrl: 'https://res.cloudinary.com/dzzl7mnqf/image/upload/v1791337728/1754908141507.webp',
  },
  {
    id: 'prof-m-sri-lakshmi',
    name: 'PROF. M. SRI LAKSHMI',
    role: 'ORGANIZER',
    designation: 'Vice Principal, Professor & Dean Student Affairs',
    imageUrl: 'https://res.cloudinary.com/dzzl7mnqf/image/upload/v1791337728/5c6195c5-ab22-40bd-8050-79a1ba16170c.webp',
  },
  {
    id: 'dr-r-srinivasa-raju',
    name: 'DR. R. SRINIVASA RAJU',
    role: 'ORGANIZER',
    designation: 'Head of the Department, CSE',
    imageUrl: 'https://res.cloudinary.com/dzzl7mnqf/image/upload/v1791337729/31da9794-dc31-420f-ade5-bbb315e75825.webp',
  },
  {
    id: 'mr-g-harshavardhan',
    name: 'MR. G. HARSHAVARDHAN',
    role: 'ORGANIZER',
    designation: 'Assistant Professor, Department of IT',
    imageUrl: 'https://res.cloudinary.com/dzzl7mnqf/image/upload/v1791337729/IMG_3170.webp',
  },
];

interface OrganizersSectionProps {
  organizers?: Organizer[];
}

export default function OrganizersSection({ organizers }: OrganizersSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const items = organizers && organizers.length > 0 ? organizers : INITIAL_ORGANIZERS;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#FAF8FE] py-20 sm:py-24 lg:py-28 border-b border-[#EAEAEA]" id="organizers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal yOffset={16} duration={0.5}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="flex items-start gap-3">
              {/* Vertical Purple Indicator Line */}
              <div className="w-[3px] h-9 sm:h-10 bg-gradient-to-b from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#6D32D9] tracking-wider">04</span>
                  <span className="text-[#6D32D9] font-bold text-xs sm:text-sm">•</span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-[#071126] uppercase leading-none inline">
                    ORGANIZERS
                  </h2>
                </div>
                <p className="text-xs text-[#64748B] mt-1.5 font-medium">
                  Faculty leadership and official event organizers
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Organizers Grid: 1-col on mobile, 2-col on tablet, 4-col on desktop */}
        <StaggerContainer
          staggerDelay={0.08}
          initialDelay={0.15}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {items.map((org) => (
            <StaggerItem
              key={org.id}
              className="w-full h-full flex flex-col"
            >
              <div className="premium-card-hover border border-[#E5E7EB] bg-white overflow-hidden flex flex-col flex-1 h-full group w-full">
                {/* Photo Area with Cloudinary Image */}
                <div className="relative aspect-[4/5] w-full bg-[#F8FAFC] overflow-hidden border-b border-[#E5E7EB] flex items-center justify-center shrink-0">
                  {org.imageUrl ? (
                    <Image
                      src={org.imageUrl}
                      alt={org.name}
                      fill
                      className="object-cover object-top premium-image-hover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center bg-slate-100 text-[#071126] w-full h-full">
                      <User className="w-12 h-12 text-[#6D32D9] mb-2" />
                      <span className="text-[10px] text-[#64748B] tracking-wider uppercase font-semibold">
                        Faculty Organizer
                      </span>
                    </div>
                  )}
                </div>

                {/* Organizer Information */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-[#071126] uppercase leading-snug">
                      {org.name}
                    </h3>
                    <div className="text-[11px] font-bold tracking-wider text-[#6D32D9] uppercase mt-1">
                      {org.role}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100 text-xs text-[#475569] leading-relaxed">
                    {org.designation}
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

