import React from 'react';

export default function Toast({ message, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[3000] animate-bounce-pure">
      <div className="bg-[#2B050B] text-gold-light border-2 border-gold-bright py-2.5 px-6 rounded-full shadow-2xl flex items-center gap-2 text-xs font-royal tracking-wider uppercase backdrop-blur-md">
        <span>✨</span>
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-gold-bright hover:text-white font-bold"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}
