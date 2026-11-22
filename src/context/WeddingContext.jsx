import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import { WEDDING_DATA } from '../data/weddingData';

const WeddingContext = createContext(null);

export function WeddingProvider({ children }) {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isMusicManuallyToggled, setIsMusicManuallyToggled] = useState(false);
  const [activeZone, setActiveZone] = useState(1);
  const [scratchCardRevealed, setScratchCardRevealed] = useState(false);

  const audioRef = useRef(null);
  const trackTimesRef = useRef({ 1: 0, 2: 0, 3: 0 });
  const activeZoneRef = useRef(1);

  // Keep ref synced
  useEffect(() => {
    activeZoneRef.current = activeZone;
  }, [activeZone]);

  // Handle Zone Transitions with smooth cross-positioning
  const transitionToZone = useCallback((newZone) => {
    if (!newZone || newZone === activeZoneRef.current) return;
    const audio = audioRef.current;
    if (!audio) return;

    const currentZ = activeZoneRef.current;
    if (currentZ && WEDDING_DATA.musicTracks[currentZ]) {
      trackTimesRef.current[currentZ] = audio.currentTime;
    }

    setActiveZone(newZone);

    const nextTrack = WEDDING_DATA.musicTracks[newZone]?.src;
    if (!nextTrack) return;

    if (isPlayingMusic) {
      audio.pause();
      audio.src = nextTrack;
      audio.loop = true;
      audio.currentTime = trackTimesRef.current[newZone] || 0;
      audio.play().catch((err) => {
        console.warn('Playback error on zone change:', err);
      });
    } else {
      audio.src = nextTrack;
    }
  }, [isPlayingMusic]);

  // Handle Play/Pause
  const togglePlayMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlayingMusic) {
      audio.pause();
      setIsPlayingMusic(false);
      setIsMusicManuallyToggled(true);
      if (activeZoneRef.current) {
        trackTimesRef.current[activeZoneRef.current] = audio.currentTime;
      }
    } else {
      const zone = activeZoneRef.current || 1;
      const targetSrc = WEDDING_DATA.musicTracks[zone]?.src;

      if (!audio.src || !audio.src.includes(encodeURI(targetSrc))) {
        audio.src = targetSrc;
        audio.currentTime = trackTimesRef.current[zone] || 0;
      }
      audio.loop = true;
      audio
        .play()
        .then(() => {
          setIsPlayingMusic(true);
          setIsMusicManuallyToggled(false);
        })
        .catch((err) => {
          console.warn('Play gesture required:', err);
        });
    }
  }, [isPlayingMusic]);

  // Open Invitation
  const openEnvelope = useCallback(() => {
    setIsEnvelopeOpened(true);
    const audio = audioRef.current;
    if (audio) {
      audio.src = WEDDING_DATA.musicTracks[1]?.src;
      audio.loop = true;
      audio
        .play()
        .then(() => {
          setIsPlayingMusic(true);
        })
        .catch((e) => {
          console.warn('Autoplay on open caught:', e);
        });
    }
  }, []);

  return (
    <WeddingContext.Provider
      value={{
        isEnvelopeOpened,
        openEnvelope,
        isPlayingMusic,
        setIsPlayingMusic,
        togglePlayMusic,
        activeZone,
        transitionToZone,
        scratchCardRevealed,
        setScratchCardRevealed,
        audioRef,
      }}
    >
      <audio ref={audioRef} preload="auto" playsInline loop />
      {children}
    </WeddingContext.Provider>
  );
}

export function useWedding() {
  const context = useContext(WeddingContext);
  if (!context) {
    throw new Error('useWedding must be used within a WeddingProvider');
  }
  return context;
}
