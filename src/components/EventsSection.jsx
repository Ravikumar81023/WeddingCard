import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import ScrollReveal from './common/ScrollReveal';
import { GoldenMandala } from './common/RoyalOrnaments';

export default function EventsSection() {
  const { festivities } = WEDDING_DATA;

  return (
    <section
      id="eventsSection"
      className="py-11 px-4 sm:px-6 royal-velvet-section text-center relative overflow-hidden text-ivory"
      aria-label="Wedding Ceremonies and Festivities"
    >
      {/* Background Rotating Mandala */}
      <div className="absolute top-1/3 -right-20 pointer-events-none opacity-25 animate-spin-reverse-slow" aria-hidden="true">
        <GoldenMandala size={280} />
      </div>

      <ScrollReveal>
        <div className="font-royal text-[0.72rem] tracking-[3px] font-bold text-[#ffd978] uppercase text-center mb-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          ॥ वैवाहिक कार्यक्रम ॥
        </div>
        <h2 className="text-[3.2rem] leading-tight gold-animated-shimmer mb-2">
          The Festivities
        </h2>

        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm border-[1.5px] border-gold-bright py-1.5 px-4 rounded-full font-devanagari text-[0.8rem] tracking-wide font-bold text-[#ffe7a3] shadow-[0_4px_14px_rgba(0,0,0,0.4)] mt-2 mb-3">
          <img src="/assets/images/calendar.webp" alt="" className="w-4 h-4 object-contain inline-block" />
          <span>तीन दिवसीय मांगलिक वैवाहिक अनुष्ठान</span>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-3 mb-6 max-w-[180px] mx-auto" aria-hidden="true">
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
          <span className="text-[#ffd978] text-[0.85rem]">✦</span>
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
        </div>
      </ScrollReveal>

      {/* Events List */}
      <div className="flex flex-col gap-5">
        {festivities.map((event, index) => {
          const isRoyal = event.isHighlight;

          return (
            <ScrollReveal key={event.id} delay={index * 150}>
              <article
                className={`rounded-[22px] p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${
                  isRoyal
                    ? 'bg-white/[0.08] backdrop-blur-md border-2 border-gold-bright shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_25px_rgba(223,186,103,0.25)]'
                    : 'bg-white/[0.06] backdrop-blur-md border border-gold-bright/40 shadow-[0_10px_28px_rgba(0,0,0,0.5)] hover:border-gold-bright/70'
                }`}
              >
                {/* Day Badge */}
                <div className="inline-block font-royal text-[0.65rem] tracking-[1.5px] font-bold py-1 px-3.5 rounded-full mb-2 bg-gold-foil text-burgundy-deep shadow-md">
                  {event.dayBadge}
                </div>

                {/* Tithi */}
                <div className="font-devanagari text-[0.85rem] text-[#ffd978] font-medium mb-2.5">
                  {event.tithi}
                </div>

                {/* Banner / Image */}
                {event.bannerImage && (
                  <div className="w-full my-1 mb-3.5 flex justify-center bg-black/40 rounded-[14px] overflow-hidden border border-gold-bright/30 shadow-[0_6px_20px_rgba(0,0,0,0.5)]">
                    <img
                      src={event.bannerImage}
                      alt={event.title}
                      className="w-full h-auto object-contain block rounded-[14px]"
                      loading="lazy"
                      width={400}
                      height={250}
                    />
                  </div>
                )}

                {event.image && (
                  <div className="w-full rounded-[14px] overflow-hidden my-1 mb-3.5 bg-black/40 border border-gold-bright/30 shadow-[0_6px_20px_rgba(0,0,0,0.5)] flex items-center justify-center">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-auto object-contain rounded-[14px] block"
                      loading="lazy"
                      width={400}
                      height={250}
                    />
                  </div>
                )}

                {/* Event Title */}
                <h3
                  className={`font-devanagari font-bold text-[#fff8ee] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-1 ${
                    isRoyal ? 'text-[1.55rem] sm:text-[1.75rem]' : 'text-[1.35rem] sm:text-[1.5rem]'
                  }`}
                >
                  {event.title}
                </h3>

                {/* Venue Badge */}
                <div className="inline-block text-[0.75rem] font-semibold py-1.5 px-3.5 rounded-full my-1.5 mb-2.5 bg-white/[0.08] border border-gold-bright/40 text-[#fdeab9]">
                  <img
                    src={event.venueBadgeIcon}
                    alt=""
                    className="w-[15px] h-[15px] object-contain inline-block align-middle mr-1.5"
                  />
                  <span>{event.venueBadge}</span>
                </div>

                {/* Tagline */}
                <p className="font-serif text-[0.92rem] italic text-[#fadc7a] mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  {event.tagline}
                </p>

                {/* Timeline pills for Day 3 */}
                {event.timeline && (
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {event.timeline.map((item, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-center gap-1.5 bg-white/[0.1] border border-gold-bright/40 py-1 px-3 rounded-[20px] text-[0.72rem] font-semibold text-[#fff2c6] shadow-sm"
                      >
                        <img src={item.icon} alt="" className="w-[18px] h-[18px] object-contain" />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Event Metadata */}
                <div className="border-t border-dashed border-gold-bright/30 pt-3.5 flex flex-col gap-2">
                  <div className="flex items-center justify-center gap-2 text-[0.88rem] text-[#fdeab9] font-medium">
                    <img src="/assets/images/calendar.webp" alt="" className="w-[18px] h-[18px] object-contain" />
                    <span className="font-devanagari">{event.dateDisplay}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[0.88rem] text-[#fdeab9] font-medium">
                    <img src="/assets/images/clock.webp" alt="" className="w-[18px] h-[18px] object-contain" />
                    <span>
                      समय: <span className="text-[#ffd978] italic text-[0.82rem] font-devanagari font-semibold">{event.timingDisplay}</span>
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
