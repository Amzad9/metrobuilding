'use client';

export function initScrollReveal() {
  if (typeof window === 'undefined') return;

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
  const elements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
  elements.forEach((el) => observer.observe(el));

  return () => {
    observer.disconnect();
  };
}
