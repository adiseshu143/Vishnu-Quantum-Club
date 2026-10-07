'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrganizersSection from '@/components/OrganizersSection';
import TeamSection from '@/components/TeamSection';
import JoinCommunity from '@/components/JoinCommunity';
import QuantumStrip from '@/components/QuantumStrip';
import { getTeamMembers } from '@/lib/db';
import { TeamMember } from '@/types';
import Reveal from '@/components/animations/Reveal';

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    async function loadTeam() {
      const data = await getTeamMembers();
      setTeam(data);
    }
    loadTeam();
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
                • LEADERSHIP & TEAM
              </span>
              <span className="inline-block w-16 sm:w-20 h-[2.5px] bg-gradient-to-r from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full" />
            </div>
          </Reveal>

          <Reveal yOffset={20} delay={0.1} duration={0.65}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#071126] tracking-tight mb-4">
              Faculty leadership & student innovators<span className="text-[#6D32D9]">.</span>
            </h1>
          </Reveal>

          <Reveal yOffset={14} delay={0.2} duration={0.55}>
            <p className="text-sm text-[#64748B] max-w-2xl leading-relaxed">
              Meet the faculty advisors, mentors, and student co-organizers driving quantum computing initiatives at Vishnu Institute of Technology, Bhimavaram.
            </p>
          </Reveal>
        </div>
      </section>

      <QuantumStrip />

      {/* Faculty Organizers */}
      <OrganizersSection />

      {/* Student Team */}
      <TeamSection team={team} />

      <JoinCommunity />
      <Footer />
    </main>
  );
}

