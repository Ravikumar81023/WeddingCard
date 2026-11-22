import { useState, useEffect } from 'react';

/**
 * Production countdown timer hook with interval drift compensation
 * @param {string|Date} targetDateIso - Target date ISO string
 * @returns {{ days: string, hours: string, minutes: string, seconds: string, isCompleted: boolean }}
 */
export function useCountdown(targetDateIso) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    isCompleted: false,
  });

  useEffect(() => {
    const targetMs = new Date(targetDateIso).getTime();

    const calculate = () => {
      const now = Date.now();
      const diff = targetMs - now;

      if (diff <= 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          isCompleted: true,
        });
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0'),
        isCompleted: false,
      });
    };

    calculate();
    const timerId = setInterval(calculate, 1000);

    return () => clearInterval(timerId);
  }, [targetDateIso]);

  return timeLeft;
}
