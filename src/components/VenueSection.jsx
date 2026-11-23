import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import ScrollReveal from './common/ScrollReveal';
import { CornerOrnament, RoyalFiligreeDivider, GoldenMandala } from './common/RoyalOrnaments';

export default function VenueSection({ onShowToast }) {
  const { venue, couple } = WEDDING_DATA;

  const handleCopy = (text, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (onShowToast) {
        onShowToast(`${label} copied to clipboard! 📋`);
      }
    }
  };

  return (
    <section
      id="venueSection"
      className="py-11 px-4 sm:px-6 royal-velvet-section text-center relative overflow-hidden text-ivory"
      aria-label="Wedding Venue and Residence Addresses"
    >
      {/* Background Rotating Mandala */}
      <div className="absolute top-1/2 -left-20 pointer-events-none opacity-25 animate-spin-slow" aria-hidden="true">
        <GoldenMandala size={280} />
      </div>

      <ScrollReveal>
        <div className="font-royal text-[0.72rem] tracking-[3px] font-bold text-[#ffd978] uppercase text-center mb-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          WHERE WE BEGIN OUR FOREVER
        </div>
        <h2 className="text-[3.2rem] leading-tight gold-animated-shimmer mb-2">
          The Venue &amp; Locations
        </h2>
        <RoyalFiligreeDivider />
      </ScrollReveal>

      {/* Main Banquet Hall Card */}
      <ScrollReveal delay={150}>
        <div className="relative bg-white/[0.07] backdrop-blur-md rounded-[22px] overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.6)] border border-gold-bright/40 my-6 text-left">
          {/* Banner */}
          <div className="w-full overflow-hidden relative bg-black/40">
            <img
              src={venue.bannerImage}
              alt={venue.title}
              className="w-full h-auto object-contain block hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={800}
              height={450}
            />
          </div>

          {/* Details Body */}
          <div className="p-5 sm:p-6">
            <div className="text-center mb-1.5">
              <img
                src="/assets/images/location.webp"
                alt="Location Pin"
                className="w-11 h-11 object-contain block mx-auto mb-1.5"
              />
            </div>
            <h3 className="font-serif text-[1.5rem] font-bold text-[#fff8ee] text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {venue.title}
            </h3>
            <p className="font-royal text-[0.68rem] tracking-[2px] text-[#ffd978] font-bold text-center mb-3">
              {venue.subtitle}
            </p>

            <p className="text-[0.88rem] text-[#fdeab9] leading-relaxed mb-4 text-left">
              {venue.description}
            </p>

            <div className="bg-white/[0.08] backdrop-blur-sm rounded-xl p-3.5 mb-4 text-left border border-gold-bright/35">
              <div className="flex items-start justify-between gap-2">
                <div className="text-[0.82rem] leading-snug">
                  <span className="font-bold text-[#ffe7a3] block mb-0.5">Banquet Address:</span>
                  <span className="text-[#fdeab9]">{venue.address}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(venue.address, 'Banquet Address')}
                  className="bg-white/[0.1] border border-gold-bright text-[0.68rem] text-[#ffe7a3] font-royal font-bold px-2.5 py-1 rounded-md hover:bg-gold-foil hover:text-burgundy-deep transition-all shrink-0"
                  title="Copy banquet address"
                >
                  Copy 📋
                </button>
              </div>
            </div>

            {/* Direct Directions Button */}
            <a
              href={venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#dfba67] via-[#fff5d1] to-[#c59341] text-burgundy-deep font-bold no-underline py-3 px-6 rounded-full font-royal text-[0.85rem] tracking-[2px] shadow-[0_6px_20px_rgba(223,186,103,0.4)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 mb-4"
              aria-label="Get directions to venue"
            >
              <span>➤</span>
              <span>Get Directions</span>
            </a>

            {/* Google Maps Embed */}
            <div className="rounded-[14px] overflow-hidden border border-gold-bright/40">
              <iframe
                src={venue.mapEmbedUrl}
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location Map"
              />
              <a
                href={venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-white/[0.08] p-2.5 font-royal text-[0.75rem] tracking-[1.5px] text-[#ffe7a3] font-bold border-t border-gold-bright/30 hover:bg-gold-foil hover:text-burgundy-deep transition-colors"
              >
                <img src="/assets/images/location.webp" alt="" className="w-4 h-4 object-contain inline-block mr-1" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Residences Grid */}
      <div className="flex flex-col gap-4 text-left">
        {/* Groom's Address */}
        <ScrollReveal delay={250}>
          <div className="relative bg-white/[0.07] backdrop-blur-md border border-gold-bright/40 rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-bright/70">
            <CornerOrnament position="top-right" />
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <img src={couple.groom.address.icon} alt="Groom" className="w-8 h-8 object-contain" />
                <h4 className="font-serif text-[1.25rem] font-bold text-[#fff8ee]">
                  {couple.groom.address.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(couple.groom.address.display, "Groom's Address")}
                className="bg-white/[0.1] border border-gold-bright text-[0.68rem] text-[#ffe7a3] font-royal font-bold px-2.5 py-0.5 rounded hover:bg-gold-foil hover:text-burgundy-deep transition-all"
              >
                Copy
              </button>
            </div>
            <a
              href={couple.groom.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-inherit no-underline group"
              title="Open Groom's Address in Google Maps"
            >
              <div className="bg-white/[0.06] p-3 rounded-[10px] border border-dashed border-gold-bright/40 group-hover:bg-white/[0.1] transition-colors">
                <p className="text-[0.85rem] text-[#fdeab9] leading-relaxed font-medium mb-2">
                  {couple.groom.address.display}
                </p>
                <div className="flex items-center gap-1.5 font-royal text-[0.7rem] tracking-[1.5px] font-bold text-[#ffd978]">
                  <img src="/assets/images/location.webp" alt="" className="w-[18px] h-[18px] object-contain" />
                  <span>Open Location in Google Maps</span>
                </div>
              </div>
            </a>
          </div>
        </ScrollReveal>

        {/* Bride's Address */}
        <ScrollReveal delay={350}>
          <div className="relative bg-white/[0.07] backdrop-blur-md border border-gold-bright/40 rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-bright/70">
            <CornerOrnament position="top-right" />
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <img src={couple.bride.address.icon} alt="Bride" className="w-8 h-8 object-contain" />
                <h4 className="font-serif text-[1.25rem] font-bold text-[#fff8ee]">
                  {couple.bride.address.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(couple.bride.address.display, "Bride's Address")}
                className="bg-white/[0.1] border border-gold-bright text-[0.68rem] text-[#ffe7a3] font-royal font-bold px-2.5 py-0.5 rounded hover:bg-gold-foil hover:text-burgundy-deep transition-all"
              >
                Copy
              </button>
            </div>
            <a
              href={couple.bride.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-inherit no-underline group"
              title="Open Bride's Address in Google Maps"
            >
              <div className="bg-white/[0.06] p-3 rounded-[10px] border border-dashed border-gold-bright/40 group-hover:bg-white/[0.1] transition-colors">
                <p className="text-[0.85rem] text-[#fdeab9] leading-relaxed font-medium mb-2">
                  {couple.bride.address.display}
                </p>
                <div className="flex items-center gap-1.5 font-royal text-[0.7rem] tracking-[1.5px] font-bold text-[#ffd978]">
                  <img src="/assets/images/location.webp" alt="" className="w-[18px] h-[18px] object-contain" />
                  <span>Open Location in Google Maps</span>
                </div>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
