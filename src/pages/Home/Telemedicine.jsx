import { ArrowUpRight } from 'lucide-react';
import { container, buttonClass, eyebrow } from '../../styles/ui';

export default function Telemedicine({ onOpen }) {
  return (
    <section id="telemedicine" className="telemedicine bg-soft-2 py-12 md:py-16 lg:py-[100px]">
      <div
        className={`${container} tele-layout grid grid-cols-1 items-center gap-4 md:grid-cols-[1.2fr_1fr] md:gap-[60px] lg:gap-[100px]`}
      >
        <div>
          <span className={eyebrow}>CLOSER, WHEREVER YOU ARE</span>
          <h2 className="m-0 text-[31px] md:text-[45px]">
            Expert advice.
            <br />
            From the comfort of home.
          </h2>
        </div>
        <div>
          <p className="mb-6 text-[#5a6c80] max-[760px]:text-base">
            Start a conversation about remote care. Request an online consultation
            and let our team help you take the next step.
          </p>
          <button className={buttonClass('dark')} onClick={() => onOpen('telemedicine')}>
            Request an online consultation <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
