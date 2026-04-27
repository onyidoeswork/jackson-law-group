import React from 'react';
import { useState } from 'react';
import { CheckCircle, Clock } from 'lucide-react';

export default function TopBar() {
  const [lang, setLang] = useState('EN');

  return (
    <div className="w-full bg-[#f5f5f5] py-2 px-6 border-b border-[#e4e4e7] flex justify-between items-center text-xs font-semibold tracking-tight">
      <div className="flex gap-6">
        <span className="flex items-center gap-1.5 text-[#71717a]">
          <CheckCircle size={12} className="text-[#c5a043]" /> No Fee Unless We Win
        </span>
        <span className="flex items-center gap-1.5 text-[#71717a]">
          <Clock size={12} className="text-[#c5a043]" /> Available 24/7
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-white border border-[#e4e4e7] rounded-full px-2 py-0.5 font-bold text-[10px] tracking-widest shadow-sm">
          <button onClick={() => setLang('EN')} className={`px-2 py-1 transition-colors ${lang === 'EN' ? 'text-[#c5a043]' : 'text-[#71717a] hover:text-[#3a3a3a]'}`}>EN</button>
          <div className="w-px h-3 bg-[#e4e4e7] mx-1"></div>
          <button onClick={() => setLang('ES')} className={`px-2 py-1 transition-colors ${lang === 'ES' ? 'text-[#c5a043]' : 'text-[#71717a] hover:text-[#3a3a3a]'}`}>ES</button>
        </div>
        <div className="font-bold text-[#3a3a3a] hidden sm:block">Call Now: (212) JACKSON</div>
      </div>
    </div>
  );
}