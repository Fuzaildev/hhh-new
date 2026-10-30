import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { images } from '../../data';
import { container, buttonClass } from '../../styles/ui';

export default function Hero({ onOpen }) {
  return (
    <section
      id="home"
      className="hero relative isolate min-h-[590px] overflow-clip bg-[#3a4a5f] md:min-h-[660px] lg:min-h-[690px]"
    >
      <img
        src={images.hero}
        alt="Doctor listening attentively to an older patient"
        className="animate-hero-zoom absolute inset-0 z-[-2] h-full w-full object-cover object-[50%_43%] max-[760px]:object-[60%_center] lg:object-[50%_40%]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(90deg,rgba(15,28,55,.78),rgba(15,28,55,.44)_43%,rgba(15,28,55,.03)_80%)] max-[760px]:bg-[linear-gradient(90deg,#0a1633c9,#0a163355)]" />
      <div
        className={`${container} hero-content py-14 text-surface max-[760px]:py-12 lg:py-[88px] [&>*]:animate-fade-up [&>*:nth-child(1)]:delay-100 [&>*:nth-child(2)]:delay-[220ms] [&>*:nth-child(3)]:delay-[380ms] [&>*:nth-child(4)]:delay-[520ms] [&>*:nth-child(5)]:delay-[660ms]`}
      >
        <h1 className="my-6 font-display text-[51px] font-medium leading-[1.12] tracking-[-2.6px] md:text-[80px] md:leading-[1.1] md:tracking-[-3.3px]">
          The ultimate
          <br />
          destination for
          <br />
          your <em className="not-italic text-sky">wellbeing.</em>
        </h1>
        <p className="mb-7 max-w-[310px] text-base leading-[1.85] text-line md:mb-9 md:max-w-[560px] md:text-[17px]">
          Expert care. Genuine compassion. A healthier you.
          <br className="hidden md:inline" /> Your journey to better health starts
          with us.
        </p>
        <button
          className={buttonClass('cream', '[&>svg]:transition-transform hover:[&>svg]:translate-x-[3px] hover:[&>svg]:-translate-y-[3px]')}
          onClick={() => onOpen('appointment')}
        >
          Find your care <ArrowUpRight size={18} />
        </button>
        <div className="mt-9 flex items-center gap-3 text-[15px] text-line lg:mt-10">
          <ShieldCheck size={18} />
          <span>People first. Always.</span>
          <span className="animate-line-grow ml-2.5 h-px w-[70px] bg-[#7a8ba3]" />
        </div>
      </div>
    </section>
  );
}
