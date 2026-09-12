/* ================================================================
   Horizon PM — JavaScript (Vanilla, no dependencies)
   ================================================================ */
'use strict';

// ─── Nav scroll behavior ─────────────────────────────────────────
(function navScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ─── Mobile menu ─────────────────────────────────────────────────
(function mobileMenu() {
  const burger = document.getElementById('navBurger');
  const mobile = document.getElementById('navMobile');
  if (!burger || !mobile) return;

  const toggle = (open) => {
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    mobile.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  burger.addEventListener('click', () => {
    toggle(!burger.classList.contains('open'));
  });

  // Close when a link is clicked
  mobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });

  // Close on escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggle(false);
  });
})();

// ─── Intersection Observer — Reveal animations ───────────────────
(function revealObserver() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger children within the same parent if multiple
        const delay = entry.target.dataset.revealDelay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Number(delay));
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  els.forEach((el, i) => {
    // Auto-stagger sibling reveal elements
    const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    const idx = siblings.indexOf(el);
    if (idx > 0) {
      el.dataset.revealDelay = idx * 80;
    }
    observer.observe(el);
  });
})();

// ─── Smooth anchor scrolling with nav offset ─────────────────────
(function smoothAnchors() {
  const NAV_H = 80;
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_H;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

// ─── Active nav link highlight on scroll ─────────────────────────
(function activeNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav__link[href^="#"]');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--blue-light)';
          }
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
})();

// ─── Counter animation ───────────────────────────────────────────
(function countUp() {
  // Future extension point for animated numbers
})();

// ─── Bar chart — staggered entrance (already handled by CSS keyframes)
// The mock-bar animation is pure CSS; no JS needed.

// ─── Typing effect for hero heading (optional enhancement)
// Already handled with static HTML for best SEO. No JS typing.

// ─── Keyboard accessibility: FAQ items ───────────────────────────
(function faqA11y() {
  document.querySelectorAll('.faq__item').forEach(item => {
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.toggleAttribute('open');
      }
    });
  });
})();

// ─── Reduced motion respect ───────────────────────────────────────
(function reducedMotion() {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const apply = () => {
    if (mq.matches) {
      document.documentElement.style.setProperty('--transition-fast', '0ms');
      // Make all reveal elements visible immediately
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }
  };
  apply();
  mq.addEventListener('change', apply);
})();

