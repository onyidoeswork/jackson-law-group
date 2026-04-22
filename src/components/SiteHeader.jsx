import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function SiteHeader({ onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(window.location.pathname !== '/');

  useEffect(() => {
    if (window.location.pathname !== '/') return;
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-md' : 'shadow-none'}`}
      style={{ backgroundColor: isScrolled ? '#ffffff' : 'transparent' }}
    >
      {/* LOGO (FIXED) */}
      <div className="flex items-center">
        <a
          href="/"
          className={`inline-flex items-center transition-all duration-300 ${
            isScrolled ? '' : 'drop-shadow-[0_0_14px_rgba(255,255,255,0.75)]'
          }`}
          aria-label="Go to home"
        >
          <img
            src="https://media.base44.com/images/public/69dc55dbe71c33c9efd9e381/5e3a90be8_JacksonLegalNewLogo.png"
            alt="Jackson Legal Group P.C."
            className="h-14 w-auto object-contain transition-all duration-300"
          />
        </a>
      </div>

      {/* DESKTOP NAV */}
      <nav className={`hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-[#3a3a3a]' : 'text-white'}`}>
        <a href="#results" className="hover:text-[#c5a043] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043]">Results</a>
        <a href="#practice-areas" className="hover:text-[#c5a043] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043]">Practice Areas</a>
        <a href="#team" className="hover:text-[#c5a043] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043]">Our Team</a>
        <a href="/about" className="hover:text-[#c5a043] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043]">About Janai</a>
        <a href="#critical-action" className="hover:text-[#c5a043] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043]">Contact Us</a>
        <a href="tel:+12125225766" className={`p-2 rounded-sm border transition-colors hover:border-[#c5a043] hover:text-[#c5a043] ${isScrolled ? 'border-[#3a3a3a]/30' : 'border-white/40'}`}>
          <Phone size={16} />
        </a>
        <button
          onClick={onOpenModal}
          className="bg-[#c5a043] text-white px-4 py-2 rounded-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043] focus-visible:ring-offset-4 text-xs"
        >
          Free Case Review
        </button>
      </nav>

      {/* MOBILE */}
      <div className="lg:hidden flex items-center gap-3">
        <a href="tel:+12125225766" className={`transition-colors duration-300 ${isScrolled ? 'text-[#3a3a3a]' : 'text-white'} hover:text-[#c5a043]`}>
          <Phone size={22} />
        </a>
        <button className={`focus-visible:outline-none transition-colors duration-300 ${isScrolled ? 'text-[#3a3a3a]' : 'text-white'}`} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-[#e4e4e7] shadow-lg lg:hidden z-50 p-6 flex flex-col gap-4">
          <a href="#results" className="font-bold uppercase tracking-widest text-sm hover:text-[#c5a043] transition-colors" onClick={() => setMobileOpen(false)}>Results</a>
          <a href="#practice-areas" className="font-bold uppercase tracking-widest text-sm hover:text-[#c5a043] transition-colors" onClick={() => setMobileOpen(false)}>Practice Areas</a>
          <a href="#team" className="font-bold uppercase tracking-widest text-sm hover:text-[#c5a043] transition-colors" onClick={() => setMobileOpen(false)}>Our Team</a>
          <a href="/about" className="font-bold uppercase tracking-widest text-sm hover:text-[#c5a043] transition-colors" onClick={() => setMobileOpen(false)}>About Janai</a>
          <a href="#critical-action" className="font-bold uppercase tracking-widest text-sm hover:text-[#c5a043] transition-colors" onClick={() => setMobileOpen(false)}>Contact Us</a>
          <button onClick={() => { onOpenModal(); setMobileOpen(false); }} className="bg-[#c5a043] text-white px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-sm">
            Free Case Review
          </button>
        </div>
      )}
    </header>
  );
}