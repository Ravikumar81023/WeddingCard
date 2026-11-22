import React from 'react';

/**
 * Royal Indian Wedding Ornamental Dividers & Filigrees
 */

export function GoldenMandala({ className = '', size = 300 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`pointer-events-none select-none opacity-15 animate-spin-slow ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="url(#goldGradMandala)" fill="none" strokeWidth="1">
        <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="75" />
        <circle cx="100" cy="100" r="60" strokeDasharray="4 2" />
        <circle cx="100" cy="100" r="45" />
        <circle cx="100" cy="100" r="30" strokeDasharray="2 2" />
        <circle cx="100" cy="100" r="15" />
        {/* Radial Petals */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 100 100)`}>
            <path d="M100 25 C108 50 115 70 100 85 C85 70 92 50 100 25 Z" fill="rgba(223, 186, 103, 0.12)" />
            <path d="M100 10 C114 40 120 60 100 75 C80 60 86 40 100 10 Z" />
            <circle cx="100" cy="16" r="2.5" fill="#DFBA67" />
          </g>
        ))}
      </g>
      <defs>
        <linearGradient id="goldGradMandala" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFBA67" />
          <stop offset="50%" stopColor="#C59341" />
          <stop offset="100%" stopColor="#996822" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function RoyalFiligreeDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 mx-auto max-w-[280px] ${className}`} aria-hidden="true">
      <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold-bright">
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="url(#goldFoilGrad)"
          stroke="#C59341"
          strokeWidth="0.5"
        />
        <circle cx="12" cy="12" r="2" fill="#4A0E17" />
        <defs>
          <linearGradient id="goldFoilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBF0B9" />
            <stop offset="50%" stopColor="#DFBA67" />
            <stop offset="100%" stopColor="#996822" />
          </linearGradient>
        </defs>
      </svg>
      <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
    </div>
  );
}

export function CornerOrnament({ position = 'top-left' }) {
  const rotationClass = {
    'top-left': 'top-2 left-2',
    'top-right': 'top-2 right-2 rotate-90',
    'bottom-right': 'bottom-2 right-2 rotate-180',
    'bottom-left': 'bottom-2 left-2 -rotate-90',
  }[position];

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`absolute ${rotationClass} text-gold-bright opacity-60 pointer-events-none`}
      aria-hidden="true"
    >
      <path
        d="M2 2H12C12 7.52 7.52 12 2 12V2Z"
        fill="rgba(223, 186, 103, 0.25)"
        stroke="#C59341"
        strokeWidth="1"
      />
      <circle cx="5" cy="5" r="1.5" fill="#DFBA67" />
    </svg>
  );
}

export function DiyaLamp({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      {/* Flame */}
      <path
        d="M16 3C16 3 13 8 13 12C13 14.5 14.3 16 16 16C17.7 16 19 14.5 19 12C19 8 16 3 16 3Z"
        fill="url(#flameGrad)"
        className="animate-flicker"
      />
      {/* Diya Base */}
      <path
        d="M6 17C6 24 26 24 26 17C26 16.5 24 16.5 22 17C18 18 14 18 10 17C8 16.5 6 16.5 6 17Z"
        fill="url(#diyaGold)"
        stroke="#8F621D"
        strokeWidth="0.8"
      />
      <path
        d="M10 24C12 26 20 26 22 24"
        stroke="#8F621D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF2A1" />
          <stop offset="40%" stopColor="#FF9F1C" />
          <stop offset="100%" stopColor="#E71D36" />
        </linearGradient>
        <linearGradient id="diyaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBF0B9" />
          <stop offset="50%" stopColor="#DFBA67" />
          <stop offset="100%" stopColor="#996822" />
        </linearGradient>
      </defs>
    </svg>
  );
}
