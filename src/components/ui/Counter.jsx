import { useEffect, useRef, useState } from 'react';
import { reducedMotion } from '../../utils/reducedMotion';

export default function Counter({ value }) {
  const m = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = m ? parseFloat(m[1]) : 0;
  const dec = m && m[1].includes('.') ? 1 : 0;
  const suffix = m ? m[2] : '';
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!m) return;
    if (reducedMotion() || !('IntersectionObserver' in window)) {
      setN(target);
      return;
    }
    let raf;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min((t - t0) / 1600, 1);
          setN(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!m) return value;
  return (
    <span ref={ref}>
      {n.toFixed(dec)}
      {suffix}
    </span>
  );
}
