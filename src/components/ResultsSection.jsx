import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const wins = [
{ label: 'Commercial Truck Accident', amount: '$4.75 Million', desc: 'Settlement recovered for a pedestrian who sustained catastrophic injuries after being struck by a runaway truck.' },
{ label: 'Wrongful Death', amount: '$2.1 Million', desc: '$2.1 million settlement in a case involving the death of a minor, securing $1.1 million above the $1 million policy limit.' },
{ label: 'Commercial Truck Accident', amount: '$1.25 Million', desc: 'Settlement secured for a client rear-ended at a stop sign, resulting in Spinal Surgery.' }];


export default function ResultsSection({ onOpenModal }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        let start = null;
        const duration = 2500;
        const target = 20;
        const step = (ts) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(step);else
          setCount(target);
        };
        setTimeout(() => requestAnimationFrame(step), 500);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" className="w-full py-16 sm:py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 flex flex-col items-center text-center space-y-4">
          <h2 className="font-black text-4xl sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>Real Results. Real Money.</h2>
          <p className="text-[#c5a043] font-bold">We don't settle for less than you deserve.</p>
          <div className="mt-8 sm:mt-12" ref={ref}>
            <span className="text-[#71717a] text-[10px] font-black uppercase tracking-widest block mb-2">Total Recovered</span>
            <div className="text-5xl sm:text-7xl font-black text-[#c5a043] flex justify-center items-baseline gap-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              $<span>{count}</span> Million+
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {wins.map((w, i) =>
          <div key={i} className="p-6 sm:p-8 border-t-4 border-[#c5a043] shadow-xl bg-white space-y-4 hover:-translate-y-1 transition-transform">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#71717a]">{w.label}</span>
              <div className="text-3xl sm:text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>{w.amount}</div>
              <p className="text-sm text-[#71717a] leading-relaxed">{w.desc}</p>
            </div>
          )}
        </div>
        <div className="flex justify-center mt-10 sm:mt-12">
          <button
            onClick={onOpenModal}
            className="bg-[#c5a043] text-white px-7 sm:px-10 py-4 sm:py-5 rounded-sm font-black uppercase tracking-[0.2em] text-xs sm:text-sm flex items-center gap-3 hover:bg-[#8e7330] transition-all shadow-xl hover:-translate-y-1 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043] focus-visible:ring-offset-4">
            
            Get your free case review <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>);

}