import React from 'react';
import { ChevronRight } from 'lucide-react';

// url points at the static landing page for each area, served outside the
// SPA from public/practice/. Plain anchors, not react-router links.
const areas = [
  { title: 'Personal Injury', url: '/practice/personal-injury/', img: '/images/personal-injury.jpg', desc: 'Aggressive representation for medical malpractice, product liability, and catastrophic workplace accidents.' },
  { title: 'Truck Accidents', url: '/practice/truck-accidents/', img: '/images/truck-accidents.jpg', desc: 'Taking on commercial trucking companies and corporate insurance providers.' },
  { title: 'Construction Injury', url: '/practice/construction-accidents/', img: '/images/construction-injury.jpg', desc: "Protecting workers' rights after falls, equipment failures, and safety violations on NYC job sites." },
  { title: 'Motor Vehicle', url: '/practice/motor-vehicle-accidents/', img: '/images/motor-vehicle-accident.jpg', desc: 'Litigating complex car, motorcycle, and commercial vehicle collisions across New York.' },
  { title: 'Premises Liability', url: '/practice/premises-liability/', img: '/images/premises-liability.jpg', desc: 'Holding property owners accountable for slip and falls, negligent security, and hazardous conditions.' },
  { title: 'Wrongful Death', url: '/practice/wrongful-death/', img: '/images/wrongful-death.jpg', desc: 'Compassionate yet aggressive legal pursuit for families who have lost loved ones due to negligence.' },
  { title: 'Medical Malpractice', url: '/practice/medical-malpractice/', img: '/images/medical.jpg', desc: 'Challenging hospital systems and practitioners for surgical errors, misdiagnosis, and birth injuries.' },
  { title: 'Slip and Fall', url: '/practice/slip-and-fall/', img: '/images/slip-and-fall.jpg', desc: 'Securing justice for victims of sidewalk defects, icy conditions, and poorly maintained commercial spaces.' },
  { title: 'Pedestrian Injury', url: '/practice/pedestrian-accidents/', img: '/images/pedestrian-injury.jpg', desc: 'Representing individuals struck by vehicles while walking or cycling in the high-traffic streets of NYC.' },
];

function AreaCard({ a }) {
  return (
    <a
      href={a.url}
      className="group relative flex flex-col overflow-hidden bg-white border border-[#e4e4e7] shadow-sm hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043] focus-visible:ring-offset-2"
    >
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10"></div>
        <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
          <div className="w-8 h-1 bg-[#c5a043] mb-2"></div>
          <h3 className="font-black text-xl text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{a.title}</h3>
        </div>
      </div>
      <p className="px-5 pt-4 pb-3 text-sm text-[#71717a] leading-relaxed flex-1">{a.desc}</p>
      <div className="px-5 py-3 border-t border-[#e4e4e7]">
        <span className="flex items-center gap-1.5 text-[#c5a043] font-black text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">
          Learn More
          <ChevronRight size={14} />
        </span>
      </div>
    </a>
  );
}

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="w-full py-16 sm:py-24 px-5 sm:px-8 bg-white border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16 space-y-4">
          <h2 className="font-black text-4xl sm:text-5xl tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Practice Areas</h2>
          <p className="text-lg sm:text-xl text-[#71717a] max-w-2xl leading-relaxed">We focus exclusively on high-stakes personal injury litigation across New York City.</p>
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