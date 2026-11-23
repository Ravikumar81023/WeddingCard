import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import { useCountdown } from '../hooks/useCountdown';
import ScrollReveal from './common/ScrollReveal';
import { DiyaLamp } from './common/RoyalOrnaments';

export default function CountdownSection() {
  const { weddingDate } = WEDDING_DATA;
  const { days, hours, minutes, seconds } = useCountdown(weddingDate.targetIso);

  return (
    <section
      id="countdownSection"
      className="py-10 sm:py-[50px] px-3 sm:px-6 bg-[radial-gradient(circle_at_50%_30%,#380b12_0%,#200408_100%)] text-ivory text-center relative overflow-hidden"
      aria-label="Wedding Countdown Timer"
    >
      <ScrollReveal>
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <DiyaLamp size={22} />
          <span className="font-royal text-[0.68rem] sm:text-[0.72rem] tracking-[2.5px] sm:tracking-[3px] font-bold text-gold-light uppercase">
            THE COUNTDOWN BEGINS
          </span>
          <DiyaLamp size={22} />
        </div>
        <h2 className="text-[2.8rem] sm:text-[3.2rem] leading-tight script-gold">
          Counting the Moments
        </h2>
      </ScrollReveal>

      {/* Widget */}
      <ScrollReveal delay={150}>
        <div className="bg-white/[0.06] backdrop-blur-md rounded-[18px] py-5 sm:py-6 px-3 sm:px-4 border-[1.5px] border-gold-bright shadow-[0_10px_28px_rgba(0,0,0,0.4)] text-ivory max-w-[340px] mx-auto mt-4 relative">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2" role="timer" aria-live="polite">
            {/* Days */}
            <div className="bg-gradient-to-b from-white/[0.12] to-white/[0.04] border border-[rgba(223,186,103,0.35)] rounded-[10px] py-2 sm:py-2.5 px-1.5 sm:px-2 min-w-[52px] sm:min-w-[60px] flex flex-col items-center shadow-inner">
              <span className="font-serif text-[1.5rem] sm:text-[1.8rem] font-bold text-[#fff2c6] leading-none">
                {days}
              </span>
              <span className="font-royal text-[0.52rem] sm:text-[0.55rem] tracking-[1px] sm:tracking-[1.5px] text-gold-light mt-1">
                DAYS
              </span>
            </div>

            <div className="text-[1.1rem] sm:text-[1.3rem] text-gold-bright font-bold animate-pulse" aria-hidden="true">:</div>

            {/* Hours */}
            <div className="bg-gradient-to-b from-white/[0.12] to-white/[0.04] border border-[rgba(223,186,103,0.35)] rounded-[10px] py-2 sm:py-2.5 px-1.5 sm:px-2 min-w-[52px] sm:min-w-[60px] flex flex-col items-center shadow-inner">
              <span className="font-serif text-[1.5rem] sm:text-[1.8rem] font-bold text-[#fff2c6] leading-none">
                {hours}
              </span>
              <span className="font-royal text-[0.52rem] sm:text-[0.55rem] tracking-[1px] sm:tracking-[1.5px] text-gold-light mt-1">
                HOURS
              </span>
            </div>

            <div className="text-[1.1rem] sm:text-[1.3rem] text-gold-bright font-bold animate-pulse" aria-hidden="true">:</div>

            {/* Minutes */}
            <div className="bg-gradient-to-b from-white/[0.12] to-white/[0.04] border border-[rgba(223,186,103,0.35)] rounded-[10px] py-2 sm:py-2.5 px-1.5 sm:px-2 min-w-[52px] sm:min-w-[60px] flex flex-col items-center shadow-inner">
              <span className="font-serif text-[1.5rem] sm:text-[1.8rem] font-bold text-[#fff2c6] leading-none">
                {minutes}
              </span>
              <span className="font-royal text-[0.52rem] sm:text-[0.55rem] tracking-[1px] sm:tracking-[1.5px] text-gold-light mt-1">
                MINUTES
              </span>
            </div>

            <div className="text-[1.1rem] sm:text-[1.3rem] text-gold-bright font-bold animate-pulse" aria-hidden="true">:</div>

            {/* Seconds */}
            <div className="bg-gradient-to-b from-white/[0.12] to-white/[0.04] border border-[rgba(223,186,103,0.35)] rounded-[10px] py-2 sm:py-2.5 px-1.5 sm:px-2 min-w-[52px] sm:min-w-[60px] flex flex-col items-center shadow-inner">
              <span className="font-serif text-[1.5rem] sm:text-[1.8rem] font-bold text-[#fff2c6] leading-none">
                {seconds}
              </span>
              <span className="font-royal text-[0.52rem] sm:text-[0.55rem] tracking-[1px] sm:tracking-[1.5px] text-gold-light mt-1">
                SECONDS
              </span>
            </div>
          </div>

          <div className="font-devanagari text-[0.82rem] sm:text-[0.88rem] text-gold-bright mt-3 font-normal tracking-wide">
            || शुभ विवाह • मङ्गलमय दाम्पत्य जीवन ||
          </div>

          <div className="text-[0.68rem] sm:text-[0.72rem] text-cream-sand mt-1.5 italic">
            Until forever begins • {weddingDate.displayDate}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
