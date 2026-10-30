import { ArrowUpRight } from 'lucide-react';
import { departments } from '../../data';
import { container, buttonClass, eyebrow } from '../../styles/ui';

export default function Departments({ onOpen, setFilter }) {
  return (
    <section id="departments" className="department-section bg-soft py-14 md:py-[85px] lg:py-[120px]">
      <div
        className={`${container} department-layout grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.85fr] md:gap-9 lg:gap-[90px]`}
      >
        <div>
          <span className={eyebrow}>EXPERTISE YOU CAN TRUST</span>
          <h2>
            Explore our
            <br />
            departments
          </h2>
          <p className="mb-6 max-w-[350px] max-[760px]:text-base md:max-w-[270px] lg:max-w-[360px]">
            A connected team of specialists, working together to put your health
            first.
          </p>
          <button className={buttonClass('dark')} onClick={() => onOpen('search')}>
            Find your specialist <ArrowUpRight size={17} />
          </button>
          <div className="mt-10 hidden items-start gap-3.5 text-[15px] leading-[1.8] text-muted md:flex">
            <span className="text-[42px] leading-none text-accent">✳</span>
            <span>
              A better kind of care.
              <br />
              For a better quality of life.
            </span>
          </div>
        </div>
        <div className="department-grid grid grid-cols-2 gap-2.5 min-[481px]:grid-cols-3 md:gap-3 lg:gap-4">
          {departments.map(([name, Icon]) => (
            <button
              className="department-card group relative min-h-[135px] min-w-0 rounded-md border border-[#d3dce8] bg-[#f8fafc] p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:bg-[#e0e8f0] max-[480px]:px-2.5 md:min-h-[140px] md:p-5 lg:min-h-[200px] lg:px-6 lg:py-7"
              key={name}
              onClick={() => {
                setFilter(name);
                onOpen('search');
              }}
            >
              <Icon
                size={35}
                strokeWidth={1}
                className="mb-4 text-accent transition duration-400 group-hover:scale-110 group-hover:-rotate-[5deg] max-[760px]:mb-3.5 max-[760px]:w-7"
              />
              <span className="block max-w-none text-[13px] leading-snug break-words md:max-w-[130px] md:text-[15px] lg:max-w-[200px]">
                {name}
              </span>
              <ArrowUpRight
                className="absolute right-3 top-4 text-[#8a9ab3] transition duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-accent max-[760px]:right-2 max-[760px]:top-2.5 max-[760px]:w-3"
                size={16}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
