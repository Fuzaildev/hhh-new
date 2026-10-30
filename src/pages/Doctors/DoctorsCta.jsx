import { ArrowUpRight } from 'lucide-react';
import { container, buttonClass, eyebrowLight } from '../../styles/ui';

export default function DoctorsCta({ onOpen }) {
  return (
    <section className="docs-cta relative overflow-hidden bg-navy-2 py-12 text-surface md:py-[70px] lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(59,110,165,.35),transparent_50%),radial-gradient(circle_at_5%_95%,rgba(138,180,216,.20),transparent_55%)]" />
      <div
        className={`${container} docs-cta-inner relative z-[1] grid grid-cols-1 items-center gap-8 md:grid-cols-[1.3fr_1fr] md:gap-9 lg:gap-[60px]`}
      >
        <div>
          <span className={eyebrowLight}>CAN&apos;T DECIDE?</span>
          <h2 className="mb-3.5 text-[31px] tracking-[-1.6px] text-surface md:text-5xl lg:text-[48px]">
            We&apos;ll help you find
            <br />
            the right specialist.
          </h2>
          <p className="text-[17px] leading-[1.7] text-[#c5d2e0]">
            Tell us what you need and our care team will recommend the best fit for
            you.
          </p>
        </div>
        <div className="docs-cta-actions flex flex-col gap-3.5">
          <button
            className={buttonClass('cream', 'justify-between px-6 py-4 text-[17px] max-[760px]:w-full')}
            onClick={() => onOpen('contact')}
          >
            Talk to our care team <ArrowUpRight size={17} />
          </button>
          <button
            className={buttonClass('outline', 'justify-between px-6 py-4 text-[17px] max-[760px]:w-full')}
            onClick={() => onOpen('search')}
          >
            Browse departments <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
