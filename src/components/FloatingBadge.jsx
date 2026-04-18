import { ShieldCheck, X } from 'lucide-react';

export default function FloatingBadge({ onOpenModal, onClose }) {
  return (
    <div className="fixed bottom-6 left-4 sm:bottom-8 sm:left-8 z-[90] animate-bounce-subtle hidden sm:block">
      <div className="relative bg-white p-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[#e4e4e7] flex flex-col items-center text-center gap-3 w-48">
        <div className="w-12 h-12 rounded-full bg-[#c5a043]/10 flex items-center justify-center">
          <ShieldCheck size={24} className="text-[#c5a043]" />
        </div>
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#c5a043]">Confidential</p>
          <p className="text-sm font-black leading-tight text-[#3a3a3a] uppercase">Free Case Review</p>
        </div>
        <button
          onClick={onOpenModal}
          className="w-full bg-[#c5a043] text-white py-2 rounded-lg font-black uppercase tracking-widest text-[9px] shadow-md hover:bg-[#8e7330] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043]"
        >
          Apply Now
        </button>
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-[#f5f5f5] rounded-full flex items-center justify-center border border-[#e4e4e7] text-[#71717a] hover:text-[#3a3a3a] transition-colors"
        >
          <X size={12} />
        </button>
      </div>
    </div>
  );
}