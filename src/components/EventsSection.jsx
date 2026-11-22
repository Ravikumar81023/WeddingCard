import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import ScrollReveal from './common/ScrollReveal';

export default function EventsSection() {
  const { festivities } = WEDDING_DATA;

  return (
    <section
      id="eventsSection"
      className="py-11 px-6 bg-gradient-to-b from-ivory-warm to-white text-center"
      aria-label="Wedding Ceremonies and Festivities"
    >
      <ScrollReveal>
        <div className="font-royal text-[0.72rem] tracking-[3px] font-bold text-gold-dark uppercase text-center mb-1.5">
          ॥ वैवाहिक कार्यक्रम ॥
        </div>
        <h2 className="text-[3.2rem] leading-tight script-gold">
          The Festivities
        </h2>

        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-ivory border border-gold-bright py-1.5 px-4 rounded-full font-devanagari text-[0.78rem] tracking-wide font-bold text-burgundy shadow-sm-wedding mt-2 mb-3">
          <img src="/assets/images/calendar.webp" alt="" className="w-4 h-4 object-contain inline-block" />
          <span>तीन दिवसीय मांगलिक वैवाहिक अनुष्ठान</span>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-3 mb-6 max-w-[180px] mx-auto" aria-hidden="true">
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
          <span className="text-gold-bright text-[0.85rem]">✦</span>
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
                className={`rounded-[18px] p-6 text-center transition-all duration-300 hover:-translate-y-1 ${
                  isRoyal
                    ? 'bg-gradient-to-br from-[#faf4e8] to-[#fffdf9] border-[1.5px] border-gold-bright shadow-[0_10px_28px_rgba(197,147,65,0.2)]'
                    : 'bg-white border border-[rgba(197,147,65,0.25)] shadow-sm-wedding hover:shadow-md-wedding'
                }`}
              >
                {/* Day Badge */}
                <div
                  className={`inline-block font-royal text-[0.62rem] tracking-[1.5px] font-bold py-1 px-3 rounded-full mb-2 ${
                    isRoyal
                      ? 'bg-gold-foil text-burgundy-deep shadow-[0_2px_8px_rgba(197,147,65,0.3)]'
                      : 'bg-cream-soft text-burgundy'
                  }`}
                >
                  {event.dayBadge}
                </div>

                {/* Tithi */}
                <div className="font-devanagari text-[0.8rem] text-gold-dark font-medium mb-2">
                  {event.tithi}
                </div>

                {/* Banner / Image */}
                {event.bannerImage && (
                  <div className="w-full my-1 mb-3.5 flex justify-center bg-[#fdf8f0] rounded-[14px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
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
                  <div className="w-full rounded-[14px] overflow-hidden my-1 mb-3.5 bg-[#fdf8f0] shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex items-center justify-center">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-auto object-contain rounded-[14px] block"
                      loading="lazy"
                      width={80}
                      height={80}
                    />
                  </div>
                )}

                {event.centerEmoji && (
                  <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#fff2a1] to-[#fad02c] shadow-[0_4px_12px_rgba(250,208,44,0.35)] flex items-center justify-center mx-auto mb-2.5 border border-gold-light">
                    <span className="text-[1.6rem]">{event.centerEmoji}</span>
                  </div>
                )}

                {/* Event Title */}
                <h3
                  className={`font-devanagari font-bold text-burgundy mb-1 ${
                    isRoyal ? 'text-[1.55rem]' : 'text-[1.35rem]'
                  }`}
                >
                  {event.title}
                </h3>

                {/* Venue Badge */}
                <div className={`inline-block text-[0.75rem] font-semibold py-1 px-3 rounded-xl my-1.5 mb-2.5 border ${event.badgeClass}`}>
                  <img
                    src={event.venueBadgeIcon}
                    alt=""
                    className="w-[15px] h-[15px] object-contain inline-block align-middle mr-1"
                  />
                  <span>{event.venueBadge}</span>
                </div>

                {/* Tagline */}
                <p className="font-serif text-[0.92rem] italic text-text-muted mb-4">
                  {event.tagline}
                </p>

                {/* Timeline pills for Day 3 */}
                {event.timeline && (
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {event.timeline.map((item, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-center gap-1.5 bg-ivory border border-gold-bright py-1 px-2.5 rounded-[20px] text-[0.72rem] font-semibold text-burgundy shadow-sm"
                      >
                        <img src={item.icon} alt="" className="w-[18px] h-[18px] object-contain" />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Event Metadata */}
                <div className="border-t border-dashed border-[rgba(197,147,65,0.35)] pt-3.5 flex flex-col gap-2">
                  <div className="flex items-center justify-center gap-2 text-[0.85rem] text-burgundy font-medium">
                    <img src="/assets/images/calendar.webp" alt="" className="w-[18px] h-[18px] object-contain" />
                    <span className="font-devanagari">{event.dateDisplay}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[0.85rem] text-burgundy font-medium">
                    <img src="/assets/images/clock.webp" alt="" className="w-[18px] h-[18px] object-contain" />
                    <span>
                      समय: <span className="text-[#b26a00] italic text-[0.8rem] font-devanagari">{event.timingDisplay}</span>
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
