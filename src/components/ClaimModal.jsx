import { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Check } from 'lucide-react';

const INCIDENT_TYPES = [
  {
    label: 'Car Accident',
    img: 'https://i.ibb.co/rRtJgZHq/anthony-maw-Xcj-Vef6uv-YA-unsplash.jpg',
    suggested: [
      'Another vehicle hit my car…',
      'I was hit from behind…',
      'The other driver ran a red light…',
      'I was hit as a pedestrian…',
    ],
  },
  {
    label: 'Workplace Injury',
    img: 'https://i.ibb.co/C5MCmQZk/nicolas-j-leclercq-WJg2byn-UWOk-unsplash.jpg',
    suggested: [
      'I was injured by faulty equipment…',
      'I fell on the job site…',
      'I was hurt due to unsafe conditions…',
      'I was not provided proper safety gear…',
    ],
  },
  {
    label: 'Medical Issue',
    img: 'https://i.ibb.co/RpbyL7pD/hush-naidoo-jade-photography-yo01-Z-9-HQAw-unsplash.jpg',
    suggested: [
      'I received a wrong diagnosis…',
      'A doctor made an error during my treatment…',
      'I was given the wrong medication…',
      'A surgical mistake caused me harm…',
    ],
  },
  {
    label: 'Slip & Fall',
    img: 'https://i.ibb.co/tPTyfWJK/justin-snyder-photo-v-Qc-Vq-KDJYe-Q-unsplash.jpg',
    suggested: [
      'I slipped on a wet floor with no warning sign…',
      'I fell on a broken or uneven sidewalk…',
      'I tripped due to a hazard on the property…',
      'I fell because of icy or slippery conditions…',
    ],
  },
  {
    label: 'Other',
    img: 'https://i.ibb.co/zhqnQYfD/tingey-injury-law-firm-DZpc4-UY8-Zt-Y-unsplash.jpg',
    suggested: [
      "I was injured due to someone else's negligence…",
      'A defective product caused me harm…',
      'I was attacked or assaulted…',
      'I suffered an injury in a public place…',
    ],
  },
];

const IMPACTS = ['Medical bills', 'Missed work', 'Pain or discomfort', 'Emotional stress'];

const TOTAL_STEPS = 7;

