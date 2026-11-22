import { useEffect, useRef, useState } from 'react';

/**
 * Performant Intersection Observer Hook for scroll reveal animations
 * @param {Object} options - IntersectionObserverInit options
 * @returns {[React.RefObject, boolean]}
 */
export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: options.threshold ?? 0.15,
      rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      ...options,
    });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return [elementRef, isVisible];
}
