import React, { useState } from 'react';
import { useWedding } from '../context/WeddingContext';
import { WEDDING_DATA } from '../data/weddingData';
import { playWaxSealClickSound } from '../utils/audio';

export default function EnvelopeScreen() {
  const { openEnvelope } = useWedding();
  const { couple } = WEDDING_DATA;
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isRemovedFromDom, setIsRemovedFromDom] = useState(false);

  const handleOpen = (e) => {
    if (e) e.stopPropagation();
    if (isAnimatingOut || isRemovedFromDom) return;

    setIsAnimatingOut(true);
    playWaxSealClickSound();
    openEnvelope();

    setTimeout(() => {
      setIsRemovedFromDom(true);
    }, 720);
  };

  if (isRemovedFromDom) return null;

  return (
    <div
      className={`fixed inset-0 w-screen h-[100dvh] min-h-screen bg-[radial-gradient(circle_at_center,#35070e_0%,#1a0206_60%,#0e0103_100%)] flex justify-center items-center z-[2000] overflow-hidden select-none transition-opacity duration-700 ease-out px-4 ${
        isAnimatingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Rakhi Weds Ranjit Wedding Invitation Envelope"
    >
      <div className="relative w-full max-w-[440px] flex flex-col items-center">
        {/* Ambient gold glow */}
        <div
          className="absolute w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(223,186,103,0.35)_0%,rgba(223,186,103,0)_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-glow"
          aria-hidden="true"
        />

        {/* Envelope wrapper */}
        <div
          className="relative inline-flex flex-col items-center cursor-pointer pointer-events-auto w-full"
          onClick={handleOpen}
        >
          {/* Royal Velvet Envelope Card from 2nd Image */}
          <div className="relative w-full max-w-[420px] rounded-[10px] overflow-hidden drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] drop-shadow-[0_0_25px_rgba(197,147,65,0.3)] transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/assets/images/rr_envelope_card.jpg"
              alt="Royal Wedding Envelope - Rakhi & Ranjit"
              className="w-full h-auto block rounded-[10px]"
              width={795}
              height={515}
              loading="eager"
            />

            {/* Interactive Wax Seal Overlay with Pulsing Aura on top of R&R seal */}
            <button
              type="button"
              className="absolute top-[49%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] cursor-pointer z-20 flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 bg-transparent border-none p-0 focus:outline-none"
              onClick={handleOpen}
              aria-label="Tap R&R wax seal to open invitation"
            >
              {/* Pulsing ring */}
              <div
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(223,186,103,0.6)_0%,transparent_70%)] animate-seal-pulse pointer-events-none"
                aria-hidden="true"
              />

              {/* High-res isolated R&R Seal */}
              <div className="relative w-[124px] h-[124px] flex items-center justify-center drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)] pointer-events-none">
                <img
                  src={couple.monogram}
                  alt="R&R Gold Wax Seal"
                  className="w-full h-full object-contain pointer-events-none"
                  width={124}
                  height={124}
                  loading="eager"
                />
              </div>
            </button>
          </div>

          {/* Title Banner & Flourishes from Image 2 */}
          <div className="w-full max-w-[360px] flex flex-col items-center mt-5 text-center pointer-events-none">
            <img
              src="/assets/images/rr_title_banner_transparent.png"
              alt="शुभ विवाह • आमंत्रण पत्र - Rakhi Weds Ranjit"
              className="w-full h-auto object-contain block drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]"
              width={635}
              height={224}
              loading="eager"
            />

            {/* Animated Tap Prompt */}
            <div className="mt-3 flex flex-col items-center gap-1 animate-prompt-bounce">
              <span className="font-royal text-[0.75rem] tracking-[3px] font-bold text-[#fff2c6] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                ✨ Tap Wax Seal to Open ✨
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
