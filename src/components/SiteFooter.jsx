import React from 'react';
export default function SiteFooter() {
  return (
<footer className="w-full bg-white py-12 px-8 border-t border-[#e4e4e7]">      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo */}
        <img
          src="https://media.base44.com/images/public/69dc55dbe71c33c9efd9e381/5e3a90be8_JacksonLegalNewLogo.png"
          alt="Jackson Legal Group P.C."
className="h-14 w-auto object-contain rounded-sm mt-2 md:mt-3"        />

        {/* Right side */}
        <div className="text-left space-y-4 max-w-md">
          {/* Legal */}
          <div className="space-y-1">
            <p className="text-xs text-[#71717a]">© 2026 Jackson Legal Group, P.C. All rights reserved.</p>
            <p className="text-xs text-[#71717a]">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
            <p className="text-xs text-[#71717a]">This website is for informational purposes only and does not constitute legal advice.</p>
            <a href="/privacy-policy" className="text-xs text-[#c5a043] hover:underline font-semibold">Privacy Policy</a>
          </div>

          {/* Offices */}
          <p className="text-xs font-bold uppercase tracking-widest text-[#3a3a3a] pt-3 border-t border-[#e4e4e7]">Locations:</p><div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#18181b]">South Brooklyn</p>
              <p className="text-xs text-[#71717a]">807 Kings Highway, Suite 2</p>
              <p className="text-xs text-[#71717a]">Brooklyn, NY 11223</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#18181b]">Dumbo</p>
              <p className="text-xs text-[#71717a]">55 Water Street, 3rd Floor</p>
              <p className="text-xs text-[#71717a]">Brooklyn, NY 11201</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}