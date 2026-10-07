 'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuantumStrip from '@/components/QuantumStrip';
import JoinCommunity from '@/components/JoinCommunity';
import { getProjects } from '@/lib/db';
import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function ProjectDetailPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      const projects = await getProjects();
      const slug = params?.projectSlug as string;
      const found = projects.find((p) => p.slug === slug) || projects[0];
      setProject(found || null);
      setLoading(false);
    }
    loadProject();
  }, [params]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-24 text-center font-tech-mono text-sm text-[#64748B]">
          Loading project...
        </div>
        <Footer />
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
          <h1 className="font-serif-display text-3xl text-[#071126]">Project Not Found</h1>
          <Link href="/projects" className="btn-primary">Back to Projects</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-white pt-10 pb-12 border-b border-[#EAEAEA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-tech-mono text-xs font-semibold text-[#64748B] hover:text-[#6D32D9] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO PROJECTS</span>
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="font-tech-mono text-xs font-semibold tracking-widest text-[#6D32D9] uppercase">
              • VQC PROJECT
            </span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#071126] tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base text-[#64748B] font-sans">
            {project.description}
          </p>
        </div>
      </section>

      <QuantumStrip />

      {/* Detail Body */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {project.imageUrl && (
            <div className="relative aspect-[16/9] w-full border border-[#E5E7EB] overflow-hidden shadow-sm">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="space-y-6 text-slate-700 leading-relaxed font-sans text-base">
            <h2 className="font-serif-display text-3xl text-[#071126]">Project Scope & Methodology</h2>
            <p>
              This initiative within the Vishnu Quantum Club investigates computational complexity boundaries, quantum gate fidelities, and optimization of noise-resilient circuits.
            </p>
            <p>
              Students design and test quantum algorithms using Qiskit statevector simulators and explore execution on actual quantum hardware backends.
            </p>

            <div className="flex items-center gap-4 pt-6">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-xs font-tech-mono uppercase"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <JoinCommunity />
      <Footer />
    </main>
  );
}
