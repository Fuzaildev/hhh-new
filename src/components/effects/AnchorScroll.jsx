import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AnchorScroll() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      if (!id || id.startsWith('/')) return;
      e.preventDefault();
      const go = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (id === 'main') el?.focus({ preventScroll: true });
      };
      if (pathname !== '/') {
        nav('/');
        setTimeout(go, 250);
      } else {
        go();
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [pathname, nav]);

  return null;
}
