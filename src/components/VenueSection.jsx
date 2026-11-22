import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import ScrollReveal from './common/ScrollReveal';
import { CornerOrnament, RoyalFiligreeDivider } from './common/RoyalOrnaments';

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
      className="py-11 px-6 bg-ivory-warm text-center relative"
      aria-label="Wedding Venue and Residence Addresses"
    >
      <ScrollReveal>
        <div className="font-royal text-[0.72rem] tracking-[3px] font-bold text-gold-dark uppercase text-center mb-1.5">
          WHERE WE BEGIN OUR FOREVER
        </div>
        <h2 className="text-[3.2rem] leading-tight script-gold">
          The Venue &amp; Locations
        </h2>
        <RoyalFiligreeDivider />
      </ScrollReveal>

      {/* Main Banquet Hall Card */}
      <ScrollReveal delay={150}>
        <div className="relative bg-white rounded-[20px] overflow-hidden shadow-md-wedding border border-[rgba(197,147,65,0.35)] my-6 text-left">
          {/* Banner */}
          <div className="w-full overflow-hidden relative bg-[#fdf8f0]">
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
          <div className="p-6">
            <div className="text-center mb-1.5">
              <img
                src="/assets/images/location.webp"
                alt="Location Pin"
                className="w-11 h-11 object-contain block mx-auto mb-1.5"
              />
            </div>
            <h3 className="font-serif text-[1.45rem] font-bold text-burgundy text-center">
              {venue.title}
            </h3>
            <p className="font-royal text-[0.65rem] tracking-[2px] text-gold-dark font-bold text-center mb-3">
              {venue.subtitle}
            </p>

            <p className="text-[0.85rem] text-text-dark leading-relaxed mb-4 text-left">
              {venue.description}
            </p>

            <div className="bg-cream-soft rounded-xl p-3.5 mb-4 text-left border border-gold-light/40">
              <div className="flex items-start justify-between gap-2">
                <div className="text-[0.8rem] leading-snug">
                  <span className="font-bold text-burgundy block mb-0.5">Banquet Address:</span>
                  <span className="text-text-dark">{venue.address}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(venue.address, 'Banquet Address')}
                  className="bg-white border border-gold-bright text-[0.68rem] text-burgundy font-royal font-bold px-2.5 py-1 rounded-md hover:bg-gold-foil hover:text-burgundy-deep transition-all shrink-0"
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
              className="flex items-center justify-center gap-2.5 bg-burgundy text-[#fff3cc] no-underline py-3.5 px-6 rounded-full font-royal text-[0.82rem] tracking-[2px] font-bold shadow-[0_6px_18px_rgba(74,14,23,0.3)] transition-all duration-300 hover:bg-burgundy-light hover:-translate-y-0.5 border border-gold-bright mb-4"
              aria-label="Get directions to Shivdhari Banquet Hall"
            >
              <span>➤</span>
              <span>Get Directions</span>
            </a>

            {/* Google Maps Embed */}
            <div className="rounded-[14px] overflow-hidden border border-gold-light">
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
                className="flex items-center justify-center gap-1 bg-ivory p-2 font-royal text-[0.72rem] tracking-[1.5px] text-burgundy font-bold border-t border-[#ece3d4]"
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
          <div className="relative bg-white border-[1.5px] border-gold-bright rounded-2xl p-4 shadow-sm-wedding transition-all duration-300 hover:-translate-y-1 hover:shadow-md-wedding">
            <CornerOrnament position="top-right" />
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <img src={couple.groom.address.icon} alt="Groom" className="w-8 h-8 object-contain" />
                <h4 className="font-serif text-[1.25rem] font-bold text-burgundy">
                  {couple.groom.address.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(couple.groom.address.display, "Groom's Address")}
                className="bg-cream-soft border border-gold-light text-[0.65rem] text-burgundy font-royal font-bold px-2 py-0.5 rounded hover:bg-gold-foil hover:text-burgundy-deep transition-all"
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
              <div className="bg-cream-soft p-3 rounded-[10px] border border-dashed border-[rgba(197,147,65,0.5)] group-hover:bg-[#f8efe4] transition-colors">
                <p className="text-[0.85rem] text-text-dark leading-relaxed font-medium mb-2">
                  {couple.groom.address.display}
                </p>
                <div className="flex items-center gap-1.5 font-royal text-[0.68rem] tracking-[1.5px] font-bold text-burgundy">
                  <img src="/assets/images/location.webp" alt="" className="w-[18px] h-[18px] object-contain" />
                  <span>Open Location in Google Maps</span>
                </div>
              </div>
            </a>
          </div>
        </ScrollReveal>

        {/* Bride's Address */}
        <ScrollReveal delay={350}>
          <div className="relative bg-white border-[1.5px] border-gold-bright rounded-2xl p-4 shadow-sm-wedding transition-all duration-300 hover:-translate-y-1 hover:shadow-md-wedding">
            <CornerOrnament position="top-right" />
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <img src={couple.bride.address.icon} alt="Bride" className="w-8 h-8 object-contain" />
                <h4 className="font-serif text-[1.25rem] font-bold text-burgundy">
                  {couple.bride.address.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(couple.bride.address.display, "Bride's Address")}
                className="bg-cream-soft border border-gold-light text-[0.65rem] text-burgundy font-royal font-bold px-2 py-0.5 rounded hover:bg-gold-foil hover:text-burgundy-deep transition-all"
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
              <div className="bg-cream-soft p-3 rounded-[10px] border border-dashed border-[rgba(197,147,65,0.5)] group-hover:bg-[#f8efe4] transition-colors">
                <p className="text-[0.85rem] text-text-dark leading-relaxed font-medium mb-2">
                  {couple.bride.address.display}
                </p>
                <div className="flex items-center gap-1.5 font-royal text-[0.68rem] tracking-[1.5px] font-bold text-burgundy">
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
