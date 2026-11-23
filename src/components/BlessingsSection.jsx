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
      className="pt-8 sm:pt-10 pb-10 sm:pb-12 px-4 sm:px-6 royal-velvet-section text-center relative overflow-hidden text-ivory"
      aria-label="Auspicious Blessings & Couple Details"
    >
      {/* Background Rotating Mandalas with glowing gold opacity */}
      <div className="absolute -top-16 -left-16 pointer-events-none opacity-40 animate-spin-slow" aria-hidden="true">
        <GoldenMandala size={280} />
      </div>
      <div className="absolute top-1/2 -right-20 pointer-events-none opacity-35 animate-spin-reverse-slow" aria-hidden="true">
        <GoldenMandala size={260} />
      </div>

      {/* Ambient Floating Gold Dust Orbs */}
      <div className="ambient-gold-sparkle w-2 h-2 top-20 left-10" style={{ animationDelay: '0s' }} aria-hidden="true" />
      <div className="ambient-gold-sparkle w-3 h-3 top-48 right-8" style={{ animationDelay: '1.8s' }} aria-hidden="true" />
      <div className="ambient-gold-sparkle w-2.5 h-2.5 bottom-36 left-8" style={{ animationDelay: '3.2s' }} aria-hidden="true" />
      <div className="ambient-gold-sparkle w-2 h-2 bottom-80 right-12" style={{ animationDelay: '2.5s' }} aria-hidden="true" />

      {/* Ganesha Emblem with Divine Halo */}
      <ScrollReveal>
        <div className="relative inline-block my-2 mb-3 sm:mb-4">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(245,216,110,0.45)_0%,transparent_70%)] animate-pulse-glow" aria-hidden="true" />
          <img
            src={couple.ganeshaEmblem}
            alt="Lord Ganesha Emblem"
            className="w-[125px] h-[125px] sm:w-[145px] sm:h-[145px] object-contain block relative z-10 transition-transform duration-500 hover:scale-105 drop-shadow-[0_0_28px_rgba(245,216,110,0.55)]"
            width={145}
            height={145}
            loading="eager"
            decoding="async"
          />
        </div>
      </ScrollReveal>

      {/* Shree Ganeshay Namah with Diyas */}
      <ScrollReveal delay={100}>
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          <DiyaLamp size={22} />
          <h2 className="font-devanagari text-[1.45rem] sm:text-[1.75rem] font-bold text-divine-glow tracking-wider leading-relaxed">
            {typedTitle}
          </h2>
          <DiyaLamp size={22} />
        </div>
      </ScrollReveal>

      {/* Sanskrit Shloka from Card */}
      <ScrollReveal delay={200}>
        <p className="font-devanagari text-[0.98rem] sm:text-[1.1rem] font-normal leading-loose text-[#faebd0] max-w-[340px] mx-auto mb-3 whitespace-pre-line drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {blessings.sanskritShloka}
        </p>
      </ScrollReveal>

      {/* Filigree Divider */}
      <RoyalFiligreeDivider />

      {/* Child's Welcoming Blessing Note from Front of Card */}
      <ScrollReveal delay={250}>
        <div className="relative bg-white/[0.07] backdrop-blur-md border border-gold-bright/40 rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(223,186,103,0.12)] transition-all duration-300 hover:border-gold-bright/70 max-w-[380px] mx-auto text-center">
          <CornerOrnament position="top-left" />
          <CornerOrnament position="bottom-right" />
          <span className="font-royal text-[0.62rem] sm:text-[0.68rem] tracking-[2px] font-bold text-[#ffd978] block mb-1 uppercase">
            ✦ स्नेह निमंत्रण ✦
          </span>
          <p className="font-devanagari text-[0.92rem] sm:text-[0.98rem] text-[#fff6e0] leading-relaxed italic drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
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
            <div className="w-[80px] h-[80px] sm:w-[92px] sm:h-[92px] rounded-full p-[3px] bg-gradient-to-tr from-[#dfba67] via-[#fff5d1] to-[#c59341] shadow-[0_0_20px_rgba(223,186,103,0.5),0_8px_24px_rgba(0,0,0,0.6)] mb-2 hover:scale-105 transition-transform">
              <img
                src={couple.bride.photo}
                alt={couple.bride.fullName}
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <h1 className="text-[3.2rem] sm:text-[4.2rem] leading-none gold-animated-shimmer select-none font-bold tracking-normal mb-1">
              {couple.bride.firstName}
            </h1>
            <div className="font-devanagari text-xl sm:text-2xl text-divine-glow font-bold tracking-wide mt-0.5">
              {couple.bride.hindiFullName}
            </div>
            <div className="mt-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-sm border border-gold-bright/50 shadow-[0_4px_14px_rgba(0,0,0,0.4)] text-[0.82rem] sm:text-[0.88rem] text-[#fdeab9] font-medium font-devanagari tracking-wide inline-block">
              {couple.bride.familyDisplay}
            </div>
          </div>
        </ScrollReveal>

        {/* Connector */}
        <ScrollReveal delay={400}>
          <div className="my-3.5 flex items-center justify-center select-none" aria-hidden="true">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-white/[0.12] via-white/[0.06] to-white/[0.12] border-2 border-gold-bright shadow-[0_0_20px_rgba(223,186,103,0.35),0_6px_16px_rgba(0,0,0,0.5)]">
              <span className="text-[#ffd978] text-xs animate-pulse">✦</span>
              <span className="font-royal text-[0.9rem] sm:text-[1rem] tracking-[3px] font-bold text-[#ffe7a3] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                संग <span className="text-gold-bright font-sans text-xs">•</span> WEDS
              </span>
              <span className="text-[#ffd978] text-xs animate-pulse">✦</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Groom */}
        <ScrollReveal delay={450}>
          <div className="flex flex-col items-center mt-2 sm:mt-3">
            {/* Circular Groom Avatar */}
            <div className="w-[80px] h-[80px] sm:w-[92px] sm:h-[92px] rounded-full p-[3px] bg-gradient-to-tr from-[#dfba67] via-[#fff5d1] to-[#c59341] shadow-[0_0_20px_rgba(223,186,103,0.5),0_8px_24px_rgba(0,0,0,0.6)] mb-2 hover:scale-105 transition-transform">
              <img
                src={couple.groom.photo}
                alt={couple.groom.fullName}
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <h1 className="text-[3.2rem] sm:text-[4.2rem] leading-none gold-animated-shimmer select-none font-bold tracking-normal mb-1">
              {couple.groom.firstName}
            </h1>
            <div className="font-devanagari text-xl sm:text-2xl text-divine-glow font-bold tracking-wide mt-0.5">
              {couple.groom.hindiFullName}
            </div>
            <div className="mt-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-sm border border-gold-bright/50 shadow-[0_4px_14px_rgba(0,0,0,0.4)] text-[0.82rem] sm:text-[0.88rem] text-[#fdeab9] font-medium font-devanagari tracking-wide inline-block">
              {couple.groom.familyDisplay}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Monogram Emblem with Pulsing Aura */}
      <ScrollReveal delay={500}>
        <div className="flex flex-col items-center my-3 sm:my-4">
          <div className="w-[90px] h-[90px] sm:w-[105px] sm:h-[105px] flex items-center justify-center drop-shadow-[0_0_24px_rgba(245,216,110,0.55)] hover:scale-110 transition-transform cursor-pointer">
            <img
              src={couple.monogram}
              alt="Heart Monogram"
              className="w-full h-full object-contain"
              width={105}
              height={105}
              loading="eager"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Auspicious Couple Poem & Emotional Daughter's Poetry from Card */}
      <ScrollReveal delay={550}>
        <div className="max-w-[360px] mx-auto my-2.5 sm:my-3 mb-4 sm:mb-5 flex flex-col gap-3">
          {/* Couple Blessing Poem */}
          <div className="bg-white/[0.07] backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-gold-bright/40 shadow-[0_6px_20px_rgba(0,0,0,0.4)] text-center">
            <span className="font-royal text-[0.62rem] tracking-[2px] font-bold text-[#ffd978] block mb-1 uppercase">
              ✦ ईश्वरीय स्नेहाशीर्वाद ✦
            </span>
            <blockquote className="font-devanagari text-[0.92rem] sm:text-[0.98rem] leading-[1.75] text-[#fff6e0] font-medium whitespace-pre-line drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              {couple.coupleBlessingPoem}
            </blockquote>
          </div>

          {/* Emotional Daughter's Poetry */}
          <div className="bg-white/[0.05] backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-gold-light/35 shadow-[0_6px_20px_rgba(0,0,0,0.4)] text-center">
            <span className="font-royal text-[0.62rem] tracking-[2px] font-bold text-[#fadc7a] block mb-1 uppercase">
              ✦ भावभीनी विदाई पंक्तियाँ ✦
            </span>
            <blockquote className="font-devanagari text-[0.9rem] sm:text-[0.96rem] leading-[1.75] text-[#faebd0] font-normal italic whitespace-pre-line drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              {couple.emotionalQuote}
            </blockquote>
          </div>
        </div>
      </ScrollReveal>

      {/* Scroll Down Arrow Indicator */}
      <div className="flex justify-center items-center mt-3 sm:mt-4 animate-bounce-pure" aria-hidden="true">
        <a
          href="#heroSection"
          aria-label="Scroll to next section"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-gold-bright bg-gradient-to-b from-white/[0.15] to-white/[0.05] backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(223,186,103,0.35),0_4px_10px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform"
        >
          <span className="text-[1.2rem] sm:text-[1.3rem] text-[#ffd978] font-bold">↓</span>
        </a>
      </div>
    </header>
  );
}
