export default function ContactForm() {
  return (
    <section id="critical-action" className="w-full py-16 sm:py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-[#f4f1ea] overflow-hidden shadow-2xl">
        <div className="lg:w-2/5 bg-[#f4f1ea] p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 sm:space-y-8">
          <h2 className="font-black text-4xl sm:text-5xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Time is <span className="text-[#c5a043]">Critical.</span>
          </h2>
          <p className="leading-relaxed text-[#3a3a3a]/70">Evidence disappears. Witnesses forget. Act now to protect your rights.</p>
        </div>
        <div className="lg:w-3/5 bg-white p-8 sm:p-12 lg:p-16">
          <h3 className="font-black text-2xl sm:text-3xl mb-6 sm:mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Request Your Free Case Evaluation</h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="First Name" className="p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a043] text-sm" />
            <input type="text" placeholder="Last Name" className="p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a043] text-sm" />
            <input type="email" placeholder="Email Address" className="p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a043] text-sm" />
            <input type="tel" placeholder="Phone Number" className="p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a043] text-sm" />
            <textarea placeholder="Briefly tell us what happened..." rows={4} className="sm:col-span-2 p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a043] text-sm resize-none" />
            <button type="submit" className="sm:col-span-2 bg-[#c5a043] text-white py-5 font-black uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043] focus-visible:ring-offset-4">
              Submit My Case
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}