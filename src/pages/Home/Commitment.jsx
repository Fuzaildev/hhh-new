import {
  ArrowUpRight,
  Hospital,
  Users,
  Clock3,
  ShieldCheck,
} from 'lucide-react';
import { images } from '../../data';
import { container, buttonClass, eyebrowLight } from '../../styles/ui';

const values = [
  [Hospital, 'Complete care', 'A connected approach to your health.'],
  [Users, 'Expert teams', 'Specialists working together for you.'],
  [Clock3, 'Care that fits', 'Simple, convenient appointment requests.'],
  [
    ShieldCheck,
    'Patient-first approach',
    'Respect, compassion, and clear communication.',
  ],
];

export default function Commitment() {
  return (
    <section id="about" className="commitment relative isolate bg-navy-2">
      <img
        src={images.team}
        alt="A doctor and nurse caring for a senior patient"
        loading="lazy"
        className="absolute inset-0 z-[-2] h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(90deg,#0a1633ed,#0a1633bf)]" />
      <div
        className={`${container} py-14 text-white max-[760px]:py-14 md:py-[72px] lg:py-[120px]`}
      >
        <span className={eyebrowLight}>MORE THAN HEALTHCARE</span>
        <div className="commitment-heading grid grid-cols-1 items-start gap-0 md:grid-cols-2 md:gap-[90px]">
          <h2 className="text-[36px] md:text-[58px]">
            Committed to
            <br />
            <em className="not-italic text-sky">quality healthcare.</em>
          </h2>
          <div>
            <p className="mb-5 text-base text-line-3 md:text-[17px]">
              Behind every treatment is a person. Behind every person is a story.
              We&apos;re here to care for both — with expertise, empathy, and a
              commitment to doing what&apos;s right.
            </p>
            <a href="#contact" className={buttonClass('outline')}>
              Get to know us <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="values-grid mt-9 grid grid-cols-2 border-t border-white/20 lg:mt-12 lg:grid-cols-4">
          {values.map(([Icon, title, desc], i) => (
            <div
              key={title}
              className={`group pt-6 pr-4 max-[760px]:pb-3 max-[760px]:even:border-l max-[760px]:even:border-white/20 max-[760px]:even:pl-5 max-[760px]:[&:nth-child(n+3)]:border-t max-[760px]:[&:nth-child(n+3)]:border-white/20 md:pr-6 lg:pt-10 ${i > 0 ? 'md:border-l md:border-white/20 md:pl-6' : ''}`}
            >
              <Icon
                size={27}
                strokeWidth={1}
                className="text-sky transition duration-400 group-hover:-translate-y-1"
              />
              <h3 className="mb-2 mt-4 text-base font-medium tracking-normal md:text-[17px]">
                {title}
              </h3>
              <p className="m-0 text-[13px] text-[#9ba9bc] md:text-[15px]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
