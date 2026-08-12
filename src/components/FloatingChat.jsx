import React from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon, { WHATSAPP_URL } from './WhatsAppIcon';

export default function FloatingChat({ onOpenModal, onClose }) {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[90] flex items-center gap-2">
      <div className="flex items-center bg-white rounded-full shadow-2xl border border-[#e4e4e7] overflow-hidden pr-1">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#c5a043]">
          <img
            src="https://media.base44.com/images/public/69dc55dbe71c33c9efd9e381/0ac43d0f7_PHOTO-2026-04-06-17-41-25.jpg"
            alt="Janai Jackson"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex items-center gap-0 ml-2 mr-1">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="flex items-center gap-1.5 text-[#c5a043] font-black uppercase tracking-widest text-xs px-3 py-2 border-r border-[#e4e4e7] hover:opacity-80 transition-opacity"
          >
            <WhatsAppIcon size={14} /> Chat Now
          </a>
          <button
            onClick={onOpenModal}
            className="text-[#3a3a3a] font-black uppercase tracking-widest text-xs px-3 py-2 hover:opacity-80 transition-opacity"
          >
            Start Now
          </button>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="w-6 h-6 flex items-center justify-center text-[#71717a] hover:text-[#3a3a3a] transition-colors"
        >
          <X size={12} />
        </button>
      </div>
    </div>
  );
}
