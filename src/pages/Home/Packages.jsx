import { ArrowUpRight, HeartPulse } from 'lucide-react';
import { container, buttonClass, textLink, eyebrow } from '../../styles/ui';

export default function Packages({ onOpen }) {
  return (
    <section
      id="packages"
      className={`${container} packages section grid grid-cols-1 items-center gap-8 py-16 md:grid-cols-[1.2fr_1fr] md:gap-[60px] md:py-[94px] lg:gap-[110px] lg:py-[130px]`}
    >
      <div>
        <span className={eyebrow}>A HEALTHIER START</span>
        <h2>
          A little prevention.
          <br />
          A lot of peace of mind.
        </h2>
        <p className="mb-7 max-w-[395px] max-[760px]:text-base">
          Explore preventive care options tailored to your stage of life. Ask our
          team about available screenings and health check packages.
        </p>
        <button className={buttonClass('dark')} onClick={() => onOpen('packages')}>
          Explore health packages <ArrowUpRight size={17} />
        </button>
      </div>
      <div className="package-card relative overflow-hidden rounded-lg bg-soft p-8 md:px-9 md:py-8 lg:p-[46px_52px]">
        <span className={eyebrow}>WELLNESS, MADE SIMPLE</span>
        <HeartPulse
          size={54}
          strokeWidth={1}
          className="animate-heartbeat absolute right-8 top-10 text-accent"
        />
        <h3 className="mt-11 text-[46px] font-medium leading-[1.2]">
          Make time
          <br />
          for yourself.
        </h3>
        <p className="text-base">Your next chapter starts with taking care of you.</p>
        <span className="my-6 block h-px bg-line-2" />
        <button className={textLink} onClick={() => onOpen('appointment')}>
          Plan your health check <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
}
