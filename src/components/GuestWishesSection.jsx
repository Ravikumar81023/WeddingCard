import React, { useState, useEffect } from 'react';
import { launchCelebrationCrackers } from './FireworksCanvas';
import ScrollReveal from './common/ScrollReveal';
import { RoyalFiligreeDivider, DiyaLamp, CornerOrnament } from './common/RoyalOrnaments';

const DEFAULT_WISHES = [
  { name: "Family & Friends", text: "Wishing Anjali & Ritesh a lifetime of eternal love, happiness and prosperity! 🌸🥂", time: "Just now" },
  { name: "Sharma Family", text: "May God shower your sacred union with divine blessings! Congratulations! ✨❤️", time: "10m ago" },
  { name: "College Friends", text: "Super excited for 21st November! Can't wait to dance at the Baraat! 💃🕺", time: "1h ago" },
];

const PRESET_MESSAGES = [
  "🌸 Sada Suhagan Raho & Best Wishes!",
  "💖 Wishing you a lifetime of love & laughter!",
  "✨ May your union be blessed with immense joy!",
  "🎉 Congratulations Anjali & Ritesh! Can't wait!",
];

export default function GuestWishesSection({ onShowToast }) {
  const [wishes, setWishes] = useState(() => {
    try {
      const saved = localStorage.getItem('wedding_wishes');
      return saved ? JSON.parse(saved) : DEFAULT_WISHES;
    } catch {
      return DEFAULT_WISHES;
    }
  });

  const [guestName, setGuestName] = useState('');
  const [guestMessage, setGuestMessage] = useState('');

  const handleSendWish = (e) => {
    e.preventDefault();
    if (!guestMessage.trim()) return;

    const newWish = {
      name: guestName.trim() || 'Well Wisher',
      text: guestMessage.trim(),
      time: 'Just now',
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem('wedding_wishes', JSON.stringify(updated));
    } catch (err) {
      console.warn("Could not save to localStorage", err);
    }

    launchCelebrationCrackers();
    if (onShowToast) {
      onShowToast('Blessings Sent with Love! 🌸');
    }

    setGuestName('');
    setGuestMessage('');
  };

  return (
    <section
      id="guestWishesSection"
      className="py-12 px-4 sm:px-6 royal-velvet-section text-center relative overflow-hidden text-ivory"
      aria-label="Shower Blessings and Wishes"
    >
      <ScrollReveal>
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <DiyaLamp size={26} />
          <span className="font-royal text-[0.72rem] tracking-[3px] font-bold text-[#ffd978] uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            SHOWER YOUR BLESSINGS
          </span>
          <DiyaLamp size={26} />
        </div>

        <h2 className="text-[3.2rem] leading-tight gold-animated-shimmer mb-2">
          Wishes &amp; Blessings
        </h2>

        <p className="font-serif text-[0.95rem] text-[#fdeab9] italic max-w-xs mx-auto mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          Leave your loving wishes and auspicious blessings for Rakhi &amp; Ranjit as they embark on this sacred journey.
        </p>
      </ScrollReveal>

      {/* Wishes Form Card */}
      <ScrollReveal delay={150}>
        <div className="relative bg-white/[0.07] backdrop-blur-md rounded-[22px] p-5 sm:p-6 border border-gold-bright/40 shadow-[0_16px_36px_rgba(0,0,0,0.6)] max-w-[380px] mx-auto text-left mb-8">
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />

          {/* Quick presets */}
          <div className="mb-4">
            <span className="font-royal text-[0.65rem] tracking-[1.5px] font-bold text-[#ffd978] uppercase block mb-2">
              Tap a quick blessing:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {PRESET_MESSAGES.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setGuestMessage(preset)}
                  className="text-[0.72rem] bg-white/[0.1] hover:bg-gold-foil hover:text-burgundy-deep text-[#ffe7a3] py-1 px-2.5 rounded-full border border-gold-bright/35 transition-all text-left"
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSendWish} className="flex flex-col gap-3">
            <div>
              <label className="font-royal text-[0.68rem] tracking-[1.5px] font-bold text-[#ffd978] uppercase block mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar / Friends"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full bg-black/35 border border-gold-bright/40 rounded-lg px-3 py-2 text-xs text-[#fff6e0] placeholder-[#e5dac9]/40 focus:outline-none focus:ring-1 focus:ring-gold-bright font-sans"
              />
            </div>

            <div>
              <label className="font-royal text-[0.68rem] tracking-[1.5px] font-bold text-[#ffd978] uppercase block mb-1">
                Your Blessing Message
              </label>
              <textarea
                rows="3"
                placeholder="Write your heartfelt wishes here..."
                value={guestMessage}
                onChange={(e) => setGuestMessage(e.target.value)}
                required
                className="w-full bg-black/35 border border-gold-bright/40 rounded-lg px-3 py-2 text-xs text-[#fff6e0] placeholder-[#e5dac9]/40 focus:outline-none focus:ring-1 focus:ring-gold-bright font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-1 bg-gradient-to-r from-[#dfba67] via-[#fff5d1] to-[#c59341] text-burgundy-deep font-royal text-[0.82rem] tracking-[2px] font-bold py-3 px-6 rounded-full shadow-[0_6px_20px_rgba(223,186,103,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center uppercase"
            >
              Shower Blessings 🌸
            </button>
          </form>
        </div>
      </ScrollReveal>

      {/* Recent Wishes Feed */}
      <ScrollReveal delay={250}>
        <div className="max-w-[380px] mx-auto text-left">
          <span className="font-royal text-[0.72rem] tracking-[2px] font-bold text-[#ffd978] uppercase block mb-3 text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Recent Blessings from Loved Ones
          </span>

          <div className="flex flex-col gap-2.5 max-h-[220px] overflow-y-auto pr-1">
            {wishes.slice(0, 6).map((item, idx) => (
              <div
                key={idx}
                className="bg-white/[0.08] backdrop-blur-sm rounded-xl p-3 border border-gold-bright/35 shadow-sm text-xs"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-royal font-bold text-[#ffe7a3]">{item.name}</span>
                  <span className="text-[0.65rem] text-[#fdeab9]/70">{item.time}</span>
                </div>
                <p className="font-serif text-[0.88rem] text-[#fff6e0] leading-snug italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
