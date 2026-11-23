import React, { useState, useEffect } from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import ScrollReveal from './common/ScrollReveal';
import { GoldenMandala, RoyalFiligreeDivider, DiyaLamp, CornerOrnament } from './common/RoyalOrnaments';

export default function BlessingsSection() {
  const { couple, blessings } = WEDDING_DATA;
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    let i = 0;
    const full = blessings.ganeshTitle;
    const interval = setInterval(() => {
      i++;
      setTypedTitle(full.slice(0, i));
      if (i >= full.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [blessings.ganeshTitle]);

  return (
    <header
      id="blessingsSection"
      className="pt-8 sm:pt-10 pb-10 sm:pb-11 px-4 sm:px-6 bg-[radial-gradient(circle_at_50%_20%,#faf6ee_0%,#f5ece0_100%)] text-center relative overflow-hidden"
      aria-label="Auspicious Blessings &amp; Couple Details"
    >
      {/* Background Rotating Mandalas */}
      <div className="absolute -top-16 -left-16 pointer-events-none" aria-hidden="true">
        <GoldenMandala size={280} />
      </div>
      <div className="absolute top-1/2 -right-20 pointer-events-none" aria-hidden="true">
        <GoldenMandala size={260} />
      </div>

      {/* Ganesha Emblem with Divine Halo */}
      <ScrollReveal>
        <div className="relative inline-block my-2 mb-3 sm:mb-4">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(223,186,103,0.4)_0%,transparent_70%)] animate-pulse-glow" aria-hidden="true" />
          <img
            src={couple.ganeshaEmblem}
            alt="Lord Ganesha Emblem"
            className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] object-contain block relative z-10 transition-transform duration-500 hover:scale-105 drop-shadow-[0_8px_20px_rgba(197,147,65,0.45)]"
            width={140}
            height={140}
            loading="eager"
            decoding="async"
          />
        </div>
      </ScrollReveal>

      {/* Shree Ganeshay Namah with Diyas */}
      <ScrollReveal delay={100}>
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          <DiyaLamp size={22} />
          <h2 className="font-devanagari text-[1.4rem] sm:text-[1.65rem] font-normal text-burgundy tracking-wide leading-relaxed">
            {typedTitle}
          </h2>
          <DiyaLamp size={22} />
        </div>
      </ScrollReveal>

      {/* Sanskrit Shloka from Card */}
      <ScrollReveal delay={200}>
        <p className="font-devanagari text-[0.95rem] sm:text-[1.05rem] font-normal leading-loose text-burgundy-light max-w-[340px] mx-auto mb-3 whitespace-pre-line">
          {blessings.sanskritShloka}
        </p>
      </ScrollReveal>

      {/* Filigree Divider */}
      <RoyalFiligreeDivider />

      {/* Child's Welcoming Blessing Note from Front of Card */}
      <ScrollReveal delay={250}>
        <div className="relative bg-white/90 backdrop-blur-sm border border-[rgba(197,147,65,0.4)] rounded-2xl p-3.5 sm:p-4.5 mb-5 sm:mb-6 shadow-sm-wedding transition-all duration-300 hover:shadow-md-wedding max-w-[380px] mx-auto">
          <CornerOrnament position="top-left" />
          <CornerOrnament position="bottom-right" />
          <span className="font-royal text-[0.62rem] sm:text-[0.65rem] tracking-[1.5px] sm:tracking-[2px] font-bold text-gold-dark block mb-1">
            ✦ स्नेह निमंत्रण ✦
          </span>
          <p className="font-devanagari text-[0.88rem] sm:text-[0.92rem] text-burgundy leading-relaxed italic">
            &ldquo;{couple.quote}&rdquo;
          </p>
        </div>
      </ScrollReveal>

      {/* Couple Grand Names & Circular Photo Badges */}
      <div className="my-5 sm:my-6">
        {/* Bride */}
        <ScrollReveal delay={350}>
          <div className="flex flex-col items-center mb-2 sm:mb-3">
            {/* Circular Bride Avatar */}
            <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full p-[2.5px] sm:p-[3px] bg-gold-foil shadow-md-wedding mb-1.5 sm:mb-2 hover:scale-105 transition-transform">
              <img
                src={couple.bride.photo}
                alt={couple.bride.fullName}
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <h1 className="text-[2.8rem] sm:text-[3.5rem] leading-none script-gold select-none">
              {couple.bride.firstName}
            </h1>
            <div className="font-devanagari text-lg sm:text-xl text-burgundy font-medium mt-0.5">
              {couple.bride.hindiFullName}
            </div>
            <p className="text-[0.8rem] sm:text-[0.85rem] text-text-muted italic mt-0.5 font-devanagari">
              {couple.bride.familyDisplay}
            </p>
          </div>
        </ScrollReveal>

        {/* Connector */}
        <ScrollReveal delay={400}>
          <div className="font-serif font-bold text-lg sm:text-xl text-gold-bright my-1.5 select-none animate-float-gentle tracking-widest uppercase flex items-center justify-center gap-2" aria-hidden="true">
            <span className="text-gold-light">♡</span>
            <span>संग • WEDS</span>
            <span className="text-gold-light">♡</span>
          </div>
        </ScrollReveal>

        {/* Groom */}
        <ScrollReveal delay={450}>
          <div className="flex flex-col items-center mt-2 sm:mt-3">
            {/* Circular Groom Avatar */}
            <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full p-[2.5px] sm:p-[3px] bg-gold-foil shadow-md-wedding mb-1.5 sm:mb-2 hover:scale-105 transition-transform">
              <img
                src={couple.groom.photo}
                alt={couple.groom.fullName}
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <h1 className="text-[2.8rem] sm:text-[3.5rem] leading-none script-gold select-none">
              {couple.groom.firstName}
            </h1>
            <div className="font-devanagari text-lg sm:text-xl text-burgundy font-medium mt-0.5">
              {couple.groom.hindiFullName}
            </div>
            <p className="text-[0.8rem] sm:text-[0.85rem] text-text-muted italic mt-0.5 font-devanagari">
              {couple.groom.familyDisplay}
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Monogram Emblem with Pulsing Aura */}
      <ScrollReveal delay={500}>
        <div className="flex flex-col items-center my-3 sm:my-4">
          <div className="w-[88px] h-[88px] sm:w-[100px] sm:h-[100px] flex items-center justify-center drop-shadow-[0_6px_16px_rgba(197,147,65,0.45)] hover:scale-110 transition-transform cursor-pointer">
            <img
              src={couple.monogram}
              alt="Heart Monogram"
              className="w-full h-full object-contain"
              width={100}
              height={100}
              loading="eager"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Emotional Daughter's Poetry from Card */}
      <ScrollReveal delay={550}>
        <div className="max-w-[340px] mx-auto my-2.5 sm:my-3 mb-4 sm:mb-5 bg-[#faf4e8]/80 p-3 sm:p-3.5 rounded-xl border border-gold-light/60 shadow-sm">
          <blockquote className="font-devanagari text-[0.92rem] sm:text-[0.98rem] leading-[1.75] text-burgundy font-normal whitespace-pre-line">
            {couple.emotionalQuote}
          </blockquote>
        </div>
      </ScrollReveal>

      {/* Scroll Down Arrow Indicator */}
      <div className="flex justify-center items-center mt-2 sm:mt-3 animate-bounce-pure" aria-hidden="true">
        <a
          href="#heroSection"
          aria-label="Scroll to next section"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-gold-bright bg-white/70 flex items-center justify-center shadow-[0_4px_10px_rgba(197,147,65,0.25)] hover:scale-110 transition-transform"
        >
          <span className="text-[1.1rem] sm:text-[1.2rem] text-gold-dark font-bold">↓</span>
        </a>
      </div>
    </header>
  );
}
