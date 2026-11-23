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
            <div className="w-[76px] h-[76px] sm:w-[88px] sm:h-[88px] rounded-full p-[2.5px] sm:p-[3px] bg-gold-foil shadow-md-wedding mb-2 hover:scale-105 transition-transform">
              <img
                src={couple.bride.photo}
                alt={couple.bride.fullName}
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <h1 className="text-[3rem] sm:text-[3.8rem] leading-none script-gold select-none font-bold tracking-tight mb-1">
              {couple.bride.firstName}
            </h1>
            <div className="font-devanagari text-xl sm:text-2xl text-burgundy-deep font-bold tracking-wide">
              {couple.bride.hindiFullName}
            </div>
            <div className="mt-1.5 px-3.5 py-1 rounded-full bg-[#f6eee0]/90 border border-[#dfba67]/60 shadow-[0_2px_6px_rgba(74,14,23,0.06)] text-[0.82rem] sm:text-[0.88rem] text-burgundy-light font-semibold font-devanagari tracking-wide inline-block">
              {couple.bride.familyDisplay}
            </div>
          </div>
        </ScrollReveal>

        {/* Connector */}
        <ScrollReveal delay={400}>
          <div className="my-3 flex items-center justify-center select-none" aria-hidden="true">
            <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#faeed4] via-[#fffbf3] to-[#faeed4] border-[1.5px] border-gold-bright shadow-[0_3px_12px_rgba(197,147,65,0.22)]">
              <span className="text-burgundy text-xs animate-pulse">✦</span>
              <span className="font-royal text-[0.85rem] sm:text-[0.95rem] tracking-[3px] font-bold text-burgundy-deep uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                संग <span className="text-gold-dark font-sans text-xs">•</span> WEDS
              </span>
              <span className="text-burgundy text-xs animate-pulse">✦</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Groom */}
        <ScrollReveal delay={450}>
          <div className="flex flex-col items-center mt-2 sm:mt-3">
            {/* Circular Groom Avatar */}
            <div className="w-[76px] h-[76px] sm:w-[88px] sm:h-[88px] rounded-full p-[2.5px] sm:p-[3px] bg-gold-foil shadow-md-wedding mb-2 hover:scale-105 transition-transform">
              <img
                src={couple.groom.photo}
                alt={couple.groom.fullName}
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <h1 className="text-[3rem] sm:text-[3.8rem] leading-none script-gold select-none font-bold tracking-tight mb-1">
              {couple.groom.firstName}
            </h1>
            <div className="font-devanagari text-xl sm:text-2xl text-burgundy-deep font-bold tracking-wide">
              {couple.groom.hindiFullName}
            </div>
            <div className="mt-1.5 px-3.5 py-1 rounded-full bg-[#f6eee0]/90 border border-[#dfba67]/60 shadow-[0_2px_6px_rgba(74,14,23,0.06)] text-[0.82rem] sm:text-[0.88rem] text-burgundy-light font-semibold font-devanagari tracking-wide inline-block">
              {couple.groom.familyDisplay}
            </div>
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

      {/* Auspicious Couple Poem & Emotional Daughter's Poetry from Card */}
      <ScrollReveal delay={550}>
        <div className="max-w-[360px] mx-auto my-2.5 sm:my-3 mb-4 sm:mb-5 flex flex-col gap-2.5">
          {/* Couple Blessing Poem */}
          <div className="bg-[#faf4e8]/90 p-3 sm:p-3.5 rounded-xl border border-gold-bright/40 shadow-sm text-center">
            <span className="font-royal text-[0.6rem] tracking-[1.5px] font-bold text-gold-dark block mb-1 uppercase">
              ✦ ईश्वरीय स्नेहाशीर्वाद ✦
            </span>
            <blockquote className="font-devanagari text-[0.9rem] sm:text-[0.96rem] leading-[1.7] text-burgundy font-medium whitespace-pre-line">
              {couple.coupleBlessingPoem}
            </blockquote>
          </div>

          {/* Emotional Daughter's Poetry */}
          <div className="bg-[#fffdfa]/85 p-3 sm:p-3.5 rounded-xl border border-gold-light/60 shadow-sm text-center">
            <span className="font-royal text-[0.6rem] tracking-[1.5px] font-bold text-burgundy-light block mb-1 uppercase">
              ✦ भावभीनी विदाई पंक्तियाँ ✦
            </span>
            <blockquote className="font-devanagari text-[0.88rem] sm:text-[0.94rem] leading-[1.7] text-burgundy font-normal italic whitespace-pre-line">
              {couple.emotionalQuote}
            </blockquote>
          </div>
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
