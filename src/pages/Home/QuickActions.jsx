import {
  Stethoscope,
  CalendarDays,
  FileText,
  FlaskConical,
  ArrowUpRight,
} from 'lucide-react';
import { container } from '../../styles/ui';
import { cn } from '../../utils/cn';

const actions = [
  {
    key: 'search',
    icon: Stethoscope,
    title: 'Find a doctor',
    sub: 'The right expert for you',
  },
  {
    key: 'appointment',
    icon: CalendarDays,
    title: 'Book an appointment',
    sub: 'Care that fits your schedule',
  },
  {
    key: 'portal',
    icon: FileText,
    title: 'Patient portal',
    sub: 'Your health, in one place',
  },
  {
    key: 'collection',
    icon: FlaskConical,
    title: 'Home sample collection',
    sub: 'Convenient care at your doorstep',
    gold: true,
  },
];

export default function QuickActions({ onOpen }) {
  return (
    <div
      className={`${container} relative mt-px grid grid-cols-2 bg-soft-2 md:grid-cols-4`}
    >
      {actions.map((a, i) => {
        const Icon = a.icon;
        return (
          <button
            key={a.key}
            onClick={() => onOpen(a.key)}
            className={cn(
              'animate-fade-up flex items-center gap-3 border-0 border-r border-b border-line-2 bg-transparent px-4 py-5 text-left transition duration-300 hover:bg-[#dfe9f4] max-[760px]:px-4 md:border-b-0 md:px-3.5 md:py-5 lg:gap-4 lg:px-7 lg:py-9 [&>svg:last-child]:ml-auto [&>svg:last-child]:shrink-0 [&>svg:last-child]:transition-transform hover:[&>svg:last-child]:translate-x-[3px] hover:[&>svg:last-child]:-translate-y-[3px] max-[1100px]:[&>svg:last-child]:hidden',
              a.gold && 'border-0 bg-[#2c5282] text-white hover:bg-[#244a78]',
            )}
            style={{ animationDelay: `${0.7 + i * 0.1}s` }}
          >
            <Icon className="w-5 shrink-0 stroke-[1.3] lg:w-7" />
            <span>
              <strong className="block text-sm font-medium md:text-base">{a.title}</strong>
              <small
                className={cn(
                  'mt-1.5 block text-[13px] leading-snug text-muted',
                  a.gold && 'text-line',
                )}
              >
                {a.sub}
              </small>
            </span>
            <ArrowUpRight size={17} />
          </button>
        );
      })}
    </div>
  );
}
