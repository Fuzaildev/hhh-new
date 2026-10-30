import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { container, eyebrowLight } from '../../styles/ui';

export default function Contact({ onOpen }) {
  return (
    <section id="contact" className="contact-strip bg-ink py-14 text-surface md:py-[58px] lg:py-[88px]">
      <div
        className={`${container} contact-layout grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-[60px] max-[760px]:[&>*:first-child]:col-span-2`}
      >
        <div>
          <span className={eyebrowLight}>WE&apos;RE HERE TO HELP</span>
          <h2 className="m-0 text-[32px] md:text-[45px]">
            Here for you,
            <br />
            every step.
          </h2>
        </div>
        <div className="max-[760px]:border-0 max-[760px]:pl-0 md:border-l md:border-white/20 md:pl-10 lg:pl-12">
          <MapPin size={24} className="stroke-[1.3] text-sky" />
          <h3 className="mb-2 mt-4 text-[17px] font-medium">Visit us</h3>
          <p className="m-0 text-sm text-[#c5d2e0] md:text-base">
            Clinic location to be added
            <br />
            before launch.
          </p>
        </div>
        <div className="max-[760px]:border-0 max-[760px]:pl-0 md:border-l md:border-white/20 md:pl-10 lg:pl-12">
          <Phone size={24} className="stroke-[1.3] text-sky" />
          <h3 className="mb-2 mt-4 text-[17px] font-medium">Let&apos;s talk</h3>
          <button
            className="mb-1 flex gap-3.5 border-0 bg-transparent p-0 text-base text-surface"
            onClick={() => onOpen('contact')}
          >
            Send an enquiry <ArrowUpRight size={16} />
          </button>
          <p className="m-0 text-sm text-[#c5d2e0] md:text-base">
            We&apos;d love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}
