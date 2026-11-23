import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import ScrollReveal from './common/ScrollReveal';

export default function ThankYouSection() {
  const { couple, weddingDate, host } = WEDDING_DATA;

  return (
    <footer
      id="thankYouSection"
      className="py-[60px] px-6 bg-[radial-gradient(circle_at_50%_20%,#4a0e17_0%,#200408_100%)] text-ivory text-center"
      aria-label="Gratitude &amp; Contact Information"
    >
      <ScrollReveal>
        {/* Heart Emblem */}
        <div className="text-[1.8rem] text-gold-bright mb-2" aria-hidden="true">
          ♡
        </div>

        <div className="font-royal text-[0.72rem] tracking-[3px] font-bold text-gold-light uppercase text-center mb-1">
          दर्शनार्थी / निमंत्रक
        </div>

        <h2 className="font-serif text-[2.8rem] text-ivory text-center leading-tight mb-2">
          Thank You
        </h2>

        <p className="font-serif text-[1.05rem] leading-[1.7] text-cream-sand max-w-[330px] mx-auto my-2 mb-4 italic">
          हमारी खुशियों में शामिल होकर वर-वधू को अपना स्नेहाशीष प्रदान करें। आप सभी का आगमन हमारे लिए परम सौभाग्य की बात होगी।
        </p>

        {/* Script Names */}
        <div className="font-serif text-[2.4rem] sm:text-[3rem] font-bold script-gold mb-1 select-none tracking-wide">
          {couple.bride.firstName} Weds {couple.groom.firstName}
        </div>
        <div className="font-devanagari text-xl text-gold-bright mb-8 font-medium">
          {couple.bride.hindiFirstName} संग {couple.groom.hindiFirstName}
        </div>
      </ScrollReveal>

      {/* Host / प्रेषक Contact Block from Card */}
      <ScrollReveal delay={150}>
        <div className="mb-10 bg-white/[0.05] border border-gold-bright/40 rounded-2xl p-5 max-w-[340px] mx-auto backdrop-blur-sm">
          <div className="font-devanagari text-[1rem] text-gold-bright font-bold mb-1">
            {host.title} {host.name}
          </div>
          <p className="font-devanagari text-xs text-cream-sand mb-4">
            {host.address}
          </p>

          <span className="font-royal text-[0.65rem] tracking-[2px] text-gold-light block mb-3 uppercase">
            कृपया संपर्क करें / KINDLY REACH US AT
          </span>

          <div className="flex flex-col gap-3">
            {host.phoneNumbers.map((item, idx) => (
              <a
                key={idx}
                href={`tel:${item.number}`}
                className="flex items-center justify-between bg-white/[0.08] border-[1.5px] border-gold-bright text-[#fff2c6] no-underline py-2.5 px-4 rounded-full font-sans text-[0.85rem] transition-all duration-300 hover:bg-gold-foil hover:text-burgundy-deep hover:-translate-y-0.5 hover:shadow-gold-wedding focus:outline-none"
                aria-label={`Call ${item.number}`}
              >
                <span className="font-royal text-[0.62rem] tracking-[2px] font-bold uppercase whitespace-nowrap">
                  {item.label}:
                </span>
                <span className="font-semibold tracking-[1px] text-[0.88rem]">
                  {item.number}
                </span>
                <img src="/assets/images/iphone.webp" alt="call" className="w-5 h-5 object-contain ml-1" />
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Final Seal & Date */}
      <ScrollReveal delay={250}>
        <div className="flex flex-col items-center">
          <div className="w-[90px] h-[90px] flex items-center justify-center drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)] mb-3">
            <img
              src={couple.monogram}
              alt="Heart Seal"
              className="w-full h-full object-contain"
              width={80}
              height={80}
              loading="lazy"
            />
          </div>
          <p className="font-devanagari text-[0.85rem] text-gold-light font-medium">
            शुभ विवाह • {weddingDate.hindiDisplayDate}
          </p>
          <p className="font-royal text-[0.62rem] tracking-[2px] text-cream-sand mt-1 uppercase">
            {weddingDate.displayDate}
          </p>
          <p className="text-[0.65rem] text-gold-light/60 mt-3 italic font-devanagari">
            {host.cardCredit}
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
}
