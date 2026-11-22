import React, { useState } from 'react';
import { useWedding } from '../context/WeddingContext';
import { WEDDING_DATA } from '../data/weddingData';

export default function MusicController() {
  const { isPlayingMusic, togglePlayMusic, activeZone } = useWedding();
  const [showBadge, setShowBadge] = useState(false);

  const currentTrackName = WEDDING_DATA.musicTracks[activeZone]?.name || "Wedding Music";

  return (
    <div
      className="fixed bottom-6 right-6 z-[1000] flex items-center gap-2"
      onMouseEnter={() => setShowBadge(true)}
      onMouseLeave={() => setShowBadge(false)}
    >
      {/* Floating Track Name Pill */}
      {(showBadge || isPlayingMusic) && (
        <div className="hidden sm:flex items-center gap-1.5 bg-[#2B050B]/90 backdrop-blur-md text-[#fff2c6] border border-gold-bright py-1.5 px-3 rounded-full shadow-lg text-[0.68rem] font-royal tracking-wider animate-fadeIn">
          <span className="text-gold-bright animate-pulse">♫</span>
          <span className="truncate max-w-[130px]">{currentTrackName}</span>
        </div>
      )}

      {/* Button */}
      <button
        onClick={togglePlayMusic}
        className="w-[52px] h-[52px] rounded-full bg-gold-foil border-2 border-[#fff5d1] shadow-gold-wedding shadow-lg cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-bright"
        aria-label={isPlayingMusic ? 'Pause background music' : 'Play background music'}
        title={isPlayingMusic ? `Pause: ${currentTrackName}` : 'Play Background Music'}
      >
        <div className="flex items-center justify-center text-burgundy-deep relative">
          {isPlayingMusic ? (
            <div className="flex items-end gap-[2.5px] h-4" aria-hidden="true">
              <span className="w-[3px] bg-burgundy-deep rounded-sm bar-1" />
              <span className="w-[3px] bg-burgundy-deep rounded-sm bar-2" />
              <span className="w-[3px] bg-burgundy-deep rounded-sm bar-3" />
              <span className="w-[3px] bg-burgundy-deep rounded-sm bar-4" />
            </div>
          ) : (
            <svg
              className="w-[19px] h-[19px] fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
