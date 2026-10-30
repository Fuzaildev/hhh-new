import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const bar = useRef(null);

  useEffect(() => {
    let raf = 0;
    const upd = () => {
      raf = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      if (bar.current) {
        bar.current.style.transform = `scaleX(${max > 0 ? el.scrollTop / max : 0})`;
      }
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(upd);
    };
    upd();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-x-0 -bottom-px h-[3px]" aria-hidden="true">
      <span
        ref={bar}
        className="scroll-progress block h-full bg-gradient-to-r from-accent to-sky"
      />
    </div>
  );
}
