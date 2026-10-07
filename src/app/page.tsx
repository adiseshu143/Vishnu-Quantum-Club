'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QuantumStrip from '@/components/QuantumStrip';
import AboutClub from '@/components/AboutClub';
import ExploreSection from '@/components/ExploreSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ProjectsSection from '@/components/ProjectsSection';
import OrganizersSection from '@/components/OrganizersSection';
import TeamSection from '@/components/TeamSection';
import ResourcesSection from '@/components/ResourcesSection';
import EcosystemSection from '@/components/EcosystemSection';
import JoinCommunity from '@/components/JoinCommunity';
import Footer from '@/components/Footer';
import { getProjects, getTeamMembers, getResources } from '@/lib/db';
import { Project, TeamMember, Resource } from '@/types';
import { INITIAL_PROJECTS, INITIAL_TEAM, INITIAL_RESOURCES } from '@/data/mockData';

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [team, setTeam] = useState<TeamMember[]>(INITIAL_TEAM);
  const [resources, setResources] = useState<Resource[]>(INITIAL_RESOURCES);

  useEffect(() => {
    async function loadData() {
      try {
        const [projectsData, teamData, resourcesData] = await Promise.all([
          getProjects(),
          getTeamMembers(),
          getResources(),
        ]);

        setProjects(projectsData);
        setTeam(teamData);
        setResources(resourcesData);
      } catch (err) {
        console.error('Error loading data:', err);
      }
    }
    loadData();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. FIRST SCREEN HERO & QUANTUM STRIP */}
      <div className="lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-between">
        <Hero />
        <QuantumStrip />
      </div>

      {/* 3. ABOUT THE CLUB */}
      <AboutClub />

      {/* 5. WHAT WE EXPLORE */}
      <ExploreSection />

      {/* 6. ACTIVITIES */}
      <ActivitiesSection />

      {/* 7. PROJECTS */}
      <ProjectsSection projects={projects} />

      {/* 8. ORGANIZERS (Faculty Leadership) */}
      <OrganizersSection />

      {/* 9. OUR TEAM (Student Co-Organizers) */}
      <TeamSection team={team} />

      {/* 10. LEARNING & RESOURCES */}
      <ResourcesSection resources={resources} />

      {/* 11. OUR ECOSYSTEM */}
      <EcosystemSection />

      {/* 12. JOIN COMMUNITY */}
      <JoinCommunity />

      {/* 13. FOOTER */}
      <Footer />
    </main>
  );
}
