import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { useState } from 'react';
import ClaimModal from '../components/ClaimModal';

const sections = [
  {
    title: '1. Introduction',
    content: `Jackson Legal Group, P.C. ("we," "our," or the "Firm") respects your privacy and is committed to protecting your Personal Information. This Privacy Policy ("Policy") explains how we collect, use, disclose, and safeguard your information when you visit our website and any related subdomains.

"Personal Information" means information that identifies, relates to, or could reasonably be linked to you as an individual. It does not include information that has been anonymized or aggregated such that it cannot reasonably be used to identify you.

Please review this Policy carefully so you understand how we handle your information.`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect Personal Information in a variety of ways depending on how you interact with our website and services.

Information You Provide Directly:
You may provide information when you fill out forms, contact us, or subscribe to communications.

Information Collected Automatically:
We may collect certain data through cookies, pixels, web beacons, and similar technologies. Please refer to our Cookie Policy for more details.

Analytics and Third-Party Data:
We may use tools such as Google Analytics and other analytics providers to understand website usage and improve performance. These services may collect information about your device, browsing behavior, and interactions with our site. You may opt out through available browser settings or third-party tools.

Types of Information Collected:
• Contact Information: Name, address, phone number, email
• Technical & Usage Data: IP address, browser type, device information, location data, and website interactions

We may also generate anonymized or aggregated data that does not identify you.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We may use your Personal Information to:
• Operate, maintain, and improve our website and services
• Respond to inquiries and communicate regarding potential legal matters
• Send administrative messages, updates, and confirmations
• Provide newsletters or relevant content (you may opt out at any time)
• Detect and prevent fraud or unauthorized activity
• Comply with legal obligations`,
  },
  {
    title: '4. Sharing of Information',
    content: `We may share your Personal Information with employees and service providers who assist in operating our website and business.

Third-Party Service Providers:
These may include providers of email services, hosting, analytics, and administrative support.

We may also disclose information:
• To comply with legal obligations or lawful requests
• To protect our rights, property, or safety
• In connection with a merger, sale, or business transfer

We do not sell or rent your Personal Information to third parties for marketing purposes.

We may use or share anonymized or aggregated data for analytics or research.`,
  },
  {
    title: '5. Your Rights and Choices',
    content: `Subject to applicable law, you may have the right to:
• Access your Personal Information
• Correct inaccurate information
• Request deletion of your data
• Restrict or object to certain uses
• Request a portable copy of your data

To exercise your rights, contact us at: office@thejacksonlegalgroup.com

You may opt out of marketing emails at any time using the unsubscribe link. Certain administrative or legal communications may still be sent as necessary.`,
  },
  {
    title: '6. Data Storage and Retention',
    content: `Your information is stored and processed in the United States and may be handled by service providers in other jurisdictions.

We retain Personal Information as reasonably necessary for business or legal purposes.`,
  },
  {
    title: '7. Data Security',
    content: `We implement reasonable safeguards to protect your Personal Information, including secure systems and encryption where appropriate.

However, no system can be guaranteed 100% secure.`,
  },
  {
    title: '8. Data Breach Notification',
    content: `In the event of a data breach, we will provide notice as required by applicable law.`,
  },
  {
    title: '9. Automated Decision-Making',
    content: `We do not use automated decision-making that produces legal or similarly significant effects without human involvement.`,
  },
  {
    title: '10. Children\'s Privacy',
    content: `Our website is not intended for individuals under 16, and we do not knowingly collect their Personal Information.`,
  },
  {
    title: '11. Third-Party Links',
    content: `Our website may contain links to third-party sites. We are not responsible for their privacy practices or content.`,
  },
  {
    title: '12. Changes to This Policy',
    content: `We may update this Policy from time to time. Changes are effective upon posting. Continued use of the website constitutes acceptance of any updates.`,
  },
  {
    title: '13. Contact Information',
    content: `If you have any questions about this Policy, please contact:

Jackson Legal Group, P.C.
807 Kings Highway
Brooklyn, NY 11223
office@thejacksonlegalgroup.com`,
  },
];

export default function PrivacyPolicy() {
  const [claimModal, setClaimModal] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col overflow-x-hidden" style={{ fontFamily: "'Source Sans Pro', sans-serif", color: '#3a3a3a' }}>
      <SiteHeader onOpenModal={() => setClaimModal(true)} />

      <section className="w-full bg-[#f9f7f3] py-16 sm:py-24 px-5 sm:px-8 border-b border-[#e4e4e7] pt-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c5a043] font-black uppercase tracking-[0.3em] text-xs mb-4">Jackson Legal Group P.C.</p>
          <h1 className="font-black text-5xl sm:text-6xl leading-tight tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Privacy Policy
          </h1>
          <p className="text-[#71717a] mt-4 text-sm">Effective Date: April 15, 2026</p>
        </div>
      </section>

      <section className="w-full py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((s, i) => (
            <div key={i} className="space-y-4">
              <h2 className="font-black text-xl sm:text-2xl border-l-4 border-[#c5a043] pl-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {s.title}
              </h2>
              <div className="text-[#71717a] leading-relaxed text-base whitespace-pre-line pl-4">
                {s.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
      {claimModal && <ClaimModal onClose={() => setClaimModal(false)} />}
    </div>
  );
}