import { Users, Hospital, Clock3, Star } from 'lucide-react';
import Counter from '../../components/ui/Counter';
import { container } from '../../styles/ui';

const stats = [
  { icon: Users, n: '9+', l: 'Verified specialists' },
  { icon: Hospital, n: '9', l: 'Departments' },
  { icon: Clock3, n: '24/7', l: 'Care availability' },
  { icon: Star, n: '4.8', l: 'Average rating' },
];

export default function DoctorsStats() {
  return (
    <section className="docs-stats border-b border-line bg-surface py-8 md:py-[42px] lg:py-[58px]">
      <div className={`${container} grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-6`}>
        {stats.map((s, i) => (
          <div
            key={i}
            className="docs-stat relative flex flex-col items-center gap-1.5 text-center"
          >
            <s.icon size={22} className="stroke-[1.4] text-accent" />
            <strong className="font-display text-[27px] font-bold leading-none tracking-[-1px] text-ink md:text-[34px]">
              <Counter value={s.n} />
            </strong>
            <span className="text-[15px] tracking-wide text-muted">{s.l}</span>
            {i < stats.length - 1 && (
              <span className="absolute right-[-12px] top-1/2 hidden h-12 w-px -translate-y-1/2 bg-line md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