export default function ClaimModal({ onClose }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [incident, setIncident] = useState('');
  const [story, setStory] = useState('');
  const [impacts, setImpacts] = useState([]);
  const [hasLawyer, setHasLawyer] = useState(null);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const progress = (step / TOTAL_STEPS) * 100;

  const toggleImpact = (item) => {
    setImpacts(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);

  const encode = (data) => new URLSearchParams(data).toString();

  const handleSubmit = async () => {
    if (submitting) return;

    setSubmitting(true);

    const payload = {
      'form-name': 'contact',
      'bot-field': '',
      first_name: name,
      last_name: '',
      email,
      phone,
      message: `
NEW CASE LEAD

Name: ${name || "Not provided"}
Email: ${email || "Not provided"}
Phone: ${phone || "Not provided"}

Incident Type:
${incident || "Not provided"}

What Happened:
${story || "Not provided"}

Impacts:
${impacts.length ? impacts.map(i => `- ${i}`).join("\n") : "Not provided"}

Legal Status:
${hasLawyer === "Yes" ? "Already has a lawyer" : "Has not spoken to a lawyer"}
`,
     
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode(payload),
      });

      if (!response.ok) {
        throw new Error('Netlify form submission failed');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong submitting your case. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const canProceed = () => {
    if (step === 0) return name.trim().length > 0;
    if (step === 1) return incident !== '';
    if (step === 2) return story.trim().length > 0;
    if (step === 3) return impacts.length > 0;
    if (step === 4) return true;
    if (step === 5) return hasLawyer !== null;
    if (step === 6) return phone.trim().length > 0 || email.trim().length > 0;
    return true;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-900/80 backdrop-blur-md"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="px-6 pt-6 pb-4 border-b border-[#e4e4e7]">
          <div className="relative flex flex-col items-center mb-3">
            <button
              onClick={onClose}
              className="absolute right-0 top-0 text-[#71717a] hover:text-[#3a3a3a] transition-colors"
            >
              <X size={20} />
            </button>

            <h3
              className="text-xl font-black uppercase tracking-tight text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tell Us What Happened
            </h3>

            {!submitted && (
              <p className="text-xs text-[#71717a] mt-0.5 text-center">
                You don't have to figure this out alone. We'll walk you through it.
              </p>
            )}
          </div>

          {!submitted && (
            <div className="w-full bg-[#f5f5f5] rounded-full h-1.5">
              <div
                className="bg-[#c5a043] h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>

        <div className="p-6 min-h-[320px] flex flex-col justify-between items-center text-center">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
              <div className="w-16 h-16 rounded-full bg-[#c5a043]/10 flex items-center justify-center">
                <Check size={32} className="text-[#c5a043]" />
              </div>

              <div className="space-y-2">
                <h4
                  className="text-2xl font-black"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {name ? `${name}, we've heard you` : "We've heard you"}
                </h4>

                <p className="text-sm font-black text-[#c5a043] uppercase tracking-widest">
                  and we're here to help.
                </p>

                <p className="text-sm text-[#71717a] leading-relaxed max-w-xs mx-auto">
                  A member of our team will review your case and reach out shortly.
                </p>
              </div>
            </div>
          ) : (
            <>
              {step === 0 && (
                <div className="space-y-4 w-full flex flex-col items-center justify-center pt-8">
                  <p
                    className="text-lg font-black"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    First, what's your name?
                  </p>

                  <input
                    autoFocus
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && canProceed() && next()}
                    placeholder="Your first name…"
                    className="w-full p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#c5a043]"
                  />
                </div>
              )}

              {step === 1 && (
                <div className="space-y-4">
                  <p
                    className="text-lg font-black"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {name ? `${name}, what happened?` : 'What happened?'}
                  </p>

                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                    {INCIDENT_TYPES.map(({ label, img }) => (
                      <button
                        key={label}
                        type="button"
                        onClick={() => setIncident(label)}
                        className={`relative overflow-hidden rounded-xl aspect-square flex flex-col items-center justify-end p-2 transition-all border-2 ${
                          incident === label
                            ? 'border-[#c5a043] scale-[1.04]'
                            : 'border-transparent'
                        }`}
                      >
                        <img
                          src={img}
                          alt={label}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <span className="relative z-10 text-white text-[9px] font-black uppercase tracking-tight text-center leading-tight">
                          {label}
                        </span>

                        {incident === label && (
                          <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#c5a043] flex items-center justify-center z-10">
                            <Check size={10} className="text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <p
                    className="text-lg font-black"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Can you tell me what happened?
                  </p>

                  <textarea
                    autoFocus
                    value={story}
                    onChange={e => setStory(e.target.value)}
                    rows={4}
                    placeholder="Tell us in your own words…"
                    className="w-full p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#c5a043] resize-none"
                  />

                  <div className="flex flex-wrap gap-2">
                    {(INCIDENT_TYPES.find(t => t.label === incident)?.suggested || []).map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setStory(s)}
                        className="text-xs px-3 py-1.5 rounded-full border border-[#e4e4e7] bg-[#f9f7f3] text-[#71717a] hover:border-[#c5a043] hover:text-[#c5a043] transition-colors font-medium"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <p
                    className="text-lg font-black"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How has this affected you?
                  </p>

                  <p className="text-xs text-[#71717a]">Select all that apply.</p>

                  <div className="grid grid-cols-2 gap-3">
                    {IMPACTS.map(item => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleImpact(item)}
                        className={`p-4 rounded-xl border-2 text-left text-sm font-bold transition-all ${
                          impacts.includes(item)
                            ? 'border-[#c5a043] bg-[#c5a043]/5 text-[#c5a043]'
                            : 'border-[#e4e4e7] bg-[#f9f7f3] text-[#3a3a3a]'
                        }`}
                      >
                        {impacts.includes(item) && (
                          <Check size={12} className="mb-1 text-[#c5a043]" />
                        )}
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-6">
                  <div className="w-14 h-14 rounded-full bg-[#c5a043]/10 flex items-center justify-center">
                    <span className="text-2xl">💛</span>
                  </div>

                  <p
                    className="text-xl font-black"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    You're doing great.
                  </p>

                  <p className="text-sm text-[#71717a] max-w-xs">
                    This is really helpful. Just a couple more questions and we'll have everything we need.
                  </p>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-4">
                  <p
                    className="text-lg font-black"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Have you spoken to a lawyer yet?
                  </p>

                  <div className="flex gap-4">
                    {['Yes', 'No'].map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setHasLawyer(opt)}
                        className={`flex-1 py-4 rounded-xl border-2 font-black text-sm transition-all ${
                          hasLawyer === opt
                            ? 'border-[#c5a043] bg-[#c5a043] text-white'
                            : 'border-[#e4e4e7] bg-[#f9f7f3] text-[#3a3a3a]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {hasLawyer === 'No' && (
                    <p className="text-xs text-[#c5a043] font-bold bg-[#c5a043]/5 px-4 py-3 rounded-xl">
                      We can help you understand your options — at no cost to you.
                    </p>
                  )}
                </div>
              )}

              {step === 6 && (
                <div className="space-y-4">
                  <p
                    className="text-lg font-black"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {name
                      ? `${name}, where should we send your case review?`
                      : 'Where should we send your case review?'}
                  </p>

                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className="w-full p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#c5a043]"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full p-4 bg-[#f5f5f5] border border-[#e4e4e7] rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#c5a043]"
                  />
                </div>
              )}
            </>
          )}

          {!submitted && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#e4e4e7] gap-6">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={back}
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#71717a] hover:text-[#3a3a3a] transition-colors px-4 py-3"
                >
                  <ChevronLeft size={14} /> Back
                </button>
              ) : (
                <div />
              )}

              {step < TOTAL_STEPS - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 bg-[#c5a043] text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue <ChevronRight size={14} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canProceed() || submitting}
                  className="flex items-center gap-2 bg-[#c5a043] text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit My Case'}
                  {!submitting && <ChevronRight size={14} />}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}