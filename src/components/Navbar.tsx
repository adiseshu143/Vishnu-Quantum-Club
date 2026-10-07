'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'ABOUT', href: '/about' },
    { label: 'ACTIVITIES', href: '/activities' },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'TEAM', href: '/team' },
    { label: 'RESOURCES', href: '/resources' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#EAEAEA] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Left: Brand Logo & Title */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="shrink-0"
        >
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            {/* Quantum Geometric Logo Icon */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center relative shrink-0">
              <svg
                viewBox="0 0 100 100"
                className="w-8 h-8 sm:w-9 sm:h-9 text-[#071126] transition-transform duration-500 group-hover:rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="50" cy="50" r="44" strokeDasharray="3 3" opacity="0.4" />
                <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(0 50 50)" />
                <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" stroke="#6D32D9" />
                <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)" />
                <circle cx="50" cy="50" r="5" fill="#6D32D9" />
              </svg>
            </div>
            <div>
              <div className="text-[14px] sm:text-base md:text-lg font-bold tracking-tight text-[#071126] leading-none">
                VISHNU QUANTUM CLUB
              </div>
              <div className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#64748B] mt-1 font-semibold">
                VISHNU INSTITUTE OF TECHNOLOGY
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Center: Desktop Navigation with subtle stagger */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <Link
                  href={link.href}
                  className={`text-xs font-semibold tracking-wider transition-colors duration-200 py-1 border-b-2 ${
                    isActive
                      ? 'text-[#6D32D9] border-[#6D32D9]'
                      : 'text-[#071126] hover:text-[#6D32D9] border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Right: Join Us CTA Button & Mobile Trigger */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex items-center gap-3 sm:gap-4"
        >
          <Link
            href="/join"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#071126] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#1A2642] active:scale-[0.98] transition-all group shadow-2xs"
          >
            <span>JOIN US</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile hamburger button with min 44x44px touch area */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-[#071126] hover:text-[#6D32D9] hover:bg-slate-100 active:scale-95 rounded-lg transition-all"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="lg:hidden border-t border-[#EAEAEA] bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3 px-3 rounded-md text-xs font-bold tracking-wider transition-colors ${
                  isActive
                    ? 'bg-[#F1EBFF] text-[#6D32D9]'
                    : 'text-[#071126] hover:bg-slate-50 active:bg-slate-100'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-gray-400">→</span>
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#071126] text-white py-3.5 text-xs font-bold uppercase tracking-wider active:scale-[0.98] shadow-sm"
            >
              <span>JOIN US</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

