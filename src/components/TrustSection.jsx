import React from 'react';
export default function TrustSection() {
  const logos = [
    { src: "https://media.base44.com/images/public/69dc55dbe71c33c9efd9e381/d42b4d3c7_WhatsAppImage2026-04-16at55155AM.jpeg", alt: "Fox News" },
    { src: "https://media.base44.com/images/public/69dc55dbe71c33c9efd9e381/5cdd6c6cc_WhatsAppImage2026-04-16at55155AM2.jpeg", alt: "Yahoo News" },
    { src: "https://media.base44.com/images/public/69dc55dbe71c33c9efd9e381/c7a5734b1_WhatsAppImage2026-04-16at55155AM3.jpg", alt: "CBS News" },
    { src: "https://media.base44.com/images/public/69dc55dbe71c33c9efd9e381/e1742e6a7_WhatsAppImage2026-04-16at55155AM1.jpg", alt: "PIX11 News" },
  ];

  const awards = [
    { src: "https://media.base44.com/images/public/69dc55dbe71c33c9efd9e381/2ae885e19_nysbapnglogo-Edited.png", alt: "NYSBA" },
    { src: "https://media.base44.com/images/public/69dc55dbe71c33c9efd9e381/c880fa0d0_top40_transparent.png", alt: "Top 40 Under 40 - National Black Lawyers" },
    { src: "https://media.base44.com/images/public/69dc55dbe71c33c9efd9e381/0b764e9d0_jacksonlawelement1.png", alt: "Metropolitan Black Bar Association" },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Awards / Credentials */}
      <section className="w-full bg-[#c5a043] py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-row justify-center items-center gap-4 md:gap-12 flex-nowrap">
          {awards.map(({ src, alt }) => (
            <div
              key={alt}
              className={`flex-none flex items-center justify-center ${alt === 'Top 40 Under 40 - National Black Lawyers' ? 'w-28 h-28 md:w-40 md:h-40' : 'w-24 h-24 md:w-36 md:h-36'}`}
            >
              <img src={src} alt={alt} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* As Seen On */}
      <section className="w-full bg-[#f5f5f5] py-8 px-6 border-b border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
          <span className="text-[#71717a] text-[10px] uppercase font-black tracking-[0.4em]">As Seen On</span>
          <div className="w-full flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {logos.map(({ src, alt }) => (
              <div key={alt} className="w-32 h-20 md:w-40 md:h-24 rounded-xl overflow-hidden border border-[#e4e4e7] bg-white flex items-center justify-center">
                <img src={src} alt={alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}