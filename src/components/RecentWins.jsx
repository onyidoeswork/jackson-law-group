import { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const cases = [
  {
    type: 'Commercial Truck Accident',
    insuranceOffer: '$500,000',
    secured: '$4.75 Million',
    desc: 'Settlement recovered for a pedestrian who sustained catastrophic injuries after being struck by a runaway truck.',
  },
  {
    type: 'Commercial Truck Accident',
    insuranceOffer: '$200,000',
    secured: '$1.25 Million',
    desc: 'Settlement secured for a client rear-ended at a stop sign, resulting in Spinal Surgery.',
  },
  {
    type: 'Car Accident',
    insuranceOffer: '$150,000',
    secured: '$1 Million',
    desc: 'Settlement obtained for a client involved in a life-altering sideswipe resulting in Spinal Surgery.',
  },
];

function WinCard({ c }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl border border-[#e4e4e7] bg-white min-h-[340px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center px-5 py-4 border-b border-[#e4e4e7]">
        <span className="text-[10px] font-black uppercase tracking-widest bg-[#c5a043] px-3 py-1.5 rounded-full text-white">
          {c.type}
        </span>
        {revealed && (
          <button
            onClick={() => setRevealed(false)}
            className="text-[#71717a] hover:text-[#3a3a3a] transition-colors"
            title="Reset"
          >
            <RotateCcw size={16} />
          </button>
        )}
      </div>

      {/* Front: insurance offer */}
      <div
        className={`absolute inset-0 top-[57px] flex flex-col justify-between p-6 bg-white transition-all duration-500 ${
          revealed ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <div className="space-y-3">
          <p className="text-base font-black uppercase tracking-widest" style={{ color: '#C80815' }}>Insurance Offered</p>
          <div
            className="text-5xl font-black text-[#71717a]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {c.insuranceOffer}
          </div>
          <div className="w-10 h-px bg-[#e4e4e7] my-2"></div>
          <p className="text-xs text-[#71717a] italic leading-relaxed">"{c.desc}"</p>
        </div>
        <button
  onClick={() => setRevealed(true)}
  className="w-full bg-[#c5a043] text-white py-4 rounded-xl font-black uppercase tracking-wide text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md mt-6"
>
  CLICK HERE TO REVEAL WHAT WE RECOVERED
</button>
      </div>

      {/* Back: secured amount */}
      <div
        className={`absolute inset-0 top-[57px] flex flex-col justify-between p-6 bg-[#c5a043] transition-all duration-500 ${
          revealed ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
        }`}
      >
        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-widest text-white/80">We Secured</p>
          <div
            className="text-5xl font-black text-white leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {c.secured}
          </div>
          <div className="w-10 h-px bg-white/30 my-2"></div>
          <p className="text-sm text-white font-semibold leading-relaxed">{c.desc}</p>
        </div>
        <div className="bg-black/20 px-4 py-2 rounded-full w-fit mt-4">
          <span className="text-white font-black text-[10px] uppercase tracking-widest">Jackson Legal Group</span>
        </div>
      </div>
    </div>
  );
}

export default function RecentWins() {
  return (
    <section id="wins" className="w-full py-16 sm:py-24 px-5 sm:px-8 bg-[#f9f7f3]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16 flex flex-col items-center text-center space-y-2">
          <h2 className="font-black text-4xl sm:text-5xl tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Recent Wins
          </h2>
          <p className="text-[#c5a043] font-black uppercase tracking-[0.3em] text-xs">Real Cases. Real Results.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((c, i) => <WinCard key={i} c={c} />)}
        </div>
      </div>
    </section>
  );
}