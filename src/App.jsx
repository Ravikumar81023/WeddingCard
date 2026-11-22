import React, { useState, useEffect, useCallback } from 'react';
import { WeddingProvider, useWedding } from './context/WeddingContext';
import { WEDDING_DATA } from './data/weddingData';
import ErrorBoundary from './components/common/ErrorBoundary';
import Toast from './components/common/Toast';
import EnvelopeScreen from './components/EnvelopeScreen';
import PetalCanvas from './components/PetalCanvas';
import FireworksCanvas from './components/FireworksCanvas';
import MusicController from './components/MusicController';
import BlessingsSection from './components/BlessingsSection';
import HeroSection from './components/HeroSection';
import SaveTheDateSection from './components/SaveTheDateSection';
import EventsSection from './components/EventsSection';
import VenueSection from './components/VenueSection';
import CountdownSection from './components/CountdownSection';
import GuestWishesSection from './components/GuestWishesSection';
import ThankYouSection from './components/ThankYouSection';

function WeddingContent() {
  const { transitionToZone } = useWedding();
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3500);
  }, []);

  // Scroll listener for dynamic zone-based music tracks
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 0.45 * window.innerHeight;
          const sectionIds = Object.keys(WEDDING_DATA.sectionZones);

          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY;
              const bottom = top + el.offsetHeight;
              if (scrollPos >= top && scrollPos < bottom) {
                transitionToZone(WEDDING_DATA.sectionZones[id]);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transitionToZone]);

  return (
    <div className="min-h-screen bg-bg-radial flex flex-col items-center justify-start overflow-x-hidden relative">
      {/* Interactive Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      {/* Falling Rose Petals & Gold Leaves Physics Engine */}
      <PetalCanvas />

      {/* Celebration Fireworks & Crackers Engine */}
      <FireworksCanvas />

      {/* 3D Wax Seal Envelope Opening Screen */}
      <EnvelopeScreen />

      {/* Floating Gold Equalizer Music Controller */}
      <MusicController />

      {/* Mobile-First Royal Wedding Card Container */}
      <main
        className="w-full max-w-[460px] bg-ivory min-h-screen shadow-[0_0_60px_rgba(0,0,0,0.6),0_0_20px_rgba(223,186,103,0.2)] overflow-x-hidden relative z-10"
        role="main"
      >
        <BlessingsSection />
        <HeroSection />
        <SaveTheDateSection onShowToast={showToast} />
        <EventsSection />
        <VenueSection onShowToast={showToast} />
        <CountdownSection />
        <GuestWishesSection onShowToast={showToast} />
        <ThankYouSection />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <WeddingProvider>
        <WeddingContent />
      </WeddingProvider>
    </ErrorBoundary>
  );
}
