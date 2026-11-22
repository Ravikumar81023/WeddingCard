import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

/**
 * ScrollReveal Wrapper Component for clean staggered reveal animations
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-6 scale-[0.98]'
      } ${className}`}
    >
      {children}
    </div>
  );
}
