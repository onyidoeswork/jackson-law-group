import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onOpenModal }) {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-black"
      style={{ marginTop: '-80px', paddingTop: '80px' }}
    >
      <div className="absolute inset-x-0 top-0 -bottom-2 z-0 overflow-hidden">
        <video
          className="absolute inset-0 block w-full h-full object-cover scale-[1.02]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://vz-34e99df6-856.b-cdn.net/25f6d38e-d048-44ef-8788-08f0dff766ed/play_720p.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="absolute inset-0 z-10 bg-black/40" />

      <div className="absolute bottom-0 right-0 z-10 hidden h-full items-end justify-end pr-8 pointer-events-none md:flex lg:pr-24">
        <img
          src="https://uxmagic.blob.core.windows.net/components/uploads/d302e73a-b8e8-4cfb-880c-a394d86430e2-1775993795746-i7z3w28doha.png"
          alt="Janai Jackson"
          className="h-[90%] w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        />
      </div>

      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pt-28 pb-4 sm:px-8 sm:pt-36 sm:pb-8">
        <div className="max-w-xl space-y-5">
          <span className="inline-block rounded-sm bg-[#c5a043] px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
            Top Rated Injury Firm
          </span>

          <h1
            className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Injured in an <span className="text-[#c5a043]">Accident?</span> We
            Demand <span className="text-[#c5a043]">Maximum Compensation.</span>
          </h1>

          <p className="max-w-lg text-base font-medium leading-relaxed text-white/80 sm:text-lg">
            Don't let insurance companies dictate your future. Our aggressive
            trial lawyers have recovered millions for clients just like you.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenModal}
              className="flex w-full items-center justify-center gap-3 rounded-sm bg-[#c5a043] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:gap-5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043] sm:w-auto sm:px-8 sm:py-5 sm:text-base"
            >
              Get Your Free Case Evaluation <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}