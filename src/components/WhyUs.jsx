import React from 'react';
import { Gavel, ShieldCheck, Phone } from 'lucide-react';

const reasons = [
  { icon: Gavel, title: 'Trial-Tested Aggression', desc: 'Many firms just want a quick settlement. We have the resources and reputation to take your case all the way to a jury if necessary.' },
  { icon: ShieldCheck, title: 'No Fee Unless We Win', desc: 'You pay absolutely nothing out of pocket. We advance all costs and only get paid if we recover money for you.' },
  { icon: Phone, title: '24/7 Direct Access', desc: "You won't be passed off to paralegals. You get direct communication with your attorney whenever you need them." },
];

export default function WhyUs() {
  return (
    <section id="team" className="w-full py-16 sm:py-24 px-5 sm:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
      <div className="flex-1 space-y-8 sm:space-y-10">
        <div className="space-y-4">
          <h2 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Big Insurance<br />
            <span className="text-[#B8974D]">Fears Us.</span>
          </h2>
          <p className="text-[#B8974D] font-black uppercase tracking-[0.3em] text-[10px] pt-4">WE PREPARE EVERY CASE FOR TRIAL.</p>
        </div>
        <p className="text-lg sm:text-xl text-[#71717a] leading-relaxed max-w-2xl font-medium">
          We prepare every case as if it's going to trial. When insurance companies see our name, they know we mean business. We don't just settle — we fight for the maximum value of your claim.
        </p>
        <div className="space-y-8 sm:space-y-12 pt-4 sm:pt-8">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex items-start sm:items-center gap-5 sm:gap-8 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F7F7F7] flex items-center justify-center flex-shrink-0 border border-[#e4e4e7] transition-all duration-300 group-hover:bg-[#c5a043] group-hover:border-[#c5a043]">
                <Icon size={22} className="text-[#c5a043] transition-colors duration-300 group-hover:text-white" />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-xl sm:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h4>
                <p className="text-[#71717a] text-sm leading-relaxed max-w-md">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 relative lg:sticky lg:top-8 w-full">
        <div className="relative overflow-hidden rounded-sm shadow-2xl group">
          <img
            src="https://uxmagic.blob.core.windows.net/components/uploads/PHOTO-2026-04-06-17-41-25-1775845359507-61f02v9r3vu.jpg"
            alt="Janai N. Jackson"
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute -bottom-4 sm:-bottom-6 right-0 sm:-right-6 bg-white p-5 sm:p-8 shadow-2xl border-l-8 border-[#c5a043] max-w-xs hover:-translate-y-2 transition-transform duration-300">
          <h4 className="font-black text-xl sm:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>Janai N. Jackson</h4>
          <p className="text-[10px] text-[#c5a043] uppercase tracking-[0.3em] font-black mt-2">Founding Partner</p>
        </div>
      </div>
    </section>
  );
}