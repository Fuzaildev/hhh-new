import { useEffect, useRef, useState } from 'react';
import {
  X,
  Search,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { departments } from '../../data';
import { buttonClass, iconButton, eyebrow } from '../../styles/ui';

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const titles = {
  search: 'Find your specialist',
  portal: 'Your patient portal',
  contact: 'We’re here to listen',
  collection: 'Care at your doorstep',
  telemedicine: 'Connect from home',
  appointment: 'Make time for your health',
  packages: 'Your wellness journey',
};

const field =
  'w-full min-w-0 rounded-md border border-line-2 bg-[#f5f8fc] px-3.5 py-3 text-[17px] text-ink';

export default function Modal({ modal, setModal, filter, setFilter }) {
  const dialog = useRef(null);
  const previousFocus = useRef(null);
  const [sent, setSent] = useState(false);
  const [search, setSearch] = useState('');

  const close = () => setModal(null);

  useEffect(() => {
    if (!modal) return;
    previousFocus.current = document.activeElement;
    setSent(false);
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => dialog.current?.querySelector('button')?.focus(), 0);
    const key = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') {
        const items = dialog.current?.querySelectorAll(
          'button,input,select,textarea,a[href]',
        );
        if (!items?.length) return;
        const f = items[0];
        const l = items[items.length - 1];
        if (e.shiftKey && document.activeElement === f) {
          e.preventDefault();
          l.focus();
        } else if (!e.shiftKey && document.activeElement === l) {
          e.preventDefault();
          f.focus();
        }
      }
    };
    window.addEventListener('keydown', key);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', key);
      previousFocus.current?.focus();
    };
  }, [modal]);

  if (!modal) return null;

  const filtered = departments.filter(
    ([name]) =>
      (filter === 'All specialties' || name === filter) &&
      name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="animate-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-navy/65 p-6 backdrop-blur-[5px] max-[760px]:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="animate-modal relative max-h-[90dvh] w-full max-w-[520px] overflow-y-auto rounded-[14px] bg-surface p-11 shadow-[0_25px_120px_#0003] max-[760px]:rounded-[10px] max-[760px]:px-6 max-[760px]:pb-6 max-[760px]:pt-9 lg:w-[640px] lg:max-w-none lg:p-14"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        ref={dialog}
      >
        <button
          className={`${iconButton} absolute right-4 top-4`}
          aria-label="Close dialog"
          onClick={close}
        >
          <X />
        </button>
        <span className={`${eyebrow} max-[760px]:mt-2.5`}>
          LET&apos;S TAKE THE NEXT STEP
        </span>
        <h2
          id="dialog-title"
          className="mb-4 max-w-[90%] font-display text-[31px] font-medium tracking-[-1px] leading-tight md:text-[41px]"
        >
          {titles[modal] || modal}
        </h2>

        {modal === 'search' ? (
          <>
            <p className="text-[17px]">Browse departments and request a consultation.</p>
            <div className="relative my-5 mb-3">
              <Search size={18} className="absolute left-3.5 top-3.5 text-[#8a9ab3]" />
              <input
                className={`${field} pl-[42px]`}
                autoComplete="off"
                aria-label="Search departments"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search a department…"
              />
            </div>
            <select
              className={`${field} mb-2.5`}
              aria-label="Specialty filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>All specialties</option>
              {departments.map(([n]) => (
                <option key={n}>{n}</option>
              ))}
            </select>
            <div className="max-h-[270px] overflow-y-auto">
              {filtered.length ? (
                filtered.map(([name, Icon]) => (
                  <button
                    key={name}
                    className="flex w-full items-center gap-3.5 border-0 border-b border-line bg-transparent px-1 py-3.5 text-left text-base transition hover:translate-x-1 hover:bg-soft/60"
                    onClick={() => {
                      setFilter(name);
                      setModal('appointment');
                    }}
                  >
                    <Icon size={22} className="text-accent" />
                    <span>{name}</span>
                    <ArrowRight size={17} className="ml-auto" />
                  </button>
                ))
              ) : (
                <p>No matching departments. Try another search.</p>
              )}
            </div>
            <p className="mt-3 rounded bg-soft-2 p-3 text-[13px] leading-[1.7] text-[#8a9ab3]">
              Specialty browsing demo. No live doctor availability is connected.
            </p>
          </>
        ) : modal === 'portal' ? (
          <>
            <p className="text-[17px]">Your health information deserves a secure home.</p>
            <div className="my-5 rounded-lg bg-soft p-7 text-center">
              <ShieldCheck size={35} className="mx-auto text-accent" />
              <h3 className="mt-4 text-[19px]">Secure portal integration required</h3>
              <p className="text-base">
                This frontend does not collect passwords or display medical records.
                Connect your approved authentication and patient records provider to
                enable this feature.
              </p>
            </div>
            <button className={buttonClass('dark')} onClick={() => setModal('contact')}>
              Contact the care team <ArrowUpRight size={17} />
            </button>
          </>
        ) : sent ? (
          <div className="py-5 text-center" role="status">
            <CheckCircle2 size={48} className="mx-auto text-accent" />
            <h3 className="mt-5">Your demo request is complete.</h3>
            <p className="text-base">
              Validation was successful. Nothing has been sent or stored. Connect a
              booking API to enable real appointment requests.
            </p>
            <button className={buttonClass('dark')} onClick={close}>
              Back to the website <ArrowRight size={17} />
            </button>
          </div>
        ) : (
          <>
            <p className="text-[17px]">
              {modal === 'collection'
                ? 'Request a preferred collection time.'
                : modal === 'contact'
                  ? 'Leave a message for the care team.'
                  : 'Choose a convenient time to start your care journey.'}
            </p>
            <form
              className="mt-4 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="grid gap-2 text-[15px] font-semibold">
                Full name
                <input
                  className={field}
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Your full name"
                />
              </label>
              <label className="grid gap-2 text-[15px] font-semibold">
                Email address
                <input
                  className={field}
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>
              {modal !== 'contact' && (
                <>
                  <label className="grid gap-2 text-[15px] font-semibold">
                    Specialty
                    <select
                      className={field}
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      required
                    >
                      <option value="All specialties">General consultation</option>
                      {departments.map(([n]) => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2 text-[15px] font-semibold">
                    Preferred date
                    <input className={field} required type="date" min={todayISO()} name="date" />
                  </label>
                </>
              )}
              {modal === 'contact' && (
                <label className="grid gap-2 text-[15px] font-semibold">
                  Message
                  <textarea
                    className={field}
                    required
                    rows={3}
                    placeholder="How can we help? Please do not include sensitive medical information."
                  />
                </label>
              )}
              <p className="m-0 rounded bg-soft-2 p-3 text-[13px] leading-[1.7] text-[#8a9ab3]">
                Frontend demo only. Please use fictional details. No information is
                sent or saved.
              </p>
              <button className={buttonClass('dark')} type="submit">
                Submit demo request <ArrowUpRight size={18} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
