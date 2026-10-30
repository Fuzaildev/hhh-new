import { Link } from 'react-router-dom';
import { ArrowLeft, Search, X } from 'lucide-react';
import { container, eyebrowLight } from '../../styles/ui';

export default function DoctorsHero({ query, setQuery }) {
  return (
    <section className="docs-hero relative isolate flex min-h-[460px] items-center overflow-hidden bg-navy-2 max-[760px]:min-h-0 lg:min-h-[580px]">
      <div className="pointer-events-none absolute inset-0 z-[-2] bg-[radial-gradient(circle_at_80%_20%,rgba(59,110,165,.45),transparent_55%),radial-gradient(circle_at_10%_90%,rgba(138,180,216,.25),transparent_50%),linear-gradient(135deg,#0a1633_0%,#1a365d_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[60px_60px] [mask-image:radial-gradient(circle_at_60%_40%,#000_30%,transparent_80%)]" />
      <div
        className={`${container} docs-hero-content py-[60px] text-surface max-[760px]:py-[50px] md:py-[90px] lg:py-[120px] [&>*]:animate-fade-up [&>*:nth-child(2)]:delay-100 [&>*:nth-child(3)]:delay-200 [&>*:nth-child(4)]:delay-300 [&>*:nth-child(5)]:delay-400`}
      >
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1.5 rounded-[30px] border border-white/12 bg-white/6 px-3.5 py-2 text-[15px] text-[#c5d8eb] backdrop-blur-md transition hover:bg-white/12"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
        <span className={eyebrowLight}>
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-[2px]" />{' '}
          MEET THE TEAM
        </span>
        <h1 className="my-4 font-display text-[38px] font-medium tracking-[-1.6px] md:my-5 md:text-[65px] md:tracking-[-2.4px] lg:text-[78px] lg:tracking-[-3px]">
          Specialists who put
          <br />
          <em className="not-italic text-sky">you</em> first.
        </h1>
        <p className="mb-6 max-w-[560px] text-[17px] leading-[1.7] text-line md:mb-9 md:text-lg">
          Search across departments, compare experience and languages, and request a
          consultation with the right expert — all in one place.
        </p>
        <div className="docs-search flex max-w-[560px] items-center gap-3.5 rounded-[14px] bg-surface px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,.25)] transition duration-200 focus-within:-translate-y-0.5 focus-within:shadow-[0_20px_55px_rgba(0,0,0,.32),0_0_0_3px_rgba(138,180,216,.45)] max-[760px]:gap-2.5 max-[760px]:px-[18px] max-[760px]:py-3.5">
          <Search size={20} className="shrink-0 text-accent" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or specialty…"
            className="min-w-0 flex-1 border-0 bg-transparent py-1 text-[17px] text-ink outline-none placeholder:text-[#8a9ab3]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="grid h-7 w-7 place-items-center rounded-full border-0 bg-soft text-muted"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
