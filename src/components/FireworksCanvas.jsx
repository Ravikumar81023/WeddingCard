import React, { useEffect, useRef } from 'react';
import { playCrackerCelebrationSound } from '../utils/audio';

let fireworksQueue = [];

function hexToRgbStr(hex) {
  const clean = hex.replace('#', '');
  return `${parseInt(clean.substring(0, 2), 16)}, ${parseInt(clean.substring(2, 4), 16)}, ${parseInt(clean.substring(4, 6), 16)}`;
}

export function launchCelebrationCrackers() {
  playCrackerCelebrationSound();

  const colors = [
    '#DFBA67', '#FBF0B9', '#FF4E50', '#FC913A', '#F9D423', '#EDE574',
    '#FFFFFF', '#FF85A1', '#C9F0FF', '#B8FFB8', '#FFD700', '#FF6B6B'
  ];

  const w = window.innerWidth;
  const h = window.innerHeight;

  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const cx = 0.1 * w + Math.random() * w * 0.8;
      const cy = 0.1 * h + Math.random() * h * 0.5;
      const col1 = colors[Math.floor(Math.random() * colors.length)];
      const col2 = colors[Math.floor(Math.random() * colors.length)];

      for (let j = 0; j < 100; j++) {
        const angle = (j / 100) * Math.PI * 2;
        const speed = 10 * Math.random() + 3;
        const color = Math.random() < 0.3 ? '#FFD700' : Math.random() < 0.5 ? col1 : col2;
        fireworksQueue.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed * (0.5 + 0.5 * Math.random()),
          vy: Math.sin(angle) * speed * (0.5 + 0.5 * Math.random()),
          size: 3.5 * Math.random() + 1.5,
          rgbStr: hexToRgbStr(color),
          alpha: 1,
          decay: 0.012 + 0.008 * Math.random(),
          gravity: 0.06 + 0.04 * Math.random(),
          drag: 0.97,
          type: Math.random() < 0.15 ? 'star' : 'circle',
          rotation: Math.random() * Math.PI * 2,
        });
      }

      for (let r = 0; r < 3; r++) {
        fireworksQueue.push({
          x: cx,
          y: cy,
          vx: 0,
          vy: 0,
          size: 5 + 8 * r,
          rgbStr: hexToRgbStr(col1),
          alpha: 0.8,
          decay: 0.025,
          gravity: 0,
          drag: 1,
          type: 'ring',
        });
      }

      for (let s = 0; s < 20; s++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 * Math.random() + 1;
        fireworksQueue.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          size: 2 * Math.random() + 1,
          rgbStr: hexToRgbStr('#FBF0B9'),
          alpha: 1,
          decay: 0.006,
          gravity: 0.03,
          drag: 0.99,
          type: 'star',
          rotation: Math.random() * Math.PI * 2,
        });
      }
    }, 180 * i + 60 * Math.random());
  }
}

export default function FireworksCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    let animationId;
    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (fireworksQueue.length > 0) {
        ctx.fillStyle = 'rgba(0,0,0,0.18)';
        ctx.fillRect(0, 0, w, h);

        for (let i = fireworksQueue.length - 1; i >= 0; i--) {
          const p = fireworksQueue[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += p.gravity;
          p.vx *= p.drag;
          p.vy *= p.drag;
          p.alpha -= p.decay;
          p.size *= 0.97;

          if (p.alpha <= 0 || p.size < 0.3) {
            fireworksQueue.splice(i, 1);
            continue;
          }

          const alphaStr = Math.max(0, p.alpha).toFixed(3);

          if (p.type === 'star') {
            ctx.fillStyle = `rgba(${p.rgbStr}, ${alphaStr})`;
            p.rotation = (p.rotation || 0) + 0.15;
            ctx.beginPath();
            for (let k = 0; k < 4; k++) {
              const rot = (k / 4) * Math.PI * 2 + p.rotation;
              const r = k % 2 === 0 ? 2 * p.size : 0.6 * p.size;
              const px = p.x + Math.cos(rot) * r;
              const py = p.y + Math.sin(rot) * r;
              if (k === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
          } else if (p.type === 'ring') {
            ctx.strokeStyle = `rgba(${p.rgbStr}, ${alphaStr})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3 * p.size, 0, 2 * Math.PI);
            ctx.stroke();
          } else {
            ctx.fillStyle = `rgba(${p.rgbStr}, ${alphaStr})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
            ctx.fill();
          }
        }
      } else {
        ctx.clearRect(0, 0, w, h);
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-[1001]"
      aria-hidden="true"
    />
  );
}
