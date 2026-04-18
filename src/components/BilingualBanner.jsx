import { Clock, Languages } from 'lucide-react';

export default function BilingualBanner() {
  return (
    <section className="w-full bg-[#c5a043] py-12 px-5 sm:px-8 relative overflow-hidden group" style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="flex items-center gap-3">
            <span className="bg-white text-[#c5a043] px-6 py-2 rounded-full font-black text-base tracking-tighter shadow-lg transform -rotate-2">CALL TODAY!</span>
          </div>
          <a href="tel:+12125225766" className="space-y-1 group/phone">
            <div className="text-white font-black text-4xl sm:text-6xl md:text-7xl lg:text-9xl tracking-tighter leading-none transition-transform group-hover/phone:scale-[1.01] duration-500 group-hover/phone:text-white/90" style={{ fontFamily: "'Playfair Display', serif" }}>
              (212) JACKSON
            </div>
            <p className="text-white/90 text-base font-bold tracking-tight flex items-center gap-2 justify-center md:justify-start">
              <Clock size={20} /> We're here to help, 24/7.
            </p>
          </a>
        </div>
        <div className="flex items-center gap-6 bg-white p-5 sm:p-6 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#c5a043] flex items-center justify-center shrink-0 shadow-inner">
            <Languages size={28} className="text-white" />
          </div>
          <div className="pr-2 sm:pr-4">
            <p className="text-zinc-600 font-black text-xs uppercase tracking-widest leading-none mb-1">Certified Assistance</p>
            <p className="text-[#c5a043] font-black text-2xl sm:text-3xl uppercase tracking-tighter leading-none">Bilingual Team.</p>
          </div>
        </div>
      </div>
    </section>
  );
}