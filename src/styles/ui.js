import { cn } from '../utils/cn';

export const container = 'container-page';

export const btn = {
  base: 'inline-flex items-center justify-center gap-4 rounded-[28px] border-0 px-[22px] py-[15px] text-base font-medium leading-normal transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(26,54,93,0.12)] active:scale-[0.97] lg:gap-9 lg:px-8 lg:py-[19px]',
  cream: 'bg-[#e6eef7] text-ink',
  dark: 'bg-ink text-surface',
  outline: 'border border-[#7a8ba3] bg-transparent text-white',
  border: 'border border-line-3 bg-transparent',
};

export function buttonClass(variant = 'dark', className = '') {
  return cn(btn.base, btn[variant], className);
}

export const eyebrow =
  'mb-5 block text-[13px] font-semibold tracking-[2px] text-accent lg:mb-6.5';

export const eyebrowLight = cn(eyebrow, 'text-[#c5d8eb]');

export const textLink =
  'inline-flex items-center gap-3 border-0 bg-transparent p-0 text-base font-semibold hover:text-accent [&>svg:last-child]:transition-transform [&>svg:last-child]:duration-300 hover:[&>svg:last-child]:translate-x-[3px] hover:[&>svg:last-child]:-translate-y-[3px]';

export const iconButton =
  'grid place-items-center rounded-full border-0 bg-transparent p-2';
