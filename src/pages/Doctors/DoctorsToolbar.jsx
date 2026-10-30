import { departments } from '../../data';
import { cn } from '../../utils/cn';

export default function DoctorsToolbar({ filter, setFilter, sort, setSort }) {
  return (
    <div className="docs-toolbar mb-6 flex flex-wrap items-center justify-between gap-6 max-[760px]:flex-col max-[760px]:items-stretch">
      <div
        className="docs-chips flex max-w-full flex-wrap items-center gap-2 overflow-x-auto pb-1 max-[760px]:gap-1.5"
        role="tablist"
        aria-label="Filter by department"
      >
        <button
          className={cn(
            'inline-flex items-center whitespace-nowrap rounded-[30px] border px-4 py-2 text-[15px] font-medium transition active:scale-95 max-[760px]:px-3 max-[760px]:py-1.5 max-[760px]:text-[13px]',
            filter === 'All specialties'
              ? 'border-ink bg-ink text-surface'
              : 'border-line-2 bg-surface text-muted hover:border-sky hover:text-ink',
          )}
          onClick={() => setFilter('All specialties')}
        >
          All
        </button>
        {departments.map(([n]) => (
          <button
            key={n}
            className={cn(
              'inline-flex items-center whitespace-nowrap rounded-[30px] border px-4 py-2 text-[15px] font-medium transition active:scale-95 max-[760px]:px-3 max-[760px]:py-1.5 max-[760px]:text-[13px]',
              filter === n
                ? 'border-ink bg-ink text-surface'
                : 'border-line-2 bg-surface text-muted hover:border-sky hover:text-ink',
            )}
            onClick={() => setFilter(n)}
          >
            {n}
          </button>
        ))}
      </div>
      <label className="docs-sort flex items-center gap-2.5 text-[15px] font-medium text-muted max-[760px]:justify-between">
        <span>Sort by</span>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="cursor-pointer rounded-[30px] border border-line-2 bg-surface px-3.5 py-2 text-[15px] font-medium text-ink outline-none focus-visible:border-accent"
        >
          <option value="rating">Top rated</option>
          <option value="exp">Most experienced</option>
          <option value="name">Name (A–Z)</option>
        </select>
      </label>
    </div>
  );
}
