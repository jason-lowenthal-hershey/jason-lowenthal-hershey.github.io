(function () {
  'use strict';

  const root = document.documentElement;
  const themeKey = 'jlh-theme';

  /* ---------- Theme ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem(themeKey);
  if (stored === 'light' || stored === 'dark') {
    root.setAttribute('data-theme', stored);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    root.setAttribute('data-theme', 'light');
  }
  function syncToggle() {
    if (!themeToggle) return;
    const theme = root.getAttribute('data-theme') || 'dark';
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  syncToggle();
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      localStorage.setItem(themeKey, next);
      syncToggle();
    });
  }

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* ---------- Sticky header elevation ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.setAttribute('data-elevated', String(window.scrollY > 12));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Scroll-spy on primary nav ---------- */
  const navLinks = document.querySelectorAll('.primary-nav a[href^="#"]');
  if (navLinks.length && 'IntersectionObserver' in window) {
    const linkById = new Map();
    navLinks.forEach(a => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) linkById.set(target, a);
    });
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = linkById.get(entry.target);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    linkById.forEach((_, target) => spy.observe(target));
  }

  /* ---------- Reveal-on-scroll ---------- */
  const revealable = document.querySelectorAll(
    '.section-head, .timeline-item, .project-card, .card, .pullquote, .article-list a, .art-card, .edu-card, .video-frame, .speaking-meta, .contact-primary, .contact-links a'
  );
  if (revealable.length && 'IntersectionObserver' in window) {
    revealable.forEach(el => el.classList.add('reveal'));
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    revealable.forEach(el => reveal.observe(el));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

})();
