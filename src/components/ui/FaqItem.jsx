import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function FaqItem({ q, a, i }) {
  const [open, setOpen] = useState(null);
  const isOpen = open === i;

  return (
    <div className={cn('faq-item border-b border-[#d3dce8]', isOpen && 'is-open')}>
      <button
        id={`faq-b${i}`}
        aria-controls={`faq-p${i}`}
        onClick={() => setOpen(isOpen ? null : i)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-5 border-0 bg-transparent py-5 text-left text-base max-[760px]:text-base lg:py-7 lg:text-[17px] [&>svg]:shrink-0 [&>svg]:transition-transform [&>svg]:duration-400"
      >
        {q}
        {isOpen ? <Minus size={18} className="rotate-180" /> : <Plus size={18} />}
      </button>
      <div
        className="faq-panel"
        id={`faq-p${i}`}
        role="region"
        aria-labelledby={`faq-b${i}`}
      >
        <div>
          <p className="m-0 max-w-[90%] pb-6 text-base">{a}</p>
        </div>
      </div>
    </div>
  );
}
