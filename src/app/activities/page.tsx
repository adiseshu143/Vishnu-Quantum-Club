import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExploreSection from '@/components/ExploreSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import JoinCommunity from '@/components/JoinCommunity';
import QuantumStrip from '@/components/QuantumStrip';

export const metadata = {
  title: 'Activities | Vishnu Quantum Club',
  description: 'Explore the workshops, hackathons, study sessions, and research initiatives organized by Vishnu Quantum Club.',
};

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="bg-white pt-12 pb-14 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm sm:text-[15px] font-bold tracking-[0.18em] text-[#6D32D9] uppercase">
              • ACTIVITIES & EXPLORATION
            </span>
            <span className="inline-block w-16 sm:w-20 h-[2.5px] bg-gradient-to-r from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full" />
          </div>

          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#071126] tracking-tight mb-4">
            Hands-on learning & collaborative innovation<span className="text-[#6D32D9]">.</span>
          </h1>

          <p className="text-sm text-[#64748B] max-w-2xl font-sans">
            From beginner-friendly Qiskit workshops to advanced quantum algorithms research and global hackathons, explore how our members collaborate and grow.
          </p>
        </div>
      </section>

      <QuantumStrip />
      <ExploreSection />
      <ActivitiesSection />
      <JoinCommunity />
      <Footer />
    </main>
  );
}
