import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { reducedMotion } from '../../utils/reducedMotion';

const REVEAL =
  '.section-heading,.service-card,.department-layout>div:first-child,.department-card,.expert-feature,.doctor-preview-head,.doctor-preview-card,.commitment-heading,.values-grid>div,.packages>div:first-child,.package-card,.tele-layout>div,.faq-section>div:first-child,.faq-item,.contact-layout>div,.docs-stat,.docs-toolbar,.docs-cta-inner>div,.footer-top>div';

export default function RevealEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (reducedMotion() || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target;
          io.unobserve(el);
          const d = Number(el.dataset.rd || 0);
          el.style.setProperty('--rd', d + 'ms');
          requestAnimationFrame(() => el.classList.add('in'));
          setTimeout(() => {
            el.classList.remove('rv', 'in');
            el.style.removeProperty('--rd');
          }, d + 1100);
        }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    const seen = new WeakSet();
    const scan = () =>
      document.querySelectorAll(REVEAL).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
        const sibs = [...el.parentElement.children].filter((c) =>
          c.matches(REVEAL),
        );
        el.dataset.rd = Math.min(sibs.indexOf(el), 5) * 90;
        el.classList.add('rv');
        io.observe(el);
      });

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.getElementById('root'), {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
