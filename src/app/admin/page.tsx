'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuantumStrip from '@/components/QuantumStrip';
import {
  getProjects, saveProject, deleteProject,
  getTeamMembers, saveTeamMember, deleteTeamMember,
  getResources, saveResource, deleteResource,
} from '@/lib/db';
import { Project, TeamMember, Resource } from '@/types';
import { Plus, Trash2, Edit2, Lock, Check } from 'lucide-react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'projects' | 'team' | 'resources'>('projects');

  // Data states
  const [projects, setProjects] = useState<Project[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);

  // Editing state
  const [editingItem, setEditingItem] = useState<any>(null);
  const [successMsg, setSuccessMsg] = useState('');

  const loadAll = async () => {
    const [p, t, r] = await Promise.all([
      getProjects(),
      getTeamMembers(),
      getResources(),
    ]);
    setProjects(p);
    setTeam(t);
    setResources(r);
  };

  useEffect(() => {
    loadAll();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'quantum2026' || password === 'admin' || password === 'vishnu') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid passcode. Default is "quantum2026" or "admin".');
    }
  };

  const showNotification = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-white pt-10 pb-10 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm sm:text-[15px] font-bold tracking-[0.18em] text-[#6D32D9] uppercase">
              • CLUB MANAGEMENT
            </span>
            <span className="inline-block w-16 sm:w-20 h-[2.5px] bg-gradient-to-r from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full" />
          </div>
          <h1 className="font-serif-display text-4xl text-[#071126]">
            Admin Control Center<span className="text-[#6D32D9]">.</span>
          </h1>
        </div>
      </section>

      <QuantumStrip />

      <section className="py-12 bg-slate-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isAuthenticated ? (
            /* Admin Login Form */
            <div className="max-w-md mx-auto bg-white border border-[#E5E7EB] p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#F1EBFF] text-[#6D32D9] flex items-center justify-center mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="font-serif-display text-2xl text-[#071126] mb-2">
                Restricted Access
              </h2>
              <p className="text-xs text-[#64748B] font-sans mb-6">
                Enter your administrative key to manage projects, team rosters, and learning resources.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block font-tech-mono text-xs font-semibold uppercase tracking-wider text-[#071126] mb-1">
                    Passcode
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter passcode (e.g. quantum2026)"
                    className="w-full px-3.5 py-2 text-sm border border-[#E2E8F0] focus:outline-none focus:border-[#6D32D9]"
                  />
                  {authError && (
                    <p className="text-xs text-red-600 mt-1 font-sans">{authError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-xs font-tech-mono uppercase justify-center py-3"
                >
                  ACCESS DASHBOARD
                </button>
              </form>
            </div>
          ) : (
            /* Admin Control Interface */
            <div className="space-y-6">
              {/* Notification Banner */}
              {successMsg && (
                <div className="bg-[#F1EBFF] border border-[#6D32D9]/30 text-[#6D32D9] px-4 py-3 flex items-center gap-2 text-xs font-tech-mono">
                  <Check className="w-4 h-4" />
                  <span>{successMsg}</span>
                </div>
              )}

              {/* Navigation Tabs */}
              <div className="flex items-center gap-2 border-b border-gray-200">
                {(['projects', 'team', 'resources'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setEditingItem(null);
                    }}
                    className={`px-5 py-3 text-xs font-tech-mono font-bold uppercase tracking-wider border-b-2 transition-colors ${
                      activeTab === tab
                        ? 'border-[#6D32D9] text-[#6D32D9] bg-white'
                        : 'border-transparent text-[#64748B] hover:text-[#071126]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* TAB 1: PROJECTS */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif-display text-2xl text-[#071126]">Projects Management</h2>
                    <button
                      onClick={() =>
                        setEditingItem({
                          title: '',
                          slug: `project-${Date.now()}`,
                          description: '',
                          imageUrl: '/images/project-circuit-lab.jpg',
                          githubUrl: 'https://github.com',
                        })
                      }
                      className="btn-primary text-xs font-tech-mono uppercase"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add New Project</span>
                    </button>
                  </div>

                  {editingItem && (
                    <div className="bg-white border border-[#6D32D9] p-6 space-y-4">
                      <h3 className="font-serif-display text-xl text-[#071126]">Project Details</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-tech-mono">
                        <div>
                          <label className="block mb-1 font-semibold">Title</label>
                          <input
                            type="text"
                            value={editingItem.title}
                            onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                            className="w-full p-2 border border-gray-300"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 font-semibold">Slug</label>
                          <input
                            type="text"
                            value={editingItem.slug}
                            onChange={(e) => setEditingItem({ ...editingItem, slug: e.target.value })}
                            className="w-full p-2 border border-gray-300"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 font-semibold">Image URL (Cloudinary / Local)</label>
                          <input
                            type="text"
                            value={editingItem.imageUrl}
                            onChange={(e) => setEditingItem({ ...editingItem, imageUrl: e.target.value })}
                            className="w-full p-2 border border-gray-300"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 font-semibold">GitHub Repository URL</label>
                          <input
                            type="text"
                            value={editingItem.githubUrl}
                            onChange={(e) => setEditingItem({ ...editingItem, githubUrl: e.target.value })}
                            className="w-full p-2 border border-gray-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-tech-mono text-xs font-semibold mb-1">Description</label>
                        <textarea
                          rows={3}
                          value={editingItem.description}
                          onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                          className="w-full p-2 border border-gray-300 text-xs font-sans"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={async () => {
                            await saveProject(editingItem);
                            setEditingItem(null);
                            await loadAll();
                            showNotification('Project saved.');
                          }}
                          className="btn-purple text-xs font-tech-mono uppercase"
                        >
                          Save Project
                        </button>
                        <button onClick={() => setEditingItem(null)} className="btn-secondary text-xs font-tech-mono uppercase">
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="bg-white border border-[#E5E7EB] overflow-x-auto">
                    <table className="w-full text-left text-xs font-sans">
                      <thead className="bg-slate-100 font-tech-mono uppercase text-[#64748B] border-b">
                        <tr>
                          <th className="p-3">Title</th>
                          <th className="p-3">Description</th>
                          <th className="p-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {projects.map((proj) => (
                          <tr key={proj.slug} className="hover:bg-slate-50">
                            <td className="p-3 font-semibold text-[#071126]">{proj.title}</td>
                            <td className="p-3 text-gray-500 truncate max-w-xs">{proj.description}</td>
                            <td className="p-3 text-right space-x-2">
                              <button onClick={() => setEditingItem(proj)} className="p-1 hover:text-[#6D32D9]">
                                <Edit2 className="w-4 h-4 inline" />
                              </button>
                              <button
                                onClick={async () => {
                                  if (confirm('Delete this project?')) {
                                    await deleteProject(proj.id || proj.slug);
                                    await loadAll();
                                    showNotification('Project deleted.');
                                  }
                                }}
                                className="p-1 hover:text-red-600"
                              >
                                <Trash2 className="w-4 h-4 inline" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 2: TEAM */}
              {activeTab === 'team' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif-display text-2xl text-[#071126]">Team & Leadership</h2>
                    <button
                      onClick={() =>
                        setEditingItem({
                          name: '',
                          role: 'STUDENT CO-ORGANIZER',
                          category: 'student-co-organizer',
                          imageUrl: '/images/placeholder.jpg',
                          email: '',
                          phone: '',
                          linkedin: 'https://linkedin.com',
                          order: team.length + 1,
                          isActive: true,
                        })
                      }
                      className="btn-primary text-xs font-tech-mono uppercase"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Member</span>
                    </button>
                  </div>

                  {editingItem && (
                    <div className="bg-white border border-[#6D32D9] p-6 space-y-4">
                      <h3 className="font-serif-display text-xl text-[#071126]">Member Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-tech-mono">
                        <div>
                          <label className="block mb-1 font-semibold">Full Name</label>
                          <input
                            type="text"
                            value={editingItem.name}
                            onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                            className="w-full p-2 border border-gray-300 uppercase"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 font-semibold">Role</label>
                          <input
                            type="text"
                            value={editingItem.role}
                            onChange={(e) => setEditingItem({ ...editingItem, role: e.target.value })}
                            className="w-full p-2 border border-gray-300 uppercase"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 font-semibold">Email</label>
                          <input
                            type="email"
                            value={editingItem.email}
                            onChange={(e) => setEditingItem({ ...editingItem, email: e.target.value })}
                            className="w-full p-2 border border-gray-300"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 font-semibold">Phone</label>
                          <input
                            type="text"
                            value={editingItem.phone}
                            onChange={(e) => setEditingItem({ ...editingItem, phone: e.target.value })}
                            className="w-full p-2 border border-gray-300"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 font-semibold">Photo URL (Cloudinary / Local Path)</label>
                          <input
                            type="text"
                            value={editingItem.imageUrl}
                            onChange={(e) => setEditingItem({ ...editingItem, imageUrl: e.target.value })}
                            placeholder="/images/team-1.jpg or https://res.cloudinary.com/..."
                            className="w-full p-2 border border-gray-300"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 font-semibold">LinkedIn</label>
                          <input
                            type="text"
                            value={editingItem.linkedin}
                            onChange={(e) => setEditingItem({ ...editingItem, linkedin: e.target.value })}
                            className="w-full p-2 border border-gray-300"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={async () => {
                            await saveTeamMember(editingItem);
                            setEditingItem(null);
                            await loadAll();
                            showNotification('Team member saved.');
                          }}
                          className="btn-purple text-xs font-tech-mono uppercase"
                        >
                          Save Member
                        </button>
                        <button onClick={() => setEditingItem(null)} className="btn-secondary text-xs font-tech-mono uppercase">
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="bg-white border border-[#E5E7EB] overflow-x-auto">
                    <table className="w-full text-left text-xs font-sans">
                      <thead className="bg-slate-100 font-tech-mono uppercase text-[#64748B] border-b">
                        <tr>
                          <th className="p-3">Name</th>
                          <th className="p-3">Role</th>
                          <th className="p-3">Email</th>
                          <th className="p-3">Phone</th>
                          <th className="p-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {team.map((m) => (
                          <tr key={m.id || m.name} className="hover:bg-slate-50">
                            <td className="p-3 font-semibold text-[#071126] font-tech-mono uppercase">{m.name}</td>
                            <td className="p-3 text-[#6D32D9] font-tech-mono uppercase">{m.role}</td>
                            <td className="p-3 text-gray-500 font-tech-mono">{m.email}</td>
                            <td className="p-3 text-gray-500 font-tech-mono">{m.phone}</td>
                            <td className="p-3 text-right space-x-2">
                              <button onClick={() => setEditingItem(m)} className="p-1 hover:text-[#6D32D9]">
                                <Edit2 className="w-4 h-4 inline" />
                              </button>
                              <button
                                onClick={async () => {
                                  if (confirm('Delete this team member?')) {
                                    await deleteTeamMember(m.id || m.name);
                                    await loadAll();
                                    showNotification('Team member deleted.');
                                  }
                                }}
                                className="p-1 hover:text-red-600"
                              >
                                <Trash2 className="w-4 h-4 inline" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 3: RESOURCES */}
              {activeTab === 'resources' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif-display text-2xl text-[#071126]">Resources & Guides</h2>
                    <button
                      onClick={() =>
                        setEditingItem({
                          title: '',
                          description: '',
                          category: 'fundamentals',
                          url: 'https://qiskit.org',
                        })
                      }
                      className="btn-primary text-xs font-tech-mono uppercase"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Resource</span>
                    </button>
                  </div>

                  {editingItem && (
                    <div className="bg-white border border-[#6D32D9] p-6 space-y-4">
                      <h3 className="font-serif-display text-xl text-[#071126]">Resource Details</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-tech-mono">
                        <div>
                          <label className="block mb-1 font-semibold">Title</label>
                          <input
                            type="text"
                            value={editingItem.title}
                            onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                            className="w-full p-2 border border-gray-300"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 font-semibold">Category</label>
                          <select
                            value={editingItem.category}
                            onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                            className="w-full p-2 border border-gray-300"
                          >
                            <option value="fundamentals">Fundamentals</option>
                            <option value="qiskit">Qiskit</option>
                            <option value="research">Research</option>
                            <option value="tools">Tools</option>
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block mb-1 font-semibold">URL</label>
                          <input
                            type="text"
                            value={editingItem.url}
                            onChange={(e) => setEditingItem({ ...editingItem, url: e.target.value })}
                            className="w-full p-2 border border-gray-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-tech-mono text-xs font-semibold mb-1">Description</label>
                        <textarea
                          rows={3}
                          value={editingItem.description}
                          onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                          className="w-full p-2 border border-gray-300 text-xs font-sans"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={async () => {
                            await saveResource(editingItem);
                            setEditingItem(null);
                            await loadAll();
                            showNotification('Resource saved.');
                          }}
                          className="btn-purple text-xs font-tech-mono uppercase"
                        >
                          Save Resource
                        </button>
                        <button onClick={() => setEditingItem(null)} className="btn-secondary text-xs font-tech-mono uppercase">
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="bg-white border border-[#E5E7EB] overflow-x-auto">
                    <table className="w-full text-left text-xs font-sans">
                      <thead className="bg-slate-100 font-tech-mono uppercase text-[#64748B] border-b">
                        <tr>
                          <th className="p-3">Title</th>
                          <th className="p-3">Category</th>
                          <th className="p-3">URL</th>
                          <th className="p-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {resources.map((r) => (
                          <tr key={r.id || r.title} className="hover:bg-slate-50">
                            <td className="p-3 font-semibold text-[#071126]">{r.title}</td>
                            <td className="p-3">
                              <span className="bg-[#F1EBFF] text-[#6D32D9] font-tech-mono px-2 py-0.5 text-[10px] uppercase">
                                {r.category}
                              </span>
                            </td>
                            <td className="p-3 text-gray-500 font-tech-mono truncate max-w-xs">{r.url}</td>
                            <td className="p-3 text-right space-x-2">
                              <button onClick={() => setEditingItem(r)} className="p-1 hover:text-[#6D32D9]">
                                <Edit2 className="w-4 h-4 inline" />
                              </button>
                              <button
                                onClick={async () => {
                                  if (confirm('Delete this resource?')) {
                                    await deleteResource(r.id || r.title);
                                    await loadAll();
                                    showNotification('Resource deleted.');
                                  }
                                }}
                                className="p-1 hover:text-red-600"
                              >
                                <Trash2 className="w-4 h-4 inline" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
