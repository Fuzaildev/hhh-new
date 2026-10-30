import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Search, AlignJustify, X, ArrowUpRight } from 'lucide-react';
import Logo from '../ui/Logo';
import ScrollProgress from '../ui/ScrollProgress';
import { nav } from '../../data';
import { cn } from '../../utils/cn';
import { container, iconButton } from '../../styles/ui';

export default function Header({ active, onOpen }) {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <>
      <a
        className="fixed left-4 top-[-80px] z-[200] rounded-[30px] bg-ink px-5 py-3 text-sm font-semibold text-white transition-[top] duration-200 focus:top-4"
        href="#main"
      >
        Skip to content
      </a>
      <header
        className={cn(
          'header sticky top-0 z-20 bg-surface/92 backdrop-blur-[14px] backdrop-saturate-150 transition-shadow duration-300',
          scrolled && 'scrolled shadow-[0_10px_30px_-18px_rgba(10,22,51,0.35)]',
        )}
      >
        <div
          className={cn(
            container,
            'masthead-collapse flex items-center justify-between border-b border-line py-6 transition-[max-height,padding,opacity] duration-[450ms] max-[760px]:border-0 max-[760px]:py-4 lg:max-h-[140px]',
          )}
        >
          <Logo />
          <span className="hidden text-lg italic text-accent min-[901px]:inline">
            A little care. A healthier tomorrow.
          </span>
          <div className="flex shrink-0 items-center gap-4 max-[760px]:gap-2 max-[480px]:gap-2 max-[360px]:gap-1.5">
            <button
              className="flex h-11 w-11 items-center justify-center gap-2.5 rounded-[30px] border-0 bg-transparent text-ink transition-colors hover:text-accent max-[900px]:p-0 min-[901px]:h-auto min-[901px]:w-auto min-[901px]:bg-ink min-[901px]:px-5 min-[901px]:py-3 min-[901px]:text-white lg:px-[26px] lg:py-[15px]"
              aria-label="Contact us"
              onClick={() => onOpen('contact')}
            >
              <Phone size={15} />
              <span className="hotline-label hidden min-[901px]:inline">
                Let&apos;s talk
              </span>
            </button>
            <button
              className={cn(iconButton, 'hidden hover:[&>svg]:-rotate-12 hover:[&>svg]:scale-110 [&>svg]:transition-transform md:grid')}
              aria-label="Search specialties"
              onClick={() => onOpen('search')}
            >
              <Search size={20} />
            </button>
            <button
              className={cn(
                iconButton,
                'grid h-11 w-11 rounded-none p-0 text-ink transition-colors hover:text-accent max-[900px]:grid min-[901px]:hidden',
                menu && 'text-accent',
              )}
              aria-label={menu ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menu}
              aria-controls="primary-navigation"
              onClick={() => setMenu(!menu)}
            >
              {menu ? (
                <X size={22} strokeWidth={2.2} />
              ) : (
                <AlignJustify size={22} strokeWidth={2.2} />
              )}
            </button>
          </div>
        </div>
        <nav
          id="primary-navigation"
          className={cn(
            container,
            'items-center gap-5 py-[19px] text-base max-[900px]:absolute max-[900px]:inset-x-0 max-[900px]:top-full max-[900px]:z-30 max-[900px]:w-full max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:gap-0 max-[900px]:bg-surface max-[900px]:px-5 max-[900px]:py-3 max-[900px]:shadow-[0_16px_30px_rgba(10,22,51,0.14)] lg:gap-10',
            menu ? 'flex max-[900px]:flex' : 'hidden min-[901px]:flex',
          )}
          aria-label="Main navigation"
        >
          {nav.map(([name, to, id]) => {
            const classes = cn(
              'relative whitespace-nowrap after:absolute after:inset-x-0 after:bottom-[-19px] after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-350 hover:after:scale-x-100 max-[900px]:px-2.5 max-[900px]:py-3 max-[900px]:after:hidden',
              active === id && 'after:scale-x-100',
            );
            return to.startsWith('/') ? (
              <Link key={id} to={to} className={classes} onClick={() => setMenu(false)}>
                {name}
              </Link>
            ) : (
              <a key={id} href={to} className={classes} onClick={() => setMenu(false)}>
                {name}
              </a>
            );
          })}
          <button
            className="ml-auto flex items-center gap-2.5 border-0 bg-transparent text-base text-accent max-[900px]:m-0 max-[900px]:px-2.5 max-[900px]:py-3 max-[1100px]:hidden min-[901px]:flex [&>svg]:transition-transform hover:[&>svg]:translate-x-[3px] hover:[&>svg]:-translate-y-[3px]"
            onClick={() => onOpen('appointment')}
          >
            Book an appointment <ArrowUpRight size={15} />
          </button>
        </nav>
        <ScrollProgress />
      </header>
    </>
  );
}
