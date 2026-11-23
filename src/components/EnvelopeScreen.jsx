import React, { useState } from 'react';
import { useWedding } from '../context/WeddingContext';
import { playWaxSealClickSound } from '../utils/audio';

export default function EnvelopeScreen() {
  const { openEnvelope } = useWedding();
  const [isOpening, setIsOpening] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpen = (e) => {
    if (e) e.stopPropagation();
    if (isOpening || isDismissed) return;

    setIsOpening(true);
    playWaxSealClickSound();
    openEnvelope();

    setTimeout(() => {
      setIsDismissed(true);
    }, 750);
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed inset-0 w-screen h-[100dvh] min-h-screen bg-[radial-gradient(circle_at_50%_42%,#3a030c_0%,#1a0104_55%,#0a0002_100%)] flex justify-center items-center z-[2000] overflow-hidden select-none transition-all duration-750 ease-out px-2 py-3 sm:px-4 sm:py-6 ${
        isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Rakhi Weds Ranjit Wedding Invitation Envelope"
    >
      {/* Responsive 4K Stage Container */}
      <div
        className="relative w-full max-w-[460px] h-full flex flex-col items-center justify-center cursor-pointer pointer-events-auto"
        onClick={handleOpen}
      >
        {/* Ambient Gold Aura */}
        <div
          className="absolute w-[min(80vw,360px)] h-[min(80vw,360px)] rounded-full bg-[radial-gradient(circle,rgba(223,186,103,0.35)_0%,transparent_70%)] top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-glow"
          aria-hidden="true"
        />

        {/* 4K Exact Composite Image (Envelope + 3D R&R Seal + Typography) */}
        <div className="relative w-full max-w-[min(92vw,440px)] max-h-[min(74dvh,640px)] aspect-[935/1024] rounded-[14px] sm:rounded-[18px] overflow-hidden drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] drop-shadow-[0_0_25px_rgba(223,186,103,0.25)] transition-transform duration-500 hover:scale-[1.015]">
          <picture>
            <source srcSet="/assets/images/envelope_4k.webp" type="image/webp" />
            <img
              src="/assets/images/envelope_4k.jpg"
              alt="Rakhi Weds Ranjit - Royal Wedding Invitation"
              className="w-full h-full object-contain block select-none pointer-events-none"
              width={935}
              height={1024}
              loading="eager"
              decoding="async"
            />
          </picture>

          {/* Interactive Wax Seal Hotspot (Positioned at exact 50% X, 42.0% Y) */}
          <button
            type="button"
            className="absolute top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square cursor-pointer z-30 flex items-center justify-center bg-transparent border-none p-0 focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95 group"
            onClick={handleOpen}
            aria-label="Tap R&R Gold Wax Seal to Open Invitation"
          >
            {/* Pulsing Golden Ring */}
            <div
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(223,186,103,0.55)_0%,transparent_72%)] animate-seal-pulse pointer-events-none group-hover:opacity-100"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Perfectly Centered Mobile-Responsive Animated Prompt */}
        <div className="w-full flex items-center justify-center gap-2 sm:gap-2.5 mt-3 sm:mt-4 text-center pointer-events-none select-none animate-prompt-bounce px-2">
          <span className="text-[#DFBA67] text-[0.65rem] sm:text-[0.75rem] leading-none select-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">●</span>
          <span className="font-royal text-[0.72rem] sm:text-[0.84rem] tracking-[2.5px] sm:tracking-[3.5px] font-bold text-[#fff2c6] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] whitespace-nowrap">
            Tap Wax Seal to Open
          </span>
          <span className="text-[#DFBA67] text-[0.65rem] sm:text-[0.75rem] leading-none select-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">●</span>
        </div>
      </div>
    </div>
  );
}
