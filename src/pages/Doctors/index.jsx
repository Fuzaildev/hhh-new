import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Modal from '../../components/ui/Modal';
import { useModal } from '../../hooks/useModal';
import { doctors } from '../../data';
import { container, buttonClass } from '../../styles/ui';
import DoctorsHero from './DoctorsHero';
import DoctorsStats from './DoctorsStats';
import DoctorsToolbar from './DoctorsToolbar';
import DoctorCard from './DoctorCard';
import DoctorsCta from './DoctorsCta';

export default function DoctorsPage() {
  const { modal, setModal, filter, setFilter, open } = useModal();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('rating');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    document.title = 'Our doctors · Happy Healthy Hospital';
  }, []);

  const filtered = doctors
    .filter((d) => {
      const okDept = filter === 'All specialties' || d.dept === filter;
      const q = query.trim().toLowerCase();
      const okQ =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.specialty.toLowerCase().includes(q);
      return okDept && okQ;
    })
    .sort((a, b) => {
      if (sort === 'rating') return b.rating - a.rating;
      if (sort === 'exp') return b.exp - a.exp;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <>
      <Header active="doctors" onOpen={open} />
      <main id="main" tabIndex={-1}>
        <DoctorsHero query={query} setQuery={setQuery} />
        <DoctorsStats />
        <section className={`${container} docs-main py-[42px] pb-16 md:py-[60px] md:pb-[90px] lg:py-20 lg:pb-[110px]`}>
          <DoctorsToolbar
            filter={filter}
            setFilter={setFilter}
            sort={sort}
            setSort={setSort}
          />
          <p className="mb-7 text-base text-muted">
            {filtered.length} specialist{filtered.length !== 1 ? 's' : ''} available
          </p>
          <div className="docs-grid grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {filtered.map((d) => (
              <DoctorCard key={d.id} doctor={d} onOpen={open} />
            ))}
            {filtered.length === 0 && (
              <div className="docs-empty col-span-full flex flex-col items-center gap-3.5 px-5 py-20 text-center">
                <Search size={32} className="text-accent opacity-60" />
                <h3 className="text-2xl font-semibold text-ink">
                  No specialists match your search.
                </h3>
                <p className="max-w-[380px] text-[17px] text-muted">
                  Try a different name, specialty, or clear the filters.
                </p>
                <button
                  className={buttonClass('dark')}
                  onClick={() => {
                    setQuery('');
                    setFilter('All specialties');
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>
        <DoctorsCta onOpen={open} />
      </main>
      <Footer onOpen={open} />
      <Modal
        modal={modal}
        setModal={setModal}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
}
