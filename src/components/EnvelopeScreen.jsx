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
      className={`fixed inset-0 w-screen h-[100dvh] min-h-screen bg-[radial-gradient(circle_at_center,#2e080e_0%,#120204_100%)] flex justify-center items-center z-[2000] overflow-hidden select-none transition-opacity duration-700 ease-out ${
        isAnimatingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Invitation Envelope"
    >
      <div className="relative w-[96%] max-w-[420px] flex flex-col items-center">
        {/* Ambient gold glow */}
        <div
          className="absolute w-[340px] h-[340px] bg-[radial-gradient(circle,rgba(223,186,103,0.3)_0%,rgba(223,186,103,0)_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-glow"
          aria-hidden="true"
        />

        {/* Envelope wrapper */}
        <div
          className="relative inline-flex flex-col items-center cursor-pointer pointer-events-auto"
          onClick={handleOpen}
        >
          {/* CSS/SVG Envelope Flaps */}
          <div className="relative w-[min(96vw,420px)] max-w-[420px] drop-shadow-[0_20px_45px_rgba(0,0,0,0.75)] drop-shadow-[0_0_18px_rgba(197,147,65,0.2)]">
            <svg
              className="w-full h-auto block"
              viewBox="0 0 300 200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="envGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5a1320" />
                  <stop offset="50%" stopColor="#4A0E17" />
                  <stop offset="100%" stopColor="#3a0b12" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="300" height="200" rx="5" ry="5" fill="url(#envGrad)" />
              {/* Left fold */}
              <polygon points="0,200 150,110 0,0" fill="#3d0c15" />
              {/* Right fold */}
              <polygon points="300,200 150,110 300,0" fill="#2e080d" />
              {/* Bottom fold */}
              <polygon points="0,200 150,120 300,200" fill="#4a1020" />
              {/* Top flap */}
              <polygon points="0,0 300,0 150,105" fill="#5c1525" />

              {/* Gold fold lines */}
              <line x1="0" y1="0" x2="150" y2="110" stroke="rgba(197,147,65,0.55)" strokeWidth="1" />
              <line x1="300" y1="0" x2="150" y2="110" stroke="rgba(197,147,65,0.45)" strokeWidth="1" />
              <line x1="0" y1="200" x2="150" y2="110" stroke="rgba(197,147,65,0.4)" strokeWidth="1" />
              <line x1="300" y1="200" x2="150" y2="110" stroke="rgba(197,147,65,0.4)" strokeWidth="1" />
              <line x1="0" y1="0" x2="150" y2="105" stroke="rgba(197,147,65,0.6)" strokeWidth="1.2" />
              <line x1="300" y1="0" x2="150" y2="105" stroke="rgba(197,147,65,0.6)" strokeWidth="1.2" />
              <rect
                x="0.75"
                y="0.75"
                width="298.5"
                height="198.5"
                rx="5"
                ry="5"
                fill="none"
                stroke="rgba(197,147,65,0.5)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Interactive Wax Seal */}
          <button
            type="button"
            className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-[56%] w-[140px] h-[140px] cursor-pointer z-20 flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 bg-transparent border-none p-0 focus:outline-none"
            onClick={handleOpen}
            aria-label="Tap wax seal to open invitation"
          >
            {/* Pulsing ring */}
            <div
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(223,186,103,0.5)_0%,transparent_70%)] animate-seal-pulse pointer-events-none"
              aria-hidden="true"
            />

            {/* Seal image */}
            <div className="relative w-[126px] h-[126px] flex items-center justify-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] pointer-events-none">
              <img
                src={couple.monogram}
                alt="Gold Wax Seal"
                className="w-full h-full object-contain pointer-events-none"
                width={126}
                height={126}
                loading="eager"
              />
            </div>
          </button>

          {/* Prompt below envelope */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[280px] flex flex-col items-center gap-1 text-center pointer-events-none animate-prompt-bounce">
            <span className="font-royal text-[0.8rem] tracking-[2px] font-bold text-[#fff2c6] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              शुभ विवाह • आमंत्रण पत्र
            </span>
            <span className="font-devanagari text-[1.4rem] text-gold-bright drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
              {couple.bride.hindiFirstName} संग {couple.groom.hindiFirstName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
