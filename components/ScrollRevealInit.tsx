'use client';

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with reveal-on-scroll class
    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
      elements.forEach((el) => observer.observe(el));
    };

    // Initial observation
    observeElements();

    // Re-observe on route changes (for Next.js)
    const interval = setInterval(observeElements, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return null;
}
