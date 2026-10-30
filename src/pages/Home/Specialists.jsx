import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Star, ChevronRight } from 'lucide-react';
import { images, doctors } from '../../data';
import { container, buttonClass, textLink, eyebrow } from '../../styles/ui';

export default function Specialists({ onOpen }) {
  return (
    <section
      id="doctors"
      className={`${container} section specialists py-16 md:py-[94px] lg:py-[130px]`}
    >
      <div className="section-heading mb-7 flex items-end justify-between gap-10 max-[760px]:block lg:mb-14">
        <div>
          <span className={eyebrow}>GOOD HANDS. KIND HEARTS.</span>
          <h2 className="m-0">
            Care begins with
            <br />
            the right expert.
          </h2>
        </div>
        <div className="heading-description max-w-[420px] pb-1 max-[760px]:mt-5 lg:max-w-[500px]">
          <p className="mb-3.5 max-[760px]:text-base">
            Finding someone who understands makes all the difference. Explore our
            specialties and request a consultation with the right care team.
          </p>
          <div className="section-heading-actions mt-2 flex flex-col items-start gap-4 max-[760px]:w-full">
            <button className={textLink} onClick={() => onOpen('search')}>
              Find a doctor <ArrowUpRight size={17} />
            </button>
            <Link
              to="/doctors"
              className={buttonClass('dark', 'gap-2 tracking-wide max-[760px]:w-full max-[760px]:justify-center')}
            >
              View all doctors <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="expert-feature grid overflow-hidden rounded-[9px] bg-soft max-[760px]:grid-cols-1 md:grid-cols-[1.1fr_1fr]">
        <img
          src={images.consult}
          alt="A patient speaking with a caring medical professional"
          loading="lazy"
          className="h-[290px] w-full object-cover md:h-[420px] lg:h-[560px]"
        />
        <div className="p-7 md:p-9 lg:px-16 lg:py-[72px]">
          <span className={eyebrow}>PERSONAL CARE, SHARED PURPOSE</span>
          <h3 className="text-[30px] font-medium leading-snug md:text-[38px]">
            Not just a consultation.
            <br />
            A conversation.
          </h3>
          <p className="max-[760px]:text-base">
            Time to listen. Space to ask questions. Support to understand what comes
            next. We believe better care starts with you.
          </p>
          <button className={buttonClass('dark')} onClick={() => onOpen('appointment')}>
            Request a consultation <ArrowUpRight size={17} />
          </button>
          <small className="mt-4 block text-[13px] text-muted">
            Demo site · No real doctor directory is connected.
          </small>
        </div>
      </div>

      <div className="doctor-preview mt-12 border-t border-line pt-9 lg:mt-16 lg:pt-12">
        <div className="doctor-preview-head mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-semibold tracking-[-0.5px]">
            Meet a few of our specialists
          </h3>
          <Link to="/doctors" className={`${textLink} gap-3 text-accent`}>
            Browse all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 max-[1100px]:grid-cols-2 md:grid-cols-3">
          {doctors.slice(0, 3).map((d) => (
            <Link
              to="/doctors"
              key={d.id}
              className="doctor-preview-card group relative flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 transition duration-250 hover:-translate-y-0.5 hover:border-[#c5d8eb] hover:shadow-[0_14px_32px_rgba(10,22,51,0.10)] lg:px-6 lg:py-5"
            >
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="h-[60px] w-[60px] shrink-0 rounded-full bg-soft object-cover lg:h-[72px] lg:w-[72px]"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <strong className="font-display text-[17px] font-semibold tracking-[-0.2px] text-ink">
                  {d.name}
                </strong>
                <small className="text-[15px] font-medium text-accent">{d.specialty}</small>
                <span className="mt-1 inline-flex items-center gap-1 text-[13px] text-muted">
                  <Star size={13} className="fill-accent stroke-accent text-accent" />{' '}
                  {d.rating} · {d.exp} yrs
                </span>
              </div>
              <ChevronRight
                className="shrink-0 text-[#8a9ab3] transition group-hover:translate-x-1"
                size={18}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
