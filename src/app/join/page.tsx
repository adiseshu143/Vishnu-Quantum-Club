'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuantumStrip from '@/components/QuantumStrip';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    rollNumber: '',
    email: '',
    phone: '',
    department: 'Computer Science & Engineering',
    year: '2nd Year',
    interests: [] as string[],
    motivation: '',
  });

  const targetEmail = '24pa1a5762@vishnu.edu.in';

  const interestOptions = [
    'Quantum Algorithms',
    'Quantum Hardware & Circuits',
    'Quantum Machine Learning',
    'Quantum Cryptography',
    'Qiskit Programming',
    'Research & Paper Publishing',
  ];

  const handleInterestToggle = (item: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter((i) => i !== item)
        : [...prev.interests, item],
    }));
  };

  const getMailtoUrl = () => {
    const subject = `[Vishnu Quantum Club] Membership Application - ${form.fullName} (${form.rollNumber})`;
    const body = `VISHNU QUANTUM CLUB - MEMBERSHIP APPLICATION
=====================================================

STUDENT INFORMATION:
- Full Name: ${form.fullName}
- College Roll Number: ${form.rollNumber}
- College Email: ${form.email}
- Phone Number: ${form.phone}
- Department: ${form.department}
- Year of Study: ${form.year}

AREAS OF INTEREST:
${form.interests.length > 0 ? form.interests.map((i) => `• ${i}`).join('\n') : '• General Quantum Computing'}

MOTIVATION / GOALS:
${form.motivation || 'N/A'}

=====================================================
Submitted via Vishnu Quantum Club Portal`;

    return `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Post to API endpoint
      await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, targetEmail }),
      }).catch((err) => console.log('API call notice:', err));

      // 2. Trigger mailto link so it prepares the email to 24pa1a5762@vishnu.edu.in
      const mailtoUrl = getMailtoUrl();
      const mailWindow = window.open(mailtoUrl, '_blank');
      if (!mailWindow || mailWindow.closed || typeof mailWindow.closed === 'undefined') {
        window.location.href = mailtoUrl;
      }
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="bg-white pt-12 pb-14 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal yOffset={14} duration={0.45}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm sm:text-[15px] font-bold tracking-[0.18em] text-[#6D32D9] uppercase">
                • MEMBERSHIP APPLICATION
              </span>
              <span className="inline-block w-16 sm:w-20 h-[2.5px] bg-gradient-to-r from-[#6D32D9] via-[#6D32D9]/40 to-transparent rounded-full" />
            </div>
          </Reveal>

          <Reveal yOffset={20} delay={0.1} duration={0.65}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#071126] tracking-tight mb-4">
              Join Vishnu Quantum Club<span className="text-[#6D32D9]">.</span>
            </h1>
          </Reveal>

          <Reveal yOffset={14} delay={0.2} duration={0.55}>
            <p className="text-sm text-[#64748B] max-w-2xl leading-relaxed">
              Open to all passionate undergraduate and postgraduate students at Vishnu Institute of Technology, Bhimavaram. No prior quantum physics experience required.
            </p>
          </Reveal>
        </div>
      </section>

      <QuantumStrip />

      {/* Join Form Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal yOffset={24} duration={0.65}>
            <div className="bg-white border border-[#E5E7EB] p-8 sm:p-12 shadow-sm">
              {submitted ? (
                <div className="text-center py-8 space-y-5">
                  <div className="w-16 h-16 bg-[#F1EBFF] text-[#6D32D9] rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#071126]">
                    Application Submitted Successfully!
                  </h2>
                  <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                    Your application details have been submitted and sent to the administrator.
                  </p>

                  <div className="bg-[#FAF8FE] border border-[#6D32D9]/20 p-5 text-left text-xs text-[#475569] space-y-2 max-w-md mx-auto">
                    <div className="font-bold uppercase tracking-wider text-[#6D32D9]">
                      Summary of submitted details:
                    </div>
                    <div><span className="font-semibold text-[#071126]">Name:</span> {form.fullName}</div>
                    <div><span className="font-semibold text-[#071126]">Roll Number:</span> {form.rollNumber}</div>
                    <div><span className="font-semibold text-[#071126]">Email:</span> {form.email}</div>
                    <div><span className="font-semibold text-[#071126]">Department:</span> {form.department} ({form.year})</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary text-xs uppercase active:scale-95 px-6 py-2.5"
                    >
                      SUBMIT ANOTHER RESPONSE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="border-b border-gray-100 pb-4">
                    <h2 className="text-2xl font-bold text-[#071126]">
                      Student Details
                    </h2>
                    <p className="text-xs text-[#64748B] mt-1">
                      Please provide your authentic college registration information.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#071126] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="ENTER FULL NAME"
                        className="w-full px-4 py-2.5 text-sm border border-[#E2E8F0] focus:outline-none focus:border-[#6D32D9] bg-white text-[#071126] placeholder:text-gray-400 placeholder:text-xs placeholder:tracking-wider transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#071126] uppercase tracking-wider mb-2">
                        College Roll Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.rollNumber}
                        onChange={(e) => setForm({ ...form, rollNumber: e.target.value })}
                        placeholder="ENTER COLLEGE ROLL NUMBER"
                        className="w-full px-4 py-2.5 text-sm border border-[#E2E8F0] focus:outline-none focus:border-[#6D32D9] bg-white text-[#071126] placeholder:text-gray-400 placeholder:text-xs placeholder:tracking-wider transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#071126] uppercase tracking-wider mb-2">
                        College Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ENTER COLLEGE EMAIL ADDRESS"
                        className="w-full px-4 py-2.5 text-sm border border-[#E2E8F0] focus:outline-none focus:border-[#6D32D9] bg-white text-[#071126] placeholder:text-gray-400 placeholder:text-xs placeholder:tracking-wider transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#071126] uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="ENTER PHONE NUMBER"
                        className="w-full px-4 py-2.5 text-sm border border-[#E2E8F0] focus:outline-none focus:border-[#6D32D9] bg-white text-[#071126] placeholder:text-gray-400 placeholder:text-xs placeholder:tracking-wider transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#071126] uppercase tracking-wider mb-2">
                        Department
                      </label>
                      <select
                        value={form.department}
                        onChange={(e) => setForm({ ...form, department: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border border-[#E2E8F0] focus:outline-none focus:border-[#6D32D9] bg-white text-[#071126]"
                      >
                        <option>Computer Science & Engineering</option>
                        <option>Artificial Intelligence & Data Science</option>
                        <option>Information Technology</option>
                        <option>Electronics & Communication Engineering</option>
                        <option>Electrical & Electronics Engineering</option>
                        <option>Mechanical Engineering</option>
                        <option>Civil Engineering</option>
                        <option>Computer Science & Business Systems</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#071126] uppercase tracking-wider mb-2">
                        Year of Study
                      </label>
                      <select
                        value={form.year}
                        onChange={(e) => setForm({ ...form, year: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border border-[#E2E8F0] focus:outline-none focus:border-[#6D32D9] bg-white text-[#071126]"
                      >
                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year</option>
                        <option>4th Year</option>
                        <option>Postgraduate / Research</option>
                      </select>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <label className="block text-xs font-semibold text-[#071126] uppercase tracking-wider">
                      Areas of Interest
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {interestOptions.map((item) => (
                        <label
                          key={item}
                          className={`flex items-center gap-3 p-3 border text-xs cursor-pointer transition-all duration-200 ${
                            form.interests.includes(item)
                              ? 'border-[#6D32D9] bg-[#F1EBFF] text-[#6D32D9] font-medium shadow-2xs'
                              : 'border-[#E2E8F0] hover:bg-slate-50 text-[#475569]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={form.interests.includes(item)}
                            onChange={() => handleInterestToggle(item)}
                            className="accent-[#6D32D9] w-4 h-4"
                          />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Motivation */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-semibold text-[#071126] uppercase tracking-wider">
                      Why do you want to join Vishnu Quantum Club? (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={form.motivation}
                      onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                      placeholder="ENTER YOUR MOTIVATION OR WHAT YOU WANT TO EXPLORE..."
                      className="w-full px-4 py-2.5 text-sm border border-[#E2E8F0] focus:outline-none focus:border-[#6D32D9] bg-white text-[#071126] placeholder:text-gray-400 placeholder:text-xs placeholder:tracking-wider transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#071126] hover:bg-[#1A2642] active:scale-[0.99] text-white py-4 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group shadow-sm disabled:opacity-75 cursor-pointer"
                    >
                      <span>{isSubmitting ? 'PROCESSING APPLICATION...' : 'SUBMIT MEMBERSHIP APPLICATION'}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

