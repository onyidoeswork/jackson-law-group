export default function SiteFooter() {
  return (
    <footer className="w-full bg-white py-16 px-8 border-t border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <img
          src="https://media.base44.com/images/public/69dc55dbe71c33c9efd9e381/5e3a90be8_JacksonLegalNewLogo.png"
          alt="Jackson Legal Group P.C."
          className="h-14 w-auto object-contain rounded-sm" />
        <div className="text-center md:text-right space-y-1">
          <p className="text-xs text-[#71717a]">© 2026 Jackson Legal Group, P.C. All rights reserved.</p>
          <p className="text-xs text-[#71717a]">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
          <p className="text-xs text-[#71717a]">This website is for informational purposes only and does not constitute legal advice.</p>
          <a href="/privacy-policy" className="text-xs text-[#c5a043] hover:underline font-semibold">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}