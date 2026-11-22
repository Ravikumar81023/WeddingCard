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
      className="py-12 px-6 bg-gradient-to-b from-white via-ivory-warm to-cream-soft text-center relative overflow-hidden"
      aria-label="Shower Blessings and Wishes"
    >
      <ScrollReveal>
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <DiyaLamp size={26} />
          <span className="font-royal text-[0.72rem] tracking-[3px] font-bold text-gold-dark uppercase">
            SHOWER YOUR BLESSINGS
          </span>
          <DiyaLamp size={26} />
        </div>

        <h2 className="text-[3.2rem] leading-tight script-gold">
          Wishes &amp; Blessings
        </h2>

        <p className="font-serif text-[0.95rem] text-burgundy italic max-w-xs mx-auto mb-6">
          Leave your loving wishes and auspicious blessings for Anjali &amp; Ritesh as they embark on this sacred journey.
        </p>
      </ScrollReveal>

      {/* Wishes Form Card */}
      <ScrollReveal delay={150}>
        <div className="relative bg-white rounded-[20px] p-6 border-[1.5px] border-gold-bright shadow-md-wedding max-w-[380px] mx-auto text-left mb-8">
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />

          {/* Quick presets */}
          <div className="mb-4">
            <span className="font-royal text-[0.62rem] tracking-[1.5px] font-bold text-gold-dark uppercase block mb-2">
              Tap a quick blessing:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {PRESET_MESSAGES.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setGuestMessage(preset)}
                  className="text-[0.7rem] bg-cream-soft hover:bg-gold-foil hover:text-burgundy-deep text-burgundy py-1 px-2.5 rounded-full border border-gold-light transition-all text-left"
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSendWish} className="flex flex-col gap-3">
            <div>
              <label className="font-royal text-[0.65rem] tracking-[1.5px] font-bold text-burgundy uppercase block mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar / Friends"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full bg-ivory border border-gold-light rounded-lg px-3 py-2 text-xs text-text-dark focus:outline-none focus:ring-1 focus:ring-gold-bright font-sans"
              />
            </div>

            <div>
              <label className="font-royal text-[0.65rem] tracking-[1.5px] font-bold text-burgundy uppercase block mb-1">
                Your Blessing Message
              </label>
              <textarea
                rows="3"
                placeholder="Write your heartfelt wishes here..."
                value={guestMessage}
                onChange={(e) => setGuestMessage(e.target.value)}
                required
                className="w-full bg-ivory border border-gold-light rounded-lg px-3 py-2 text-xs text-text-dark focus:outline-none focus:ring-1 focus:ring-gold-bright font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-1 bg-gold-foil text-burgundy-deep font-royal text-[0.78rem] tracking-[2px] font-bold py-3 px-6 rounded-full shadow-gold-wedding transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center uppercase"
            >
              Shower Blessings 🌸
            </button>
          </form>
        </div>
      </ScrollReveal>

      {/* Recent Wishes Feed */}
      <ScrollReveal delay={250}>
        <div className="max-w-[380px] mx-auto text-left">
          <span className="font-royal text-[0.68rem] tracking-[2px] font-bold text-gold-dark uppercase block mb-3 text-center">
            Recent Blessings from Loved Ones
          </span>

          <div className="flex flex-col gap-2.5 max-h-[220px] overflow-y-auto pr-1">
            {wishes.slice(0, 6).map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 rounded-xl p-3 border border-[rgba(197,147,65,0.3)] shadow-sm text-xs"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-royal font-bold text-burgundy">{item.name}</span>
                  <span className="text-[0.65rem] text-text-muted">{item.time}</span>
                </div>
                <p className="font-serif text-[0.88rem] text-text-dark leading-snug italic">
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
