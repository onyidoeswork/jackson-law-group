export default function ContactForm() {
  return (
    <section id="critical-action" className="w-full py-16 sm:py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-[#f4f1ea] overflow-hidden shadow-2xl">
        <div className="lg:w-2/5 bg-[#f4f1ea] p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 sm:space-y-8">
          <h2
            className="font-black text-4xl sm:text-5xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Time is <span className="text-[#c5a043]">Critical.</span>
          </h2>
          <p className="leading-relaxed text-[#3a3a3a]/70">
            Evidence disappears. Witnesses forget. Act now to protect your rights.
          </p>
        </div>

        <div className="lg:w-3/5 bg-white p-8 sm:p-12 lg:p-16">
          <h3
            className="font-black text-2xl sm:text-3xl mb-6 sm:mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Request Your Free Case Evaluation
          </h3>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              className="p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a043] text-sm"
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a043] text-sm"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a043] text-sm"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a043] text-sm"
            />

            <textarea
              name="message"
              placeholder="Briefly tell us what happened..."
              rows={4}
              required
              className="sm:col-span-2 p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a043] text-sm resize-none"
            />

            <button
              type="submit"
              className="sm:col-span-2 bg-[#c5a043] text-white py-5 font-black uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043] focus-visible:ring-offset-4"
            >
              Submit My Case
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}