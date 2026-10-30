import { ArrowUpRight, Star, Award, Languages } from 'lucide-react';
import { buttonClass } from '../../styles/ui';
import { cn } from '../../utils/cn';

export default function DoctorCard({ doctor, onOpen }) {
  const { name, specialty, bio, rating, exp, langs, avail, img } = doctor;
  const availableToday = avail === 'Today';

  return (
    <article className="doc-card group relative flex flex-col overflow-hidden rounded-[14px] border border-line bg-surface transition duration-250 hover:-translate-y-1.5 hover:border-[#c5d8eb] hover:shadow-[0_22px_48px_rgba(10,22,51,0.12)] animate-fade-up">
      <div className="doc-card-top relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-soft to-[#e6eef7] px-5 pb-7 pt-9">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,110,165,.10),transparent_50%)]" />
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="relative z-[1] h-[100px] w-[100px] rounded-full border-4 border-surface bg-line object-cover shadow-[0_8px_24px_rgba(10,22,51,0.18)] md:h-[120px] md:w-[120px] md:border-[5px] lg:h-[140px] lg:w-[140px]"
        />
        <span
          className={cn(
            'absolute right-3.5 top-3.5 z-[2] rounded-[30px] px-2.5 py-1.5 text-[13px] font-semibold tracking-wide backdrop-blur-md',
            availableToday
              ? 'border border-[rgba(15,157,88,0.4)] bg-[rgba(46,196,124,0.18)] text-[#0f9d58]'
              : 'border border-line-2 bg-white/85 text-muted',
          )}
        >
          {availableToday ? '● Available today' : `Next: ${avail}`}
        </span>
      </div>
      <div className="doc-card-body flex flex-1 flex-col px-5 py-5 md:px-[22px] md:pb-6 md:pt-[22px]">
        <h3 className="mb-1 text-[19px] font-semibold tracking-[-0.4px] text-ink md:text-[22px]">
          {name}
        </h3>
        <span className="mb-2.5 text-[15px] font-semibold uppercase tracking-wide text-accent">
          {specialty}
        </span>
        <p className="mb-4 flex-1 text-base leading-relaxed text-muted">{bio}</p>
        <div className="mb-4 flex flex-wrap items-center gap-3.5 border-y border-[#f0f4f8] py-3">
          <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-ink">
            <Star size={14} className="fill-accent stroke-accent text-accent" /> {rating}
          </span>
          <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-ink">
            <Award size={14} className="stroke-[1.6] text-accent" /> {exp} yrs exp
          </span>
          <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-ink">
            <Languages size={14} className="stroke-[1.6] text-accent" /> {langs.length} langs
          </span>
        </div>
        <div className="doc-actions flex flex-col gap-2.5 md:flex-row">
          <button
            className={buttonClass('dark', 'flex-1 justify-center gap-1.5 px-3.5 py-3 text-[15px]')}
            onClick={() => onOpen('appointment')}
          >
            Book <ArrowUpRight size={16} />
          </button>
          <button
            className={buttonClass('border', 'shrink-0 justify-center px-3.5 py-3 text-[15px] max-[760px]:w-full')}
            onClick={() => onOpen('telemedicine')}
          >
            Tele consult
          </button>
        </div>
      </div>
    </article>
  );
}
