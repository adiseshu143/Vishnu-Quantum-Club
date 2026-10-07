'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutClub from '@/components/AboutClub';
import EcosystemSection from '@/components/EcosystemSection';
import JoinCommunity from '@/components/JoinCommunity';
import QuantumStrip from '@/components/QuantumStrip';
import { Target, Compass, Sparkles } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="bg-white pt-12 pb-14 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal yOffset={14} duration={0.45}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm sm:text-[15px] font-bold tracking-[0.18em] text-[#6D32D9] uppercase">
                • ABOUT VISHNU QUANTUM CLUB
              </span>
              <span className="inline-block w-16 sm:w-20 h-[2.5px] bg-gradient-to-r from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full" />
            </div>
          </Reveal>

          <Reveal yOffset={20} delay={0.1} duration={0.65}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#071126] tracking-tight mb-4">
              Advancing quantum literacy & research<span className="text-[#6D32D9]">.</span>
            </h1>
          </Reveal>

          <Reveal yOffset={14} delay={0.2} duration={0.55}>
            <p className="text-xs text-[#64748B] uppercase tracking-wider font-semibold">
              VISHNU INSTITUTE OF TECHNOLOGY — BHIMAVARAM, ANDHRA PRADESH
            </p>
          </Reveal>
        </div>
      </section>

      <QuantumStrip />

      {/* Main About Component */}
      <AboutClub />

      {/* Mission and Vision Grid - Vertical on mobile, 3-col on desktop */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer
            staggerDelay={0.1}
            initialDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <StaggerItem className="w-full h-full">
              <div className="premium-card-hover p-6 sm:p-8 bg-white border border-[#E5E7EB] space-y-4 h-full group">
                <div className="w-10 h-10 flex items-center justify-center text-[#6D32D9]">
                  <Target className="w-7 h-7 stroke-[1.5] premium-icon-hover" />
                </div>
                <h2 className="text-2xl font-bold text-[#071126]">Our Mission</h2>
                <p className="text-sm text-[#475569] leading-relaxed">
                  To build an active, student-driven center of excellence in quantum computing at Vishnu Institute of Technology, bridging theoretical physics, computer science, and practical applications.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="w-full h-full">
              <div className="premium-card-hover p-6 sm:p-8 bg-white border border-[#E5E7EB] space-y-4 h-full group">
                <div className="w-10 h-10 flex items-center justify-center text-[#6D32D9]">
                  <Compass className="w-7 h-7 stroke-[1.5] premium-icon-hover" />
                </div>
                <h2 className="text-2xl font-bold text-[#071126]">Our Vision</h2>
                <p className="text-sm text-[#475569] leading-relaxed">
                  To empower engineering students to lead quantum computing breakthroughs, participate in global quantum challenges, and contribute to cutting-edge research publications.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="w-full h-full">
              <div className="premium-card-hover p-6 sm:p-8 bg-white border border-[#E5E7EB] space-y-4 h-full group">
                <div className="w-10 h-10 flex items-center justify-center text-[#6D32D9]">
                  <Sparkles className="w-7 h-7 stroke-[1.5] premium-icon-hover" />
                </div>
                <h2 className="text-2xl font-bold text-[#071126]">Our Culture</h2>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Curiosity, rigorous scientific inquiry, hands-on experimentation with Qiskit and quantum hardware simulators, open collaboration, and peer-to-peer mentorship.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <EcosystemSection />
      <JoinCommunity />
      <Footer />
    </main>
  );
}

