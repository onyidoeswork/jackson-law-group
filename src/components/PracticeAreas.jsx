import React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const areas = [
  { title: 'Personal Injury', img: 'https://i.ibb.co/zhqnQYfD/tingey-injury-law-firm-DZpc4-UY8-Zt-Y-unsplash.jpg', desc: 'Aggressive representation for medical malpractice, product liability, and catastrophic workplace accidents.' },
  { title: 'Truck Accidents', img: 'https://i.ibb.co/FkjZVzfc/nikoloz-gachechiladze-uht-NG8x-kn8-unsplash.jpg', desc: 'Specialized litigation against commercial trucking companies and corporate insurance providers.' },
  { title: 'Construction Injury', img: 'https://i.ibb.co/xKPD4y8L/taqqy-rb-keb-E5-ZSz-Gc-unsplash.jpg', desc: "Protecting workers' rights after falls, equipment failures, and safety violations on NYC job sites." },
  { title: 'Motor Vehicle', img: 'https://i.ibb.co/rRtJgZHq/anthony-maw-Xcj-Vef6uv-YA-unsplash.jpg', desc: 'Expert litigation for complex car, motorcycle, and commercial vehicle collisions across New York.' },
  { title: 'Premises Liability', img: 'https://i.ibb.co/5WYGJr0x/odd-fellow-M8-w-XGEj-UVg-unsplash.jpg', desc: 'Holding property owners accountable for slip and falls, negligent security, and hazardous conditions.' },
  { title: 'Wrongful Death', img: 'https://i.ibb.co/7tZH6q8X/vidar-nordli-mathisen-nvl-B39rzd-QE-unsplash.jpg', desc: 'Compassionate yet aggressive legal pursuit for families who have lost loved ones due to negligence.' },
  { title: 'Medical Malpractice', img: 'https://i.ibb.co/NdQvHnWk/olga-guryanova-t-MFeat-BSS4s-unsplash.jpg', desc: 'Challenging hospital systems and practitioners for surgical errors, misdiagnosis, and birth injuries.' },
  { title: 'Slip and Fall', img: 'https://i.ibb.co/tPTyfWJK/justin-snyder-photo-v-Qc-Vq-KDJYe-Q-unsplash.jpg', desc: 'Securing justice for victims of sidewalk defects, icy conditions, and poorly maintained commercial spaces.' },
  { title: 'Pedestrian Injury', img: 'https://i.ibb.co/FbR24CPD/jon-tyson-97-WN7l-Uol-Nw-unsplash.jpg', desc: 'Representing individuals struck by vehicles while walking or cycling in the high-traffic streets of NYC.' },
];

function AreaCard({ a }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="group relative overflow-hidden bg-white border border-[#e4e4e7] shadow-sm hover:shadow-lg transition-shadow">
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10"></div>
        <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
          <div className="w-8 h-1 bg-[#c5a043] mb-2"></div>
          <h3 className="font-black text-xl text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{a.title}</h3>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-48' : 'max-h-0'}`}>
        <p className="px-5 pt-4 pb-2 text-sm text-[#71717a] leading-relaxed">{a.desc}</p>
      </div>
      <div className="px-5 py-3 border-t border-[#e4e4e7]">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-[#c5a043] font-black text-xs uppercase tracking-widest hover:gap-2.5 transition-all"
        >
          {expanded ? 'Show Less' : 'Learn More'}
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
    </div>
  );
}

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="w-full py-16 sm:py-24 px-5 sm:px-8 bg-white border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16 space-y-4">
          <h2 className="font-black text-4xl sm:text-5xl tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Practice Areas</h2>
          <p className="text-lg sm:text-xl text-[#71717a] max-w-2xl leading-relaxed">We focus exclusively on high-stakes litigation across personal injury and specialized legal sectors.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {areas.map((a, i) => (
            <AreaCard key={i} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}