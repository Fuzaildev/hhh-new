import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { services } from '../../data';
import { container, textLink } from '../../styles/ui';

export default function Services({ onOpen }) {
  return (
    <section id="services" className={`${container} section py-16 md:py-[94px] lg:py-[130px]`}>
      <div className="section-heading mb-7 flex items-end justify-between gap-10 max-[760px]:block lg:mb-14">
        <div>
          <h2 className="m-0">
            Comprehensive
            <br />
            care services
          </h2>
        </div>
        <div className="heading-description max-w-[420px] pb-1 max-[760px]:mt-5 lg:max-w-[500px]">
          <p className="mb-3.5 max-[760px]:text-base">
            From everyday wellness to specialized treatment, discover care designed
            around you. Because your health deserves our complete attention.
          </p>
          <a href="#departments" className={textLink}>
            Explore our services <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-6 lg:gap-8">
        {services.map((s, i) => (
          <article className="service-card" key={s.title}>
            <button
              className="image-wrap group relative block w-full overflow-hidden rounded-lg border-0 bg-cream p-0"
              onClick={() => onOpen(s.title)}
              aria-label={`Learn about ${s.title}`}
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="h-[270px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[242px] lg:h-[350px]"
              />
              <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-surface transition duration-400 group-hover:rotate-45 group-hover:scale-110 lg:h-[54px] lg:w-[54px]">
                <ArrowUpRight size={21} />
              </span>
              <span className="absolute left-4 top-4 rounded-full bg-ink/40 px-2.5 py-1.5 text-[15px] text-white">
                0{i + 1}
              </span>
            </button>
            <h3 className="mb-2 mt-5 text-[23px] lg:mb-3 lg:mt-7">{s.title}</h3>
            <p className="m-0 max-w-[95%] text-base">{s.copy}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-6 max-[760px]:gap-4">
        <span className="h-0.5 w-14 bg-line md:w-[95px]">
          <i className="block h-full w-[35%] bg-accent not-italic" />
        </span>
        <span className="text-[13px] text-muted">
          Thoughtful care, at every stage of life.
        </span>
        <a
          className="ml-auto grid h-9 w-9 place-items-center rounded-full border border-line-3"
          href="#departments"
          aria-label="Explore departments"
        >
          <ArrowRight size={19} />
        </a>
      </div>
    </section>
  );
}
