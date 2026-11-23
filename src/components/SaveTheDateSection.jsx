import React, { useRef, useEffect, useCallback } from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import { useWedding } from '../context/WeddingContext';
import { playScratchSound } from '../utils/audio';
import { launchCelebrationCrackers } from './FireworksCanvas';
import ScrollReveal from './common/ScrollReveal';
import { RoyalFiligreeDivider, CornerOrnament, GoldenMandala } from './common/RoyalOrnaments';

export default function SaveTheDateSection({ onShowToast }) {
  const { weddingDate } = WEDDING_DATA;
  const { scratchCardRevealed, setScratchCardRevealed } = useWedding();
  const canvasRef = useRef(null);
  const scratchCount = useRef(0);
  const isScratching = useRef(false);

  // Initialize Canvas Foil
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    const w = (canvas.width = container.clientWidth || 320);
    const h = (canvas.height = container.clientHeight || 180);

    const drawFoil = () => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#FBF0B9');
      grad.addColorStop(0.3, '#DFBA67');
      grad.addColorStop(0.7, '#C59341');
      grad.addColorStop(1, '#996822');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Gold border inside foil
      ctx.strokeStyle = 'rgba(74, 14, 23, 0.2)';
      ctx.lineWidth = 2;
      ctx.strokeRect(8, 8, w - 16, h - 16);

      ctx.fillStyle = '#4A0E17';
      ctx.font = 'bold 12px Montserrat, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('✨ SCRATCH TO REVEAL ✨', w / 2, h / 2 - 12);

      ctx.font = 'bold 24px "Playfair Display", "Cormorant Garamond", Georgia, serif';
      ctx.fillStyle = '#2B050B';
      ctx.fillText('The Wedding Date', w / 2, h / 2 + 18);
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(drawFoil);
    } else {
      drawFoil();
    }
  }, []);

  const triggerReveal = useCallback(() => {
    if (scratchCardRevealed) return;
    setScratchCardRevealed(true);
    launchCelebrationCrackers();
    if (onShowToast) {
      onShowToast('शुभ विवाह तिथि: 11 दिसम्बर 2026 🎉');
    }
  }, [scratchCardRevealed, setScratchCardRevealed, onShowToast]);

  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas || scratchCardRevealed) return;
    const ctx = canvas.getContext('2d');

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, 2 * Math.PI, false);
    ctx.fill();

    scratchCount.current += 1;
    if (scratchCount.current % 4 === 0) {
      playScratchSound();
    }
    if (scratchCount.current > 24) {
      triggerReveal();
    }
  };

  const getPos = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  // Google Calendar URL for 11 Dec 2026
  const googleCalUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Rakhi+%26+Ranjit+(राखी+संग+रंजीत)&dates=20261211T133000Z/20261211T183000Z&details=Join+us+for+the+auspicious+wedding+celebration+of+Rakhi+%26+Ranjit+on+11+December+2026.+Venue:+Gram-Sultanpur,+Nalanda,+Bihar&location=Gram+Sultanpur,+Nalanda,+Bihar";

  // WhatsApp Share URL
  const whatsappUrl = "https://api.whatsapp.com/send?text=शुभ%20विवाह!%20आप%20सभी%20राखी%20संग%20रंजीत%20के%20शुभ%20विवाह%20(11/12/2026,%20शुक्रवार)%20में%20सपरिवार%20सादर%20आमंत्रित%20हैं।%20स्थान:%20ग्राम-सुल्तानपुर,%20नालन्दा।";

  return (
    <section
      id="saveTheDateSection"
      className="py-11 px-4 sm:px-6 royal-velvet-section text-center relative overflow-hidden text-ivory"
      aria-label="Save the Date & Scratch Card"
    >
      {/* Background Rotating Mandala */}
      <div className="absolute top-1/2 -left-20 pointer-events-none opacity-25 animate-spin-slow" aria-hidden="true">
        <GoldenMandala size={280} />
      </div>

      <ScrollReveal>
        <div className="font-royal text-[0.72rem] tracking-[3px] font-bold text-[#ffd978] uppercase text-center mb-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          MARK YOUR CALENDAR
        </div>
        <h2 className="text-[3.2rem] leading-tight gold-animated-shimmer mb-2">
          Save the Date
        </h2>

        {/* Filigree Divider */}
        <RoyalFiligreeDivider />

        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm border-[1.5px] border-gold-bright py-1.5 px-4 rounded-full font-royal text-[0.75rem] tracking-[2px] font-bold text-[#ffe7a3] shadow-[0_4px_14px_rgba(0,0,0,0.4)] mb-6">
          <span className="w-4 h-4 inline-block">
            <img src="/assets/images/calendar.webp" alt="" className="w-full h-full object-contain" />
          </span>
          <span>शुभ विवाह • 11/12/2026 (शुक्रवार)</span>
        </div>
      </ScrollReveal>

      {/* Interactive Scratch Card */}
      <ScrollReveal delay={200}>
        <div className="relative w-full max-w-[320px] h-[180px] mx-auto mb-2.5 rounded-[18px] shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(223,186,103,0.3)] ring-[3px] ring-gold-bright overflow-hidden bg-gradient-to-br from-[#fff9ed] to-[#f4e8d4]">
          <CornerOrnament position="top-left" />
          <CornerOrnament position="bottom-right" />

          {/* Unveiled Content from Card */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#fff8ee] to-[#f3e6d0]">
            <span className="font-devanagari text-[0.95rem] font-bold text-burgundy tracking-wide">
              {weddingDate.hindiMonth} • {weddingDate.hindiDayOfWeek}
            </span>
            <div className="flex items-center gap-3 my-1">
              <span className="text-gold-bright text-[1.2rem]" aria-hidden="true">✦</span>
              <span className="font-sans text-[3.6rem] font-bold text-burgundy-deep leading-none tracking-tight">
                {weddingDate.day}
              </span>
              <span className="text-gold-bright text-[1.2rem]" aria-hidden="true">✦</span>
            </div>
            <span className="font-royal text-[0.85rem] tracking-[4px] text-gold-dark font-semibold">
              {weddingDate.year}
            </span>
            <div className="font-devanagari text-[0.75rem] text-burgundy font-medium mt-1.5">
              {weddingDate.tithi}
            </div>
            <div className="font-royal text-[0.62rem] tracking-[1.5px] text-text-muted font-semibold">
              {weddingDate.locationDisplay}
            </div>
          </div>

          {/* Canvas Scratch Foil Layer */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full cursor-crosshair touch-none z-[2] transition-opacity duration-700 ${
              scratchCardRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            onMouseDown={(e) => {
              isScratching.current = true;
              const pos = getPos(e);
              scratch(pos.x, pos.y);
            }}
            onMouseMove={(e) => {
              if (!isScratching.current) return;
              const pos = getPos(e);
              scratch(pos.x, pos.y);
            }}
            onMouseUp={() => {
              isScratching.current = false;
            }}
            onTouchStart={(e) => {
              isScratching.current = true;
              const pos = getPos(e);
              scratch(pos.x, pos.y);
            }}
            onTouchMove={(e) => {
              if (!isScratching.current) return;
              const pos = getPos(e);
              scratch(pos.x, pos.y);
            }}
            onTouchEnd={() => {
              isScratching.current = false;
            }}
            onClick={triggerReveal}
            role="button"
            tabIndex={0}
            aria-label="Scratch card to reveal wedding date"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') triggerReveal();
            }}
          />
        </div>

        <p className="text-[0.82rem] text-[#ffd978] italic mt-3 mb-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          ✨ Scratch or tap the gold card to unveil & celebrate ✨
        </p>

        {/* Quick Action Buttons: Add to Calendar & WhatsApp */}
        <div className="flex items-center justify-center gap-3 max-w-[320px] mx-auto">
          <a
            href={googleCalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-white/[0.1] backdrop-blur-sm border-[1.5px] border-gold-bright py-2.5 px-3 rounded-full text-xs font-royal tracking-wider text-[#ffe7a3] font-bold shadow-md hover:bg-gold-foil hover:text-burgundy-deep transition-all"
          >
            <span>📅</span>
            <span>Add to Cal</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 px-3 rounded-full text-xs font-royal tracking-wider font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <span>💬</span>
            <span>Share Invite</span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
