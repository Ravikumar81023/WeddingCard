import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import ScrollReveal from './common/ScrollReveal';
import { GoldenMandala, CornerOrnament } from './common/RoyalOrnaments';

export default function HeroSection() {
  const { couple } = WEDDING_DATA;

  return (
    <section
      id="heroSection"
      className="pt-7 sm:pt-9 pb-10 sm:pb-12 px-3 sm:px-6 bg-[radial-gradient(circle_at_50%_20%,#faf6ee_0%,#f5ece0_100%)] flex flex-col items-center justify-between min-h-[88vh] sm:min-h-[92vh] relative overflow-hidden"
      aria-label="Bride and Groom Dual Royal Portrait"
    >
      {/* Background Mandala */}
      <div className="absolute top-1/3 -left-20 pointer-events-none" aria-hidden="true">
        <GoldenMandala size={300} />
      </div>
      <div className="absolute top-1/2 -right-20 pointer-events-none" aria-hidden="true">
        <GoldenMandala size={280} />
      </div>

      {/* Side-by-Side Dual Portraits: Left Side Bride, Right Side Groom */}
      <ScrollReveal className="w-full max-w-[420px] my-2 mb-3 relative z-[2]">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left Side: Bride (Rakhi) */}
          <div className="flex-1 flex flex-col items-center group min-w-0">
            <div className="w-full aspect-[3/4.4] rounded-[60px_60px_16px_16px] sm:rounded-[100px_100px_20px_20px] overflow-hidden border-2 sm:border-[3px] border-gold-bright shadow-[0_10px_24px_rgba(74,14,23,0.18)] bg-[#EFE6D8] relative">
              <img
                src={couple.bride.photo}
                alt={couple.bride.fullName}
                className="w-full h-full object-cover object-top block scale-[1.03] transition-transform duration-700 group-hover:scale-110"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(245,236,224,0.3),inset_0_-24px_24px_rgba(74,14,23,0.3)] pointer-events-none" />
            </div>

            {/* Bride Label Tag */}
            <div className="mt-1.5 sm:mt-2 text-center">
              <span className="font-royal text-[0.58rem] sm:text-[0.62rem] tracking-[1.2px] font-bold text-gold-dark uppercase block">
                वधू (Bride)
              </span>
              <span className="font-devanagari text-[0.95rem] sm:text-[1.1rem] font-bold text-burgundy">
                {couple.bride.hindiFirstName}
              </span>
            </div>
          </div>

          {/* Center Connector: Sacred Sang Heart */}
          <div className="flex flex-col items-center justify-center shrink-0 px-0.5">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold-foil flex items-center justify-center text-burgundy-deep shadow-gold-wedding shadow-md my-0.5 sm:my-1 animate-pulse">
              <span className="text-sm sm:text-base font-bold">💍</span>
            </div>
            <span className="font-serif text-[1.45rem] sm:text-[1.7rem] text-burgundy-deep font-bold leading-none animate-float-gentle drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
              संग
            </span>
            <span className="text-[0.65rem] sm:text-[0.75rem] font-serif font-bold tracking-[2px] text-gold-dark uppercase mt-0.5">
              Weds
            </span>
          </div>

          {/* Right Side: Groom (Ranjit) */}
          <div className="flex-1 flex flex-col items-center group min-w-0">
            <div className="w-full aspect-[3/4.4] rounded-[60px_60px_16px_16px] sm:rounded-[100px_100px_20px_20px] overflow-hidden border-2 sm:border-[3px] border-gold-bright shadow-[0_10px_24px_rgba(74,14,23,0.18)] bg-[#EFE6D8] relative">
              <img
                src={couple.groom.photo}
                alt={couple.groom.fullName}
                className="w-full h-full object-cover object-top block scale-[1.03] transition-transform duration-700 group-hover:scale-110"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(245,236,224,0.3),inset_0_-24px_24px_rgba(74,14,23,0.3)] pointer-events-none" />
            </div>

            {/* Groom Label Tag */}
            <div className="mt-1.5 sm:mt-2 text-center">
              <span className="font-royal text-[0.58rem] sm:text-[0.62rem] tracking-[1.2px] font-bold text-gold-dark uppercase block">
                वर (Groom)
              </span>
              <span className="font-devanagari text-[0.95rem] sm:text-[1.1rem] font-bold text-burgundy">
                {couple.groom.hindiFirstName}
              </span>
            </div>
          </div>

        </div>
      </ScrollReveal>

      {/* Rounded Forever Card with Corner Ornaments */}
      <ScrollReveal delay={200} className="w-full max-w-[340px] mt-2 sm:mt-3 relative z-[2]">
        <div className="relative w-full bg-white/95 backdrop-blur-md rounded-[18px] sm:rounded-[20px] py-3.5 sm:py-4 px-4 sm:px-5 border-[1.5px] border-gold-bright shadow-lg-wedding flex flex-col items-center">
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />

          <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] flex items-center justify-center drop-shadow-[0_6px_14px_rgba(197,147,65,0.4)] mb-1 hover:scale-110 transition-transform">
            <img
              src={couple.monogram}
              alt="Heart Seal"
              className="w-full h-full object-contain"
              width={70}
              height={70}
              loading="lazy"
            />
          </div>

          <div className="text-center">
            <span className="font-royal text-[0.6rem] sm:text-[0.65rem] tracking-[2.5px] sm:tracking-[3px] text-text-muted uppercase block">
              Our forever begins
            </span>
            <h2 className="font-serif text-[1.8rem] sm:text-[2.2rem] text-burgundy font-bold tracking-wide uppercase leading-tight mt-0.5">
              Together
            </h2>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
