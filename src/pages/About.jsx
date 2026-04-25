import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ClaimModal from '../components/ClaimModal';
import { ArrowRight, Scale, GraduationCap, Award } from 'lucide-react';

const verdicts = [
  { label: 'Runaway Truck', amount: '$4.7 Million', desc: '51-year-old woman severely injured by runaway truck.' },
  { label: 'Intersection Collision', amount: '$500,000', desc: '87-year-old man struck by large truck in an intersection.' },
  { label: 'Sideswipe', amount: '$475,000', desc: '39-year-old man sideswiped by truck making a right turn.' },
  { label: 'Rear End', amount: '$925,000', desc: 'Middle-aged man rear-ended by truck.' },
  { label: 'Pedestrian', amount: '$290,000', desc: 'Pedestrian struck by car making a right turn.' },
  { label: 'Sideswipe', amount: '$825,000', desc: 'Woman sideswiped by truck.' },
];

export default function About() {
  const [claimModal, setClaimModal] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col overflow-x-hidden" style={{ fontFamily: "'Source Sans Pro', sans-serif", color: '#3a3a3a' }}>
      <TopBar />
      <SiteHeader onOpenModal={() => setClaimModal(true)} />

      {/* Hero */}
      <section className="w-full bg-[#f9f7f3] py-16 sm:py-24 px-5 sm:px-8 border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c5a043] font-black uppercase tracking-[0.3em] text-xs mb-4">Jackson Legal Group P.C.</p>
          <h1 className="font-black text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Passion.<br />Experience.<br /><span className="text-[#c5a043]">Diligence.</span>
          </h1>
        </div>
      </section>

      {/* About + Get in Touch */}
      <section className="w-full py-16 sm:py-24 px-5 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-6">
            <h2 className="font-black text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>About</h2>
            <p className="text-[#71717a] leading-relaxed text-lg">
              At Jackson Legal Group, we are committed to providing our clients with personal attention and care. We give our clients personal attention because we know how important your case is to you. Our attorneys work extremely hard on your behalf to make sure that your interests are represented and your rights are fully protected.
            </p>
            <p className="text-[#71717a] leading-relaxed text-lg">
              If you have been seriously injured and would like to speak to an attorney, we will make arrangements to travel to meet you. Please feel free to contact us for a FREE consultation.
            </p>
          </div>
          <div className="space-y-6 bg-[#f9f7f3] p-8 sm:p-10 rounded-sm border-l-4 border-[#c5a043]">
            <h2 className="font-black text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>Get in touch</h2>
            <p className="text-[#71717a] leading-relaxed">
              We know that finding the right attorney to represent you is a choice not to be taken lightly. That's why we offer FREE consultations to walk you through the process, explain the scope of your accident, and assist with your individual needs.
            </p>
            <button
              onClick={() => setClaimModal(true)}
              className="flex items-center gap-2 bg-[#c5a043] text-white px-7 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all shadow-lg"
            >
              Book an Appointment <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Attorney Profile */}
      <section className="w-full py-16 sm:py-24 px-5 sm:px-8 bg-[#f9f7f3] border-t border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c5a043] font-black uppercase tracking-[0.3em] text-xs mb-10">Attorneys</p>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Photo */}
            <div className="w-full lg:w-auto flex-shrink-0">
              <div className="relative overflow-hidden rounded-sm shadow-2xl w-full lg:w-80">
                <img
                  src="https://uxmagic.blob.core.windows.net/components/uploads/PHOTO-2026-04-06-17-41-25-1775845359507-61f02v9r3vu.jpg"
                  alt="Janai N. Jackson"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
              <div className="mt-4 border-l-4 border-[#c5a043] pl-4">
                <h3 className="font-black text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>Janai N. Jackson</h3>
                <p className="text-[#c5a043] font-black text-xs uppercase tracking-widest mt-1">Founder & Managing Partner</p>
              </div>
            </div>

            {/* Bio & Details */}
            <div className="flex-1 space-y-10">
              <p className="text-[#71717a] leading-relaxed text-lg">
                Janai Jackson is the founder of Jackson Legal Group, P.C., where she is committed to delivering exceptional legal representation and personalized service to every client. Ms. Jackson is admitted to practice law in the State of New York and focuses her practice on advocating for individuals who have been injured due to the negligence of others.
              </p>
              <p className="text-[#71717a] leading-relaxed text-lg">
                Ms. Jackson earned her Bachelor of Science from Morgan State University and her Juris Doctor from Touro Law Center. She began her legal career as an Assistant District Attorney in the Kings County District Attorney's Office, where she gained extensive courtroom experience handling a wide range of cases and advocating on behalf of the community.
              </p>
              <p className="text-[#71717a] leading-relaxed text-lg">
                After her time in public service, Ms. Jackson founded Jackson Legal Group, P.C., where she has represented hundreds of clients and guided them through the legal process following serious injuries. She is dedicated to protecting her clients' rights and pursuing the maximum compensation permitted under the law for those harmed by the negligence of others. In recognition of her professional accomplishments, Ms. Jackson was named to the National Black Lawyers Top 40 Under 40.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Education */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-[#c5a043]" />
                    <h4 className="font-black text-sm uppercase tracking-widest">Education</h4>
                  </div>
                  <div className="space-y-3 text-sm text-[#71717a]">
                    <div>
                      <p className="font-black text-[#3a3a3a] uppercase text-xs tracking-wider">Touro Law Center</p>
                      <p>Juris Doctor</p>
                    </div>
                    <div>
                      <p className="font-black text-[#3a3a3a] uppercase text-xs tracking-wider">Morgan State University</p>
                      <p>B.A., Political Science</p>
                    </div>
                  </div>
                </div>

                {/* Activities */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Scale size={18} className="text-[#c5a043]" />
                    <h4 className="font-black text-sm uppercase tracking-widest">Activities</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-[#71717a]">
                    <li>NYC Bar Association, Member</li>
                    <li>Black Law Students Association, Member & Former Regional Board Member</li>
                    <li>NYS Bar Association, Member</li>
                  </ul>
                </div>

                {/* Bar Admissions */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-[#c5a043]" />
                    <h4 className="font-black text-sm uppercase tracking-widest">Bar Admissions</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-[#71717a]">
                    <li>New York State</li>
                    <li>U.S. District Court, Eastern District of New York</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Verdicts */}
      <section className="w-full py-16 sm:py-24 px-5 sm:px-8 bg-white border-t border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16 text-center space-y-2">
            <h2 className="font-black text-4xl sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>Notable Verdicts & Settlements</h2>
            <p className="text-[#c5a043] font-black uppercase tracking-[0.3em] text-xs">Results Matter</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verdicts.map((v, i) => (
              <div key={i} className="p-6 border-t-4 border-[#c5a043] shadow-lg bg-white hover:-translate-y-1 transition-transform space-y-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#71717a]">{v.label}</span>
                <div className="text-3xl font-black text-[#c5a043]" style={{ fontFamily: "'Playfair Display', serif" }}>{v.amount}</div>
                <p className="text-sm text-[#71717a] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setClaimModal(true)}
              className="flex items-center gap-3 bg-[#c5a043] text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-xl"
            >
              Get Your Free Case Review <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
      {claimModal && <ClaimModal onClose={() => setClaimModal(false)} />}
    </div>
  );
}