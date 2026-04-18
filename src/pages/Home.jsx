import { useState, useEffect, useRef } from 'react';
import TopBar from '../components/TopBar';
import SiteHeader from '../components/SiteHeader';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import ResultsSection from '../components/ResultsSection';
import RecentWins from '../components/RecentWins';
import PracticeAreas from '../components/PracticeAreas';
import WhyUs from '../components/WhyUs';
import BilingualBanner from '../components/BilingualBanner';
import ContactForm from '../components/ContactForm';
import SiteFooter from '../components/SiteFooter';
import ClaimModal from '../components/ClaimModal';
import FloatingBadge from '../components/FloatingBadge';
import FloatingChat from '../components/FloatingChat';

export default function Home() {
  const [claimModal, setClaimModal] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const modalShown = useRef(false);
  const resultsRef = useRef(null);

  const showModal = () => {
    if (!modalShown.current) {
      modalShown.current = true;
      setClaimModal(true);
    }
  };

  useEffect(() => {
    const badgeTimer = setTimeout(() => setShowBadge(true), 4000);

    // Show modal after 60 seconds on the page
    const timeTimer = setTimeout(() => showModal(), 60000);

    const handleScroll = () => {
      // Show chat when near practice areas
      const section = document.getElementById('practice-areas');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) setShowChat(true);
      }

      // Open modal when user scrolls to the very bottom
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      if (scrolledToBottom) {
        showModal();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(badgeTimer);
      clearTimeout(timeTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = () => setClaimModal(true);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col overflow-x-hidden" style={{ fontFamily: "'Source Sans Pro', sans-serif", color: '#3a3a3a' }}>
      <SiteHeader onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />
      <div ref={resultsRef}><ResultsSection onOpenModal={openModal} /></div>
      <RecentWins />
      <PracticeAreas />
      <WhyUs />
      <BilingualBanner />
      <ContactForm />
      <TrustSection />
      <SiteFooter />
      {showBadge && <FloatingBadge onOpenModal={openModal} onClose={() => setShowBadge(false)} />}
      {showChat && <FloatingChat onOpenModal={openModal} onClose={() => setShowChat(false)} />}
      {claimModal && <ClaimModal onClose={() => setClaimModal(false)} />}
    </div>
  );
}